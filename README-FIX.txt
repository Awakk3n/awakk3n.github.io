FULL BOOK SMOOTH-LOADING PERFORMANCE PATCH

Apply this patch at the root of your existing awakk3n.github.io repository.
Extract the ZIP and allow files to merge/overwrite when prompted.

What this update improves:
- Serves books as pre-rendered blocks in chunks of about 80 KB. Book 3 uses 88 smaller parts instead of 49 large parts; its largest generated content file drops from about 175.6 KB to 81.7 KB, while the initial portion stays small.
- Splits exceptionally large Markdown tables only between complete rows; continued table segments repeat their header, and table blocks stay around 40 KB.
- Loads up to eight content files concurrently and inserts no more than about 96 KB of ready HTML per animation frame, so the browser can paint and respond to input while the book continues loading.
- Appends ready chunks in source order and releases each cached payload after use.
- Builds the outline with a single DOM insertion and uses binary search to find the active heading during scrolling, rather than scanning every heading on every scroll frame.
- Updates only the active outline link and relevant section group instead of touching every outline link while reading.
- Updates the catalogue metadata to point to the regenerated chunk list.

The existing chapter-reader template and visual design are retained. This patch does not change CSS, the homepage layout, particle design, audio implementation, or any manuscript content.

Install:
1. Extract this ZIP into the repository root (same folder containing index.html and books.json).
2. Commit and push all files in the ZIP, including every chapters/b*-00-complete-book*.content.js file.
3. After GitHub Pages finishes publishing, hard-refresh the site with Ctrl+F5.

The three Markdown manuscripts are included for compatibility with the previous patch and have been verified byte-for-byte identical to the uploaded files. The generated cache can be rebuilt after future manuscript edits by running `python build_site_data.py` from the repository root.

Expected chunk counts: Book 1: 23; Book 2: 36; Book 3: 88. The first content file remains small so the reader can show opening content early. Larger chunks are then appended in bounded batches to keep main-thread work manageable.
