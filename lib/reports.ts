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
  /**
   * Cover image for the edition, from the original Wix Stores product listing
   * (Lodestone's own designed cover art, not stock imagery). Hotlinked from
   * Wix's media CDN for now — this sandbox's network policy blocks fetching
   * the binaries to host locally (see CONTENT_NEEDED.md); move these to
   * /public before Wix is decommissioned (Epic F4).
   */
  coverImage: { url: string; width: number; height: number };
}

function edition(
  year: string,
  price: string,
  slug: string,
  coverImage: { url: string; width: number; height: number },
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
    coverImage,
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
const WIX_MEDIA = "https://static.wixstatic.com/media";

export const reportEditions: ReportEdition[] = [
  edition(
    "2026",
    "$3,000",
    "2026-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_aef70d10a13e4e92bf3b16b341ebed5c~mv2.png/v1/fit/w_2818,h_1632,q_90/file.png`, width: 2818, height: 1632 },
    "price_1TwRGSLmlez7woNa5iTVwpgY",
  ),
  edition(
    "2025",
    "$2,750",
    "2025-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_375d598d3a1d4e41bf86f24217638408~mv2.png/v1/fit/w_2581,h_1582,q_90/file.png`, width: 2581, height: 1582 },
  ),
  edition(
    "2024",
    "$2,000",
    "2024-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_dc4c704f5bb745d399b5dbd1749bf489~mv2.png/v1/fit/w_2106,h_1174,q_90/file.png`, width: 2106, height: 1174 },
  ),
  edition(
    "2023",
    "$1,750",
    "2023-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_ea1d82bcb3f449fe9237adae780f6e4c~mv2.png/v1/fit/w_1757,h_986,q_90/file.png`, width: 1757, height: 986 },
  ),
  edition(
    "2022",
    "$1,500",
    "2022-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_a6b0883668c84d679d3a98a976eaaa52~mv2.png/v1/fit/w_1983,h_1112,q_90/file.png`, width: 1983, height: 1112 },
  ),
  edition(
    "2021",
    "$1,000",
    "2021-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_f0da6e6494154e8cb627d1488f697f53~mv2.png/v1/fit/w_1820,h_997,q_90/file.png`, width: 1820, height: 997 },
  ),
  edition(
    "2020",
    "$500",
    "2020-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_143dbb69111e446dafb39a5e5068c22a~mv2.png/v1/fit/w_1797,h_1013,q_90/file.png`, width: 1797, height: 1013 },
  ),
  edition(
    "2019",
    "$250",
    "2019-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_4cbf888e5fb946ae8e6ca25a85d4dda8~mv2.jpg/v1/fit/w_1491,h_1134,q_90/file.jpg`, width: 1491, height: 1134 },
  ),
  edition(
    "2017-2018",
    "$250",
    "2017-2018-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_8b66cb64880741d4a0c82586463d5e29~mv2.jpg/v1/fit/w_1172,h_977,q_90/file.jpg`, width: 1172, height: 977 },
  ),
  edition(
    "2016",
    "$250",
    "2016-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_7540f564fdf14ea6bdc7153da2432ed9~mv2.jpg/v1/fit/w_1284,h_994,q_90/file.jpg`, width: 1284, height: 994 },
  ),
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
