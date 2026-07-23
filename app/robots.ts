import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Crawler policy.
 *
 * Reputable AI/answer-engine crawlers are explicitly allowed so the firm is
 * eligible to be cited in AI answers and search. Proprietary, for-sale research
 * is protected: no crawler (AI or otherwise) may fetch the report downloads or
 * any PDF. Keep sold research under /downloads (or behind auth) so this holds.
 */

// Protected paths: sold research and internal endpoints. Applies to all agents.
const PROTECTED = ["/downloads/", "/api/", "/*.pdf$"];

// Reputable AI / answer-engine user agents we choose to allow (for citation),
// still subject to the PROTECTED disallow list above.
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Reputable AI crawlers: allowed to read the site, but never the reports.
      { userAgent: AI_AGENTS, allow: "/", disallow: PROTECTED },
      // Everyone else: same content, same protection for proprietary data.
      { userAgent: "*", allow: "/", disallow: PROTECTED },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
