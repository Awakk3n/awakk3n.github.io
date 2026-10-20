# The Product Field

A static, interactive product-management learning library for GitHub Pages. The current build includes three books, 85 chapter pages, and four Book 3 companion resources. It follows the visitor's light/dark system preference (dark when there is none), remembers an explicit choice, and uses one shared particle field across all page types.

## Preview and publish

1. Extract the ZIP fully. The archive opens directly to `index.html` and the three top-level folders.
2. Open `index.html` for a local preview. Reading, search, study paths, notes, bookmarks, and interview practice work locally. YouTube's embedded player needs the deployed HTTPS URL because local `file://` pages cannot provide the required website referrer.
3. To publish, upload the extracted files and folders **directly to the root** of your GitHub repository (do not upload the ZIP or nest them inside another folder). In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/(root)`, and save.

## What's included

- `index.html` — collection landing page, chapter-title search, saved chapter list, and shortcuts to full-text search and study tools.
- `book.html` — one reusable volume index; Book 3 links its four companion resources, with the reading guide placed before the Glossary.
- `read.html` — chapter reader, reading progress, outline, previous/next navigation, local notes, bookmarks, sharing/copying, printing, and optional inline YouTube audio.
- `search.html` — full-text search across chapters, glossary entries, framework records and interview questions.
- `study.html` — four guided reading paths, timed random interview practice, self-scoring, and learning-data export/import.
- `books.json` — editable catalogue source.
- `assets/library-data.js`, `assets/resource-data.js`, `assets/search-index.js`, `assets/practice-data.js` — generated browser data; rebuild after source edits.
- `assets/audio-links.js` — editable YouTube URL map by chapter ID.
- `assets/theme-init.js` — runs in `<head>` before first paint: saved choice → system preference → dark. Single source of truth for the theme and the `theme-color` meta.
- `assets/site.css` — the design system. Section 1 holds every token (colour, type, spacing, radii, motion, z-index, shadows, hero atmosphere) for both themes; nothing below it uses a raw colour value.
- `assets/particles.js` — particle engine. All tunables live in the `CONFIG` block at the top.
- `assets/`, `chapters/`, `resources/` — site assets, 85 original chapter Markdown files plus generated content caches, and four companion Markdown sources plus generated caches.
- `build_site_data.py` — rebuilds the generated browser caches and search/practice data from Markdown sources.
- `.nojekyll` — avoids Jekyll processing of Markdown sources.

## Companion resources (Book 3)

- **How to Read the Book:** reading tracks, chapter anatomy, reference labels, verification notes and a practical cheat sheet. Source: `resources/HOW_TO_READ_THE_BOOK.md`.
- **Glossary:** 236 terms. `[[term-slug]]` chapter references become links to their glossary entry.
- **Frameworks Registry:** 249 frameworks, including a core-only filter for 30 core frameworks.
- **Interview Bank:** 298 questions with search, type/difficulty/company filters, rubrics, and model answers.

## Audio mappings

YouTube streams the audio; the website does not host audio files. Add a valid URL to `assets/audio-links.js` using the chapter ID shown in `books.json` or `assets/library-data.js`:

```javascript
window.FIELD_AUDIO_LINKS["book-1-ch-01"] = "https://www.youtube.com/watch?v=VIDEO_ID";
```

`VIDEO_ID` above is a placeholder. Only use videos you own or are permitted to link/embed. A source video must allow embedding for in-page playback; videos that do not can be opened on YouTube via the fallback. Preserve any real audio mappings already entered when replacing the repository files.

## Local learning data

Bookmarks, reading progress, personal chapter notes and practice scores are saved in the current browser only. Visit **Study desk → Keep your study data** to export/import a JSON backup. It does not sync across devices, and this public static site does not provide accounts or a server-side paywall.

## Update chapters or companion files

1. Edit the corresponding `.md` source in `chapters/` or `resources/`.
2. For a new chapter, update `books.json` with a unique ID, title, file path, and reader URL.
3. Run `python build_site_data.py` (requires `markdown-it-py`). Output is deterministic, so a rebuild with unchanged sources produces no diff.
4. Confirm the builder reports 3 books, 85 chapters, and 4 resources—or the updated counts if you intentionally added content—then test `index.html`, `search.html`, `study.html`, representative reader pages, and all resource pages before publishing.

## Design and accessibility

- The connected particle field is interactive: pointer movement nudges nearby nodes, and clicking the canvas adds a local burst without rebuilding the established network or kicking ambient nodes. Burst nodes expire cleanly, density adapts to screen size, and the field pauses off-screen while respecting `prefers-reduced-motion`.
- Light and dark are separate token sets (not an inversion); the choice is persisted only when the reader toggles it, and until then the page follows the operating system live. Accent text meets WCAG AA in both themes.
- A skip-to-content link is the first tab stop on every page.
- Keyboard focus states, `/` to focus the active search, mobile-responsive reading layouts, accessible audio fallback, print stylesheet, and no embedded autoplay until the reader selects Play.

## Where to find the main tools

The homepage now has a visible **Read, search, practise** section. **Search the full library** goes to `search.html`; **Follow a study path** opens the guided routes on `study.html`; **Run a timed interview** links directly to the practice section. The header also provides Search and Study desk links on desktop. The homepage can show the most recently opened chapter after you read one.

### How full-text search works

`assets/search-index.js` contains a build-generated list of searchable entries and a reverse word-to-entry index. The browser tokenizes a query into terms, removes one-character tokens, intersects the postings lists (so all entered terms must match), then ranks results higher when the terms occur in titles. The type filter narrows results to chapters, glossary entries, frameworks or interview questions. Up to 80 ranked results are rendered. Search runs locally in the browser; it does not call a search API.

### Personal study data

Bookmarks, chapter notes, read progress, last-opened chapter and practice scores are saved with browser local storage. They do not sync between devices automatically. Export/import on Study desk provides a manual transfer.

## Recent interface refinements

- Desktop hero banners share a 594px baseline; tablet and phone layouts share a 490px baseline and can grow naturally when narrow text wraps.
- The particle network uses per-visit randomized constellations, higher responsive density, curved cross-cluster links, bright signal trails, pointer repulsion and click-to-multiply bursts. It pauses outside the visible hero and respects reduced-motion preferences.
- The homepage displays three direct study-tool links: full-text search, guided reading paths and timed interview practice. Search and Study desk are also linked in the desktop header.
- The homepage shows a **Continue reading** shortcut after a chapter has been opened in that browser.
- The homepage's short search filters chapter titles only. The dedicated full-text search page searches the generated index across chapter text and reference resources, requires all query terms to match, and ranks title matches above body/excerpt matches.
- Search is entirely client-side: query terms are matched through a generated reverse word index; no search query is sent to an external service.
