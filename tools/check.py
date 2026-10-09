#!/usr/bin/env python3
"""Health check: run before pushing.  python3 tools/check.py
Reports PDFs without page text, audio without a PDF, untitled chapters, and broken local links in every .html."""
import glob, json, os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, ROOT)
import build
issues = []
for b in build.load_meta():
    s = b["slug"]; titled = {c["num"]: c["title"] for c in b["chapters"]}
    pdfs = {int(m[1]) for f in glob.glob(f"{ROOT}/pdf/{s}/ch-*.pdf") if (m := re.search(r"ch-(\d+)\.pdf", f))}
    for n in sorted(pdfs):
        if not os.path.exists(f"{ROOT}/content/{s}/ch-{n:02d}.js"): issues.append(f"{s} ch {n}: no page text (run build.py; needs pdfplumber)")
        if n not in titled or titled[n].startswith("Chapter "): issues.append(f"{s} ch {n}: no title in books.json")
    for f in glob.glob(f"{ROOT}/audio/{s}/ch-*.*"):
        m = re.search(r"ch-(\d+)\.", f)
        if m and int(m[1]) not in pdfs: issues.append(f"{os.path.relpath(f, ROOT)}: audio without a PDF chapter")
for f in glob.glob(f"{ROOT}/**/*.html", recursive=True):
    t = open(f, encoding="utf-8").read()
    for u in re.findall(r'(?:href|src)="([^"#][^"]*)"', t):
        if u.startswith(("http", "mailto", "data:", "javascript")): continue
        u = u.split("#")[0].split("?")[0]
        if u and not os.path.exists(os.path.join(os.path.dirname(f), u)): issues.append(f"{os.path.relpath(f, ROOT)}: broken link {u}")
print("\n".join(issues) if issues else "OK: no problems found")
sys.exit(1 if issues else 0)
