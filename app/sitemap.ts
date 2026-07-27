import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { articles } from "@/lib/articles";
import { reportEditions } from "@/lib/reports";

const routes = [
  "",
  "/about",
  "/governance-advisory",
  "/e3-scale-network",
  "/lodestone-capital",
  "/family-advisors",
  "/insights",
  "/research",
  "/case-studies",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: (path === "/insights" ? "monthly" : "yearly") as
      | "monthly"
      | "yearly",
    priority: path === "" ? 1 : 0.7,
  }));

  const articleEntries = articles.map((a) => ({
    url: `${SITE_URL}/insights/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const reportEntries = reportEditions.slice(1).map((e) => ({
    url: `${SITE_URL}/research/${e.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...articleEntries, ...reportEntries];
}
