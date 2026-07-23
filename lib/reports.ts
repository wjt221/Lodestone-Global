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
  /** Object key of the full paid report PDF in private storage (Vercel Blob). */
  fileKey: string;
  /**
   * Object key of the free summary PDF in private storage (Vercel Blob),
   * delivered by the gated free-sample flow (name + email, no payment).
   */
  freeFileKey: string;
  /**
   * Cover image for the edition, from the original Wix Stores product listing
   * (Lodestone's own designed cover art, not stock imagery). Hotlinked from
   * Wix's media CDN for now — this sandbox's network policy blocks fetching
   * the binaries to host locally (see CONTENT_NEEDED.md); move these to
   * /public before Wix is decommissioned (Epic F4).
   */
  coverImage: { url: string; width: number; height: number };
  /** Which numbered annual survey this edition is (a real fact from the source listing). */
  editionOrdinal: string;
  /** Restrained description of what this edition covers. */
  description: string;
  /**
   * Real table of contents, only where Lodestone's own product listing
   * included one verbatim. Never fabricated for editions without it.
   */
  tableOfContents?: string[];
}

function edition(
  year: string,
  price: string,
  slug: string,
  coverImage: { url: string; width: number; height: number },
  editionOrdinal: string,
  description: string,
  opts: { stripePriceId?: string; tableOfContents?: string[] } = {},
): ReportEdition {
  const amountCents = Number(price.replace(/[^0-9]/g, "")) * 100;
  return {
    year,
    price,
    amountCents,
    slug,
    purchaseUrl: `${STORE}/${slug}`,
    stripePriceId: opts.stripePriceId,
    fileKey: `reports/${slug}.pdf`,
    freeFileKey: `reports/${slug}-summary.pdf`,
    coverImage,
    editionOrdinal,
    description,
    tableOfContents: opts.tableOfContents,
  };
}

/** Single-user license note shown on every edition (from the source listing). */
export const licenseNote =
  "Single-user license. If you intend to license this data for your own clients, contact us before purchasing.";

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
    "15th",
    "Lodestone Global's 15th annual survey of private-company board compensation and governance trends. Director pay is broken out by revenue, industry, number of employees, and ownership structure.",
    { stripePriceId: "price_1TwRGSLmlez7woNa5iTVwpgY" },
  ),
  edition(
    "2025",
    "$2,750",
    "2025-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_375d598d3a1d4e41bf86f24217638408~mv2.png/v1/fit/w_2581,h_1582,q_90/file.png`, width: 2581, height: 1582 },
    "14th",
    "Lodestone Global's 14th annual survey of private-company board compensation and governance trends. Director pay is broken out by revenue, industry, number of employees, and ownership structure.",
  ),
  edition(
    "2024",
    "$2,000",
    "2024-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_dc4c704f5bb745d399b5dbd1749bf489~mv2.png/v1/fit/w_2106,h_1174,q_90/file.png`, width: 2106, height: 1174 },
    "13th",
    "Lodestone Global's 13th annual survey of private-company board compensation and governance trends. Director pay is broken out by revenue, industry, number of employees, and structure.",
  ),
  edition(
    "2023",
    "$1,750",
    "2023-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_ea1d82bcb3f449fe9237adae780f6e4c~mv2.png/v1/fit/w_1757,h_986,q_90/file.png`, width: 1757, height: 986 },
    "12th",
    "Lodestone Global's 12th annual survey of private-company board compensation and governance trends. Director pay is broken out by revenue, industry, number of employees, and structure.",
  ),
  edition(
    "2022",
    "$1,500",
    "2022-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_a6b0883668c84d679d3a98a976eaaa52~mv2.png/v1/fit/w_1983,h_1112,q_90/file.png`, width: 1983, height: 1112 },
    "11th",
    "Lodestone Global's 11th annual survey of private-company board compensation and governance trends. Director pay is broken out by revenue, industry, number of employees, and structure.",
  ),
  edition(
    "2021",
    "$1,000",
    "2021-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_f0da6e6494154e8cb627d1488f697f53~mv2.png/v1/fit/w_1820,h_997,q_90/file.png`, width: 1820, height: 997 },
    "10th",
    "Lodestone Global's 10th annual survey of private-company board compensation and governance trends. Director pay is broken out by revenue, industry, number of employees, and structure.",
  ),
  edition(
    "2020",
    "$500",
    "2020-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_143dbb69111e446dafb39a5e5068c22a~mv2.png/v1/fit/w_1797,h_1013,q_90/file.png`, width: 1797, height: 1013 },
    "9th",
    "Lodestone Global's 9th annual survey of private-company board compensation and governance trends. Director pay is broken out by revenue, industry, number of employees, and structure.",
  ),
  edition(
    "2019",
    "$250",
    "2019-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_4cbf888e5fb946ae8e6ca25a85d4dda8~mv2.jpg/v1/fit/w_1491,h_1134,q_90/file.jpg`, width: 1491, height: 1134 },
    "8th",
    "Lodestone Global's 8th annual survey of private-company board compensation and governance trends. Director pay is broken out by revenue, industry, number of employees, and structure.",
    {
      tableOfContents: [
        "Company profile",
        "Executive summary",
        "How to read the survey",
        "Summary statistics on compensation",
        "Industry breakdown",
        "Boards drive performance: the impact of boards on company performance",
        "Ownership structure breakdown",
        "Overall compensation statistics — retainer, per-meeting fee, per-teleconference fee",
        "Seven-year compensation trends in retainer, per-meeting, and per-teleconference pay",
        "Historical compensation growth",
        "Domestic vs. international pay spread",
        "Median annual retainer and per-meeting fee by revenue size",
        "Growth in total compensation by revenue",
        "Median retainer and per-meeting fee by number of employees",
        "Median retainer and per-meeting fee by industry",
        "Growth in total compensation by industry",
        "Median retainer and per-meeting fee by ownership structure",
        "Equity vs. cash compensation, and how to determine equity compensation levels",
        "Expectations to raise or lower compensation next year",
        "Ideal number of board members and meetings",
        "Chairman and committee chairman fees",
        "Board committee prevalence",
        "Women board members",
      ],
    },
  ),
  edition(
    "2017-2018",
    "$250",
    "2017-2018-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_8b66cb64880741d4a0c82586463d5e29~mv2.jpg/v1/fit/w_1172,h_977,q_90/file.jpg`, width: 1172, height: 977 },
    "7th",
    "Lodestone Global's 7th annual survey of private-company board compensation and governance trends. Director pay is broken out by revenue, industry, number of employees, and structure.",
  ),
  edition(
    "2016",
    "$250",
    "2016-private-company-board-compensation-survey",
    { url: `${WIX_MEDIA}/c3325c_7540f564fdf14ea6bdc7153da2432ed9~mv2.jpg/v1/fit/w_1284,h_994,q_90/file.jpg`, width: 1284, height: 994 },
    "6th",
    "Lodestone Global's 6th annual survey of private-company board compensation and governance trends. Director pay is broken out by revenue, industry, number of employees, and structure.",
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
