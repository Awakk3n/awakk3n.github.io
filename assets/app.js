/* THE PRODUCT FIELD — shared site shell.
   Exposes window.FieldSite: DOM helpers, storage, reading progress, theme and
   the search-highlight behaviour used by both the chapter reader and resources. */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  /* ---- Constants ---- */
  var THEME = window.FIELD_THEME || { storageKey: 'field-theme', colors: { dark: '#080d14', light: '#eeece3' } };
  var PROGRESS_KEY = 'field-progress';
  var READ_THRESHOLD = 0.95;          // scroll depth at which a chapter counts as read
  var THEME_SWAP_FRAMES = 2;          // frames to hold transitions off while tokens swap
  var SEARCH_WORD_LIMIT = 8;
  var SEARCH_FIELDS = '#chapter-search, #book-search, #resource-search, #global-search';
  var TYPING_TARGET = /^(INPUT|TEXTAREA|SELECT)$/;

  /* ---- DOM helpers ---- */
  function $(selector, context) { return (context || document).querySelector(selector); }
  function $$(selector, context) { return Array.prototype.slice.call((context || document).querySelectorAll(selector)); }

  var HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (character) { return HTML_ESCAPES[character]; });
  }

  function debounce(fn, wait) {
    var timer = 0;
    return function () {
      var context = this, args = arguments;
      window.clearTimeout(timer);
      timer = window.setTimeout(function () { fn.apply(context, args); }, wait);
    };
  }

  function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function scrollBehavior() { return prefersReducedMotion() ? 'auto' : 'smooth'; }

  /* ---- Storage (always guarded: private mode and blocked storage must not throw) ---- */
  var progressCache = null;

  function readJSON(key, fallback) {
    try {
      var parsed = JSON.parse(localStorage.getItem(key) || 'null');
      return parsed && typeof parsed === 'object' ? parsed : fallback;
    } catch (error) { return fallback; }
  }

  function writeJSON(key, value) {
    if (key === PROGRESS_KEY) progressCache = null;
    try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (error) { return false; }
  }

  window.addEventListener('storage', function (event) {
    if (event.key === null || event.key === PROGRESS_KEY) progressCache = null;
  });
  window.addEventListener('pageshow', function (event) { if (event.persisted) progressCache = null; });

  /* Reading progress is read on every scroll frame, so it is cached in memory and
     only written back when the value actually changes. Pass `null` to read. */
  function rememberProgress(id, done) {
    if (!progressCache) progressCache = readJSON(PROGRESS_KEY, {});
    if (done === null) return progressCache[id] || 0;
    if (progressCache[id] !== done) {
      progressCache[id] = done;
      writeJSON(PROGRESS_KEY, progressCache);
    }
    return done;
  }

  function isRead(id) { return rememberProgress(id, null) >= READ_THRESHOLD; }

  /* ---- Theme: choice is persisted only when the reader makes one ---- */
  var systemQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;

  function applyTheme(theme) {
    root.dataset.theme = theme;
    var themeColor = $('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', THEME.colors[theme]);
    var toDark = theme === 'light';
    $$('.theme-toggle').forEach(function (button) {
      button.setAttribute('aria-label', toDark ? 'Switch to dark mode' : 'Switch to light mode');
      var glyph = $('.toggle-glyph', button);
      var label = $('.toggle-label', button);
      if (glyph) glyph.textContent = toDark ? '◐' : '☼';
      if (label) label.textContent = toDark ? 'DARK' : 'LIGHT';
    });
  }

  /* Hold every transition off while the tokens swap, so the whole page changes in
     one frame instead of surfaces fading at different speeds. */
  function switchTheme(theme) {
    root.classList.add('theme-switching');
    applyTheme(theme);
    try { localStorage.setItem(THEME.storageKey, theme); } catch (error) { /* non-fatal */ }
    var frames = THEME_SWAP_FRAMES;
    (function release() {
      if (--frames > 0) window.requestAnimationFrame(release);
      else root.classList.remove('theme-switching');
    })();
  }

  applyTheme(root.dataset.theme === 'light' ? 'light' : 'dark');

  $$('.theme-toggle').forEach(function (button) {
    button.addEventListener('click', function () {
      switchTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  });

  // Until the reader chooses, follow the operating system live.
  if (systemQuery) {
    var followSystem = function (event) {
      var chosen = null;
      try { chosen = localStorage.getItem(THEME.storageKey); } catch (error) { /* treat as unset */ }
      if (!chosen) applyTheme(event.matches ? 'light' : 'dark');
    };
    if (systemQuery.addEventListener) systemQuery.addEventListener('change', followSystem);
    else if (systemQuery.addListener) systemQuery.addListener(followSystem);
  }

  /* ---- "/" focuses whichever search field the page has ---- */
  document.addEventListener('keydown', function (event) {
    if (event.key !== '/' || event.ctrlKey || event.metaKey || event.altKey) return;
    var active = document.activeElement;
    if (active && (TYPING_TARGET.test(active.tagName) || active.isContentEditable)) return;
    var search = $(SEARCH_FIELDS);
    if (search) { event.preventDefault(); search.focus(); }
  });

  /* ---- Search terms and in-page highlighting ---- */
  function tokenize(text) {
    return (String(text).toLowerCase().match(/[a-z0-9]+/g) || []).filter(function (token) { return token.length > 1; });
  }

  function wrapMatches(node, words) {
    var text = node.nodeValue, lower = text.toLowerCase(), ranges = [];
    words.forEach(function (word) {
      var at = 0;
      while ((at = lower.indexOf(word, at)) !== -1) { ranges.push([at, at + word.length]); at += word.length; }
    });
    if (!ranges.length) return null;
    ranges.sort(function (a, b) { return a[0] - b[0] || a[1] - b[1]; });
    var merged = [];
    ranges.forEach(function (range) {
      var last = merged[merged.length - 1];
      if (last && range[0] <= last[1]) last[1] = Math.max(last[1], range[1]);
      else merged.push(range);
    });
    var fragment = document.createDocumentFragment(), cursor = 0, first = null;
    merged.forEach(function (range) {
      if (range[0] > cursor) fragment.appendChild(document.createTextNode(text.slice(cursor, range[0])));
      var mark = document.createElement('mark');
      mark.className = 'search-hit';
      mark.textContent = text.slice(range[0], range[1]);
      fragment.appendChild(mark);
      if (!first) first = mark;
      cursor = range[1];
    });
    if (cursor < text.length) fragment.appendChild(document.createTextNode(text.slice(cursor)));
    node.parentNode.replaceChild(fragment, node);
    return first;
  }

  /* When a page is opened from full-text search (?find=…), show a dismissible
     banner above `container` and highlight every term inside it.
     Returns the first highlighted <mark>, or null. */
  function applySearchContext(container, skipSelector) {
    var term = (new URLSearchParams(location.search).get('find') || '').trim();
    if (!term || !container) return null;

    var banner = document.getElementById('search-context');
    if (!banner) {
      banner = document.createElement('aside');
      banner.id = 'search-context';
      banner.className = 'search-context';
      banner.setAttribute('role', 'status');
      container.parentNode.insertBefore(banner, container);
    }
    banner.innerHTML = '<span>OPENED FROM SEARCH</span><strong></strong><button type="button" aria-label="Clear search highlighting">Clear highlight</button>';
    banner.querySelector('strong').textContent = term;
    banner.querySelector('button').addEventListener('click', function () {
      $$('mark.search-hit', container).forEach(function (mark) {
        var parent = mark.parentNode;
        parent.replaceChild(document.createTextNode(mark.textContent), mark);
        parent.normalize();
      });
      banner.remove();
    });

    var words = tokenize(term).slice(0, SEARCH_WORD_LIMIT);
    if (!words.length) return null;

    var skip = 'script,style,code,pre,mark' + (skipSelector ? ',' + skipSelector : '');
    var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || !node.nodeValue.trim() || node.parentElement.closest(skip)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var textNodes = [], first = null;
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(function (node) {
      var mark = wrapMatches(node, words);
      if (mark && !first) first = mark;
    });
    return first;
  }

  /* ---- Library data ---- */
  window.FieldSite = {
    $: $,
    $$: $$,
    esc: esc,
    debounce: debounce,
    tokenize: tokenize,
    prefersReducedMotion: prefersReducedMotion,
    scrollBehavior: scrollBehavior,
    readJSON: readJSON,
    writeJSON: writeJSON,
    rememberProgress: rememberProgress,
    isRead: isRead,
    READ_THRESHOLD: READ_THRESHOLD,
    applySearchContext: applySearchContext,

    // The bundled catalogue works on GitHub Pages and from file://; books.json is the fallback.
    loadBooks: function () {
      if (Array.isArray(window.FIELD_BOOKS)) return Promise.resolve(window.FIELD_BOOKS);
      return fetch('books.json').then(function (response) {
        if (!response.ok) throw new Error('Could not load books.json');
        return response.json();
      });
    },

    // audio-links.js is the editable, browser-local source of truth.
    loadAudio: function () { return Promise.resolve(window.FIELD_AUDIO_LINKS || {}); },

    allChapters: function (books) {
      return books.reduce(function (all, book) {
        return all.concat(book.chapters.map(function (chapter) {
          chapter.bookId = book.id;
          chapter.bookTitle = book.title;
          chapter.bookSlug = book.slug;
          return chapter;
        }));
      }, []);
    },

    thumbId: function (url) {
      try {
        var parsed = new URL(url);
        var host = parsed.hostname.toLowerCase();
        if (host === 'youtu.be' || host.endsWith('.youtu.be')) return parsed.pathname.split('/').filter(Boolean)[0] || '';
        if (host === 'youtube.com' || host.endsWith('.youtube.com')) {
          var video = parsed.searchParams.get('v');
          if (video) return video;
          var match = parsed.pathname.match(/\/(?:shorts|embed|live)\/([^/?]+)/);
          return match ? match[1] : '';
        }
        return '';
      } catch (error) { return ''; }
    }
  };
})();
