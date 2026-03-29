/* ============================================================
   Boyne Geospatial - main.js
   Vanilla JS only - no libraries
   ============================================================ */

/* -- Hero background alternator ---------------------------- */
(function () {
  const bgs = document.querySelectorAll('.hero-bg');
  if (bgs.length < 2) {
    if (bgs.length === 1) bgs[0].classList.add('active');
    return;
  }
  let current = 0;
  bgs[0].classList.add('active');
  setInterval(() => {
    bgs[current].classList.remove('active');
    current = (current + 1) % bgs.length;
    bgs[current].classList.add('active');
  }, 6000);
}());

// -- Scroll-triggered reveal -----------------------------------
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

// -- Nav: add .scrolled class on scroll ------------------------
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// -- Nav: active link highlight --------------------------------
const navLinks = document.querySelectorAll('.nav-links a[href]');
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// -- Mobile nav hamburger --------------------------------------
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

// -- Tool embed launcher ---------------------------------------
/**
 * Called by the "Launch Tool" button on tools.html.
 * @param {HTMLButtonElement} btn
 */
function launchTool(btn) {
  const card = btn.closest('.tool-card');
  const url  = card ? card.getAttribute('data-embed') : null;

  if (!url || url === 'YOUR_URL_HERE') {
    alert('This tool is coming soon - URL not yet configured.');
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

// -- Nav dropdown: click/tap toggle for mobile -----------------
document.querySelectorAll('.nav-dropdown > a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var li = this.parentElement;
    if (window.innerWidth < 900) {
      e.preventDefault();
      li.classList.toggle('dropdown-open');
      document.querySelectorAll('.nav-dropdown').forEach(function(other) {
        if (other !== li) other.classList.remove('dropdown-open');
      });
    }
  });
});

document.addEventListener('click', function(e) {
  if (!e.target.closest('.nav-dropdown')) {
    document.querySelectorAll('.nav-dropdown').forEach(function(li) {
      li.classList.remove('dropdown-open');
    });
  }
});

/* -- Field Slideshow ---------------------------------------- */
(function () {
  const slideshow = document.querySelector('.field-slideshow');
  if (!slideshow) return;

  const slides   = Array.from(slideshow.querySelectorAll('.slide'));
  const dotsWrap = slideshow.querySelector('.slideshow-dots');
  let current    = 0;
  let timer;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function goTo(index) {
    slides[current].classList.remove('active');
    dotsWrap.children[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsWrap.children[current].classList.add('active');
  }

  function next() { goTo(current + 1); }

  function start() { timer = setInterval(next, 4000); }
  function stop()  { clearInterval(timer); }

  // Pause on hover
  slideshow.addEventListener('mouseenter', stop);
  slideshow.addEventListener('mouseleave', start);

  // Swipe support for mobile
  let touchStartX = 0;
  slideshow.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
    stop();
  }, { passive: true });
  slideshow.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    start();
  }, { passive: true });

  start();
}());
