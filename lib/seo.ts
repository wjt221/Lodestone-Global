import { SITE_URL, SITE_NAME } from "./site";
import { CONTACT, leadership, businesses } from "./content";

/** Absolute URL for a site-relative path. */
export function abs(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Trusted counsel for owners building enduring companies and family wealth: governance advisory, an operating-partner network, an investment platform, and a multi-family office.",
    foundingDate: String(CONTACT.founded),
    email: CONTACT.email,
    sameAs: [CONTACT.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Morristown",
      addressRegion: "NJ",
      addressCountry: "US",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function personJsonLd(leader: (typeof leadership)[number]) {
  // Only staff get `worksFor`. Advisors are not employed, and affiliates are
  // employed by another firm entirely, so asserting employment by a Lodestone
  // business would be false for both, and is exactly the mismatch search engines
  // cross-check against LinkedIn.
  const staffRoles = leader.roles.filter((r) => (r.relationship ?? "staff") === "staff");
  const otherRoles = leader.roles.filter((r) => (r.relationship ?? "staff") !== "staff");
  const orgRef = (org: (typeof leader.roles)[number]["org"]) => {
    const b = businesses.find((x) => x.id === org);
    return b
      ? { "@type": "Organization" as const, name: b.name, url: b.external ?? abs(b.href) }
      : { "@id": `${SITE_URL}/#organization` };
  };
  const titles = leader.roles.map((r) => r.title).filter(Boolean) as string[];

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: leader.name,
    ...(titles.length ? { jobTitle: titles } : {}),
    ...(leader.bio ? { description: leader.bio } : {}),
    // An affiliate's real employer goes in worksFor when its legal name is
    // confirmed; until then no employer is asserted rather than the wrong one.
    ...(leader.employer
      ? { worksFor: [{ "@type": "Organization" as const, name: leader.employer }] }
      : staffRoles.length
        ? { worksFor: staffRoles.map((r) => orgRef(r.org)) }
        : {}),
    ...(otherRoles.length ? { affiliation: otherRoles.map((r) => orgRef(r.org)) } : {}),
    ...(leader.linkedin ? { sameAs: [leader.linkedin] } : {}),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function articleJsonLd(a: {
  title: string;
  summary: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.title,
    description: a.summary,
    datePublished: a.date,
    url: `${SITE_URL}/insights/${a.slug}`,
    mainEntityOfPage: `${SITE_URL}/insights/${a.slug}`,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function faqJsonLd(qas: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qas.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

/**
 * The Private Company Board Compensation Survey, described as a research
 * dataset. Facts kept qualitative (no unverified figures).
 */
export function surveyDatasetJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Private Company Board Compensation Survey",
    description:
      "An annual study of how private companies compensate their directors, with data segmented by revenue, industry, company size, and structure, across the United States and internationally.",
    creator: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    keywords: [
      "private company board compensation",
      "director compensation",
      "board pay benchmarking",
    ],
    spatialCoverage: "United States and international",
    isAccessibleForFree: false,
    url: `${SITE_URL}/insights`,
  };
}
