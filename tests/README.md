# Regression checks

Not part of the deployed site. They drive a real Chromium (Playwright) against a local copy of the site.

```bash
cd tests && npm install && npx playwright install chromium
npm run serve &            # static server that mimics GitHub Pages (brotli/gzip, max-age=600, no custom headers)
npm run test:functional    # 67 checks: field, audio (YouTube stubbed), reader, search, SEO/pre-render, shim
npm run test:responsive    # 11 pages × 8 widths × light+dark: overflow, clipping, tiny targets, tiny text, <h1> count
npm run test:a11y          # axe-core, WCAG 2.2 AA + best practices
npm run test:audio-size    # YouTube player must be ≥ 200×200 and unobscured at 8 widths
npm run bench              # particle frame pacing under CPU throttling (set CORES=8 to start at full quality)
npm run lighthouse         # set CHROME_PATH if Chrome is not found
```

Known limits: Chromium only; no real iOS/Android; YouTube is stubbed (the tests check *our* logic, not YouTube's);
timing numbers are noisy on a single-core or software-rendered machine (compare A/B runs, don't trust one run).
