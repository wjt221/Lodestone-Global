# Lodestone website renewal — master plan
Status: first design iteration; not approved for production.
Baseline: latest inspected Vercel preview commit 56c1a04d17624b2b957aafd6a4e45c919606f84e (not the repository default branch).
Existing references: CONTENT_INVENTORY.md, REPORTS_SETUP.md, CONTENT_NEEDED.md. Preserve and reconcile rather than overwrite them.

## Direction
- Lodestone Global (www.lodestoneglobal.com): private-company boards first; board formation, director search, effectiveness, facilitation, education and compensation research.
- Lodestone Family Advisors (www.lodestonefamilyadvisors.com): family wealth and family-office services first; separate regulated entity, approved disclosures and data flows.
- E3 Scale Network (e3scale.com): founder/CEO operating support and enterprise value creation first.
- Capital: proposed capital.lodestoneglobal.com, primarily institutional credibility rather than public solicitation; existing Capital content and links to be preserved or mapped. No claim that the subdomain is live.
- An ecosystem menu on each property and a substantial contextual introduction on each homepage. No four equal businesses in the Global hero. Shared visual system and navigation, separate messaging and canonical domains.
- Evaluate a monorepo and separate Vercel projects after reviewing the other existing repositories. Do not force a migration for its own sake.

## Creative specification
Contemporary cinematic editorial design, dark navy, cool whites and grays; actual approved logos, sharp edges, generous space, restrained motion, deliberate asymmetry. One dominant idea per viewport. Avoid ivory/gold, tiny uppercase labels everywhere, ornamental numbers, generic stock office photos, repeated card grids and slogans. Use local licensed photography; validate crops at 390, 768 and 1440 pixels. Existing repository photos and marks are starting assets, not final approved assets. Use real survey cover art. Do not invent statistics, testimonials or outcomes. Avoid repeating principal journey and ecosystem narratives. Plain, direct board-specific language; draft copy subject to review.

Homepage: focused board hero, clear board services, early compensation research with two distinct discovery and buying paths, client evidence, prominent ecosystem section, insights/contact. Deeper content resides on useful indexable pages, not an overloaded homepage. Research always accessible from navigation.

## Content and SEO
Preserve public Wix URLs where possible, including /build, /optimize, /compensate, /shop, /qdd, /case-studies, /reports, /seminars, /team, /educate, /lodestone-blog, /lodestone-family-advisors, /capital, /product-page/<slug> and /single-post/<slug>. These are starting paths, not an exhaustive crawl.
Retrieve actual sitemap, page metadata, blog posts, redirects, downloadable public assets and search performance. Match all Wix paths and existing Next.js paths to canonical destinations; choose preserve or one-hop permanent redirect after checking traffic, backlinks and user intent. Retain meaningful dated content, author, methodology, original text, client evidence, Global Matrix, Qualified Director Database and Feedback Loop; verify rights and facts. The existing CONTENT_INVENTORY.md has 32 blog records and should be reconciled against Wix. Avoid thin pages and duplicated cross-domain text. Use server-rendered HTML, distinct metadata and canonicals, useful internal links, Article/Product/Breadcrumb/Organization schema where accurate; sitemap contains only canonical indexable URLs. Verify page-level canonicals and latest edition URL.
Wix redirect list was successfully retrieved; existing historic /blog/ redirects point to /single-post/ paths; preserve these aliases, including group redirects. The Wix published-site-URLs endpoint returned only the primary domain, not an inventory of pages. Search Console traffic and full URL crawl remain open. Do not assume historical rankings from publicly visible pages.
Protect staging with authentication and noindex headers/meta; test actual headers and sitemap on preview. Existing root layout currently sets index true and existing robots allows crawlers. Robots exclusions are not security. Keep protected report files out of public storage and GitHub.
Before DNS change: complete URL register, capture baseline search data, test redirect chains/404s/canonicals, submit new sitemap, preserve DNS email records, monitor rankings and conversions, document rollback. No production changes without explicit approval.

## Commerce
Keep Wix checkout functional through migration. Existing code already has Stripe Checkout, webhook, private Vercel Blob delivery, signed download tokens, Resend, free sample and custom inquiry flows documented in REPORTS_SETUP.md. Reuse after audit, do not rewrite unnecessarily.
Current visible Wix catalog verified 2026-11-25: 2026 $2,700; 2025 $2,250; 2024 $2,000; 2023 $1,750; 2022 $1,500; 2021 $1,000; 2020 $500; 2019, 2017-2018 and 2016 $250 each. Ten visible digital products. Existing code has $3,000 and $2,750 for 2026 and 2025 respectively. Existing documentation describes a previous pricing decision. Do not silently choose between list, promotional and Stripe prices; reconcile with owner before enabling new checkout. Preserve the exact existing product slugs.
Build the public research hub around approved methodology, sample findings, dated annual editions, custom benchmarking and eventual calculator using approved data only. Do not invent sample results. Maintain meaningful free information and a clear purchase route without intrusive popups.
Before enabling checkout, verify account/provider, test-mode credentials, payment status and amount/currency, idempotent checkout and webhook fulfillment, durable delivery/retry/reconciliation, refunds, private file availability, license terms, customer receipt and analytics; verify actual deployed environment without exposing secrets. Existing webhook verifies signature but does not visibly enforce paid status or persistent deduplication, and returns success on email failure; remediate and test before launch. Store private PDFs separately from the public repo and do not use robots.txt as access control.
Preserve existing forms, historical orders and member access as required, and audit Wix Pricing Plans, Invoices, Payments, Velo, automations and Video. Do not export customer-level data or confidential research to a public repository. Keep CRM integrations consent-based and scoped, with family-office data separated.

## Delivery and acceptance
1. Read-only audit and content/SEO/commerce register; open items documented above.
2. First responsive Global homepage design in an isolated branch; no existing Wix changes. Validate actual desktop/mobile rendering and links before sign-off.
3. Finalize typography, layout, logos, copy, and reusable navigation; then extend to service pages, research, other business properties.
4. Complete migration, test builds and browser flows, keyboard/accessibility, mobile responsiveness and performance. Test checkout only with test credentials until approved.
5. Explicit owner approval for release, DNS cutover, or live-payment changes. Keep Wix available for rollback and monitor post-launch.
