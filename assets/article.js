(function () {
  // Reading progress
  var bar = document.getElementById('read-progress');
  var links = document.querySelectorAll('.toc a');
  var secs = document.querySelectorAll('.content section[id]');
  function onScroll() {
    var h = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.width = (h > 0 ? scrollY / h * 100 : 0) + '%';
    var cur = '';
    secs.forEach(function (s) { if (scrollY >= s.offsetTop - 200) cur = s.id; });
    links.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + cur); });
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Animate side bars
  document.querySelectorAll('.progress-fill').forEach(function (b) {
    var w = b.style.width; b.style.width = '0';
    setTimeout(function () { b.style.width = w; }, 400);
  });

  // Demo buttons: inline feedback instead of alert()
  var msgs = { autonomy: 'Positive: the user is in control, with options and a clear way out.', 'dark-pattern': 'Negative: the user feels trapped, with limited options and hidden exits.', balanced: 'Neutral: guided, with room to deviate.' };
  document.querySelectorAll('.demo-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.demo-card');
      var k = card.classList.contains('autonomy') ? 'autonomy' : card.classList.contains('dark-pattern') ? 'dark-pattern' : 'balanced';
      var box = document.querySelector('.demo-msg');
      if (!box) { box = document.createElement('p'); box.className = 'demo-msg'; box.setAttribute('role', 'status'); card.closest('.interactive-demo').appendChild(box); }
      box.textContent = msgs[k];
    });
  });
})();
