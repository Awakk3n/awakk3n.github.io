/* THE PRODUCT FIELD — connected-node particle field.

   One canvas per hero. The file is laid out in four layers so each can change alone:
     1. CONFIG      every tunable number (density, motion, ranges, per-theme alphas)
     2. utilities   pure helpers (clamp, seeded random, colour strings)
     3. createField one self-contained field: simulation → rendering → input → lifecycle
     4. bootstrap   attach a field to every hero on the page

   Motion is time-based (frame-rate independent), glows are pre-rendered sprites,
   and a field stops drawing whenever it is off-screen, the tab is hidden, or the
   reader prefers reduced motion. */
(function () {
  'use strict';

  var HOST_SELECTOR = '.hero, .page-hero, .reader-chapter-hero, .a-hero';
  var hosts = document.querySelectorAll(HOST_SELECTOR);
  if (!hosts.length || !window.HTMLCanvasElement) return;

  /* ------------------------------------------------------------------ 1. CONFIG */
  var CONFIG = {
    maxDpr: 1.5,                    // cap the backing-store resolution
    referenceFrameMs: 1000 / 60,    // motion constants below are tuned for 60 fps
    maxFrameMs: 50,                 // clamp long frames so motion never jumps after a stall
    pointerOff: -999,               // sentinel: pointer is not over the field

    // Node count by hero width: [max width, nodes]. Dust is a fixed share of this.
    density: [[360, 52], [600, 68], [900, 88], [Infinity, 116]],
    dustShare: 0.56,
    nodeCap: 190,

    // Three depth layers. Ranges are [min, span]; `share` is the cumulative roll threshold.
    layers: [
      { name: 'far',  share: 0.18, radius: [0.42, 0.42], alpha: [0.28, 0.18], fall: [0.003, 0.007], sway: 0.07,  drift: 0.042, connects: false, halo: 0,    ring: 0    },
      { name: 'mid',  share: 0.72, radius: [0.68, 0.78], alpha: [0.53, 0.31], fall: [0.005, 0.012], sway: 0.07,  drift: 0.042, connects: true,  halo: 0.16, ring: 0    },
      { name: 'near', share: 1,    radius: [1.15, 1.25], alpha: [0.78, 0.20], fall: [0.008, 0.018], sway: 0.11,  drift: 0.065, connects: true,  halo: 0.70, ring: 0.27 }
    ],
    dust: { radius: [0.24, 0.44], alpha: [0.10, 0.16], fall: [0.002, 0.0055], drift: 0.018 },

    // Three loose constellations the nodes cluster around (normalised to the hero).
    constellations: [
      { x: 0.66, y: 0.25, sx: 0.22, sy: 0.29 },
      { x: 0.83, y: 0.65, sx: 0.22, sy: 0.30 },
      { x: 0.94, y: 0.38, sx: 0.18, sy: 0.30 }
    ],
    clusteredShare: 0.79,
    xRange: [0.24, 1.08],           // clustered nodes avoid the text column on the left

    links: { reach: [135, 0.26], neighbours: 3, extraEvery: 4, drawRange: [120, 0.23, 225], bridgeBoost: 1.9, curveMax: 0.32 },
    pointer: { radius: [105, 0.19, 190], push: 0.008, pushNear: 0.016, kick: 0.025, maxVelocity: 0.14, maxVerticalVelocity: 0.045 },
    burst: { min: 7, spread: 5, lifeSeconds: 4.5, pulseMs: 900, keyboardAt: [0.78, 0.5] },

    // Hero copy sits on the left: dim links/nodes there so the type stays readable.
    copyZone: { minWidth: 640, edgeStart: 0.04, nodeStart: 0.05, span: 0.34, edgeMobile: 0.92 },

    // Per-theme alphas. Light mode needs stronger strokes to read on a pale ground.
    theme: {
      dark: {
        fallbackRgb: ['131,240,213', '145,178,255', '255,199,124'],
        link: 0.44, trail: 0.98, ringIdle: 0.20, edgeFloor: 0.28, nodeFloor: 0.28,
        ambient: [0.09, 0.05], focus: 0.07,
        hub: { dash: 0.20, inner: 0.09, spoke: 0.26, glow: 0.23, core: 0.92 }
      },
      light: {
        fallbackRgb: ['0,125,104', '49,89,207', '187,84,30'],
        link: 0.52, trail: 0.96, ringIdle: 0.28, edgeFloor: 0.54, nodeFloor: 0.58,
        ambient: [0.12, 0.075], focus: 0.09,
        hub: { dash: 0.27, inner: 0.12, spoke: 0.34, glow: 0.18, core: 0.98 }
      }
    }
  };

  /* --------------------------------------------------------------- 2. utilities */
  var TAU = Math.PI * 2;
  var root = document.documentElement;
  var motionQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;

  function clamp(n, lo, hi) { return Math.max(lo, Math.min(hi, n)); }
  function within(range, roll) { return range[0] + roll * range[1]; }          // [min, span] → value
  function rgba(rgb, alpha) { return 'rgba(' + rgb + ',' + alpha + ')'; }
  function token(name) { return getComputedStyle(root).getPropertyValue(name).trim(); }

  function hash(text) {
    var h = 2166136261;
    for (var i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function seededRandom(seed) {
    var x = seed >>> 0;
    return function () { x = (Math.imul(1664525, x) + 1013904223) >>> 0; return x / 4294967296; };
  }
  function bellCurve(random) { return (random() + random() + random() - 1.5) * 1.42; }

  function densityFor(width) {
    for (var i = 0; i < CONFIG.density.length; i++) if (width < CONFIG.density[i][0]) return CONFIG.density[i][1];
    return CONFIG.density[CONFIG.density.length - 1][1];
  }

  /* Colours come from the design tokens, so the field always matches the theme. */
  function readPalette() {
    var theme = root.dataset.theme === 'light' ? 'light' : 'dark';
    var alphas = CONFIG.theme[theme];
    var names = ['--a1', '--a2', '--a3'];
    var rgbNames = ['--a1-rgb', '--a2-rgb', '--a3-rgb'];
    return {
      light: theme === 'light',
      a: alphas,
      colors: names.map(function (name, i) { return token(name) || 'rgb(' + alphas.fallbackRgb[i] + ')'; }),
      rgb: rgbNames.map(function (name, i) { return token(name) || alphas.fallbackRgb[i]; })
    };
  }

  /* A radial glow drawn once to an off-screen canvas. Re-using it with drawImage is far
     cheaper than creating a gradient per node per frame. `stops` = [[position, alpha]…]. */
  function makeGlowSprite(rgb, radius, stops, dpr) {
    var size = Math.max(2, Math.ceil(radius * 2 * dpr));
    var sprite = document.createElement('canvas');
    sprite.width = sprite.height = size;
    var g = sprite.getContext('2d');
    var gradient = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    stops.forEach(function (stop) { gradient.addColorStop(stop[0], rgba(rgb, stop[1])); });
    g.fillStyle = gradient;
    g.fillRect(0, 0, size, size);
    return { image: sprite, radius: radius };
  }

  function drawSprite(ctx, sprite, x, y, alpha) {
    ctx.globalAlpha = alpha;
    ctx.drawImage(sprite.image, x - sprite.radius, y - sprite.radius, sprite.radius * 2, sprite.radius * 2);
  }

  /* --------------------------------------------------------------- 3. createField */
  function createField(host, index) {
    var canvas = host.querySelector('.particle-layer');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.className = 'particle-layer';
      host.insertBefore(canvas, host.firstChild);
    }
    var ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return null;

    canvas.removeAttribute('aria-hidden');
    canvas.setAttribute('role', 'button');
    canvas.setAttribute('tabindex', '0');
    canvas.setAttribute('aria-label', 'Interactive particle field. Click or press Enter to create a particle burst.');
    canvas.setAttribute('title', 'Click to create a particle burst');

    /* --- state --- */
    // Layout stays coherent within a visit but differs between visits.
    var seedSource = String(host.getAttribute('data-particle-seed') || host.id || host.className || 'field-' + index);
    var random = seededRandom((hash(seedSource) ^ Math.floor(Math.random() * 0x7fffffff)) >>> 0);

    var palette = readPalette();
    var width = 1, height = 1, dpr = 1;
    var nodes = [], dust = [], edges = [], hubs = [];
    var edgeKeys = Object.create(null), nextNodeId = 1;
    var sprites = {};
    var linkReach = 150, pointerReach = 150, burstCount = 0, elapsed = 0, lastTime = 0;
    var pulse = null;
    var pointer = { x: CONFIG.pointerOff, y: CONFIG.pointerOff, tx: CONFIG.pointerOff, ty: CONFIG.pointerOff };
    var rafId = 0, onScreen = true, reduced = !!(motionQuery && motionQuery.matches), destroyed = false;

    /* --- creation --- */
    function pickLayer(roll) {
      for (var i = 0; i < CONFIG.layers.length; i++) if (roll < CONFIG.layers[i].share) return i;
      return CONFIG.layers.length - 1;
    }

    function createNode(spawnAt) {
      var layerIndex = pickLayer(random()), layer = CONFIG.layers[layerIndex];
      var group = -1, nx, ny;
      if (spawnAt) {
        nx = spawnAt.x / width; ny = spawnAt.y / height;
      } else if (random() < CONFIG.clusteredShare) {
        var roll = random();
        group = roll < 0.34 ? 0 : (roll < 0.69 ? 1 : 2);
        var c = CONFIG.constellations[group];
        nx = clamp(c.x + bellCurve(random) * c.sx, CONFIG.xRange[0], CONFIG.xRange[1]);
        ny = clamp(c.y + bellCurve(random) * c.sy, -0.10, 1.10);
      } else {
        nx = 0.26 + random() * 0.82;
        ny = -0.02 + random() * 1.04;
      }
      return {
        id: nextNodeId++,
        nx: nx, ny: ny, x: nx * width, y: ny * height,
        layer: layerIndex, group: group, color: Math.floor(random() * 3),
        radius: within(layer.radius, random()), alpha: within(layer.alpha, random()),
        connects: layer.connects, halo: random() < layer.halo, ring: random() < layer.ring,
        phase: random() * TAU, speed: 0.16 + random() * 0.48,
        vx: (random() - 0.5) * layer.sway, drift: (random() - 0.5) * layer.drift,
        fall: within(layer.fall, random()), kick: 0, parallax: 0.32 + random(),
        spawned: !!spawnAt, burst: !!spawnAt, expired: false,
        born: performance.now(), life: spawnAt ? 1 : 0
      };
    }

    function createDust() {
      var d = CONFIG.dust, tint = random();
      return {
        nx: 0.18 + random() * 0.88, ny: random(), x: 0, y: 0,
        radius: within(d.radius, random()), alpha: within(d.alpha, random()),
        fall: within(d.fall, random()), drift: (random() - 0.5) * d.drift, phase: random() * TAU,
        color: tint > 0.84 ? 2 : (tint > 0.60 ? 1 : 0)
      };
    }

    /* Edge identity is based on stable node IDs, not array positions. This keeps
       existing links visually stable when a burst adds or removes nodes. */
    function addEdge(a, b, extra) {
      if (a === b || !nodes[a] || !nodes[b]) return;
      var lo = Math.min(a, b), hi = Math.max(a, b);
      var firstId = nodes[lo].id, secondId = nodes[hi].id;
      var key = Math.min(firstId, secondId) + ':' + Math.max(firstId, secondId);
      if (edgeKeys[key]) return;
      edgeKeys[key] = true;

      var edgeRandom = seededRandom(hash(key));
      edges.push(Object.assign({
        a: lo, b: hi, key: key,
        bend: (edgeRandom() - 0.5) * 0.42,
        phase: edgeRandom(), speed: 0.035 + edgeRandom() * 0.07,
        signal: edgeRandom() > 0.46,
        bridge: nodes[lo].group !== nodes[hi].group
      }, extra || {}));
    }

    /* Initial/resized topology only. Clicks use connectBurstNode() instead, so
       the established constellation never gets torn down and randomly redrawn. */
    function buildTopology() {
      edges = [];
      edgeKeys = Object.create(null);
      var reach = Math.max(CONFIG.links.reach[0], width * CONFIG.links.reach[1]);

      nodes.forEach(function (a, i) {
        if (!a.connects) return;
        var near = [];
        nodes.forEach(function (b, j) {
          if (i === j || !b.connects) return;
          var dx = (a.nx - b.nx) * width, dy = (a.ny - b.ny) * height, d2 = dx * dx + dy * dy;
          if (d2 < reach * reach) near.push({ j: j, d2: d2 });
        });
        near.sort(function (p, q) { return p.d2 - q.d2; });
        near.slice(0, CONFIG.links.neighbours + (i % CONFIG.links.extraEvery === 0 ? 1 : 0))
          .forEach(function (n) { addEdge(i, n.j); });
      });

      [[0, 1], [1, 2], [0, 2]].forEach(function (pair, k) {
        var best = null;
        nodes.forEach(function (a, i) {
          if (a.group !== pair[0] || !a.connects) return;
          nodes.forEach(function (b, j) {
            if (b.group !== pair[1] || !b.connects) return;
            var dx = (a.nx - b.nx) * width, dy = (a.ny - b.ny) * height, d2 = dx * dx + dy * dy;
            if (!best || d2 < best.d2) best = { i: i, j: j, d2: d2 };
          });
        });
        if (best) addEdge(best.i, best.j, { bend: k % 2 ? 0.28 : -0.24, phase: 0.13 + k * 0.23, speed: 0.028, signal: true, bridge: true });
      });
    }

    /* Add links only for the new node. Existing edges and their animation phases
       are left untouched, avoiding the visual graph reset that caused click jitter. */
    function connectBurstNode(index) {
      var node = nodes[index];
      if (!node) return;
      var reach = Math.max(CONFIG.links.reach[0], width * CONFIG.links.reach[1]) * CONFIG.links.bridgeBoost;
      var candidates = [];
      nodes.forEach(function (other, otherIndex) {
        if (otherIndex === index || !other.connects) return;
        var dx = node.x - other.x, dy = node.y - other.y, d2 = dx * dx + dy * dy;
        if (d2 < reach * reach) candidates.push({ index: otherIndex, d2: d2 });
      });
      candidates.sort(function (a, b) { return a.d2 - b.d2; });
      candidates.slice(0, CONFIG.links.neighbours).forEach(function (candidate) {
        addEdge(index, candidate.index);
      });
    }

    /* Expired burst nodes are removed without rebuilding the remaining graph. */
    function removeNodeAt(index) {
      var kept = [];
      edges.forEach(function (edge) {
        if (edge.a === index || edge.b === index) {
          delete edgeKeys[edge.key];
          return;
        }
        if (edge.a > index) edge.a--;
        if (edge.b > index) edge.b--;
        kept.push(edge);
      });
      edges = kept;
      nodes.splice(index, 1);
    }

    function pruneExpiredNodes() {
      for (var i = nodes.length - 1; i >= 0; i--) {
        if (nodes[i].expired) removeNodeAt(i);
      }
    }

    /* --- sizing --- */
    function buildSprites() {
      var rgb = palette.rgb, a = palette.a;
      sprites = { aura: [] };
      for (var c = 0; c < 3; c++) {
        sprites.aura.push({
          near:  makeGlowSprite(rgb[c], 27, [[0, 0.24], [0.38, 0.075], [1, 0]], dpr),
          mid:   makeGlowSprite(rgb[c], 15, [[0, 0.12], [0.38, 0.035], [1, 0]], dpr),
          burst: makeGlowSprite(rgb[c], 20, [[0, 0.26], [0.38, 0.10],  [1, 0]], dpr)
        });
      }
      sprites.tail = makeGlowSprite(rgb[0], 12, [[0, 1], [1, 0]], dpr);
      hubs.forEach(function (hub) {
        hub.glow = makeGlowSprite(rgb[hub.color], hub.glowRadius, [[0, a.hub.glow], [1, 0]], dpr);
      });
    }

    function layoutHubs() {
      hubs = CONFIG.constellations.map(function (c, i) {
        var rx = Math.max(25, Math.min(width * (i === 2 ? 0.095 : 0.13), 160));
        var ry = Math.max(28, Math.min(height * (i === 1 ? 0.19 : 0.16), 118));
        return { x: width * c.x, y: height * c.y, rx: rx, ry: ry, color: i, phase: i * 1.8, glowRadius: Math.max(22, rx * 0.48) };
      });
    }

    function reconcileDensity() {
      var wanted = densityFor(width), base = nodes.filter(function (n) { return !n.spawned; });
      while (base.length < wanted) { var n = createNode(); nodes.push(n); base.push(n); }
      while (base.length > wanted) { nodes.splice(nodes.lastIndexOf(base.pop()), 1); }
      var wantedDust = Math.round(wanted * CONFIG.dustShare);
      while (dust.length < wantedDust) dust.push(createDust());
      dust.length = Math.min(dust.length, wantedDust);
    }

    function resize() {
      if (destroyed) return;
      var nextW = Math.max(1, host.clientWidth), nextH = Math.max(1, host.clientHeight);
      if (nextW === width && nextH === height && nodes.length) return;
      if (pulse && width > 1) { pulse.x *= nextW / width; pulse.y *= nextH / height; }
      width = nextW; height = nextH;
      dpr = Math.min(window.devicePixelRatio || 1, CONFIG.maxDpr);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      reconcileDensity();
      nodes.forEach(function (p) { p.x = p.nx * width; p.y = p.ny * height; });
      dust.forEach(function (p) { p.x = p.nx * width; p.y = p.ny * height; });
      linkReach = clamp(width * CONFIG.links.drawRange[1], CONFIG.links.drawRange[0], CONFIG.links.drawRange[2]);
      pointerReach = clamp(width * CONFIG.pointer.radius[1], CONFIG.pointer.radius[0], CONFIG.pointer.radius[2]);
      layoutHubs();
      buildSprites();
      buildTopology();
      render(true);
      schedule();
    }

    /* --- simulation (k = elapsed frames at 60 fps, so motion is refresh-rate independent) --- */
    function step(now) {
      var dt = lastTime ? clamp(now - lastTime, 0, CONFIG.maxFrameMs) : CONFIG.referenceFrameMs;
      lastTime = now;
      elapsed += dt;
      var k = dt / CONFIG.referenceFrameMs;

      // Pointer coordinates are authoritative; no lagging target interpolation.
      pointer.x = pointer.tx;
      pointer.y = pointer.ty;
      for (var d = 0; d < dust.length; d++) move(dust[d], now, k, true);
      for (var n = 0; n < nodes.length; n++) move(nodes[n], now, k, false);
      pruneExpiredNodes();
    }

    function move(p, now, k, isDust) {
      if (!isDust) {
        p.vx = p.vx * Math.pow(0.992, k) + Math.sin(now * 0.00016 + p.phase) * 0.0009 * k;
        if (pointer.x >= 0) {
          var dx = p.x - pointer.x, dy = p.y - pointer.y, dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 1 && dist < pointerReach) {
            var force = (1 - dist / pointerReach) * (p.layer === 2 ? CONFIG.pointer.pushNear : CONFIG.pointer.push) * p.parallax * k;
            p.vx = clamp(p.vx + dx / dist * force, -CONFIG.pointer.maxVelocity, CONFIG.pointer.maxVelocity);
            p.kick = clamp(p.kick + dy / dist * force * CONFIG.pointer.kick, -CONFIG.pointer.maxVerticalVelocity, CONFIG.pointer.maxVerticalVelocity);
          }
        }
        if (p.burst) {
          p.life = Math.max(0, 1 - (now - p.born) / 1000 / CONFIG.burst.lifeSeconds);
          if (p.life <= 0) { p.burst = false; p.expired = true; }
        }
      }
      var sway = Math.sin(now * 0.00013 + p.phase) * (isDust ? 0.004 : 0.012) * (p.parallax || 0.5);
      p.x += ((p.vx || 0) + p.drift + sway) * k;
      p.y += (p.fall + (p.kick || 0)) * k;
      p.kick = (p.kick || 0) * Math.pow(0.92, k);
      if (p.x < -24) p.x = width + 16; else if (p.x > width + 24) p.x = -16;
      if (p.y > height + 18) { p.y = -12; p.x = clamp(p.x + Math.sin(p.phase) * width * 0.1, -8, width + 8); }
      p.nx = p.x / width; p.ny = p.y / height;
    }

    /* --- rendering --- */
    function drawAmbient() {
      var a = palette.a, rgb = palette.rgb;
      var gx = pointer.x >= 0 ? pointer.x / width : 0.78, gy = pointer.y >= 0 ? pointer.y / height : 0.45;
      var cx = width * clamp(gx, 0.1, 1), cy = height * clamp(gy, 0.05, 0.95), r = Math.max(width * 0.5, 240);
      var glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      glow.addColorStop(0, rgba(rgb[1], a.ambient[0]));
      glow.addColorStop(0.36, rgba(rgb[0], a.ambient[1]));
      glow.addColorStop(1, rgba(rgb[0], 0));
      ctx.globalAlpha = 1;
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    }

    function drawHubs(t) {
      var h = palette.a.hub, rgb = palette.rgb;
      hubs.forEach(function (hub, i) {
        var col = rgb[hub.color];
        ctx.save();
        ctx.translate(hub.x, hub.y);
        ctx.rotate((i === 1 ? -0.3 : 0.18) + Math.sin(t * 0.035 + hub.phase) * 0.03);
        ctx.lineWidth = 0.8;
        ctx.globalAlpha = 1;
        ctx.strokeStyle = rgba(col, h.dash);
        ctx.setLineDash([Math.max(4, hub.rx * 0.10), Math.max(6, hub.rx * 0.13)]);
        ctx.beginPath(); ctx.ellipse(0, 0, hub.rx, hub.ry, 0, 0.1 + i * 0.3, 2.6 + i * 0.38); ctx.stroke();
        ctx.setLineDash([]);
        ctx.strokeStyle = rgba(col, h.inner);
        ctx.beginPath(); ctx.ellipse(0, 0, hub.rx * 0.64, hub.ry * 0.65, 0, 3.3, 5.85); ctx.stroke();
        ctx.strokeStyle = rgba(col, h.spoke);
        for (var s = 0; s < 3; s++) {
          var angle = t * 0.022 + hub.phase + s * TAU / 3;
          ctx.beginPath();
          ctx.moveTo(Math.cos(angle) * hub.rx * 0.9, Math.sin(angle) * hub.ry * 0.9);
          ctx.lineTo(Math.cos(angle) * hub.rx, Math.sin(angle) * hub.ry);
          ctx.stroke();
        }
        ctx.restore();
        drawSprite(ctx, hub.glow, hub.x, hub.y, 1);
        ctx.globalAlpha = 1;
        ctx.fillStyle = rgba(col, h.core);
        ctx.beginPath(); ctx.arc(hub.x, hub.y, 2.3, 0, TAU); ctx.fill();
      });
    }

    function drawDust(t) {
      for (var i = 0; i < dust.length; i++) {
        var s = dust[i], twinkle = 0.72 + 0.28 * (0.5 + 0.5 * Math.sin(t * 0.28 + s.phase));
        ctx.globalAlpha = s.alpha * twinkle;
        ctx.fillStyle = palette.colors[s.color];
        ctx.beginPath(); ctx.arc(s.x, s.y, s.radius, 0, TAU); ctx.fill();
      }
    }

    function drawEdges(t, still) {
      var a = palette.a, zone = CONFIG.copyZone, wide = width > zone.minWidth;
      for (var i = 0; i < edges.length; i++) {
        var edge = edges[i], from = nodes[edge.a], to = nodes[edge.b];
        if (!from || !to) continue;
        var dx = to.x - from.x, dy = to.y - from.y, dist = Math.sqrt(dx * dx + dy * dy);
        var maxD = linkReach * (edge.bridge ? CONFIG.links.bridgeBoost : 1.38);
        if (dist > maxD) continue;
        var proximity = clamp(1 - dist / maxD, 0, 1);
        var depth = 0.52 + ((from.layer + to.layer) / 4) * 0.42;
        var copyFade = wide ? clamp((Math.min(from.x, to.x) / width - zone.edgeStart) / zone.span, a.edgeFloor, 1) : zone.edgeMobile;
        var bend = edge.bend * Math.min(dist, width * CONFIG.links.curveMax);
        var cx = (from.x + to.x) / 2 - dy / Math.max(1, dist) * bend;
        var cy = (from.y + to.y) / 2 + dx / Math.max(1, dist) * bend;

        ctx.globalAlpha = proximity * a.link * depth * copyFade * (edge.bridge ? 0.92 : 1);
        ctx.strokeStyle = edge.bridge ? palette.colors[1] : palette.colors[(from.color + to.color) % 3];
        ctx.lineWidth = edge.bridge ? 1.05 : ((from.layer === 2 || to.layer === 2) ? 0.85 : 0.62);
        ctx.beginPath(); ctx.moveTo(from.x, from.y); ctx.quadraticCurveTo(cx, cy, to.x, to.y); ctx.stroke();

        if (!still && edge.signal && proximity > 0.12) drawSignal(edge, from, to, cx, cy, t, proximity, copyFade);
      }
    }

    function drawSignal(edge, from, to, cx, cy, t, proximity, copyFade) {
      var u = (t * edge.speed + edge.phase) % 1, pulseStrength = Math.sin(u * Math.PI);
      if (pulseStrength <= 0.1) return;
      var mt = 1 - u;
      var x = mt * mt * from.x + 2 * mt * u * cx + u * u * to.x;
      var y = mt * mt * from.y + 2 * mt * u * cy + u * u * to.y;
      var strength = (pulseStrength - 0.1) / 0.9 * palette.a.trail * proximity * copyFade;
      ctx.globalAlpha = strength;
      ctx.fillStyle = palette.colors[0];
      ctx.beginPath(); ctx.arc(x, y, 1.6, 0, TAU); ctx.fill();
      drawSprite(ctx, sprites.tail, x, y, strength * 0.5);
    }

    function drawNodes(t) {
      var a = palette.a, zone = CONFIG.copyZone, wide = width > zone.minWidth;
      for (var i = 0; i < nodes.length; i++) {
        var p = nodes[i];
        var shimmer = 0.82 + 0.18 * (0.5 + 0.5 * Math.sin(t * p.speed + p.phase));
        var fade = wide ? clamp((p.x / width - zone.nodeStart) / zone.span, a.nodeFloor, 1) : 1;
        var life = p.burst ? p.life : 1;

        if (p.halo || p.burst) {
          var tier = p.burst ? 'burst' : (p.layer === 2 ? 'near' : 'mid');
          drawSprite(ctx, sprites.aura[p.color][tier], p.x, p.y, fade * life);
        }
        ctx.globalAlpha = p.alpha * shimmer * fade * life;
        ctx.fillStyle = palette.colors[p.color];
        ctx.beginPath(); ctx.arc(p.x, p.y, p.radius * (p.burst ? 1.15 : 1), 0, TAU); ctx.fill();

        if (p.ring || p.burst) {
          ctx.globalAlpha = (p.burst ? 0.62 : a.ringIdle) * fade * life;
          ctx.strokeStyle = palette.colors[p.color];
          ctx.lineWidth = p.burst ? 1.1 : 0.8;
          ctx.beginPath(); ctx.arc(p.x, p.y, (p.burst ? 5 : 7) + Math.sin(t * 0.6 + p.phase) * 1.4, 0, Math.PI * 1.8); ctx.stroke();
        }
      }
    }

    function drawPointerFocus() {
      if (pointer.x < 0) return;
      var r = pointerReach * 0.7;
      var focus = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, r);
      focus.addColorStop(0, rgba(palette.rgb[0], palette.a.focus));
      focus.addColorStop(1, rgba(palette.rgb[0], 0));
      ctx.globalAlpha = 1;
      ctx.fillStyle = focus;
      ctx.fillRect(pointer.x - pointerReach, pointer.y - pointerReach, pointerReach * 2, pointerReach * 2);
    }

    function drawPulse(now, still) {
      if (!pulse) return;
      var age = now - pulse.start;
      if (age >= CONFIG.burst.pulseMs) { pulse = null; return; }
      if (still) return;
      var f = 1 - age / CONFIG.burst.pulseMs;
      ctx.strokeStyle = palette.colors[pulse.color];
      ctx.lineWidth = 1.2;
      ctx.globalAlpha = f * 0.72;
      ctx.beginPath(); ctx.arc(pulse.x, pulse.y, 8 + age * 0.25, 0, TAU); ctx.stroke();
      ctx.globalAlpha = f * 0.3;
      ctx.beginPath(); ctx.arc(pulse.x, pulse.y, 20 + age * 0.31, 0, TAU); ctx.stroke();
    }

    function render(still) {
      var now = performance.now(), t = elapsed / 1000;
      ctx.clearRect(0, 0, width, height);
      drawAmbient();
      drawHubs(t);
      drawDust(t);
      drawEdges(t, still);
      drawNodes(t);
      drawPointerFocus();
      drawPulse(now, still);
      ctx.globalAlpha = 1;
    }

    /* --- loop: runs only while visible, on-screen and motion is allowed --- */
    function canAnimate() { return !destroyed && onScreen && !document.hidden && !reduced; }

    function frame(now) {
      rafId = 0;
      if (!canAnimate()) return;
      step(now);
      render(false);
      rafId = window.requestAnimationFrame(frame);
    }
    function schedule() { if (!rafId && canAnimate()) rafId = window.requestAnimationFrame(frame); }
    function halt() {
      if (rafId) window.cancelAnimationFrame(rafId);
      rafId = 0;
      lastTime = 0;                  // so the first frame after a pause does not see a huge dt
    }

    /* --- interaction --- */
    function burstAt(x, y) {
      burstCount++;
      pulse = { x: x, y: y, start: performance.now(), color: burstCount % 3 };

      var wanted = CONFIG.burst.min + Math.floor(random() * CONFIG.burst.spread);
      var overflow = Math.max(0, nodes.length + wanted - CONFIG.nodeCap);
      for (var i = 0; i < nodes.length && overflow > 0;) {
        if (nodes[i].spawned) {
          removeNodeAt(i);
          overflow--;
        } else {
          i++;
        }
      }

      for (var n = 0; n < wanted && nodes.length < CONFIG.nodeCap; n++) {
        var angle = random() * TAU, distance = 8 + random() * 46;
        var node = createNode({ x: x + Math.cos(angle) * distance, y: y + Math.sin(angle) * distance });
        node.connects = true;
        if (reduced) node.burst = false; // Keep interaction visible without starting motion.
        node.vx = Math.cos(angle) * (0.045 + random() * 0.09);
        node.kick = Math.sin(angle) * (0.018 + random() * 0.035);
        node.fall -= 0.006;
        var nodeIndex = nodes.push(node) - 1;
        connectBurstNode(nodeIndex);
      }

      // The click adds a local pulse and a small cluster; ambient nodes are not kicked.
      if (reduced) render(true); else schedule();
    }

    // Track the whole hero, not only the canvas pixels exposed behind content.
    // A single rect read per input event avoids offsetX switching coordinate spaces
    // when a link or heading is the event target.
    function pointerCoordinates(event, target) {
      var rect = target.getBoundingClientRect();
      return {
        x: clamp(event.clientX - rect.left, 0, width),
        y: clamp(event.clientY - rect.top, 0, height)
      };
    }
    function onPointerMove(event) {
      var point = pointerCoordinates(event, host);
      pointer.x = pointer.tx = point.x;
      pointer.y = pointer.ty = point.y;
      schedule();
    }
    function onPointerLeave() {
      pointer.x = pointer.y = pointer.tx = pointer.ty = CONFIG.pointerOff;
    }
    function onClick(event) {
      var point = pointerCoordinates(event, canvas);
      burstAt(point.x, point.y);
    }
    function onKeyDown(event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      burstAt(width * CONFIG.burst.keyboardAt[0], height * CONFIG.burst.keyboardAt[1]);
    }

    // Input stays live under reduced motion: the field reacts, it just does not animate.
    host.addEventListener('pointermove', onPointerMove, { passive: true });
    host.addEventListener('pointerleave', onPointerLeave, { passive: true });
    canvas.addEventListener('click', onClick);
    canvas.addEventListener('keydown', onKeyDown);

    /* --- lifecycle --- */
    var resizeObserver = null, intersectionObserver = null, themeObserver = null;

    function onVisibility() { if (document.hidden) halt(); else schedule(); }
    function onMotionChange(event) {
      reduced = event.matches;
      if (reduced) { halt(); render(true); } else schedule();
    }

    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(host);
    } else {
      window.addEventListener('resize', resize, { passive: true });
    }
    if ('IntersectionObserver' in window) {
      intersectionObserver = new IntersectionObserver(function (entries) {
        onScreen = !!entries[entries.length - 1].isIntersecting;
        if (onScreen) schedule(); else halt();
      }, { threshold: 0.01 });
      intersectionObserver.observe(host);
    }
    themeObserver = new MutationObserver(function () {
      palette = readPalette();
      buildSprites();
      render(true);
      schedule();
    });
    themeObserver.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    document.addEventListener('visibilitychange', onVisibility);
    if (motionQuery) {
      if (motionQuery.addEventListener) motionQuery.addEventListener('change', onMotionChange);
      else if (motionQuery.addListener) motionQuery.addListener(onMotionChange);
    }

    function destroy() {
      destroyed = true;
      halt();
      if (resizeObserver) resizeObserver.disconnect(); else window.removeEventListener('resize', resize);
      if (intersectionObserver) intersectionObserver.disconnect();
      themeObserver.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      if (motionQuery) {
        if (motionQuery.removeEventListener) motionQuery.removeEventListener('change', onMotionChange);
        else if (motionQuery.removeListener) motionQuery.removeListener(onMotionChange);
      }
      host.removeEventListener('pointermove', onPointerMove);
      host.removeEventListener('pointerleave', onPointerLeave);
      canvas.removeEventListener('click', onClick);
      canvas.removeEventListener('keydown', onKeyDown);
    }

    resize();
    return { destroy: destroy, pause: halt, resume: schedule };
  }

  /* -------------------------------------------------------------- 4. bootstrap */
  var fields = [];
  Array.prototype.forEach.call(hosts, function (host, index) {
    var field = createField(host, index);
    if (field) fields.push(field);
  });

  // A page restored from the back/forward cache keeps its fields; a real unload tears them down.
  window.addEventListener('pagehide', function (event) {
    fields.forEach(function (field) { if (event.persisted) field.pause(); else field.destroy(); });
  });
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) fields.forEach(function (field) { field.resume(); });
  });
})();
