# Changelog

## 2026-10-21 — Collapsible header, Back button, consistent chapter ids, calmer pages
- **Header:** the header is the logo and one chevron `‹`, collapsed by default. It opens to Search, Study desk, the theme icon (and the text-size control on chapters): sliding out beside the chevron on wide screens, as a small panel on phones. Escape or a click elsewhere closes it. Search and Study desk are on every page at every width (they were missing on phones); the theme button is icon-only (no "Light/Dark" word).
- **Back button:** one style and one label, "← Back", on every page that had a back link (library, book index, reference pages, chapter sidebar, privacy). It goes back in history when you came from this site, and to the sensible destination otherwise; its accessible name says where it goes.
- **Landing page:** the hero no longer has "Explore the collection" / "Search all content". The library note ("Showing 85 chapters… This quick filter searches chapter titles… Search the full text") is replaced by a status line with your reading progress and a **Random unread chapter** button, placed next to the filters.
- **Repetition removed:** footers no longer repeat Search / Study desk; the reader's sidebar "Saved on this device" note (repeated by the notes box); the study page's duplicate search link and privacy sentence; the home page's tool and library intro sentences; "Streams from YouTube" in the audio card. Arrows removed from text links, nav and buttons (kept on whole-row cards, direction arrows and state icons).
- **Chapter actions:** Save · Share · Print · Mark read are one bar of four equal buttons (desktop: joined bar; phone: four equal columns). "Mark read" no longer stands out.
- **Chapter ids:** Book 3 now uses `book-3-ch-NN` like Books 1 and 2 (`b3-NN-…` source files). Old links (`book-3-cNN`) still open, the address is tidied, and anything saved in a reader's browser (progress, bookmarks, notes, audio positions) is renamed automatically, once. On-page labels (C03…) are unchanged because the glossary and frameworks cite chapters by them.
- **Chapter start:** a chapter that opens with a heading (Book 3) now starts exactly where one that opens with an introduction (Books 1, 2) does.
- **Links in the book** (glossary terms, other chapters, external sources) open in a new tab; same-page anchors stay.
- **Reference pages:** the glossary, interview bank and frameworks open on the entries; maintainers' notes ("Generated from tools/state.json", rules, schema, protocol, merge log) are behind "+ About this index". The glossary has an A–Z strip.
- **Spacing:** inner-page heroes no longer take the home hero's full height, and sections stop 48–56 px above the footer (they left 100–190 px).
- **Particles:** body a touch more translucent (6%; chapter pages 4%).
- **Share preview:** new `assets/og-image.png` from the live hero; complete share tags on every page (they existed only on the home page).
- Tests: `behaviour.js`, `narrow.js`, `check-links.js` added; functional updated.

## 2026-10-20 — Flat controls, no glass, stretched bonds fixed
- **Glass look removed.** Controls are now a three-level system: one solid PRIMARY button per view, quiet outlined SECONDARY buttons, and TERTIARY text-with-icon for navigation and light actions. Far fewer boxes: the reader header went from five boxed buttons to two controls (one joined text-size control and the theme button); header navigation is plain text with an icon; Bookmark / Share / Print are text actions and "Mark as read" is the one outlined action; "Clear" is a text link.
- **Text size:** A− and A+ are one joined control and switch off at the smallest and largest size.
- **Glossary / Interview Bank / Frameworks:** search, count, Clear and filters live in one card (no full-width band, no boxes inside the box).
- **Bonds can no longer stretch.** The bond smoothing added earlier kept drawing a bond after one end wrapped around the screen edge, so bonds reached ~900 px while scrolling. A bond is now dropped the moment it exceeds its limit and fades as it nears it (longest while scrolling: 165 px).
- **Hero particles about 18% dimmer** (field strength 0.82 in the hero; body unchanged at 8%, reader 5%).
- **Icon spacing:** "Search the full text↗", the previous/next chapter arrows and "↓ Export learning data" had no space before the icon; fixed and scanned on every page at desktop and phone width (0 left). The reader's "Study" link now has the same icon as "Search".
- Tests: 73 functional checks (added: bonds never stretch, text-size caps, at most two boxed controls in the header).
- _Supersedes the "glass controls" entry below._

## 2026-10-20 — Glass controls, calmer field, and a round of fixes (glass look later removed, see above)
- **Glass controls (iOS feel).** Header links, theme toggle, reader tools, filters, "Mark as read", Clear, search boxes and selects are rounded, translucent and softly blurred, with a thin top highlight and a springy press. Primary buttons stay solid. The hero's volume panel is glass too. "Search ↗" and "Study desk ↗" now look and read the same on every page (they had no icon on some pages, and the arrow touched the word on phones).
- **Glossary / Interview Bank / Frameworks toolbar** is a frosted glass bar instead of an opaque band; more compact on phones.
- **Reader outline** never shows a scrollbar (so text no longer shifts when sub-headings open); a soft edge fade shows when there is more.
- **"Mark as read" no longer scrolls the page** (it showed a toast instead).
- **Book pages:** "How to Read the Book" is no longer shaded differently; all four rows align.
- **Audio card:** clearer wording ("Plays through YouTube. By pressing play you agree to the YouTube Terms of Service · Privacy"), which becomes a short "Playing through YouTube · Terms of Service · Privacy" once playing.
- **Particles:** about 28% slower; bonds now ease in and out (and keep their slots) instead of flickering on and off; body a touch more translucent (8%, reader pages 5%).
- **Search results:** glossary results no longer start with raw `[[term]] — term` markup (fixed in the index build).
- Header fits on one line from 320 px; contrast fix for the selected filter count.
- Tests: 70 functional checks (added: mark-as-read keeps position, outline has no scrollbar, header icons consistent).

## 2026-10-20 — Reveal particle field, original icons restored
- **Particle field replaced by "Reveal"** (chosen from six concepts): hero full strength, body translucent (weaker on chapter pages), small cursor glow as before, random tap (create / push away / destroy, crowd-aware, bounded), per-particle randomness and gusts, continuous motion. `assets/particles.js` is 225 lines (was 545). The public API (`setVolume`, `pulse`, `stats`), the volume hover (`data-field-focus`), the LIVE/STILL FIELD label and the clipped `.field-lights` container are unchanged.
- **Original icons restored** (theme ☼/◐, bookmark ☆/★, share ↗, print ▤, read ○/✓, close ×, search ⌕, arrows, audio ♫ and play ▶, export/import ↓/↑, saved ★). They are `aria-hidden`, and the accessibility fixes (names, `aria-pressed`) are kept. The theme label hides below 380 px so the header never overflows (checked at 320/360/375 px, both themes).
- Tests updated for the new engine and icons (67 checks).

## 2026-10-20 — Production-readiness pass (audit, audio, particle field, icons, accessibility)
Full reasoning, measurements and rollback notes: `docs/ENGINEERING_AUDIT.md` and `docs/IMPLEMENTATION_LOG.md`.

### YouTube / audio
- **Mobile playback fix.** The player is now created synchronously inside the tap with `allow="autoplay"` set at creation (previously created after the API loaded and started from `onReady`, outside the user gesture — blocked by iOS/Android). `onAutoplayBlocked` and a timeout show a "press play in the player" hint.
- New `assets/audio.js`; ~190 lines removed from `reader.js`. Resume position, next-chapter prompt, status line, graceful fallbacks (Error 153/101/150/100/2).
- No YouTube request until Play (no thumbnail, no API preload). Player is ≥ 200×200 and never covered (YouTube Required Minimum Functionality).
- Added `privacy.html` (YouTube API Services disclosure, Google Privacy Policy and YouTube ToS links).

### Particles / hero
- One fixed, non-interactive canvas replaces per-hero canvases; depth parallax; volumes ↔ eddies; quality governor; reduced-motion = static (see the rework notes below).
- Hero volume rows are now real links.

### Icons, accessibility, performance
- Removed all decorative glyph icons (☼ ◐ ★ ☆ ↗ ↘ ↑ ← → ⌕ ♫ ▶ ▤ ○ ✓ ×); text, state styling and an underline-draw hover replace them.
- axe-core: 6 → 0 violations. Label-in-name, focusable scroll regions, landmark names, heading levels, table headers, contrast.
- Touch targets ≥ 44 px on coarse pointers; labels ≥ 11 px; live regions no longer wrap result lists.
- Fonts self-hosted (no render-blocking cross-origin CSS). Search link kept in the header on phones; footer nav added.
- Reader: text size persists, resume-reading offer, reading time. Added `404.html`, Open Graph tags.
- Removed three empty placeholder files; archived duplicate logs to `docs/archive/`.

### Rework after review (replaces an earlier version of this pass)
The first version of this pass generated one static HTML page per chapter, kept the old wire-diagram particles and shipped regressions. All of that was reversed or fixed:
- **Per-chapter HTML pages removed.** Chapters are back to `read.html?chapter=…` with generated `chapters/*.content.js`. The build script is the original again.
- **Reader outline ("On this page") fixed.** My earlier touch-target rule let entries shrink inside the fixed-height column, so text overlapped (38 of 52 entries on one chapter). Entries are now one line, can't shrink, sub-headings open only for the current section (no inner scrollbar), the column no longer traps wheel/touch scrolling, and the phone bar is solid and compact.
- **New particle field** (replaces the connected-dots constellation): flowing currents with fading curved tails, three depth layers, three volume eddies with glowing cores, cursor wake, click ripple. ~300 lines shorter; engine JS ≈ 0.1–0.3 ms/frame.
- **Sideways panning made impossible:** the field's soft lights live in a clipped viewport-sized container.
- **Alignment:** hero and every section below it now start at the same left edge on all pages.
- **Light mode** now carries the field through the whole page at a calmer strength, with soft colour washes on the page background; on chapter pages the field lives in the margins and the reading column stays clean.
- New share image (`assets/og-image.png`) rendered from the new hero.
- Header is 96 % opaque so reading text can't ghost through; breadcrumb truncates with an ellipsis again; "Start path" is a proper button.
- Kept from the first pass: self-hosted fonts, compliant YouTube audio card, icon removal, accessibility fixes, search collapse of repeated Volume 1/2 chapters, audio positions in the export, tests in the repo.

## Earlier — refactor pass

## Bugs fixed
- **Particles ran ~2× faster on 120 Hz displays.** Motion was applied per frame; it is now time-based.
- **Particle density re-randomised on every resize** (e.g. a mobile URL bar showing/hiding), adding/removing nodes. Density is now deterministic per width.
- **Click-spawned particles accumulated until a hard cap, then clicks did nothing.** Oldest spawned nodes are now recycled.
- **Particle palette drifted from the design tokens** (`--a2-rgb`/`--a3-rgb` did not exist, so glows used hard-coded colours that differed from the dots). Tokens added; one source.
- **First-time visitors had "dark" written to storage as if chosen**, which would have defeated any system-preference fallback. Storage is now written only on an explicit toggle.
- **Practice timer drifted** in background tabs (counted `setInterval` ticks). Now follows a wall-clock deadline.
- **Reader scrolled with no `prefers-reduced-motion` check** in two places (mark-as-read, search jump).
- **"READ" threshold disagreed**: volume index used 90 %, reader and study desk 95 %. One shared constant.
- **`.guide-toc` (How to Read the Book) had no base styles** — unstyled links in dark mode. Styled for both themes.
- **Light-mode accent failed WCAG AA** (4.29:1 on page, 4.15:1 on tinted surfaces) for small mono text. `#007d68` → `#00725f` (≥ 4.67:1 everywhere used).
- **Light mode design defects**: cream "slab" with hard seams behind the tool launcher, book rows and study paths; a grey hard-offset shadow under the primary button; hero overlay colours that did not match `--bg`. Removed/unified.
- **`aria-live` on the whole chapter article** made screen readers try to announce a chapter on load. Removed.
- **Build output was non-deterministic** (set/hash ordering) — every rebuild rewrote ~1.4 MB of `search-index.js`. Now sorted; identical across hash seeds.
- **Stale progress cache after "Import learning data"** would have been possible once progress became cached; import now goes through the shared writer.

## Performance
- Reader: storage writes during a full-chapter scroll **1,670 → 97**; progress bar uses `transform`, DOM touched only when the value changes; scroll work is rAF-throttled.
- Notes: **17 writes per 17 keystrokes → 1** (debounced, flushed on blur/pagehide).
- Resource filters: group text and boundaries cached once (per-change **6.6 ms → 1.0 ms**); O(n²) grouping replaced with one pass.
- Search: debounced; 40 ms index-polling loop removed (scripts now deferred in order).
- Page background moved from `background-attachment: fixed` to a fixed pseudo-element layer.
- Particles: glow sprites are pre-rendered instead of creating ~60 gradients per frame; no layout read per pointer-move. *Measured JS time per frame was within noise in headless Chromium; the benefit is expected on raster/GPU and was not measurable here.*

## Smells removed
- `theme-color`/theme bootstrap duplicated inline in 7 pages → `assets/theme-init.js`.
- Search-highlight logic duplicated in `reader.js` and `resource.js` → `FieldSite.applySearchContext`.
- `F.all` (unused alias), `browser_resource_data` (unused), 21 dead CSS selectors (`about-*`, `method-*`, `diagram-*`, `ticker*`, `toplinks`, `scroll-cue`, `download-link`, …), the superseded first light-token block, 12 stacked "final polish" CSS override layers.
- Interview-metadata regex copied 3× in `build_site_data.py` → one constant + `parse_interview_meta()`.
- `home.js`, `book.js`, `app.js`, `particles.js` rewritten from single-line/minified style to readable code; inline `style=""` removed; magic numbers named.
- Bookmark/last-read URLs are validated as in-site before being placed in `href`.

## Design system
- Complete token set per theme: background (base/subtle), surface, border, text (primary/secondary/muted/inverse), accent + soft, success/warning/danger, scrim, shadows, hero atmosphere.
- One spacing scale, radii, motion durations/easing, z-index scale, breakpoints (1150 / 800 / 600 / 480 / 350).
- Shared hover / active / disabled / focus-visible states for all controls. Skip link added.
- Theme switch holds transitions off for two frames so every surface changes in one frame.
- Font fallbacks are metric-close (Arial-class) to limit layout shift before webfonts load.

## Behaviour changes to be aware of
1. **Theme default**: first-time visitors whose OS prefers light now see light. Previously always dark. To restore "always dark", delete the `matchMedia` branch in `assets/theme-init.js`.
2. Dark-mode body base colour is now `#080d14` (was an unrelated one-off `#070a10`); 1–2 px spacing values snapped to the scale.
3. All top bars share one height (reader was 66 px, others 74 px).
4. Text below 10 px (7–9 px labels) raised to 10 px.

## 2026-10-20 — Particle stability and opaque sticky surfaces

### Bugs fixed
- **Clicks reconstructed the full particle topology.** The existing graph is now preserved during clicks; each new burst node connects incrementally to nearby nodes, so established links do not flicker or reshuffle.
- **A click kicked unrelated ambient particles.** Removed the global shock-wave recoil that caused a sudden whole-field movement; the response is now local to the burst.
- **Pointer movement lagged behind the cursor.** Removed target interpolation and the delayed leave state. Pointer coordinates now update immediately and are measured against the hero/canvas bounds rather than `offsetX` from whichever event target received the pointer.
- **Pointer interaction stopped under hero copy.** Movement is observed at the hero container so the focus glow remains aligned while moving over headings and links; click-to-burst remains limited to the canvas.
- **Burst particles could accumulate indefinitely after their visual lifetime ended.** Expired animated burst nodes and their edges are now removed without rebuilding the remaining graph. The node cap still protects reduced-motion/static interactions.
- **Light-mode hero particles were muted by the hero veil.** The veil is now behind the canvas, with hero copy remaining above both.
- **Light-mode sticky resource search could read as transparent glass over content.** Added an opaque viewport-wide backing to the sticky toolbar and explicit opaque search/filter surfaces. The light-mode top bar and reader outline use solid surfaces as well.

### Performance and interaction
- Existing edge geometry and signal phases are keyed to stable node IDs, so incidental array-index shifts do not randomize edge styling.
- Pointer repulsion is lower and velocity-clamped to keep the field responsive without sharp node kicks.
- Burst particle count was narrowed slightly and their spread tightened to keep clicks responsive and visual density controlled.
- No dependencies, APIs, query parameters, storage keys, or source learning content were changed.

### Verification
- JavaScript syntax and Python compilation passed.
- Browser smoke tests ran using an isolated Chromium harness with project CSS/JavaScript/data inlined; light-mode resource toolbar rendered with opaque computed backgrounds, no horizontal overflow at 647 px, and no browser console/page errors.
- The production resource screenshot was positioned with a content heading behind the sticky toolbar; the toolbar remained visually opaque and the heading did not bleed through.
- A live GitHub Pages deployment check was not performed in this environment.
