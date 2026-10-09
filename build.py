#!/usr/bin/env python3
"""Build book pages from authoritative Markdown, with PDF extraction as legacy fallback.

Source layout:
  source-md/book-N/01_chapter-name.md   chapter Markdown (preferred)
  pdf/book-N/ch-NN.pdf                  legacy chapter PDFs / download output
  audio/book-N/ch-NN.{mp3,m4a,wav,ogg}  optional chapter audio

Run `python3 build.py --refresh-pdfs` to rebuild downloadable PDFs from Markdown.
Run `python3 build.py` for an incremental build. All generated reader content works as
static JavaScript files, including when the site is opened directly from file://.
"""
import argparse
from concurrent.futures import ProcessPoolExecutor, as_completed
import html
import json
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
EXT = ("mp3", "m4a", "wav", "ogg")

try:
    import mistune
except ImportError:
    mistune = None


def load_meta():
    return json.loads((ROOT / "books.json").read_text(encoding="utf-8"))


def save_meta(meta):
    (ROOT / "books.json").write_text(json.dumps(meta, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def chapter_num_from_md(path):
    # Supports Book 1/2 names like 01_TOPIC.md and Book 3 names like C01_topic.md.
    match = re.match(r"^(?:C)?(\d+)[_-].+\.md$", path.name, re.IGNORECASE)
    return int(match.group(1)) if match else None


def md_sources(slug):
    directory = ROOT / "source-md" / slug
    found = {}
    if directory.is_dir():
        for path in directory.glob("*.md"):
            num = chapter_num_from_md(path)
            if num is not None:
                found[num] = path
    return found


def full_book_source(slug):
    """Find an optional whole-book Markdown source, without confusing chapter files."""
    directory = ROOT / "source-md" / slug
    names = (
        "book.md", "book.markdown", "full-book.md", "full-book.markdown",
        "full_book.md", "full_book.markdown", "entire-book.md", "entire-book.markdown",
        "entire_book.md", "entire_book.markdown",
    )
    for name in names:
        candidate = directory / name
        if candidate.is_file():
            return candidate
    return None


def build_full_book_pages(meta):
    """Always refresh the generated complete-book web reader from its Markdown source.

    Full-book Markdown is small relative to the whole site build, and rebuilding it
    unconditionally avoids stale pages when a source file is copied in with an older
    timestamp (for example, by the inbox importer).
    """
    for book in meta:
        source = full_book_source(book["slug"])
        if not source:
            continue
        dest = ROOT / "content" / book["slug"] / "full.js"
        body = render_markdown(source.read_text(encoding="utf-8-sig"))
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text("window.__ch(" + js_literal(body) + ");\n", encoding="utf-8")
        print("  Full Markdown →", dest.relative_to(ROOT))
        book["full_markdown"] = True


def strip_yaml_front_matter(source):
    if source.startswith("---"):
        lines = source.splitlines(keepends=True)
        if lines and lines[0].strip() == "---":
            for i in range(1, len(lines)):
                if lines[i].strip() in ("---", "..."):
                    return "".join(lines[i + 1:]).lstrip("\r\n")
    return source


def add_heading_ids(rendered):
    """Add stable IDs to Markdown headings so the chapter TOC can target them."""
    used = set()

    def add_id(match):
        level, inner = match.group(1), match.group(2)
        plain = html.unescape(re.sub(r"<[^>]+>", "", inner))
        slug = re.sub(r"[^a-z0-9]+", "-", plain.lower()).strip("-") or "section"
        base = slug
        suffix = 2
        while slug in used:
            slug = f"{base}-{suffix}"
            suffix += 1
        used.add(slug)
        return f'<h{level} id="{slug}">{inner}</h{level}>'

    return re.sub(r"<h([1-6])>(.*?)</h\1>", add_id, rendered, flags=re.IGNORECASE | re.DOTALL)


def render_markdown(source):
    if mistune is None:
        raise RuntimeError("Markdown rendering needs Mistune. Install requirements.txt with `pip install -r requirements.txt`.")
    renderer = mistune.create_markdown(plugins=["table", "strikethrough", "task_lists", "url"])
    return add_heading_ids(renderer(strip_yaml_front_matter(source)))


def js_literal(value):
    """JSON-encode a JS literal without allowing HTML script-end sequences in the output."""
    return (json.dumps(value, ensure_ascii=False)
            .replace("<", "\\u003c").replace(">", "\\u003e").replace("&", "\\u0026")
            .replace("\u2028", "\\u2028").replace("\u2029", "\\u2029"))


def pdf_css():
    return r"""
    @page {
      size: A4;
      margin: 21mm 19mm 22mm;
      @top-left { content: "ABHINAV  /  PRODUCT MANAGEMENT"; color: #5b6480; font: 8pt sans-serif; letter-spacing: .7pt; }
      @top-right { content: string(chapterTitle); color: #5b6480; font: 7.5pt sans-serif; }
      @bottom-left { content: "Markdown edition"; color: #727b91; font: 8pt sans-serif; }
      @bottom-right { content: "Page " counter(page) " of " counter(pages); color: #727b91; font: 8pt sans-serif; }
    }
    @page :first { @top-right { content: none; } }
    html { font-size: 10pt; }
    body { color: #202638; font-family: "DejaVu Serif", "Liberation Serif", serif; font-size: 10pt; line-height: 1.56; }
    h1, h2, h3, h4, h5, h6 { font-family: "DejaVu Sans", "Liberation Sans", sans-serif; color: #202d69; line-height: 1.24; page-break-after: avoid; break-after: avoid; }
    h1 { font-size: 24pt; margin: 0 0 20pt; string-set: chapterTitle content(); }
    h2 { font-size: 16pt; margin: 23pt 0 8pt; padding-bottom: 5pt; border-bottom: 1px solid #dfe3ef; }
    h3 { font-size: 12.5pt; margin: 17pt 0 7pt; }
    h4 { font-size: 11pt; margin: 14pt 0 6pt; color: #4957a9; }
    p { margin: 0 0 8pt; orphans: 3; widows: 3; }
    ul, ol { margin: 4pt 0 10pt 18pt; padding: 0; }
    li { margin: 0 0 4pt; }
    blockquote { margin: 10pt 0; padding: 7pt 12pt; border-left: 3pt solid #7786df; background: #f4f6ff; color: #35405d; break-inside: avoid; }
    hr { border: 0; border-top: 1px solid #dfe3ef; margin: 16pt 0; }
    table { width: 100%; border-collapse: collapse; margin: 10pt 0 13pt; font-family: "DejaVu Sans", "Liberation Sans", sans-serif; font-size: 8.2pt; line-height: 1.4; }
    thead { display: table-header-group; }
    th { text-align: left; background: #eef1ff; color: #25346f; font-weight: 700; }
    th, td { border: 1px solid #dce1ef; padding: 5pt 6pt; vertical-align: top; }
    tr { break-inside: avoid; }
    pre { white-space: pre-wrap; overflow-wrap: anywhere; padding: 9pt 10pt; border: 1px solid #dce1ef; background: #f5f6fa; font-size: 8pt; line-height: 1.4; break-inside: avoid; }
    code { font-family: "DejaVu Sans Mono", "Liberation Mono", monospace; font-size: .88em; background: #f0f2f8; padding: 1pt 2pt; }
    pre code { background: transparent; padding: 0; }
    a { color: #3546a8; text-decoration: none; overflow-wrap: anywhere; }
    img { max-width: 100%; height: auto; }
    .edition-label { margin: 0 0 20pt; padding-bottom: 9pt; border-bottom: 2pt solid #7c8bff; color: #69728a; font: 8pt sans-serif; letter-spacing: .6pt; text-transform: uppercase; }
    .content > :first-child { margin-top: 0; }
    """


def render_pdf_from_md(md_path, dest, book, chapter_title):
    try:
        from weasyprint import HTML
    except ImportError:
        print("  WeasyPrint missing; skipped regenerated PDF (install from requirements.txt)")
        return None
    raw = md_path.read_text(encoding="utf-8-sig")
    body = render_markdown(raw)
    page_html = """<!doctype html><html lang="en"><head><meta charset="utf-8"><title>{title}</title>
      <style>{css}</style></head><body><div class="edition-label">{book} · {chapter}</div><main class="content">{body}</main></body></html>""".format(
        title=html.escape(chapter_title), css=pdf_css(), book=html.escape(book["title"]),
        chapter=html.escape(chapter_title), body=body)
    dest.parent.mkdir(parents=True, exist_ok=True)
    document = HTML(string=page_html, base_url=str(md_path.parent)).render()
    document.write_pdf(str(dest))
    return len(document.pages)


def _render_pdf_job(job):
    """Process-pool worker for Markdown → PDF conversion."""
    slug, num, source_path, pdf_path, book, chapter_title = job
    pages = render_pdf_from_md(Path(source_path), Path(pdf_path), book, chapter_title)
    return slug, num, pages, Path(pdf_path)


def convert_md_sources(meta, force_pdfs=False):
    """Markdown is authoritative when present; only use PDF extraction as legacy fallback."""
    changed_pages = {}
    pdf_jobs = []
    for book in meta:
        slug = book["slug"]
        for num, source in sorted(md_sources(slug).items()):
            html_js = ROOT / "content" / slug / f"ch-{num:02d}.js"
            pdf = ROOT / "pdf" / slug / f"ch-{num:02d}.pdf"
            source_mtime = source.stat().st_mtime
            if not html_js.exists() or html_js.stat().st_mtime < source_mtime:
                body = render_markdown(source.read_text(encoding="utf-8-sig"))
                html_js.parent.mkdir(parents=True, exist_ok=True)
                html_js.write_text("window.__ch(" + js_literal(body) + ");\n", encoding="utf-8")
                print("  Markdown →", html_js.relative_to(ROOT))
            if force_pdfs or not pdf.exists() or pdf.stat().st_mtime < source_mtime:
                chapter_title = next((c["title"] for c in book["chapters"] if c["num"] == num), f"Chapter {num}")
                pdf_jobs.append((slug, num, str(source), str(pdf), book, chapter_title))

    if pdf_jobs:
        # Rendering is CPU-heavy; a small process pool avoids long sequential builds while
        # keeping memory bounded on machines rebuilding many large chapters.
        workers = min(3, len(pdf_jobs))
        print(f"Rendering {len(pdf_jobs)} Markdown PDF(s) with {workers} workers ...", flush=True)
        with ProcessPoolExecutor(max_workers=workers) as pool:
            future_to_job = {pool.submit(_render_pdf_job, job): job for job in pdf_jobs}
            for future in as_completed(future_to_job):
                job = future_to_job[future]
                try:
                    slug, num, pages, pdf = future.result()
                    if pages:
                        changed_pages[(slug, num)] = pages
                    print(f"  Markdown → {pdf.relative_to(ROOT)} ({pages} pages)", flush=True)
                except Exception as e:
                    print(f"  PDF render failed for {Path(job[2]).name}: {e}", file=sys.stderr, flush=True)
    return changed_pages


def convert_legacy_pdfs(meta):
    """PDF → HTML for chapters that do not have a corresponding Markdown source."""
    jobs = []
    for book in meta:
        slug = book["slug"]
        d = ROOT / "pdf" / slug
        for src in sorted(d.glob("*.pdf")) if d.is_dir() else []:
            match = re.fullmatch(r"ch-(\d+)\.pdf", src.name, re.IGNORECASE)
            if not match or int(match.group(1)) in md_sources(slug):
                continue
            num = int(match.group(1))
            dst = ROOT / "content" / slug / f"ch-{num:02d}.js"
            if not dst.exists() or dst.stat().st_mtime < src.stat().st_mtime:
                jobs.append((src, dst, slug == "book-3"))
    if not jobs:
        return
    try:
        import pdfplumber  # noqa: F401
    except ImportError:
        print("pdfplumber missing; legacy PDF chapters may show the PDF viewer. Install requirements.txt.")
        return

    def job(item):
        src, dst, prefix = item
        sys.path.insert(0, str(ROOT / "tools"))
        from pdf2html import convert
        body = convert(str(src), meta_prefix=prefix)
        dst.parent.mkdir(parents=True, exist_ok=True)
        dst.write_text("window.__ch(" + js_literal(body) + ");\n", encoding="utf-8")
        return dst

    print(f"converting {len(jobs)} legacy PDF(s) to reader HTML ...")
    for src, dst, _ in jobs:
        try:
            job((src, dst, _))
            print("  PDF →", dst.relative_to(ROOT))
        except Exception as e:
            print(f"  PDF conversion failed for {src}: {e}", file=sys.stderr)


def convert_all(meta, only=None):
    """Backward-compatible alias used by older helper scripts."""
    convert_legacy_pdfs(meta)


def audio_path(slug, num):
    directory = ROOT / "audio" / slug
    if not directory.is_dir():
        return None
    # Support both padded (ch-02) and unpadded (ch-2) names and case variants.
    patterns = [re.compile(rf"(?:ch|chapter)[-_ ]?0*{num}\.(?:mp3|m4a|wav|ogg)$", re.I)]
    candidates = sorted(directory.iterdir())
    for ext in EXT:
        for f in candidates:
            if f.is_file() and f.suffix.lower() == "." + ext and patterns[0].fullmatch(f.name):
                return f"audio/{slug}/{f.name}"
    return None


def write_data(meta):
    out = []
    for book in meta:
        slug = book["slug"]
        known = {int(c["num"]): c for c in book.get("chapters", [])}
        pdfdir = ROOT / "pdf" / slug
        pdf_nums = {int(m.group(1)) for f in pdfdir.iterdir() if (m := re.fullmatch(r"ch-(\d+)\.pdf", f.name, re.I))} if pdfdir.is_dir() else set()
        source_nums = set(md_sources(slug))
        audio_dir = ROOT / "audio" / slug
        audio_nums = set()
        if audio_dir.is_dir():
            for f in audio_dir.iterdir():
                if f.is_file() and f.suffix.lower().lstrip(".") in EXT:
                    m = re.fullmatch(r"(?:ch|chapter)[-_ ]?0*(\d+)\.(?:mp3|m4a|wav|ogg)", f.name, re.I)
                    if m: audio_nums.add(int(m.group(1)))
        numbers = sorted(set(known) | pdf_nums | source_nums | audio_nums)
        chapters = []
        for n in numbers:
            chapter = known.get(n, {"title": f"Chapter {n}", "pages": 0})
            pdf_exists = (pdfdir / f"ch-{n:02d}.pdf").exists()
            js_exists = (ROOT / "content" / slug / f"ch-{n:02d}.js").exists()
            chapters.append({
                "num": n,
                "title": chapter.get("title") or f"Chapter {n}",
                "pages": chapter.get("pages", 0),
                "audio": audio_path(slug, n),
                "text": js_exists,
                "pdf": pdf_exists,
            })
        out.append({"id": book["id"], "slug": slug, "title": book["title"], "subtitle": book["subtitle"],
                    "full": (pdfdir / "full.pdf").exists(), "fullMarkdown": bool(full_book_source(slug)), "chapters": chapters})
    (ROOT / "assets" / "books-data.js").write_text("window.BOOKS = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
    for b in out:
        print(f"book {b['id']}: {len(b['chapters'])} chapters, {sum(1 for c in b['chapters'] if c['audio'])} audio, {sum(1 for c in b['chapters'] if c['text'])} text, full={b['full']}")


BASE = "https://awakk3n.github.io/"


def write_posts():
    p = ROOT / "posts.json"
    posts = json.loads(p.read_text(encoding="utf-8")) if p.exists() else []
    posts.sort(key=lambda x: x["date"], reverse=True)
    (ROOT / "assets" / "posts-data.js").write_text("window.POSTS = " + json.dumps(posts, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
    return posts


def write_sitemap(meta, posts):
    urls = [BASE, BASE + "books/index.html"]
    for book in meta:
        urls.append(f"{BASE}books/book.html?b={book['id']}")
        slug = book["slug"]
        if full_book_source(slug):
            urls.append(f"{BASE}books/read.html?b={book['id']}&amp;c=full")
        nums = set(md_sources(slug))
        pdfdir = ROOT / "pdf" / slug
        if pdfdir.is_dir():
            for f in pdfdir.iterdir():
                m = re.fullmatch(r"ch-(\d+)\.pdf", f.name, re.I)
                if m: nums.add(int(m.group(1)))
        for n in sorted(nums):
            urls.append(f"{BASE}books/read.html?b={book['id']}&amp;c={n}")
    urls += [BASE + p["url"] for p in posts if p.get("url")]
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + "".join(f"  <url><loc>{u}</loc></url>\n" for u in urls) + "</urlset>\n"
    (ROOT / "sitemap.xml").write_text(xml, encoding="utf-8")
    (ROOT / "robots.txt").write_text(f"User-agent: *\nAllow: /\nSitemap: {BASE}sitemap.xml\n", encoding="utf-8")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--refresh-pdfs", action="store_true", help="regenerate all chapter PDFs from Markdown, replacing low-quality legacy PDFs")
    parser.add_argument("--skip-pdfs", action="store_true", help="build reader HTML and indexes without generating PDFs")
    args = parser.parse_args()
    meta = load_meta()
    if args.skip_pdfs:
        # Still ensure reader HTML is generated from Markdown; PDF generation is skipped.
        for book in meta:
            for num, source in sorted(md_sources(book["slug"]).items()):
                dst = ROOT / "content" / book["slug"] / f"ch-{num:02d}.js"
                if not dst.exists() or dst.stat().st_mtime < source.stat().st_mtime:
                    dst.parent.mkdir(parents=True, exist_ok=True)
                    dst.write_text("window.__ch(" + js_literal(render_markdown(source.read_text(encoding="utf-8-sig"))) + ");\n", encoding="utf-8")
    else:
        regenerated = convert_md_sources(meta, force_pdfs=args.refresh_pdfs)
        if regenerated:
            for book in meta:
                for chapter in book.get("chapters", []):
                    key = (book["slug"], chapter["num"])
                    if key in regenerated:
                        chapter["pages"] = regenerated[key]
            save_meta(meta)
    convert_legacy_pdfs(meta)
    build_full_book_pages(meta)
    write_data(meta)
    write_sitemap(meta, write_posts())


if __name__ == "__main__":
    main()
