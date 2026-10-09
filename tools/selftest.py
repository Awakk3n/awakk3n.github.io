#!/usr/bin/env python3
"""End-to-end self test in headless Chromium (optional dev tool).
Setup once:  pip install playwright && playwright install chromium     (also needs ffmpeg for the audio tests)
Run:         python3 tools/selftest.py          (add --quick to test 1 chapter per book instead of all)
Works on a temporary COPY of the site, so nothing in your folders changes. Exit code 1 on any failure."""
import asyncio, glob, json, os, re, shutil, subprocess, sys, tempfile, socket, atexit
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FAILS, PASSES = [], 0
def ok(cond, msg):
    global PASSES
    if cond: PASSES += 1
    else: FAILS.append(msg); print("  FAIL:", msg)

def make_audio(path, secs=120):
    ext = path.rsplit(".", 1)[1]
    codec = {"mp3": ["-c:a", "libmp3lame"], "m4a": ["-c:a", "aac"], "wav": [], "ogg": ["-c:a", "libvorbis"]}[ext]
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "lavfi", "-i", f"sine=frequency=440:duration={secs}"] + codec + [path], check=True)

async def main():
    from playwright.async_api import async_playwright
    tmp = tempfile.mkdtemp(prefix="sitetest_")
    site = os.path.join(tmp, "site")
    shutil.copytree(ROOT, site, ignore=shutil.ignore_patterns("__pycache__", ".git"))
    # Serve the temporary site over localhost: modern Chromium policies can block file:// navigation.
    with socket.socket() as sock:
        sock.bind(("127.0.0.1", 0)); port = sock.getsockname()[1]
    server = subprocess.Popen([sys.executable, "-m", "http.server", str(port), "--bind", "127.0.0.1", "--directory", site], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    atexit.register(lambda: (server.terminate(), server.wait(timeout=3)) if server.poll() is None else None)
    U = lambda p: f"http://127.0.0.1:{port}/{p}"
    await asyncio.sleep(0.25)
    sys.path.insert(0, site)
    data = json.loads(open(os.path.join(site, "assets/books-data.js"), encoding="utf-8").read().split("=", 1)[1].rsplit(";", 1)[0])
    async with async_playwright() as p:
        # Prefer Playwright's bundled browser, but use a system Chromium when the bundle is absent.
        browser_bin = shutil.which("chromium") or shutil.which("chromium-browser") or shutil.which("google-chrome")
        launch_options = {"headless": True}
        if browser_bin:
            launch_options.update({"executable_path": browser_bin, "args": ["--no-sandbox"]})
        br = await p.chromium.launch(**launch_options)
        errs = []
        def page(w=1280, h=900):
            return br.new_page(viewport={"width": w, "height": h})

        # ---- 1. every chapter: renders, no errors, no overflow, clean text, sane tables, dark mode legible ----
        print("1. chapters"); n = 0
        QUICK = '--quick' in sys.argv
        for w in (1280, 390):
            pg = await page(w); pg.on("pageerror", lambda e: errs.append(str(e)))
            for b in data:
                for c in (b["chapters"][:1] if QUICK else b["chapters"]):
                    await pg.goto(U(f"books/read.html?b={b['id']}&c={c['num']}")); await pg.wait_for_function("document.querySelectorAll('#prose > *').length > 2 || !document.getElementById('pdf-frame').hidden", timeout=8000)
                    info = await pg.evaluate("""() => { const pr = document.getElementById('prose');
                        const tb = [...pr.querySelectorAll('table')].map(t => { const rows=[...t.rows].map(r=>[...r.cells].reduce((s,c)=>s+(c.colSpan||1),0)); return {rows:rows.length, ragged:new Set(rows).size>1, hdr_empty:[...t.querySelectorAll('th')].slice(1).some(x=>!x.textContent.trim()) || t.rows[0].cells.length < 2}; });
                        return {sw: document.documentElement.scrollWidth, iw: innerWidth, txt: (() => { const c = pr.cloneNode(true); c.querySelectorAll('pre').forEach(x => x.remove()); return c.innerText; })(), blocks: pr.children.length, tb,
                                fb: !document.getElementById('pdf-frame').hidden}; }""")
                    tag = f"book{b['id']} ch{c['num']} @{w}"
                    ok(not info["fb"], f"{tag}: fell back to PDF viewer (no page text)")
                    ok(info["sw"] <= info["iw"], f"{tag}: horizontal overflow {info['sw']}>{info['iw']}")
                    ok(info["blocks"] > 3 and len(info["txt"]) > 800, f"{tag}: suspiciously little text")
                    ok(not re.search(r"[\ufb00-\ufb06]|\[\[|<\w+>", info["txt"]), f"{tag}: artifacts (ligature/[[ ]]/raw tags) in text")
                    if w == 1280:
                        for k, t in enumerate(info["tb"]):
                            ok(not t["ragged"], f"{tag}: table {k} has ragged rows")
                            ok(t["rows"] >= 2 and not t["hdr_empty"], f"{tag}: table {k} has an empty header cell beyond the corner (bad detection)")
                    n += 1
            await pg.close()
        print(f"   {n} chapter loads")
        # dark mode legibility on a chapter
        pg = await page(); await pg.goto(U("books/read.html?b=1&c=5")); await pg.wait_for_selector("#prose h3")
        await pg.evaluate("document.documentElement.dataset.theme='dark'"); await pg.wait_for_timeout(700)
        lum = await pg.evaluate("""() => { const f=s=>{const m=s.match(/\\d+(\\.\\d+)?/g).map(Number);return .2126*m[0]+.7152*m[1]+.0722*m[2]};
            return {text:f(getComputedStyle(document.querySelector('#prose p')).color), bg:f(getComputedStyle(document.body).backgroundColor),
                    th:f(getComputedStyle(document.querySelector('#prose th')).backgroundColor), thc:f(getComputedStyle(document.querySelector('#prose th')).color)}}""")
        ok(lum["text"] > 170 and lum["bg"] < 40, f"dark mode: prose not legible {lum}")
        ok(abs(lum["th"] - lum["thc"]) > 90, f"dark mode: table header low contrast {lum}")
        await pg.close()

        # ---- 2. nav behaviour ----
        print("2. nav")
        pg = await page(); pg.on("pageerror", lambda e: errs.append(str(e)))
        act = lambda: pg.evaluate("[...document.querySelectorAll('.menu a.active')].map(a=>a.textContent.trim())")
        await pg.goto(U("index.html")); await pg.wait_for_timeout(500)
        ok(await act() == ["Home"], f"home top active={await act()}")
        await pg.click(".menu a:has-text('Blog')"); await pg.wait_for_timeout(1200)
        ok(await act() == ["Blog"], f"home blog active={await act()}")
        await pg.click(".menu a:has-text('Books')"); await pg.wait_for_timeout(500)
        ok(pg.url.endswith("index.html#books"), f"Books from home should scroll to the homepage section -> {pg.url}")
        ok(await act() == ["Books"], f"Books section active={await act()}")
        # Clicking an actual book card should open that book, while the global tab keeps pointing to #books.
        await pg.evaluate("document.querySelector('#home-books a.card').click()")
        await pg.wait_for_load_state()
        ok("books/book.html?b=" in pg.url, f"Book card did not open its own book: {pg.url}")
        await pg.goto(U("books/read.html?b=1&c=3")); await pg.wait_for_timeout(500)
        ok(await act() == ["Books"], f"chapter active={await act()}")
        await pg.click(".menu a:has-text('Books')"); await pg.wait_for_load_state()
        ok(pg.url.endswith("index.html#books"), f"Books from chapter should return to homepage section -> {pg.url}")
        hrefs = set()
        for u in ("index.html", "books/index.html", "books/book.html?b=2", "books/read.html?b=2&c=4", "Product-Management/UX-Discussion/Principle-of-User-Autonomy.html"):
            await pg.goto(U(u))
            hrefs.add(await pg.evaluate("(() => { const a=[...document.querySelectorAll('.menu a')].find(x=>x.textContent.trim()=='Books'); const u=new URL(a.href); return u.pathname.endsWith('/index.html') ? u.hash : u.pathname })()"))
        ok(hrefs == {"#books"}, f"Books link target differs between pages: {hrefs}")
        await pg.goto(U("Product-Management/UX-Discussion/Principle-of-User-Autonomy.html")); ok(await pg.evaluate("!!document.querySelector('.toc')"), "article: toc missing")
        await pg.close()

        # ---- 2b. Responsive, scroll-synced topic rail ----
        print("2b. responsive TOC")
        pg = await page(390, 800); pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto(U("books/read.html?b=1&c=2")); await pg.wait_for_selector("#r-toc-list a")
        await pg.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.42)"); await pg.wait_for_timeout(300)
        toc = await pg.evaluate("""() => { const t=document.getElementById('r-toc'), a=t.querySelector('a.active');
          if(!a) return {visible:getComputedStyle(t).display!=='none', active:false};
          const tr=t.getBoundingClientRect(), ar=a.getBoundingClientRect();
          return {visible:getComputedStyle(t).display!=='none', active:true, inRail:ar.top>=tr.top+20 && ar.bottom<=tr.bottom+1}; }""")
        ok(toc["visible"] and toc["active"] and toc["inRail"], f"mobile TOC is not visible/scroll-synced: {toc}")
        await pg.close()

        # ---- 3. audio: real files, all formats, no rebuild needed ----
        print("3. audio")
        for ext in ("mp3", "m4a", "wav", "ogg"):
            make_audio(os.path.join(site, f"audio/book-1/ch-0{ {'mp3':1,'m4a':2,'wav':3,'ogg':4}[ext] }.{ext}"))
        pg = await page(); pg.on("pageerror", lambda e: errs.append(str(e)))
        for ext, num in (("mp3", 1), ("m4a", 2), ("wav", 3), ("ogg", 4)):
            await pg.goto(U(f"books/read.html?b=1&c={num}")); await pg.wait_for_timeout(1500)
            vis = await pg.evaluate("!document.getElementById('audio').hidden")
            if ext == "m4a" and not vis:
                print("   (m4a not decodable in this Chromium build; skipped)"); continue
            ok(vis, f"{ext}: player not shown (probe failed)")
            if not vis: continue
            dur = await pg.inner_text("#a-dur"); ok(re.fullmatch(r"2:00", dur) is not None, f"{ext}: duration counter shows {dur!r}")
            await pg.click("#a-play"); await pg.wait_for_timeout(1500)
            cur = await pg.inner_text("#a-cur"); ok(cur not in ("0:00",), f"{ext}: current-time counter stuck at {cur!r}")
            ok(await pg.evaluate("!document.getElementById('player').paused"), f"{ext}: not playing")
            await pg.fill("#a-seek", "500"); await pg.dispatch_event("#a-seek", "input"); await pg.wait_for_timeout(300)
            t = await pg.evaluate("document.getElementById('player').currentTime"); ok(50 < t < 70, f"{ext}: seek landed at {t}")
            await pg.click("#a-fwd"); t2 = await pg.evaluate("document.getElementById('player').currentTime"); ok(t2 > t + 25, f"{ext}: +30s failed ({t}->{t2})")
            await pg.click("#a-back"); await pg.click("#a-play"); ok(await pg.evaluate("document.getElementById('player').paused"), f"{ext}: pause failed")
        # speed menu
        await pg.goto(U("books/read.html?b=1&c=1")); await pg.wait_for_timeout(1200)
        await pg.click("#a-speed")
        m = await pg.evaluate("""() => { const m=document.getElementById('spd-menu'); const r=m.getBoundingClientRect(); const o=[...m.querySelectorAll('.opt')];
              return {open:!m.hidden, labels:o.map(x=>x.textContent.trim()), vertical:new Set(o.map(x=>Math.round(x.getBoundingClientRect().left))).size===1, w:r.width, inView:r.bottom<=innerHeight && r.right<=innerWidth, checked:o.filter(x=>x.getAttribute('aria-checked')==='true').map(x=>x.textContent.trim())}}""")
        ok(m["open"] and m["vertical"] and m["inView"], f"speed menu layout {m}")
        ok(m["labels"] == ["0.25×", "0.5×", "0.75×", "Normal", "1.25×", "1.5×", "1.75×", "2×"] or "Normal" in m["labels"], f"speed labels {m['labels']}")
        ok(m["checked"] == ["Normal"], f"default speed check {m['checked']}")
        await pg.click(".opt[data-r='1.5']"); ok(await pg.evaluate("document.getElementById('spd-menu').hidden"), "menu did not close")
        ok(await pg.evaluate("document.getElementById('player').playbackRate") == 1.5 and await pg.inner_text("#a-speed") == "1.5×", "speed not applied")
        await pg.click("#a-play"); await pg.wait_for_timeout(300); ok(await pg.evaluate("document.getElementById('player').playbackRate") == 1.5, "speed lost on play")
        await pg.goto(U("books/read.html?b=1&c=3")); await pg.wait_for_timeout(1200)
        ok(await pg.inner_text("#a-speed") == "1.5×", "speed not remembered across chapters")
        await pg.click("#a-speed"); await pg.keyboard.press("ArrowDown"); await pg.keyboard.press("Escape")
        ok(await pg.evaluate("document.getElementById('spd-menu').hidden"), "Esc did not close menu")
        # counters on lists without any rebuild (data was built BEFORE the audio files existed)
        await pg.goto(U("books/book.html?b=1")); await pg.wait_for_function("document.getElementById('b-stats').innerText.includes('audiobooks')", timeout=15000); await pg.wait_for_timeout(2500)
        stats = await pg.inner_text("#b-stats"); ok(re.search(r"[34] audiobooks", stats) is not None, f"book page audio counter: {stats!r}")
        ok(await pg.evaluate("document.querySelectorAll('.ch-row .h i').length") >= 3, "book page headphone icons missing (m4a may be undecodable here)")
        await pg.goto(U("books/index.html")); await pg.wait_for_timeout(5000)
        c1 = await pg.inner_text("[data-au='1']"); ok(int(c1) >= 1, f"landing audio counter: {c1!r}")
        await pg.close()

        # ---- 3b. particles: only on hero / page-header areas, drawing, animating, accessible ----
        print("3b. particles")
        pg = await page(); pg.on("pageerror", lambda e: errs.append(str(e)))
        snap = "(() => { const c=document.querySelector('.pf-canvas'); return c ? c.toDataURL() : null })()"
        px = "(() => { const c=document.querySelector('.pf-canvas'); const d=c.getContext('2d').getImageData(0,0,c.width,c.height).data; let n=0; for(let i=3;i<d.length;i+=4) if(d[i]) n++; return n })()"
        for u, expect in (("index.html", True), ("books/index.html", True), ("books/book.html?b=1", True), ("Product-Management/UX-Discussion/Principle-of-User-Autonomy.html", True), ("books/read.html?b=1&c=1", False)):
            await pg.goto(U(u)); await pg.wait_for_timeout(900)
            has = await pg.evaluate("!!document.querySelector('.pf-canvas')"); ok(has == expect, f"particles on {u}: expected {expect}, got {has}")
            if expect:
                ok(await pg.evaluate(px) > 200, f"{u}: particle canvas is empty")
                a = await pg.evaluate(snap); await pg.wait_for_timeout(400); b2 = await pg.evaluate(snap); ok(a != b2, f"{u}: particles not animating")
        await pg.goto(U("index.html")); await pg.wait_for_timeout(600)
        box = await pg.evaluate("(() => { const r=document.querySelector('.pf-canvas').getBoundingClientRect(), h=document.querySelector('.hero').getBoundingClientRect(); return [Math.round(r.width-h.width), Math.round(r.height-h.height), getComputedStyle(document.querySelector('.pf-canvas')).pointerEvents] })()")
        ok(box[0] == 0 and box[1] == 0 and box[2] == "none", f"canvas not covering hero / blocking clicks: {box}")
        await pg.mouse.move(400, 300); await pg.wait_for_timeout(300)
        await pg.click(".hero-cta a:has-text('View my work')"); await pg.wait_for_timeout(900); ok(pg.url.endswith("#projects"), "hero button not clickable through particles")
        await pg.goto(U("index.html")); await pg.wait_for_function(px + " > 200", timeout=5000); await pg.evaluate("document.querySelector('.theme-btn').click()")
        try: await pg.wait_for_function(px + " > 200", timeout=3000); ok(True, "")
        except Exception: ok(False, "particles empty after theme switch")
        await pg.close()
        ctx = await br.new_context(viewport={"width": 1280, "height": 800}, reduced_motion="reduce"); rp = await ctx.new_page()
        await rp.goto(U("index.html")); await rp.wait_for_timeout(700)
        a = await rp.evaluate(snap); await rp.wait_for_timeout(500); b2 = await rp.evaluate(snap)
        ok(a == b2 and await rp.evaluate(px) > 200, "reduced-motion: expected one static frame"); await ctx.close()
        pg = await page(390, 800); await pg.goto(U("index.html")); await pg.wait_for_timeout(700)
        ok(await pg.evaluate("document.documentElement.scrollWidth") <= 390, "home overflows on mobile with particles"); await pg.close()

        # ---- 4. tools ----
        print("4. tools")
        env = dict(os.environ); run = lambda *a: subprocess.run([sys.executable] + list(a), cwd=site, capture_output=True, text=True)
        wav = os.path.join(tmp, "x.wav"); make_audio(wav, 12)
        r = run("tools/add_chapter.py", "--book", "2", "--num", "99", "--pdf", os.path.join(site, "pdf/book-1/ch-03.pdf"), "--audio", wav); ok(r.returncode == 0, "add_chapter failed: " + r.stderr[-300:])
        d2 = open(os.path.join(site, "assets/books-data.js"), encoding="utf-8").read(); ok('"num": 99' in d2 and "ch-99.wav" in d2, "add_chapter: data not updated")
        shutil.copy(os.path.join(site, "pdf/book-1/ch-04.pdf"), os.path.join(site, "inbox/book3_ch98_Inbox Test.pdf")); shutil.copy(wav, os.path.join(site, "inbox/book3_ch98.wav"))
        r = run("tools/ingest.py"); ok(r.returncode == 0 and not [f for f in os.listdir(os.path.join(site, "inbox")) if f != "README.md"], "ingest left files: " + r.stdout[-300:])
        ok(os.path.exists(os.path.join(site, "content/book-3/ch-98.js")) and "Inbox Test" in open(os.path.join(site, "assets/books-data.js"), encoding="utf-8").read(), "ingest: chapter missing")
        r = run("tools/pdf_to_page.py", "--pdf", os.path.join(site, "pdf/book-1/ch-05.pdf"), "--folder", "Product-Management/Whitepapers", "--name", "T1", "--summary", "s"); ok(r.returncode == 0, "pdf_to_page failed: " + r.stderr[-300:])
        pg = await page(); pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto(U("books/read.html?b=2&c=99")); await pg.wait_for_timeout(1200); ok(await pg.evaluate("document.querySelectorAll('#prose > *').length > 3") and await pg.evaluate("!document.getElementById('audio').hidden"), "new chapter 99 page not working")
        await pg.goto(U("Product-Management/Whitepapers/T1.html")); await pg.wait_for_timeout(500); ok(await pg.evaluate("document.querySelectorAll('.prose table').length >= 5"), "pdf_to_page: tables missing")
        await pg.goto(U("index.html")); await pg.wait_for_timeout(800); ok(await pg.evaluate("[...document.querySelectorAll('#home-posts h3')].some(h=>h.textContent.includes('Ideation'))"), "blog card not added")
        await pg.close()
        r = run("tools/check.py"); ok(r.returncode == 0, "check.py: " + r.stdout[-300:])
        ok(not errs, f"JS page errors: {errs[:3]}")
        await br.close()
    if server.poll() is None:
        server.terminate()
        try: server.wait(timeout=3)
        except subprocess.TimeoutExpired: server.kill()
    shutil.rmtree(tmp, ignore_errors=True)
    print(f"\n{PASSES} checks passed, {len(FAILS)} failed")
    sys.exit(1 if FAILS else 0)

asyncio.run(main())
