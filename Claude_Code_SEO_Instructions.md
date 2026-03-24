# Claude Code SEO Implementation Instructions
## boynegeospatial.ie — Full SEO Audit Implementation

---

Please make the following SEO improvements to this website codebase. A full technical SEO audit has been completed and the changes below address all critical issues and warnings. Implement them in the order presented. Do not ask follow-up questions — all required values are provided below.

---

## STEP 1: Create Missing Root Files

### 1.1 Create `robots.txt`

Create a file at the site root (wherever your other root-level public files live, e.g. `public/robots.txt` or `static/robots.txt` depending on the framework) with exactly this content:

```
User-agent: *
Allow: /
Sitemap: https://www.boynegeospatial.ie/sitemap.xml
```

### 1.2 Create `sitemap.xml`

Create a file at `public/sitemap.xml` (or `static/sitemap.xml`) with the following content. Update the `<lastmod>` dates to the current date if you can determine it programmatically, otherwise use `2026-03-24`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.boynegeospatial.ie/</loc>
    <lastmod>2026-03-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.boynegeospatial.ie/services</loc>
    <lastmod>2026-03-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.boynegeospatial.ie/tools</loc>
    <lastmod>2026-03-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.boynegeospatial.ie/blog</loc>
    <lastmod>2026-03-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.boynegeospatial.ie/about</loc>
    <lastmod>2026-03-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.boynegeospatial.ie/contact</loc>
    <lastmod>2026-03-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

### 1.3 Create a Custom 404 Page

Create a branded 404 page that uses the site's existing header and footer components. The page should:
- Display a clear "Page Not Found" message
- Retain the full site header and footer (nav, branding)
- Include links back to the Homepage, Services, and Contact pages
- Use friendly copy such as: *"We couldn't find that page. You might be looking for one of these:"*

For Netlify deployments, ensure the file is named `404.html` in the publish directory (or the framework equivalent, e.g. a `404.js`/`404.tsx` route in Next.js, or `_404.html` in Svelte — use whatever convention this project uses).

---

## STEP 2: Add LocalBusiness Schema Markup to the Homepage

In the `<head>` of the homepage, add the following JSON-LD structured data block. If the site uses a shared layout/head component, add it there scoped only to the homepage (i.e. only render it on the `/` route):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Boyne Geospatial",
  "url": "https://www.boynegeospatial.ie",
  "logo": "https://www.boynegeospatial.ie/logo.png",
  "image": "https://www.boynegeospatial.ie/og-image.jpg",
  "description": "Professional GIS consultancy based in Navan, County Meath. Providing GIS mapping, spatial analysis, and drone survey services across Ireland.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Navan",
    "addressRegion": "County Meath",
    "addressCountry": "IE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.7,
    "longitude": -6.5
  },
  "email": "conor@boynegeospatial.ie",
  "areaServed": "Ireland",
  "serviceType": [
    "GIS Mapping",
    "Spatial Analysis",
    "Drone Survey",
    "Orthomosaic Production",
    "Cartographic Services"
  ],
  "sameAs": [
    "https://www.linkedin.com/company/boyne-geospatial"
  ]
}
</script>
```

---

## STEP 3: Update All Page Titles and Meta Descriptions

Update the `<title>` tag and `<meta name="description">` for every page as follows. These should be set in each page's head metadata — use whatever mechanism the framework provides (e.g. Next.js `Metadata` export, Svelte `<svelte:head>`, or equivalent).

Also add a `<link rel="canonical">` tag to every page pointing to its own canonical www URL (see canonical values below).

### Homepage (`/`)
- **Title:** `GIS Consultancy Ireland | Boyne Geospatial - Navan, Meath`
- **Meta description:** `Professional GIS consultancy based in Navan, Co. Meath. Precision mapping, spatial analysis, and drone survey services across Ireland. Get in touch today.`
- **Canonical:** `https://www.boynegeospatial.ie/`

### Services (`/services`)
- **Title:** `GIS Mapping, Spatial Analysis & Drone Survey Ireland | Boyne Geospatial`
- **Meta description:** `GIS mapping, spatial analysis, drone imagery, and orthomosaic production for government, environmental, and infrastructure clients across Ireland.`
- **Canonical:** `https://www.boynegeospatial.ie/services`

### About (`/about`)
- **Title:** `About Boyne Geospatial | GIS Consultant Navan, County Meath`
- **Meta description:** `Meet Conor Gleeson — GIS professional and founder of Boyne Geospatial, bringing international field experience to spatial projects across Ireland.`
- **Canonical:** `https://www.boynegeospatial.ie/about`

### Blog (`/blog`)
- **Title:** `GIS & Spatial Analysis Blog | Boyne Geospatial Ireland`
- **Meta description:** `Insights, guides, and analysis from Boyne Geospatial — covering GIS mapping, drone survey, spatial data, and the geospatial industry in Ireland.`
- **Canonical:** `https://www.boynegeospatial.ie/blog`

### Contact (`/contact`)
- **Title:** `Contact Boyne Geospatial | GIS Consultancy Ireland`
- **Meta description:** `Contact Boyne Geospatial for GIS mapping, spatial analysis, and drone survey enquiries. Based in Navan, Co. Meath. Response within one working day.`
- **Canonical:** `https://www.boynegeospatial.ie/contact`

### Tools (`/tools`)
- **Title:** `Free GIS Tools Online | GeoPackage Viewer & More | Boyne Geospatial`
- **Meta description:** `Free browser-based GIS tools for spatial professionals. Inspect GeoPackage files, view spatial data, and more — no software installation required.`
- **Canonical:** `https://www.boynegeospatial.ie/tools`

---

## STEP 4: Fix the HTML `lang` Attribute

Find the root `<html>` element in the layout or document template. Ensure it has `lang="en-IE"`:

```html
<html lang="en-IE">
```

If the site currently has `lang="en"` or no `lang` attribute at all, update it to `lang="en-IE"`.

---

## STEP 5: Fix Heading Structure

### 5.1 Homepage H1

Find the homepage hero section. The current H1 contains text like "Precision Mapping". Change the H1 text to:

```
GIS Consultancy Ireland — Precision Mapping & Spatial Analysis
```

If changing the visible headline would break the visual design, you can keep the existing decorative headline as a `<p>` or `<span>` and add the new H1 text visually hidden using a CSS class like `sr-only` (screen-reader only). For example:

```html
<h1 class="sr-only">GIS Consultancy Ireland — Precision Mapping & Spatial Analysis</h1>
```

Ensure the `sr-only` CSS class exists in the stylesheet (standard implementation: `position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;`).

### 5.2 Services Page H1

Find the H1 on the Services page. Change it from "GIS Services" to:

```
GIS Mapping, Spatial Analysis & Drone Survey Services Ireland
```

### 5.3 Contact Page H1

Find the H1 on the Contact page. Change it from "Contact Us" to:

```
Contact Boyne Geospatial | GIS Consultancy Ireland
```

### 5.4 About Page H1

The current H1 "About Boyne Geospatial" is acceptable but improve it to:

```
About Boyne Geospatial | GIS Consultants, Navan, Co. Meath
```

---

## STEP 6: Fix Footer NAP (Name, Address, Phone) Consistency

The footer currently shows an inconsistent address. Make the following changes to the footer component across all pages:

1. **Address:** Replace any instance of just "Ireland" as a standalone address with `Navan, Co. Meath, Ireland`. This should appear consistently on every page's footer.

2. **Phone number:** Add a phone number to the footer and to the Contact page. Use a placeholder if the real number isn't in the codebase — add it as `+353 [YOUR NUMBER]` with a TODO comment so it's easy to find and update:
   ```html
   <!-- TODO: Replace with real phone number -->
   <a href="tel:+353XXXXXXXXX">+353 XX XXX XXXX</a>
   ```

3. **Geographic coordinates display:** The footer currently shows `53.7°N 6.5°W` as a design element. Keep this if desired, but also ensure the full address `Navan, Co. Meath, Ireland` is present as visible text nearby for crawler readability.

---

## STEP 7: Update Image Alt Text on the Services Page

On the Services page, there is a drone image gallery/carousel containing approximately 15 images. Currently all have the generic alt text "Aerial drone photography". Replace each image's alt text with unique, descriptive alternatives. Use the following list — assign them in order across the images, or match them to image content where you can determine it from filename or context:

1. `"Aerial drone survey of farmland, Co. Meath, Ireland"`
2. `"Drone orthomosaic of construction site, Ireland"`
3. `"UAV aerial photography over Irish landscape"`
4. `"Drone survey of infrastructure project, Ireland"`
5. `"Aerial mapping of environmental survey area, Meath"`
6. `"Drone imagery of land development site, Ireland"`
7. `"Orthomosaic aerial photograph, rural Ireland"`
8. `"UAV survey flight over Irish heritage site"`
9. `"Drone aerial photography, County Meath"`
10. `"Aerial spatial data capture, Ireland"`
11. `"Drone survey output — high-resolution aerial image, Ireland"`
12. `"GIS drone mapping, Leinster, Ireland"`
13. `"Aerial survey image for environmental assessment, Ireland"`
14. `"UAV imagery for infrastructure planning, Ireland"`
15. `"Drone orthomosaic production, Boyne Geospatial, Ireland"`

---

## STEP 8: Homepage Hero Image Performance

Find the hero background image on the homepage (a large aerial photograph of a ringfort in Co. Meath). Make the following performance improvements:

1. **Add a `<link rel="preload">` hint** in the `<head>` of the homepage to preload the hero image. If it's a background image set via CSS, use:
   ```html
   <link rel="preload" as="image" href="/path/to/hero-image.webp">
   ```
   Replace the path with the actual image path used in the project.

2. **Check the image format.** If the hero image is a `.jpg` or `.png`, note it with a comment in the code:
   ```html
   <!-- TODO: Convert hero image to WebP format and compress to under 200KB for optimal LCP -->
   ```

3. **Lazy loading on Services gallery:** On the Services page, ensure all drone gallery images that are not immediately visible (i.e. not in the first slide/view) have `loading="lazy"` on their `<img>` tags.

---

## STEP 9: Add Descriptive Content to the Tools Page

On the Tools page (`/tools`), find the section that introduces the GeoPackage Viewer tool. Add the following descriptive paragraph immediately below or near the tool's heading/title, before or around the tool UI itself. Insert it as regular body paragraph text:

```
A GeoPackage (.gpkg) is an open, standards-based format for storing and transferring geospatial data — used by GIS professionals working with QGIS, ArcGIS, and field data collection tools. This browser-based GeoPackage Viewer lets you inspect the contents of any .gpkg file without installing any software. Simply upload your file to view layers, attributes, and geometry types instantly. Useful for quickly validating data before import, sharing files with non-GIS colleagues, or checking outputs on the go.
```

---

## STEP 10: Expand Services Page Content

On the Services page, find the three service sections. Each currently has a heading and bullet-point list of deliverables. Add a short introductory paragraph of body copy to each section, before the bullet list. Use the following text:

### Under "GIS Mapping & Map Production" heading:
```
Boyne Geospatial produces precision cartographic outputs for government bodies, environmental consultancies, infrastructure firms, and land developers across Ireland. From large-scale topographic maps to bespoke thematic outputs for planning submissions, all mapping work is produced to professional GIS standards and delivered in client-ready formats. Whether you need a one-off site plan or an ongoing mapping retainer, we tailor our service to your project requirements.
```

### Under "Spatial Analysis" heading:
```
Our spatial analysis service turns raw geographic data into actionable insight. We work with clients on habitat mapping, land suitability analysis, viewshed and visibility studies, catchment analysis, and site selection — including outputs for planning applications under the Planning & Development Act and National Planning Framework requirements. If your project requires quantitative spatial reasoning backed by robust GIS methodology, we can help.
```

### Under "Drone Imagery & Content" (or similar heading) section:
```
We provide professional UAV survey and aerial imaging services across Ireland. Our drone operations are fully compliant with Irish Aviation Authority regulations. Deliverables include high-resolution aerial photography, drone video, and photogrammetric outputs such as orthomosaics, digital elevation models (DEMs), and 3D point clouds. Drone survey is increasingly used for environmental impact assessment, construction progress monitoring, heritage documentation, and agricultural land analysis.
```

---

## STEP 11: Improve Internal Linking

Make the following targeted internal linking improvements:

1. **About page:** Add a contextual link to the Services page within the body copy. Find a sentence that references what Conor does professionally and add a link, e.g.: `"...providing <a href="/services">GIS mapping and spatial analysis services</a> across Ireland."` Use natural anchor text — do not add a standalone "click here" link.

2. **Services page:** Within the description text for each of the three service sections, add a contextual link to the Contact page. For example, at the end of each service description, add: `"<a href="/contact">Get in touch to discuss your project.</a>"`

3. **Homepage:** If there is a "Services" or "What We Do" section on the homepage that mentions specific service types, ensure each service type is linked to the relevant anchor or section on `/services`.

---

## STEP 12: Verify www Redirect and Canonical Setup

1. Check whether the project's Netlify configuration (`netlify.toml` if it exists) includes a redirect from the non-www to the www version. If not, add the following to `netlify.toml` (create the file at the project root if it doesn't exist):

```toml
[[redirects]]
  from = "https://boynegeospatial.ie/*"
  to = "https://www.boynegeospatial.ie/:splat"
  status = 301
  force = true
```

2. Also add a redirect from HTTP to HTTPS if not already handled:

```toml
[[redirects]]
  from = "http://boynegeospatial.ie/*"
  to = "https://www.boynegeospatial.ie/:splat"
  status = 301
  force = true

[[redirects]]
  from = "http://www.boynegeospatial.ie/*"
  to = "https://www.boynegeospatial.ie/:splat"
  status = 301
  force = true
```

---

## STEP 13: Add LinkedIn Link to Footer and About Page

The site currently has no link to a LinkedIn profile. Add a LinkedIn icon/link to:

1. The site footer (near the email address or social area if one exists)
2. The About page (near the contact details or at the end of the founder bio)

Use the following URL as a placeholder — it can be updated later if the exact profile URL is different:
```
https://www.linkedin.com/company/boyne-geospatial
```

Add with appropriate accessible text, e.g.:
```html
<a href="https://www.linkedin.com/company/boyne-geospatial" target="_blank" rel="noopener noreferrer" aria-label="Boyne Geospatial on LinkedIn">LinkedIn</a>
```

---

## SUMMARY OF FILES TO CREATE OR MODIFY

| Action | File |
|--------|------|
| Create | `public/robots.txt` |
| Create | `public/sitemap.xml` |
| Create | Custom 404 page (framework-appropriate location) |
| Modify | Homepage — `<head>`: title, meta description, canonical, JSON-LD schema, preload hint |
| Modify | Homepage — H1 text |
| Modify | Services page — `<head>`: title, meta description, canonical |
| Modify | Services page — H1 text, service section body copy, image alt texts |
| Modify | About page — `<head>`: title, meta description, canonical |
| Modify | About page — H1 text, LinkedIn link, internal link to Services |
| Modify | Blog page — `<head>`: title, meta description, canonical |
| Modify | Contact page — `<head>`: title, meta description, canonical |
| Modify | Contact page — H1 text, phone number |
| Modify | Tools page — `<head>`: title, meta description, canonical |
| Modify | Tools page — GeoPackage Viewer descriptive paragraph |
| Modify | Layout/footer component — address standardisation, phone number, LinkedIn link |
| Modify | Root `<html>` element — `lang="en-IE"` |
| Create/Modify | `netlify.toml` — www redirect and HTTPS redirect rules |

---

*Instructions derived from SEO audit of boynegeospatial.ie, March 2026.*
