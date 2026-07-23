# Build Scope: Wix → Vercel custom site

Working backlog for completing the custom Next.js site (this repo, on Vercel) so
it fully replaces Wix. Items are grouped into epics and ordered roughly by
dependency. We knock them off one at a time; each has an acceptance check and a
note on whether it needs input or credentials from Lodestone.

Legend: [ ] todo · [~] in progress · [x] done · 🔑 needs a secret/credential ·
✉️ needs content/decision from Lodestone

---

## Epic A — Content foundation
- [ ] **A1. Pull existing Wix content** (blog posts, store products, media) via
  the connector; produce an inventory to migrate from. _Accept:_ a list of every
  post/product/asset with fields captured.
- [ ] **A2. Insights as real on-site articles** — `/insights/[slug]` pages from
  MDX/in-repo content, with dates and summaries. _Accept:_ each insight opens a
  real page, not an external link. ✉️ (final article text/approval)
- [ ] **A3. Migrate blog posts** from Wix into the article system. ✉️
- [ ] **A4. Resolve `CONTENT_NEEDED.md`** — real bios, headshots, client logos,
  legal entity names, disclosures. ✉️

## Epic B — SEO / LLM depth
- [ ] **B1. Expand structured data** — add `BreadcrumbList`, `Person`
  (leadership), `Article`/`BlogPosting` (insights), and `Dataset`/`Report` (the
  survey), plus `FAQPage` on high-intent pages. _Accept:_ valid in Rich Results
  Test.
- [x] **B2. AI-crawler policy + llms.txt** — allow reputable AI crawlers, protect
  reports (`/downloads/`, `*.pdf`). _Done._
- [ ] **B3. Redirect map** old Wix URLs → new URLs in `next.config.js`.
  _Accept:_ every known old URL 301s to a live page. (depends on A1 inventory)
- [ ] **B4. Dynamic OG images** per page via `next/og`. _Accept:_ each page has a
  branded share image.
- [ ] **B5. `llms-full.txt` + markdown page versions** for clean LLM ingestion.

## Epic C — Reports commerce + gated downloads
- [ ] **C1. Research page** — `/research` listing purchasable reports with free
  public HTML summaries (visibility) and a gated full PDF. ✉️ (report list/prices)
- [ ] **C2. Stripe Checkout** for report purchase. 🔑 (Stripe keys via env)
- [ ] **C3. Gated download delivery** under `/downloads` with tokenized access
  after purchase (Vercel Blob / Cloudflare R2). 🔑
- [ ] **C4. Fulfillment** — Stripe webhook → email the download link (Resend). 🔑

## Epic D — Forms & email
- [ ] **D1. Wire the contact form** to a real endpoint (serverless route +
  Resend), replacing the mailto fallback. 🔑 (Resend key, destination inbox)
- [ ] **D2. Turnstile** spam protection on the form. 🔑 (Cloudflare Turnstile keys)
- [ ] **D3. Newsletter capture** → HubSpot/Beehiiv (optional). 🔑

## Epic E — Analytics & ops
- [ ] **E1. Analytics** — Plausible or GA4 + Vercel Web Analytics. 🔑
- [ ] **E2. Search Console + Bing** verification and sitemap submission. ✉️

## Epic F — Cutover
- [ ] **F1. Preview on subdomain** (`new.lodestoneglobal.com`) via Vercel. ✉️ (DNS)
- [ ] **F2. DNS cutover** — point web records to Vercel; leave Google Workspace
  MX/SPF/DKIM/DMARC untouched. ✉️
- [ ] **F3. Monitor** GSC coverage, redirects, Core Web Vitals for 2–4 weeks.
- [ ] **F4. Decommission Wix** once stable (export first, don't delete early).

---

## Suggested order of execution
A1 → B1 → A2 → B3 → C1 → D1 → C2/C3/C4 → E1/E2 → B4/B5 → F1 → F2 → F3 → F4

A1 and B1 are unblocked and start now. Commerce (C2–C4), forms (D1–D2), and
analytics (E1) wait on the relevant keys; cutover (F) waits on DNS access.
