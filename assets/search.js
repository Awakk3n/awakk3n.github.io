/* THE PRODUCT FIELD — full-text search over the generated inverted index.
   Loaded with `defer` after assets/search-index.js, so the index is ready at start-up. */
(function () {
  'use strict';

  var F = window.FieldSite;
  var input = document.getElementById('global-search');
  var kind = document.getElementById('search-kind');
  var results = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  var clear = document.getElementById('clear-search');
  if (!F || !input || !results) return;

  var MAX_RESULTS = 80;
  var TYPING_DELAY_MS = 90;
  var KIND_LABELS = { chapter: 'CHAPTER', glossary: 'GLOSSARY', framework: 'FRAMEWORK', interview: 'INTERVIEW' };
  var SCORE = { title: 30, titlePrefix: 6, exactPhrase: 20, subtitle: 10, book: 4, excerpt: 3 };

  var docs = window.FIELD_SEARCH_INDEX;
  var postings = window.FIELD_SEARCH_POSTINGS;

  function escapeRegExp(text) { return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  /* Match against the original plain text, then escape each fragment before adding markup.
     Escaping first could match entity names such as "amp" inside "&amp;". */
  function highlight(value, words) {
    var source = String(value || ''), ranges = [];
    words.forEach(function (word) {
      var pattern = new RegExp(escapeRegExp(word), 'ig'), match;
      while ((match = pattern.exec(source)) !== null) {
        ranges.push([match.index, match.index + match[0].length]);
        if (!match[0].length) pattern.lastIndex++;
      }
    });
    ranges.sort(function (a, b) { return a[0] - b[0] || a[1] - b[1]; });
    var merged = [];
    ranges.forEach(function (range) {
      var last = merged[merged.length - 1];
      if (last && range[0] <= last[1]) last[1] = Math.max(last[1], range[1]);
      else merged.push(range);
    });
    var out = '', cursor = 0;
    merged.forEach(function (range) {
      out += F.esc(source.slice(cursor, range[0])) + '<mark>' + F.esc(source.slice(range[0], range[1])) + '</mark>';
      cursor = range[1];
    });
    return out + F.esc(source.slice(cursor));
  }

  /* Postings lists are intersected smallest-first, so every term must match. */
  function candidates(words) {
    var lists = words.map(function (word) { return postings[word] || []; });
    if (lists.some(function (list) { return !list.length; })) return null;
    lists.sort(function (a, b) { return a.length - b.length; });
    var ids = new Set(lists[0]);
    for (var i = 1; i < lists.length; i++) {
      var allowed = new Set(lists[i]);
      ids.forEach(function (id) { if (!allowed.has(id)) ids.delete(id); });
    }
    return ids;
  }

  function score(item, words, phrase) {
    var title = (item.title || '').toLowerCase(), subtitle = (item.subtitle || '').toLowerCase();
    var book = (item.book || '').toLowerCase(), excerpt = (item.excerpt || '').toLowerCase();
    var total = 1;
    words.forEach(function (word) {
      var at = title.indexOf(word);
      if (at >= 0) total += SCORE.title + (at === 0 ? SCORE.titlePrefix : 0);
      if (subtitle.indexOf(word) >= 0) total += SCORE.subtitle;
      if (book.indexOf(word) >= 0) total += SCORE.book;
      if (excerpt.indexOf(word) >= 0) total += SCORE.excerpt;
    });
    if (title.indexOf(phrase) >= 0) total += SCORE.exactPhrase;
    return total;
  }

  function hrefFor(item, query) {
    var destination = new URL(item.url, location.href);
    destination.searchParams.set('find', query);
    destination.searchParams.set('fromSearch', '1');
    return F.esc(destination.pathname.split('/').pop() + destination.search + destination.hash);
  }

  /* Volume 2 repeats most of Volume 1 almost word for word. Identical chapter hits collapse into one
     result that links to the other volume(s), instead of listing the same text twice. */
  function collapseCopies(matches) {
    var seen = Object.create(null), out = [];
    matches.forEach(function (m) {
      var key = m.item.kind === 'chapter' ? m.item.title + '|' + m.item.excerpt : '';
      if (key && seen[key]) { seen[key].also.push(m.item); return; }
      m.also = [];
      if (key) seen[key] = m;
      out.push(m);
    });
    return out;
  }

  function resultHtml(item, words, query, also) {
    var excerpt = item.excerpt || item.subtitle || '';
    var inSnippet = words.some(function (word) { return excerpt.toLowerCase().indexOf(word) >= 0; });
    var href = hrefFor(item, query);
    var alsoHtml = also && also.length
      ? '<p class="result-also">Also in: ' + also.map(function (other) { return '<a href="' + hrefFor(other, query) + '">' + F.esc(other.book) + '</a>'; }).join(' · ') + '</p>' : '';
    return '<article class="unified-result">' +
      '<div class="result-label">' + F.esc(KIND_LABELS[item.kind] || item.kind.toUpperCase()) +
        '<span>' + F.esc(item.book || item.subtitle || '') + '</span></div>' +
      '<h2><a href="' + href + '">' + F.esc(item.title) + '</a></h2>' +
      '<p>' + highlight(excerpt, words) + (inSnippet ? '' : ' <span class="match-note">(matched in full text)</span>') + '</p>' + alsoHtml +
      '<div class="result-open-row"><span class="search-destination">Search: <b>' + F.esc(query) + '</b></span>' +
        '<a class="result-open" href="' + href + '">OPEN MATCH</a></div>' +
    '</article>';
  }

  function search() {
    var query = input.value.trim(), words = F.tokenize(query);
    clear.disabled = !query;

    if (!docs || !postings) {
      status.textContent = 'Search index could not load. Refresh the page and try again.';
      return;
    }
    if (!words.length) {
      results.innerHTML = '<p class="search-hint">Enter at least two letters to search the full library.</p>';
      status.textContent = docs.length.toLocaleString() + ' searchable entries';
      return;
    }
    var ids = candidates(words);
    if (!ids) {
      results.innerHTML = '<p class="search-hint">No matches. Try fewer words or choose “Everything”.</p>';
      status.textContent = '0 results';
      return;
    }

    var wanted = kind.value, phrase = query.toLowerCase(), matches = [];
    ids.forEach(function (id) {
      var item = docs[id];
      if (item && (wanted === 'all' || item.kind === wanted)) matches.push({ item: item, score: score(item, words, phrase) });
    });
    matches.sort(function (a, b) { return b.score - a.score || a.item.title.localeCompare(b.item.title); });
    matches = collapseCopies(matches);

    status.textContent = matches.length.toLocaleString() + ' result' + (matches.length === 1 ? '' : 's') +
      (matches.length > MAX_RESULTS ? ' · showing the first ' + MAX_RESULTS : '');
    results.innerHTML = matches.length
      ? matches.slice(0, MAX_RESULTS).map(function (m) { return resultHtml(m.item, words, query, m.also); }).join('')
      : '<p class="search-hint">No matches. Try fewer words or choose “Everything”.</p>';
  }

  input.addEventListener('input', F.debounce(search, TYPING_DELAY_MS));
  kind.addEventListener('change', search);
  clear.addEventListener('click', function () { input.value = ''; search(); input.focus(); });

  var initial = new URLSearchParams(location.search).get('q');
  if (initial) input.value = initial;
  search();
})();
