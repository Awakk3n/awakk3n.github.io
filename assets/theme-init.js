/* THE PRODUCT FIELD — pre-paint theme resolution.
   Loaded synchronously in <head> (after the theme-color meta) so the first paint
   already uses the right theme. Order of precedence:
   1. the reader's saved choice  2. the OS colour-scheme preference  3. dark. */
(function () {
  'use strict';

  var STORAGE_KEY = 'field-theme';
  var THEME_COLORS = { dark: '#080d14', light: '#eeece3' };

  var theme = 'dark';
  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      theme = saved;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      theme = 'light';
    }
  } catch (error) { /* storage blocked: fall through to the default */ }

  var root = document.documentElement;
  root.dataset.theme = theme;

  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', THEME_COLORS[theme]);

  // app.js reuses these so the two scripts can never drift apart.
  window.FIELD_THEME = { storageKey: STORAGE_KEY, colors: THEME_COLORS };
})();
