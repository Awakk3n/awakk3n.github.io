/* THE PRODUCT FIELD — chapter audio (YouTube).

   WHAT THIS DOES
   An "audio-first" listening card. The reader taps Play and the official YouTube player appears
   in place; our UI adds a status line, a saved resume position and a next-chapter prompt.

   WHAT THIS DELIBERATELY DOES NOT DO (YouTube API Services policies, checked 2026-10-20)
   - It never hides, shrinks below 200×200, or covers the player (Required Minimum Functionality).
   - It never separates or isolates the audio, or plays from an off-screen "background" player
     (Developer Policies III.I.7–9). So there is no lock-screen mode: mobile browsers also suspend
     embedded media when the screen locks or the tab is backgrounded, and that cannot be worked around.
   - It never downloads, caches or re-hosts audio (III.E.1).
   - It talks to YouTube only after the reader presses Play (no thumbnail request, no API preload).

   WHY THE PLAYER IS CREATED SYNCHRONOUSLY IN THE TAP
   iOS Safari and Android Chrome only allow unmuted playback that starts from a user gesture. The old
   code created the player asynchronously (after the API script loaded) and then called playVideo()
   from onReady — by then the gesture had expired, so mobile browsers left a silent, paused player.
   Here the <iframe> (with allow="autoplay" and autoplay=1 present at creation) is inserted inside the
   click handler; the IFrame API is attached afterwards, only to report state. If a browser still
   blocks autoplay, onAutoplayBlocked (or a timeout) tells the reader to press play in the player —
   a tap inside the iframe is always a valid gesture.

   Public API: window.FieldAudio.mount(panel, { chapterId, title, url, next }) */
(function () {
  'use strict';

  var F = window.FieldSite;
  if (!F) return;

  var EMBED_HOST = 'https://www.youtube.com';   // privacy-enhanced alternative: https://www.youtube-nocookie.com
  var API_SRC = 'https://www.youtube.com/iframe_api';
  var POSITION_KEY = 'field-audio-pos';
  var API_TIMEOUT_MS = 12000;
  var BLOCKED_HINT_MS = 3500;       // no PLAYING state by now → tell the reader to press play
  var SAVE_EVERY_MS = 5000;
  var MIN_SAVE_SECONDS = 10;        // ignore accidental starts
  var END_MARGIN_SECONDS = 15;      // within this of the end counts as finished
  var STATE = { ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3 };

  var ERROR_MESSAGES = {
    2: 'The video link looks invalid. Check the entry in assets/audio-links.js.',
    5: 'YouTube’s player hit an internal error. Try again, or open the audio on YouTube.',
    100: 'This video is private, unavailable, or has been removed.',
    101: 'This video does not allow embedded playback. Open it on YouTube instead.',
    150: 'This video does not allow embedded playback. Open it on YouTube instead.',
    153: 'YouTube did not receive a website referrer (Error 153). Use the published HTTPS site, and keep the referrer policy at strict-origin-when-cross-origin.'
  };

  /* ---- helpers ---- */
  function formatTime(total) {
    total = Math.max(0, Math.floor(total));
    var h = Math.floor(total / 3600), m = Math.floor((total % 3600) / 60), s = total % 60;
    var mm = h ? String(m).padStart(2, '0') : String(m);
    return (h ? h + ':' : '') + mm + ':' + String(s).padStart(2, '0');
  }

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function readPositions() { return F.readJSON(POSITION_KEY, {}); }
  function savedPosition(id) {
    var entry = readPositions()[id];
    return entry && Number(entry.t) >= MIN_SAVE_SECONDS ? Math.floor(entry.t) : 0;
  }
  function storePosition(id, seconds) {
    var all = readPositions();
    if (seconds >= MIN_SAVE_SECONDS) all[id] = { t: Math.floor(seconds), at: Date.now() };
    else delete all[id];
    F.writeJSON(POSITION_KEY, all);
  }
  function clearPosition(id) {
    var all = readPositions();
    if (all[id]) { delete all[id]; F.writeJSON(POSITION_KEY, all); }
  }

  /* ---- IFrame API (loaded lazily, once, and only after the reader presses Play) ---- */
  var apiPromise = null;
  function loadApi() {
    if (window.YT && typeof window.YT.Player === 'function') return Promise.resolve(window.YT);
    if (apiPromise) return apiPromise;
    apiPromise = new Promise(function (resolve, reject) {
      var done = false;
      var timer = window.setTimeout(function () { if (!done) { done = true; reject(new Error('timeout')); } }, API_TIMEOUT_MS);
      var previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () {
        if (typeof previous === 'function') { try { previous(); } catch (error) { /* not ours */ } }
        if (done) return;
        done = true; window.clearTimeout(timer);
        if (window.YT && typeof window.YT.Player === 'function') resolve(window.YT); else reject(new Error('init'));
      };
      var script = document.createElement('script');
      script.src = API_SRC;
      script.async = true;
      script.onerror = function () { if (!done) { done = true; window.clearTimeout(timer); reject(new Error('load')); } };
      document.head.appendChild(script);
    });
    apiPromise.catch(function () { apiPromise = null; });   // allow a retry on the next attempt
    return apiPromise;
  }

  /* ---- the component ---- */
  function mount(panel, options) {
    if (!panel || !options || !options.url) return;
    panel.replaceChildren();
    panel.className = 'audio-panel';
    panel.hidden = true;

    var videoId = '';
    try {
      var parsed = new URL(options.url, location.href);
      var host = parsed.hostname.toLowerCase();
      var isYouTube = host === 'youtube.com' || host.endsWith('.youtube.com') || host === 'youtu.be' || host.endsWith('.youtu.be');
      if (!/^https?:$/.test(parsed.protocol) || !isYouTube) throw new Error('host');
      videoId = F.thumbId(parsed.href);
      if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) throw new Error('id');
    } catch (error) {
      panel.hidden = false;
      panel.classList.add('audio-panel-error');
      panel.textContent = 'This chapter’s audio link is invalid. Check its entry in assets/audio-links.js.';
      return;
    }

    var chapterId = options.chapterId;
    var watchUrl = 'https://www.youtube.com/watch?v=' + videoId;
    var resumeAt = savedPosition(chapterId);
    var titleId = 'audio-title-' + String(chapterId).replace(/[^a-zA-Z0-9_-]/g, '-');

    /* markup */
    var copy = element('div', 'audio-copy');
    copy.appendChild(element('p', 'audio-overline', '♫ CHAPTER AUDIO'));
    var heading = element('h2', 'audio-title', 'Listen to this chapter');
    heading.id = titleId;
    copy.appendChild(heading);
    copy.appendChild(element('p', 'audio-note', 'Keep this tab open and the player on screen — your browser pauses it when the screen locks or you switch apps.'));

    var actions = element('div', 'audio-actions');
    var playButton = element('button', 'button button-bright audio-play');
    var playIcon = element('span', 'audio-play-icon', '▶\uFE0E');      // \uFE0E: always the plain glyph, never a coloured emoji
    playIcon.setAttribute('aria-hidden', 'true');
    playButton.appendChild(playIcon);
    playButton.appendChild(document.createTextNode(resumeAt ? 'Resume audio · ' + formatTime(resumeAt) : 'Play audio'));
    playButton.type = 'button';
    var sourceLink = element('a', 'audio-source', 'Open on YouTube');
    sourceLink.href = watchUrl;
    sourceLink.target = '_blank';
    sourceLink.rel = 'noopener noreferrer';
    actions.appendChild(playButton);
    actions.appendChild(sourceLink);
    copy.appendChild(actions);

    var status = element('p', 'audio-status');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    copy.appendChild(status);

    var terms = element('p', 'audio-terms');
    var termsLead = document.createTextNode('Plays through YouTube. By pressing play you agree to the ');
    terms.appendChild(termsLead);
    var termsLink = element('a', null, 'YouTube Terms of Service');
    termsLink.href = 'https://www.youtube.com/t/terms';
    termsLink.target = '_blank';
    termsLink.rel = 'noopener noreferrer';
    terms.appendChild(termsLink);
    terms.appendChild(document.createTextNode(' · '));
    var privacyLink = element('a', null, 'Privacy');
    privacyLink.href = 'privacy.html';
    terms.appendChild(privacyLink);
    copy.appendChild(terms);

    var stage = element('div', 'audio-stage');
    stage.hidden = true;

    panel.appendChild(copy);
    panel.appendChild(stage);
    panel.hidden = false;
    panel.setAttribute('aria-labelledby', titleId);

    /* behaviour */
    var started = false, player = null, hintTimer = 0, saveTimer = 0, playing = false;

    function say(message) { status.textContent = message; }
    function clearTimers() { window.clearTimeout(hintTimer); window.clearInterval(saveTimer); hintTimer = saveTimer = 0; }

    function currentTime() {
      try { return player && player.getCurrentTime ? Number(player.getCurrentTime()) || 0 : 0; } catch (error) { return 0; }
    }
    function duration() {
      try { return player && player.getDuration ? Number(player.getDuration()) || 0 : 0; } catch (error) { return 0; }
    }
    function savePosition() {
      if (!player) return;
      var t = currentTime(), total = duration();
      if (total && t >= total - END_MARGIN_SECONDS) clearPosition(chapterId); else storePosition(chapterId, t);
    }

    function showBlockedHint() {
      if (playing) return;
      say('If nothing is playing, press play inside the player below — some phones block autoplay until you tap the player itself.');
    }

    function fail(message) {
      clearTimers();
      stage.replaceChildren();
      stage.classList.add('is-error');
      var box = element('div', 'audio-fallback');
      box.appendChild(element('p', null, message));
      var link = element('a', null, 'Open on YouTube');
      link.href = watchUrl; link.target = '_blank'; link.rel = 'noopener noreferrer';
      box.appendChild(link);
      stage.appendChild(box);
      say('');
    }

    function onState(event) {
      switch (event.data) {
        case STATE.PLAYING:
          playing = true;
          window.clearTimeout(hintTimer);
          say('Playing');
          if (!saveTimer) saveTimer = window.setInterval(savePosition, SAVE_EVERY_MS);
          break;
        case STATE.BUFFERING:
          say('Buffering…');
          break;
        case STATE.PAUSED:
          playing = false;
          window.clearInterval(saveTimer); saveTimer = 0;
          savePosition();
          say('Paused');
          break;
        case STATE.ENDED:
          playing = false;
          clearTimers();
          clearPosition(chapterId);
          say('Finished.');
          if (options.next && options.next.url) {
            var next = element('a', 'audio-next', 'Next: ' + options.next.label + ' · ' + options.next.title);
            next.href = options.next.url;
            status.appendChild(document.createTextNode(' '));
            status.appendChild(next);
          }
          break;
      }
    }

    function attachApi(frame) {
      loadApi().then(function (YT) {
        if (!frame.isConnected) return;
        player = new YT.Player(frame, {
          events: {
            onStateChange: onState,
            onAutoplayBlocked: showBlockedHint,
            onError: function (event) { fail(ERROR_MESSAGES[event.data] || 'YouTube could not play this audio here. You can still open it on YouTube.'); }
          }
        });
      }).catch(function () {
        // The embed itself works without the API; we just lose status and resume tracking.
        if (!playing) say('Use the player’s own controls. (Progress tracking is unavailable right now.)');
      });
    }

    function start() {
      if (started) return;
      started = true;

      if (location.protocol === 'file:' || location.origin === 'null') {
        stage.hidden = false;
        fail('This is a local copy: YouTube refuses to play embeds from pages that cannot send a website referrer (Error 153). Open the published HTTPS site to listen here.');
        return;
      }

      /* All of this must stay synchronous inside the click so the browser counts it as a user gesture. */
      var query = 'enablejsapi=1&playsinline=1&autoplay=1&rel=0&origin=' + encodeURIComponent(location.origin) + (resumeAt ? '&start=' + resumeAt : '');
      var frame = document.createElement('iframe');
      frame.className = 'audio-frame';
      frame.title = 'YouTube player: ' + options.title;
      frame.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture; web-share');
      frame.setAttribute('allowfullscreen', '');
      frame.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      frame.src = EMBED_HOST + '/embed/' + videoId + '?' + query;
      stage.hidden = false;
      stage.appendChild(frame);
      panel.classList.add('is-open');
      actions.hidden = true;
      termsLead.nodeValue = 'Playing through YouTube · '; termsLink.textContent = 'Terms of Service';      // the consent line becomes a short attribution once playing
      say('Starting…');

      var rect = stage.getBoundingClientRect();
      if (rect.top < 0 || rect.bottom > window.innerHeight) stage.scrollIntoView({ block: 'center', behavior: F.scrollBehavior() });

      hintTimer = window.setTimeout(showBlockedHint, BLOCKED_HINT_MS);
      attachApi(frame);
    }

    playButton.addEventListener('click', start);

    // Warm the API on a clear intent signal only (hover/focus/touch), never on page load.
    ['pointerenter', 'focus', 'touchstart'].forEach(function (name) {
      playButton.addEventListener(name, function () { if (!started) loadApi().catch(function () {}); }, { once: true, passive: true });
    });

    window.addEventListener('pagehide', function () { if (started) savePosition(); });
    document.addEventListener('visibilitychange', function () { if (document.hidden && started) savePosition(); });
  }

  window.FieldAudio = { mount: mount };
})();
