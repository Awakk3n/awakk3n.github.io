(function () {
  var B = window.BOOKS || [];
  var q = new URLSearchParams(location.search);
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  var $ = function (id) { return document.getElementById(id); };
  // ---- audio detection (runtime, so dropping a file in audio/ is enough; build data is the fallback) ----
  var AEXT = ['mp3', 'm4a', 'wav', 'ogg'];
  function probe(base, exts, done) {
    var key = 'aud:' + base + ':' + exts.join(), cached = null;
    try { cached = sessionStorage.getItem(key); } catch (e) {}
    if (cached) { done(cached); return; } // Never cache a miss: audio may have been added to the folder since the last visit.
    var i = 0;
    (function next() {
      if (i >= exts.length) { done(null); return; }
      var url = base + '.' + exts[i++], t = new Audio();
      t.preload = 'metadata';
      t.onloadedmetadata = function () { try { sessionStorage.setItem(key, url); } catch (e) {} done(url); };
      t.onerror = next;
      t.src = url;
    })();
  }
  function probeChapter(slug, num, done) {
    // Accept the naming patterns commonly used when audio files are added manually.
    var n = String(num), bases = [
      '../audio/' + slug + '/ch-' + pad(num),
      '../audio/' + slug + '/ch-' + n,
      '../audio/' + slug + '/chapter-' + pad(num),
      '../audio/' + slug + '/chapter-' + n
    ].filter(function (base, i, arr) { return arr.indexOf(base) === i; });
    var i = 0;
    (function nextBase() {
      if (i >= bases.length) { done(null); return; }
      probe(bases[i++], AEXT, function (url) { if (url) done(url); else nextBase(); });
    })();
  }
  // fills c.audio for chapters the build data does not know about (tries every format; results cached per tab session)
  function detectAll(bk, each, finished) {
    var todo = bk.chapters.filter(function (c) { return !c.audio; }), active = 0, idx = 0, left = todo.length;
    if (!left) { finished(); return; }
    function pump() {
      while (active < 6 && idx < todo.length) {
        (function (c) {
          active++;
          probeChapter(bk.slug, c.num, function (url) {
            if (url) { c.audio = url.replace('../', ''); each(c); }
            active--; if (--left === 0) finished(); else pump();
          });
        })(todo[idx++]);
      }
    }
    pump();
  }
  var book = B.filter(function (b) { return String(b.id) === q.get('b'); })[0];

  // ---- landing ----
  if ($('book-grid')) {
    $('book-grid').innerHTML = B.map(function (b) {
      var pp = b.chapters.reduce(function (s, c) { return s + c.pages; }, 0);
      var au = b.chapters.filter(function (c) { return c.audio; }).length;
      return '<a class="card book" href="book.html?b=' + b.id + '"><span class="hb-tag">Book ' + b.id + '</span><h3>' + esc(b.title) + '</h3><p>' + esc(b.subtitle) + '</p>' +
        '<div class="meta"><span><i class="fas fa-file-lines"></i> ' + b.chapters.length + ' chapters</span><span><i class="fas fa-book-open"></i> ' + pp.toLocaleString() + ' pages</span><span><i class="fas fa-headphones"></i> <b data-au="' + b.id + '">' + au + '</b> audio</span></div></a>';
    }).join('');
    B.forEach(function (b) {
      detectAll(b, function () {}, function () {
        var el = document.querySelector('[data-au="' + b.id + '"]');
        if (el) el.textContent = b.chapters.filter(function (c) { return c.audio; }).length;
      });
    });
    return;
  }
  if (!book) { document.querySelector('main').insertAdjacentHTML('beforeend', '<div class="wrap pad"><p>Book not found. <a href="index.html">Back to books</a></p></div>'); return; }

  var crumbs = '<a href="index.html">Books</a> / ';

  // ---- book page ----
  if ($('ch-list')) {
    document.title = book.title + ' | Abhinav';
    $('crumbs').innerHTML = crumbs + 'Book ' + book.id;
    $('b-title').textContent = book.title;
    $('b-sub').textContent = book.subtitle;
    var pages = book.chapters.reduce(function (s, c) { return s + c.pages; }, 0);
    var au = book.chapters.filter(function (c) { return c.audio; }).length;
    var stats = function () {
      var n = book.chapters.filter(function (c) { return c.audio; }).length;
      $('b-stats').innerHTML = '<span>' + book.chapters.length + ' chapters</span><span>' + pages.toLocaleString() + ' pages</span><span>' + n + ' audiobook' + (n === 1 ? '' : 's') + '</span>';
    };
    stats();
    $('b-full').innerHTML = '<div><h3>Entire book</h3><p>Read the complete book as a styled web page, generated directly from Markdown.</p></div>' + ((book.fullMarkdown || book.full)
      ? '<div class="acts">' + (book.fullMarkdown ? '<a class="btn btn-primary btn-sm" href="read.html?b=' + book.id + '&c=full"><i class="fas fa-book-open"></i> Read online</a>' : '') + (book.full ? '<a class="btn btn-ghost btn-sm" href="../pdf/' + book.slug + '/full.pdf" download><i class="fas fa-download"></i> Download PDF</a>' : '') + '</div>'
      : '<span class="soon">Add source-md/' + book.slug + '/book.md</span>');
    $('ch-list').innerHTML = book.chapters.map(function (c) {
      return '<a class="ch-row" data-n="' + c.num + '" href="read.html?b=' + book.id + '&c=' + c.num + '"><span class="n">' + pad(c.num) + '</span><span class="t">' + esc(c.title) + '</span><span class="p">' + (c.pages ? c.pages + ' pp' : '') + '</span><span class="h">' + (c.audio ? '<i class="fas fa-headphones" title="Audiobook available"></i>' : '') + '</span></a>';
    }).join('');
    detectAll(book, function (c) {
      var row = document.querySelector('.ch-row[data-n="' + c.num + '"] .h');
      if (row) row.innerHTML = '<i class="fas fa-headphones" title="Audiobook available"></i>';
      stats();
    }, stats);
    return;
  }

  // ---- reader ----
  var isFull = q.get('c') === 'full';
  var ci = book.chapters.map(function (c) { return c.num; }).indexOf(parseInt(q.get('c'), 10));
  var ch = isFull ? null : book.chapters[ci];
  if (!isFull && !ch) { $('r-title').textContent = 'Chapter not found'; return; }
  var pdf = '../pdf/' + book.slug + '/' + (isFull ? 'full' : 'ch-' + pad(ch.num)) + '.pdf';
  var title = isFull ? book.title + ': Full Book' : pad(ch.num) + '. ' + ch.title;
  document.title = title + ' | Abhinav';
  $('crumbs').innerHTML = crumbs + '<a href="book.html?b=' + book.id + '">Book ' + book.id + '</a> / ' + (isFull ? 'Full book' : 'Chapter ' + pad(ch.num));
  $('r-title').innerHTML = isFull ? esc(title) : '<span>' + pad(ch.num) + '</span> ' + esc(ch.title);
  $('pdf-dl').href = pdf;
  $('pdf-dl').hidden = isFull ? !book.full : ch.pdf === false;
  if (isFull) { $('pdf-dl').hidden = !book.full; $('pdf-pp').textContent = 'Full book · web reader'; }
  $('pdf-pp').textContent = !isFull && ch.pages ? ch.pages + ' pages' : '';

  // ---- Styled Markdown reader content (chapter or complete book), generated by build.py ----
  var prose = $('prose');
  function fallback() {
    if (isFull) { prose.hidden = false; $('pdf-frame').hidden = true; prose.innerHTML = '<p class="muted">The full-book web page has not been generated yet. Add <code>source-md/' + esc(book.slug) + '/book.md</code> and run <code>python3 build.py --skip-pdfs</code>. This reader does not embed the PDF.</p>'; $('pdf-dl').hidden = true; return; }
    if (ch.pdf === false) { prose.hidden = false; prose.innerHTML = '<p class="muted">Chapter text could not be loaded. Rebuild the site with <code>python3 build.py</code> to regenerate its reader content.</p>'; return; }
    prose.hidden = true; var f = $('pdf-frame'); f.hidden = false; f.src = pdf + '#view=FitH';
  }
  window.__ch = function (html) {
    prose.innerHTML = html;
    var hs = prose.querySelectorAll('h2, h3');
    if (hs.length > 2) {
      $('r-toc-list').innerHTML = Array.prototype.map.call(hs, function (h) {
        return '<li class="l' + h.tagName.toLowerCase() + '"><a href="#' + h.id + '">' + esc(h.textContent) + '</a></li>';
      }).join('');
      $('r-toc').hidden = false;
      var tocList = $('r-toc-list');
      var links = tocList.querySelectorAll('a');
      var toc = $('r-toc');
      var activeId = '';
      var updateActiveTopic = function () {
        var cur = hs[0] ? hs[0].id : '';
        hs.forEach(function (h) { if (h.getBoundingClientRect().top < 165) cur = h.id; });
        if (!cur || cur === activeId) return;
        activeId = cur;
        var activeLink = null;
        links.forEach(function (link) {
          var on = link.getAttribute('href') === '#' + cur;
          link.classList.toggle('active', on);
          if (on) activeLink = link;
        });
        // Both the sidebar and (on smaller screens) its inner list can scroll. Keep the
        // active link visible in the innermost rail first, then the outer sidebar, without
        // calling scrollIntoView() (which can unexpectedly move the document itself).
        if (activeLink) {
          [tocList, toc].forEach(function (container) {
            if (!container || container.scrollHeight <= container.clientHeight + 1) return;
            var cr = container.getBoundingClientRect(), lr = activeLink.getBoundingClientRect();
            var topPad = container === toc ? 34 : 6;
            var bottomPad = 8;
            if (lr.top < cr.top + topPad) container.scrollTop -= (cr.top + topPad - lr.top);
            else if (lr.bottom > cr.bottom - bottomPad) container.scrollTop += (lr.bottom - (cr.bottom - bottomPad));
          });
        }
      };
      addEventListener('scroll', updateActiveTopic, { passive: true });
      addEventListener('resize', updateActiveTopic, { passive: true });
      links.forEach(function (link) { link.addEventListener('click', function () { setTimeout(updateActiveTopic, 80); }); });
      updateActiveTopic();
    }
  };
  var sc = document.createElement('script');
  sc.src = '../content/' + book.slug + '/' + (isFull ? 'full' : 'ch-' + pad(ch.num)) + '.js';
  sc.onerror = fallback;
  document.head.appendChild(sc);

  if (!isFull) {
    var nav = '';
    var pv = book.chapters[ci - 1], nx = book.chapters[ci + 1];
    nav += pv ? '<a href="read.html?b=' + book.id + '&c=' + pv.num + '"><i class="fas fa-arrow-left"></i> ' + pad(pv.num) + ' ' + esc(pv.title) + '</a>' : '<span></span>';
    nav += nx ? '<a href="read.html?b=' + book.id + '&c=' + nx.num + '">' + pad(nx.num) + ' ' + esc(nx.title) + ' <i class="fas fa-arrow-right"></i></a>' : '<span></span>';
    $('ch-nav').innerHTML = nav;

    // ---- custom audio player (no native controls, so no browser 3-dot menu) ----
    var player = $('player'), key = 'pos:' + book.slug + ':' + ch.num;
    var speeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2], rate = 1;
    try { rate = parseFloat(localStorage.getItem('audio-speed')); } catch (e) {}
    if (speeds.indexOf(rate) < 0) rate = 1;
    var fmt = function (t) { if (!isFinite(t) || t < 0) return '0:00'; t = Math.floor(t); var h = Math.floor(t / 3600), m = Math.floor(t % 3600 / 60), s = t % 60; return (h ? h + ':' + (m < 10 ? '0' : '') : '') + m + ':' + (s < 10 ? '0' : '') + s; };
    var seek = $('a-seek'), dragging = false;
    var paint = function () {
      var d = player.duration, ok = isFinite(d) && d > 0, pct = ok ? player.currentTime / d * 1000 : 0;
      if (!dragging) seek.value = pct;
      seek.style.setProperty('--p', (pct / 10) + '%');
      $('a-cur').textContent = fmt(player.currentTime);
      $('a-dur').textContent = ok ? fmt(d) : '--:--';
    };
    var show = function (src) {
      $('audio').hidden = false; player.src = src;
      var saved = 0; try { saved = parseFloat(localStorage.getItem(key)) || 0; } catch (e) {}
      var restored = false;
      var onMeta = function () {
        player.playbackRate = rate; paint();
        if (!restored && saved > 5 && isFinite(player.duration) && saved < player.duration - 5) { player.currentTime = saved; restored = true; }
      };
      ['loadedmetadata', 'durationchange', 'canplay', 'seeked'].forEach(function (ev) { player.addEventListener(ev, paint); });
      player.addEventListener('loadedmetadata', onMeta);
      player.addEventListener('durationchange', function () { if (!restored) onMeta(); });
      if (player.readyState >= 1) onMeta();
      player.addEventListener('timeupdate', function () { paint(); try { localStorage.setItem(key, player.currentTime); } catch (e) {} });
      player.addEventListener('play', function () { $('audio').classList.add('playing'); $('a-play').setAttribute('aria-label', 'Pause'); player.playbackRate = rate; });
      player.addEventListener('pause', function () { $('audio').classList.remove('playing'); $('a-play').setAttribute('aria-label', 'Play'); });
      player.addEventListener('ended', function () { $('audio').classList.remove('playing'); try { localStorage.removeItem(key); } catch (e) {} });
      player.addEventListener('error', function () { $('a-dur').textContent = 'error'; });
      $('a-play').onclick = function () { player.paused ? player.play() : player.pause(); };
      $('a-back').onclick = function () { player.currentTime = Math.max(0, player.currentTime - 15); };
      $('a-fwd').onclick = function () { player.currentTime = Math.min(isFinite(player.duration) ? player.duration : 1e9, player.currentTime + 30); };
      seek.addEventListener('input', function () { dragging = true; if (isFinite(player.duration)) player.currentTime = seek.value / 1000 * player.duration; paint(); });
      seek.addEventListener('change', function () { dragging = false; });

      // speed: YouTube-style list, every speed visible at once
      var sBtn = $('a-speed'), sMenu = $('spd-menu');
      var label = function (r) { return r === 1 ? 'Normal' : r + '\u00d7'; };
      var setRate = function (r) {
        rate = r; player.playbackRate = r; sBtn.textContent = r + '\u00d7';
        try { localStorage.setItem('audio-speed', r); } catch (e) {}
        sMenu.querySelectorAll('.opt').forEach(function (x) { x.setAttribute('aria-checked', parseFloat(x.dataset.r) === r); });
      };
      sMenu.innerHTML = '<div class="spd-head">Playback speed</div>' + speeds.map(function (r) {
        return '<button type="button" class="opt" role="menuitemradio" data-r="' + r + '"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg><span>' + label(r) + '</span></button>';
      }).join('');
      var toggle = function (open) {
        sMenu.hidden = !open; sBtn.setAttribute('aria-expanded', open);
        if (open) { var cur = sMenu.querySelector('.opt[aria-checked="true"]'); if (cur) cur.focus(); }
      };
      sBtn.onclick = function (e) { e.stopPropagation(); toggle(sMenu.hidden); };
      sMenu.onclick = function (e) { var t = e.target.closest('.opt'); if (t) { setRate(parseFloat(t.dataset.r)); toggle(false); sBtn.focus(); } };
      sMenu.addEventListener('click', function (e) { e.stopPropagation(); });
      document.addEventListener('click', function () { if (!sMenu.hidden) toggle(false); });
      document.addEventListener('keydown', function (e) {
        if (sMenu.hidden) return;
        var opts = Array.prototype.slice.call(sMenu.querySelectorAll('.opt')), i = opts.indexOf(document.activeElement);
        if (e.key === 'Escape') { toggle(false); sBtn.focus(); }
        else if (e.key === 'ArrowDown') { e.preventDefault(); opts[(i + 1) % opts.length].focus(); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); opts[(i - 1 + opts.length) % opts.length].focus(); }
      });
      setRate(rate);
      document.addEventListener('keydown', function (e) {
        if (e.target.closest && e.target.closest('input,textarea,select,button')) return;
        if (e.code === 'Space' && !$('audio').hidden) { e.preventDefault(); $('a-play').click(); }
      });
      paint();
    };
    if (ch.audio) show('../' + ch.audio);
    else probeChapter(book.slug, ch.num, function (url) { if (url) show(url); else $('audio-none').hidden = false; });
  }
})();
