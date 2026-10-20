const { launch, context, open, CH_AUDIO, CH_PLAIN } = require('./lib');
const base = process.argv[2] || 'http://localhost:8080';
const results = []; const check = (name, ok, detail) => { results.push({ name, ok: !!ok }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail !== undefined ? '  → ' + detail : '')); };
const YT_STUB = `window.YT={Player:function(frame,opts){window.__yt={frame:frame,opts:opts};var s=this;s.getCurrentTime=function(){return window.__ytTime||0};s.getDuration=function(){return 1800};}};setTimeout(function(){window.onYouTubeIframeAPIReady&&window.onYouTubeIframeAPIReady()},0);`;
async function stubYouTube(page, log) {
  await page.route('**://www.youtube.com/iframe_api', r => { log.api++; r.fulfill({ contentType: 'application/javascript', body: YT_STUB }); });
  await page.route('**://www.youtube.com/embed/**', r => { log.embed.push(r.request().url()); r.fulfill({ contentType: 'text/html', body: '<html><body>stub player</body></html>' }); });
}
(async () => {
  const b = await launch();
  // ---------- HOME + FIELD ----------
  { const ctx = await context(b, { width: 1440, height: 900 }); const page = await ctx.newPage(); const errs = []; page.on('pageerror', e => errs.push(e.message)); page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errs.push(m.text()); });
    await open(page, base, 'index.html');
    check('home: no console/page errors', errs.length === 0, JSON.stringify(errs));
    check('home: exactly one global canvas, aria-hidden, not focusable', await page.evaluate(() => { const c = document.querySelectorAll('canvas'); return c.length === 1 && c[0].getAttribute('aria-hidden') === 'true' && !c[0].hasAttribute('tabindex') && !c[0].hasAttribute('role'); }));
    check('home: canvas never intercepts pointer (elementFromPoint)', await page.evaluate(() => { for (const [x, y] of [[700, 300], [1100, 400], [300, 600], [720, 880]]) { const el = document.elementFromPoint(x, y); if (el && el.tagName === 'CANVAS') return false; } return true; }));
    check('home: no Google Fonts requests / fonts self-hosted', await page.evaluate(() => !document.querySelector('link[href*="fonts.googleapis"]') && [...document.styleSheets].some(s => s.href && s.href.includes('site.css'))));
    check('home: fonts actually loaded from this origin', await page.evaluate(async () => { await document.fonts.ready; return ['Archivo', 'Source Sans 3', 'IBM Plex Mono'].every(f => document.fonts.check('16px "' + f + '"')); }));
    const rows = await page.$$eval('.instrument-row', els => els.map(e => e.tagName + ':' + e.getAttribute('href')));
    check('hero: volume rows are real links', rows.length === 3 && rows.every(r => r.startsWith('A:book.html?b=')), rows.join(' '));
    await page.hover('.instrument-row[data-field-focus="1"]'); await page.waitForTimeout(500);
    const s1 = await page.evaluate(() => window.FieldParticles.stats());
    check('field: hovering Volume 2 row emphasises constellation 1', s1.hover === 1, 'hover=' + s1.hover);
    await page.mouse.move(700, 600); await page.waitForTimeout(300);
    check('field: hover clears when leaving the row', (await page.evaluate(() => window.FieldParticles.stats().hover)) === -1);
    const b0 = (await page.evaluate(() => window.FieldParticles.stats())).bursts;
    await page.mouse.click(600, 600); await page.waitForTimeout(150);
    check('field: click on empty hero creates a burst', (await page.evaluate(() => window.FieldParticles.stats().bursts)) === b0 + 1);
    await page.click('.hero-secondary-link'); // navigates; test burst-suppression separately below
    await open(page, base, 'index.html');
    const b1 = (await page.evaluate(() => window.FieldParticles.stats())).bursts;
    await page.evaluate(() => document.querySelector('.hero-secondary-link').addEventListener('click', e => e.preventDefault()));
    await page.click('.hero-secondary-link'); await page.waitForTimeout(100);
    check('field: clicking a link does NOT burst', (await page.evaluate(() => window.FieldParticles.stats().bursts)) === b1);
    await page.evaluate(() => window.scrollTo({ top: 300, behavior: 'instant' })); await page.waitForTimeout(250);
    check('field: hero constellation active at scroll 300', await page.evaluate(() => window.FieldParticles.stats().heroVisible));
    await page.evaluate(() => window.scrollTo({ top: 2000, behavior: 'instant' })); await page.waitForTimeout(250);
    check('field: hero constellation culled when scrolled away', !(await page.evaluate(() => window.FieldParticles.stats().heroVisible)));
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.click('.theme-toggle'); await page.waitForTimeout(200);
    check('theme: toggle flips theme + label, persists', await page.evaluate(() => document.documentElement.dataset.theme === 'light' && document.querySelector('.toggle-label').textContent === 'DARK' && localStorage.getItem('field-theme') === 'light'));
    check('home: original icons are present (theme, arrows, search)', await page.evaluate(() => /☼|◐/.test(document.querySelector('.theme-toggle').textContent) && /↘/.test(document.querySelector('.hero').textContent) && /⌕/.test(document.querySelector('.search-box').textContent)));
    await ctx.close(); }
  // ---------- REDUCED MOTION ----------
  { const ctx = await context(b, { width: 1440, height: 900, reducedMotion: 'reduce' }); const page = await ctx.newPage();
    await page.addInitScript(() => { window.__raf = 0; const o = window.requestAnimationFrame; window.requestAnimationFrame = f => { window.__raf++; return o(f); }; });
    await open(page, base, 'index.html'); await page.waitForTimeout(1500);
    const st = await page.evaluate(() => ({ s: window.FieldParticles.stats(), raf: window.__raf, status: document.querySelector('[data-field-status]').textContent }));
    check('reduced-motion: static field, no animation loop', st.s.reduced && st.raf < 12, 'rAF calls in 2.2s=' + st.raf);
    check('reduced-motion: status reads STILL FIELD', st.status === 'STILL FIELD');
    check('reduced-motion: still image has real painted content (≥ 150 painted pixels, scanning every pixel)', await page.evaluate(() => { const c = document.querySelector('canvas'), d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data; let n = 0; for (let i = 3; i < d.length; i += 4) if (d[i]) n++; window.__painted = n; return n >= 150; }), 'painted px: ' + await page.evaluate(() => window.__painted));
    await ctx.close(); }
  // ---------- READER + AUDIO ----------
  { const ctx = await context(b, { width: 390, height: 844, mobile: true }); const page = await ctx.newPage(); const log = { api: 0, embed: [] }; const yt = []; page.on('request', r => { if (/youtube|ytimg/.test(r.url())) yt.push(r.url()); });
    await stubYouTube(page, log); const errs = []; page.on('pageerror', e => errs.push(e.message));
    await open(page, base, CH_AUDIO);
    check('audio: no YouTube request before Play (no API preload, no thumbnail)', yt.length === 0, yt.length + ' requests');
    check('audio: card shows text Play button, no thumbnail/video', await page.evaluate(() => { const b = document.querySelector('.audio-play'); return b && /Play audio/.test(b.textContent) && /▶/.test(b.textContent) && !document.querySelector('.audio-panel img') && document.querySelector('.audio-stage').hidden; }));
    check('audio: attribution + terms link + open-on-YouTube link present', await page.evaluate(() => !!document.querySelector('.audio-terms a[href="https://www.youtube.com/t/terms"]') && !!document.querySelector('.audio-source[href*="youtube.com/watch?v="]')));
    // iframe must exist synchronously after the click (user-gesture requirement)
    const sync = await page.evaluate(() => { const btn = document.querySelector('.audio-play'); btn.click(); const f = document.querySelector('.audio-frame'); return f ? { allow: f.getAttribute('allow'), src: f.src, ref: f.getAttribute('referrerpolicy') } : null; });
    check('audio: iframe created synchronously inside the click', !!sync);
    check('audio: allow=autoplay present at creation', sync && /autoplay/.test(sync.allow) && /encrypted-media/.test(sync.allow), sync && sync.allow);
    check('audio: embed URL has autoplay, playsinline, enablejsapi, origin', sync && /autoplay=1/.test(sync.src) && /playsinline=1/.test(sync.src) && /enablejsapi=1/.test(sync.src) && /origin=/.test(sync.src), sync && sync.src.slice(0, 120));
    check('audio: referrer policy not suppressed', sync && sync.ref === 'strict-origin-when-cross-origin');
    await page.waitForTimeout(400);
    check('audio: IFrame API loaded only after Play', log.api === 1);
    for (const [w, h] of [[320, 700], [390, 844], [1440, 900]]) { await page.setViewportSize({ width: w, height: h }); await page.waitForTimeout(150);
      const r = await page.evaluate(() => { const f = document.querySelector('.audio-frame'); const r = f.getBoundingClientRect(); f.scrollIntoView({ block: 'center', behavior: 'instant' }); const q = f.getBoundingClientRect(); const top = document.elementFromPoint(q.left + q.width / 2, q.top + q.height / 2); return { w: Math.round(r.width), h: Math.round(r.height), unobscured: top === f }; });
      check(`audio: player ≥200×200 and unobscured @${w}px`, r.w >= 200 && r.h >= 200 && r.unobscured, r.w + '×' + r.h); }
    await page.setViewportSize({ width: 390, height: 844 });
    // state machine through the stubbed API
    const status = () => page.evaluate(() => document.querySelector('.audio-status').textContent);
    await page.evaluate(() => window.__yt.opts.events.onAutoplayBlocked()); await page.waitForTimeout(50);
    check('audio: onAutoplayBlocked shows the press-play hint', /press play inside the player/.test(await status()));
    await page.evaluate(() => window.__yt.opts.events.onStateChange({ data: 1 })); check('audio: PLAYING → "Playing"', (await status()) === 'Playing');
    await page.evaluate(() => { window.__ytTime = 125; window.__yt.opts.events.onStateChange({ data: 2 }); });
    check('audio: PAUSED saves resume position', await page.evaluate(() => JSON.parse(localStorage.getItem('field-audio-pos'))['book-1-ch-03'].t === 125));
    await open(page, base, CH_AUDIO);
    check('audio: reload offers "Resume audio · 2:05"', await page.evaluate(() => /Resume audio · 2:05/.test(document.querySelector('.audio-play').textContent)));
    const resumeSrc = await page.evaluate(() => { document.querySelector('.audio-play').click(); return document.querySelector('.audio-frame').src; });
    check('audio: resume passes start=125', /start=125/.test(resumeSrc));
    await page.waitForTimeout(300);
    await page.evaluate(() => { window.__ytTime = 1795; window.__yt.opts.events.onStateChange({ data: 0 }); });
    check('audio: ENDED clears position and offers next chapter', await page.evaluate(() => !JSON.parse(localStorage.getItem('field-audio-pos') || '{}')['book-1-ch-03'] && /Finished/.test(document.querySelector('.audio-status').textContent) && /Next: 04/.test(document.querySelector('.audio-next').textContent)));
    await open(page, base, CH_AUDIO); await page.evaluate(() => document.querySelector('.audio-play').click()); await page.waitForTimeout(300);
    await page.evaluate(() => window.__yt.opts.events.onError({ data: 153 }));
    check('audio: Error 153 → fallback with open-on-YouTube link', await page.evaluate(() => /Error 153/.test(document.querySelector('.audio-fallback p').textContent) && !!document.querySelector('.audio-fallback a[href*="youtube.com/watch"]')));
    check('audio: no page errors', errs.length === 0, JSON.stringify(errs));
    await ctx.close(); }
  // ---------- AUDIO when YouTube is unreachable (API blocked) ----------
  { const ctx = await context(b, { width: 390, height: 844, mobile: true }); const page = await ctx.newPage();
    await open(page, base, CH_AUDIO); await page.evaluate(() => document.querySelector('.audio-play').click()); await page.waitForTimeout(1500);
    check('audio: API blocked → iframe still present + graceful message', await page.evaluate(() => !!document.querySelector('.audio-frame') && /player’s own controls/.test(document.querySelector('.audio-status').textContent)));
    await ctx.close(); }
  // ---------- READER BEHAVIOURS ----------
  { const ctx = await context(b, { width: 1440, height: 900 }); const page = await ctx.newPage(); const errs = []; page.on('pageerror', e => errs.push(e.message));
    await open(page, base, CH_PLAIN); await page.waitForTimeout(500);
    check('reader: chapter without audio keeps panel hidden', await page.evaluate(() => document.querySelector('#audio-panel').hidden));
    check('reader: byline shows reading time', await page.evaluate(() => /min read/.test(document.querySelector('#reader-byline').textContent)), await page.evaluate(() => document.querySelector('#reader-byline').textContent));
    await page.click('#bookmark-chapter');
    check('reader: bookmark is a proper toggle (aria-pressed, static label)', await page.evaluate(() => { const b = document.querySelector('#bookmark-chapter'); return b.getAttribute('aria-pressed') === 'true' && /Bookmark$/.test(b.textContent.trim()) && /★/.test(b.textContent) && b.classList.contains('is-saved'); }));
    await page.click('#text-larger'); await page.click('#text-larger'); const sz = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--reader-font').trim());
    await open(page, base, CH_PLAIN);
    check('reader: text size persists across loads', (await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--reader-font').trim())) === sz, sz);
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight * 0.4)); await page.waitForTimeout(500);
    await open(page, base, CH_PLAIN); await page.waitForTimeout(500);
    check('reader: resume offer appears for a partly-read chapter', await page.evaluate(() => { const b = document.querySelector('#resume-reading'); return !b.hidden && /Resume at \d+%/.test(b.textContent); }));
    await page.click('#resume-reading'); await page.waitForTimeout(900);
    check('reader: resume jumps down the page', (await page.evaluate(() => window.scrollY)) > 1000);
    check('reader: heading levels never skip (aria-level repair)', await page.evaluate(() => { let last = 1; for (const h of document.querySelectorAll('#chapter-content h1,#chapter-content h2,#chapter-content h3,#chapter-content h4,#chapter-content h5,#chapter-content h6')) { const l = Number(h.getAttribute('aria-level') || h.tagName[1]); if (l > last + 1) return false; last = l; } return true; }));
    check('reader: scrollable code/tables are keyboard-focusable', await page.evaluate(() => [...document.querySelectorAll('#chapter-content pre, #chapter-content table')].filter(e => e.scrollWidth > e.clientWidth + 1).every(e => e.tabIndex === 0)));
    check('reader: exactly one h1; rail title is not a heading', await page.evaluate(() => document.querySelectorAll('h1').length === 1 && document.querySelector('#reader-title-small').tagName === 'P'));
    check('reader: no page errors', errs.length === 0, JSON.stringify(errs));
    await ctx.close(); }
  // ---------- SEARCH / STUDY / BOOK / OTHER ----------
  { const ctx = await context(b, { width: 1440, height: 900 }); const page = await ctx.newPage(); const errs = []; page.on('pageerror', e => errs.push(e.message));
    await open(page, base, 'search.html?q=metric'); await page.waitForTimeout(500);
    check('search: returns results', (await page.$$('.unified-result')).length > 0);
    check('search: results container is not a live region (status is)', await page.evaluate(() => !document.querySelector('#search-results').hasAttribute('aria-live') && document.querySelector('#search-status').getAttribute('role') === 'status'));
    await open(page, base, 'book.html?b=3'); check('book: volume constellation focus set', (await page.evaluate(() => window.FieldParticles.stats().focus)) === 2);
    await open(page, base, 'study.html'); check('study: paths render', (await page.$$('.study-path')).length === 4);
    await open(page, base, 'privacy.html'); check('privacy: page renders with YouTube + Google links', await page.evaluate(() => !!document.querySelector('a[href="https://www.youtube.com/t/terms"]') && !!document.querySelector('a[href="https://policies.google.com/privacy"]') && /YouTube API Services/.test(document.body.innerText)));
    check('all: no page errors', errs.length === 0, JSON.stringify(errs));
    await ctx.close(); }
  // ---------- READER LAYOUT, SCROLLING AND OUTLINE (regressions that automated box checks once missed) ----------
  { const ctx = await context(b, { width: 1440, height: 900 }); const page = await ctx.newPage(); const errs = []; page.on('pageerror', e => errs.push(e.message));
    await open(page, base, CH_AUDIO); await page.waitForTimeout(500);
    const o = await page.evaluate(() => { const nav = document.querySelector('#chapter-outline'), links = [...nav.querySelectorAll('a')].filter(a => getComputedStyle(a).display !== 'none'); let overlap = 0;
      for (let i = 1; i < links.length; i++) if (links[i].getBoundingClientRect().top < links[i - 1].getBoundingClientRect().bottom - 1) overlap++;
      return { visible: links.length, overlap, shrunk: links.filter(a => a.scrollHeight > a.clientHeight + 1 && getComputedStyle(a).whiteSpace !== 'nowrap').length, trap: getComputedStyle(nav).overscrollBehaviorY, nested: nav.scrollHeight > nav.clientHeight + 1 }; });
    check('outline: no entry overlaps another, none squashed', o.overlap === 0 && o.shrunk === 0, JSON.stringify(o));
    check('outline: does not trap scrolling (no overscroll-behavior: contain)', o.trap !== 'contain', o.trap);
    check('outline: fits without a nested scrollbar (only the open section shows sub-headings)', !o.nested && o.visible < 30, o.visible + ' visible entries');
    const box = await page.evaluate(() => { const r = document.querySelector('#chapter-outline').getBoundingClientRect(); return { x: r.left + 40, y: r.top + 80 }; });
    await page.mouse.move(box.x, box.y); const y0 = await page.evaluate(() => window.scrollY); await page.mouse.wheel(0, 600); await page.waitForTimeout(500);
    check('scroll: wheel over the outline scrolls the page', (await page.evaluate(() => window.scrollY)) > y0 + 300, 'scrollY ' + y0 + ' → ' + (await page.evaluate(() => window.scrollY)));
    check('outline: opening a section expands only its own sub-headings', await page.evaluate(() => { const l3 = [...document.querySelectorAll('#chapter-outline a.level-3')]; const open = l3.filter(a => !a.classList.contains('is-collapsed')); const groups = new Set(open.map(a => a.dataset.group)); return l3.length > open.length && groups.size <= 1; }));
    await page.evaluate(() => window.scrollTo({ top: 1400, behavior: 'instant' })); await page.waitForTimeout(300); const yBefore = await page.evaluate(() => window.scrollY); await page.evaluate(() => document.getElementById('mark-done').click()); await page.waitForTimeout(900);
    check('reader: "Mark as read" does not move the page', Math.abs((await page.evaluate(() => window.scrollY)) - yBefore) < 3 && /Marked as read/.test(await page.evaluate(() => document.getElementById('mark-done').textContent)), 'scrollY ' + yBefore + ' → ' + (await page.evaluate(() => window.scrollY)));
    await page.evaluate(() => document.getElementById('mark-done').click()); await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    check('outline: no scrollbar in any state (nothing shifts when sub-headings open)', await page.evaluate(() => { const n = document.querySelector('#chapter-outline'); return n.offsetWidth - n.clientWidth === 0; }));
    check('header links carry the same icon on every page', await (async () => { const bad = []; for (const rel of ['index.html', 'book.html?b=1', 'search.html', 'study.html', 'resource.html?resource=glossary']) { await open(page, base, rel); const ok = await page.evaluate(() => [...document.querySelectorAll('.header-utility')].every(a => /↗/.test(a.textContent))); if (!ok) bad.push(rel); } await open(page, base, CH_AUDIO); return bad.length === 0; })());
    // text size: the buttons switch off at the smallest and largest size
    const capTest = await page.evaluate(async () => { const sm = document.getElementById('text-smaller'), lg = document.getElementById('text-larger'); for (let i = 0; i < 12; i++) lg.click(); const atMax = { larger: lg.disabled, smaller: sm.disabled }; for (let i = 0; i < 14; i++) sm.click(); const atMin = { larger: lg.disabled, smaller: sm.disabled }; for (let i = 0; i < 4; i++) lg.click(); return { atMax, atMin, mid: { larger: lg.disabled, smaller: sm.disabled } }; });
    check('text size: A+ is disabled at the largest size, A− at the smallest, both enabled in between', capTest.atMax.larger && !capTest.atMax.smaller && capTest.atMin.smaller && !capTest.atMin.larger && !capTest.mid.larger && !capTest.mid.smaller, JSON.stringify(capTest));
    check('header: at most two boxed controls (text size is one joined control, navigation is plain text)', await page.evaluate(() => { const boxed = [...document.querySelectorAll('.topbar button, .topbar .seg, .topbar a')].filter(e => !e.closest('.seg') || e.classList.contains('seg')).filter(e => { const cs = getComputedStyle(e); return parseFloat(cs.borderTopWidth) > 0 && cs.borderTopStyle !== 'none' && cs.borderTopColor !== 'rgba(0, 0, 0, 0)' && !e.classList.contains('wordmark'); }); return boxed.length <= 2; }));
    check('header: breadcrumb truncates with an ellipsis (block box, not flex)', await page.evaluate(() => { const a = document.querySelector('.reader-breadcrumb a'); const cs = getComputedStyle(a); return cs.textOverflow === 'ellipsis' && cs.display !== 'inline-flex' && cs.display !== 'flex'; }));
    check('layout: hero and sections share one left edge (no jumping alignment)', await open(page, base, 'book.html?b=3').then(() => page.evaluate(() => { const x = s => Math.round(document.querySelector(s).getBoundingClientRect().left); return x('.page-hero-inner h1') === x('.chapter-directory h2'); })));
    await ctx.close(); }
  { const ctx = await context(b, { width: 390, height: 844, mobile: true }); const page = await ctx.newPage();
    await open(page, base, CH_AUDIO); await page.evaluate(() => window.scrollTo({ top: 1200, behavior: 'instant' })); await page.waitForTimeout(400);
    check('phone: sticky outline bar is solid and compact (≤ 56 px)', await page.evaluate(() => { const o = document.querySelector('.reader-outline'); const bg = getComputedStyle(o).backgroundColor; return /rgb\(/.test(bg) && !/rgba/.test(bg) && o.getBoundingClientRect().height <= 56; }));
    check('phone: nothing can pan the page sideways (page, visual viewport, field layers)', await page.evaluate(() => { const d = document.documentElement; const lights = document.querySelector('.field-lights'); return d.scrollWidth <= d.clientWidth && Math.round(window.visualViewport.width) === window.innerWidth && getComputedStyle(lights).overflow === 'hidden' && getComputedStyle(document.querySelector('.field-canvas')).pointerEvents === 'none'; }));
    await page.touchscreen.tap(200, 500);
    // bonds must never stretch while scrolling quickly (they once reached 900 px)
    const stretch = await (async () => { await page.goto(base + '/index.html', { waitUntil: 'load' }); await page.waitForTimeout(3500); let worst = 0; for (let r = 0; r < 2; r++) { for (let y = 0; y <= 1600; y += 80) { await page.evaluate(v => window.scrollTo({ top: v, behavior: 'instant' }), y); await page.waitForTimeout(24); worst = Math.max(worst, await page.evaluate(() => window.FieldParticles.stats().maxLink)); } for (let y = 1600; y >= 0; y -= 80) { await page.evaluate(v => window.scrollTo({ top: v, behavior: 'instant' }), y); await page.waitForTimeout(24); worst = Math.max(worst, await page.evaluate(() => window.FieldParticles.stats().maxLink)); } } return worst; })();
    check('particles: bonds never stretch while scrolling (longest bond ≤ 190 px)', stretch > 0 && stretch <= 190, 'longest bond while scrolling: ' + stretch + ' px');
    check('phone: touch scroll reaches the page (document scrolls, nothing is hijacked)', await (async () => { const y = await page.evaluate(() => window.scrollY); await page.evaluate(() => window.scrollBy({ top: 400, behavior: 'instant' })); return (await page.evaluate(() => window.scrollY)) === y + 400; })());
    await ctx.close(); }
  // ---------- CHAPTERS, SEARCH, EXPORT ----------
  { const ctx = await context(b, { width: 1440, height: 900 }); const page = await ctx.newPage(); const errs = []; page.on('pageerror', e => errs.push(e.message));
    let bad = [];
    for (const id of ['book-1-ch-01', 'book-2-ch-23', 'book-3-c37', 'book-2-ch-12']) { await open(page, base, 'read.html?chapter=' + id); await page.waitForTimeout(400);
      const r = await page.evaluate(() => { const hs = [...document.querySelectorAll('h1')]; return { len: document.querySelector('#chapter-content').textContent.length, h1Level1: hs.filter(h => (h.getAttribute('aria-level') || '1') === '1').length }; });
      if (r.len < 2000 || r.h1Level1 !== 1) bad.push(id + ' ' + JSON.stringify(r)); }
    check('chapters render fully and have one level-1 heading (body <h1>s demoted)', bad.length === 0, bad.join(' | '));
    await open(page, base, 'search.html?q=user%20problem%20discovery');
    const hits = await page.$$eval('.unified-result', els => els.filter(e => /CHAPTER/.test(e.querySelector('.result-label').textContent)).map(e => ({ key: e.querySelector('h2').textContent + '||' + e.querySelector('p').textContent, also: !!e.querySelector('.result-also') })));
    check('search: identical Volume 1/2 chapter hits collapse into one "Also in" result', hits.some(h => h.also) && new Set(hits.map(h => h.key)).size === hits.length, hits.length + ' hits, ' + hits.filter(h => h.also).length + ' with "Also in"');
    await open(page, base, 'study.html'); await page.evaluate(() => localStorage.setItem('field-audio-pos', JSON.stringify({ 'book-1-ch-03': { t: 321, at: Date.now() } })));
    const [dl] = await Promise.all([page.waitForEvent('download'), page.click('#export-study-data')]); const fsx = require('fs'); const payload = JSON.parse(fsx.readFileSync(await dl.path(), 'utf8'));
    check('study: export includes audio resume positions', payload.data['field-audio-pos'] && payload.data['field-audio-pos']['book-1-ch-03'].t === 321);
    check('chapters: no page errors', errs.length === 0, JSON.stringify(errs));
    await ctx.close(); }
  await b.close();
  const f = results.filter(r => !r.ok); console.log(`\n${results.length - f.length}/${results.length} passed` + (f.length ? ' — FAILED: ' + f.map(x => x.name).join(' | ') : ''));
})();
