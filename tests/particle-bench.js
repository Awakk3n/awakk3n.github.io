// Particle/hero performance benchmark. Reports frame pacing + main-thread busy % under CPU throttling.
// NOTE: headless Chromium uses software rasterisation, so absolute numbers are pessimistic vs. a real GPU,
// but baseline-vs-new comparisons under identical conditions are valid.
const { launch, context, open } = require('./lib');
const base = process.argv[2], label = process.argv[3] || 'run', pagePath = process.argv[4] || 'index.html';
const rates = (process.argv[5] || '1,4,6').split(',').map(Number);
const SAMPLER = (ms, move) => new Promise(res => {
  const t = [], start = performance.now(); let last = start;
  (function f(now) { t.push(now - last); last = now; if (now - start < ms) requestAnimationFrame(f); else res(t); })(start);
});
const stats = a => { a = a.slice(2).sort((x, y) => x - y); const n = a.length, q = p => a[Math.min(n - 1, Math.floor(p * n))], mean = a.reduce((s, v) => s + v, 0) / n;
  return { frames: n, fps: +(1000 / mean).toFixed(1), p50: +q(.5).toFixed(1), p95: +q(.95).toFixed(1), p99: +q(.99).toFixed(1), over20: +(100 * a.filter(v => v > 20).length / n).toFixed(1), over33: +(100 * a.filter(v => v > 33.4).length / n).toFixed(1) }; };
(async () => {
  const b = await launch(), out = [];
  for (const [name, w, h, mobile] of [['desktop 1440', 1440, 900, false], ['mobile 390', 390, 844, true]]) for (const rate of rates) {
    const ctx = await context(b, { width: w, height: h, mobile, theme: 'dark' }); if (process.env.CORES) await ctx.addInitScript(n => Object.defineProperty(navigator, 'hardwareConcurrency', { get: () => n }), +process.env.CORES); const page = await ctx.newPage(); const cdp = await ctx.newCDPSession(page);
    await cdp.send('Emulation.setCPUThrottlingRate', { rate }); await cdp.send('Performance.enable');
    await open(page, base, pagePath); await page.waitForTimeout(1500);
    const m0 = await cdp.send('Performance.getMetrics'); const g = (m, n) => m.metrics.find(x => x.name === n).value;
    // idle (no pointer) window
    const idleP = page.evaluate(SAMPLER, 4000); const idle = await idleP;
    const m1 = await cdp.send('Performance.getMetrics');
    // interaction window: pointer sweeping across the hero (desktop) / touch-drag (mobile)
    const actP = page.evaluate(SAMPLER, 4000);
    if (!mobile) { for (let i = 0; i < 80; i++) { await page.mouse.move(700 + 500 * Math.cos(i / 6), 330 + 180 * Math.sin(i / 6)); await page.waitForTimeout(45); } }
    else { for (let i = 0; i < 6; i++) { await page.touchscreen.tap(120 + i * 30, 260 + i * 20); await page.waitForTimeout(500); } }
    const act = await actP; const m2 = await cdp.send('Performance.getMetrics');
    const busy = (a, c) => +(100 * (g(c, 'TaskDuration') - g(a, 'TaskDuration')) / (g(c, 'Timestamp') - g(a, 'Timestamp'))).toFixed(1);
    const tierEnd = await page.evaluate(() => window.FieldParticles ? window.FieldParticles.stats().tier : 'n/a'); out.push({ viewport: name, cpu: rate + '×', tier: tierEnd, idle: stats(idle), idleBusy: busy(m0, m1), active: stats(act), activeBusy: busy(m1, m2) });
    await ctx.close();
  }
  await b.close();
  console.log(`== ${label} — ${pagePath}`);
  console.log('viewport      cpu | IDLE fps  p95ms  >20ms%  >33ms%  mainThread% | ACTIVE fps  p95ms  >20ms%  >33ms%  mainThread%');
  out.forEach(r => console.log(`${r.viewport.padEnd(13)} ${r.cpu.padStart(3)} ${String(r.tier).padEnd(8)}| ${String(r.idle.fps).padStart(8)} ${String(r.idle.p95).padStart(6)} ${String(r.idle.over20).padStart(7)} ${String(r.idle.over33).padStart(7)} ${String(r.idleBusy).padStart(11)} | ${String(r.active.fps).padStart(10)} ${String(r.active.p95).padStart(6)} ${String(r.active.over20).padStart(7)} ${String(r.active.over33).padStart(7)} ${String(r.activeBusy).padStart(11)}`));
  require('fs').writeFileSync(`bench-${label}.json`, JSON.stringify(out, null, 1));
})();
