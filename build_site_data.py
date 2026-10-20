#!/usr/bin/env python3
"""Build browser-readable catalogue and rendered caches for The Product Field.

Sources of truth:
- books.json + chapters/*.md for the three books
- resources/*.md for Book 3's reading guide, glossary, framework registry and interview bank

Run with: python build_site_data.py
"""
from __future__ import annotations

import html
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from markdown_it import MarkdownIt

ROOT = Path(__file__).resolve().parent
BOOKS_PATH = ROOT / "books.json"
ASSETS = ROOT / "assets"
CHAPTERS = ROOT / "chapters"
RESOURCES_DIR = ROOT / "resources"

MARKDOWN = MarkdownIt("default", {"html": False, "typographer": False})
FRONT_MATTER = re.compile(r"^\ufeff?---\s*\r?\n[\s\S]*?\r?\n---\s*\r?\n")
WIKILINK = re.compile(r"\[\[([a-z0-9][a-z0-9-]*)\]\]", re.I)
INTERVIEW_HEADING = re.compile(r"^###\s+(IQ-C\d{2}-\d{2})\s*$")
INTERVIEW_META = re.compile(
    r"\*\*Type:\*\*\s*(.*?)\s*·\s*\*\*Difficulty:\*\*\s*(.*?)\s*·\s*\*\*Source chapter:\*\*\s*(.*?)\s*·\s*\*\*Competency:\*\*\s*(.*?)\s*·\s*\*\*Company tag:\*\*\s*(.*?)\s*$"
)
META_LOOKAHEAD_LINES = 5   # the metadata line sits within a few lines of its heading

RESOURCE_CONFIG = [
    {
        "id": "how-to-read",
        "file": "HOW_TO_READ_THE_BOOK.md",
        "title": "How to Read the Book",
        "eyebrow": "BOOK 3 / START HERE",
        "description": "A practical guide to the book's reading tracks, chapter structure, reference labels and ways to use the APM interview material.",
        "count": "9 sections",
        "kind": "guide",
    },
    {
        "id": "glossary",
        "file": "04_glossary.md",
        "title": "Glossary",
        "eyebrow": "BOOK 3 / COMPANION RESOURCE 01",
        "description": "236 terms used across the handbook, with definitions, examples, non-examples and owning chapters.",
        "count": "236 terms",
        "kind": "glossary",
    },
    {
        "id": "frameworks",
        "file": "06_frameworks_registry.md",
        "title": "Frameworks Registry",
        "eyebrow": "BOOK 3 / COMPANION RESOURCE 02",
        "description": "249 registered frameworks, including a quick reference to the 30 core frameworks.",
        "count": "249 frameworks · 30 core",
        "kind": "frameworks",
    },
    {
        "id": "interview-bank",
        "file": "07_interview_bank.md",
        "title": "Interview Bank",
        "eyebrow": "BOOK 3 / COMPANION RESOURCE 03",
        "description": "298 interview questions with difficulty, competency, scoring rubrics and model-answer guidance.",
        "count": "298 questions",
        "kind": "interview-bank",
    },
]


def js_json(value: object) -> str:
    return (
        json.dumps(value, ensure_ascii=False, separators=(",", ":"))
        .replace("\u2028", "\\u2028")
        .replace("\u2029", "\\u2029")
    )


def slugify(value: str) -> str:
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-"))


def extract_glossary_labels(markdown: str) -> dict[str, str]:
    labels: dict[str, str] = {}
    pattern = re.compile(r"^###\s+`?\[\[([a-z0-9-]+)\]\]`?\s+[—–-]\s+(.+?)\s*$", re.M)
    for match in pattern.finditer(markdown):
        labels[match.group(1)] = match.group(2).strip()
    return labels


def replace_wikilinks_outside_code(line: str, labels: dict[str, str]) -> str:
    """Convert [[term-slug]] prose to glossary links without changing inline code."""
    output: list[str] = []
    cursor = 0
    code_span = re.compile(r"(`+)(.+?)\1")

    for match in code_span.finditer(line):
        plain = line[cursor:match.start()]
        output.append(WIKILINK.sub(
            lambda m: f"[{labels.get(m.group(1), m.group(1).replace('-', ' '))}](resource.html?resource=glossary#term-{m.group(1)})",
            plain,
        ))
        output.append(match.group(0))
        cursor = match.end()

    tail = line[cursor:]
    output.append(WIKILINK.sub(
        lambda m: f"[{labels.get(m.group(1), m.group(1).replace('-', ' '))}](resource.html?resource=glossary#term-{m.group(1)})",
        tail,
    ))
    return "".join(output)


def convert_wikilinks(markdown: str, labels: dict[str, str]) -> str:
    out: list[str] = []
    fence_char: str | None = None
    fence_len = 0
    for line in markdown.splitlines():
        fence = re.match(r"^\s*(`{3,}|~{3,})", line)
        if fence:
            token = fence.group(1)
            if fence_char is None:
                fence_char, fence_len = token[0], len(token)
            elif token[0] == fence_char and len(token) >= fence_len:
                fence_char, fence_len = None, 0
            out.append(line)
            continue
        if fence_char:
            out.append(line)
        else:
            out.append(replace_wikilinks_outside_code(line, labels))
    return "\n".join(out) + ("\n" if markdown.endswith("\n") else "")


def parse_interview_meta(markdown: str) -> dict[str, dict[str, str]]:
    """Map each interview question ID to the fields on its metadata line."""
    lines = markdown.splitlines()
    meta: dict[str, dict[str, str]] = {}
    for i, line in enumerate(lines):
        heading = INTERVIEW_HEADING.match(line)
        if not heading:
            continue
        prop = next((ln for ln in lines[i + 1:i + META_LOOKAHEAD_LINES] if ln.strip()), "")
        field = INTERVIEW_META.search(prop)
        if field:
            meta[heading.group(1)] = dict(zip(("type", "difficulty", "chapter", "competency", "company"), (g.strip() for g in field.groups())))
    return meta


def render_markdown(markdown: str, labels: dict[str, str], kind: str | None = None) -> str:
    source = convert_wikilinks(markdown, labels)
    rendered = MARKDOWN.render(source)
    # The hero already provides the resource title, so remove the repeated source-file H1.
    rendered = re.sub(r"^<h1>.*?</h1>\s*", "", rendered, count=1)

    if kind == "glossary":
        rendered = re.sub(
            r"<h3><code>\[\[([a-z0-9-]+)\]\]</code>\s+[—–-]\s+(.*?)</h3>",
            lambda m: f'<h3 id="term-{m.group(1)}">{m.group(2)}</h3>',
            rendered,
        )

    if kind == "interview-bank":
        meta = parse_interview_meta(markdown)

        def decorate_question(match: re.Match[str]) -> str:
            qid = match.group(1)
            data = meta.get(qid, {})
            attrs = {
                "id": "question-" + qid.lower(),
                "data-question-id": qid,
                "data-type": slugify(data.get("type", "")),
                "data-difficulty": slugify(data.get("difficulty", "")),
                "data-chapter": data.get("chapter", ""),
                "data-competency": data.get("competency", ""),
                "data-company": "" if data.get("company", "—") == "—" else data.get("company", ""),
            }
            attr_string = " ".join(f'{key}="{html.escape(str(value), quote=True)}"' for key, value in attrs.items())
            return f"<h3 {attr_string}>{qid}</h3>"

        rendered = re.sub(r"<h3>(IQ-C\d{2}-\d{2})</h3>", decorate_question, rendered)

    return rendered



class PlainTextExtractor(HTMLParser):
    """Small dependency-free HTML-to-text helper for the generated search index."""
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.parts: list[str] = []

    def handle_data(self, data: str) -> None:
        if data.strip():
            self.parts.append(data.strip())

    def text(self) -> str:
        return re.sub(r"\s+", " ", " ".join(self.parts)).strip()


def plain_markdown(markdown: str, labels: dict[str, str]) -> str:
    extractor = PlainTextExtractor()
    extractor.feed(render_markdown(markdown, labels))
    return extractor.text()


def build_search_and_practice_data(books: list[dict], labels: dict[str, str]) -> tuple[int, int]:
    """Generate the full-text search index and timed-practice prompts from sources."""
    search_items: list[dict[str, str]] = []
    for book in books:
        for chapter in book.get("chapters", []):
            path = ROOT / chapter["file"]
            raw = FRONT_MATTER.sub("", path.read_text(encoding="utf-8-sig"), count=1)
            text = plain_markdown(raw, labels)
            search_items.append({
                "kind": "chapter", "title": chapter["title"],
                "subtitle": book["title"] + " · Chapter " + str(chapter.get("label", "")),
                "url": chapter["readUrl"], "text": text, "book": book["title"]
            })

    guide_path = RESOURCES_DIR / "HOW_TO_READ_THE_BOOK.md"
    guide_source = guide_path.read_text(encoding="utf-8-sig")
    search_items.append({
        "kind": "guide", "title": "How to Read the Book",
        "subtitle": "Book 3 · Reading guide", "url": "resource.html?resource=how-to-read",
        "text": plain_markdown(guide_source, labels), "book": "Book 3 · Reading guide"
    })

    glossary = (RESOURCES_DIR / "04_glossary.md").read_text(encoding="utf-8-sig")
    matches = list(re.finditer(r"^###\s+`?\[\[([a-z0-9-]+)\]\]`?\s+[—–-]\s+(.+?)\s*$", glossary, re.M | re.I))
    for i, match in enumerate(matches):
        end = matches[i + 1].start() if i + 1 < len(matches) else len(glossary)
        section = glossary[match.start():end]
        search_items.append({
            "kind": "glossary", "title": match.group(2).strip(),
            "subtitle": "Glossary term", "url": "resource.html?resource=glossary#term-" + match.group(1),
            "text": plain_markdown(section, labels), "book": "Book 3 · Glossary"
        })

    frameworks = (RESOURCES_DIR / "06_frameworks_registry.md").read_text(encoding="utf-8-sig")
    registry_match = re.search(r"^##\s+Registry\s*$", frameworks, re.M)
    if registry_match:
        for line in frameworks[registry_match.end():].splitlines():
            if not line.startswith("| FW-C"):
                if line.startswith("## "):
                    break
                continue
            cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
            if len(cells) < 2:
                continue
            framework_id = re.sub(r"`", "", cells[0]).strip()
            name = re.sub(r"[*`]", "", cells[1]).strip()
            text = re.sub(r"[*`]", "", " ".join(cells)).replace("—", " ")
            search_items.append({
                "kind": "framework", "title": name, "subtitle": framework_id,
                "url": "resource.html?resource=frameworks#" + framework_id.lower(),
                "text": text, "book": "Book 3 · Frameworks Registry"
            })

    interview_source = (RESOURCES_DIR / "07_interview_bank.md").read_text(encoding="utf-8-sig")
    question_matches = list(re.finditer(r"^###\s+(IQ-C\d{2}-\d{2})\s*$", interview_source, re.M))
    practice_items: list[dict[str, str]] = []
    for i, match in enumerate(question_matches):
        end = question_matches[i + 1].start() if i + 1 < len(question_matches) else len(interview_source)
        section = interview_source[match.start():end].strip()
        qid = match.group(1)
        meta_line = next((line for line in section.splitlines() if "**Type:**" in line), "")
        meta = INTERVIEW_META.search(meta_line)
        prompt_match = re.search(r"^\s*-\s+\*\*Prompt:\*\*\s*(.+?)\s*$", section, re.M)
        prompt = prompt_match.group(1).strip() if prompt_match else qid
        details = {
            "type": meta.group(1).strip() if meta else "",
            "difficulty": meta.group(2).strip() if meta else "Intermediate",
            "chapter": meta.group(3).strip() if meta else "",
            "competency": meta.group(4).strip() if meta else "",
            "company": "" if not meta or meta.group(5).strip() == "—" else meta.group(5).strip(),
        }
        cleaned = re.sub(r"^###.*?$", "", section, count=1, flags=re.M)
        full_text = plain_markdown(cleaned, labels)
        item = {
            "kind": "interview", "title": prompt, "subtitle": qid + " · " + details["difficulty"],
            "url": "resource.html?resource=interview-bank#question-" + qid.lower(),
            "text": full_text, "book": "Book 3 · Interview Bank", **details
        }
        search_items.append(item)
        practice_items.append({"id": qid, "prompt": prompt, **details, "url": item["url"]})

    # Store a compact inverted index instead of shipping every chapter body to
    # the search page. Documents keep short previews; postings cover all source text.
    postings: dict[str, list[int]] = {}
    compact_documents: list[dict[str, str]] = []
    for index, item in enumerate(search_items):
        full_text = item.pop("text", "")
        token_source = " ".join([item.get("title", ""), item.get("subtitle", ""), item.get("book", ""), full_text])
        tokens = set(re.findall(r"[a-z0-9]+", token_source.lower()))
        for token in sorted(tokens):          # sorted: output must not depend on hash seed
            if len(token) > 1:
                postings.setdefault(token, []).append(index)
        item["excerpt"] = full_text[:300].strip()
        compact_documents.append(item)

    (ASSETS / "search-index.js").write_text(
        "/* Generated inverted full-text index. Edit Markdown sources and rebuild. */\n"
        f"window.FIELD_SEARCH_INDEX = {js_json(compact_documents)};\n"
        f"window.FIELD_SEARCH_POSTINGS = {js_json(dict(sorted(postings.items())))};\n",
        encoding="utf-8", newline="\n"
    )
    (ASSETS / "practice-data.js").write_text(
        "/* Generated from the interview bank by build_site_data.py. */\n"
        f"window.FIELD_PRACTICE_QUESTIONS = {js_json(practice_items)};\n",
        encoding="utf-8", newline="\n"
    )
    return len(search_items), len(practice_items)


def main() -> None:
    if not CHAPTERS.is_dir() or not RESOURCES_DIR.is_dir():
        raise SystemExit("Expected chapters/ and resources/ directories beside build_site_data.py")

    books = json.loads(BOOKS_PATH.read_text(encoding="utf-8"))
    missing = []
    chapter_count = 0
    labels: dict[str, str] = {}
    glossary_path = RESOURCES_DIR / "04_glossary.md"
    if glossary_path.is_file():
        labels = extract_glossary_labels(glossary_path.read_text(encoding="utf-8-sig"))

    for book in books:
        for chapter in book.get("chapters", []):
            source_rel = chapter.get("file", "")
            source_path = (ROOT / source_rel).resolve()
            if ROOT not in source_path.parents or not source_path.is_file():
                missing.append(f"{chapter.get('id', '(missing id)')}: {source_rel}")
                continue
            chapter["contentFile"] = source_path.relative_to(ROOT).with_suffix(".content.js").as_posix()
            raw = source_path.read_text(encoding="utf-8-sig")
            normalized = FRONT_MATTER.sub("", raw, count=1)
            rendered = render_markdown(normalized, labels)
            payload = (
                "/* Generated by build_site_data.py; edit the Markdown source instead. */\n"
                "window.FIELD_CHAPTER_HTML = window.FIELD_CHAPTER_HTML || {};\n"
                f"window.FIELD_CHAPTER_HTML[{js_json(chapter['id'])}] = {js_json(rendered)};\n"
            )
            (ROOT / chapter["contentFile"]).write_text(payload, encoding="utf-8", newline="\n")
            chapter_count += 1

    if missing:
        raise SystemExit("Missing or invalid chapter sources:\n" + "\n".join(missing))

    BOOKS_PATH.write_text(json.dumps(books, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n")
    (ASSETS / "library-data.js").write_text(
        "/* Generated from books.json by build_site_data.py. */\n"
        f"window.FIELD_BOOKS = {js_json(books)};\n",
        encoding="utf-8",
        newline="\n",
    )

    resource_meta: list[dict[str, str]] = []
    for config in RESOURCE_CONFIG:
        source_path = RESOURCES_DIR / config["file"]
        if not source_path.is_file():
            raise SystemExit(f"Missing resource source: {source_path}")
        raw = source_path.read_text(encoding="utf-8-sig")
        rendered = render_markdown(raw, labels, config["kind"])
        content_file = source_path.with_suffix(".content.js").relative_to(ROOT).as_posix()
        payload = (
            "/* Generated by build_site_data.py; edit the Markdown source instead. */\n"
            "window.FIELD_RESOURCE_HTML = window.FIELD_RESOURCE_HTML || {};\n"
            f"window.FIELD_RESOURCE_HTML[{js_json(config['id'])}] = {js_json(rendered)};\n"
        )
        (ROOT / content_file).write_text(payload, encoding="utf-8", newline="\n")
        resource_meta.append({
            "id": config["id"],
            "title": config["title"],
            "eyebrow": config["eyebrow"],
            "description": config["description"],
            "count": config["count"],
            "kind": config["kind"],
            "file": "resources/" + config["file"],
            "contentFile": content_file,
        })

    interview_meta = parse_interview_meta((RESOURCES_DIR / "07_interview_bank.md").read_text(encoding="utf-8-sig"))

    filters = {
        "types": sorted({v["type"] for v in interview_meta.values()}),
        "difficulties": ["Beginner", "Intermediate", "Hard"],
        "companies": sorted({v["company"] for v in interview_meta.values() if v["company"] != "—"}),
        "questionCount": len(interview_meta),
    }
    (ASSETS / "resource-data.js").write_text(
        "/* Generated from resources/*.md by build_site_data.py. */\n"
        f"window.FIELD_RESOURCES = {js_json(resource_meta)};\n"
        f"window.FIELD_GLOSSARY_LABELS = {js_json(labels)};\n"
        f"window.FIELD_INTERVIEW_FILTERS = {js_json(filters)};\n",
        encoding="utf-8",
        newline="\n",
    )
    search_count, practice_count = build_search_and_practice_data(books, labels)
    print(f"Built browser data for {len(books)} books, {chapter_count} chapters and {len(resource_meta)} companion resources.")
    print(f"Glossary links: {len(labels)} terms; interview entries: {len(interview_meta)}.")
    print(f"Generated unified search index with {search_count} entries and {practice_count} timed-practice questions.")


if __name__ == "__main__":
    main()
