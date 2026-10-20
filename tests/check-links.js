/* Link check (no browser needed): every internal link on every page, in every chapter and in the reference pages must resolve.
   Run:  node tests/check-links.js   (from the repository root; exits 1 on any problem) */
const fs = require('fs'), path = require('path'), root = path.resolve(__dirname, '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const books = JSON.parse(read('books.json')); const problems = []; let checked = 0;
const ids = new Set(), bookIds = new Set(books.map(b => String(b.id))); const resourceIds = new Set();
// 1. the catalogue itself: one id pattern for every book, files that exist, urls that match
books.forEach(b => b.chapters.forEach(c => {
  ids.add(c.id); checked++;
  if (!new RegExp('^book-' + b.id + '-ch-\\d{2}$').test(c.id)) problems.push('id does not follow book-N-ch-NN: ' + c.id);
  if (c.readUrl !== 'read.html?chapter=' + c.id) problems.push('readUrl mismatch: ' + c.id + ' → ' + c.readUrl);
  if (!fs.existsSync(path.join(root, c.file))) problems.push('missing source file: ' + c.file);
  if (!fs.existsSync(path.join(root, c.file.replace(/\.md$/, '.content.js')))) problems.push('missing generated content: ' + c.file.replace(/\.md$/, '.content.js'));
  const num = c.id.replace(/^book-\d+-ch-/, ''), fileNum = path.basename(c.file).split('-')[1];
  if (num !== fileNum) problems.push('file number differs from id: ' + c.file + ' vs ' + c.id);
}));
(read('assets/resource-data.js').match(/"id":\s*"([a-z-]+)"/g) || []).forEach(m => resourceIds.add(m.replace(/.*"([a-z-]+)"$/, '$1')));
// 2. every link in pages, scripts and generated content
const sources = [...fs.readdirSync(root).filter(f => f.endsWith('.html')), ...fs.readdirSync(path.join(root, 'assets')).filter(f => f.endsWith('.js')).map(f => 'assets/' + f), ...fs.readdirSync(path.join(root, 'chapters')).filter(f => f.endsWith('.content.js')).map(f => 'chapters/' + f)];
const staticAnchors = {}; fs.readdirSync(root).filter(f => f.endsWith('.html')).forEach(f => { staticAnchors[f] = new Set([...read(f).matchAll(/\bid="([^"]+)"/g)].map(m => m[1])); });
for (const f of sources) { const s = read(f);
  for (const m of s.matchAll(/read\.html\?chapter=([A-Za-z0-9_-]+)/g)) { checked++; if (!ids.has(m[1])) problems.push(f + ': unknown chapter ' + m[1]); }
  for (const m of s.matchAll(/book\.html\?b=(\d+)/g)) { checked++; if (!bookIds.has(m[1])) problems.push(f + ': unknown book ' + m[1]); }
  for (const m of s.matchAll(/resource\.html\?resource=([a-z-]+)/g)) { checked++; if (!resourceIds.has(m[1])) problems.push(f + ': unknown resource ' + m[1]); }
  if (/book-3-c\d/.test(s) && !/app\.js$/.test(f)) problems.push(f + ': still mentions the old book-3-cNN id');
  if (f.endsWith('.html')) { for (const m of s.matchAll(/href="#([^"]+)"/g)) { checked++; if (!staticAnchors[f].has(m[1])) problems.push(f + ': anchor #' + m[1] + ' has no target'); }
    for (const m of s.matchAll(/href="([a-z0-9-]+\.html)(?:[?#][^"]*)?"/g)) { checked++; if (!fs.existsSync(path.join(root, m[1]))) problems.push(f + ': missing page ' + m[1]); } } }
// 3. glossary term links (…glossary#term-xyz) must land on a real term
const glossary = read('resources/04_glossary.content.js'), terms = new Set([...glossary.matchAll(/<h3 id=\\+"(term-[^"\\]+)\\+"/g)].map(m => m[1]));
for (const f of sources) for (const m of read(f).matchAll(/resource\.html\?resource=glossary#(term-[A-Za-z0-9_%-]+)/g)) { checked++; if (!terms.has(m[1])) problems.push(f + ': glossary term not found: ' + m[1]); }
console.log('checked', checked, 'links and catalogue entries across', sources.length, 'files:', problems.length ? '\n  ' + [...new Set(problems)].slice(0, 40).join('\n  ') : 'no problems');
process.exit(problems.length ? 1 : 0);
