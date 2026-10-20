(function () {
  'use strict';
  var F = window.FieldSite;
  if (!F) return;

  var NOTES_KEY = 'field-notes';
  var BOOKMARKS_KEY = 'field-bookmarks';
  var LAST_READ_KEY = 'field-last-read';
  var PROGRESS_WRITE_STEP = 0.01;     // persist reading progress per whole percent, not per scroll event
  var NOTES_SAVE_DELAY_MS = 350;
  var SEARCH_SCROLL_DELAY_MS = 180;
  var TEXT_SIZE = { min: 15, max: 24, fallback: 19 };

  var query = new URLSearchParams(location.search);
  var id = query.get('chapter');
  var books = [];
  var chapters = [];
  var chapter;
  var book;
  var audio = {};
  var content = F.$('#chapter-content');
  var outline = F.$('#chapter-outline');

  function slug(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-');
  }

  var progressBar = F.$('#progress-bar');
  var progressLabel = F.$('#progress-percent');
  var doneButton = F.$('#mark-done');
  var shownPercent = -1;
  var shownDone = null;
  var progressQueued = false;

  function updateProgress() {
    progressQueued = false;
    if (!chapter) return;
    var scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    var current = Math.min(1, Math.max(0, window.scrollY / scrollable));
    var saved = F.rememberProgress(chapter.id, null);
    if (current - saved >= PROGRESS_WRITE_STEP) F.rememberProgress(chapter.id, current);
    var value = Math.max(current, saved);
    var percent = Math.round(value * 100);
    if (percent !== shownPercent) {          // touch the DOM only when something changed
      shownPercent = percent;
      progressBar.style.transform = 'scaleX(' + value + ')';
      progressLabel.textContent = percent + '%';
    }
    var done = F.isRead(chapter.id);
    if (done !== shownDone) {
      shownDone = done;
      doneButton.classList.toggle('done', done);
      doneButton.innerHTML = done ? '<span aria-hidden="true">✓</span> Read' : '<span aria-hidden="true">○</span> Mark as read';
    }
  }

  function queueProgressUpdate() {
    if (progressQueued) return;
    progressQueued = true;
    window.requestAnimationFrame(updateProgress);
  }

  function makeOutline() {
    var headings = F.$$('h2, h3', content);
    outline.innerHTML = '';
    if (!headings.length) {
      outline.innerHTML = '<span class="outline-placeholder">No section headings in this chapter.</span>';
      return;
    }
    var linkById = Object.create(null);
    headings.forEach(function (heading, index) {
      if (!heading.id) heading.id = 'section-' + slug(heading.textContent) + '-' + index;
      var link = document.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent;
      link.className = heading.tagName.toLowerCase() === 'h3' ? 'level-3' : '';
      linkById[heading.id] = link;
      outline.appendChild(link);
    });

    var activeId = '';
    function keepActiveLinkVisible(link, preferSmooth) {
      if (!link || !outline) return;
      var navRect = outline.getBoundingClientRect();
      var linkRect = link.getBoundingClientRect();
      var horizontal = window.getComputedStyle(outline).flexDirection === 'row';
      var margin = 14;
      var target = horizontal ? outline.scrollLeft : outline.scrollTop;
      var visibleStart = horizontal ? navRect.left + margin : navRect.top + margin;
      var visibleEnd = horizontal ? navRect.right - margin : navRect.bottom - margin;
      var itemStart = horizontal ? linkRect.left : linkRect.top;
      var itemEnd = horizontal ? linkRect.right : linkRect.bottom;
      if (itemStart < visibleStart) target -= (visibleStart - itemStart);
      else if (itemEnd > visibleEnd) target += (itemEnd - visibleEnd);
      var max = horizontal ? outline.scrollWidth - outline.clientWidth : outline.scrollHeight - outline.clientHeight;
      target = Math.max(0, Math.min(max, target));
      var current = horizontal ? outline.scrollLeft : outline.scrollTop;
      if (Math.abs(target - current) < 2) return;
      // Keep TOC auto-follow immediate: repeated smooth scroll requests can lag while the reader moves quickly.
      var options = { behavior: 'auto' };
      if (horizontal) options.left = target; else options.top = target;
      // Scroll only the outline's own strip/sidebar, never the chapter body or page.
      outline.scrollTo(options);
    }

    function setActive(heading) {
      if (!heading) return;
      var changed = activeId !== heading.id;
      activeId = heading.id;
      if (changed) {
        F.$$('#chapter-outline a').forEach(function (link) {
          var active = link.hash === '#' + activeId;
          link.classList.toggle('current', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
      // Recheck visibility even when the active section did not change (e.g. after rotation).
      // Scroll only the outline strip/sidebar, never the reading page itself.
      keepActiveLinkVisible(linkById[activeId], changed);
    }
    var ticking = false;
    function updateActiveFromScroll() {
      ticking = false;
      if (!headings.length) return;
      var threshold = Math.min(window.innerHeight * .3, 260);
      var active = headings[0];
      for (var i = 0; i < headings.length; i++) {
        var top = headings[i].getBoundingClientRect().top;
        if (top <= threshold) active = headings[i];
        else break;
      }
      setActive(active);
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateActiveFromScroll);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    if ('ResizeObserver' in window) {
      var outlineResizeObserver = new ResizeObserver(function () { updateActiveFromScroll(); });
      outlineResizeObserver.observe(content);
      outlineResizeObserver.observe(outline);
    }
    outline.addEventListener('click', function (event) {
      var link = event.target.closest('a[href^="#"]');
      if (!link) return;
      var target = content.querySelector(link.getAttribute('href'));
      if (target) setActive(target);
    });
    updateActiveFromScroll();
  }

  function prepareContentLinks() {
    F.$$('#chapter-content a').forEach(function (link) {
      var href = link.getAttribute('href') || '';
      if (/^https?:/i.test(href)) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
    });
  }

  function finishRender(html) {
    content.innerHTML = html;
    prepareContentLinks();
    makeOutline();
    updateProgress();
    applySearchContext();
  }

  function applySearchContext() {
    var first = F.applySearchContext(content);
    if (first && query.get('fromSearch') === '1') {
      window.setTimeout(function () {
        first.scrollIntoView({ behavior: F.scrollBehavior(), block: 'center' });
      }, SEARCH_SCROLL_DELAY_MS);
    }
  }

  function normalizeMarkdown(raw) {
    // Hide the optional Book 3 YAML metadata block in the reader. The source .md is unchanged.
    return raw.replace(/^\uFEFF?---\s*\r?\n[\s\S]*?\r?\n---\s*\r?\n/, '');
  }

  function loadMarkdownRenderer() {
    if (window.markdownit) return Promise.resolve();
    return new Promise(function (resolve) {
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/markdown-it@14.1.0/dist/markdown-it.min.js';
      script.async = true;
      script.onload = resolve;
      script.onerror = resolve;
      document.head.appendChild(script);
    });
  }

  function fallbackToMarkdownSource() {
    // Kept as a fallback for newly added chapters before the generated cache is rebuilt.
    return fetch(chapter.file).then(function (response) {
      if (!response.ok) throw Error('Could not fetch chapter source');
      return response.text();
    }).then(function (raw) {
      return loadMarkdownRenderer().then(function () {
        if (window.markdownit) {
          finishRender(window.markdownit({ html: false, typographer: false, breaks: false }).render(normalizeMarkdown(raw)));
        } else {
          var pre = document.createElement('pre');
          pre.textContent = normalizeMarkdown(raw);
          content.innerHTML = '';
          content.appendChild(pre);
          makeOutline();
          updateProgress();
          var error = F.$('#content-error');
          error.hidden = false;
          error.innerHTML = 'Markdown styling could not load. The chapter is shown as plain text. <a href="' + F.esc(chapter.file) + '" target="_blank" rel="noopener">Open the Markdown source</a>.';
        }
      });
    }).catch(function () {
      var error = F.$('#content-error');
      error.hidden = false;
      error.innerHTML = 'The chapter could not be loaded. Re-run <code>python build_site_data.py</code> after adding a chapter, or open the Markdown source directly: <a href="' + F.esc(chapter.file) + '" target="_blank" rel="noopener">' + F.esc(chapter.file.split('/').pop()) + '</a>.';
      content.innerHTML = '';
    });
  }

  function loadChapterContent() {
    // If this content was already loaded on the current document, use it.
    if (window.FIELD_CHAPTER_HTML && typeof window.FIELD_CHAPTER_HTML[chapter.id] === 'string') {
      finishRender(window.FIELD_CHAPTER_HTML[chapter.id]);
      return;
    }
    if (!chapter.contentFile) {
      fallbackToMarkdownSource();
      return;
    }
    // Loading a chapter as a script works both on GitHub Pages and from file://.
    var script = document.createElement('script');
    script.src = chapter.contentFile;
    script.async = true;
    script.onload = function () {
      var html = window.FIELD_CHAPTER_HTML && window.FIELD_CHAPTER_HTML[chapter.id];
      if (typeof html === 'string') finishRender(html);
      else fallbackToMarkdownSource();
    };
    script.onerror = fallbackToMarkdownSource;
    document.head.appendChild(script);
  }

  function loadYouTubeAPI() {
    if (window.YT && typeof window.YT.Player === 'function') return Promise.resolve(window.YT);
    if (window.FIELD_YOUTUBE_API_PROMISE) return window.FIELD_YOUTUBE_API_PROMISE;

    window.FIELD_YOUTUBE_API_PROMISE = new Promise(function (resolve, reject) {
      var settled = false;
      var timer = window.setTimeout(function () {
        if (!settled) { settled = true; reject(new Error('YouTube player API timed out')); }
      }, 12000);
      var previousReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () {
        if (typeof previousReady === 'function') {
          try { previousReady(); } catch (e) {}
        }
        if (settled) return;
        settled = true;
        window.clearTimeout(timer);
        if (window.YT && typeof window.YT.Player === 'function') resolve(window.YT);
        else reject(new Error('YouTube player API did not initialize'));
      };
      var script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      script.onerror = function () {
        if (!settled) {
          settled = true;
          window.clearTimeout(timer);
          reject(new Error('YouTube player API could not be loaded'));
        }
      };
      document.head.appendChild(script);
    });
    return window.FIELD_YOUTUBE_API_PROMISE;
  }

  function showAudioFallback(stage, videoId, message) {
    stage.classList.remove('is-playing');
    stage.classList.add('is-error');
    stage.replaceChildren();
    var fallback = document.createElement('div');
    fallback.className = 'audio-fallback';
    var note = document.createElement('p');
    note.textContent = message;
    var link = document.createElement('a');
    link.href = 'https://www.youtube.com/watch?v=' + videoId;
    link.textContent = 'Open this audio on YouTube';
    link.setAttribute('aria-label', 'Open this chapter audio on YouTube in this tab');
    fallback.appendChild(note);
    fallback.appendChild(link);
    stage.appendChild(fallback);
  }

  function makeAudio() {
    var panel = F.$('#audio-panel');
    if (!panel || !chapter) return;
    var url = audio[chapter.id];
    panel.innerHTML = '';
    panel.hidden = true;
    panel.classList.remove('audio-panel-expanded');
    if (!url) return; // Keep the reading surface uncluttered until audio exists.

    var safeUrl;
    var videoId = '';
    try {
      safeUrl = new URL(url, location.href);
      var host = safeUrl.hostname.toLowerCase();
      var youtubeHost = host === 'youtube.com' || host.endsWith('.youtube.com') || host === 'youtu.be' || host.endsWith('.youtu.be');
      if (!/^https?:$/.test(safeUrl.protocol) || !youtubeHost) throw Error('Not a YouTube URL');
      videoId = F.thumbId(safeUrl.href);
      if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) throw Error('Could not read a valid YouTube video ID');
    } catch (e) {
      panel.hidden = false;
      panel.className = 'audio-panel audio-panel-error';
      panel.textContent = 'This chapter’s audio link is invalid. Check the entry in assets/audio-links.js.';
      return;
    }

    panel.className = 'audio-panel';
    panel.hidden = false;
    var stage = document.createElement('div');
    stage.className = 'audio-stage';
    stage.setAttribute('data-video-id', videoId);
    var poster = document.createElement('button');
    poster.type = 'button';
    poster.className = 'audio-poster';
    poster.setAttribute('aria-label', 'Play audio for ' + chapter.title + ' on this page');
    var image = document.createElement('img');
    image.className = 'audio-thumb';
    image.src = 'https://img.youtube.com/vi/' + videoId + '/hqdefault.jpg';
    image.alt = '';
    image.loading = 'lazy';
    image.onerror = function () { image.remove(); };
    var shade = document.createElement('span');
    shade.className = 'audio-poster-shade';
    shade.setAttribute('aria-hidden', 'true');
    var play = document.createElement('span');
    play.className = 'audio-play-control';
    play.innerHTML = '<span aria-hidden="true">▶</span><b>PLAY AUDIO</b>';
    poster.appendChild(image);
    poster.appendChild(shade);
    poster.appendChild(play);

    // Preload the official API on a real web origin, so the player's creation
    // is likely to happen inside the listening click. Never load it from file://.
    var playerApiPromise = null;
    if (location.protocol === 'http:' || location.protocol === 'https:') {
      playerApiPromise = loadYouTubeAPI();
      playerApiPromise.catch(function () {});
    }

    poster.addEventListener('click', function () {
      panel.classList.add('audio-panel-expanded');

      // YouTube requires a website referrer for embedded playback. A file://
      // preview cannot send one, so replace the raw Error 153 screen with a
      // useful explanation and a same-tab fallback link.
      if (location.protocol === 'file:' || location.origin === 'null') {
        showAudioFallback(stage, videoId, 'You are viewing a local copy. YouTube blocks in-page playback when this local page cannot send the required website referrer (Error 153). Publish the site to GitHub Pages and open its HTTPS address to listen here.');
        return;
      }

      stage.classList.remove('is-error');
      stage.classList.add('is-playing');
      stage.replaceChildren();
      var mount = document.createElement('div');
      mount.className = 'audio-player-mount';
      mount.id = 'field-audio-player-' + chapter.id.replace(/[^a-zA-Z0-9_-]/g, '-');
      stage.appendChild(mount);

      var createPlayer = function (YT) {
        if (!stage.isConnected) return;
        try {
          new YT.Player(mount.id, {
            width: '100%',
            height: '100%',
            videoId: videoId,
            playerVars: {
              autoplay: 1,
              playsinline: 1,
              rel: 0,
              controls: 1,
              enablejsapi: 1,
              origin: location.origin,
              widget_referrer: location.href
            },
            events: {
              onReady: function (event) {
                var frame = event.target && event.target.getIframe ? event.target.getIframe() : null;
                if (frame) {
                  frame.classList.add('audio-iframe');
                  frame.title = 'YouTube audio for ' + chapter.title;
                  frame.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
                  frame.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture; web-share');
                }
                try { event.target.playVideo(); } catch (e) {}
              },
              onError: function (event) {
                var message = 'YouTube could not play this audio here. You can still open the source on YouTube.';
                if (event.data === 153) message = 'YouTube refused the embedded player because it did not receive a website referrer (Error 153). Open the published HTTPS site, and make sure its referrer policy is not set to no-referrer.';
                else if (event.data === 101 || event.data === 150) message = 'This video does not allow embedded playback. Choose a YouTube upload with embedding enabled, or open this one on YouTube.';
                else if (event.data === 100) message = 'This YouTube video is private, unavailable, or has been removed.';
                else if (event.data === 2) message = 'The YouTube URL has an invalid video ID. Check assets/audio-links.js.';
                showAudioFallback(stage, videoId, message);
              }
            }
          });
        } catch (error) {
          showAudioFallback(stage, videoId, 'The YouTube player could not be initialized. Check your connection and try again.');
        }
      };

      (playerApiPromise || loadYouTubeAPI()).then(createPlayer).catch(function () {
        showAudioFallback(stage, videoId, 'The YouTube player could not load. Check your connection, then try again or open the source on YouTube.');
      });
    }, { once: true });
    stage.appendChild(poster);

    var heading = document.createElement('div');
    heading.className = 'audio-heading';
    var label = document.createElement('span');
    label.className = 'audio-overline';
    label.textContent = 'LISTEN ALONG';
    var title = document.createElement('h2');
    title.className = 'audio-title';
    title.textContent = 'Chapter audio';
    var note = document.createElement('p');
    note.className = 'audio-note';
    note.textContent = 'Listen here through YouTube. The audio is streamed by YouTube, not stored on this site.';
    heading.appendChild(label);
    heading.appendChild(title);
    heading.appendChild(note);
    panel.appendChild(heading);
    panel.appendChild(stage);
  }

  function jumpLinks() {
    // Previous/next stays within the current volume instead of jumping into another book.
    var currentIndex = book.chapters.findIndex(function (item) { return item.id === chapter.id; });
    var select = F.$('#chapter-select');
    select.innerHTML = book.chapters.map(function (item) {
      return '<option value="' + F.esc(item.id) + '" ' + (item.id === chapter.id ? 'selected' : '') + '>' + F.esc(item.label + ' — ' + item.title) + '</option>';
    }).join('');
    select.addEventListener('change', function () {
      var target = book.chapters.find(function (item) { return item.id === select.value; });
      if (target) location.href = target.readUrl;
    });
    var previous = currentIndex > 0 ? book.chapters[currentIndex - 1] : null;
    var next = currentIndex >= 0 && currentIndex < book.chapters.length - 1 ? book.chapters[currentIndex + 1] : null;
    [['previous-chapter', previous], ['next-chapter', next]].forEach(function (pair) {
      var element = F.$('#' + pair[0]);
      var item = pair[1];
      if (!item) { element.hidden = true; return; }
      element.hidden = false;
      element.href = item.readUrl;
      element.querySelector('strong').textContent = item.label + ' · ' + item.title;
    });
  }

  F.loadBooks().then(function (loadedBooks) {
    books = loadedBooks;
    chapters = F.allChapters(books);
    chapter = chapters.find(function (item) { return item.id === id; });
    if (!chapter) {
      document.title = 'Chapter not found — The Product Field';
      F.$('#reader-title').textContent = 'Chapter not found';
      F.$('#reader-title-small').textContent = 'Chapter unavailable';
      F.$('#reader-byline').textContent = '';
      F.$('#reader-num').textContent = 'NOT FOUND';
      F.$('#reader-hero-num').textContent = 'CHAPTER —';
      F.$('#reader-volume-label').textContent = 'LIBRARY / CHAPTERS';
      F.$('#crumb-chapter').textContent = 'Not found';
      F.$('#chapter-select').innerHTML = '<option>Chapter unavailable</option>';
      F.$('#chapter-select').disabled = true;
      F.$('#mark-done').hidden = true;
      F.$('.reader-actions').hidden = true;
      F.$('#chapter-notes').hidden = true;
      F.$('#audio-panel').hidden = true;
      F.$('.chapter-pagination').hidden = true;
      F.$('#chapter-outline').innerHTML = '<span class="outline-placeholder">No chapter outline available.</span>';
      content.innerHTML = '<p>This chapter link is invalid or the chapter has moved. Return to the <a href="index.html#library">library</a> and choose a chapter from its volume index.</p>';
      return;
    }
    book = books.find(function (item) { return item.id === chapter.bookId; });
    document.title = chapter.title + ' — The Product Field';
    F.writeJSON(LAST_READ_KEY, { id: chapter.id, title: chapter.title, book: book.title, url: chapter.readUrl, label: chapter.label, openedAt: Date.now() });
    F.$('#reader-title').textContent = chapter.title;
    F.$('#reader-title-small').textContent = chapter.title;
    F.$('#reader-num').textContent = 'CHAPTER ' + chapter.label;
    F.$('#reader-hero-num').textContent = 'CHAPTER ' + chapter.label;
    F.$('#reader-volume-label').textContent = 'VOLUME / ' + String(book.id).padStart(2, '0');
    F.$('#reader-byline').textContent = book.title + ' · ' + Number(chapter.words || 0).toLocaleString() + ' words';
    F.$('#crumb-book').textContent = book.title;
    F.$('#crumb-book').href = 'book.html?b=' + book.id;
    F.$('#crumb-chapter').textContent = chapter.title;
    F.$('#back-to-book').href = 'book.html?b=' + book.id;
    setBookmarkState();
    setupNotes();
    jumpLinks();
    F.loadAudio().then(function (mapping) { audio = mapping || {}; makeAudio(); });
    F.rememberProgress(chapter.id, F.rememberProgress(chapter.id, null) || 0);
    loadChapterContent();
  }).catch(function () {
    F.$('#reader-title').textContent = 'The library could not be loaded';
    content.innerHTML = '<p>Reload the page. If this is a manually edited copy, rebuild its local data with <code>python build_site_data.py</code>.</p>';
  });

  function getBookmarks() { return F.readJSON(BOOKMARKS_KEY, {}); }
  function setBookmarkState() {
    var button = F.$('#bookmark-chapter');
    if (!button || !chapter) return;
    var saved = !!getBookmarks()[chapter.id];
    button.setAttribute('aria-pressed', saved ? 'true' : 'false');
    button.innerHTML = saved ? '★ <span>Saved</span>' : '☆ <span>Save</span>';
    button.classList.toggle('is-saved', saved);
  }
  var bookmarkButton = F.$('#bookmark-chapter');
  if (bookmarkButton) bookmarkButton.addEventListener('click', function () {
    if (!chapter) return;
    var saved = getBookmarks();
    if (saved[chapter.id]) delete saved[chapter.id]; else saved[chapter.id] = { title: chapter.title, url: chapter.readUrl, book: chapter.bookTitle || '' };
    F.writeJSON(BOOKMARKS_KEY, saved);
    setBookmarkState();
  });
  function showReaderToast(message) {
    var toast = F.$('#reader-toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(showReaderToast.timer);
    showReaderToast.timer = window.setTimeout(function () { toast.classList.remove('is-visible'); }, 2600);
  }

  function setupNotes() {
    var field = F.$('#chapter-note-text');
    var status = F.$('#chapter-note-status');
    if (!field || !chapter) return;

    var notes = F.readJSON(NOTES_KEY, {});
    field.value = typeof notes[chapter.id] === 'string' ? notes[chapter.id] : '';
    status.textContent = field.value ? 'Your notes are saved on this device.' : 'Notes save on this device as you type.';

    var dirty = false;
    function save() {
      if (!dirty) return;
      dirty = false;
      var all = F.readJSON(NOTES_KEY, {});
      all[chapter.id] = field.value;
      status.textContent = F.writeJSON(NOTES_KEY, all) ? 'Saved locally' : 'Could not save in this browser. Export may not be available.';
    }
    var saveSoon = F.debounce(save, NOTES_SAVE_DELAY_MS);
    field.addEventListener('input', function () { dirty = true; status.textContent = 'Saving…'; saveSoon(); });
    field.addEventListener('blur', save);
    window.addEventListener('pagehide', save);      // never lose the last keystrokes
  }

  function currentChapterUrl() {
    var url = new URL(chapter.readUrl, location.href);
    url.hash = '';
    return url.href;
  }

  function revealCopyFallback(url) {
    var panel = F.$('#share-fallback');
    var field = F.$('#share-url');
    if (!panel || !field) { showReaderToast('Could not copy automatically. Open this chapter on the hosted site and try again.'); return; }
    field.value = url;
    panel.hidden = false;
    field.focus(); field.select();
    showReaderToast('The link is selected. Copy it with your device’s copy command.');
  }

  var copyButton = F.$('#copy-chapter-link');
  if (copyButton) copyButton.addEventListener('click', function () {
    if (!chapter) return;
    if (location.protocol === 'file:' || location.origin === 'null') {
      showReaderToast('This local preview has no shareable web address. Publish the site to share this chapter.');
      return;
    }
    var url = currentChapterUrl();
    if (navigator.share) {
      navigator.share({ title: chapter.title + ' — The Product Field', text: 'Read this chapter in The Product Field.', url: url })
        .then(function () { showReaderToast('Share completed.'); })
        .catch(function (error) { if (!error || error.name !== 'AbortError') copyToClipboard(url); });
    } else { copyToClipboard(url); }
  });

  function copyToClipboard(url) {
    if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext) {
      navigator.clipboard.writeText(url).then(function () { showReaderToast('Chapter link copied to clipboard.'); })
        .catch(function () { revealCopyFallback(url); });
      return;
    }
    revealCopyFallback(url);
  }

  var closeShare = F.$('#close-share-fallback');
  if (closeShare) closeShare.addEventListener('click', function () { F.$('#share-fallback').hidden = true; });
  var selectShare = F.$('#select-share-url');
  if (selectShare) selectShare.addEventListener('click', function () {
    var field = F.$('#share-url'); field.focus(); field.select();
    try { if (document.execCommand('copy')) { F.$('#share-fallback').hidden = true; showReaderToast('Chapter link copied.'); return; } } catch (e) {}
    showReaderToast('URL selected. Use your device’s copy command.');
  });
  var printButton = F.$('#print-chapter');
  if (printButton) printButton.addEventListener('click', function () { window.print(); });
  window.addEventListener('scroll', queueProgressUpdate, { passive: true });
  doneButton.addEventListener('click', function () {
    if (!chapter) return;
    var completed = F.isRead(chapter.id);
    F.rememberProgress(chapter.id, completed ? 0 : 1);
    updateProgress();
    if (!completed) window.scrollTo({ top: 0, behavior: F.scrollBehavior() });
  });

  function changeTextSize(delta) {
    var style = document.documentElement.style;
    var current = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--reader-font')) || TEXT_SIZE.fallback;
    style.setProperty('--reader-font', Math.max(TEXT_SIZE.min, Math.min(TEXT_SIZE.max, current + delta)) + 'px');
  }
  F.$('#text-smaller').addEventListener('click', function () { changeTextSize(-1); });
  F.$('#text-larger').addEventListener('click', function () { changeTextSize(1); });
})();
