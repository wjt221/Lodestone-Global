# Prompt for the next Claude Code session

Paste everything below the line into a new session.

---

You are continuing work on the Lodestone Global website. Read this whole brief before touching anything.

## The setup

- **Repo:** `wjt221/Lodestone-Global` — Next.js 15 / React 19 / Tailwind / TypeScript, deployed on Vercel (project `lodestone-global`, team `team_BWASM1FWvyoSPMf2vfA5oBS7`).
- **Work in progress lives on branch `claude/cutover-redirects-and-content`**, which is pushed but **not merged**. Start from it, do not start from `main`.
- Preview: `https://lodestone-global-git-claude-cutover-red-38faf2-wjt221s-projects.vercel.app` (Vercel SSO required).
- **Production is stale and no custom domain is attached.** `lodestoneglobal.com` still serves the *old Wix site*. Nothing here is live yet.
- There is a second repo, `wjt221/lodestoneglobal` (lowercase, Wix Velo). It is the *old* site. Do not confuse them.

## Look at the site. Actually look at it.

The single biggest failure of the previous sessions was writing design changes without ever seeing the page. `lodestoneglobal.com` and `static.wixstatic.com` are blocked by network egress policy, but **localhost is not**. Use this:

```bash
npm ci && npm run build
(setsid npx next start -p 3250 > /tmp/s.log 2>&1 < /dev/null &) ; sleep 18
npm i -D playwright   # binaries are already at /opt/pw-browsers
```

```js
// shot.js — run with `node shot.js` from the repo root
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  });
  const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
  await p.goto('http://localhost:3250/', { waitUntil: 'networkidle' });
  await p.screenshot({ path: '/tmp/home.png', fullPage: true });
  await b.close();
})();
```

Then **read the PNG**. Screenshot before and after every visual change. Also check a 390px-wide viewport — mobile has never been reviewed.

**Gotcha:** `pkill -f next` kills your own `npx next start` command. Use a fresh port instead.

**Gotcha:** this project's Tailwind pipeline silently drops brand-new opacity fractions (`bg-navy/82`, `border-charcoal/12`) — the class is scanned but no CSS rule is generated. Reuse fractions already present in the codebase, and grep the built stylesheet to confirm any new one compiled.

## What the client wants, in his words

> "It still feels very AI heavy unlike the old site. There are photos, there are live case studies, there are client stories. There are different pieces in each stripe and page so it doesn't feel Blah."

> "Unlike the prior site the homepage does not make you want to build a board... that is still the biggest reason people google and come to our site."

The diagnosis, which is in `docs/design-realness-plan.md` in the *other* repo:

1. **Every specific was stripped for safety.** The build environment couldn't reach the live site, so unverifiable facts were omitted. Correct call, but the cumulative effect — monograms instead of faces, anonymised case studies instead of named ones, qualitative description instead of numbers — is what reads as machine-made. **The AI feeling is an absence, not a style.**
2. **Uniform rhythm.** Nearly every section is: small brass eyebrow, large serif headline, columns of small text, thin rules. Repeated ten times.
3. **All photography is Unsplash, chosen blind.** `components/photos.ts` admits it: URLs were "selected from training knowledge ... not visually verified."

## Done already (do not redo)

- 90 redirect rules in `next.config.js`, including 33 `/single-post/*` — the live Wix blog prefix. Without these every blog URL 404s at cutover.
- `BoardDoors` section under the hero: Build / Facilitate / Optimize / Educate, anchored into `/governance-advisory`.
- Hero rewritten to lead with board: *"We build, facilitate, optimize and educate award-winning boards."*
- `ProofBand`: three published figures at display scale, deliberately unlike every other section.
- Team page rebuilt as a typographic roster grouped by business, one entry per person.
- Real Wix cover images on all five insights.

## Facts you may use. Everything else needs confirmation.

- 2023 survey: **782 companies, 50 industries, 38 countries**. These describe **survey respondents, not the client base** — never phrase them as Lodestone's operating reach.
- 2023 median total director compensation **$49,200, +9.7%**; 2016 median **$36,000**.
- **Ten editions on sale, 2016–2026**, $250 rising to $3,000.
- **356 directors** in the Qualified Director Network.
- 2023 was the **12th annual** survey, so 2026 is likely the 15th — **confirm before publishing**.
- "Award-winning boards" is exact: the awards belong to *clients' boards* (Private Company Board of the Year), not the firm. Never restate it as an award the firm won.
- Contact: `info@lodestoneglobal.com`, (973) 397-5355, Morristown, New Jersey.
- Structure: Lodestone Global is the holdco **and** the board operating business. E3 Scale Network, Lodestone Capital and Lodestone Family Advisors are subsidiaries. **Elevation Group is a partner business, not owned.**

**Never invent** a statistic, testimonial, client name, credential or performance figure. `lib/content.ts` and `lib/articles.ts` carry `NEEDS CONFIRMATION` markers — respect them. Omitting a fact is free; publishing a wrong one is not.

## Work, roughly in order of value

1. **Tighten the hero.** It fills the entire fold; the doors sit below it. Get one row of doors peeking above the fold on a 1440×900 laptop.
2. **Kill the invisible hero photo.** The navy gradient is fully opaque over an Unsplash image nobody can see. Deleting it removes a stock photo and improves LCP.
3. **Rework the nav.** "Board Advisory" is one of five equal items alongside Investments and Family Office. Board is where the traffic comes from; give it weight.
4. **Migrate real blog posts.** 32 exist in Wix; 5 are on the new site. The rest redirect to section pages. Migrating ten strong ones — the Bernie Tenenbaum *Private Company Director* interview, the 2015–2023 survey announcements, "Is It Time To Change Your Board Members?" — brings real writing *and* ten more real photographs. **This is the biggest single fix for "feels AI-generated."**
5. **Break the remaining rhythm.** Five middle sections still share one shape. "The questions change as ownership grows" and "One principal, four changing roles" cover overlapping ground; merging them removes a screen.
6. **Pull the Wix images into the repo.** Insight covers currently hotlink `static.wixstatic.com`, so the new site depends on the old Wix account staying alive.
7. **Port `Service`, `Dataset` and `BreadcrumbList` schema** into `lib/seo.ts`. The compensation survey is a genuine `Dataset` and nothing marks it as one.

## Open questions for William

- Headshots, approved bios, client logos with permission, named case studies with sign-off — none exist yet.
- Are **Devin Schain, Dottie Schindlinger and Jordan Glatt** still affiliated? They have live bio pages on the Wix site but are absent from the current roster.
- Midcontinent's legal entity name (unlocks `worksFor` for Bill van Pelt and Eva Creixell).
- William's titles at E3, Capital and LFA.
- `/opportunities` publishes 10 live deals with target returns. **Left unmapped in the redirects on purpose, pending securities counsel.** Do not publish it.

## How to work

Verify before you push: `npx tsc --noEmit`, `npm run build`, then screenshot. Commit in logical units with messages that explain *why*, not just what. Push to `claude/cutover-redirects-and-content`. Do not open a PR unless asked.

If you find that something in this brief is wrong, say so plainly and correct it rather than working around it.
