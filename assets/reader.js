(function () {
  'use strict';
  var F = window.FieldSite;
  if (!F) return;

  var NOTES_KEY = 'field-notes';
  var BOOKMARKS_KEY = 'field-bookmarks';
  var LAST_READ_KEY = 'field-last-read';
  var PROGRESS_WRITE_STEP = 0.01;     // persist reading progress per whole percent, not per scroll event
  var NOTES_SAVE_DELAY_MS = 350;
  var RESUME_MIN = 0.03;               // don't offer "resume" for a few lines of scroll
  var SEARCH_SCROLL_DELAY_MS = 180;
  var TEXT_SIZE = { min: 15, max: 24, fallback: 19, key: 'field-reader-font' };
  var READING_WPM = 230;               // average adult silent-reading speed for non-fiction

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
      doneButton.innerHTML = done ? '<span aria-hidden="true">✓</span> Marked as read' : '<span aria-hidden="true">○</span> Mark as read';
    }
  }

  function queueProgressUpdate() {
    if (progressQueued) return;
    progressQueued = true;
    window.requestAnimationFrame(updateProgress);
  }

  /* A long chapter is rarely read in one sitting: offer a one-tap return to the furthest point reached. */
  function offerResume() {
    var button = F.$('#resume-reading');
    if (!button || !chapter) return;
    var saved = F.rememberProgress(chapter.id, null);
    if (saved < RESUME_MIN || saved >= F.READ_THRESHOLD || window.scrollY > 120 || query.get('fromSearch') === '1') { button.hidden = true; return; }
    F.$('#resume-percent').textContent = Math.round(saved * 100) + '%';
    button.hidden = false;
    button.onclick = function () {
      button.hidden = true;
      window.scrollTo({ top: saved * Math.max(1, document.documentElement.scrollHeight - window.innerHeight), behavior: F.scrollBehavior() });
    };
  }

  function makeOutline() {
    var headings = F.$$('h2, h3', content);
    outline.innerHTML = '';
    if (!headings.length) {
      outline.innerHTML = '<span class="outline-placeholder">No section headings in this chapter.</span>';
      return;
    }
    var linkById = Object.create(null);
    var group = -1;
    headings.forEach(function (heading, index) {
      if (!heading.id) heading.id = 'section-' + slug(heading.textContent) + '-' + index;
      if (heading.tagName.toLowerCase() === 'h2') group = index;       // h3s belong to the h2 before them
      var link = document.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent;
      link.title = heading.textContent;                                // single-line items: full title on hover
      link.setAttribute('data-group', String(Math.max(group, 0)));
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
        var activeLink = linkById[activeId];
        var openGroup = activeLink ? activeLink.getAttribute('data-group') : null;
        F.$$('#chapter-outline a').forEach(function (link) {
          var active = link.hash === '#' + activeId;
          // Wide layout: sub-headings are shown only for the current section (CSS ignores this on phones/tablets).
          link.classList.toggle('is-collapsed', link.classList.contains('level-3') && link.getAttribute('data-group') !== openGroup);
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

  /* Accessibility repairs that never change the visual design:
     - heading levels that jump (h2 → h4) get a corrected aria-level;
     - horizontally scrollable code/tables become keyboard-focusable;
     - empty table header cells get a screen-reader label. */
  function prepareContentStructure() {
    var last = 1;                                  // the page's single <h1> is the hero title
    F.$$('h1, h2, h3, h4, h5, h6', content).forEach(function (heading) {
      var level = Number(heading.tagName.charAt(1));
      if (level === 1) { heading.setAttribute('aria-level', '2'); level = 2; }
      if (level > last + 1) { heading.setAttribute('aria-level', String(last + 1)); level = last + 1; }
      last = level;
    });
    F.$$('th', content).forEach(function (cell) {
      if (cell.textContent.trim()) return;
      var label = document.createElement('span');
      label.className = 'sr-only';
      label.textContent = 'Row label';
      cell.appendChild(label);
    });
    markScrollRegions();
  }

  function markScrollRegions() {
    var regions = F.$$('pre, table', content);
    var flags = regions.map(function (region) { return region.scrollWidth > region.clientWidth + 1; });   // read all, then write all
    regions.forEach(function (region, i) {
      // tabindex only: adding role="region" would create dozens of identically-named landmarks.
      if (flags[i]) region.setAttribute('tabindex', '0'); else region.removeAttribute('tabindex');
    });
  }
  window.addEventListener('resize', F.debounce(function () { if (chapter) markScrollRegions(); }, 250), { passive: true });

  function finishRender(html) {
    content.innerHTML = html;
    prepareContentLinks();
    prepareContentStructure();
    offerResume();
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

  /* Chapter audio lives in assets/audio.js (YouTube, policy-compliant). This only decides whether the
     chapter has audio and which chapter comes next. */
  function makeAudio() {
    var panel = F.$('#audio-panel');
    if (!panel || !chapter) return;
    var url = audio[chapter.id];
    panel.hidden = true;
    if (!url || !window.FieldAudio) return;       // keep the reading surface uncluttered until audio exists
    var index = book.chapters.findIndex(function (item) { return item.id === chapter.id; });
    var next = index >= 0 ? book.chapters[index + 1] : null;
    window.FieldAudio.mount(panel, {
      chapterId: chapter.id,
      title: chapter.title,
      url: url,
      next: next ? { label: next.label, title: next.title, url: next.readUrl } : null
    });
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
    if (window.FieldParticles) window.FieldParticles.setVolume(book.id);   // bring this volume's constellation forward
    document.title = chapter.title + ' — The Product Field';
    F.writeJSON(LAST_READ_KEY, { id: chapter.id, title: chapter.title, book: book.title, url: chapter.readUrl, label: chapter.label, openedAt: Date.now() });
    F.$('#reader-title').textContent = chapter.title;
    F.$('#reader-title-small').textContent = chapter.title;
    F.$('#reader-num').textContent = 'CHAPTER ' + chapter.label;
    F.$('#reader-hero-num').textContent = 'CHAPTER ' + chapter.label;
    F.$('#reader-volume-label').textContent = 'VOLUME / ' + String(book.id).padStart(2, '0');
    F.$('#reader-byline').textContent = book.title + ' · ' + Number(chapter.words || 0).toLocaleString() + ' words · ' + Math.max(1, Math.round((chapter.words || 0) / READING_WPM)) + ' min read';
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
    var icon = button.querySelector('.bm-icon'); if (icon) icon.textContent = saved ? '★' : '☆';
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
    showReaderToast(completed ? 'Marked as unread' : 'Marked as read');      // feedback in place: the page stays exactly where it is
  });

  function syncTextSizeButtons() {            // A− / A+ are disabled at the smallest and largest size
    var size = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--reader-font')) || TEXT_SIZE.fallback;
    F.$('#text-smaller').disabled = size <= TEXT_SIZE.min; F.$('#text-larger').disabled = size >= TEXT_SIZE.max;
  }
  function setTextSize(px) {
    document.documentElement.style.setProperty('--reader-font', Math.max(TEXT_SIZE.min, Math.min(TEXT_SIZE.max, px)) + 'px');
    if (F.$('#text-smaller')) syncTextSizeButtons();
  }
  function changeTextSize(delta) {
    var current = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--reader-font')) || TEXT_SIZE.fallback;
    var next = Math.max(TEXT_SIZE.min, Math.min(TEXT_SIZE.max, current + delta));
    setTextSize(next);
    try { localStorage.setItem(TEXT_SIZE.key, String(next)); } catch (error) { /* non-fatal */ }
    syncTextSizeButtons();
  }
  try {                                           // restore the reader's choice before the chapter renders
    var savedSize = Number(localStorage.getItem(TEXT_SIZE.key));
    if (savedSize) setTextSize(savedSize);
  } catch (error) { /* storage blocked */ }
  syncTextSizeButtons();
  F.$('#text-smaller').addEventListener('click', function () { changeTextSize(-1); });
  F.$('#text-larger').addEventListener('click', function () { changeTextSize(1); });
})();
