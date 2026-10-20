# Changelog — refactor pass

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
