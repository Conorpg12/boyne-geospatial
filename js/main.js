/* ============================================================
   Boyne Geospatial — main.js
   Vanilla JS only — no libraries
   ============================================================ */

// ── Scroll-triggered reveal ───────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
  revealObserver.observe(el);
});

// ── Nav: add .scrolled class on scroll ────────────────────────
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── Nav: active link highlight ────────────────────────────────
const navLinks = document.querySelectorAll('.nav-links a[href]');
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ── Mobile nav hamburger ──────────────────────────────────────
const hamburger = document.querySelector('.nav-hamburger');
const navLinksEl = document.querySelector('.nav-links');

if (hamburger && navLinksEl) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinksEl.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);

    // Animate the hamburger into an X
    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity  = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity  = '';
      spans[2].style.transform = '';
    }
  });

  // Close nav when a link is clicked
  navLinksEl.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinksEl.classList.remove('open');
      hamburger.querySelectorAll('span').forEach((s) => {
        s.style.transform = '';
        s.style.opacity   = '';
      });
    });
  });
}

// ── Tool embed launcher ───────────────────────────────────────
/**
 * Called by the "Launch Tool" button on tools.html.
 * @param {HTMLButtonElement} btn
 */
function launchTool(btn) {
  const card = btn.closest('.tool-card');
  const url  = card ? card.getAttribute('data-embed') : null;

  if (!url || url === 'YOUR_URL_HERE') {
    alert('This tool is coming soon — URL not yet configured.');
    return;
  }

  const container = document.getElementById('tool-embed-container');
  const iframe    = document.getElementById('tool-iframe');
  const titleEl   = document.getElementById('tool-embed-title');

  if (!container || !iframe) return;

  // Set the iframe src and show container
  iframe.src = url;
  if (titleEl) {
    titleEl.textContent = card.querySelector('h3')
      ? '▶  ' + card.querySelector('h3').textContent
      : '▶  Tool';
  }

  container.style.display = 'block';

  // Smooth scroll to embed
  setTimeout(() => {
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}

/**
 * Close the tool embed.
 */
function closeEmbed() {
  const container = document.getElementById('tool-embed-container');
  const iframe    = document.getElementById('tool-iframe');
  if (container) container.style.display = 'none';
  if (iframe)    iframe.src = '';
}

// Expose to global scope for onclick handlers
window.launchTool  = launchTool;
window.closeEmbed  = closeEmbed;
