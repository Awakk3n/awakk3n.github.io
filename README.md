# Abhinav's Website — Source, Build, and Publishing Guide

This is a **static website**. There is no database or application server to maintain. Python scripts turn Markdown and metadata into reader content, optional PDFs, and JavaScript indexes that the browser displays.

If you only remember one thing: **edit files in `source-md/`, `books.json`, `posts.json`, and `assets/`; do not hand-edit generated files in `content/` or `assets/*-data.js`.**

## 1. Quick start

Requirements: Python 3.9 or later. Use a terminal opened in this folder (the one containing `index.html` and `build.py`).

### Windows PowerShell

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
py -m pip install -r requirements.txt
py build.py --skip-pdfs
py -m http.server 8000
```

Open <http://localhost:8000>. If PowerShell blocks virtual-environment activation, you can skip the venv and use `py -m pip install --user -r requirements.txt` instead.

### macOS / Linux

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python build.py --skip-pdfs
python -m http.server 8000
```

Open <http://localhost:8000>. A local HTTP server is recommended for testing; some browser features behave differently when opening files directly via `file://`.

## 2. Know the folders

| Folder / file | Purpose | Edit it? |
|---|---|---|
| `inbox/` | Temporary drop-zone for incoming Markdown, PDF, and audio files | Yes — put new, correctly named files here |
| `source-md/book-N/` | Authoritative Markdown for chapters and optional complete-book files | **Yes — source of truth** |
| `audio/book-N/` | Chapter audiobook files | Yes — add or replace audio files |
| `pdf/book-N/` | Chapter PDFs generated from Markdown or legacy PDFs; optional `full.pdf` download | Normally generated; may hold optional PDFs |
| `content/book-N/` | Generated JavaScript containing rendered HTML used by the reader | **No — generated** |
| `books.json` | Book titles, subtitles, and chapter metadata | Yes, when changing book metadata |
| `posts.json` | Home-page blog/article cards | Yes |
| `assets/*.css`, `assets/*.js` | Site styling and interaction code | Yes, when changing the website |
| `assets/books-data.js`, `assets/posts-data.js` | Generated browser indexes | **No — generated** |
| `tools/` | Importers, builder helpers, and health checks | Occasionally; usually run them rather than edit them |

`book-N` means `book-1`, `book-2`, `book-3`, and so on. The `N` must match the `id` in `books.json`.

## 3. Add or update a complete book from Markdown

Use this for one file containing an entire book, with all chapters and sections in order.

**Option A — use the inbox:** copy the file into `inbox/` using a filename such as `book1_full.md`, then preview and import it:

```bash
python tools/ingest.py --dry-run
python tools/ingest.py
```

Windows users can use `py tools\ingest.py --dry-run` and `py tools\ingest.py`.

The importer copies the full Markdown to `source-md/book-1/book.md` and the builder generates `content/book-1/full.js`. In the browser, the complete book is read as a styled web page at:

`books/read.html?b=1&c=full`

**Option B — provide a file path directly:**

```bash
python tools/add_full_book.py --book 1 --md "C:/Users/you/Documents/book.md"
```

Replace `1` with the book ID and use the actual path to your file. The command installs the source and builds the page.

Accepted complete-book names when placed manually in `source-md/book-N/`: `book.md`, `full-book.md`, `full_book.md`, `entire-book.md`, or `entire_book.md` (also `.markdown` variants). If you update a complete-book file manually, run `python build.py --skip-pdfs`.

A full-book PDF is optional. If you also have a PDF to offer as a separate download, put it in `pdf/book-N/full.pdf`. The on-site reading experience remains HTML; the PDF is not embedded as the reader.

## 4. Add or update individual chapter files

**Recommended:** keep one Markdown file per chapter in `source-md/book-N/`. Number the files at the beginning so the reader can map them to chapter numbers:

- Books 1 and 2: `01_PRODUCT_MANAGEMENT_FUNDAMENTALS.md`
- Book 3: `C01_apm_role_how_book_works.md`

The builder recognizes a leading chapter number (optional `C`, then digits and `_` or `-`). It preserves chapter numbers, including gaps such as Book 3's chapter 37; numbers are not automatically renumbered.

To import a chapter through the inbox, use names like:

```text
book2_ch30_Negotiation_for_PMs.md
book2_ch30.m4a
```

The title in the filename is optional if the Markdown contains a clear `# Chapter Title` heading. Markdown is authoritative; the builder creates styled reader content and generates the chapter PDF. **Do not put both a chapter `.md` and `.pdf` for the same chapter in the inbox** — the Markdown is the source of truth. The importer will flag this conflict and leave the files untouched.

You can also import a PDF-only legacy chapter:

```text
book2_ch30_Negotiation_for_PMs.pdf
book2_ch30.mp3
```

If there is no Markdown source for a legacy PDF, the builder tries to extract its text for the web reader. The result may need manual review.

Direct command for one chapter:

```bash
python tools/add_chapter.py --book 2 --num 30 --title "Negotiation for PMs" --md "C:/path/to/ch30.md"
```

## 5. Inbox naming rules

Place **files directly in `inbox/`**, not in subfolders. The book and chapter number are read from the filename.

| Incoming file name | Meaning |
|---|---|
| `book1_full.md` | Full Markdown source for Book 1 |
| `book1_full.pdf` | Optional full-book PDF download for Book 1 |
| `book2_ch30_Title_Here.md` | Chapter 30 Markdown for Book 2 |
| `book2_ch30_Title_Here.pdf` | Legacy PDF-only chapter 30 |
| `book2_ch30.mp3` | Chapter 30 audiobook for Book 2 |
| `book3_ch01.m4a` | Chapter 1 audiobook for Book 3 |

Separators may be underscores, hyphens, or spaces. The word `chapter` can be used in place of `ch`. Supported audio extensions: `.mp3`, `.m4a`, `.wav`, `.ogg`.

First preview imports with:

```bash
python tools/ingest.py --dry-run
```

Then perform the import:

```bash
python tools/ingest.py
```

Imported files are removed from `inbox/` only after all commands for that grouped item succeed. Files with unsupported names remain there and are listed. If a file is listed as skipped, check its filename and the table above. `README.md` is never imported.

## 6. Add audiobooks

For manual addition, put the file in `audio/book-N/` with the chapter number in its name, for example `ch-02.m4a`, `ch-2.mp3`, or `chapter-02.wav`. Supported extensions are `.mp3`, `.m4a`, `.wav`, and `.ogg`.

Or add the audio through the inbox with `bookN_chNN.mp3`. Audio discovery reads the files at build time, and the site can also detect new audio at runtime. The README inside each `audio/book-N/` folder explains the local naming convention.

Only real audio files can be played; metadata or a README is not an audiobook. A book with no chapter audio will correctly show that no audiobook is available.

## 7. Rebuild commands

Run from the folder containing `build.py`:

| Command | What it does |
|---|---|
| `python build.py --skip-pdfs` | Refresh generated reader HTML, full-book pages, indexes, sitemap, and robots file; leave PDFs alone |
| `python build.py` | Incremental build; render Markdown PDFs if source files are newer or output is missing |
| `python build.py --refresh-pdfs` | Force regeneration of chapter PDFs from Markdown sources |
| `python tools/check.py` | Validate the site's local links, chapter metadata, rendered content, and PDF/audio consistency |
| `python tools/selftest.py --quick` | Optional browser regression suite; requires Playwright + Chromium and `ffmpeg` |

If you changed only book titles or indexes, `--skip-pdfs` is normally enough. If you changed the Markdown content and want updated PDFs too, run the normal build or `--refresh-pdfs`.

## 8. Generated files and code ownership

The builder generates:

- `content/book-N/ch-NN.js` and `content/book-N/full.js` — HTML content embedded as JavaScript for a static reader;
- `pdf/book-N/ch-NN.pdf` — styled chapter PDFs from Markdown when Markdown exists;
- `assets/books-data.js` and `assets/posts-data.js` — client-side indexes;
- `sitemap.xml` and `robots.txt`.

Do not edit these generated outputs by hand. Fix the source Markdown or metadata and rebuild. Chapter reading routes are served by the shared template `books/read.html`; the reader content itself is generated by `build.py`, so you do not need to create a separate HTML file for each chapter.

## 9. Validate before publishing

Run:

```bash
python tools/check.py
```

Fix any reported missing reader files, untitled chapters, audio mismatches, or broken local links before deploying. For the optional browser suite, install its separate dependencies as described in `tools/README.md`.

## 10. Troubleshooting

- **A full-book link says the page has not been generated:** confirm the source is named `book.md` (or another supported full-book name) inside `source-md/book-N/`, then run `python build.py --skip-pdfs`.
- **A Markdown file stays in `inbox/`:** run `python tools/ingest.py --dry-run`; check that the filename follows the naming table, that there are no duplicate files, and that the book ID exists in `books.json`.
- **Audio does not appear:** confirm an actual `.mp3`, `.m4a`, `.wav`, or `.ogg` file is present and its filename contains the correct chapter number.
- **A PDF is outdated:** run `python build.py --refresh-pdfs` to regenerate chapter PDFs from Markdown.
- **A script cannot find a file:** run commands from the site root, and wrap paths containing spaces in quotation marks.

For tool-specific details, see [`tools/README.md`](tools/README.md). For inbox examples, see [`inbox/README.md`](inbox/README.md).

### Current source-content note

The bundled `source-md/book-1/`, `book-2/`, and `book-3/` folders contain the supplied individual chapter Markdown files. No separate complete-book Markdown files were included with this bundle. Chapter readers are ready from those files; a complete-book reader appears for a book after you add that book's `book.md` (directly to `source-md/book-N/` or through `inbox/bookN_full.md`) and run the builder.
"# awakk3n.github.io" 
"# awakk3n.github.io" 
