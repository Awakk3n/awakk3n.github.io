import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import fs from 'fs';
const [,, base, label, ...pages] = process.argv;
const chrome = await chromeLauncher.launch({ chromePath: process.env.CHROME_PATH || undefined, chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu'] });
const out = [];
for (const form of (process.env.FORM || 'mobile,desktop').split(',')) for (const pg of pages) {
  const flags = { port: chrome.port, output: 'json', logLevel: 'error', onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'], formFactor: form };
  const config = form === 'desktop' ? { extends: 'lighthouse:default', settings: { formFactor: 'desktop', screenEmulation: { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false }, throttling: { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1, requestLatencyMs: 0, downloadThroughputKbps: 0, uploadThroughputKbps: 0 } } } : undefined;
  const r = await lighthouse(base + '/' + pg, flags, config); const lhr = r.lhr; const a = lhr.audits;
  const row = { form, page: pg, perf: Math.round(lhr.categories.performance.score * 100), a11y: Math.round(lhr.categories.accessibility.score * 100), bp: Math.round(lhr.categories['best-practices'].score * 100), seo: Math.round(lhr.categories.seo.score * 100),
    FCP: Math.round(a['first-contentful-paint'].numericValue), LCP: Math.round(a['largest-contentful-paint'].numericValue), TBT: Math.round(a['total-blocking-time'].numericValue), CLS: +a['cumulative-layout-shift'].numericValue.toFixed(3), SI: Math.round(a['speed-index'].numericValue),
    bytes: Math.round(a['total-byte-weight'].numericValue / 1024), reqs: a['network-requests']?.details?.items?.length ?? null, renderBlocking: (a['render-blocking-insight'] || a['render-blocking-resources'])?.details?.items?.length ?? null };
  out.push(row); console.log(JSON.stringify(row));
}
await chrome.kill(); fs.writeFileSync(`lh-${label}.json`, JSON.stringify(out, null, 1));
