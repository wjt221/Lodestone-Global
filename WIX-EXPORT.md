# Getting this onto lodestoneglobal.com / e3scale.com (currently on Wix)

Wix cannot run this codebase directly — it's a Next.js/React app, and Wix only
accepts static HTML/CSS/JS snippets or its own visual-editor components. There
are three realistic paths, in order of fidelity:

## Option A — Replace Wix entirely (recommended)

Point the domain at this site instead of Wix. This is the only option that
keeps everything working exactly as built: the accordion-free ecosystem grid,
the four infographics, responsive behavior, and accessibility all ship as-is.

Steps: deploy this repo to Vercel (already done for preview — see the deployed
URL), then repoint your domain's DNS from Wix to Vercel. Wix has an "Export"
or "disconnect domain" flow under Domains settings; Vercel's project settings
show the exact DNS records to add. Typically a 15–30 minute change plus DNS
propagation.

## Option B — Embed via iframe inside Wix

Keep Wix as the shell, embed specific pages of this site using Wix's HTML
iframe / embed widget, pointed at the Vercel URL (e.g.
`https://lodestone-global.vercel.app/ecosystem`). Fast to set up, but:
- Wix's embed widget sandboxes the iframe, so scroll-linked anchors (`#govern`,
  `#scale`, etc.) may not resize correctly inside Wix's fixed-height frame.
- SEO suffers — Wix's crawler sees an empty iframe shell, not the content.
- Only use this as a stopgap for a single page (e.g. just the Ecosystem
  infographic) while a full migration is scheduled.

## Option C — Rebuild flattened sections natively in Wix Studio

For teams committed to staying on Wix: use the exported PNGs in
`public-exports/` (delivered separately) as static images for the four
infographics, and manually rebuild the surrounding page sections (hero, trust
strip, capability cards, etc.) using Wix Studio's own layout tools, matching
the type scale and colors below.

This is the most labor-intensive option and loses all interactivity
(hover/keyboard states, accessible semantics) — the infographics become flat
images. Only recommended if Option A is off the table for organizational
reasons.

### Design tokens for a manual Wix rebuild

- Colors: navy `#101E2E`, ivory `#F5F1E8`, parchment `#EDE7D8`, stone
  `#AEA694`, brass `#9C7A42`, moss `#4B5D45`, plum `#5B4A5C`, charcoal
  `#242320`.
- Display font: Newsreader (serif, weights 400/500/600, use italic for pull
  quotes). Body font: Public Sans (weights 400/500/600).
- Section vertical padding: 96–128px desktop, 64px mobile.
- Container max-width: 1360px.
- Buttons: bordered rectangles (not pills), 1px border, uppercase 12–13px
  label, no drop shadow, no gradient.

## What's in `public-exports/`

Four PNGs at 2x resolution, transparent-free (flattened on ivory
`#F5F1E8` background), sized for direct placement as images:
- `lodestone-philosophy.png` — The Lodestone Philosophy
- `lodestone-ecosystem.png` — The Lodestone Ecosystem
- `lodestone-journey.png` — The Principal Journey
- `lodestone-flywheel.png` — The Lodestone Flywheel

These were rendered from the live components, so if copy or capability lists
change, regenerate them from the source rather than editing the PNGs by hand.
