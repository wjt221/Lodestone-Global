# Blog migration — ready to run (blocked only on the Wix API quota)

Session 2026-08-21 completed the hero, invisible-photo, nav, section-merge and
schema work (all pushed to `claude/cutover-redirects-and-content`). The blog
migration — the single biggest fix for "feels AI-generated" — is fully designed
but **could not run**: every call to the Wix Blog API through the connector
returned `Rate limit exceeded`, across ~10 minutes and multiple spaced retries.
This is an external quota, not a code problem. When the quota resets, the whole
migration is one `ExecuteWixAPI` call plus local file writes.

## The one call to make

- Site: **Lodestone Global**, `siteId = 49487bc4-08f5-443e-ad4d-6e3f367bb7fd`
- Endpoint: `POST https://www.wixapis.com/blog/v3/posts/query`, `scope: "site"`
- Body: `{ fieldsets: ["RICH_CONTENT","URL","CONTENT_TEXT"], query: { paging: { limit: 100, offset: 0 } } }`
- Convert each target post's `richContent` (Ricos document, `nodes[]`) to HTML
  **inside** the sandbox and return only the ~10 converted articles, to keep the
  response small and the API calls to exactly one. A verified Ricos→HTML
  converter (PARAGRAPH→`<p>`, HEADING level→`<h2>`/`<h3>`, BULLETED/ORDERED_LIST
  →`<ul>`/`<ol><li>`, BLOCKQUOTE→`<blockquote>`, TEXT decorations BOLD/ITALIC/LINK)
  was written and is in this session's transcript — reuse it verbatim.
- Cover image lives at `post.media.wixMedia.image` = `{ id, url, width, height }`,
  alt at `post.media.altText`. `lib/articles.ts` builds the src from the media id
  via `wixMedia(fileId)` → `https://static.wixstatic.com/media/${fileId}`.

## The ten target posts, new slugs, and redirect repointing

Each already has a `/single-post/...` rule in `next.config.js` that currently
points at a **section page**. On migration, repoint that exact rule to the new
`/insights/<slug>` (the `/single-post/:slug*` catch-all stays as the safety net),
and add a matching `ArticleMeta` in `lib/articles.ts` + body in
`content/insights/<slug>.html`.

| New slug | Category | Old `/single-post/` source (currently → ) |
|---|---|---|
| private-company-director-magazine-qa | Interview | .../2015/11/12/private-company-qa-with-private-company-director-magazine (→/research) — the Bernie Tenenbaum / Private Company Director interview |
| private-company-compensation-2015 | Research | .../2015/10/10/private-company-compensation-grows-8-in-2015-new-data-shows (→/research) |
| director-compensation-2023-survey | Research | .../private-director-compensation-growth-accelerates-2023-private-company-board-compensation-survey (→/research) |
| director-compensation-2022-survey | Research | .../2022-private-company-board-compensation-survey-director-compensation-growth-resumes-post-covid-19 (→/research) |
| director-compensation-2021-survey | Research | .../2021-private-company-d (→/research) |
| when-to-change-board-members | Governance | .../manage-your-blog-from-your-live-site (→/governance-advisory) — "Is It Time To Change Your Board Members?" |
| questions-directors-ask-before-joining | Governance | .../2017/04/24/top-10-questions-high-performance-directors-ask-before-joining-a-board (→/governance-advisory) |
| run-a-great-board-meeting | Governance | .../2017/06/05/how-to-run-a-great-board-meeting-part-i-the-importance-of-social-interaction (→/governance-advisory) |
| boards-drive-profit-diesco | Case Study | .../2017/03/14/boards-drive-profit-the-diesco-story (→/governance-advisory) — Diesco won 2017 Private Company Advisory Board of the Year |
| who-do-i-want-on-my-board | Governance | .../2017/01/26/who-do-i-want-on-my-board-of-directors (→/governance-advisory) |

Also add each post's `/post/<wixSlug>` variant to the earlier `/post/...` block,
mirroring the five already migrated. Pull `minutesToRead` from word count
(`words/200`, min 1), `summary` from the post `excerpt`, `date` from
`firstPublishedDate`.

## Then, per the standing design standard

Migrating these brings ten real photographs and real writing — the core cure for
the AI feeling. Follow through by localizing those covers into `/public` (task 7,
also currently blocked: `static.wixstatic.com` is egress-blocked here) so the
site stops depending on the live Wix account, and give the interior mastheads
real editorial photography rather than the blind Unsplash shots still in
`components/photos.ts`.
