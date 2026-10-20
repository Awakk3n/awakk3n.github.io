const { launch, context, PAGES, open } = require('./lib');
const fs = require('fs'); const axeSrc = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const base = process.argv[2], out = process.argv[3];
(async () => {
  const b = await launch(), rows = [], agg = {};
  for (const theme of ['dark', 'light']) for (const [w, h, mobile] of [[390, 844, true], [1440, 900, false]]) {
    const ctx = await context(b, { width: w, height: h, theme, mobile }); const page = await ctx.newPage();
    for (const [name, rel] of PAGES) {
      await open(page, base, rel); await page.addScriptTag({ content: axeSrc });
      const res = await page.evaluate(async () => { const r = await axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] }, resultTypes: ['violations'] }); return r.violations.map(v => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.length, sample: v.nodes.slice(0, 2).map(n => n.target.join(' ') + ' :: ' + (n.failureSummary || '').split('\n').slice(1, 2).join(' ').trim().slice(0, 140)) })); });
      res.forEach(v => { const k = v.id; agg[k] = agg[k] || { id: v.id, impact: v.impact, help: v.help, combos: new Set(), pages: new Set(), nodes: 0, sample: v.sample[0] }; agg[k].combos.add(theme + '@' + w); agg[k].pages.add(name); agg[k].nodes += v.nodes; });
      rows.push({ theme, w, name, violations: res });
    }
    await ctx.close();
  }
  await b.close(); fs.writeFileSync(out, JSON.stringify(rows, null, 1));
  const list = Object.values(agg).sort((a, b) => ['critical', 'serious', 'moderate', 'minor'].indexOf(a.impact) - ['critical', 'serious', 'moderate', 'minor'].indexOf(b.impact));
  console.log('distinct rule violations:', list.length);
  list.forEach(v => console.log(`[${v.impact}] ${v.id} — ${v.help}\n    pages: ${[...v.pages].join(', ')} | combos ${v.combos.size}/4 | nodes ${v.nodes}\n    e.g. ${v.sample}`));
})();
