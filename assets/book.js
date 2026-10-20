/* THE PRODUCT FIELD — volume page: header, Book 3 companions and the filterable chapter list. */
(function () {
  'use strict';

  var F = window.FieldSite;
  if (!F) return;

  var volumeId = Number(new URLSearchParams(location.search).get('b') || 1);
  var searchInput = F.$('#book-search');

  function pad2(n) { return String(n).padStart(2, '0'); }

  function showNotFound() {
    F.$('#book-title').textContent = 'Volume not found';
    F.$('#book-subtitle').textContent = 'Return to the library and choose a volume.';
    F.$('#book-stats').innerHTML = '';
    F.$('#chapter-directory-list').innerHTML = '<p class="empty-note">This volume link is invalid or no longer available.</p>';
    searchInput.disabled = true;
    F.$('#book-empty').hidden = true;
  }

  function renderHeader(book) {
    var words = book.chapters.reduce(function (sum, chapter) { return sum + chapter.words; }, 0);
    document.title = book.title + ' — The Product Field';
    if (window.FieldParticles) window.FieldParticles.setVolume(book.id);   // bring this volume's constellation forward
    F.$('#book-companions').hidden = book.id !== 3;
    F.$('#book-kicker').textContent = 'VOLUME / ' + pad2(book.id);
    F.$('#book-title').textContent = book.title;
    F.$('#book-subtitle').textContent = book.subtitle;
    F.$('#book-stats').innerHTML =
      '<div class="book-stat"><b>' + pad2(book.chapters.length) + '</b><span>CHAPTERS</span></div>' +
      '<div class="book-stat"><b>' + Math.round(words / 1000) + 'k</b><span>WORDS</span></div>';
  }

  function chapterRow(chapter, audio) {
    var read = F.isRead(chapter.id);
    var status = audio[chapter.id] ? '♫ AUDIO' : (read ? '✓' : '↗');
    return '<a class="chapter-row" href="' + F.esc(chapter.readUrl) + '">' +
      '<span class="chapter-row-number">' + F.esc(chapter.label) + '</span>' +
      '<span class="chapter-row-title">' + F.esc(chapter.title) + '</span>' +
      '<span class="chapter-row-meta">' + (read ? 'READ' : 'OPEN') + '<span class="audio-mark">' + status + '</span></span></a>';
  }

  Promise.all([F.loadBooks(), F.loadAudio()]).then(function (results) {
    var book = results[0].filter(function (b) { return b.id === volumeId; })[0];
    var audio = results[1] || {};
    if (!book) { showNotFound(); return; }

    renderHeader(book);
    var list = F.$('#chapter-directory-list');

    function paint() {
      var term = (searchInput.value || '').toLowerCase().trim();
      var rows = book.chapters.filter(function (chapter) {
        return (chapter.title + ' ' + chapter.label + ' ' + chapter.id).toLowerCase().indexOf(term) >= 0;
      });
      list.innerHTML = rows.map(function (chapter) { return chapterRow(chapter, audio); }).join('');
      F.$('#book-empty').hidden = rows.length > 0;
    }

    paint();
    searchInput.addEventListener('input', paint);
    window.addEventListener('pageshow', function (event) { if (event.persisted) paint(); });
  }).catch(function () {
    F.$('#book-title').textContent = 'The library could not be loaded';
    F.$('#book-subtitle').textContent = 'Check that books.json is present alongside this page.';
  });
})();
