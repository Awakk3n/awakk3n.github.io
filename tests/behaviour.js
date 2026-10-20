/* Behaviour checks for the navigation, back button, chapter ids, links, reference pages and chapter actions.
   Usage: node behaviour.js http://localhost:8802 */
const { launch, context, CH_AUDIO } = require('./lib');
const base = (process.argv[2] || 'http://localhost:8802').replace(/\/$/, '');
let failed = 0; const check = (name, ok, detail) => { if (!ok) failed++; console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? '  → ' + detail : '')); };
const go = async (page, rel) => { await page.goto(base + '/' + rel, { waitUntil: 'load' }); await page.waitForTimeout(900); };
(async () => { const b = await launch(); const errs = [];
  const ctx = await context(b, { width: 1280, height: 800, reducedMotion: 'reduce' }); const page = await ctx.newPage(); page.on('pageerror', e => errs.push(e.message));
  // ---- header: the logo and one chevron; the tools are collapsed by default, on every page; no arrows on the links
  const pages = ['index.html', 'book.html?b=1', 'read.html?chapter=book-1-ch-03', 'search.html', 'study.html', 'resource.html?resource=glossary', 'privacy.html'];
  const bad = [];
  for (const rel of pages) { await go(page, rel); const r = await page.evaluate(() => { const t = document.querySelector('.nav-toggle'), a = document.querySelector('.nav-actions'); const links = [...document.querySelectorAll('.nav-actions .header-utility')].map(x => x.textContent.trim());
      return { closed: t && t.getAttribute('aria-expanded') === 'false', hidden: getComputedStyle(a).visibility === 'hidden', links, arrows: links.some(x => /[↗↘]/.test(x)) }; });
    if (!(r.closed && r.hidden && r.links.includes('Search') && r.links.includes('Study desk') && !r.arrows)) bad.push(rel + ' ' + JSON.stringify(r)); }
  check('header: collapsed by default; Search and Study desk on every page; no arrows', bad.length === 0, bad.join(' | '));
  await go(page, 'index.html'); await page.click('.nav-toggle'); await page.waitForTimeout(600);
  const open = await page.evaluate(() => ({ expanded: document.querySelector('.nav-toggle').getAttribute('aria-expanded'), vis: getComputedStyle(document.querySelector('.nav-actions')).visibility, right: Math.round(document.querySelector('.nav-actions').getBoundingClientRect().right), vw: innerWidth }));
  check('header: the chevron opens the tools, which stay inside the window', open.expanded === 'true' && open.vis === 'visible' && open.right <= open.vw, JSON.stringify(open));
  await page.keyboard.press('Escape'); await page.waitForTimeout(500); check('header: Escape closes it again', await page.evaluate(() => document.querySelector('.nav-toggle').getAttribute('aria-expanded') === 'false' && document.activeElement === document.querySelector('.nav-toggle')));
  await page.click('.nav-toggle'); await page.waitForTimeout(400); await page.mouse.click(300, 500); await page.waitForTimeout(500); check('header: clicking elsewhere closes it', await page.evaluate(() => document.querySelector('.nav-toggle').getAttribute('aria-expanded') === 'false'));
  // ---- home: the hero no longer carries the two buttons; the footer no longer repeats the header's links
  await go(page, 'index.html');
  check('home: hero has no "Explore the collection" / "Search all content"', await page.evaluate(() => !/Explore the collection|Search all content/.test(document.querySelector('.hero').textContent) && !document.querySelector('.hero .hero-actions')));
  check('footer: one link (Privacy), not a second copy of the header', await page.evaluate(() => [...document.querySelectorAll('.footer-nav a')].map(a => a.textContent.trim()).join('|') === 'Privacy & YouTube'));
  check('home: the library note is gone, replaced by a status line and a random-chapter button', await page.evaluate(() => !document.querySelector('.library-search-explainer') && /read/.test(document.querySelector('#search-status').textContent) && !!document.querySelector('#random-chapter')));
  await page.click('#random-chapter'); await page.waitForURL(/read\.html\?chapter=book-\d-ch-\d\d/, { timeout: 8000 }).catch(() => {}); check('home: "Random unread chapter" opens a chapter', /read\.html\?chapter=book-\d-ch-\d\d/.test(page.url()), page.url().replace(base, ''));
  // ---- back button: one label everywhere, and it really goes back
  const labels = []; for (const rel of ['book.html?b=2', 'search.html', 'study.html', 'resource.html?resource=glossary', 'privacy.html', CH_AUDIO]) { await go(page, rel); labels.push(await page.evaluate(() => { const a = document.querySelector('a[data-back]'); return a ? a.textContent.trim().replace(/\s+/g, ' ') + ' | ' + a.getAttribute('aria-label') : 'MISSING'; })); }
  check('back: every page has the same "← Back" (the destination is in its accessible name)', labels.every(l => /^← Back \| Back to /.test(l)), labels.join(' ; '));
  await go(page, 'index.html'); await page.click('.hero a[data-field-focus="1"]'); await page.waitForURL(/book\.html/); await page.waitForTimeout(800); await page.click('a[data-back]'); await page.waitForTimeout(900);
  check('back: returns to the page you came from', /\/(index\.html)?(#.*)?$/.test(new URL(page.url()).pathname + new URL(page.url()).hash) && !/book\.html/.test(page.url()), page.url().replace(base, ''));
  // ---- chapter ids: Book 3 follows the other books; old links and saved data still work
  await go(page, 'read.html?chapter=book-3-c13'); await page.waitForTimeout(600);
  check('ids: an old Book 3 link still opens the chapter and the address is tidied to book-3-ch-13', /chapter=book-3-ch-13/.test(page.url()) && await page.evaluate(() => !!document.querySelector('#chapter-content h2')), page.url().replace(base, ''));
  await go(page, 'index.html'); await page.evaluate(() => { localStorage.removeItem('field-ids-v2'); localStorage.setItem('field-progress', JSON.stringify({ 'book-3-c13': 1 })); localStorage.setItem('field-bookmarks', JSON.stringify({ 'book-3-c05': { title: 'x', url: 'read.html?chapter=book-3-c05' } })); }); await page.reload({ waitUntil: 'load' }); await page.waitForTimeout(600);
  const mig = await page.evaluate(() => ({ p: localStorage.getItem('field-progress'), b: localStorage.getItem('field-bookmarks'), f: localStorage.getItem('field-ids-v2') }));
  check('ids: saved progress and bookmarks are renamed once, automatically', /book-3-ch-13/.test(mig.p) && !/book-3-c13/.test(mig.p) && /book-3-ch-05/.test(mig.b) && !/book-3-c05/.test(mig.b) && mig.f === '1', JSON.stringify(mig));
  // ---- links in the book open in a new tab (same-page anchors stay)
  await go(page, 'read.html?chapter=book-3-ch-03'); await page.waitForTimeout(500);
  const links = await page.evaluate(() => { const a = [...document.querySelectorAll('#chapter-content a[href]')]; const real = a.filter(x => x.getAttribute('href').charAt(0) !== '#'); return { n: a.length, real: real.length, allNewTab: real.every(x => x.target === '_blank' && /noopener/.test(x.rel)), glossary: real.some(x => /resource=glossary/.test(x.getAttribute('href'))), anchorsStay: a.filter(x => x.getAttribute('href').charAt(0) === '#').every(x => !x.target) }; });
  check('links: every chapter link (glossary terms, chapters, external) opens in a new tab; anchors stay', links.real > 0 && links.allNewTab && links.glossary && links.anchorsStay, JSON.stringify(links));
  await go(page, 'resource.html?resource=glossary'); await page.waitForTimeout(500);
  check('links: reference-page links open in a new tab too', await page.evaluate(() => [...document.querySelectorAll('#resource-content a[href]')].filter(x => x.getAttribute('href').charAt(0) !== '#').every(x => x.target === '_blank')));
  // ---- chapters start in the same place whether they open with an introduction (Books 1, 2) or a heading (Book 3)
  const tops = []; for (const rel of ['read.html?chapter=book-1-ch-06', 'read.html?chapter=book-2-ch-06', 'read.html?chapter=book-3-ch-03']) { await go(page, rel); await page.waitForTimeout(500); tops.push(await page.evaluate(() => { const art = document.querySelector('#chapter-content'), first = [...art.children].find(e => e.getBoundingClientRect().height > 0); return Math.round(first.getBoundingClientRect().top - art.getBoundingClientRect().top); })); }
  check('chapter start: the first line sits at the same offset in Books 1, 2 and 3', Math.max(...tops) - Math.min(...tops) <= 1, 'offsets ' + tops.join(', ') + ' px');
  // ---- reference pages open on the entries; the maintainer notes are one click away; glossary has an A–Z strip
  await go(page, 'resource.html?resource=glossary'); await page.waitForTimeout(500);
  const g = await page.evaluate(() => { const firstVisible = [...document.querySelector('#resource-content').children].find(e => getComputedStyle(e).display !== 'none'); const az = document.querySelector('#guide-toc'); return { first: firstVisible.tagName + ' ' + firstVisible.textContent.trim().slice(0, 28), letters: az && !az.hidden ? az.children.length : 0, toggle: !!document.querySelector('.notes-toggle') }; });
  check('glossary: opens on the entries (not maintainer notes), with an A–Z strip and an "About this index" toggle', /^H2 Entries/.test(g.first) && g.letters >= 20 && g.toggle, JSON.stringify(g));
  await page.click('.notes-toggle'); await page.waitForTimeout(300); check('glossary: "About this index" reveals the notes', await page.evaluate(() => getComputedStyle(document.querySelector('#resource-content .is-note')).display !== 'none'));
  await page.click('#guide-toc a:nth-child(5)'); await page.waitForTimeout(500); check('glossary: a letter jumps to its first term', await page.evaluate(() => { const h = document.getElementById(location.hash.slice(1)); return !!h && h.tagName === 'H3' && Math.abs(h.getBoundingClientRect().top) < 260; }));
  for (const rel of ['resource.html?resource=interview-bank', 'resource.html?resource=frameworks']) { await go(page, rel); await page.waitForTimeout(500); check(rel.split('=')[1] + ': opens past the generated-from line and the schema/protocol notes', await page.evaluate(() => { const t = document.querySelector('#resource-content').innerText; return !/Generated from/.test(t) && !!document.querySelector('.notes-toggle'); })); }
  // ---- chapter actions: four equal buttons in one bar (desktop), one even row on a phone
  await go(page, CH_AUDIO); await page.waitForTimeout(500);
  const bar = await page.evaluate(() => { const bs = [...document.querySelectorAll('.action-bar > button')], r = bs.map(x => x.getBoundingClientRect()), cs = bs.map(x => getComputedStyle(x)); return { n: bs.length, sameH: new Set(r.map(x => Math.round(x.height))).size === 1, sameStyle: new Set(cs.map(c => c.backgroundColor + c.color + c.fontWeight)).size === 1, visible: r.every(x => x.width > 40 && x.height > 20), labels: bs.map(x => x.textContent.trim()).join('|') }; });
  check('actions: Save · Share · Print · Mark read are one bar of equal buttons (Mark read does not stand out)', bar.n === 4 && bar.sameH && bar.sameStyle && bar.visible, JSON.stringify(bar));
  const pctx = await context(b, { width: 390, height: 844, mobile: true, reducedMotion: 'reduce' }); const pp = await pctx.newPage(); await pp.goto(base + '/' + CH_AUDIO, { waitUntil: 'load' }); await pp.waitForTimeout(900);
  const pb = await pp.evaluate(() => { const bar = document.querySelector('.action-bar').getBoundingClientRect(), bs = [...document.querySelectorAll('.action-bar > button')].map(x => x.getBoundingClientRect()); return { left: Math.round(bar.left), right: Math.round(bar.right), widths: bs.map(x => Math.round(x.width)), over: document.documentElement.scrollWidth - document.documentElement.clientWidth }; });
  check('actions (phone): four equal columns inside the screen', pb.left >= 0 && pb.right <= 390 && Math.max(...pb.widths) - Math.min(...pb.widths) <= 2 && pb.over === 0, JSON.stringify(pb));
  await pp.click('.nav-toggle'); await pp.waitForTimeout(600); const pnl = await pp.evaluate(() => { const r = document.querySelector('.nav-actions').getBoundingClientRect(); return { l: Math.round(r.left), r: Math.round(r.right), vw: innerWidth, links: [...document.querySelectorAll('.nav-actions .header-utility')].map(a => a.textContent.trim()).join('|') }; });
  check('header (phone): the panel shows Search and Study desk and fits the screen', pnl.l >= 0 && pnl.r <= pnl.vw && /Search\|Study desk/.test(pnl.links), JSON.stringify(pnl));
  console.log('page errors:', errs.length ? errs.join(' | ') : 'none'); await b.close(); console.log(failed ? failed + ' FAILED' : 'all behaviour checks passed'); process.exit(failed ? 1 : 0); })();
