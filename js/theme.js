/* Applies a saved light/dark choice before the page paints (loaded in <head>).
   With no saved choice the site follows the visitor's system setting. */
(function () {
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  } catch (e) { /* storage unavailable: follow the system setting */ }
}());
