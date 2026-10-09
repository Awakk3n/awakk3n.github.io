#!/usr/bin/env python3
"""Turn any PDF into a standalone page on the site, in the folder and under the name you choose.

  python3 tools/pdf_to_page.py --pdf ~/Downloads/paper.pdf --folder Product-Management/Whitepapers --name Pricing-Playbook \\
          --title "Pricing Playbook" --summary "One line for the blog card" --date 2026-10-09

Creates  <folder>/<name>.html   (themed, dark-mode ready, nav/footer included, text inline)
         <folder>/<name>.pdf    (download link)
and adds a card to the home page Blog section (posts.json). Use --no-post to skip the card.
--title is optional (guessed from the PDF). Re-running with the same name overwrites the page.
"""
import argparse, datetime, html, json, os, re, shutil, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, ROOT); sys.path.insert(0, os.path.join(ROOT, "tools"))
import build
from pdf2html import convert, guess_title

def prefixed(h, p, anchors=False):
    def f(m):
        a, u = m.group(1), m.group(2)
        if u.startswith(("http", "mailto", "data:")): return m.group(0)
        if u.startswith("#"): return f'{a}="{p}index.html{u}"' if anchors else m.group(0)
        return f'{a}="{p}{u}"'
    return re.sub(r'(href|src)="([^"]*)"', f, h)

def main():
    a = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    a.add_argument("--pdf", required=True); a.add_argument("--folder", required=True); a.add_argument("--name", required=True)
    a.add_argument("--title"); a.add_argument("--summary", default=""); a.add_argument("--date", default=datetime.date.today().isoformat())
    a.add_argument("--no-post", action="store_true")
    o = a.parse_args()
    folder = o.folder.strip("/\\"); name = re.sub(r"\.html?$", "", o.name)
    depth = len([x for x in folder.split("/") if x]); P = "../" * depth
    title = o.title or guess_title(o.pdf) or name.replace("-", " ")
    body = convert(o.pdf)
    words = len(re.sub(r"<[^>]+>", " ", body).split())

    idx = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
    head = idx[:idx.index("<body>")]
    head = head.replace('<link rel="stylesheet" href="assets/home.css">', '<link rel="stylesheet" href="assets/books.css">')
    head = re.sub(r"<title>.*?</title>", f"<title>{html.escape(title)} | Abhinav</title>", head)
    head = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{html.escape(o.summary or title)}">', head)
    head = prefixed(head, P)
    header = re.sub(r' data-sec="[^"]*"', "", re.search(r'<header class="nav">.*?</header>', idx, re.S).group(0))
    header = prefixed(header, P, True).replace(f'{P}index.html#books', f'{P}books/index.html').replace(' class="active"', "")
    footer = prefixed(re.search(r'<footer class="footer">.*?</footer>', idx, re.S).group(0), P)
    date_h = datetime.date.fromisoformat(o.date).strftime("%B %d, %Y").replace(" 0", " ")
    page = f"""{head}<body class="books">
{header}
<main>
<section class="page-hero"><div class="wrap">
  <nav class="crumbs"><a href="{P}index.html#blog">Blog</a> / {html.escape(folder.split('/')[-1].replace('-', ' '))}</nav>
  <h1>{html.escape(title)}</h1>{f'<p>{html.escape(o.summary)}</p>' if o.summary else ''}
  <div class="hero-stats"><span>{date_h}</span><span>{max(1, round(words / 220))} min read</span><span><a href="{name}.pdf" download>Download PDF</a></span></div>
</div></section>
<div class="wrap doc"><article class="prose">
{body}
</article></div>
</main>
{footer}
<script src="{P}assets/site.js"></script>
<script src="{P}assets/particles.js"></script>
</body></html>
"""
    out_dir = os.path.join(ROOT, folder); os.makedirs(out_dir, exist_ok=True)
    open(os.path.join(out_dir, name + ".html"), "w", encoding="utf-8").write(page)
    shutil.copyfile(o.pdf, os.path.join(out_dir, name + ".pdf"))
    url = f"{folder}/{name}.html"
    print("page ->", url)
    if not o.no_post:
        pj = os.path.join(ROOT, "posts.json")
        posts = json.load(open(pj, encoding="utf-8")) if os.path.exists(pj) else []
        posts = [p for p in posts if p.get("url") != url]
        posts.append({"title": title, "date": o.date, "summary": o.summary, "url": url})
        json.dump(posts, open(pj, "w", encoding="utf-8"), indent=2, ensure_ascii=False)
    build.write_sitemap(build.load_meta(), build.write_posts())

main()
