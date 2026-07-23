/**
 * Private Company Board Compensation Survey editions, from the live Wix store
 * (see CONTENT_INVENTORY.md). Purchase currently links to the existing store
 * product pages; this is replaced by Stripe Checkout in scope item C2, and the
 * full PDFs move behind /downloads (C3).
 */
const STORE = "https://www.lodestoneglobal.com/product-page";

export interface ReportEdition {
  year: string;
  price: string;
  /** Price in the smallest currency unit (cents), for Stripe checkout. */
  amountCents: number;
  slug: string;
  /** Store product page (interim purchase route while on Wix). */
  purchaseUrl: string;
  /** Stripe Price ID for on-site checkout, once created for this edition. */
  stripePriceId?: string;
  /** Object key of the report PDF in private storage (Vercel Blob). */
  fileKey: string;
}

function edition(
  year: string,
  price: string,
  slug: string,
  stripePriceId?: string,
): ReportEdition {
  const amountCents = Number(price.replace(/[^0-9]/g, "")) * 100;
  return {
    year,
    price,
    amountCents,
    slug,
    purchaseUrl: `${STORE}/${slug}`,
    stripePriceId,
    fileKey: `reports/${slug}.pdf`,
  };
}

/**
 * Editions. Purchases currently route to the Wix store (see the research page),
 * which delivers the PDF and emails the buyer. On-site Stripe checkout +
 * delivery is built (see app/api/checkout, /api/stripe/webhook, /api/download)
 * and goes live per edition once its Stripe Price is created, the PDF is
 * uploaded to storage, and the required env vars are set (see REPORTS_SETUP.md).
 * Only 2026's price is created so far; the others are pending price confirmation.
 */
export const reportEditions: ReportEdition[] = [
  edition("2026", "$3,000", "2026-private-company-board-compensation-survey", "price_1TwRGSLmlez7woNa5iTVwpgY"),
  edition("2025", "$2,750", "2025-private-company-board-compensation-survey"),
  edition("2024", "$2,000", "2024-private-company-board-compensation-survey"),
  edition("2023", "$1,750", "2023-private-company-board-compensation-survey"),
  edition("2022", "$1,500", "2022-private-company-board-compensation-survey"),
  edition("2021", "$1,000", "2021-private-company-board-compensation-survey"),
  edition("2020", "$500", "2020-private-company-board-compensation-survey"),
  edition("2019", "$250", "2019-private-company-board-compensation-survey"),
  edition("2017-2018", "$250", "2017-2018-private-company-board-compensation-survey"),
  edition("2016", "$250", "2016-private-company-board-compensation-survey"),
];

export const latestEdition = reportEditions[0];

export function getEditionBySlug(slug: string): ReportEdition | undefined {
  return reportEditions.find((e) => e.slug === slug);
}

export function getEditionByPriceId(priceId: string): ReportEdition | undefined {
  return reportEditions.find((e) => e.stripePriceId === priceId);
}

/** What the survey measures, kept qualitative (no unverified figures). */
export const surveyHighlights: string[] = [
  "Director retainers, per-meeting fees, and committee pay",
  "Segmented by revenue, industry, company size, and structure",
  "United States and international data",
  "Guidance for board chairs, CEOs, and compensation committees",
];
