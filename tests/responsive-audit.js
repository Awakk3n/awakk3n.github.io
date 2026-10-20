const { launch, context, PAGES, WIDTHS, open } = require('./lib');
const base = process.argv[2], out = process.argv[3], themes = (process.argv[4] || 'dark,light').split(',');
const probe = () => {
  const vw = document.documentElement.clientWidth, res = { overflow: [], clipped: [], small24: [], small44: 0, tiny: 0, h1: document.querySelectorAll('h1').length };
  const sel = el => el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.') : '');
  const scrollAncestor = el => { for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) { const s = getComputedStyle(p); if (/(auto|scroll|hidden|clip)/.test(s.overflowX) && p.scrollWidth > p.clientWidth - 1) return p; if (/(auto|scroll|hidden|clip)/.test(s.overflowX)) return p; } return null; };
  const docOverflow = document.documentElement.scrollWidth - vw;
  let _n = 0; for (const el of document.querySelectorAll('body *')) { if (++_n > 3200) break;
    const cs = getComputedStyle(el); if (cs.display === 'none' || cs.visibility === 'hidden') continue;
    if (el.closest('.skip-link, .sr-only, canvas')) continue;
    const r = el.getBoundingClientRect(); if (!r.width && !r.height) continue;
    if ((r.right > vw + 1 || r.left < -1) && cs.position !== 'fixed' && !scrollAncestor(el)) res.overflow.push(sel(el) + ' [' + Math.round(r.left) + '→' + Math.round(r.right) + ']');
    if (el.scrollWidth > el.clientWidth + 1 && /(hidden|clip)/.test(cs.overflowX) && cs.textOverflow !== 'ellipsis' && el.clientWidth > 0 && !el.closest('.audio-stage, .audio-panel, .field-lights')   /* .field-lights clips its glows on purpose: that is what stops them widening the page */) res.clipped.push(sel(el) + ' sw' + el.scrollWidth + '>cw' + el.clientWidth);
    if (/^(A|BUTTON|SELECT|INPUT|SUMMARY)$/.test(el.tagName) && cs.display !== 'inline' && !el.hidden && !(el.tagName==='INPUT' && el.type==='hidden') && !el.closest('.prose, .skip-link')) {
      const a = r.width, b = r.height;
      if (a < 24 || b < 24) res.small24.push(sel(el) + ' ' + Math.round(a) + '×' + Math.round(b));
      if (a < 44 || b < 44) res.small44++;
    }
    if (el.childNodes && [...el.childNodes].some(n => n.nodeType === 3 && n.nodeValue.trim()) && parseFloat(cs.fontSize) < 11) res.tiny++;
  }
  res.docOverflow = docOverflow; return res;
};
(async () => {
  const b = await launch(), report = [];
  for (const theme of themes) for (const [w, h] of WIDTHS) {
    const ctx = await context(b, { width: w, height: h, theme, mobile: w < 800, reducedMotion: 'reduce' }); const page = await ctx.newPage();
    const errs = []; page.on('pageerror', e => errs.push(e.message)); page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errs.push(m.text()); });
    for (const [name, rel] of PAGES) {
      await open(page, base, rel); const r = await page.evaluate(probe);
      report.push({ theme, w, name, docOverflow: r.docOverflow, overflow: [...new Set(r.overflow)].slice(0, 6), clipped: [...new Set(r.clipped)].slice(0, 4), small24: [...new Set(r.small24)].slice(0, 6), small44: r.small44, tiny: r.tiny, h1: r.h1, errs: [...new Set(errs)] });
    }
    await ctx.close();
  }
  await b.close(); require('fs').writeFileSync(out, JSON.stringify(report, null, 1));
  const bad = report.filter(r => r.docOverflow > 0 || r.overflow.length || r.clipped.length || r.small24.length || r.errs.length);
  console.log('combos', report.length, '| with hard issues', bad.length);
  const agg = {}; report.forEach(r => { r.overflow.forEach(o => agg['OVERFLOW ' + o.replace(/ \[.*/, '')] = (agg['OVERFLOW ' + o.replace(/ \[.*/, '')] || 0) + 1); r.clipped.forEach(o => agg['CLIP ' + o.replace(/ sw.*/, '')] = (agg['CLIP ' + o.replace(/ sw.*/, '')] || 0) + 1); r.small24.forEach(o => agg['<24px ' + o.replace(/ \d+×\d+$/, '')] = (agg['<24px ' + o.replace(/ \d+×\d+$/, '')] || 0) + 1); r.errs.forEach(e => agg['ERR ' + e.slice(0, 80)] = (agg['ERR ' + e.slice(0, 80)] || 0) + 1); });
  Object.entries(agg).sort((a, b) => b[1] - a[1]).slice(0, 40).forEach(([k, v]) => console.log(String(v).padStart(4), k));
  console.log('doc-level horizontal overflow combos:', report.filter(r => r.docOverflow > 0).map(r => r.name + '@' + r.w + '/' + r.theme + '(+' + r.docOverflow + ')').join(', ') || 'none');
  console.log('avg targets <44px per page:', Math.round(report.reduce((s, r) => s + r.small44, 0) / report.length), '| text<11px elements avg:', Math.round(report.reduce((s, r) => s + r.tiny, 0) / report.length));
  console.log('pages with !=1 h1:', [...new Set(report.filter(r => r.h1 !== 1).map(r => r.name + ' h1=' + r.h1))].join(', ') || 'none');
})();
