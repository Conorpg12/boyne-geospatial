# Boyne Geospatial — Website Project

## About
Boyne Geospatial is a professional GIS consultancy based in Ireland. The website is a
visually striking, corporate site targeting clients in government, environmental,
infrastructure, and land development sectors.

## Project Stack
- **Pure HTML, CSS, and vanilla JavaScript only** — no frameworks, no build tools, no npm
- **No dependencies** except Google Fonts (loaded via `<link>` tag)
- **Deploy anywhere** — drag the folder to Netlify, GitHub Pages, or any web host
- Each page is a standalone `.html` file

## Project Structure
```
Website/
├── index.html          # Home page
├── services.html       # GIS services
├── tools.html          # Interactive tools showcase
├── about.html          # About the consultancy
├── contact.html        # Contact form
├── css/
│   ├── global.css      # CSS variables, reset, typography, shared styles
│   └── animations.css  # All keyframe animations and transitions
├── js/
│   └── main.js         # Scroll animations, nav behaviour, interactions
├── images/
│   ├── hero/           # Hero/banner images (landscape, min 1600px wide)
│   ├── about/          # Team and fieldwork photos
│   ├── fieldwork/      # Site photography
│   └── tools/          # Tool preview thumbnails
└── CLAUDE.md
```

## Brand & Design Guidelines

### Identity
- **Company name**: Boyne Geospatial
- **Tagline**: "Precision Mapping. Actionable Insight."
- **Tone**: Authoritative, precise, trusted — not flashy or consumer-facing

### Visual Direction
**Refined dark luxury** — deep navy backgrounds with teal and gold accents.
Think: a high-end cartography atlas meets a modern tech consultancy.
The site should feel like it was designed by someone who truly understands
both the precision of GIS and the craft of visual communication.

### Colour Palette (CSS variables)
```css
--color-bg:        #080E1A;   /* Near-black navy — primary background */
--color-surface:   #0F1E35;   /* Slightly lighter navy — cards, sections */
--color-border:    #1A3050;   /* Subtle borders */
--color-teal:      #1A8C7D;   /* Primary accent — CTAs, highlights */
--color-teal-light:#22B5A3;   /* Hover state for teal */
--color-gold:      #C9A84C;   /* Secondary accent — special callouts */
--color-text:      #E8EDF5;   /* Primary text */
--color-muted:     #7A8BA0;   /* Secondary/muted text */
--color-white:     #FFFFFF;
```

### Typography
```css
/* Load via Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400&display=swap');

--font-display: 'Cormorant Garamond', serif;   /* Hero headings — elegant, editorial */
--font-body:    'Outfit', sans-serif;           /* Body text — clean, modern */
--font-mono:    'JetBrains Mono', monospace;    /* Data, coordinates, code labels */
```

### Design Principles
- Dark backgrounds throughout — this is a **dark theme site**
- Hero sections use full-viewport height with animated elements
- Subtle animated SVG map grid or coordinate lines in hero backgrounds
- Smooth scroll-triggered fade-in animations for sections
- Teal glows on hover states (box-shadow with teal colour)
- Gold accents sparingly — used only for key callouts and special headings
- Thin 1px teal borders on cards instead of heavy shadows
- Navigation: fixed top bar, semi-transparent with backdrop-filter blur
- All pages share the same nav and footer via consistent HTML structure
- Mobile responsive using CSS Grid and Flexbox (no frameworks)

### Animation Style
- Page load: hero text fades up with staggered delays
- Scroll: sections fade in and slide up as they enter viewport (IntersectionObserver in main.js)
- Hover: smooth 0.3s transitions on all interactive elements
- No jarring or excessive animations — subtle and purposeful only

---

## Pages & Content

### Home (`index.html`)
- **Hero**: Full viewport, dark background with subtle animated SVG coordinate grid.
  Large display heading: "Precision Mapping." on one line, "Actionable Insight." on next.
  Subheading in muted text. Two CTAs: "Our Services" (teal filled) + "View Tools" (outlined)
- **Services strip**: 3 icon cards — GIS Mapping, Spatial Analysis, Map Production
- **About teaser**: Left image (fieldwork photo placeholder), right text block
- **Tools preview**: 2–3 tool cards linking to tools.html
- **CTA banner**: Full-width teal-tinted section — "Ready to start a project?"
- **Footer**: Logo, nav links, location (Ireland), email placeholder

### Services (`services.html`)
Core service: **GIS Mapping & Analysis**
- Topographic and thematic mapping
- Spatial data collection, processing, and analysis
- Custom map production (print and web)
- Site suitability and land-use analysis
- Infrastructure and utilities mapping

### Tools (`tools.html`)
Interactive GIS tools built in Claude.ai, embedded for public use.

**Layout:**
- Intro paragraph: "Free tools built for spatial professionals"
- Masonry-style grid of tool cards
- Each card: title, description, tags, "Launch Tool" button
- Clicking "Launch Tool" expands an iframe embed below (or opens in lightbox)
- Tools added by copy-pasting a new card block in the HTML

**Tool card HTML pattern:**
```html
<div class="tool-card" data-embed="CLAUDE_ARTIFACT_URL">
  <div class="tool-thumb">
    <img src="images/tools/tool-name.png" alt="Tool preview">
  </div>
  <div class="tool-info">
    <span class="tool-tag">GIS</span>
    <h3>Tool Name</h3>
    <p>Short description of what this tool does.</p>
    <button class="btn-launch" onclick="launchTool(this)">Launch Tool</button>
  </div>
</div>
```

**Iframe embed:**
```html
<div class="tool-embed-container" style="display:none">
  <iframe src="" allow="fullscreen" style="width:100%; min-height:650px; border:none;"></iframe>
</div>
```

### About (`about.html`)
- Hero: title + tagline
- Consultancy overview — based in Ireland, national and international work
- **Photo gallery**: CSS Grid gallery of fieldwork/project images
  - Use `<img src="images/fieldwork/photo.jpg" alt="descriptive text">`
  - Grid layout: 3 columns desktop, 2 tablet, 1 mobile

### Contact (`contact.html`)
- Simple form: Name, Email, Organisation, Message, Send button
- Wire to Formspree: `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
- Sign up free at formspree.io to get your form ID
- Include: email address placeholder, Ireland location

---

## Photos & Media

### Adding Photos
Drop photos directly into the relevant folder under `images/`:
```
images/hero/          landscape photos, min 1600x900px
images/fieldwork/     site and project photos for About gallery
images/tools/         16:9 screenshot thumbnails for tool cards
```

### In HTML
```html
<img src="images/fieldwork/survey-boyne-01.jpg"
     alt="GIS field survey along the River Boyne corridor"
     loading="lazy">
```

- Always write descriptive alt text
- Add loading="lazy" on all images below the fold
- Optimise photos before adding — target under 400KB (use squoosh.app)
- Preferred formats: .jpg for photos, .png for maps/screenshots, .svg for icons

---

## Development Notes for Claude
- No npm, no build step, no frameworks — open index.html in a browser and it works
- All shared styles go in css/global.css using CSS custom properties
- JavaScript in js/main.js — use vanilla JS only, no jQuery or libraries
- Use IntersectionObserver for scroll animations (no libraries needed)
- Keep each HTML file self-contained with <link> to shared CSS files
- Forms use Formspree — no backend needed
- Never use inline styles — CSS classes only
- Test in browser by simply opening the HTML file (File > Open in browser)

## Deployment (when ready)
- Zip the entire Website folder
- Go to netlify.com and drag the zip onto the deploy area
- Site is live instantly with a free Netlify URL
- Can connect a custom domain (boynegeospatial.ie) later in Netlify settings
