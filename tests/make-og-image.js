/* Renders the share image (assets/og-image.png, 1200×630) from the live home-page hero: the headline, the volume panel and the Reveal field.
   Usage: serve the site on :8802, run this, then optimise /tmp/og-raw.png into assets/og-image.png (see README). */
const { launch, context } = require('./lib');
(async () => { const b = await launch(); const ctx = await context(b, { width: 1200, height: 704, theme: 'dark' }); await ctx.addInitScript(() => Object.defineProperty(navigator, 'hardwareConcurrency', { get: () => 8 }));
  const page = await ctx.newPage(); await page.goto('http://localhost:8802/index.html', { waitUntil: 'load' }); await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(5000);
  for (let i = 0; i < 24; i++) { await page.mouse.move(640 + i * 18, 330 + Math.sin(i / 3) * 90); await page.waitForTimeout(60); } await page.waitForTimeout(900);
  const navH = await page.evaluate(() => Math.round(document.querySelector('.topbar').getBoundingClientRect().height));
  await page.screenshot({ path: '/tmp/og-raw.png', clip: { x: 0, y: navH, width: 1200, height: 630 } }); await b.close(); })();
