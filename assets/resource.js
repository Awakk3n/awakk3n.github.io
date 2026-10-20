(function () {
  'use strict';
  var F = window.FieldSite;
  if (!F) return;

  var SEARCH_SCROLL_DELAY_MS = 180;
  var HASH_SCROLL_DELAY_MS = 80;
  var UNTAGGED = '__untagged__';

  var id = new URLSearchParams(location.search).get('resource');
  var resource = (window.FIELD_RESOURCES || []).filter(function (item) { return item.id === id; })[0];
  var article = F.$('#resource-content');
  var input = F.$('#resource-search');
  var results = F.$('#resource-result-count');
  var clearButton = F.$('#clear-resource-search');
  var empty = F.$('#resource-empty');
  var error = F.$('#resource-load-error');
  var interviewFilters = F.$('#interview-filters');
  var guideToc = F.$('#guide-toc');
  var coreFilter = F.$('#framework-core-filter');
  var typeSelect = F.$('#filter-type');
  var difficultySelect = F.$('#filter-difficulty');
  var companySelect = F.$('#filter-company');
  var coreCheckbox = F.$('#filter-core');

  function fail(message) {
    document.title = 'Resource not found — The Product Field';
    F.$('#resource-title').textContent = 'Resource not found';
    F.$('#resource-description').textContent = message;
    F.$('#resource-eyebrow').textContent = 'BOOK 3 / COMPANION RESOURCE';
    F.$('#resource-count').textContent = '—';
    article.innerHTML = '';
    error.hidden = false;
    error.textContent = message + ' Use the Book 3 index to open a valid resource.';
    results.textContent = 'No resource loaded';
    input.disabled = true;
  }

  function slug(value) {
    return String(value || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  function setSelectOptions(select, values, allLabel) {
    var first = document.createElement('option');
    first.value = '';
    first.textContent = allLabel;
    select.replaceChildren(first);
    values.forEach(function (item) {
      var option = document.createElement('option');
      option.value = item.value;
      option.textContent = item.label;
      select.appendChild(option);
    });
  }

  function openExternalLinks() {      // every link (chapters, glossary terms, sources) opens in a new tab; only same-page anchors (#x) stay
    article.querySelectorAll('a[href]').forEach(function (link) {
      var href = link.getAttribute('href') || '';
      if (!href || href.charAt(0) === '#') return;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });
  }

  /* The generated pages begin with maintainers' notes (where the file came from, schema, protocol, merge log). Readers get the entries first;
     the notes are one click away under "About this index". */
  function markNotes() {
    var nodes = children(), notes = [];
    if (nodes[0] && /^generated from/i.test(nodes[0].textContent.trim())) notes.push(nodes[0]);
    function section(title) {
      var i = nodes.findIndex(function (n) { return n.tagName === 'H2' && n.textContent.trim().toLowerCase() === title; });
      if (i < 0) return;
      notes.push(nodes[i]);
      for (var j = i + 1; j < nodes.length && nodes[j].tagName !== 'H2'; j++) notes.push(nodes[j]);
    }
    if (resource.id === 'glossary') {
      var e = nodes.findIndex(function (n) { return n.tagName === 'H2' && /^entries/i.test(n.textContent.trim()); });
      nodes.slice(0, e < 0 ? 0 : e).forEach(function (n) { notes.push(n); });
    } else if (resource.id === 'interview-bank') { section('schema'); }
    else if (resource.id === 'frameworks') { section('protocol'); section('merge and retire log'); }
    notes.forEach(function (n) { n.classList.add('is-note'); });
    if (!notes.length) return;
    var toggle = document.createElement('button');
    toggle.type = 'button'; toggle.className = 'notes-toggle'; toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = 'About this index';
    toggle.addEventListener('click', function () {
      var open = article.classList.toggle('show-notes');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false'); toggle.textContent = open ? 'Hide notes' : 'About this index';
    });
    article.parentNode.insertBefore(toggle, article);
  }

  /* Glossary: an A–Z strip to jump to a letter. */
  function prepareAZ() {
    if (resource.id !== 'glossary' || !guideToc) return;
    var seen = Object.create(null);
    guideToc.replaceChildren();
    Array.prototype.forEach.call(article.querySelectorAll('h3'), function (heading, i) {
      var letter = (heading.textContent.trim().charAt(0) || '#').toUpperCase(); if (!/[A-Z]/.test(letter)) letter = '#';
      if (seen[letter]) return; seen[letter] = true;
      if (!heading.id) heading.id = 'glossary-letter-' + (letter === '#' ? 'other' : letter.toLowerCase());
      var link = document.createElement('a'); link.href = '#' + heading.id; link.textContent = letter; link.setAttribute('aria-label', 'Jump to terms starting with ' + letter);
      link.removeAttribute('target'); guideToc.appendChild(link);
    });
    guideToc.classList.add('az'); guideToc.setAttribute('aria-label', 'Jump to a letter'); guideToc.hidden = !guideToc.children.length;
  }

  function children() {
    return Array.prototype.slice.call(article.children);
  }

  /* One pass: each group is a heading plus every node up to the next heading. */
  function makeGroups(nodes, headings) {
    var headingSet = new Set(headings), groups = [], current = null;
    nodes.forEach(function (node) {
      if (headingSet.has(node)) { current = { heading: node, nodes: [node] }; groups.push(current); }
      else if (current) current.nodes.push(node);
    });
    return groups;
  }

  /* The rendered resource never changes after load (only `hidden` toggles), so group
     boundaries and their lower-cased text are computed once and reused per keystroke. */
  var groupCache = Object.create(null);

  function getGroups(kind) {
    if (groupCache[kind]) return groupCache[kind];
    var nodes = children();
    var headings = nodes.filter(function (node) {
      if (kind === 'glossary') return node.matches('h3[id^="term-"]');
      if (kind === 'guide') return node.tagName === 'H2';
      return node.matches('h3[data-question-id]');
    });
    var groups = makeGroups(nodes, headings);
    groups.forEach(function (group) {
      group.text = group.nodes.map(function (node) { return node.textContent || ''; }).join(' ').toLowerCase();
    });
    groupCache[kind] = { nodes: nodes, groups: groups };
    return groupCache[kind];
  }

  function matchesInterviewFilters(heading) {
    var company = heading.getAttribute('data-company') || '';
    if (typeSelect.value && (heading.getAttribute('data-type') || '') !== typeSelect.value) return false;
    if (difficultySelect.value && (heading.getAttribute('data-difficulty') || '') !== difficultySelect.value) return false;
    if (companySelect.value === UNTAGGED) return company === '';
    return !companySelect.value || company === companySelect.value;
  }

  function filterGroups(kind, active, query) {
    var cached = getGroups(kind), nodes = cached.nodes, groups = cached.groups;
    if (!active) {
      nodes.forEach(function (node) { node.hidden = false; });
      return { shown: groups.length, total: groups.length };
    }
    nodes.forEach(function (node) { node.hidden = true; });
    var shown = 0;
    groups.forEach(function (group) {
      var match = !query || group.text.indexOf(query) !== -1;
      if (match && kind === 'interview-bank') match = matchesInterviewFilters(group.heading);
      group.nodes.forEach(function (node) { node.hidden = !match; });
      if (match) shown++;
    });
    return { shown: shown, total: groups.length };
  }

  function findFrameworkTable() {
    var nodes = children();
    var headingIndex = nodes.findIndex(function (node) {
      return node.tagName === 'H2' && node.textContent.trim().toLowerCase() === 'registry';
    });
    if (headingIndex < 0) return null;
    var table = null;
    for (var i = headingIndex + 1; i < nodes.length; i++) {
      if (nodes[i].tagName === 'TABLE') { table = nodes[i]; break; }
    }
    return table ? { nodes: nodes, heading: nodes[headingIndex], table: table } : null;
  }

  var frameworkCache = null;

  function getFrameworks() {
    if (frameworkCache) return frameworkCache;
    var found = findFrameworkTable();
    if (!found) return null;
    var rows = Array.prototype.slice.call(found.table.querySelectorAll('tbody tr'));
    var headerCells = Array.prototype.slice.call(found.table.querySelectorAll('thead th'));
    var coreIndex = headerCells.findIndex(function (cell) { return cell.textContent.trim().toLowerCase() === 'core'; });
    frameworkCache = {
      found: found,
      nodes: found.nodes,
      rows: rows,
      texts: rows.map(function (row) { return (row.textContent || '').toLowerCase(); }),
      isCore: rows.map(function (row) {
        var cell = coreIndex >= 0 ? row.children[coreIndex] : null;
        return !!cell && cell.textContent.trim().toLowerCase() === 'yes';
      })
    };
    return frameworkCache;
  }

  function filterFrameworks(active, query) {
    var cached = getFrameworks();
    if (!cached) return { shown: 0, total: 0, core: 0 };
    var rows = cached.rows, coreTotal = cached.isCore.filter(Boolean).length;

    if (!active) {
      cached.nodes.forEach(function (node) { node.hidden = false; });
      rows.forEach(function (row) { row.hidden = false; });
      return { shown: rows.length, total: rows.length, core: coreTotal };
    }

    cached.nodes.forEach(function (node) { node.hidden = true; });
    cached.found.heading.hidden = false;
    cached.found.table.hidden = false;
    var shown = 0, coreShown = 0;
    rows.forEach(function (row, i) {
      var match = (!query || cached.texts[i].indexOf(query) !== -1) && (!coreCheckbox.checked || cached.isCore[i]);
      row.hidden = !match;
      if (match) { shown++; if (cached.isCore[i]) coreShown++; }
    });
    return { shown: shown, total: rows.length, core: coreShown };
  }

  function prepareGuide() {
    if (!resource || resource.kind !== 'guide') return;
    var headings = Array.prototype.slice.call(article.querySelectorAll('h2'));
    var used = Object.create(null);
    headings.forEach(function (heading, index) {
      var base = 'guide-section-' + slug(heading.textContent);
      var id = base;
      if (used[id]) id = base + '-' + index;
      used[id] = true;
      heading.id = id;
    });
    if (guideToc) {
      guideToc.replaceChildren();
      headings.forEach(function (heading) {
        var link = document.createElement('a');
        link.href = '#' + heading.id;
        link.textContent = heading.textContent.replace(/^\d+\.\s*/, '');
        guideToc.appendChild(link);
      });
      guideToc.hidden = headings.length === 0;
    }
  }

  function filterGuide(active, query) {
    var cached = getGroups('guide'), nodes = cached.nodes, groups = cached.groups;
    if (!active) {
      nodes.forEach(function (node) { node.hidden = false; });
      if (guideToc) guideToc.hidden = groups.length === 0;
      return { shown: groups.length, total: groups.length };
    }
    nodes.forEach(function (node) { node.hidden = true; });
    if (guideToc) guideToc.hidden = true;
    var shown = 0;
    groups.forEach(function (group) {
      var match = group.text.indexOf(query) !== -1;
      group.nodes.forEach(function (node) { node.hidden = !match; });
      if (match) shown++;
    });
    return { shown: shown, total: groups.length };
  }

  function updateUI() {
    var query = (input.value || '').trim().toLowerCase();
    var active;
    if (resource.kind === 'interview-bank') {
      active = !!query || !!typeSelect.value || !!difficultySelect.value || !!companySelect.value;
      var questions = filterGroups('interview-bank', active, query);
      results.textContent = active
        ? questions.shown + ' of ' + questions.total + ' interview questions'
        : questions.total + ' interview questions';
      empty.hidden = !active || questions.shown > 0;
    } else if (resource.kind === 'guide') {
      var guide = filterGuide(!!query, query);
      results.textContent = query ? guide.shown + ' of ' + guide.total + ' guide sections' : guide.total + ' guide sections';
      empty.hidden = !query || guide.shown > 0;
    } else if (resource.kind === 'glossary') {
      active = !!query;
      var terms = filterGroups('glossary', active, query);
      results.textContent = active ? terms.shown + ' of ' + terms.total + ' terms' : terms.total + ' terms';
      empty.hidden = !active || terms.shown > 0;
    } else {
      active = !!query || coreCheckbox.checked;
      var frameworks = filterFrameworks(active, query);
      if (coreCheckbox.checked) {
        results.textContent = active ? frameworks.shown + ' of ' + frameworks.total + ' frameworks · core only'
          : frameworks.total + ' frameworks';
      } else {
        results.textContent = active ? frameworks.shown + ' of ' + frameworks.total + ' frameworks'
          : frameworks.total + ' registered frameworks · ' + frameworks.core + ' core';
      }
      empty.hidden = !active || frameworks.shown > 0;
    }

    clearButton.disabled = !input.value &&
      (!typeSelect || !typeSelect.value) &&
      (!difficultySelect || !difficultySelect.value) &&
      (!companySelect || !companySelect.value) &&
      (!coreCheckbox || !coreCheckbox.checked);
  }

  function assignFrameworkRowAnchors() {
    if (!resource || resource.kind !== 'frameworks') return;
    var heading = Array.prototype.slice.call(article.querySelectorAll('h2')).filter(function (h) { return h.textContent.trim().toLowerCase() === 'registry'; })[0];
    if (!heading) return;
    var node = heading.nextElementSibling;
    while (node && node.tagName !== 'TABLE') node = node.nextElementSibling;
    if (!node) return;
    Array.prototype.forEach.call(node.querySelectorAll('tbody tr'), function (row) {
      var first = row.querySelector('td');
      var match = first && first.textContent.trim().match(/^FW-C\d{2}-\d{2}$/i);
      if (match) row.id = match[0].toLowerCase();
    });
  }

  function applySearchContext() {
    var first = F.applySearchContext(article, 'button');
    if (new URLSearchParams(location.search).get('fromSearch') !== '1') return;
    window.setTimeout(function () {
      var target = null;
      if (location.hash) {
        try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch (error) { /* malformed hash */ }
      }
      var behavior = F.scrollBehavior();
      if (target && !target.hidden) target.scrollIntoView({ block: 'start', behavior: behavior });
      else if (first) first.scrollIntoView({ block: 'center', behavior: behavior });
    }, SEARCH_SCROLL_DELAY_MS);
  }

  function renderResource() {
    var cached = window.FIELD_RESOURCE_HTML && window.FIELD_RESOURCE_HTML[resource.id];
    if (typeof cached !== 'string') {
      fail('The resource content cache could not be loaded. Rebuild the site data or restore the generated content file.');
      return;
    }

    article.innerHTML = cached;
    assignFrameworkRowAnchors();
    openExternalLinks();
    prepareGuide();
    markNotes();
    prepareAZ();

    if (resource.kind === 'interview-bank') {
      interviewFilters.hidden = false;
      var filters = window.FIELD_INTERVIEW_FILTERS || {};
      setSelectOptions(typeSelect, (filters.types || []).map(function (value) {
        return { value: slug(value), label: value };
      }), 'All types');
      setSelectOptions(difficultySelect, (filters.difficulties || []).map(function (value) {
        return { value: slug(value), label: value };
      }), 'All levels');
      setSelectOptions(companySelect, [{ value: UNTAGGED, label: 'Untagged' }].concat(
        (filters.companies || []).map(function (value) { return { value: value, label: value }; })
      ), 'All companies');
    } else if (resource.kind === 'frameworks') {
      coreFilter.hidden = false;
    }

    input.addEventListener('input', updateUI);
    [typeSelect, difficultySelect, companySelect, coreCheckbox].forEach(function (control) {
      if (control) control.addEventListener('change', updateUI);
    });
    clearButton.addEventListener('click', function () {
      input.value = '';
      if (typeSelect) typeSelect.value = '';
      if (difficultySelect) difficultySelect.value = '';
      if (companySelect) companySelect.value = '';
      if (coreCheckbox) coreCheckbox.checked = false;
      updateUI();
      input.focus();
    });

    updateUI();
    applySearchContext();
    if (location.hash) {
      window.setTimeout(function () {
        var target;
        try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); }
        catch (e) { target = null; }
        if (target) target.scrollIntoView({ block: 'start', behavior: 'auto' });
      }, HASH_SCROLL_DELAY_MS);
    }
  }

  if (!resource) {
    fail('This resource link is invalid or no longer available.');
    return;
  }

  document.title = resource.title + ' — The Product Field';
  input.placeholder = resource.kind === 'guide' ? 'Search guide sections…' : (resource.kind === 'glossary' ? 'Search terms and definitions…' : (resource.kind === 'frameworks' ? 'Search framework names and details…' : 'Search prompts, rubrics and model answers…'));
  F.$('#resource-title').textContent = resource.title;
  F.$('#resource-eyebrow').textContent = resource.eyebrow;
  F.$('#resource-description').textContent = resource.description;
  F.$('#resource-count').textContent = resource.count.toUpperCase();
  if (resource.kind === 'guide') F.$('#resource-count').parentElement.querySelector('span').textContent = 'READING GUIDE';

  // Load only the selected resource; script caches work on GitHub Pages and file://.
  if (window.FIELD_RESOURCE_HTML && typeof window.FIELD_RESOURCE_HTML[resource.id] === 'string') {
    renderResource();
  } else {
    var script = document.createElement('script');
    script.src = resource.contentFile;
    script.async = true;
    script.onload = renderResource;
    script.onerror = function () { fail('The resource cache is missing. Run python build_site_data.py and include the generated content file.'); };
    document.head.appendChild(script);
  }
})();
