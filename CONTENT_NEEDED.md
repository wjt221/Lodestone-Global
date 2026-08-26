# Content Needed Before Final Publication

This file lists every item that still needs confirmation or delivery from
Lodestone before the site is production-ready. Nothing unconfirmed is exposed
on a live page; where a fact could not be verified it was omitted or phrased
qualitatively. Fields marked `NEEDS CONFIRMATION` in `lib/content.ts` map to
the items below.

The live pages `lodestoneglobal.com` and `e3scale.com` could not be fetched
from the build environment (blocked by network policy), so factual content was
assembled from search-indexed snippets of those pages. Every item below should
be re-verified against the live source before launch.

## Leadership

- [ ] **Full team roster.** Published entries: William Tenenbaum (Founder and
      Managing Partner), Ken Munkacy (Advisory Board Member), and Marissa Levin
      (Chief Client Officer). Add remaining team members from the live `/team`
      page (e.g. a name seen in one snippet, "Tyler Errickson, Partner at
      Lodestone Capital," is unconfirmed and was not published).
- [ ] **Ken Munkacy biography.** Ken Munkacy is published with name and role
      only; no bio was available in the repo, so the entry renders a neutral
      monogram and hides the bio field rather than inventing career history
      (see the `BIO PENDING APPROVAL` comment in `lib/content.ts`). Supply his
      approved biography.
- [ ] **Approved biographies.** Confirm/replace the published bios with
      final approved copy. The published bios deliberately omit unverified
      specifics (e.g. the "22% annualized alpha" figure and a named prior
      employer's AUM) — add back only if approved.
- [ ] **Founder framing.** Confirm how Bernie Tenenbaum's historical role is
      described relative to William Tenenbaum, if at all.
- [ ] **Headshots.** Three portraits are now live, hotlinked from Lodestone's
      own Wix media library and matched by filename: William Tenenbaum
      (`WT Headshot 2.jpg`), Marissa Levin (`Marissa Levin.jpg`) and Ryan
      Niles (`Niles.JPG`). Everyone else still renders as a name in the
      roster. Three more likely portraits are in the same library but their
      filenames do not identify a person, so they were left unwired rather
      than guessed: `Headshot.jpg` (2048x1968), `Tyler.jpg` (800x800, likely
      Tyler Errickson, Lodestone Capital), `Photo.JPG` (2024x1115),
      `Photo.JPG` (1775x1177) and `jeffrey-tappick.jpg` (560x400). Confirm
      who each one is and they can be wired in a one-line edit per person
      (`photo` on the entry in `lib/content.ts`).
- [ ] **LinkedIn URLs** per person (the `linkedin` field is left unset until
      confirmed).

## Statistics and claims (deliberately not published)

- [ ] **"1,000+ boards assembled, advised, or served."** Appears in source
      copy but unverified; omitted from the live site. Confirm the exact,
      current figure and wording before adding.
- [ ] **Board compensation survey specifics.** The survey is described
      qualitatively. Confirm the latest edition year, the "since 2013" vs
      "14th annual" math, sample size, headline data points, and current
      pricing before publishing any number or the report's publish date.
- [ ] **Any performance, AUM, EBITDA, or return figures.** None are published.
      Do not add unless from approved source content.

## Case studies / representative engagements

- [ ] The three homepage engagements are written at a safe, anonymized altitude.
      Lodestone's published `/case-studies` page reportedly names specific
      companies and results (e.g. a food-distribution family business; a
      multifamily real estate operator). If Lodestone wishes to publish named
      case studies with specific outcomes, supply the approved text and
      confirm client permission; the copy can then be expanded.

## Client logos / relationships

- [ ] **Approved client logos.** No client logo files exist in the repo and it
      is unconfirmed which clients may be shown. The homepage currently shows a
      text list of sectors served instead of a logo wall. Supply approved logo
      files and written permission to display them, and confirm the sector list.

## Contact details

- [ ] **Public inquiry email.** `inquire@lodestoneglobal.com` is used as the
      form destination and contact address but is unconfirmed. Confirm the
      correct address.
- [ ] **Street address.** Only "Morristown, New Jersey" is shown (confirmed at
      city level via LinkedIn). Confirm the full mailing address; a Princeton,
      NJ address also appears in older sources.
- [ ] **Phone number.** None found; none published. Supply if one should appear.
- [ ] **Contact form destination.** The form currently degrades to a pre-filled
      `mailto:` because no form endpoint is configured. Provide the intended
      handler (e.g. an email API, HubSpot, Formspree, or a Next.js route) and
      it can be wired into `components/ContactForm.tsx`.

## Legal / regulatory

- [ ] **Correct legal entity name(s).** Footer/copyright use "Lodestone Global."
      Confirm the registered entity name(s) for Lodestone Global, Lodestone
      Capital, and Lodestone Family Advisors.
- [ ] **RIA / regulatory status.** No SEC registration for "Lodestone Family
      Advisors" could be verified. The site describes advisory services in
      general terms and does not assert registration. Confirm registration
      status and supply required Form ADV / RIA disclosures and any investment
      disclaimers, then finalize the footer disclosure language.
- [ ] **Privacy policy.** A concise, honest privacy statement is published at
      `/privacy`. Replace with the client's reviewed/approved policy if a formal
      one exists (source has a `/privacy-policy` page that could not be read).

## Business URLs / social

- [ ] **E3 Scale Network** links to `e3scale.com` (confirmed). Confirm final
      URLs for any dedicated Lodestone Capital and Family Advisors properties;
      currently they live only as sections of this site.
- [ ] **Social links.** Only the company LinkedIn is linked. Add any other
      approved social profiles.

## Media / assets

- [ ] **Documentary photography.** The hero and section backgrounds use
      Unsplash URLs (`components/photos.ts`), reworked to eliminate the same
      image repeating across unrelated pages (was: one image reused on 7
      pages) and to fill two previously-unused entries. IMPORTANT: this
      sandbox cannot fetch or preview external images (confirmed 403 on both
      direct HTTP and WebFetch for images.unsplash.com), so every URL in that
      file was selected from training knowledge, not visually verified —
      check the live site against each entry's alt text (which states the
      intended subject) and swap anything that doesn't match. Replace with
      approved, licensed Lodestone photography where possible (see
      `public/images/lodestone/README.md` for slot names and direction).
- [ ] **Verify the remaining stock slots against the Wix library.** The Wix
      Media Manager holds 77 images, listed via the Media Manager REST API.
      Alongside the report covers and blog art, these are candidates for the
      slots in `components/photos.ts` that are still Unsplash:

      | File | Size | Likely subject |
      |---|---|---|
      | `YPO-NUQUL-170110-23.jpg` | 5616x3744 | A real Lodestone/YPO session |
      | `Family_Board_page-YPOTaipei.jpg` | 1180x1565 | Family board, YPO Taipei |
      | `8.jpg` | 4000x2662 | Unlabelled event photography |
      | `1.JPG` / `2.JPG` / `3.JPG` / `4.JPG` | ~1400x1050 | An event set |
      | `PAG.JPG`, `Photo.JPG` | ~2000x1100 | Unlabelled |

      None of these were wired in, because this environment's network policy
      blocks `static.wixstatic.com` (and the live site, and the Vercel
      preview) at the egress proxy, so their contents could not be seen. A
      filename like `22.jpg` is not enough to put an image on a page. Anyone
      who can open the Media Manager can match them to slots in minutes;
      until then the alt text in `photos.ts` states the intended subject.
- [ ] **Open Graph share image.** No custom OG image is set. Supply a branded
      1200x630 image for richer link previews.
- [x] **E3, Capital, and Family Advisors logos.** Real logo files for all four
      businesses (Global, Capital, Family Advisors, E3) supplied via Google
      Drive and processed into transparent PNGs in `/public/logo`, wired into
      `lib/content.ts`. Not currently rendered in the ecosystem section itself
      (kept as text there for size consistency across four equal columns —
      the E3/Capital marks don't scale down as legibly as Global's), but
      available via `business.logo` wherever a per-business mark is wanted.
- [ ] **Report cover images hosted on Wix's CDN.** `/research` shows the real
      cover art for all 10 survey editions, pulled from the Wix Stores V1
      catalog (`lib/reports.ts`), but the images are hotlinked from
      `static.wixstatic.com` rather than hosted in this repo — the build
      environment's network policy blocked downloading the binaries. Download
      the 10 files and move them into `/public/images/reports/` (update
      `coverImage.url` to local paths) before Wix is decommissioned (Epic F4),
      since the CDN dependency should not outlive the Wix account.
