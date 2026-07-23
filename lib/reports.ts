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
  slug: string;
  /** Store product page (interim purchase route). */
  purchaseUrl: string;
  /** Stripe Payment Link, when set, takes precedence over purchaseUrl. */
  checkoutUrl?: string;
}

function edition(
  year: string,
  price: string,
  slug: string,
  checkoutUrl?: string,
): ReportEdition {
  return { year, price, slug, purchaseUrl: `${STORE}/${slug}`, checkoutUrl };
}

export const reportEditions: ReportEdition[] = [
  // Purchases stay on the Wix store, which delivers the PDF and sends the
  // confirmation email. A Stripe price for the 2026 full report ($3,000) exists
  // (price_1TwRGSLmlez7woNa5iTVwpgY) and its Payment Link is deactivated until
  // fulfillment (download + email) is built on the new site. See SCOPE C2-C4.
  edition("2026", "$3,000", "2026-private-company-board-compensation-survey"),
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

/** What the survey measures, kept qualitative (no unverified figures). */
export const surveyHighlights: string[] = [
  "Director retainers, per-meeting fees, and committee pay",
  "Segmented by revenue, industry, company size, and structure",
  "United States and international data",
  "Guidance for board chairs, CEOs, and compensation committees",
];
