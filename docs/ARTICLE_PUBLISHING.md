# Publishing articles without a CMS

1. Draft the article with ChatGPT or Claude Code. Confirm source facts, permissions, confidentiality, attribution and approval before publishing.
2. Add a unique slug and metadata to `lib/articles.ts`, including title, excerpt, category, original publication date, reading time and cover image. Do not overwrite original publication dates when updating.
3. Add sanitized HTML to `content/insights/<slug>.html`. Use semantic headings, paragraphs, lists, and approved imagery. No scripts or raw user-provided HTML.
4. Add old URL mappings in `next.config.js` only when moving an existing page. Avoid generic redirects. New articles need no migration redirect.
5. The Insights library, article pages, metadata and sitemap update automatically. Curated homepage feature slugs are in `app/page.tsx`.
6. Preview deployment first; test article links, mobile reading, image loading, factual claims, and related services before approving publication. Production indexing stays disabled until the approved website cutover. LFA content requires separate compliance review.
