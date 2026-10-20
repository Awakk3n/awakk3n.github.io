/* THE PRODUCT FIELD — homepage: volume list, chapter-title filter, saved list, resume link. */
(function () {
  'use strict';

  var F = window.FieldSite;
  if (!F || !F.$('#book-list')) return;

  var BOOKMARKS_KEY = 'field-bookmarks';
  var LAST_READ_KEY = 'field-last-read';
  var DEFAULT_PREVIEW = 4;          // chapters shown per volume when not searching
  var MATCH_PREVIEW = 5;            // chapters shown per volume while searching
  var INTERNAL_URL = /^(read|book|resource)\.html(\?|$)/;   // bookmarks may only point inside the site

  var searchInput = F.$('#chapter-search');
  var list = F.$('#book-list');
  var status = F.$('#search-status');
  var books = [];
  var audio = {};
  var activeFilter = 'all';

  function pad2(n) { return String(n).padStart(2, '0'); }
  function plural(count, word) { return count + ' ' + word + (count === 1 ? '' : 's'); }
  function matchesTerm(chapter, term) {
    return (chapter.title + ' ' + chapter.label + ' ' + chapter.id).toLowerCase().indexOf(term) >= 0;
  }

  /* ---- Header counters ---- */
  function syncCounts() {
    var total = books.reduce(function (sum, book) { return sum + book.chapters.filter(function (chapter) { return chapter.kind !== 'full-book'; }).length; }, 0);
    var all = F.$('#all-chapter-count');
    if (all) all.textContent = total;
    var rail = F.$('#archive-total');
    if (rail) rail.textContent = 'PM / 001—' + String(total).padStart(3, '0');
    F.$$('[data-book-count]').forEach(function (node) {
      var book = books.filter(function (b) { return String(b.id) === node.getAttribute('data-book-count'); })[0];
      if (!book) return;
      var regularChapters = book.chapters.filter(function (c) { return c.kind !== 'full-book'; });
      var read = regularChapters.filter(function (c) { return F.isRead(c.id); }).length;
      node.textContent = pad2(regularChapters.length) + ' CH' + (read ? ' · ' + read + ' READ' : '');
    });
  }

  /* ---- Volume list ---- */
  function chapterPeek(chapter) {
    var note = audio[chapter.id] ? ' <b class="peek-audio" aria-label="has audio">♫</b>' : '';
    return '<a href="' + F.esc(chapter.readUrl) + '"><span>' + F.esc(chapter.label) + '</span><span>' +
      F.esc(chapter.title) + note + '</span></a>';
  }

  function bookBlock(book, matches, term) {
    var regularChapters = book.chapters.filter(function (c) { return c.kind !== 'full-book'; });
    var words = regularChapters.reduce(function (sum, c) { return sum + c.words; }, 0);
    var audioCount = regularChapters.filter(function (c) { return !!audio[c.id]; }).length;
    var previews = term ? matches.slice(0, MATCH_PREVIEW) : regularChapters.slice(0, DEFAULT_PREVIEW);
    var more = term && matches.length > MATCH_PREVIEW
      ? '<div class="book-side-label book-side-more">+' + (matches.length - MATCH_PREVIEW) + ' MORE MATCHES</div>' : '';
    var href = 'book.html?b=' + book.id;

    return '<article class="book-block" data-accent="' + F.esc(book.accent) + '">' +
      '<div class="book-index">' + pad2(book.id) + '</div>' +
      '<div class="book-main">' +
        '<div class="book-overline"><span class="book-marker"></span> VOLUME ' + pad2(book.id) + ' <span>·</span> PRODUCT MANAGEMENT</div>' +
        '<h3 class="book-title"><a href="' + href + '">' + F.esc(book.title) + '</a></h3>' +
        '<p class="book-subtitle">' + F.esc(book.subtitle) + '</p>' +
        '<p class="book-description">' + F.esc(book.description) + '</p>' +
        '<div class="book-meta"><span><b>' + pad2(regularChapters.length) + '</b> chapters</span>' +
          '<span><b>' + Math.round(words / 1000) + 'k</b> words (approx.)</span>' +
          (audioCount ? '<span><b>' + audioCount + '</b> audio companions</span>' : '') + '</div>' +
        '<a class="book-open" href="' + href + '">OPEN VOLUME INDEX</a>' +
      '</div>' +
      '<aside class="book-side"><div class="book-side-label">' + (term ? 'MATCHING CHAPTERS' : 'A FEW ENTRIES') + '</div>' +
        '<div class="chapter-peeks">' + previews.map(chapterPeek).join('') + '</div>' + more + '</aside>' +
    '</article>';
  }

  function paint() {
    var term = (searchInput.value || '').toLowerCase().trim();
    var html = '', shown = 0, totalMatches = 0;

    books.filter(function (book) { return activeFilter === 'all' || String(book.id) === activeFilter; })
      .forEach(function (book) {
        var matches = book.chapters.filter(function (chapter) { return chapter.kind !== 'full-book' && matchesTerm(chapter, term); });
        if (!matches.length) return;
        shown++;
        totalMatches += matches.length;
        html += bookBlock(book, matches, term);
      });

    if (!html) {
      list.innerHTML = '<div class="empty-results">No chapters matched that search. Try a broader topic or another volume.</div>';
      status.textContent = 'No chapters found for “' + searchInput.value + '”.';
      return;
    }
    list.innerHTML = html;
    status.textContent = term
      ? plural(totalMatches, 'chapter') + ' match “' + searchInput.value.trim() + '” across ' + plural(shown, 'volume') + '.'
      : 'Showing ' + totalMatches + ' chapters across ' + plural(shown, 'volume') + ' · ' + F.allChapters(books).filter(function (c) { return c.kind !== 'full-book' && F.isRead(c.id); }).length + ' read';
  }

  var randomButton = F.$('#random-chapter');
  if (randomButton) randomButton.addEventListener('click', function () {      // a random chapter you have not read yet (any chapter once everything is read)
    var all = F.allChapters(books).filter(function (c) { return c.kind !== 'full-book'; }), unread = all.filter(function (c) { return !F.isRead(c.id); }), pool = unread.length ? unread : all;
    if (pool.length) window.location.href = pool[Math.floor(Math.random() * pool.length)].readUrl;
  });

  function setFilter(value) {
    activeFilter = value;
    F.$$('.filter-button').forEach(function (button) {
      var on = button.getAttribute('data-filter') === value;
      button.classList.toggle('selected', on);
      button.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    paint();
  }

  F.loadBooks()
    .then(function (loaded) { books = loaded; syncCounts(); return F.loadAudio(); })
    .then(function (mapping) { audio = mapping || {}; paint(); })
    .catch(function () {
      list.innerHTML = '<div class="empty-results">The library index could not be loaded. Make sure <code>books.json</code> sits next to <code>index.html</code>.</div>';
    });

  if (searchInput) searchInput.addEventListener('input', paint);
  F.$$('.filter-button').forEach(function (button) {
    button.setAttribute('aria-pressed', button.classList.contains('selected') ? 'true' : 'false');
    button.addEventListener('click', function () { setFilter(button.getAttribute('data-filter')); });
  });

  /* ---- Saved chapters ---- */
  function renderSaved() {
    var section = F.$('#saved-section'), target = F.$('#saved-list');
    if (!section || !target) return;
    var saved = F.readJSON(BOOKMARKS_KEY, {});
    var items = Object.keys(saved).map(function (id) { return Object.assign({ id: id }, saved[id] || {}); });
    section.hidden = !items.length;
    target.innerHTML = items.map(function (item) {
      var href = INTERNAL_URL.test(item.url || '') ? item.url : 'read.html?chapter=' + encodeURIComponent(item.id);
      return '<a class="saved-row" href="' + F.esc(href) + '"><span class="saved-star" aria-hidden="true">★</span>' +
        '<span><strong>' + F.esc(item.title || item.id) + '</strong><small>' + F.esc(item.book || 'Saved chapter') + '</small></span>' +
        '<span aria-hidden="true">↗</span></a>';
    }).join('');
  }

  var clearButton = F.$('#clear-bookmarks');
  if (clearButton) clearButton.addEventListener('click', function () {
    try { localStorage.removeItem(BOOKMARKS_KEY); } catch (error) { /* non-fatal */ }
    renderSaved();
  });

  /* ---- Continue reading ---- */
  function renderContinue() {
    var section = F.$('#continue-section');
    if (!section) return;
    var last = F.readJSON(LAST_READ_KEY, null);
    if (!last || !INTERNAL_URL.test(last.url || '')) { section.hidden = true; return; }
    F.$('#continue-link').href = last.url;
    F.$('#continue-title').textContent = last.label ? last.label + ' · ' + last.title : last.title;
    F.$('#continue-book').textContent = last.book || 'Your last opened chapter';
    section.hidden = false;
  }

  renderSaved();
  renderContinue();
  window.addEventListener('storage', function (event) {
    if (event.key === BOOKMARKS_KEY) renderSaved();
    if (event.key === LAST_READ_KEY) renderContinue();
  });
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) { renderSaved(); renderContinue(); }
  });
})();
