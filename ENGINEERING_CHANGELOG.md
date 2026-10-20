# Engineering Changelog

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
- Browser smoke tests ran using an isolated Chromium harness with project CSS/JavaScript/data inlined; light-mode resource toolbar rendered with opaque computed backgrounds, no horizontal overflow at 390 px, 647 px, 1280 px, and 1920 px, and no browser console/page errors.
- The resource screenshot positioned a content heading behind the sticky toolbar; the toolbar remained visually opaque and the heading did not bleed through.
- Particle interaction test confirmed one initial topology build remains at one after a click, burst nodes connect incrementally, and nodes are removed after their lifetime. Reduced-motion keyboard activation adds a static burst without starting an animation loop.
- Home page checks passed in desktop and mobile viewports in both themes.
- A live GitHub Pages deployment check was not performed in this environment.
