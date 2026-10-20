const { launch, context, open, CH_AUDIO } = require('./lib');
(async () => { const b = await launch();
  for (const [w, h, m] of [[320, 700, true], [375, 812, true], [390, 844, true], [414, 896, true], [768, 1024, true], [1024, 768, false], [1440, 900, false], [1920, 1080, false]]) {
    const ctx = await context(b, { width: w, height: h, mobile: m }); const page = await ctx.newPage();
    await page.route('**://www.youtube.com/**', r => r.fulfill({ contentType: 'text/html', body: '<html></html>' }));
    await open(page, process.argv[2] || 'http://localhost:8080', CH_AUDIO);
    const r = await page.evaluate(() => { document.querySelector('.audio-play').click(); const f = document.querySelector('.audio-frame'); f.scrollIntoView({ block: 'center', behavior: 'instant' }); const q = f.getBoundingClientRect(); const top = document.elementFromPoint(q.left + q.width / 2, q.top + q.height / 2); return { w: q.width, h: q.height, ok: top === f, docW: document.documentElement.scrollWidth - document.documentElement.clientWidth }; });
    console.log(String(w).padStart(5), `player ${r.w.toFixed(0)}×${r.h.toFixed(0)}`, r.w >= 200 && r.h >= 200 ? 'OK (≥200×200)' : 'TOO SMALL', r.ok ? 'unobscured' : 'OBSCURED', 'h-overflow:', r.docW); await ctx.close(); }
  await b.close(); })();
