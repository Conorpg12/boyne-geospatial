# Boyne Geospatial — Website Project

## About
Boyne Geospatial is a professional GIS consultancy based in Ireland. The website is a clean,
corporate multi-page site targeting potential clients in government, environmental, infrastructure,
and land development sectors.

## Project Stack
- **Framework**: Next.js (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (or static export)
- **No CMS** initially — content is hardcoded in components

## Project Structure
```
boyne-geospatial/
├── app/
│   ├── layout.tsx          # Root layout with nav + footer
│   ├── page.tsx            # Home / landing page
│   ├── services/page.tsx   # GIS services detail page
│   ├── about/page.tsx      # About the consultancy
│   └── contact/page.tsx    # Contact form
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   └── ...
├── public/
│   └── images/
└── CLAUDE.md
```

## Brand & Design Guidelines

### Identity
- **Company name**: Boyne Geospatial
- **Tagline**: "Precision Mapping. Actionable Insight."
- **Tone**: Authoritative, precise, trusted — not flashy or consumer-facing

### Colour Palette
- Primary: Deep navy `#0F2240`
- Accent: Teal `#1A8C7D`
- Light background: `#F5F7FA`
- Text: `#1A1A2E`
- Muted text: `#6B7280`

### Typography
- Headings: `DM Serif Display` (Google Fonts) — gives gravitas without being stiff
- Body: `DM Sans` — clean, readable, pairs well
- Code/data callouts: `JetBrains Mono`

### Design Principles
- Clean, structured layouts with generous whitespace
- No stock-photo clutter — prefer subtle map/grid SVG backgrounds and icon-based visuals
- Section dividers using subtle gradients or thin lines, not heavy borders
- Consistent 8px spacing grid
- Fully responsive (mobile-first)

## Pages & Content

### Home (`/`)
- Hero: headline, tagline, CTA button ("View Our Services")
- Services overview: 3–4 icon cards summarising offerings
- Brief "Why Boyne Geospatial" trust section (experience, precision, local knowledge)
- CTA strip: "Ready to start a project? Get in touch."

### Services (`/services`)
Core service: **GIS Mapping & Analysis**
- Topographic and thematic mapping
- Spatial data collection, processing, and analysis
- Custom map production (print and web)
- Site suitability and land-use analysis
- Infrastructure and utilities mapping

### Tools (`/tools`)
A showcase page for interactive GIS tools built in Claude.ai and embedded for public use.

**Layout:**
- Intro paragraph explaining the tools are free to use
- Grid of tool cards, each with: title, short description, tags (e.g. "GIS", "Analysis"), and an "Open Tool" button
- Tools open in an `<iframe>` embed below the card (or in a modal/drawer)
- New tools are added by updating the `toolsData` array in `app/tools/page.tsx`

**Tool card data shape:**
```ts
type Tool = {
  id: string
  title: string
  description: string
  tags: string[]
  embedUrl: string       // Claude artifact share URL or hosted iframe src
  thumbnail?: string     // Optional preview image from /public/images/tools/
}
```

**Iframe embed notes:**
- Use `allow="fullscreen"` on iframes for tool embeds
- Set a min-height of 600px on the iframe container
- Wrap in a responsive container that collapses on mobile to a link instead of embed

### About (`/about`)
- Consultancy overview
- Based in Ireland, working nationally and internationally
- Professional, experienced team (keep generic until real bios are provided)
- **Photo gallery section** — showcases fieldwork and project imagery

### Contact (`/contact`)
- Simple contact form: Name, Email, Organisation, Message
- No backend yet — form can be wired to Formspree or similar
- Include phone/email placeholder and Ireland location

---

## Photos & Media

### Adding Your Own Photos
Place photos in `/public/images/` using this structure:
```
public/
└── images/
    ├── hero/         # Hero/banner images (landscape, min 1600px wide)
    ├── about/        # Team and office photos
    ├── fieldwork/    # Site photos for About or Gallery
    └── tools/        # Tool preview thumbnails (16:9 ratio recommended)
```

### Usage in Next.js
Always use `next/image` for photos — it handles optimisation, lazy loading, and responsive sizing automatically:

```tsx
import Image from 'next/image'

<Image
  src="/images/fieldwork/site-survey-01.jpg"
  alt="GIS field survey on the River Boyne corridor"
  width={1200}
  height={800}
  className="rounded-lg object-cover"
/>
```

### Photo Guidelines
- Preferred formats: `.jpg` for photos, `.png` for screenshots/maps, `.svg` for icons
- Always write descriptive `alt` text — important for accessibility and SEO
- Optimise photos before adding: target under 500KB per image (use Squoosh or similar)
- Hero images: landscape orientation, at least 1600 × 900px
- Don't commit photos over 2MB to git — use Git LFS or a CDN if needed

## Development Conventions
- All components use TypeScript with explicit prop types
- Use `clsx` for conditional class names
- Images use `next/image` with proper alt text
- No inline styles — Tailwind only
- Run `npm run lint` before committing
- Run `npm run build` to verify no type errors before pushing

## Commands
```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build
npm run lint      # ESLint check
npm run typecheck # tsc --noEmit
```

## Out of Scope (for now)
- CMS integration
- Blog / news section
- Client portal or login
- Ecommerce

## Notes for Claude
- Keep copy professional and concise — avoid filler phrases
- When generating map/GIS visuals, use SVG-based illustrations or CSS effects, not AI images
- Prefer server components unless interactivity requires a client component
- Always add `aria-label` attributes to icon-only buttons
- The contact form should validate client-side before submission
