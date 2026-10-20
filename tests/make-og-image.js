const { launch, context } = require('./lib');
(async () => { const b = await launch(); const ctx = await context(b, { width: 1200, height: 704, theme: 'dark' }); await ctx.addInitScript(() => Object.defineProperty(navigator, 'hardwareConcurrency', { get: () => 8 }));
  const page = await ctx.newPage(); await page.goto('http://localhost:8802/index.html', { waitUntil: 'load' }); await page.evaluate(() => document.fonts.ready); /* writes /tmp/og-raw.png — crop/optimise into assets/og-image.png */ await page.waitForTimeout(1500);
  await page.waitForTimeout(6000); await page.screenshot({ path: '/tmp/og-raw.png', clip: { x: 0, y: 74, width: 1200, height: 630 } }); await b.close(); })();
