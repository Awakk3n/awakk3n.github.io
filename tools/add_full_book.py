#!/usr/bin/env python3
"""Install a complete-book Markdown source and build its dedicated styled web reader.

Usage: python3 tools/add_full_book.py --book 1 --md /path/to/book.md
The source is copied to source-md/book-N/book.md. Run build.py to generate content/book-N/full.js.
"""
import argparse
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--book', type=int, required=True, help='book ID from books.json')
    parser.add_argument('--md', required=True, help='path to complete-book Markdown file')
    parser.add_argument('--no-build', action='store_true', help='copy source only; do not run builder')
    args = parser.parse_args()
    source = Path(args.md).expanduser().resolve()
    if not source.is_file() or source.suffix.lower() not in ('.md', '.markdown'):
        parser.error('--md must point to an existing .md or .markdown file')
    import json
    books = json.loads((ROOT / 'books.json').read_text(encoding='utf-8'))
    book = next((b for b in books if int(b['id']) == args.book), None)
    if not book:
        parser.error(f'book {args.book} not found in books.json')
    dest = ROOT / 'source-md' / book['slug'] / 'book.md'
    dest.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source, dest)
    print(f'Installed full-book Markdown: {dest.relative_to(ROOT)}')
    if not args.no_build:
        result = subprocess.run([sys.executable, str(ROOT / 'build.py'), '--skip-pdfs'], cwd=ROOT)
        raise SystemExit(result.returncode)

if __name__ == '__main__':
    main()
