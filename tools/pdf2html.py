"""PDF -> semantic HTML (headings, paragraphs, lists, code, tables) for the on-page reader.
Requires: pip install pdfplumber
"""
import html, json, re, sys
import pdfplumber

E = html.escape
TERMINAL = tuple('.!?:;"”’)]')

def _style(ch):
    n = ch["fontname"].split("+")[-1]
    return ("Bold" in n, ("Italic" in n or "Oblique" in n), ("Courier" in n or "Mono" in n))

def _inline(chars):
    out, cur, buf = [], None, []
    def flush():
        if not buf: return
        t = E("".join(buf))
        b, i, m = cur
        if m: t = f"<code>{t}</code>"
        else:
            if i: t = f"<em>{t}</em>"
            if b: t = f"<strong>{t}</strong>"
        out.append(t)
    for c in chars:
        s = _style(c) if c["text"].strip() else cur
        if s is None: s = (False, False, False)
        if s != cur:
            flush(); buf.clear(); cur = s
        buf.append(c["text"])
    flush()
    return "".join(out)

def _plain(chars): return "".join(c["text"] for c in chars).strip()

LIG = {"\ufb00": "ff", "\ufb01": "fi", "\ufb02": "fl", "\ufb03": "ffi", "\ufb04": "ffl", "\ufb05": "st", "\ufb06": "st"}
def fix_lig(t):
    """The PDF emits ligature glyphs twice ('ﬁﬁrst'); collapse the pair and expand to plain letters."""
    t = re.sub(r"([\ufb00-\ufb06])\1", r"\1", t)
    return re.sub(r"[\ufb00-\ufb06]", lambda m: LIG[m.group(0)], t)

def spaced(chars):
    """This generator emits no space glyphs; infer them from horizontal gaps."""
    chars = sorted((c for c in chars if c["text"] != " "), key=lambda c: c["x0"])
    out, prev = [], None
    for c in chars:
        if prev is not None:
            gap = c["x0"] - prev["x1"]
            mono = _style(prev)[2] and _style(c)[2]
            n = max(0, round(gap / 5.58)) if mono else (1 if gap > c["size"] * 0.17 else 0)
            for _ in range(n): out.append({**prev, "text": " ", "x0": prev["x1"], "x1": prev["x1"]})
        out.append(c); prev = c
    return out

def _cell_html(page, bbox):
    x0, t, x1, b = bbox
    chars = page.crop((x0 + 1, t + 1, x1 - 1, b - 1), strict=False).chars
    if not chars: return ""
    lines = {}
    for c in chars: lines.setdefault(round(c["top"] / 3), []).append(c)
    parts = [_inline(spaced(lines[k])) for k in sorted(lines)]
    return " ".join(x for x in parts if x.strip())

BULLET = re.compile(r"^[•▪◦‣·]\s*|^[-–—]\s+")
NUMBER = re.compile(r"^(\d{1,3})[.)]\s+")

def convert(path, title_skip=None, meta_prefix=False):
    blocks = []          # dicts: t=h/p/li/ol/code/table/…
    def add(b):
        blocks.append(b)
    with pdfplumber.open(path) as pdf:
        for pi, page in enumerate(pdf.pages):
            tables = []   # (bbox, [rows of cell bboxes or None])
            for t in page.find_tables():
                # pdfplumber treats the page frame as the table border, so the paragraphs above/below a real
                # table show up as single-cell rows. Keep only the block between the first and last FULL row.
                ncol = max((len(r.cells) for r in t.rows), default=0)
                if ncol < 2: continue                      # single-column "tables" are callout boxes
                full = [i for i, r in enumerate(t.rows) if len(r.cells) == ncol and all(c is not None for c in r.cells)]
                if len(full) < 2: continue
                sel = t.rows[full[0]: full[-1] + 1]
                widths = [c[2] - c[0] for c in sel[0].cells]
                if min(widths) < 22 or sum(widths) < 120: continue   # phantom grids inside code blocks
                xs = [c for r in sel for cell in r.cells if cell for c in (cell[0], cell[2])]
                tables.append(((min(xs), sel[0].bbox[1], max(xs), sel[-1].bbox[3]), [r.cells for r in sel]))
            boxes = [t[0] for t in tables]
            def keep(o):
                if o["object_type"] != "char": return True
                cx, cy = (o["x0"] + o["x1"]) / 2, (o["top"] + o["bottom"]) / 2
                return not any(b[0] <= cx <= b[2] and b[1] <= cy <= b[3] for b in boxes)
            lines = page.filter(keep).extract_text_lines(return_chars=True, strip=True)
            items = []
            for l in lines:
                if l["bottom"] > page.height - 28 and re.fullmatch(r"[\d\s/ofPage-]*", l["text"]): continue
                items.append((l["top"], "line", l))
            for t in tables: items.append((t[0][1], "table", t))
            items.sort(key=lambda x: x[0])
            first_on_page = True
            prev_bottom = None
            dots = [c for c in page.curves if (c["x1"] - c["x0"]) <= 6 and (c["bottom"] - c["top"]) <= 6]   # drawn bullet glyphs
            for top, kind, o in items:
                if kind == "table":
                    bbox, rows = o
                    out_rows = []
                    for cells in rows:
                        r = []
                        for j, c in enumerate(cells):
                            if c is None:
                                if r: r[-1][1] += 1          # merged cell: extend previous colspan
                                continue
                            r.append([_cell_html(page, c), 1])
                        out_rows.append(r)
                    ncol = len(rows[0])
                    prev = blocks[-1] if blocks else None
                    if first_on_page and prev and prev["t"] == "table" and prev["ncol"] == ncol:
                        if [x[0] for x in out_rows[0]] == [x[0] for x in prev["rows"][0]]: out_rows = out_rows[1:]   # repeated header
                        prev["rows"].extend(out_rows)      # table continued from the previous page
                    else:
                        add({"t": "table", "rows": out_rows, "ncol": ncol})
                    prev_bottom = bbox[3]; first_on_page = False; continue
                chars = spaced(o["chars"])
                if not chars: continue
                text = _plain(chars)
                if not text: continue
                nonsp = [c for c in chars if c["text"].strip()]
                size = round(sum(c["size"] for c in nonsp) / len(nonsp), 1)
                mono = sum(1 for c in nonsp if _style(c)[2]) > len(nonsp) / 2
                sansb = all("NotoSans" in c["fontname"] and "Bold" in c["fontname"] for c in nonsp)
                gap = (o["top"] - prev_bottom) if prev_bottom is not None else 99
                prev_bottom = o["bottom"]
                if sansb:
                    lvl = 2 if size >= 20 else 3 if size >= 15 else 4 if size >= 12.5 else 5
                    if blocks and blocks[-1]["t"] == "h" and blocks[-1]["lvl"] == lvl and gap < size * 1.8 and not first_on_page:
                        blocks[-1]["text"] += " " + text
                    else:
                        add({"t": "h", "lvl": lvl, "text": text})
                elif mono:
                    ind = o["x0"]
                    if blocks and blocks[-1]["t"] == "code" and gap < size * 1.6:
                        blocks[-1]["lines"].append((ind, text))
                    else:
                        add({"t": "code", "lines": [(ind, text)]})
                else:
                    markup = _inline(chars)
                    bm, nm = BULLET.match(text), NUMBER.match(text)
                    dot = any(o["x0"] - 24 < d["x0"] < o["x0"] and abs((d["top"] + d["bottom"]) / 2 - (o["top"] + o["bottom"]) / 2) < (o["bottom"] - o["top"]) * 0.9 for d in dots)
                    if dot and not (bm or nm):
                        add({"t": "li", "ord": None, "text": markup, "x0": o["x0"]})
                    elif bm or nm:
                        raw = re.sub(r"^(<[^>]+>)*" + (r"[•▪◦‣·]\s*|[-–—]\s+" if bm else r"\d{1,3}[.)]\s+"), "", markup, count=1) if False else None
                        t_plain = markup
                        # strip marker from the markup text (marker is leading plain text)
                        t_plain = re.sub(r"^((?:<[^>]+>)*)(?:[•▪◦‣·]\s*|[-–—]\s+|\d{1,3}[.)]\s+)", r"\1", markup, count=1)
                        add({"t": "li", "ord": int(nm.group(1)) if nm else None, "text": t_plain, "x0": o["x0"]})
                    else:
                        last = blocks[-1] if blocks else None
                        cont = False
                        if last and last["t"] in ("p", "li"):
                            if first_on_page:
                                cont = not re.sub(r"<[^>]+>", "", last["text"]).rstrip().endswith(TERMINAL) and text[:1].islower()
                            else:
                                cont = gap < size * 0.95 and not (last["t"] == "li" and o["x0"] < last["x0"] - 4)
                        if cont:
                            sep = "" if last["text"].endswith("-") and text[:1].islower() else " "
                            last["text"] += sep + markup
                        else:
                            add({"t": "p", "text": markup})
                first_on_page = False
    # drop metadata/title duplication
    out = []
    i = 0
    if meta_prefix:  # book-3 front matter up to "status:" line
        for k, b in enumerate(blocks[:6]):
            if b["t"] == "p" and re.sub(r"<[^>]+>", "", b["text"]).startswith("status:"):
                blocks = blocks[k + 1:]; break
    if blocks and blocks[0]["t"] == "h" and blocks[0]["lvl"] == 2:
        blocks = blocks[1:]            # chapter title is shown by the reader
    n = len(blocks)
    while i < n:
        b = blocks[i]
        t = b["t"]
        if t == "h":
            lv = b["lvl"] if b["lvl"] != 2 else 2
            slug = re.sub(r"[^a-z0-9]+", "-", b["text"].lower()).strip("-")[:48]
            out.append(f'<h{lv} id="s{len(out)}-{slug}">{E(b["text"])}</h{lv}>')
        elif t == "p":
            out.append(f'<p>{b["text"]}</p>')
        elif t == "code":
            base = min(x for x, _ in b["lines"])
            out.append("<pre><code>" + "\n".join(" " * max(0, round((x - base) / 5.6)) + E(re.sub(r"<[^>]+>", "", s)) for x, s in b["lines"]) + "</code></pre>")
        elif t == "li":
            group = []
            while i < n and blocks[i]["t"] == "li":
                group.append(blocks[i]); i += 1
            base = min(g["x0"] for g in group)
            stack, buf = [], []
            for g in group:
                lvl = max(0, round((g["x0"] - base) / 16))
                tag = "ol" if g["ord"] is not None else "ul"
                start = f' start="{g["ord"]}"' if g["ord"] not in (None, 1) else ""
                if not stack:
                    stack.append(tag); buf.append(f"<{tag}{start}>")
                elif lvl > len(stack) - 1:
                    stack.append(tag); buf.append(f"<{tag}{start}>")
                else:
                    while len(stack) - 1 > lvl: buf.append("</li></" + stack.pop() + ">")
                    buf.append("</li>")
                buf.append("<li>" + g["text"])
            while stack: buf.append("</li></" + stack.pop() + ">")
            out.append("".join(buf))
            continue
        elif t == "table":
            def tr(cells, tag):
                return "<tr>" + "".join(f'<{tag}{f" colspan={n}" if n > 1 else ""}>{c}</{tag}>' for c, n in cells) + "</tr>"
            rows = b["rows"]
            out.append('<div class="tbl"><table><thead>' + tr(rows[0], "th") + "</thead><tbody>" + "".join(tr(r, "td") for r in rows[1:]) + "</tbody></table></div>")
        i += 1
    h = "\n".join(out)
    h = fix_lig(h)
    h = re.sub(r"\[\[([^\]]+)\]\]", r'<span class="term">\1</span>', h)
    return h

def guess_title(path):
    """First large bold heading on page 1 (used when no title is given)."""
    with pdfplumber.open(path) as pdf:
        parts, size, last = [], None, None
        for l in pdf.pages[0].extract_text_lines(return_chars=True, strip=True):
            ch = [c for c in l["chars"] if c["text"].strip()]
            if not ch: continue
            big = all("Bold" in c["fontname"] and c["size"] >= 15 for c in ch)
            txt = "".join(c["text"] for c in spaced(l["chars"])).strip()
            if re.match(r"^[a-z_]+:\s", txt): continue          # front-matter lines ("status: draft")
            if big and (size is None or (abs(ch[0]["size"] - size) < .5 and l["top"] - last < ch[0]["size"] * 1.8)):
                parts.append(txt); size = ch[0]["size"]; last = l["bottom"]
            elif parts: break
        t = fix_lig(" ".join(parts).strip())
        if not t: return None
        t = re.sub(r"^(PART|CHAPTER)\s*\d+\s*[:.\-]\s*", "", t, flags=re.I)
        t = re.sub(r"^C\d+\s*[—-]\s*", "", t)
        if t.isupper():
            t = re.sub(r"[A-Za-z]+", lambda m: m.group(0).upper() if m.group(0).upper() in {"PM", "PMS", "APM", "AI", "UX", "UI", "GTM", "API", "SQL", "OKR", "KPI", "MVP", "PRD", "B2B", "B2C"} else m.group(0).capitalize(), t)
            t = t.replace("PMS", "PMs")
        return t

if __name__ == "__main__":
    src, dst = sys.argv[1], sys.argv[2]
    body = convert(src, meta_prefix="Book_3" in src or "/book-3/" in src)
    open(dst, "w", encoding="utf-8").write("window.__ch(" + json.dumps(body, ensure_ascii=False) + ");")
    print(len(body), "chars")
