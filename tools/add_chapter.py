#!/usr/bin/env python3
"""Add or update a chapter (or a whole book's full PDF / a new book) in one command.

Examples (run from the site folder):
  python3 tools/add_chapter.py --book 2 --num 30 --title "Negotiation for PMs" --pdf ~/Downloads/ch30.pdf
  python3 tools/add_chapter.py --book 2 --num 30 --md ~/Downloads/ch30.md --title "Negotiation for PMs"
  python3 tools/add_chapter.py --book 2 --num 30 --audio ~/Downloads/ch30.mp3         # add audio later
  python3 tools/add_chapter.py --book 1 --full --pdf ~/Downloads/book1.pdf            # entire book
  python3 tools/add_chapter.py --book 4 --book-title "Book 4" --subtitle "Growth PM" --num 1 --title "Intro" --pdf ch1.pdf
  python3 tools/add_chapter.py --book 2 --num 7 --title "New title"                   # rename only

What it does: copies Markdown/PDF/audio into their source folders, records chapter metadata, builds reader HTML
from Markdown when available (otherwise extracts from the PDF), refreshes the chapter PDFs and books-data.js. The chapter then
exists at books/read.html?b=BOOK&c=NUM (no per-chapter HTML needed).
"""
import argparse, os, shutil, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, ROOT)
import build

def page_count(pdf):
    try:
        import pdfplumber
        with pdfplumber.open(pdf) as d: return len(d.pages)
    except Exception:
        return 0

def main():
    a = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    a.add_argument("--book", type=int, required=True, help="book number")
    a.add_argument("--num", type=int, help="chapter number")
    a.add_argument("--title", help="chapter title (optional: guessed from the PDF when omitted)")
    a.add_argument("--pdf", help="path to the chapter (or full-book) PDF")
    a.add_argument("--md", help="authoritative chapter Markdown source")
    a.add_argument("--audio", help="path to the chapter audiobook (mp3/m4a/wav/ogg)")
    a.add_argument("--full", action="store_true", help="--pdf is the entire book")
    a.add_argument("--book-title", help="title, when creating a new book")
    a.add_argument("--subtitle", help="subtitle, when creating a new book")
    a.add_argument("--no-convert", action="store_true", help="skip PDF -> text conversion")
    o = a.parse_args()

    meta = build.load_meta()
    slug = f"book-{o.book}"
    book = next((b for b in meta if b["id"] == o.book), None)
    if not book:
        if not o.book_title: sys.exit(f"Book {o.book} does not exist. Pass --book-title (and --subtitle) to create it.")
        book = {"id": o.book, "slug": slug, "title": o.book_title, "subtitle": o.subtitle or "", "chapters": []}
        meta.append(book); meta.sort(key=lambda b: b["id"]); print(f"created book {o.book}")
    elif o.book_title: book["title"] = o.book_title
    if o.subtitle: book["subtitle"] = o.subtitle

    touched = set()
    if o.full:
        if not o.pdf: sys.exit("--full needs --pdf")
        dst = os.path.join(ROOT, "pdf", slug, "full.pdf"); os.makedirs(os.path.dirname(dst), exist_ok=True)
        shutil.copyfile(o.pdf, dst); touched.add(dst); print("full book ->", os.path.relpath(dst, ROOT))
    else:
        if o.num is None: sys.exit("--num is required for a chapter")
        ch = next((c for c in book["chapters"] if c["num"] == o.num), None)
        if not ch:
            title = o.title
            if not title and o.pdf:
                try:
                    sys.path.insert(0, os.path.join(ROOT, "tools")); from pdf2html import guess_title
                    title = guess_title(o.pdf); print("title guessed from PDF:", title)
                except Exception: pass
            ch = {"num": o.num, "title": title or f"Chapter {o.num}", "pages": 0}
            book["chapters"].append(ch); book["chapters"].sort(key=lambda c: c["num"])
        if o.title: ch["title"] = o.title
        if o.md:
            if not os.path.isfile(o.md): sys.exit(f"Markdown file not found: {o.md}")
            import re
            source_dir = os.path.join(ROOT, "source-md", slug); os.makedirs(source_dir, exist_ok=True)
            # Replace any existing source for this chapter, so there is one authoritative file per number.
            for old in os.listdir(source_dir):
                old_path = os.path.join(source_dir, old)
                if os.path.isfile(old_path) and build.chapter_num_from_md(__import__('pathlib').Path(old_path)) == o.num:
                    os.remove(old_path)
            safe = re.sub(r"[^A-Za-z0-9]+", "_", (o.title or os.path.splitext(os.path.basename(o.md))[0])).strip("_")
            prefix = f"C{o.num:02d}_" if slug == "book-3" else f"{o.num:02d}_"
            md_dst = os.path.join(source_dir, prefix + safe + ".md")
            shutil.copyfile(o.md, md_dst)
            # A supplied PDF is superseded by a Markdown-rendered version for the same chapter.
            generated_pdf = os.path.join(ROOT, "pdf", slug, f"ch-{o.num:02d}.pdf")
            if os.path.exists(generated_pdf): os.remove(generated_pdf)
            print(f"Markdown -> {os.path.relpath(md_dst, ROOT)}")
        if o.pdf:
            dst = os.path.join(ROOT, "pdf", slug, f"ch-{o.num:02d}.pdf"); os.makedirs(os.path.dirname(dst), exist_ok=True)
            shutil.copyfile(o.pdf, dst); touched.add(dst); ch["pages"] = page_count(dst)
            print(f"pdf   -> {os.path.relpath(dst, ROOT)} ({ch['pages']} pages)")
        if o.audio:
            ext = os.path.splitext(o.audio)[1].lower().lstrip(".")
            if ext not in build.EXT: sys.exit(f"audio must be one of {build.EXT}")
            for e in build.EXT:  # remove stale versions
                old = os.path.join(ROOT, "audio", slug, f"ch-{o.num:02d}.{e}")
                if os.path.exists(old): os.remove(old)
            dst = os.path.join(ROOT, "audio", slug, f"ch-{o.num:02d}.{ext}"); os.makedirs(os.path.dirname(dst), exist_ok=True)
            shutil.copyfile(o.audio, dst); print(f"audio -> {os.path.relpath(dst, ROOT)}")
    build.save_meta(meta)
    if not o.no_convert:
        if not o.full and o.num is not None and o.md:
            changed = build.convert_md_sources(meta)
            if (slug, o.num) in changed and ch is not None:
                ch["pages"] = changed[(slug, o.num)]
                build.save_meta(meta)
        build.convert_all(meta, only=touched or None) if touched else None
    build.write_data(meta)
    if not o.full and o.num is not None:
        print(f"\nOpen: books/read.html?b={o.book}&c={o.num}")

main()
