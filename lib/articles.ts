import fs from "fs";
import path from "path";
import type { Insight } from "./content";

export interface ArticleMeta {
  slug: string;
  title: string;
  category: string;
  /** ISO date. */
  date: string;
  summary: string;
  minutesToRead: number;
  /** Original Wix URL(s), for the redirect map. */
  legacyPaths: string[];
}

/**
 * Governance articles migrated from the Wix blog (see CONTENT_INVENTORY.md).
 * Bodies live as HTML in content/insights/<slug>.html and are loaded at build
 * time. Only substantive posts were migrated; thin external-link teasers were
 * left behind and redirected.
 */
export const articles: ArticleMeta[] = [
  {
    slug: "lodestone-capital-blulabs-investment",
    title: "Lodestone Capital Leads $7 Million Investment in Blulabs",
    category: "Announcement",
    date: "2026-05-27",
    summary:
      "Lodestone Capital led a $7 million investment in Blulabs, a founder- and family-led global supply chain and manufacturing partner, to support its continued growth.",
    minutesToRead: 3,
    legacyPaths: [
      "/post/lodestone-capital-leads-7-million-investment-in-blulabs-to-expand-global-supply-chain-platform",
    ],
  },
  {
    slug: "improving-board-performance",
    title: "How to Improve Your Board's Performance",
    category: "Governance",
    date: "2023-03-14",
    summary:
      "Practical steps for a higher-performing board: define roles, recruit the right members, build a strong board culture, evaluate, and set an agenda that stays strategic.",
    minutesToRead: 4,
    legacyPaths: [
      "/post/how-to-improve-your-board-s-performance-best-practices-and-strategies",
    ],
  },
  {
    slug: "board-diversity-and-performance",
    title: "Is Diversity on Boards Critical for Success?",
    category: "Governance",
    date: "2023-04-26",
    summary:
      "What the research says about the link between board diversity and company performance, and where private-company boards stand today.",
    minutesToRead: 3,
    legacyPaths: ["/post/is-diversity-on-boards-critical-for-success"],
  },
  {
    slug: "attracting-top-board-members",
    title: "Strategies for Attracting Top Board Members",
    category: "Governance",
    date: "2023-02-23",
    summary:
      "The best directors care more about strategy and impact than pay. Define the role, build a strong culture, and benchmark compensation to attract them.",
    minutesToRead: 2,
    legacyPaths: [
      "/post/get-the-best-of-the-best-strategies-for-attracting-top-board-members",
    ],
  },
  {
    slug: "advisory-board-readiness",
    title: "Is Your Company Ready for an Advisory Board?",
    category: "Governance",
    date: "2023-02-14",
    summary:
      "Readiness is about critical strategic issues, a clear vision, and a willingness to listen, not a revenue threshold. How to tell, and how to prepare.",
    minutesToRead: 3,
    legacyPaths: [
      "/post/are-you-ready-for-a-high-performance-advisory-board-key-indicators-and-steps-for-success",
    ],
  },
];

export function getArticle(slug: string): ArticleMeta | undefined {
  return articles.find((a) => a.slug === slug);
}

/** Remove LinkedIn hashtag blocks, empty paragraphs, and known artifacts. */
function cleanHtml(html: string): string {
  return html
    .replace(
      /<p>(?:\s|&nbsp;|<a[^>]*linkedin\.com\/feed\/hashtag[^>]*>[^<]*<\/a>)+<\/p>/gi,
      "",
    )
    .replace(/<p>(?:\s|&nbsp;)*<\/p>/gi, "")
    .trim();
}

/** Loads and cleans an article body. Server-only (reads from disk). */
export function getArticleHtml(slug: string): string {
  const file = path.join(process.cwd(), "content", "insights", `${slug}.html`);
  return cleanHtml(fs.readFileSync(file, "utf8"));
}

/** Article metadata as Insight cards for listings. */
export const articleCards: Insight[] = articles.map((a) => ({
  category: a.category,
  title: a.title,
  date: new Date(a.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  summary: a.summary,
  href: `/insights/${a.slug}`,
  cta: "Read more",
}));
