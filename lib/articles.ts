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
  /**
   * The post's own cover image, still served from the Wix media CDN.
   *
   * These are Lodestone's real images, not stock. Each one is the cover Wix
   * already had attached to that exact post, so the subject cannot be mismatched
   * the way a hand-picked stock photo can. `static.wixstatic.com` is already an
   * allowed remote host in next.config.js.
   *
   * Long term these should be pulled into the repo and served locally, so the
   * site does not depend on the old Wix account staying alive.
   */
  image?: { src: string; width: number; height: number };
}

/** Build a Wix media URL from the file id stored on a blog post's coverImage. */
function wixMedia(fileId: string) {
  return `https://static.wixstatic.com/media/${fileId}`;
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
    image: { src: "/images/lodestone/insight-blulabs.jpg", width: 1600, height: 1158 },
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
    image: { src: wixMedia("c3325c_8f1b722a1ece41c4b3dbc9f0f7819209~mv2.jpg"), width: 2400, height: 1600 },
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
    image: { src: wixMedia("c3325c_5a52d1d161144ef08343d4f455b281d4~mv2.jpg"), width: 1650, height: 1101 },
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
    image: { src: wixMedia("c3325c_b5764d3d3ab74d8eb67b21c9fdfb13e0~mv2.jpg"), width: 5184, height: 3456 },
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
    image: { src: wixMedia("c3325c_71c8693f8123400db077bef593537cbd~mv2.jpg"), width: 5000, height: 3324 },
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
  image: a.image,
}));
