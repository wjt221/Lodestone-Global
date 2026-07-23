# Changes

Summary of the redesign that turned the preview into a credible, restrained,
multi-page site for an established advisory, investment, operating-partner, and
family-office platform. The strongest part of the existing concept — the
Govern, Scale, Compound, Steward framework — is preserved as a homepage and
About storytelling device, no longer the sole navigation model.

## Major design changes

- **Conventional site architecture.** Replaced the framework-only navigation
  (Govern / Scale / Compound / Steward / Ecosystem) with a standard primary nav:
  About, Governance Advisory, E3 Scale Network, Lodestone Capital, Family
  Advisors, Insights, Contact. Added an accessible mobile menu.
- **One consistent primary CTA:** "Start a Conversation" (to `/contact`), with
  the secondary "Explore the Lodestone Ecosystem." Removed the older
  "Schedule a Conversation" / `mailto:` CTAs from primary surfaces.
- **Quiet, confident hero.** Single static headline, no rotating or animated
  text. A solid navy base is always painted behind hero/closing imagery so the
  sections stay legible before or without the photo.
- **Editorial layout system.** Left-aligned type, a wide controlled grid, thin
  rules and index numbers instead of decorative cards. Sections vary in
  structure (asymmetric 5/7 and 4/8 grids, list rows) rather than repeating an
  identical card grid. Removed the SVG "flywheel," "journey," and per-stage icon
  glyph infographics in favor of restrained typographic sections.
- **Removed AI-landing-page patterns:** no glassmorphism, glowing effects,
  floating orbs, animated counters, gradient washes, or pill labels. Motion is
  limited to fast, subtle transitions; reduced-motion is respected.

## Content added / migrated from the existing site

See `SOURCE_MAP.md` for per-item provenance. In summary:

- Positioning as a private-company governance practice operating since 2013.
- Governance services: board formation, optimization, director/executive
  search, board compensation benchmarking, facilitation, and education.
- The proprietary private-company board compensation research and the Qualified
  Director Database, surfaced on the Insights page with links to the live pages.
- E3 Scale Network described as an operating-partner network (Envision, Execute,
  Expand) with senior Operating Partners — explicitly not coaches.
- Lodestone Capital as a principal-led investment platform; Lodestone Family
  Advisors as an independent multi-family-office platform.
- Sectors served, in place of a fabricated client-logo wall.
- Real leadership (William Tenenbaum, Marissa Levin) with restrained bios.

All unverified statistics, performance figures, awards, and named client
outcomes were omitted (see `CONTENT_NEEDED.md`).

## Components created

- `lib/content.ts` — single labeled content-data file (businesses, nav,
  capabilities, proof points, who-we-serve, how-we-work, engagements, insights,
  leadership, sectors, contact) with factual-integrity notes.
- `lib/site.ts` — canonical origin and site name.
- `components/Header.tsx` — rebuilt as a client component with a keyboard- and
  Escape-accessible mobile menu.
- `components/Footer.tsx` — rebuilt: brand + contact, ecosystem, company links,
  privacy, disclaimers, copyright, Morristown NJ.
- `components/EcosystemList.tsx` — the four businesses as an editorial list.
- `components/BusinessPage.tsx` — shared template for the four business pages.
- `components/InsightCards.tsx` — category / title / date / summary / CTA cards.
- `components/Leadership.tsx` — real bios with a monogram fallback (never a
  broken image or staged stock photo).
- `components/ContactForm.tsx` — validated form with honeypot spam protection
  and clear success/error states.
- `components/CTASection.tsx` — reworked to the single primary CTA.

## Components removed

- `components/infographics/*` (EcosystemDiagram, FlywheelDiagram, JourneyDiagram)
- `components/TwoEntryPoints`, `PrincipalJourney`, `CapabilityGroups`,
  `EvidenceSection` (held unverified case-study specifics), `WhyLodestone`,
  `TeamPreview` (placeholder-leaning), `StageIcon`, `EditorialImage`, `Divider`
- Data modules `stages.ts`, `ecosystemContent.ts`, `entityLogos.ts`
  (superseded by `lib/content.ts`)

## Routes added / changed

- Added: `/about`, `/governance-advisory`, `/e3-scale-network`,
  `/lodestone-capital`, `/family-advisors`, `/insights`, `/contact`, `/privacy`.
- Rebuilt: `/` (homepage) to the full section structure.
- Removed `/ecosystem` and `/ecosystem/[stage]`, with permanent redirects to the
  new named pages (`next.config.js`).

## Accessibility improvements

- Skip-to-content link; single `<main id="main">` per page.
- Semantic landmarks (`header`, `nav` with labels, `main`, `footer`, `address`).
- Visible `:focus-visible` outlines site-wide; focus rings on form fields.
- Mobile menu toggles `aria-expanded`/`aria-controls`, closes on Escape.
- Sensible heading hierarchy (one `h1` per page).
- Form: associated labels, `aria-invalid`/`aria-describedby`, inline errors,
  status/alert regions.
- `prefers-reduced-motion` disables transitions and smooth scroll.
- Meaningful alt text on imagery; decorative layers are `aria-hidden`.

## SEO improvements

- `metadataBase`, per-page titles/descriptions, a title template, and canonical
  URLs.
- Open Graph and Twitter card defaults.
- `app/sitemap.ts` and `app/robots.ts` (generated `/sitemap.xml`, `/robots.txt`).
- Organization JSON-LD on the homepage.
- Keyword-aware but non-stuffed copy per the brief's target terms.

## Verification

- `npm run build` passes (type-check + lint validity); all pages prerender
  static; `/sitemap.xml` and `/robots.txt` generate.
- All routes return 200; old `/ecosystem*` URLs 308-redirect.
- No horizontal overflow at 1440 / 768 / 390 px across every page.
- No "Coming soon," placeholder, lorem, or banned AI phrases in output.
- "Lodestone Global" and the `lodestoneglobal.com` domain spelled correctly
  throughout.

## Remaining content dependencies

See `CONTENT_NEEDED.md`. Chief items: full team roster + headshots, confirmed
statistics and case studies, approved client logos, contact-form destination,
legal entity names and RIA/investment disclosures, and licensed photography.
