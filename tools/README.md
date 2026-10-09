# Builder and Import Tools

Run every command from the **site root** — the directory containing `index.html`, `books.json`, and `build.py`. Python 3.9+ is recommended. Install build dependencies with `python -m pip install -r requirements.txt`.

## Tools at a glance

| Tool | Responsibility |
|---|---|
| `build.py` | Generates chapter/full-book reader payloads, chapter PDFs from Markdown when needed, book indexes, sitemap, and robots file |
| `tools/ingest.py` | Imports named files from `inbox/`; supports Markdown, PDF, and audiobook files |
| `tools/add_full_book.py` | Installs a complete-book Markdown file and generates its dedicated HTML reader content |
| `tools/add_chapter.py` | Adds or updates one chapter's Markdown, PDF, audiobook, or metadata |
| `tools/pdf_to_page.py` | Creates a styled site page from a standalone PDF and optionally adds a home-page post card |
| `tools/check.py` | Static health check for links, content, chapter metadata, and audio/PDF consistency |
| `tools/selftest.py` | Optional automated browser regression suite; requires Playwright, Chromium, and `ffmpeg` |

## `ingest.py` — inbox import

1. Put incoming files directly in `inbox/` using the names in `../inbox/README.md`.
2. Preview what will happen: `python tools/ingest.py --dry-run`.
3. Import: `python tools/ingest.py`.

A full-book Markdown file is named `bookN_full.md`; a chapter is `bookN_chNN_Title.md`; audio is `bookN_chNN.mp3` (also supports `.m4a`, `.wav`, `.ogg`). A chapter may be imported from Markdown or from a legacy PDF. Do not drop both Markdown and a PDF for the same chapter in one batch; Markdown is the source of truth and the chapter PDF will be generated from it. Whole-book Markdown and a whole-book PDF may be imported together because the PDF is a separate optional download.

Files are removed from `inbox/` only after successful import. Unsupported names, directories, and failed imports remain available for correction. Duplicate files that map to the same book/chapter/asset field are rejected before any changes are made.

## `add_full_book.py` — full-book web reader

```bash
python tools/add_full_book.py --book 1 --md "C:/path/to/book.md"
```

The script copies the source to `source-md/book-1/book.md` and builds `content/book-1/full.js`. The browser reads it with the shared template `books/read.html?b=1&c=full`; the complete book is rendered as a styled HTML article, not embedded in a PDF viewer. A full-book PDF is optional at `pdf/book-1/full.pdf` and is shown as a separate download.

Use `--no-build` only when you intend to run the builder separately afterward.

## `add_chapter.py` — one chapter

```bash
python tools/add_chapter.py --book 2 --num 30 --title "Negotiation for PMs" --md "C:/path/to/ch30.md"
python tools/add_chapter.py --book 2 --num 30 --audio "C:/path/to/ch30.mp3"
python tools/add_chapter.py --book 1 --full --pdf "C:/path/to/book1.pdf"
```

Markdown sources are stored under `source-md/book-N/`; audio is copied to `audio/book-N/`; chapter PDFs are generated/stored under `pdf/book-N/`. Chapter page numbers must be unique within a book. `--book-title` and `--subtitle` can create a new book ID.

## `build.py` — regenerate site content

```bash
python build.py --skip-pdfs    # fastest: HTML payloads and indexes only
python build.py                # incremental build; PDF outputs are refreshed when needed
python build.py --refresh-pdfs # force all chapter PDFs to be regenerated from Markdown
```

Markdown is the preferred source. `source-md/book-N/book.md` (or an accepted full-book alias) becomes `content/book-N/full.js`; a numbered Markdown file becomes `content/book-N/ch-NN.js`. Full-book content is rewritten on each build so a copied source with an older timestamp cannot leave stale generated content. Legacy PDFs without corresponding Markdown are converted into reader text when possible.

## `pdf_to_page.py` — standalone PDF page

```bash
python tools/pdf_to_page.py --pdf "paper.pdf" --folder Product-Management/Whitepapers --name Pricing-Playbook --title "Pricing Playbook" --summary "Shown on the blog card" --date 2026-10-09
```

Creates a styled HTML page and PDF in the requested site folder and adds a card to the home page by default. Pass `--no-post` to skip the card.

## `check.py` and `selftest.py`

Run the static check before publishing:

```bash
python tools/check.py
```

The optional browser suite needs extra setup:

```bash
python -m pip install playwright
python -m playwright install chromium
```

Install `ffmpeg` separately for audio controls tests. Run `python tools/selftest.py --quick` for a shorter suite or omit `--quick` for the full suite. A browser suite may not run on locked-down devices where browser download or local-server access is blocked.

## Source vs generated files

**Edit:** `source-md/`, `books.json`, `posts.json`, site HTML templates, and non-generated CSS/JS in `assets/`.

**Generated — do not edit directly:** `content/`, `assets/books-data.js`, `assets/posts-data.js`, `sitemap.xml`, and `robots.txt`. Rebuild these from their source files.
