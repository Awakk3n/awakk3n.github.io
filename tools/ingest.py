#!/usr/bin/env python3
"""Import named Markdown, PDF, and audiobook files from inbox/ into the site.

Chapter examples:
  book2_ch30_Negotiation_for_PMs.md
  book2_ch30.pdf
  book2_ch30.m4a

Whole-book examples:
  book1_full.md
  book1_full.pdf

Use --dry-run to preview the import. Files are removed from inbox/ only when the
corresponding import succeeds. Files with unknown names are left untouched.
"""
from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INBOX = ROOT / "inbox"
AUDIO_EXTS = {"mp3", "m4a", "wav", "ogg"}
MARKDOWN_EXTS = {"md", "markdown"}

# Separators between the book/chapter tokens may be dashes, underscores, or spaces.
SEP = r"[-_ ]?"
CHAPTER_RE = re.compile(
    rf"^book{SEP}(\d+)[-_ ](?:ch|chapter)[-_ ]?(\d+)(?:[-_ ](.+?))?\.(pdf|md|markdown|mp3|m4a|wav|ogg)$",
    re.IGNORECASE,
)
FULL_RE = re.compile(rf"^book{SEP}(\d+)[-_ ]full\.(pdf|md|markdown)$", re.IGNORECASE)


def _clean_title(value: str) -> str:
    value = re.sub(r"[_]+", " ", value)
    value = re.sub(r"\s+", " ", value).strip(" -_")
    return value


def _title_from_markdown(path: Path) -> str | None:
    """Use the first Markdown heading when a filename does not specify a title."""
    try:
        for line in path.read_text(encoding="utf-8-sig").splitlines()[:80]:
            match = re.match(r"^#{1,2}\s+(.+?)\s*#*\s*$", line.strip())
            if match:
                title = re.sub(r"[`*_~]", "", match.group(1)).strip()
                if title and title != "---":
                    return title[:180]
    except (OSError, UnicodeError):
        return None
    return None


def _add_unique(files: dict, field: str, filename: str, label: str, errors: list[str]) -> None:
    if field in files:
        errors.append(f"Duplicate {field} for {label}: {files[field]} and {filename}")
    else:
        files[field] = filename


def _collect_files() -> tuple[dict, list[str], list[str]]:
    """Return grouped work, skipped filenames, and conflict/error messages."""
    grouped: dict[tuple[int, int | str], dict] = {}
    skipped: list[str] = []
    errors: list[str] = []
    for path in sorted(INBOX.iterdir(), key=lambda p: p.name.casefold()):
        if path.name.casefold() == "readme.md" or path.name.startswith("."):
            continue
        if not path.is_file():
            skipped.append(f"{path.name} (directories are not ingested; place files directly in inbox/)")
            continue

        full = FULL_RE.fullmatch(path.name)
        chapter = CHAPTER_RE.fullmatch(path.name)
        if full:
            book_no = int(full.group(1))
            key = (book_no, "full")
            item = grouped.setdefault(key, {"book": book_no, "num": "full", "label": f"Book {book_no} full book", "files": {}})
            ext = full.group(2).lower()
            field = "md" if ext in MARKDOWN_EXTS else "pdf"
            _add_unique(item["files"], field, path.name, item["label"], errors)
            continue

        if chapter:
            book_no, chapter_no = int(chapter.group(1)), int(chapter.group(2))
            label = f"Book {book_no}, chapter {chapter_no}"
            key = (book_no, chapter_no)
            item = grouped.setdefault(key, {"book": book_no, "num": chapter_no, "label": label, "files": {}})
            ext = chapter.group(4).lower()
            if ext == "pdf":
                field = "pdf"
            elif ext in MARKDOWN_EXTS:
                field = "md"
            else:
                field = "audio"
            _add_unique(item["files"], field, path.name, item["label"], errors)
            named_title = _clean_title(chapter.group(3) or "")
            if named_title:
                item.setdefault("title_from_name", named_title)
            continue

        skipped.append(path.name)
    return grouped, skipped, errors


def _commands_for_item(item: dict) -> list[list[str]]:
    files = item["files"]
    book = item["book"]
    prefix = [sys.executable]
    commands: list[list[str]] = []
    if item["num"] == "full":
        if "md" in files:
            commands.append(prefix + [str(ROOT / "tools" / "add_full_book.py"), "--book", str(book), "--md", str(INBOX / files["md"])])
        if "pdf" in files:
            commands.append(prefix + [str(ROOT / "tools" / "add_chapter.py"), "--book", str(book), "--full", "--pdf", str(INBOX / files["pdf"])])
        return commands

    cmd = prefix + [str(ROOT / "tools" / "add_chapter.py"), "--book", str(book), "--num", str(item["num"])]
    title = item.get("title_from_name")
    if "md" in files:
        md_path = INBOX / files["md"]
        title = title or _title_from_markdown(md_path)
    if title:
        cmd += ["--title", title]
    if "md" in files:
        cmd += ["--md", str(INBOX / files["md"])]
    if "pdf" in files:
        cmd += ["--pdf", str(INBOX / files["pdf"])]
    if "audio" in files:
        cmd += ["--audio", str(INBOX / files["audio"])]
    commands.append(cmd)
    return commands


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--dry-run", action="store_true", help="show what would be imported without changing files")
    args = parser.parse_args()
    if not INBOX.is_dir():
        print(f"Inbox folder not found: {INBOX}", file=sys.stderr)
        return 1

    grouped, skipped, errors = _collect_files()
    for item in grouped.values():
        if item["num"] != "full" and "md" in item["files"] and "pdf" in item["files"]:
            errors.append(
                f"{item['label']} has both Markdown and PDF. Markdown is the source of truth; "
                "remove the chapter PDF from inbox/ (a PDF will be generated from Markdown)."
            )
    if errors:
        print("Import conflicts detected; nothing was changed:", file=sys.stderr)
        for error in errors:
            print(f"  - {error}", file=sys.stderr)
        return 2
    if not grouped:
        print("Inbox is empty or no filenames matched the supported patterns.")
        if skipped:
            print("Files left untouched:", *[f"  - {name}" for name in skipped], sep="\n")
        return 0

    if args.dry_run:
        print("DRY RUN — no files will be copied, deleted, or built.\n")
    all_ok = True
    imported_any = False
    for item in grouped.values():
        commands = _commands_for_item(item)
        print(f"\n{item['label']}")
        for command in commands:
            display = [str(x) for x in command]
            print("  ->", " ".join(f'"{x}"' if " " in x else x for x in display))
        if args.dry_run:
            continue
        item_ok = True
        for command in commands:
            result = subprocess.run(command, cwd=ROOT)
            if result.returncode != 0:
                print(f"  FAILED (exit {result.returncode}); source file(s) kept in inbox/", file=sys.stderr)
                item_ok = False
                all_ok = False
                break
        if item_ok:
            imported_any = True
            for filename in item["files"].values():
                (INBOX / filename).unlink(missing_ok=True)
            print("  Imported successfully; inbox copies removed.")

    if imported_any and not args.dry_run:
        print("\nRefreshing site indexes and sitemap ...")
        result = subprocess.run([sys.executable, str(ROOT / "build.py"), "--skip-pdfs"], cwd=ROOT)
        if result.returncode != 0:
            print("Final site refresh failed; imported source files are already saved in their source folders.", file=sys.stderr)
            all_ok = False

    if skipped:
        print("\nFiles left untouched (name did not match a supported pattern):")
        for name in skipped:
            print(f"  - {name}")
    if args.dry_run:
        print("\nReview the plan above. Run `python3 tools/ingest.py` to perform it.")
    return 0 if all_ok else 1


if __name__ == "__main__":
    raise SystemExit(main())
