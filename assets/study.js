(function () {
  'use strict';
  var F = window.FieldSite;
  if (!F) return;
  var $ = F.$;
  var PRACTICE_LOG_KEY = 'field-practice-log';
  var DATA_KEYS = ['field-progress', 'field-bookmarks', 'field-notes', 'field-audio-pos', PRACTICE_LOG_KEY];
  var MAX_ATTEMPTS = 500;
  var MAX_NOTE_LENGTH = 50000;
  var DEFAULT_MINUTES = 10;
  var TIMER_TICK_MS = 250;
  var SCORE_RANGE = { min: 1, max: 5 };
  var PATHS = [
    { id: 'foundations', number: '01', title: 'PM foundations', description: 'Build a durable base in product thinking, discovery, strategy and metrics.', chapters: ['book-1-ch-01','book-1-ch-02','book-1-ch-03','book-1-ch-04','book-1-ch-05','book-1-ch-07'] },
    { id: 'metrics', number: '02', title: 'Metrics and experiments', description: 'Go from defining a metric to diagnosing movement and making causal decisions.', chapters: ['book-3-c05','book-3-c12','book-3-c13','book-3-c14','book-3-c17'] },
    { id: 'ai-product', number: '03', title: 'AI product management', description: 'Understand ranking, LLM products, evaluation and system-level trade-offs.', chapters: ['book-1-ch-11','book-3-c22','book-3-c23','book-3-c24','book-3-c25'] },
    { id: 'apm-interviews', number: '04', title: 'APM interview sprint', description: 'Prepare structured answers across design, estimation, behavioral and interview calibration.', chapters: ['book-3-c01','book-3-c03','book-3-c04','book-3-c07','book-3-c13','book-3-c31','book-3-c32','book-3-c33','book-3-c34','book-3-c37'] }
  ];
  var books = window.FIELD_BOOKS || [];
  var chapters = F.allChapters(books);
  function getItem(id) { return chapters.filter(function (c) { return c.id === id; })[0]; }
  var esc = F.esc;
  function getObj(key) { return F.readJSON(key, {}); }
  function pathCard(path) {
    var items = path.chapters.map(getItem).filter(Boolean);
    var done = items.filter(function (c) { return F.isRead(c.id); }).length;
    var next = items.filter(function (c) { return !F.isRead(c.id); })[0] || items[items.length - 1];
    var percent = items.length ? Math.round(done / items.length * 100) : 0;
    var steps = items.map(function (c) {
      return '<li><a href="' + esc(c.readUrl) + '">' + esc(c.label + ' · ' + c.title) + '</a>' +
        (F.isRead(c.id) ? '<span class="path-done">READ</span>' : '') + '</li>';
    }).join('');
    var action = done === items.length ? 'REVISIT PATH' : (done ? 'CONTINUE PATH' : 'START PATH');

    return '<article class="study-path"><div class="study-path-index">' + path.number + '</div>' +
      '<div class="study-path-content"><h3>' + esc(path.title) + '</h3><p>' + esc(path.description) + '</p>' +
      '<div class="path-progress-label"><span>' + done + ' / ' + items.length + ' chapters read</span><span>' + percent + '%</span></div>' +
      '<div class="path-progress"><span style="transform:scaleX(' + percent / 100 + ')"></span></div>' +
      '<details class="path-steps"><summary>View the chapter sequence</summary><ol>' + steps + '</ol></details>' +
      '<a class="path-start" href="' + esc(next ? next.readUrl : 'index.html') + '">' + action + ' <span aria-hidden="true">↗</span></a>' +
      '</div></article>';
  }

  function renderPaths() {
    var host = $('#study-paths');
    if (host) host.innerHTML = PATHS.map(pathCard).join('');
  }
  renderPaths();
  window.addEventListener('pageshow', renderPaths);
  window.addEventListener('storage', function (event) { if (event.key === 'field-progress') renderPaths(); });

  var data = window.FIELD_PRACTICE_QUESTIONS || [];
  var typeSelect = $('#practice-type'), companySelect = $('#practice-company'), difficultySelect = $('#practice-difficulty');
  var durationSelect = $('#practice-duration'), scorePanel = $('#practice-score-panel');
  var scoreSelect = $('#practice-score'), saveStatus = $('#practice-save-status');
  var promptEl = $('#practice-prompt'), labelEl = $('#practice-label'), metaEl = $('#practice-meta'), timerEl = $('#practice-timer');
  var startButton = $('#timer-start'), resetButton = $('#timer-reset'), newButton = $('#new-question'), rubricLink = $('#practice-rubric');
  var selected = null, remaining = DEFAULT_MINUTES * 60, endsAt = 0, timerId = 0, running = false, seen = {};

  function fillOptions(select, values) {
    values.forEach(function (value) {
      var option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  }
  function distinct(field) { return Array.from(new Set(data.map(function (q) { return q[field]; }).filter(Boolean))).sort(); }
  fillOptions(typeSelect, distinct('type'));
  fillOptions(companySelect, distinct('company'));

  function formatTime(total) { return String(Math.floor(total / 60)).padStart(2, '0') + ':' + String(total % 60).padStart(2, '0'); }
  function durationSeconds() { return Number(durationSelect.value || DEFAULT_MINUTES) * 60; }
  function showTimer() { timerEl.textContent = formatTime(remaining); timerEl.classList.toggle('is-running', running); }

  /* The countdown follows a wall-clock deadline rather than counting ticks, because
     browsers throttle timers in background tabs and a tick count would drift. */
  function secondsLeft() { return Math.max(0, Math.ceil((endsAt - Date.now()) / 1000)); }

  function stopTimer() {
    if (running) remaining = secondsLeft();
    if (timerId) window.clearInterval(timerId);
    timerId = 0;
    running = false;
    if (startButton && selected) startButton.textContent = 'Resume timer';
    showTimer();
  }

  function tick() {
    remaining = secondsLeft();
    showTimer();
    if (remaining > 0) return;
    stopTimer();
    startButton.textContent = 'Time complete';
    labelEl.textContent = selected.id + ' · TIME COMPLETE';
    scorePanel.hidden = false;
  }

  function newQuestion() {
    stopTimer();
    var filtered = data.filter(function (q) {
      return (!typeSelect.value || q.type === typeSelect.value) &&
        (!difficultySelect.value || q.difficulty === difficultySelect.value) &&
        (!companySelect.value || q.company === companySelect.value);
    });
    if (!filtered.length) {
      promptEl.textContent = 'No questions match those filters. Choose a broader combination.';
      selected = null;
      startButton.disabled = resetButton.disabled = true;
      rubricLink.hidden = true;
      scorePanel.hidden = true;
      labelEl.textContent = 'NO MATCHES';
      return;
    }
    var fresh = filtered.filter(function (q) { return !seen[q.id]; });
    if (!fresh.length) { seen = {}; fresh = filtered; }
    selected = fresh[Math.floor(Math.random() * fresh.length)];
    seen[selected.id] = true;
    remaining = durationSeconds();
    labelEl.textContent = selected.id + ' · ' + (selected.difficulty || 'INTERMEDIATE').toUpperCase();
    promptEl.textContent = selected.prompt;
    metaEl.textContent = [selected.type, selected.company || 'General case', selected.competency ? 'Competency ' + selected.competency : ''].filter(Boolean).join(' · ');
    rubricLink.href = selected.url;
    rubricLink.hidden = false;
    scorePanel.hidden = false;
    scoreSelect.value = '';
    saveStatus.textContent = '';
    startButton.disabled = resetButton.disabled = false;
    startButton.textContent = 'Start timer';
    showTimer();
  }

  newButton.addEventListener('click', newQuestion);
  startButton.addEventListener('click', function () {
    if (!selected) return;
    if (running) { stopTimer(); return; }
    if (remaining <= 0) remaining = durationSeconds();
    running = true;
    endsAt = Date.now() + remaining * 1000;
    startButton.textContent = 'Pause timer';
    showTimer();
    timerId = window.setInterval(tick, TIMER_TICK_MS);
  });
  resetButton.addEventListener('click', function () {
    stopTimer();
    remaining = durationSeconds();
    startButton.textContent = 'Start timer';
    showTimer();
  });
  durationSelect.addEventListener('change', function () { if (!running) { remaining = durationSeconds(); showTimer(); } });
  [typeSelect, companySelect, difficultySelect].forEach(function (control) {
    control.addEventListener('change', function () { if (selected) newQuestion(); });
  });

  $('#save-practice-score').addEventListener('click', function () {
    if (!selected) return;
    var score = Number(scoreSelect.value);
    if (!score) { saveStatus.textContent = 'Choose a score first.'; return; }
    var log = getObj(PRACTICE_LOG_KEY);
    if (!Array.isArray(log.attempts)) log.attempts = [];
    log.attempts.unshift({ id: selected.id, prompt: selected.prompt, score: score, difficulty: selected.difficulty, type: selected.type, date: new Date().toISOString(), secondsRemaining: remaining });
    log.attempts = log.attempts.slice(0, MAX_ATTEMPTS);
    saveStatus.textContent = F.writeJSON(PRACTICE_LOG_KEY, log) ? 'Attempt saved on this device.' : 'Browser storage is unavailable; export may not be possible.';
  });

  $('#export-study-data').addEventListener('click', function () {
    var payload = { app: 'The Product Field', schemaVersion: 1, exportedAt: new Date().toISOString(), data: {} };
    DATA_KEYS.forEach(function (key) { payload.data[key] = getObj(key); });
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob), anchor = document.createElement('a');
    anchor.href = url; anchor.download = 'product-field-learning-data-' + new Date().toISOString().slice(0,10) + '.json'; document.body.appendChild(anchor); anchor.click(); anchor.remove(); window.setTimeout(function () { URL.revokeObjectURL(url); }, 1200);
    $('#data-status').textContent = 'Learning data exported. Keep the JSON file somewhere safe.';
  });
  $('#import-study-data').addEventListener('change', function () {
    var file = this.files && this.files[0]; if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var parsed = JSON.parse(String(reader.result || ''));
        if (parsed.app !== 'The Product Field' || parsed.schemaVersion !== 1 || !parsed.data || typeof parsed.data !== 'object') throw new Error('This is not a supported Product Field data file.');
        var validChapterIds = {}; chapters.forEach(function (chapter) { validChapterIds[chapter.id] = chapter; });
        var validQuestionIds = {}; data.forEach(function (question) { validQuestionIds[question.id] = true; });
        DATA_KEYS.forEach(function (key) {
          var incoming = parsed.data[key]; if (!incoming || typeof incoming !== 'object') return;
          var current = getObj(key), merged;
          if (key === 'field-progress') {
            merged = Object.assign({}, current);
            Object.keys(incoming).forEach(function (id) { if (validChapterIds[id]) merged[id] = Math.max(Number(merged[id]) || 0, Math.min(1, Math.max(0, Number(incoming[id]) || 0))); });
          } else if (key === 'field-bookmarks') {
            merged = Object.assign({}, current);
            Object.keys(incoming).forEach(function (id) {
              var chapter = validChapterIds[id]; if (!chapter) return;
              merged[id] = { title: chapter.title, url: chapter.readUrl, book: chapter.bookTitle || (books.filter(function (b) { return b.id === chapter.bookId; })[0] || {}).title || 'Product Field' };
            });
          } else if (key === 'field-audio-pos') {
            merged = Object.assign({}, current);
            Object.keys(incoming).forEach(function (id) {
              var entry = incoming[id], t = entry && Number(entry.t), at = entry && Number(entry.at) || 0;
              if (!validChapterIds[id] || !(t >= 0 && t <= 86400)) return;
              if (!merged[id] || (Number(merged[id].at) || 0) < at) merged[id] = { t: Math.floor(t), at: at };   // keep the most recent
            });
          } else if (key === 'field-notes') {
            merged = Object.assign({}, current);
            Object.keys(incoming).forEach(function (id) { if (validChapterIds[id] && typeof incoming[id] === 'string') merged[id] = incoming[id].slice(0, MAX_NOTE_LENGTH); });
          } else if (key === 'field-practice-log') {
            var attempts = (current.attempts || []).concat(Array.isArray(incoming.attempts) ? incoming.attempts : []); var seenIds = {};
            merged = { attempts: attempts.filter(function (a) {
              if (!a || !validQuestionIds[a.id] || Number(a.score) < SCORE_RANGE.min || Number(a.score) > SCORE_RANGE.max) return false;
              var signature = [a.id,a.date,a.score].join('|'); if (seenIds[signature]) return false; seenIds[signature] = true; return true;
            }).slice(0, MAX_ATTEMPTS) };
          }
          if (!F.writeJSON(key, merged)) throw new Error('Browser storage is unavailable.');
        });
        $('#data-status').textContent = 'Import complete. Existing reading progress was kept where it was further along.';
        renderPaths();
      } catch (e) { $('#data-status').textContent = 'Could not import this file: ' + e.message; }
      $('#import-study-data').value = '';
    };
    reader.onerror = function () { $('#data-status').textContent = 'The selected file could not be read.'; $('#import-study-data').value = ''; };
    reader.readAsText(file);
  });
})();
