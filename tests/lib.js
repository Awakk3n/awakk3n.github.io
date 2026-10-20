// Shared Playwright helpers for the regression scripts in this folder.
const { chromium } = require('playwright');

async function launch(opts) { return chromium.launch(Object.assign({ args: ['--no-sandbox'] }, opts || {})); }

async function context(browser, o) {
  o = Object.assign({ width: 1440, height: 900, theme: 'dark', mobile: false, reducedMotion: 'no-preference', dsf: 1 }, o || {});
  const ctx = await browser.newContext({
    viewport: { width: o.width, height: o.height }, deviceScaleFactor: o.mobile ? Math.max(o.dsf, 2) : o.dsf,
    isMobile: !!o.mobile, hasTouch: !!o.mobile, colorScheme: o.theme, reducedMotion: o.reducedMotion
  });
  await ctx.addInitScript(t => { try { localStorage.setItem('field-theme', t); } catch (e) {} }, o.theme);
  // Tests never reach YouTube; the ones that need it stub it explicitly (see functional.js).
  if (o.blockYouTube !== false) await ctx.route(/(youtube\.com|ytimg\.com|googlevideo\.com)/, r => r.abort());
  return ctx;
}

const CH_AUDIO = 'read.html?chapter=book-1-ch-03';   // has an audio mapping
const CH_PLAIN = 'read.html?chapter=book-3-ch-13';     // long, no audio

const PAGES = [
  ['home', 'index.html'],
  ['book1', 'book.html?b=1'],
  ['book3', 'book.html?b=3'],
  ['read-audio', CH_AUDIO],
  ['read-plain', CH_PLAIN],
  ['search', 'search.html?q=metric'],
  ['study', 'study.html'],
  ['privacy', 'privacy.html'],
  ['res-glossary', 'resource.html?resource=glossary'],
  ['res-interview', 'resource.html?resource=interview-bank'],
  ['res-guide', 'resource.html?resource=how-to-read']
];
const WIDTHS = [[320, 700], [375, 812], [390, 844], [414, 896], [768, 1024], [1024, 768], [1440, 900], [1920, 1080]];

async function open(page, base, rel) {
  await page.goto(base + '/' + rel, { waitUntil: 'load' });
  await page.waitForTimeout(700);
}
module.exports = { chromium, launch, context, PAGES, WIDTHS, open, CH_AUDIO, CH_PLAIN };
