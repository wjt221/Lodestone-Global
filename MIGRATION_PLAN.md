# Migration Plan: Wix → Custom Site (SEO + LLM-first, lower run cost)

Goal: move Lodestone Global off Wix onto the custom Next.js site (already built
in this repo, deployed on Vercel), optimized for best-in-class SEO and
discoverability by AI/LLM answer engines, while keeping the functions the
business actually uses and lowering recurring cost.

This is a decision + sequencing document, not a one-click migration. Some data
(especially member logins and active subscriptions) cannot be moved
programmatically and needs a deliberate cutover.

---

## 1. What Wix does today, and what replaces it

Current Lodestone Global site: classic **Wix Editor**, Velo enabled, custom
domain, with these apps installed:

| Wix capability today | Used for | Replacement | Notes |
|---|---|---|---|
| Promote SEO | metadata, sitemap | Next.js metadata + `sitemap.ts` + `robots.ts` + JSON-LD | Already built in this repo |
| Wix Blog | Insights/articles | Headless CMS (Sanity) or MDX in-repo | CMS lets non-devs publish; see §4 |
| Wix Stores (Catalog V1) | selling the board-comp report(s) | Stripe Checkout (digital goods) or Lemon Squeezy (merchant of record) | Only a few digital products; §3 |
| Wix Pricing Plans | subscriptions/memberships | Stripe Billing | Existing subscribers must re-subscribe; §6 risk |
| Wix Members Area | gated content, member files | Auth (Clerk or Auth.js) + gated routes; files on Cloudflare R2/S3 | Logins do not transfer; §6 |
| Wix Forms & Payments / Invoices | contact/intake forms, invoices | Serverless form + Resend email; Stripe Invoicing | Contact form already built (honeypot) |
| Wix Video | embedded video | Mux or Vimeo/YouTube embed | Few assets |
| Contacts / Inbox | lead capture, CRM | HubSpot (free tier) | Also covers email marketing |
| Wix Analytics | traffic | Plausible (privacy-friendly) or GA4 + Vercel Analytics | |

For a professional-services firm whose "store" is essentially a handful of
digital research reports, none of these replacements is heavy — the real work
is auth/members and payments continuity, not catalog volume.

---

## 2. Recommended target stack

- **Framework/host:** Next.js (App Router) on **Vercel** — already in place.
- **Content:** **Sanity** (free tier) as a headless CMS for Insights/blog and
  editable page copy, consumed via the existing `lib/content.ts` pattern.
  Alternative: keep content as MDX in-repo (zero cost, dev-edited).
- **Payments (reports):** **Lemon Squeezy** or **Paddle** (merchant of record —
  they handle sales tax/VAT on digital goods) *or* **Stripe Checkout** (lower
  fees, but you own tax handling).
- **Subscriptions / pricing plans:** **Stripe Billing**.
- **Members / gated content:** **Clerk** (fastest) or **Auth.js** (free,
  self-managed); gated report files stored in **Cloudflare R2** or **AWS S3**
  with signed URLs.
- **Forms + transactional email:** serverless route + **Resend**; spam via
  **Cloudflare Turnstile** (less intrusive than reCAPTCHA).
- **CRM + email marketing:** **HubSpot** free tier (or Beehiiv/Mailchimp for
  newsletters only).
- **Analytics:** **Plausible** (or GA4) + Vercel Web Analytics.
- **Email (mailboxes):** unchanged — see §7.

---

## 3. Best-in-class SEO (what the custom site gives you that Wix can't easily)

Already implemented in this repo: server-rendered/static HTML, per-page
metadata, canonical URLs, Open Graph, `sitemap.xml`, `robots.txt`, and
Organization JSON-LD. To reach best-in-class, add:

- **Structured data** across page types: `Organization` + `WebSite` (done),
  `BreadcrumbList`, `Article`/`BlogPosting` for Insights, `Person` for
  leadership, and `Dataset`/`Report` for the board-compensation research.
- **Core Web Vitals**: Next image optimization, minimal client JS (already the
  case), font preloading. Aim for green CWV — Wix sites frequently struggle here.
- **Clean, stable URLs** and a complete **301 redirect map** from every existing
  Wix URL to its new location (critical to preserve ranking equity — see §5).
- **Content depth**: publish the research and governance guidance as crawlable
  HTML (summaries public, full report gated) so there is citable surface area,
  not just a gated PDF.
- **Google Search Console + Bing Webmaster**: verify the new site, submit the
  sitemap, monitor coverage and the redirect transition.

## 3b. LLM / answer-engine discoverability (GEO/AEO)

This is where leaving Wix genuinely helps: AI crawlers and answer engines parse
**server-rendered, semantic HTML** far more reliably than Wix's heavily
client-rendered pages.

- **Allow reputable AI crawlers** in `robots.txt` (decision to confirm): e.g.
  `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`,
  `Bingbot`. Allowing them is what makes the firm eligible to be *cited* in AI
  answers; block only what you don't want trained/quoted.
- **`/llms.txt`** (and an optional `/llms-full.txt`): an emerging convention —
  a concise, curated map of the site's key pages and facts for LLMs, plus
  markdown (`.md`) versions of primary pages for clean ingestion.
- **Canonical, factual, well-structured copy**: clear headings, short
  declarative statements, `FAQPage` schema on high-intent questions
  ("What is board compensation for private companies?"). Answer engines quote
  well-structured facts.
- **Entity clarity**: consistent Organization/Person schema and consistent NAP
  (name, address, phone) so models resolve "Lodestone Global" unambiguously.
- **Optional feature phase:** an on-site AI assistant (retrieval over the
  research + insights using the Claude API) — both a differentiator and a way to
  keep the firm's own content in front of visitors.

---

## 4. Content & data migration

What can be pulled programmatically now (via the Wix connector) or exported:

- **Blog/Insights posts** → export from Wix, import into the CMS/MDX.
- **Store products** (report listings, prices, descriptions) → re-create in the
  new payments tool.
- **Media** (logos, images, video) → download and move to the repo/CDN.
- **Contacts** → export CSV → import to HubSpot.

What does **not** move cleanly (plan manually):

- **Members / logins** — no password export; members re-register on the new
  site (communicate in advance; consider magic-link login to ease this).
- **Active subscriptions / pricing-plan billing** — cannot be transferred;
  existing subscribers must be re-subscribed in Stripe. Coordinate timing and
  messaging so no one is double-billed or dropped.
- **Order/purchase history & invoices** — export for records; treat as archive.

---

## 5. SEO-safe cutover sequence

1. Build/finish the custom site behind a preview or subdomain (e.g.
   `new.lodestoneglobal.com`) with all content in place.
2. Crawl the current Wix site to produce a full URL inventory; write a **301
   redirect map** old→new (in `next.config.js`, extending the existing
   `redirects()`).
3. Set up Google Search Console/Bing for the new site; stage the sitemap.
4. Cut over DNS web records (apex `A` / `www` `CNAME`) to Vercel — **leave `MX`
   and mail records untouched** (§7).
5. Immediately submit the new sitemap, verify redirects resolve, and watch GSC
   coverage + Core Web Vitals for 2–4 weeks.
6. Keep the Wix site paused/exported (not deleted) until rankings stabilize.
7. Decommission Wix apps/plan once stable.

---

## 6. Risks and how to manage them

- **Biggest risk — members & subscriptions.** Logins and active billing can't be
  migrated. Mitigate with advance notice, magic-link re-registration, and a
  scripted re-subscribe flow in Stripe. If the active-subscriber base is
  meaningful, this alone may argue for staying on Wix or using Wix Studio.
- **SEO dip** if redirects are incomplete — the redirect map (§5) is
  non-negotiable.
- **Tax on digital goods** — use a merchant of record (Lemon Squeezy/Paddle) to
  avoid managing VAT/sales tax yourself.
- **Maintenance ownership** — a custom stack trades Wix's all-in-one convenience
  for ongoing engineering. Budget for it.

---

## 7. Email (unaffected by the site move, if done carefully)

- Email is **Google Workspace**, managed in the Google Admin console —
  independent of Wix. Confirmed. Leaving Wix has **no effect** on mailboxes; the
  Workspace subscription and admin stay exactly as they are.
- Mailboxes (`@lodestoneglobal.com`) are controlled by **DNS MX records**, not by
  the website platform, so moving the site does not touch email.
- During cutover, change **only** the web records Vercel specifies (apex `A`,
  `www` `CNAME`). Leave the Google Workspace `MX` records and the SPF/DKIM/DMARC
  `TXT` records untouched so mail keeps flowing.
- If DNS is currently managed inside Wix, move DNS management to your registrar
  or Cloudflare first (copying the existing Workspace MX/SPF/DKIM/DMARC records
  exactly), then repoint only the web records. This keeps email uninterrupted.
- Marketing/automated email (currently Wix) → HubSpot/Beehiiv/Mailchimp. That's a
  tool switch, not an address change.

---

## 8. Rough cost comparison (indicative, monthly)

| Item | Wix today | Custom stack |
|---|---|---|
| Platform/hosting | Premium plan + app fees | Vercel Pro ~$20 (or Hobby free if eligible) |
| CMS | included | Sanity free tier (or $0 MDX) |
| Payments | Wix fees | Stripe/Lemon Squeezy: per-transaction only |
| Members/auth | included | Clerk free tier → usage-based; or Auth.js free |
| Forms/email | included | Resend free → ~$20; Turnstile free |
| Email marketing/CRM | included | HubSpot free tier |
| Analytics | included | Plausible ~$9 or GA4 free |
| **Business email** | Google Workspace via Wix (~$7/user) | Same Google Workspace (~$7/user) — unchanged |

Net recurring cost is likely **flat-to-lower** than Wix premium + apps, with the
big variable being your time/engineering. The main wins are SEO, LLM
discoverability, performance, and full control — not dramatic dollar savings.

---

## 9. Decisions — confirmed

1. **Members/subscriptions:** no active members or paying subscribers to
   preserve → a clean cutover is feasible; no member/subscription migration
   needed.
2. **Payments:** **Stripe** (already in use). Use Stripe Checkout for report
   sales and Stripe Billing if subscriptions are added later; owner handles tax
   (revisit a merchant of record only if selling into the EU/UK at volume).
3. **Content editing:** content stays **in-repo** (`lib/content.ts` + MDX) and
   is edited on request. All copy, capabilities, insights, and leadership are in
   editable source files — nothing is locked in a proprietary editor. A non-dev
   CMS (Sanity) can be layered on later if self-serve editing is wanted.
4. **AI crawlers:** **allowed** for citation (GPTBot, ClaudeBot, PerplexityBot,
   Google-Extended, etc.), **but** proprietary for-sale research is protected —
   `robots.txt` disallows `/downloads/` and all `*.pdf`, and `llms.txt` states
   the report data is not licensed for crawling/training. Implemented now in
   `app/robots.ts` and `public/llms.txt`.
5. **On-site AI assistant:** deferred to a later phase.

### Implication for report delivery
Because AI crawlers are allowed site-wide except the reports, keep every sold
PDF under `/downloads/` (or behind auth) so the disallow rules cover it. Publish
free-to-read HTML *summaries* of the research for SEO/LLM visibility, with the
full PDF gated — visibility without giving away the proprietary data.

---

## 10. Suggested phasing

- **Phase 0 — Decisions & inventory** (§9, URL crawl, member/subscriber count).
- **Phase 1 — Content**: CMS + migrate Insights/blog + finalize the pages in
  this repo; resolve `CONTENT_NEEDED.md` items.
- **Phase 2 — Commerce & members**: Stripe/Lemon Squeezy for reports, Stripe
  Billing for plans, auth + gated files.
- **Phase 3 — Forms, email, analytics, CRM**.
- **Phase 4 — SEO/LLM layer**: full structured data, redirect map, `llms.txt`,
  AI-crawler policy, GSC/Bing.
- **Phase 5 — Cutover**: subdomain preview → DNS web records → monitor → retire
  Wix.
