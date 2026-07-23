import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/governance-advisory",
  "/e3-scale-network",
  "/lodestone-capital",
  "/family-advisors",
  "/insights",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "/insights" ? "monthly" : "yearly",
    priority: path === "" ? 1 : 0.7,
  }));
}
