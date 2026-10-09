/* Lightweight particle network for hero / page-header areas (no library).
   Auto-attaches to .hero, .page-hero and .a-hero. Theme-aware, pauses off-screen and in background tabs,
   fewer particles on phones, single static frame when the visitor prefers reduced motion. */
(function () {
  var targets = document.querySelectorAll('.hero, .page-hero, .a-hero');
  if (!targets.length || !window.HTMLCanvasElement) return;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;

  function colors() {
    var cs = getComputedStyle(root), dark = root.dataset.theme === 'dark';
    var g = function (n) { return cs.getPropertyValue(n).trim() || '#6d7bff'; };
    return { list: [g('--a1'), g('--a2'), g('--a3')], dot: dark ? 0.85 : 0.65, line: dark ? 0.32 : 0.28 };
  }

  function start(el) {
    var cv = document.createElement('canvas');
    cv.className = 'pf-canvas'; cv.setAttribute('aria-hidden', 'true');
    el.insertBefore(cv, el.firstChild);
    var ctx = cv.getContext('2d'), dpr = Math.min(devicePixelRatio || 1, 2);
    var W = 0, H = 0, pts = [], col = colors(), mouse = { x: -999, y: -999 }, raf = 0, visible = true, clickPulse = null;
    var LINK = 120, MOUSE = 150;

    function size() {
      var r = el.getBoundingClientRect(); W = r.width; H = r.height;
      cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(W < 600 ? 34 : 85, (W * H) / 11000));
      while (pts.length < n) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: 1 + Math.random() * 1.6, c: Math.floor(Math.random() * 3) });
      pts.length = n;
      frame(true);   // resizing clears the canvas; repaint at once so there is no blank flash
    }

    function frame(still) {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        if (!still) {
          var dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < MOUSE && d > 0) { var f = (1 - d / MOUSE) * .22; p.vx -= dx / d * f * .035; p.vy -= dy / d * f * .035; }
          p.vx *= .995; p.vy *= .995;
          var sp = Math.abs(p.vx) + Math.abs(p.vy); if (sp < .12) { p.vx += (Math.random() - .5) * .02; p.vy += (Math.random() - .5) * .02; }
          p.x += p.vx; p.y += p.vy;
          if (p.x < -10) p.x = W + 10; else if (p.x > W + 10) p.x = -10;
          if (p.y < -10) p.y = H + 10; else if (p.y > H + 10) p.y = -10;
        }
      }
      ctx.lineWidth = 1;
      for (var a = 0; a < pts.length; a++) {
        for (var b = a + 1; b < pts.length; b++) {
          var ddx = pts[a].x - pts[b].x, ddy = pts[a].y - pts[b].y, dd = ddx * ddx + ddy * ddy;
          if (dd < LINK * LINK) {
            ctx.strokeStyle = col.list[pts[a].c]; ctx.globalAlpha = (1 - Math.sqrt(dd) / LINK) * col.line;
            ctx.beginPath(); ctx.moveTo(pts[a].x, pts[a].y); ctx.lineTo(pts[b].x, pts[b].y); ctx.stroke();
          }
        }
        var mx = pts[a].x - mouse.x, my = pts[a].y - mouse.y, md = Math.sqrt(mx * mx + my * my);
        if (md < MOUSE) {   // connect nearby particles to the cursor
          ctx.strokeStyle = col.list[0]; ctx.globalAlpha = (1 - md / MOUSE) * col.line * 1.6;
          ctx.beginPath(); ctx.moveTo(pts[a].x, pts[a].y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
      for (var k = 0; k < pts.length; k++) {
        ctx.globalAlpha = col.dot; ctx.fillStyle = col.list[pts[k].c];
        ctx.beginPath(); ctx.arc(pts[k].x, pts[k].y, pts[k].r, 0, 6.2832); ctx.fill();
      }
      // A click emits a visible ripple; the particles gently burst away from the click point.
      if (!still && clickPulse) {
        var age = performance.now() - clickPulse.start;
        if (age < 850) {
          var radius = 25 + age * .34;
          ctx.globalAlpha = (1 - age / 850) * .62;
          ctx.strokeStyle = col.list[0]; ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.arc(clickPulse.x, clickPulse.y, radius, 0, 6.2832); ctx.stroke();
          ctx.globalAlpha = 1;
        } else clickPulse = null;
      }
      ctx.globalAlpha = 1;
    }
    function loop() { raf = 0; if (!visible || document.hidden) return; frame(); raf = requestAnimationFrame(loop); }
    function run() { if (!reduce && !raf && visible && !document.hidden) raf = requestAnimationFrame(loop); }

    size();
    if (window.ResizeObserver) new ResizeObserver(size).observe(el); else addEventListener('resize', size);
    new MutationObserver(function () { col = colors(); if (reduce) frame(true); }).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    if (!reduce) {
      el.addEventListener('pointermove', function (e) { var r = el.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
      el.addEventListener('pointerleave', function () { mouse.x = mouse.y = -999; });
      el.addEventListener('click', function (e) {
        var r = el.getBoundingClientRect();
        var x = e.clientX - r.left, y = e.clientY - r.top;
        clickPulse = { x: x, y: y, start: performance.now() };
        pts.forEach(function (p) {
          var dx = p.x - x, dy = p.y - y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < 245 && d > 0) {
            var push = (1 - d / 245) * 1.45;
            p.vx += dx / d * push; p.vy += dy / d * push;
          }
        });
        run();
      });
      if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; if (visible) run(); }, { threshold: 0 }).observe(el);
      document.addEventListener('visibilitychange', run);
      run();
    } else frame(true);
  }
  targets.forEach(start);
})();
