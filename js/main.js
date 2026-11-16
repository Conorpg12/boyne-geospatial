/* ============================================================
   Boyne Geospatial - main.js
   Vanilla JS only, no libraries
   ============================================================ */

// ── Theme toggle ──────────────────────────────────────────────
(function () {
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  const root = document.documentElement;

  function isDark() {
    const set = root.getAttribute('data-theme');
    if (set) return set === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function label() {
    btn.setAttribute('aria-label', isDark() ? 'Switch to light mode' : 'Switch to dark mode');
  }

  btn.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* not saved, still applied */ }
    label();
  });
  label();
}());

// ── Mobile nav ────────────────────────────────────────────────
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}());

// ── Projects: tag filter ──────────────────────────────────────
// Buttons are built from each card's data-tags, so adding a card is all that's needed.
(function () {
  const bar   = document.querySelector('.filter-bar');
  const cards = Array.from(document.querySelectorAll('.card[data-tags]'));
  if (!bar || !cards.length) return;

  const tagsOf = (card) => card.dataset.tags.split(',').map((t) => t.trim()).filter(Boolean);
  const tags = Array.from(new Set(cards.flatMap(tagsOf))).sort();
  if (tags.length < 2) return;   // nothing worth filtering yet

  function show(tag) {
    cards.forEach((card) => { card.hidden = tag !== 'All' && !tagsOf(card).includes(tag); });
    bar.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', b.textContent === tag));
  }

  ['All'].concat(tags).forEach((tag) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'filter-btn';
    b.textContent = tag;
    b.addEventListener('click', () => show(tag));
    bar.appendChild(b);
  });
  bar.hidden = false;
  show('All');
}());

// ── Projects: open an embedded project in the panel ───────────
(function () {
  const panel = document.getElementById('embed-panel');
  if (!panel) return;
  const frame = panel.querySelector('iframe');
  const title = panel.querySelector('.embed-title');

  document.querySelectorAll('[data-embed]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card');
      const name = card ? card.querySelector('h3').textContent : 'Project';
      frame.src = btn.dataset.embed;
      frame.title = name;
      title.textContent = name;
      panel.hidden = false;
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  panel.querySelector('.embed-close').addEventListener('click', () => {
    panel.hidden = true;
    frame.src = 'about:blank';
  });
}());

// ── Contact: copy email ───────────────────────────────────────
(function () {
  const btn = document.querySelector('[data-copy]');
  if (!btn) return;
  const status = document.querySelector('.copy-status');

  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      status.textContent = 'Copied';
    } catch (e) {
      status.textContent = 'Couldn\'t copy. Please select the address and copy it.';
    }
    setTimeout(() => { status.textContent = ''; }, 4000);
  });
}());

// ── 404: send old addresses to their new home ─────────────────
// GitHub Pages serves 404.html for any missing address, so retired pages
// (old service sub-pages, the old blog) are forwarded from here.
(function () {
  if (!document.body.hasAttribute('data-not-found')) return;
  const path = window.location.pathname.toLowerCase();
  if (/^\/(services|tools|blog)(\/|\.html|$)/.test(path)) {
    window.location.replace('/projects');
  }
}());
