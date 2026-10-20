/* Narrow-screen check: no sideways overflow, and the header (collapsed and expanded) fits, at eight widths in both themes.
   Usage: node narrow.js http://localhost:8802 */
const { launch, context } = require('./lib'); const base = (process.argv[2] || 'http://localhost:8802').replace(/\/$/, '');
const pages = ['index.html', 'book.html?b=1', 'read.html?chapter=book-1-ch-03', 'read.html?chapter=book-3-ch-03', 'search.html', 'study.html', 'privacy.html', 'resource.html?resource=glossary', 'resource.html?resource=interview-bank', 'resource.html?resource=frameworks'];
(async () => { const b = await launch(); const bad = []; let n = 0;
  for (const w of [320, 360, 375, 390, 414, 640, 768, 1024]) for (const theme of ['dark', 'light']) { const ctx = await context(b, { width: w, height: 800, mobile: w < 700, theme, reducedMotion: 'reduce' }); const page = await ctx.newPage();
    for (const rel of pages) { await page.goto(base + '/' + rel, { waitUntil: 'load' }); await page.waitForTimeout(450); n++;
      const closed = await page.evaluate(() => { const d = document.documentElement, t = document.querySelector('.nav-toggle').getBoundingClientRect(), k = [...document.querySelectorAll('.topbar .wordmark, .topbar .reader-breadcrumb')]; return { over: d.scrollWidth - d.clientWidth, toggleRight: Math.round(t.right), vw: d.clientWidth }; });
      await page.click('.nav-toggle'); await page.waitForTimeout(450);
      const open = await page.evaluate(() => { const r = document.querySelector('.nav-actions').getBoundingClientRect(), d = document.documentElement; return { l: Math.round(r.left), r: Math.round(r.right), over: d.scrollWidth - d.clientWidth, vw: d.clientWidth, w: Math.round(r.width) }; });
      if (closed.over > 0 || closed.toggleRight > closed.vw) bad.push(`${rel}@${w}/${theme} collapsed: ${JSON.stringify(closed)}`);
      if (open.over > 0 || open.l < 0 || open.r > open.vw) bad.push(`${rel}@${w}/${theme} expanded: ${JSON.stringify(open)}`); }
    await ctx.close(); }
  console.log('checked', n, 'page/width/theme combinations, collapsed and expanded; problems:', bad.length ? '\n  ' + bad.slice(0, 25).join('\n  ') : 'none'); await b.close(); process.exit(bad.length ? 1 : 0); })();
