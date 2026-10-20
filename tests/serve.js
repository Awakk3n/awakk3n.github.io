// Static server that mimics GitHub Pages: brotli/gzip for text, Cache-Control: max-age=600, no custom headers.
const http = require('http'), fs = require('fs'), path = require('path'), zlib = require('zlib');
const root = path.resolve(process.argv[2]), port = +process.argv[3] || 8765;
const types = { '.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.png':'image/png','.woff2':'font/woff2','.md':'text/markdown; charset=utf-8','.txt':'text/plain','.svg':'image/svg+xml','.ogg':'audio/ogg','.mp3':'audio/mpeg','.wav':'audio/wav','.xml':'application/xml' };
const compressible = /\.(html|js|css|json|md|svg|txt|xml)$/;
const _c = new Map(); function cache(f, k, fn) { const key = f + '|' + k + '|' + fs.statSync(f).mtimeMs; if (!_c.has(key)) _c.set(key, fn()); return _c.get(key); }
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html';
  const f = path.join(root, p);
  if (!f.startsWith(root) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end('404'); }
  const ext = path.extname(f), buf = cache(f, 'raw', () => fs.readFileSync(f)), h = { 'Content-Type': types[ext] || 'application/octet-stream', 'Cache-Control': 'max-age=600' };
  const ae = req.headers['accept-encoding'] || '';
  if (compressible.test(f) && /br/.test(ae)) { h['Content-Encoding']='br'; res.writeHead(200,h); return res.end(cache(f, 'br', () => zlib.brotliCompressSync(buf, { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 5 } }))); }
  if (compressible.test(f) && /gzip/.test(ae)) { h['Content-Encoding']='gzip'; res.writeHead(200,h); return res.end(cache(f, 'gz', () => zlib.gzipSync(buf))); }
  h['Content-Length'] = buf.length; res.writeHead(200, h); res.end(buf);
}).listen(port, () => console.log('serving', root, 'on', port));
