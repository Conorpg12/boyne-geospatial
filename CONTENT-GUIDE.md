# Content guide

How to add things to boynegeospatial.ie. The site is plain HTML: edit a file, save, refresh the browser.

## Add a project

A project is one card on the Projects page. The project itself (web map, tool, dashboard) lives in its own GitHub repo with GitHub Pages turned on, the same way the GeoPackage Viewer does. The card embeds it.

1. Open `projects.html` and find `<div class="card-grid">`.
2. Paste this card inside it and edit the parts in capitals:

```html
<article class="card" data-tags="Map, Running">
  <div class="card-thumb">
    <img src="/images/web/PROJECT-NAME.jpg" width="1280" height="720" loading="lazy"
         alt="DESCRIBE WHAT THE IMAGE SHOWS">
  </div>
  <div class="card-body">
    <div class="tag-list">
      <span class="status">Live</span>
      <span class="tag">Map</span>
      <span class="tag">Running</span>
    </div>
    <h3>PROJECT TITLE</h3>
    <p>ONE OR TWO SENTENCES ABOUT IT.</p>
    <div class="card-actions">
      <button type="button" class="btn btn--primary btn--small" data-embed="https://conorpg12.github.io/REPO-NAME/">Launch</button>
      <a class="btn btn--small" href="https://conorpg12.github.io/REPO-NAME/" target="_blank" rel="noopener">Open in new tab</a>
    </div>
    <p>Data: &copy; OpenStreetMap contributors</p>
  </div>
</article>
```

Notes:

- **Tags:** list them in `data-tags`, separated by commas, and repeat each one as a `<span class="tag">`. The filter buttons at the top of the page are built from `data-tags` automatically.
- **Status:** use `Live` or `In progress`.
- **Thumbnail:** 16:9 (1280 x 720 works well), under 400 KB, saved in `images/web/`. [squoosh.app](https://squoosh.app) is a quick way to compress one.
- **Launch button:** `data-embed` is the address that opens in the panel on the page. For a project that isn't interactive, delete the Launch button and keep a single link.
- **Data credit:** list each source and its licence, for example `Tailte Éireann, CC BY 4.0`. Delete the line if the project uses no third-party data.
- **Logos:** never use third-party logos or crests (parkrun, GAA, race organisers and so on).

## Feature a project on the home page

Open `index.html`, find the "Featured Projects" section, and paste a copy of the card inside its `<div class="card-grid">`. Keep it to three cards. On the home page, swap the Launch button for a link to the Projects page:

```html
<a class="btn btn--primary btn--small" href="/projects">View in Projects</a>
```

## Keep a project as a draft

Wrap the card in comment markers so it isn't shown. There is one drafted this way in `projects.html` (the parkrun elevation project).

```html
<!-- DRAFT
<article class="card" ...>
  ...
</article>
-->
```

Remove the `<!-- DRAFT` and `-->` lines to publish it.

## Preview before publishing

Open the folder in VS Code and ask Claude to "start the preview", or run a local web server in the folder. Opening the `.html` files directly by double-clicking won't load the styles, because the pages use addresses that start at the site root (`/css/site.css`).

## Publish

Commit and push to the `master` branch. GitHub Pages updates the live site within a few minutes.

## Change the nav or footer

The nav and footer are repeated in every page (`index.html`, `projects.html`, `about.html`, `contact.html`, `404.html`, `services.html`, `tools.html`). A change has to be made in each file.

`services.html` and `tools.html` only exist to forward old links to Projects. Leave them in place.

## Blog and tutorials

The site doesn't have these yet. If you start writing regularly, that's the point to move to Jekyll, which turns Markdown files into pages and builds the listings for you.
