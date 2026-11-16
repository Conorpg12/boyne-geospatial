# Boyne Geospatial - Website Project

## About
boynegeospatial.ie is Conor Gleeson's GIS portfolio: a place to publish his own projects,
web maps and small browser-based tools. It is based in Navan, Co. Meath.

### What the site must not do - IMPORTANT
- It is a portfolio, not a business site. Never advertise services, consultancy, pricing,
  "hire me" or "work with me". A low-key "Get in touch" is fine.
- Never list employer projects or employer data, and never name an employer.
- Never use third-party logos or crests (parkrun, GAA, race organisers, etc.).
- Never add analytics, tracking or cookies without asking Conor first.
- No phone number anywhere on the site.
- Conor's name appears on the About page only, not on the home page.

## Stack
- **Plain HTML, CSS and vanilla JavaScript.** No frameworks, no build step, no npm.
- Hosted on GitHub Pages from the `master` branch of `Conorpg12/boyne-geospatial`.
  Pushing to `master` publishes the live site.
- Custom domain www.boynegeospatial.ie. Never edit, rename or delete the `CNAME` file.
- Only outside dependency is Google Fonts.
- If Conor starts publishing blog posts or tutorials regularly, the plan is to move to
  Jekyll then. Don't introduce it before he asks.

## Structure
```
index.html        Home: positioning line, featured projects, short about
projects.html     Project cards, tag filter, embedded project panel
about.html        Bio, skills, tools
contact.html      Email shown as text with a copy button. No form.
404.html          Also forwards old /services/..., /tools... and /blog addresses to /projects
services.html     Redirect stub to /projects (old page removed)
tools.html        Redirect stub to /projects (tools now live on Projects)
css/site.css      The only stylesheet. Light and dark themes via CSS variables.
js/theme.js       Applies a saved light/dark choice before paint (loaded in <head>)
js/main.js        Theme toggle, mobile nav, tag filter, embed panel, copy email, 404 forwards
images/           Original photos (large, not referenced by pages - keep them)
images/web/       Compressed copies that pages actually use (under 400 KB each)
logo.png          Logo for light backgrounds
logo-dark.png     Logo with light lettering, for dark backgrounds
sitemap.xml       Hand-maintained: update when a page is added or removed
CONTENT-GUIDE.md  How Conor adds a project
```

## How projects work
Each project (web map, tool, dashboard) lives in its own GitHub repo with its own GitHub
Pages address, e.g. `https://conorpg12.github.io/GeopackageViewer/`. The site embeds it:
a card on `projects.html` has a Launch button with `data-embed="URL"`, which opens the
project in the iframe panel on the same page. Adding a project means adding a card.
See `CONTENT-GUIDE.md` for the card template.

## Conventions
- Internal links are root-relative clean URLs: `/projects`, `/about`, `/css/site.css`.
- The nav and footer are repeated in every HTML file. Keep them identical across pages.
- No inline styles. All styling goes in `css/site.css` using the CSS variables at the top.
- Every colour must work in both themes: use the variables, never hard-coded colours.
- Write in first person singular ("I"), in plain language.
- Every page needs a unique `<title>`, meta description, canonical link and Open Graph tags.
- Images: descriptive alt text, `width` and `height` attributes, `loading="lazy"` below
  the fold, and a compressed copy in `images/web/`.
- Keep it accessible: visible focus states, semantic headings, good contrast in both themes.

## Brand
- Name: Boyne Geospatial
- Fonts: Cormorant Garamond (headings), Outfit (body), JetBrains Mono (labels, coordinates)
- Colours: teal and gold accents. Dark theme is deep navy; light theme is warm off-white.
  The exact values are the variables at the top of `css/site.css`.
- Feel: a clean, modern map-maker's portfolio. Strong typography, whitespace, a faint map
  grid behind page headers.

## Working rules
- Work on a branch. Don't push to `master` or merge without Conor's approval.
- Preview locally with a small web server that maps `/projects` to `projects.html`
  (opening the files directly won't load root-relative CSS).
