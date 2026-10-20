/* THE PRODUCT FIELD — the particle field: "Reveal".

   A calm field of drifting points. The network exists only where light falls: under the cursor or finger, on three slow wandering beams,
   and on a volume whose row you hover (or whose page you are on).
   - HERO: full strength.  BODY: the same crisp field, very translucent, so it never competes with text (weaker still on chapter pages).
   - CURSOR: a small soft glow follows the pointer.
   - TAP / CLICK in the hero is random. It can create particles (a small family that fades away slowly), push them away (they drift back),
     or destroy some (they fade out). The more crowded the spot, or the more particles exist, the more likely it destroys; destroyed particles
     are regrown slowly at random places, so the load always settles on its own. A hard cap and a cap of links per particle keep it bounded.
   - CONTINUOUS: nothing restarts. Every particle has its own speed and character, random gusts pass through, wandering uses non-repeating
     noise, particles fade at the screen edge instead of popping, and theme changes / resizes / tab switches keep every particle in place.
   - prefers-reduced-motion: one still image, no loop, no taps.
   One fixed canvas behind every page (pointer-events: none: it never blocks a click, a selection or scrolling). It starts after the page has
   loaded, on an idle callback, and fades in.

   Public API: FieldParticles.setVolume(1..3) · .pulse(0..2) · .pause() · .resume() · .stats() */
(function () {
  'use strict';
  if (!window.HTMLCanvasElement) return;

  var root = document.documentElement, TAU = Math.PI * 2;
  var motionQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }
  function rng(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  var rnd = rng((Math.random() * 0x7fffffff) >>> 0);

  // seeded Perlin noise: smooth, non-repeating wandering
  var noise = (function () {
    var r = rng(7), p = new Uint8Array(512), a = [], i; for (i = 0; i < 256; i++) a.push(i); for (i = 255; i > 0; i--) { var j = Math.floor(r() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } for (i = 0; i < 512; i++) p[i] = a[i & 255];
    var f = function (t) { return t * t * t * (t * (t * 6 - 15) + 10); }, l = function (a, b, t) { return a + t * (b - a); }, g = function (h, x, y, z) { h &= 15; var u = h < 8 ? x : y, v = h < 4 ? y : (h === 12 || h === 14 ? x : z); return ((h & 1) ? -u : u) + ((h & 2) ? -v : v); };
    return function (x, y, z) { var X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255; x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z); var u = f(x), v = f(y), w = f(z), A_ = p[X] + Y, AA = p[A_] + Z, AB = p[A_ + 1] + Z, B_ = p[X + 1] + Y, BA = p[B_] + Z, BB = p[B_ + 1] + Z;
      return l(l(l(g(p[AA], x, y, z), g(p[BA], x - 1, y, z), u), l(g(p[AB], x, y - 1, z), g(p[BB], x - 1, y - 1, z), u), v), l(l(g(p[AA + 1], x, y, z - 1), g(p[BA + 1], x - 1, y, z - 1), u), l(g(p[AB + 1], x, y - 1, z - 1), g(p[BB + 1], x - 1, y - 1, z - 1), u), v), w); };
  })();

  /* ---------------------------------------------------------------- state */
  var canvas = document.createElement('canvas'); canvas.className = 'field-canvas'; canvas.setAttribute('aria-hidden', 'true');
  var ctx = canvas.getContext('2d', { alpha: true }); if (!ctx) return;
  document.body.insertBefore(canvas, document.body.firstChild);
  // the small cursor glow of the site, in one clipped viewport-sized container (it can never widen the page or allow sideways panning)
  var lightsEl = document.createElement('div'), cursorEl = document.createElement('div');
  lightsEl.className = 'field-lights'; lightsEl.setAttribute('aria-hidden', 'true'); cursorEl.className = 'field-cursor'; lightsEl.appendChild(cursorEl); document.body.insertBefore(lightsEl, canvas);

  var pageKind = document.body.classList.contains('reader-body') ? 'reader' : 'other';
  var hero = document.querySelector('.hero, .page-hero, .reader-chapter-hero');
  var BODY = pageKind === 'reader' ? .05 : .08, HERO = .82;      // field strength: the hero (a touch below full) and the body (translucent)                 // strength of the field below the hero (translucent)
  var MAX_BORN = 90, MAX_DEG = 6, HARD_CAP = 560, INTERACTIVE = 'a, button, input, select, textarea, label, summary, kbd, [role="button"]';
  var W = 1, H = 1, dpr = 1, t = 0, dark = true, rgb = ['130,224,202', '136,169,255', '243,189,117'], pts = [];
  var rv = new Float32Array(0), hw = new Float32Array(0), ef = new Float32Array(0), deg = new Uint8Array(0), nxt = new Int32Array(0), head = new Int32Array(0);
  var P = { x: -999, y: -999, gx: -999, gy: -999, active: false, touch: false, a: 0 };
  var scrollY = window.pageYOffset || 0, lastScroll = scrollY, heroBottom = 600, heroTop = 0, hubs = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
  var hoverGroup = -1, volumeFocus = -1, focusE = [0, 0, 0], flashes = [], gusts = [], nextGust = 1500, taps = 0, lastTap = -1e9, lastBirth = 0, wantBase = 0, edgeCount = 0;
  var reduced = !!(motionQuery && motionQuery.matches), booted = false, destroyed = false, paused = false, raf = 0, last = 0, cost = 0, fps = 60;
  var BS = []; for (var q = 0; q < 18; q++) BS.push([]);

  function palette() {
    var cs = getComputedStyle(root); dark = root.dataset.theme !== 'light';
    rgb = ['--a1-rgb', '--a2-rgb', '--a3-rgb'].map(function (n, i) { var v = cs.getPropertyValue(n).trim(); return v ? v.replace(/\s+/g, '') : rgb[i]; });
  }
  function ink(a) { return dark ? 'rgba(190,210,222,' + a + ')' : 'rgba(23,42,37,' + a + ')'; }
  function col(i, a) { return 'rgba(' + rgb[i] + ',' + a + ')'; }
  function wantCount() { var weak = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2; return Math.round(clamp(W * H / 4200, 110, 380) * (weak ? .7 : 1)); }
  // every particle has its own character: speed, how fast its path changes, jitter, and a private slice of the noise field
  var uid = 0, edges = new Map(), frameK = 1, SPEED = .72, maxLink = 0;     // SPEED: overall pace of the field
  function makePoint(fadeIn) { return { id: ++uid, x: rnd() * W, y: rnd() * H, vx: 0, vy: 0, r: .7 + rnd() * 1.3, g: Math.floor(rnd() * 3), fade: fadeIn ? 0 : 1, die: false, born: false, bornAt: 0, ttl: 0, spd: .55 + rnd() * 1.1, wob: .5 + rnd() * 1.6, zo: rnd() * 200, tw: .004 + rnd() * .012 }; }
  function ensure(n) { if (rv.length >= n) return; var m = Math.ceil(n * 1.5) + 64; rv = new Float32Array(m); hw = new Float32Array(m); ef = new Float32Array(m); deg = new Uint8Array(m); nxt = new Int32Array(m); }

  function size() {
    var ow = W, oh = H; dpr = Math.min(window.devicePixelRatio || 1, 1.5); W = canvas.clientWidth || window.innerWidth; H = canvas.clientHeight || window.innerHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (pts.length && ow > 1) for (var i = 0; i < pts.length; i++) { pts[i].x *= W / ow; pts[i].y *= H / oh; }          // keep every point where it was
    var base = pts.filter(function (p) { return !p.die && !p.born; }); wantBase = wantCount();
    for (i = base.length; i < wantBase; i++) pts.push(makePoint(pts.length > 0));
    for (i = wantBase; i < base.length; i++) base[i].die = true;
    ensure(pts.length);
  }
  function geometry() {
    if (!hero) { heroBottom = 0; return; }
    var r = hero.getBoundingClientRect(); heroBottom = r.bottom; heroTop = r.top;
    [[.66, .30], [.84, .68], [.95, .40]].forEach(function (f, i) { hubs[i].x = r.left + f[0] * r.width; hubs[i].y = r.top + f[1] * r.height; });
  }

  /* ----------------------------------------------------------- simulation */
  function step(dt) {
    var k = dt / 16.7, i, p, g, dS = scrollY - lastScroll; lastScroll = scrollY;
    P.a += ((P.active ? 1 : 0) - P.a) * (1 - Math.pow(P.active ? .88 : .94, k));
    if (P.gx < -500) { P.gx = P.x; P.gy = P.y; } P.gx += (P.x - P.gx) * (1 - Math.pow(.78, k)); P.gy += (P.y - P.gy) * (1 - Math.pow(.78, k));
    var active = hoverGroup >= 0 ? hoverGroup : volumeFocus;
    for (i = 0; i < 3; i++) focusE[i] += ((i === active ? (hoverGroup === i ? 1 : .6) : 0) - focusE[i]) * (1 - Math.pow(.9, k));
    for (i = flashes.length - 1; i >= 0; i--) { flashes[i].a *= Math.exp(-dt / 900); if (flashes[i].a < .02) flashes.splice(i, 1); }
    // random gusts: now and then a soft breath passes through a random part of the field
    if (t > nextGust) { var ga = rnd() * TAU; gusts.push({ x: rnd() * W, y: rnd() * H, dx: Math.cos(ga), dy: Math.sin(ga), R: 180 + rnd() * 220, s: .1 + rnd() * .22, a: 1 }); nextGust = t + 1500 + rnd() * 3500; }
    for (i = gusts.length - 1; i >= 0; i--) { gusts[i].a *= Math.exp(-dt / 1400); if (gusts[i].a < .05) gusts.splice(i, 1); }
    var baseAlive = 0;
    for (i = pts.length - 1; i >= 0; i--) {
      p = pts[i]; if (!p.die && !p.born) baseAlive++;
      var ang = noise(p.x * .0015, p.y * .0015, t * .00003 * p.wob + p.zo) * TAU * 1.6, sp = (.1 + .09 * (noise(p.x * .003 + 9, p.y * .003, t * .00004 + p.zo) * .5 + .5)) * p.spd * SPEED;
      p.vx += (Math.cos(ang) * sp - p.vx) * .016 * k + (rnd() - .5) * p.tw * k; p.vy += (Math.sin(ang) * sp * .8 - p.vy) * .016 * k + (rnd() - .5) * p.tw * k;
      for (g = 0; g < gusts.length; g++) { var G = gusts[g], gx = p.x - G.x, gy = p.y - G.y, gd = gx * gx + gy * gy; if (gd < G.R * G.R) { var f = (1 - Math.sqrt(gd) / G.R) * G.s * G.a * .05 * k; p.vx += G.dx * f; p.vy += G.dy * f; } }
      p.x += p.vx * k; p.y += p.vy * k - dS * .16;
      if (p.x < -50) p.x += W + 100; else if (p.x > W + 50) p.x -= W + 100; if (p.y < -50) p.y += H + 100; else if (p.y > H + 50) p.y -= H + 100;
      if (p.born && !p.die && t - p.bornAt > p.ttl) p.die = true;                      // tap-born particles live a while, then fade out
      p.fade += ((p.die ? 0 : 1) - p.fade) * (1 - Math.pow(.97, k)); if (p.die && p.fade < .01) pts.splice(i, 1);
    }
    if (baseAlive < wantBase && t - lastBirth > 90 && pts.length < HARD_CAP) { pts.push(makePoint(true)); lastBirth = t; }   // regrow the normal population, slowly, at random places
  }

  // A tap is random: create, push away or destroy. The more crowded the spot (or the more particles exist), the more likely it destroys.
  function tap(x, y) {
    if (t - lastTap < 110) return; lastTap = t;
    taps++; flashes.push({ x: x, y: y, a: 1 }); if (flashes.length > 5) flashes.shift();
    var near = 0, alive = 0, R2 = 150 * 150;
    for (var i = 0; i < pts.length; i++) { var p = pts[i]; if (p.die) continue; alive++; var dx = p.x - x, dy = p.y - y; if (dx * dx + dy * dy < R2) near++; }
    var load = clamp((alive - wantBase) / MAX_BORN, 0, 1), crowd = Math.max(clamp((near - 8) / 14, 0, 1), load);
    var pDestroy = .12 + .55 * crowd, pMultiply = (1 - pDestroy) * (.55 - .45 * crowd), roll = rnd();
    if (roll < pDestroy) destroy(x, y, crowd); else if (roll < pDestroy + pMultiply) multiply(x, y); else scatter(x, y);
  }
  function destroy(x, y, crowd) {
    var radius = 170 + rnd() * 110, fraction = Math.min(.95, .3 + .4 * rnd() + .25 * crowd);
    for (var i = 0; i < pts.length; i++) { var p = pts[i]; if (p.die) continue; var d = Math.hypot(p.x - x, p.y - y); if (d < radius && rnd() < fraction * (1 - .5 * d / radius)) p.die = true; }   // they fade out, nothing pops
  }
  function multiply(x, y) {
    var count = Math.min(6 + Math.floor(rnd() * 8), Math.max(0, HARD_CAP - pts.length)), born = pts.filter(function (p) { return p.born && !p.die; });
    for (var o = 0; o < born.length - (MAX_BORN - count); o++) born[o].die = true;
    var spread = 40 + rnd() * 60;
    for (var i = 0; i < count; i++) {
      var a = rnd() * TAU, d = Math.sqrt(rnd()) * spread, p = makePoint(true), v = .05 + rnd() * .2;
      p.x = x + Math.cos(a) * d; p.y = y + Math.sin(a) * d; p.g = rnd() < .6 ? taps % 3 : Math.floor(rnd() * 3); p.born = true; p.bornAt = t; p.ttl = 12000 + rnd() * 12000; p.vx = Math.cos(a) * v; p.vy = Math.sin(a) * v;
      pts.push(p);
    }
  }
  function scatter(x, y) {
    var strength = 3 + rnd() * 4.5, radius = 200 + rnd() * 130;
    for (var i = 0; i < pts.length; i++) { var p = pts[i], dx = p.x - x, dy = p.y - y, d = Math.hypot(dx, dy); if (d < radius && d > 1) { var f = 1 - d / radius; p.vx += dx / d * f * f * strength; p.vy += dy / d * f * f * strength; } }
  }

  /* -------------------------------------------------------------- drawing */
  function render(still) {
    var n = pts.length, i, j, b, p, lights = []; ensure(n);
    lights.push({ x: W * (.5 + .42 * noise(t * .00005, 1.5, 3)), y: H * (.45 + .32 * noise(t * .00006, 8.5, 5)), R: 360, w: .95 });
    lights.push({ x: W * (.55 + .4 * noise(t * .00004, 4.5, 7)), y: H * (.5 + .34 * noise(t * .00006, 12.5, 2)), R: 320, w: .85 });
    lights.push({ x: W * (.45 + .4 * noise(t * .00004, 6.5, 9)), y: H * (.4 + .3 * noise(t * .00005, 2.5, 4)), R: 300, w: .8 });
    if (P.a > .02) lights.push({ x: P.gx, y: P.gy, R: P.touch ? 230 : 300, w: P.a });
    for (i = 0; i < 3; i++) if (focusE[i] > .02) lights.push({ x: hubs[i].x, y: hubs[i].y, R: 300, w: focusE[i] });
    for (i = 0; i < flashes.length; i++) lights.push({ x: flashes[i].x, y: flashes[i].y, R: 250, w: flashes[i].a });
    for (i = 0; i < n; i++) {
      p = pts[i]; var m = 0; for (j = 0; j < lights.length; j++) { var L = lights[j], d = Math.hypot(p.x - L.x, p.y - L.y), v = Math.pow(Math.max(0, 1 - d / L.R), 1.5) * L.w; if (v > m) m = v; }
      rv[i] = m; hw[i] = BODY + (HERO - BODY) * clamp((heroBottom - p.y) / 150, 0, 1);      // hero = HERO, body = translucent
      ef[i] = clamp(Math.min(p.x, W - p.x, p.y, H - p.y) / 70, 0, 1) * p.fade; deg[i] = 0;
    }
    // neighbour search on a grid, with a cap on links per particle: dense clusters stay legible and the cost stays bounded
    var C = 165, C2 = C * C, gain = dark ? 1.55 : 1.75, cols = Math.ceil(W / C) + 1, rows = Math.ceil(H / C) + 1, guard;
    if (head.length < cols * rows) head = new Int32Array(cols * rows); head.fill(-1, 0, cols * rows);
    for (i = 0; i < n; i++) { var cx = clamp(Math.floor(pts[i].x / C), 0, cols - 1), cy = clamp(Math.floor(pts[i].y / C), 0, rows - 1); nxt[i] = head[cy * cols + cx]; head[cy * cols + cx] = i; }
    for (b = 0; b < 18; b++) BS[b].length = 0; edgeCount = 0;
    // 1) collect every possible bond this frame; 2) bonds that already exist get the link slots first (so they do not flip on and off);
    // 3) every bond eases its brightness toward its target: in fairly slowly, out more slowly still, so bonds form and dissolve softly
    var cand = render.cand || (render.cand = []); cand.length = 0;
    for (i = 0; i < n; i++) {
      if (ef[i] < .02) continue; var pi = pts[i], ci = clamp(Math.floor(pi.x / C), 0, cols - 1), ri = clamp(Math.floor(pi.y / C), 0, rows - 1);
      for (var yy = Math.max(0, ri - 1); yy <= Math.min(rows - 1, ri + 1); yy++) for (var xx = Math.max(0, ci - 1); xx <= Math.min(cols - 1, ci + 1); xx++) {
        for (j = head[yy * cols + xx], guard = 0; j !== -1 && j !== undefined && guard < n; j = nxt[j], guard++) {          // the guard makes an endless loop impossible
          if (j <= i) continue; var dx = pi.x - pts[j].x, dy = pi.y - pts[j].y, d2 = dx * dx + dy * dy; if (d2 > C2) continue;
          var a = (1 - Math.sqrt(d2) / C) * (rv[i] + rv[j]) * .5 * gain * Math.min(ef[i], ef[j]) * (hw[i] + hw[j]) * .5; if (a < .02) continue;
          cand.push(i, j, a);
        }
      }
    }
    var e, key, pass, x;
    for (e of edges.values()) e.tg = 0;
    for (pass = 0; pass < 2; pass++) for (x = 0; x < cand.length; x += 3) {
      i = cand[x]; j = cand[x + 1]; if (deg[i] >= MAX_DEG || deg[j] >= MAX_DEG) continue;
      var A = pts[i], B = pts[j]; key = A.id < B.id ? A.id * 2097152 + B.id : B.id * 2097152 + A.id; e = edges.get(key);
      if ((pass === 0) !== !!e) continue;                                   // pass 0: existing bonds, pass 1: new ones
      if (!e) { e = { a: A, b: B, g: A.g, al: still ? cand[x + 2] : 0, tg: 0 }; edges.set(key, e); }
      e.tg = cand[x + 2]; deg[i]++; deg[j]++;
    }
    var LIMIT = C * 1.1; maxLink = 0;
    for (var kv of edges) {
      e = kv[1];
      // A bond can never stretch: the moment its ends are too far apart (a particle wrapped around the screen edge, or they drifted apart) it is
      // dropped, and as it nears its limit it fades. Only the brightness eases, never the length.
      var ex = e.a.x - e.b.x, ey = e.a.y - e.b.y, ed = Math.sqrt(ex * ex + ey * ey);
      if (ed > LIMIT || (e.a.die && e.a.fade < .02) || (e.b.die && e.b.fade < .02)) { edges.delete(kv[0]); continue; }
      if (still) e.al = e.tg; else e.al += (e.tg - e.al) * (e.tg > e.al ? .07 : .035) * frameK;
      if (e.tg === 0 && e.al < .012) { edges.delete(kv[0]); continue; }
      var shown = e.al * (ed > C ? 1 - (ed - C) / (LIMIT - C) : 1); if (shown < .02) continue;
      if (ed > maxLink) maxLink = ed;
      BS[e.g * 6 + Math.min(5, Math.floor(shown * 6))].push(e); edgeCount++;
    }
    ctx.clearRect(0, 0, W, H); ctx.lineWidth = .9;
    for (b = 0; b < 18; b++) { var Ls = BS[b]; if (!Ls.length) continue; ctx.strokeStyle = col(Math.floor(b / 6), ((b % 6) + .5) / 6); ctx.beginPath(); for (var k = 0; k < Ls.length; k++) { ctx.moveTo(Ls[k].a.x, Ls[k].a.y); ctx.lineTo(Ls[k].b.x, Ls[k].b.y); } ctx.stroke(); }
    for (i = 0; i < n; i++) { p = pts[i]; var r = rv[i], al = hw[i] * ef[i]; if (al < .02) continue; ctx.fillStyle = r > .05 ? col(p.g, Math.min(1, (.35 + r * .75) * al)) : ink((dark ? .36 : .4) * al); ctx.beginPath(); ctx.arc(p.x, p.y, p.r * (1 + r * .9), 0, TAU); ctx.fill(); }
    // the small cursor glow: a compositor layer (transform + opacity only)
    var R = Math.round(clamp(W * .19, 105, 190) * .9);
    if (cursorEl._r !== R) { cursorEl._r = R; cursorEl.style.width = cursorEl.style.height = R * 2 + 'px'; }
    cursorEl.style.opacity = (still ? 0 : P.a).toFixed(3); cursorEl.style.transform = 'translate3d(' + (P.gx - R).toFixed(1) + 'px,' + (P.gy - R).toFixed(1) + 'px,0)';
  }

  /* ----------------------------------------------------------------- loop */
  function tick(now) {
    raf = 0; if (destroyed || paused || document.hidden || reduced) return;
    var dt = Math.min(now - (last || now), 50) || 16.7; last = now; t += dt; frameK = dt / 16.7; scrollY = window.pageYOffset || 0;
    geometry(); var t0 = performance.now(); step(dt); render(false); cost += (performance.now() - t0 - cost) * .08; fps += (1000 / dt - fps) * .05;
    raf = requestAnimationFrame(tick);
  }
  function start() { if (booted && !raf && !paused && !reduced && !destroyed) { last = 0; raf = requestAnimationFrame(tick); } }
  function halt() { if (raf) cancelAnimationFrame(raf); raf = 0; last = 0; }
  function stillFrame() { if (!booted) return; geometry(); render(true); }
  function setStatus(label) { Array.prototype.forEach.call(document.querySelectorAll('[data-field-status]'), function (n) { n.textContent = label; }); }
  function settle() { for (var i = 0; i < 240; i++) { t += 16.7; step(16.7); } edges.clear(); }

  /* ---------------------------------------------------------------- input */
  window.addEventListener('pointermove', function (e) { if (reduced) return; P.x = e.clientX; P.y = e.clientY; P.touch = e.pointerType === 'touch'; P.active = true; }, { passive: true });
  window.addEventListener('pointerdown', function (e) {
    if (reduced || !booted) return; P.x = e.clientX; P.y = e.clientY; P.touch = e.pointerType === 'touch'; if (P.touch) { P.gx = P.x; P.gy = P.y; } P.active = true;
    var inHero = hero && e.clientY < heroBottom && e.clientY > heroTop;
    if (inHero && !(e.target.closest && e.target.closest(INTERACTIVE)) && !(window.getSelection && String(window.getSelection()))) tap(e.clientX, e.clientY);   // taps only in the hero: never while reading
  }, { passive: true });
  window.addEventListener('pointerup', function (e) { if (e.pointerType === 'touch') P.active = false; }, { passive: true });
  window.addEventListener('pointercancel', function () { P.active = false; }, { passive: true });
  document.documentElement.addEventListener('mouseleave', function () { P.active = false; });
  window.addEventListener('scroll', function () { scrollY = window.pageYOffset || 0; }, { passive: true });
  var resizeTimer = 0; window.addEventListener('resize', function () { clearTimeout(resizeTimer); resizeTimer = setTimeout(function () { if (!booted) return; size(); geometry(); if (reduced) stillFrame(); }, 120); });
  document.addEventListener('visibilitychange', function () { if (document.hidden) halt(); else start(); });
  function groupOf(target) { var el = target && target.closest ? target.closest('[data-field-focus]') : null; return el ? Number(el.getAttribute('data-field-focus')) : -1; }
  document.addEventListener('pointerover', function (e) { var g = groupOf(e.target); if (g !== hoverGroup) { hoverGroup = g; if (g >= 0) flashes.push({ x: hubs[g].x, y: hubs[g].y, a: .8 }); } }, { passive: true });
  document.addEventListener('focusin', function (e) { var g = groupOf(e.target); if (g >= 0) hoverGroup = g; });
  document.addEventListener('focusout', function (e) { if (groupOf(e.target) >= 0) hoverGroup = -1; });
  new MutationObserver(function () { palette(); if (reduced) stillFrame(); }).observe(root, { attributes: true, attributeFilter: ['data-theme'] });   // palette only: nothing restarts
  if (motionQuery) { var onMotion = function (e) { reduced = e.matches; setStatus(reduced ? 'STILL FIELD' : 'LIVE FIELD'); if (reduced) { halt(); settle(); stillFrame(); } else start(); }; if (motionQuery.addEventListener) motionQuery.addEventListener('change', onMotion); else if (motionQuery.addListener) motionQuery.addListener(onMotion); }
  window.addEventListener('pagehide', function (e) { if (e.persisted) halt(); else { destroyed = true; halt(); } });
  window.addEventListener('pageshow', function (e) { if (e.persisted) { scrollY = lastScroll = window.pageYOffset || 0; start(); } });

  /* ------------------------------------------------------------ boot + API */
  function boot() {
    if (booted || destroyed) return; booted = true; scrollY = lastScroll = window.pageYOffset || 0;
    palette(); size(); geometry(); settle(); setStatus(reduced ? 'STILL FIELD' : 'LIVE FIELD');      // warmed up once, so the first frame is already mid-flight
    if (reduced) stillFrame(); else { render(false); start(); }
    requestAnimationFrame(function () { canvas.classList.add('is-live'); });
  }
  function scheduleBoot() { if (window.requestIdleCallback) window.requestIdleCallback(boot, { timeout: 1500 }); else setTimeout(boot, 150); }
  setStatus(reduced ? 'STILL FIELD' : 'LIVE FIELD');
  if (document.readyState === 'complete') scheduleBoot(); else window.addEventListener('load', scheduleBoot);

  window.FieldParticles = {
    setVolume: function (id) { volumeFocus = id >= 1 && id <= 3 ? id - 1 : -1; },
    pulse: function (g) { if (g >= 0 && g < 3) flashes.push({ x: hubs[g].x, y: hubs[g].y, a: 1 }); },
    pause: function () { paused = true; halt(); }, resume: function () { paused = false; start(); },
    stats: function () { var h = !!hero && heroBottom > 0 && heroTop < window.innerHeight; return { tier: 'full', particles: pts.length, links: edgeCount, maxLink: Math.round(maxLink), heroVisible: h, reduced: reduced, canvas: [canvas.width, canvas.height], costMs: +cost.toFixed(2), frameMs: +(1000 / Math.max(fps, 1)).toFixed(1), bursts: taps, focus: volumeFocus, hover: hoverGroup }; }
  };
})();
