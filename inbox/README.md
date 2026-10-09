# Inbox — Temporary File Drop

Put new files **directly in this folder** and run the importer from the site root. The inbox is a staging area, not the permanent place for book sources. Successful imports are moved into `source-md/`, `audio/`, and/or `pdf/` by the scripts; the inbox copies are then removed.

First preview the proposed import:

```bash
python tools/ingest.py --dry-run
```

Then apply it:

```bash
python tools/ingest.py
```

Windows PowerShell equivalent: `py tools\ingest.py --dry-run` followed by `py tools\ingest.py`.

## Supported names

| Filename | Imports as |
|---|---|
| `book1_full.md` | Complete Markdown for Book 1; generates a dedicated web reader |
| `book1_full.pdf` | Optional full-book PDF download for Book 1 |
| `book2_ch30_Negotiation_for_PMs.md` | Chapter 30 Markdown for Book 2 |
| `book2_ch30_Negotiation_for_PMs.pdf` | Legacy PDF-only chapter 30 for Book 2 |
| `book2_ch30.mp3` | Chapter 30 audiobook for Book 2 |
| `book3_ch01.m4a` | Chapter 1 audiobook for Book 3 |

Spaces, hyphens, and underscores can be used as separators; `chapter` works instead of `ch`. Markdown accepts `.md` or `.markdown`. Audio accepts `.mp3`, `.m4a`, `.wav`, or `.ogg`.

A complete book uses `bookN_full.md`. An individual chapter uses `bookN_chNN_Title.md`. Use the book ID already defined in `books.json`.

## Important rules

- For a chapter, Markdown is authoritative. If you have a chapter `.md`, do not also drop its PDF in this inbox batch; the builder will generate the chapter PDF from Markdown. The importer rejects that conflict instead of guessing.
- For a complete book, a `.md` and `.pdf` may be provided together: the Markdown creates the online reader, and the PDF remains a separate download.
- If a filename does not match, it will be listed and left in the inbox. Correct the name and retry.
- Duplicate files for the same book/chapter and type are rejected before anything is changed.
- Do not place entire folders or ZIP files here. Extract their contents first and place the named files directly in the inbox.

See the main [`README.md`](../README.md) for the full workflow and [`tools/README.md`](../tools/README.md) for implementation details.
