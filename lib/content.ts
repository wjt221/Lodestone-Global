/**
 * Single source of truth for site content.
 *
 * FACTUAL INTEGRITY POLICY
 * Only facts confirmed from Lodestone source material (or supplied in the
 * project brief) appear here as publishable copy. Anything unverified is either
 * omitted or phrased qualitatively, and is tracked in CONTENT_NEEDED.md. No
 * invented statistics, performance figures, awards, or client outcomes.
 *
 * Fields flagged `// NEEDS CONFIRMATION` are best-effort from source snippets
 * and should be re-verified against the live pages before final publication.
 */

import { latestEdition } from "./reports";

/**
 * Lodestone's own Wix media CDN, still the host for assets this build cannot
 * pull down locally (the sandbox network policy blocks static.wixstatic.com;
 * see CONTENT_NEEDED.md). Already an allowed remote host in next.config.js.
 * Move these into /public before Wix is decommissioned.
 *
 * Portraits are requested through Wix's `fill` transform with `al_t` (align
 * top) so a head is never cropped out of a portrait-ratio frame.
 */
const WIX_MEDIA = "https://static.wixstatic.com/media";

export type StageId = "govern" | "scale" | "compound" | "steward";

export interface Business {
  id: StageId;
  /** Framework verb used as the homepage storytelling device. */
  stage: string;
  /** Real entity name. */
  name: string;
  /** Short role in the ecosystem, one line. */
  role: string;
  href: string;
  /** One real, specific proof point about this business. */
  evidence: string;
  /** Plain-English description, one to two sentences. */
  summary: string;
  /** Three to five principal capabilities. */
  capabilities: string[];
  /** Logo asset if an approved file exists in /public/logo, else null. */
  logo: { src: string; width: number; height: number } | null;
  /** External link to the live property, where one exists. */
  external?: string;
}

export const businesses: Business[] = [
  {
    id: "govern",
    stage: "Govern",
    name: "Lodestone Global",
    role: "Private-company governance and strategic advisory",
    href: "/governance-advisory",
    evidence: "In the private-company board market since 2013",
    summary:
      "Lodestone Global helps private and family-owned companies build, optimize, and educate the boards they actually need, and finds the directors and executives to fill them. It maintains proprietary board compensation research and a curated database of qualified directors.",
    capabilities: [
      "Board formation",
      "Board optimization",
      "Director and executive search",
      "Board compensation benchmarking",
      "Board facilitation and education",
    ],
    logo: { src: "/logo/lodestone-global-horizontal-navy.png", width: 1000, height: 287 },
  },
  {
    id: "scale",
    stage: "Scale",
    name: "E3 Scale Network",
    role: "An operating-partner network for founder-led businesses",
    href: "/e3-scale-network",
    evidence: "For $20M+ founder-led companies. Built on Envision, Execute, Expand",
    summary:
      "E3 pairs founder-led companies with senior Operating Partners who work alongside owners and management to professionalize and scale the business.",
    capabilities: [
      "Senior Operating Partners",
      "Execution systems and management cadence",
      "Organizational design and leadership development",
      "Capital allocation and M&A integration",
      "Technology and AI enablement",
    ],
    logo: { src: "/logo/e3-icon-navy.png", width: 700, height: 497 },
    external: "https://www.e3scale.com",
  },
  {
    id: "compound",
    stage: "Compound",
    name: "Lodestone Capital",
    role: "A principal-led investment platform",
    href: "/lodestone-capital",
    evidence: "Invests alongside founders and family offices",
    summary:
      "Lodestone Capital partners with founder-led and family-owned businesses to support growth, governance, and capital strategy, drawing on the executive relationships built across the wider practice.",
    capabilities: [
      "Private equity",
      "Real estate",
      "Select tactical opportunities",
      "Co-investments",
      "Founder and family investment opportunities",
    ],
    logo: { src: "/logo/lodestone-capital-horizontal-navy.png", width: 1000, height: 383 },
  },
  {
    id: "steward",
    stage: "Steward",
    name: "Lodestone Family Advisors",
    role: "An independent multi-family-office platform",
    href: "/family-advisors",
    evidence: "Single-family-office capability, without building one",
    summary:
      "Lodestone Family Advisors gives entrepreneurial families the capabilities and coordination of a single-family office without having to build every function internally.",
    capabilities: [
      "Strategic wealth advisory and investment oversight",
      "Family governance",
      "Estate and trust coordination",
      "Risk management and consolidated reporting",
      "Next-generation preparation",
    ],
    logo: { src: "/logo/lodestone-family-advisors-vertical-navy.png", width: 900, height: 446 },
  },
];

export function getBusiness(id: StageId): Business {
  const found = businesses.find((b) => b.id === id);
  if (!found) throw new Error(`Unknown business: ${id}`);
  return found;
}

/**
 * Primary navigation. Owner-facing labels map onto the underlying routes:
 * Board Advisory -> governance, Operating Partners -> E3, Investments ->
 * Capital, Family Office -> Family Advisors. Insights carries a small submenu.
 * Contact is reached through the persistent "Schedule a Conversation" button.
 */
export interface NavChild {
  href: string;
  label: string;
}
export interface NavItem {
  href: string;
  label: string;
  children?: NavChild[];
}

export const primaryNav: NavItem[] = [
  // Board Advisory leads and is the only business carrying a submenu. Board
  // work is why most visitors arrive (they search "build a board", "board
  // compensation"), yet it previously sat as one of five equal, flat items.
  // Placing it first and exposing its five capabilities gives the core
  // offering the structural weight the traffic reflects; the anchors match the
  // capability sections on /governance-advisory and the doors on the homepage.
  {
    href: "/governance-advisory",
    label: "Board Advisory",
    children: [
      { href: "/governance-advisory", label: "Overview" },
      { href: "/governance-advisory#board-formation", label: "Board formation" },
      { href: "/governance-advisory#board-optimization", label: "Board optimization" },
      {
        href: "/governance-advisory#board-facilitation-and-education",
        label: "Facilitation & education",
      },
      {
        href: "/governance-advisory#director-and-executive-search",
        label: "Director & executive search",
      },
      {
        href: "/governance-advisory#board-compensation-benchmarking",
        label: "Compensation benchmarking",
      },
    ],
  },
  { href: "/e3-scale-network", label: "Operating Partners" },
  { href: "/lodestone-capital", label: "Investments" },
  { href: "/family-advisors", label: "Family Office" },
  {
    href: "/insights",
    label: "Insights",
    children: [
      { href: "/insights", label: "Articles" },
      { href: "/research", label: "Board Compensation Reports" },
      { href: "/case-studies", label: "Case Studies" },
    ],
  },
  { href: "/about", label: "About" },
];

export const CTA_PRIMARY = { label: "Schedule a Conversation", href: "/contact" };
export const CTA_SECONDARY = { label: "Explore the Lodestone Ecosystem", href: "/about#ecosystem" };

export const CONTACT = {
  email: "info@lodestoneglobal.com", // CONFIRMED — public address on lodestoneglobal.com
  phone: "(973) 397-5355", // CONFIRMED — published on lodestoneglobal.com
  phoneHref: "tel:+19733975355",
  location: "Morristown, New Jersey",
  linkedin: "https://www.linkedin.com/company/lodestone-global",
  legalEntity: "Lodestone Global Advisory, LLC", // CONFIRMED — site footer copyright
  founded: 2013, // CONFIRMED across LinkedIn and multiple sources
};

/**
 * Confirmed proof points for the credibility strip. Deliberately qualitative:
 * no unverified counts (e.g. number of boards) are published here.
 */
export const proofPoints: { label: string; detail: string }[] = [
  {
    label: "Since 2013",
    detail: "Serving private and family-owned companies in the board market.",
  },
  {
    label: "Proprietary research",
    detail: "One of the most comprehensive private-company board compensation studies, published annually.",
  },
  {
    label: "Director network",
    detail:
      "The Qualified Director Database™, a curated network of thousands of experienced directors and executives.",
  },
  {
    label: "One relationship",
    detail: "Governance, operating, investing, and family-wealth capability under a single team.",
  },
];

/**
 * Recognition section. The questions a principal starts asking as ownership
 * grows, written so the right reader recognizes their own situation. Editorial,
 * not an icon grid.
 */
export const ownerQuestions: string[] = [
  "How do I build a company that no longer depends entirely on me?",
  "What should the board do now that the business is more complex?",
  "Where should the capital the company produces go next?",
  "How do we organize investments, advisors, and family decisions?",
  "What must be in place before ownership passes to the next generation?",
];

/**
 * The Principal Journey: how a principal's role, defining question, and the
 * Lodestone capability that matters most all change as ownership matures.
 * A progression, not four generic columns. Outcomes are kept understated and
 * listed together rather than shown as floating decorative words.
 */
export interface JourneyStage {
  stage: string;
  role: string;
  question: string;
  capability: { label: string; href: string };
  outcome: string;
}

export const principalJourney: JourneyStage[] = [
  {
    stage: "Operator",
    role: "Build a company that can execute without every decision returning to the founder.",
    question: "How do I build a company that no longer depends entirely on me?",
    capability: { label: "E3 Scale Network", href: "/e3-scale-network" },
    outcome: "Freedom",
  },
  {
    stage: "Owner",
    role: "Direct the company through governance, leadership, and disciplined capital allocation.",
    question: "What should the board do now that the business is more complex?",
    capability: { label: "Governance Advisory", href: "/governance-advisory" },
    outcome: "Optionality",
  },
  {
    stage: "Investor",
    role: "Deploy the capital the company produces across operating and non-operating assets.",
    question: "Where should the capital the company produces go next?",
    capability: { label: "Lodestone Capital", href: "/lodestone-capital" },
    outcome: "Time",
  },
  {
    stage: "Steward",
    role: "Prepare the structures, people, and next generation that will carry ownership forward.",
    question: "What must be in place before ownership passes to the next generation?",
    capability: { label: "Family Advisors", href: "/family-advisors" },
    outcome: "Continuity",
  },
];

/** Understated outcomes of the full journey, listed together, not floated. */
export const journeyOutcomes = ["Freedom", "Optionality", "Time", "Continuity", "Purpose"];

/** How we work: three steps, no decorative icons. */
export const howWeWork: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Understand the whole picture",
    body: "We begin with the owner's business, family, capital, objectives, and constraints rather than treating each assignment in isolation.",
  },
  {
    step: "02",
    title: "Bring the right capability",
    body: "We engage the appropriate Lodestone team without forcing the client into services they do not need.",
  },
  {
    step: "03",
    title: "Stay accountable over time",
    body: "We preserve institutional knowledge and remain available as the company, capital, and family evolve.",
  },
];

/**
 * Representative engagements. Drawn from the shape of Lodestone's published
 * case studies but written at a safe altitude: no unverified financial
 * outcomes, awards, or named third parties. Details are combined or anonymized
 * to protect confidentiality. Specific published results are tracked in
 * CONTENT_NEEDED.md pending verification from the live case-study pages.
 */
export const engagements: {
  sector: string;
  situation: string;
  mandate: string;
  work: string;
  named?: boolean;
}[] = [
  {
    sector: "Family-owned enterprise",
    situation:
      "Diesco Ltd., a family-owned business, wanted its board to focus on a small number of clear strategic goals.",
    mandate: "Build and facilitate a board organized around the company's strategy.",
    work: "In the two years after implementing the board, the company's earnings nearly quadrupled, and the board was recognized as Private Company Advisory Board of the Year (as reported in Forbes).",
    named: true,
  },
  {
    sector: "Food and beverage",
    situation:
      "A multigenerational, family-owned food distribution business preparing for a leadership transition.",
    mandate: "Form an independent board and strengthen governance ahead of the next generation.",
    work: "Defined the board's mandate against the company's strategy, then recruited independent directors with directly relevant industry and operating experience.",
  },
  {
    sector: "Real estate",
    situation:
      "A large, privately held multifamily real estate operator seeking outside perspective on strategy and oversight.",
    mandate: "Build a board with institutional real estate and operating expertise.",
    work: "Recruited directors who had led real estate operations at large institutions, adding independent oversight without displacing owner control.",
  },
  {
    sector: "Family enterprise",
    situation:
      "A family whose operating-company wealth had grown more complex than its existing advisors could coordinate.",
    mandate: "Bring the coordination of a family office without building one from scratch.",
    work: "Aligned investment oversight, estate and trust planning, and a family governance framework around the family's own objectives.",
  },
];

/**
 * Insights. Only real, existing Lodestone content and destinations. Where a
 * direct article URL is not confirmed, the card points to the relevant live
 * section rather than a fabricated deep link. Dates left null render without a
 * date rather than inventing one.
 */
export interface Insight {
  category: string;
  title: string;
  date: string | null;
  summary: string;
  href: string;
  cta: string;
  external?: boolean;
  /**
   * Card artwork. Every migrated article already carried its own Wix cover
   * image and every survey edition its own designed cover, but nothing outside
   * /research ever rendered them -- the listings were headline-and-paragraph
   * only, which is most of why the insights rows read as flat. These are
   * Lodestone's own images, so the subject can't be mismatched the way a
   * hand-picked stock photo can.
   */
  image?: { src: string; width: number; height: number };
}

/**
 * Featured research card for the board compensation survey. The full editions
 * are sold on the current store; this points there until the /research page
 * (scope item C1) is live.
 */
export const researchCard: Insight = {
  category: "Research",
  title: "Private Company Board Compensation Survey",
  date: null, // published annually; latest edition is 2026
  summary:
    "One of the most comprehensive studies of how private companies compensate their directors, with data by revenue, industry, company size, and structure, across the United States and internationally.",
  href: "/research",
  cta: "View the research",
  image: {
    src: latestEdition.coverImage.url,
    width: latestEdition.coverImage.width,
    height: latestEdition.coverImage.height,
  },
};

/**
 * Leadership. Only individuals with a confirmed name, role, and biography.
 * Incomplete entries are omitted rather than shown as placeholders (see brief).
 * Headshots are pending; entries render a monogram, never a broken image or
 * staged stock photo. Additional team members to be added from the live roster
 * (see CONTENT_NEEDED.md).
 */
/** Leaders are grouped by business, reusing the same ids as `businesses`. */
export type LeaderOrg = StageId;

/**
 * One person's role at one business. A person spans more than one entry only
 * where that is genuinely true (Andrew Halliday holds roles at both E3 and
 * Lodestone Family Advisors).
 *
 * `title` is optional on purpose, and serves two different needs.
 *
 * 1. Accuracy: an unconfirmed title renders the person under their business
 *    with no title, rather than publishing a guess.
 * 2. Editorial restraint: the team page does not need every role spelled out.
 *    Dropping a title is a one-line edit here and costs nothing, because the
 *    markup simply carries less. Publishing a WRONG title is the only version
 *    that causes harm, so sparse is always the safe direction to trim toward.
 *
 * Keep titles where they carry weight for a buyer: principals, heads of a
 * practice, and regulated designations. Junior and support roles can be name
 * plus business only.
 */
/**
 * How a person relates to a business. This is not cosmetic: it decides whether
 * the markup says `worksFor` (employment) or `affiliation`, and asserting
 * employment that does not exist is the kind of mismatch search engines
 * cross-check against LinkedIn.
 *
 *   staff    employed by that business
 *   advisor  advises it, not employed by it
 *   affiliate  employed by another firm, delivering a capability into the
 *              ecosystem (see `Leader.employer`)
 *
 * Note: "affiliate", not "partner". "Partner" is also a seniority title here
 * (Sam Tenenbaum is a Partner at Lodestone Global and is staff), so reusing the
 * word for the relationship would make the data ambiguous to read.
 */
export type LeaderRelationship = "staff" | "advisor" | "affiliate";

export interface LeaderRole {
  org: LeaderOrg;
  title?: string;
  /** Defaults to "staff" when omitted. */
  relationship?: LeaderRelationship;
}

export interface Leader {
  name: string;
  roles: LeaderRole[];
  /**
   * Approved biography. Optional: an entry with a confirmed name and role but
   * no approved bio yet renders name, role, and a neutral monogram, and hides
   * the bio field rather than exposing placeholder copy (see brief). Supply
   * approved copy for any entry left without a bio.
   */
  bio?: string;
  linkedin?: string; // NEEDS CONFIRMATION before enabling
  photo?: string;
  /**
   * Actual employer, for people whose relationship is "affiliate". Omitted until
   * the exact legal name is confirmed: a wrong employer is worse than none.
   */
  employer?: string;
}


export const leadership: Leader[] = [
  // ---- Lodestone Global ----
  {
    name: "William Tenenbaum",
    // Holds a role in all four businesses. Only the Lodestone Global title is
    // confirmed; the other three render under their business without a title
    // until supplied. NEEDS CONFIRMATION — titles at E3, Capital and LFA.
    roles: [
      { org: "govern", title: "Founder and Managing Partner" },
      { org: "scale" },
      { org: "compound" },
      { org: "steward" },
    ],
    photo: `${WIX_MEDIA}/c3325c_5e6e1d60117749728698bfbe2bbeb52e~mv2.jpg/v1/fill/w_800,h_1000,al_t,q_85/portrait.jpg`,
    bio: "William Tenenbaum founded Lodestone Global to help private companies build, optimize, and educate high-performing boards. He brings more than two decades of investing and governance experience across private companies, family enterprises, and the public markets, including work as a portfolio manager at a fundamental hedge fund. He studied at NYU Stern and is an active member of YPO.",
  },
  {
    name: "Sam Tenenbaum",
    // "Partner" is the seniority title. Relationship is staff, not "affiliate".
    roles: [{ org: "govern", title: "Partner" }],
  },
  {
    name: "Marissa Levin",
    // NEEDS CONFIRMATION — is Chief Client Officer still current?
    roles: [{ org: "govern", title: "Chief Client Officer" }],
    photo: `${WIX_MEDIA}/c3325c_5505a5a2e8184b52a4c79c8b7d2380db~mv2.jpg/v1/fill/w_800,h_1000,al_t,q_85/portrait.jpg`,
    bio: "Marissa Levin serves Lodestone in a consultative capacity as Chief Client Officer. A long-time entrepreneur, speaker, and growth strategist, she is the author of Built to SCALE, on how companies create durable growth through effective advisory boards, and brings deep experience in leadership development and company culture.",
  },
  {
    name: "Ken Munkacy",
    roles: [{ org: "govern", title: "Advisor", relationship: "advisor" }],
    // BIO PENDING APPROVAL — no invented career history is shown.
  },
  {
    name: "Lynn Clarke",
    roles: [{ org: "govern", title: "Advisor", relationship: "advisor" }],
    // BIO PENDING APPROVAL
  },
  {
    name: "Ryan Niles",
    roles: [{ org: "govern", title: "Advisor", relationship: "advisor" }],
    photo: `${WIX_MEDIA}/c3325c_b5b6cab6e4cb4e14bbfb5ac5b11876e3~mv2.jpg/v1/fill/w_800,h_1000,al_t,q_85/portrait.jpg`,
    // BIO PENDING APPROVAL
  },

  // ---- E3 Scale Network ----
  {
    name: "Adam Eiseman",
    roles: [{ org: "scale", title: "President" }],
  },
  {
    name: "Andrew Halliday",
    // Genuinely spans two businesses. This is the kind of thing the grouped,
    // labelled team page shows well and an unlabelled list would hide.
    // CCO confirmed as Chief Compliance Officer (William, 2026-08-20). Worth
    // keeping accurate rather than trimming: for an advisory firm it is a
    // regulated designation, and it is the one title on this page a
    // family-office prospect may check against the firm's regulatory filings.
    roles: [
      {
        // Entity tags ("E3", "LFA") deliberately dropped from the displayed
        // title: the team is shown as one group, without saying who sits in
        // which company. The Chief Compliance Officer designation stays -- for
        // an advisory firm it is regulated, and it is the one title on this
        // page a family-office prospect may check against the firm's
        // regulatory filings. The org is still carried in the role data below
        // for structured data.
        org: "scale",
        title: "Head of Operating Partners · COO and Chief Compliance Officer",
      },
      { org: "steward", title: "Chief Operating Officer and Chief Compliance Officer" },
    ],
  },
  {
    name: "Dan Levin",
    roles: [{ org: "scale", title: "Head of Membership" }],
  },
  {
    name: "Carolina Morales",
    roles: [{ org: "scale", title: "Project Manager and Executive Assistant" }],
  },
  {
    name: "Andy Friere",
    // NEEDS CONFIRMATION — spelling. "Freire" is the more common form.
    roles: [{ org: "scale", title: "Advisor", relationship: "advisor" }],
  },

  // ---- Lodestone Capital ----
  {
    name: "Tyler Errickson",
    roles: [{ org: "compound", title: "Chief Investment Officer" }],
  },

  // ---- Lodestone Family Advisors ----
  {
    name: "Alex Harris",
    roles: [{ org: "steward", title: "President and Chief Investment Officer" }],
  },
  {
    name: "Bill van Pelt",
    // Employed by Midcontinent, partnering into the ecosystem through trust and
    // estate. NOT LFA staff: `worksFor: Lodestone Family Advisors` would be false.
    // NEEDS CONFIRMATION — exact legal name of the Midcontinent entity, and the
    // capitalisation of "van Pelt". `employer` stays unset until the name is
    // confirmed, so no employer is asserted rather than the wrong one.
    roles: [{ org: "steward", title: "Head of Trust and Estate", relationship: "affiliate" }],
  },
  {
    name: "Booker Brancheau",
    roles: [{ org: "steward", title: "Senior Associate" }],
  },
  {
    name: "Eva Creixell",
    // Midcontinent, partnering through trust and estate. See Bill van Pelt above.
    roles: [{ org: "steward", title: "Associate", relationship: "affiliate" }],
  },
];

const RELATIONSHIP_ORDER: Record<LeaderRelationship, number> = {
  staff: 0,
  affiliate: 1,
  advisor: 2,
};

function relationshipRank(role: LeaderRole): number {
  return RELATIONSHIP_ORDER[role.relationship ?? "staff"];
}

/**
 * The whole team as one roster, each person appearing exactly once.
 *
 * This used to return leaders grouped under a business heading, with a quiet
 * "Also across ..." line for anyone who spans several. Lodestone asked for the
 * opposite: one full team, with no indication of which company anyone sits in.
 * So the grouping, the business headings and the span line are all gone from
 * the page.
 *
 * The `roles` data behind it is untouched, and still carries each person's real
 * org and relationship. That is deliberate -- personJsonLd reads it to emit an
 * accurate `worksFor` / `affiliation`, and asserting employment that does not
 * exist is the mismatch search engines cross-check against LinkedIn. What
 * changed is what the page shows, not what the site claims.
 *
 * Order is by relationship, not alphabetical: staff, then advisors, then people
 * employed by a partner firm. Within each the source order is preserved, which
 * keeps principals near the top. `relationship` is still surfaced for
 * affiliates, because "Partner firm" says someone is not Lodestone staff --
 * that is a factual disclosure, not a statement about which business they work
 * for.
 */
export function leadershipRoster(): { leader: Leader; role: LeaderRole }[] {
  return leadership
    .map((leader) => ({ leader, role: leader.roles[0] }))
    .sort((a, b) => relationshipRank(a.role) - relationshipRank(b.role));
}

/**
 * Extended detail for each dedicated business page. Overview prose, a set of
 * capability groups (name + description), and page metadata. Confirmed facts
 * only; qualitative where a figure is unverified.
 */
export interface CapabilityGroup {
  name: string;
  detail: string;
  /** The problem that typically brings a client to this capability. */
  challenge: string[];
  /** What Lodestone delivers in response. */
  value: string[];
}

export interface BusinessDetail {
  eyebrow: string;
  heading: string;
  intro: string;
  overview: string[];
  capabilityGroups: CapabilityGroup[];
  /** How an engagement works: three concrete steps, distinct per practice. */
  engagement: { step: string; title: string; body: string }[];
  /** A single published evidence figure, with its source, where one exists. */
  evidenceStat?: { value: string; label: string; source: string };
  /** A restrained recognition line (published references, no superlatives). */
  recognition?: string;
  /** A published client testimonial, used as a pull quote. */
  testimonial?: { quote: string; attribution: string };
  /** Slugs of related, already-published insights (see lib/articles.ts). */
  relatedArticleSlugs?: string[];
  /** Optional closing note, e.g. how the business fits the wider practice. */
  note?: string;
  /** Optional FAQ, rendered as content and as FAQPage structured data. */
  faq?: { q: string; a: string }[];
  meta: { title: string; description: string };
}

export const businessDetail: Record<StageId, BusinessDetail> = {
  govern: {
    eyebrow: "Govern",
    heading: "Governance advisory for private and family-owned companies.",
    intro:
      "Lodestone Global has worked in the private-company board market since 2013, helping owners build, optimize, and educate the boards their companies actually need.",
    overview: [
      "Most private companies do not need the board of a public company. They need directors who understand ownership, who have run businesses of their own, and who will hold management to a strategy rather than a checklist. That is the board Lodestone Global helps owners build.",
      "The practice spans the full life of a board: defining its mandate against the company's strategy, recruiting the right directors, benchmarking how they are paid, and keeping the board effective as the business changes.",
    ],
    capabilityGroups: [
      {
        name: "Board formation",
        detail:
          "Define the board's mandate, develop director requirements from the strategy, and attract directors who can advance it.",
        challenge: [
          "The board's role was never defined against the company's actual strategy.",
          "Director searches rely on personal networks rather than a clear set of requirements.",
          "Owners are unsure what a private-company board should even do.",
        ],
        value: [
          "A board mandate built from the company's strategy, not a generic template.",
          "Director requirements defined before any search begins.",
          "Access to a curated network of directors who have run businesses like this one.",
        ],
      },
      {
        name: "Board optimization",
        detail:
          "Assess and strengthen an existing board, from composition and cadence to the work directors are actually asked to do.",
        challenge: [
          "An existing board meets on schedule but adds little strategic value.",
          "Meeting cadence and agendas have drifted away from what the business needs.",
          "It is unclear whether the board's composition still matches the company's stage.",
        ],
        value: [
          "An honest assessment of the board's composition, cadence, and actual work.",
          "A concrete plan to close the gaps, not just a diagnosis.",
          "Continued involvement until the board operates the way it should.",
        ],
      },
      {
        name: "Director and executive search",
        detail:
          "Draw on the Qualified Director Database™, a curated network of thousands of experienced directors and executives, to fill board seats and leadership roles.",
        challenge: [
          "A board seat or executive role needs to be filled with someone the owner can trust.",
          "General search firms rarely understand private-company or family-owned dynamics.",
          "Confidentiality matters more than it would for a public search.",
        ],
        value: [
          "A network built specifically around private-company and family-owned governance.",
          "Candidates matched to the board's mandate, not a generic job description.",
          "A confidential process suited to closely held companies.",
        ],
      },
      {
        name: "Board compensation benchmarking",
        detail:
          "Set director pay using proprietary private-company board compensation research, by revenue, industry, size, and structure.",
        challenge: [
          "There is no obvious market data for what a private-company director should be paid.",
          "Public-company compensation surveys do not reflect this company's size or structure.",
          "Overpaying or underpaying directors both carry real costs.",
        ],
        value: [
          "Proprietary compensation data segmented by revenue, industry, size, and structure.",
          "Published annually, so the benchmark stays current.",
          "A defensible basis for what the board is paid, and why.",
        ],
      },
      {
        name: "Board facilitation and education",
        detail:
          "Facilitate board work and educate directors and owners through seminars and programs built for private companies.",
        challenge: [
          "Board meetings run long and rarely reach a real decision.",
          "New directors do not know what is expected of them at a private company.",
          "Owners want their board better educated but lack the material to do it.",
        ],
        value: [
          "Facilitation that keeps board time focused on the decisions that matter.",
          "Seminars and programs built specifically for private-company boards.",
          "Ongoing education for directors and owners, not a one-time session.",
        ],
      },
    ],
    engagement: [
      {
        step: "01",
        title: "Define the mandate",
        body: "Start from the owner's strategy and define what the board actually needs to accomplish, before any search begins.",
      },
      {
        step: "02",
        title: "Recruit the right directors",
        body: "Draw on the network to find directors chosen for the work the company needs done, not for a title.",
      },
      {
        step: "03",
        title: "Keep the board effective",
        body: "Benchmark director pay, facilitate the board's work, and revisit its composition as the business changes.",
      },
    ],
    evidenceStat: {
      value: "90%",
      label: "of private companies reported increased EBITDA after implementing a board of directors",
      source: "2026 Private Company Board Compensation Survey",
    },
    recognition:
      "Lodestone's clients have been recognized as Advisory Board of the Year, and its work and research have appeared in Directors & Boards, Private Company Director, Family Business, and Forbes.",
    testimonial: {
      quote:
        "Lodestone Global has been absolutely instrumental in the process of creating an advisory board for my family business. … I am even more convinced than before that we will greatly benefit from the outcome of this process.",
      attribution: "Jeff Tapick, President & CEO, Martin Preferred Foods",
    },
    relatedArticleSlugs: [
      "improving-board-performance",
      "attracting-top-board-members",
      "advisory-board-readiness",
    ],
    faq: [
      {
        q: "How is a private company board different from a public company board?",
        a: "A private company board is built for the owner's strategy, not a regulatory checklist. It is usually smaller, more hands-on, and staffed with directors who have run businesses of their own and understand ownership, rather than directors focused primarily on public-market compliance.",
      },
      {
        q: "When does a private company need an independent board?",
        a: "Common triggers are outgrowing founder-led decision-making, preparing for a transaction or succession, bringing in outside capital, or wanting independent oversight and accountability as the business scales.",
      },
      {
        q: "What is board compensation benchmarking?",
        a: "It is setting director pay against real market data. Lodestone Global maintains proprietary private-company board compensation research segmented by revenue, industry, company size, and structure, so owners can compensate their directors appropriately.",
      },
      {
        q: "Does forming a board mean the owner gives up control?",
        a: "No. A well-formed private company board adds independent perspective and accountability while preserving the owner's control, with its mandate defined around the owner's objectives.",
      },
    ],
    meta: {
      title: "Governance Advisory",
      description:
        "Private company board formation, board optimization, independent director search, and board compensation benchmarking from Lodestone Global.",
    },
  },
  scale: {
    eyebrow: "Scale",
    heading: "An operating-partner network for founder-led businesses.",
    intro:
      "E3 Scale Network pairs founder-led companies with senior Operating Partners who work alongside owners and management to professionalize and scale the business.",
    overview: [
      "E3 is built around three phases, Envision, Execute, and Expand. Operating Partners are experienced senior operators, not coaches. They have built and run companies, and they work inside the business on the problems that determine whether it scales.",
      "The network gives founder-led companies the execution systems, organizational design, and management discipline that ownership transitions and growth demand, alongside a trusted peer network of others doing the same work.",
    ],
    capabilityGroups: [
      {
        name: "Senior Operating Partners",
        detail:
          "Experienced operators who work directly with owners and management teams as the business scales.",
        challenge: [
          "The founder is still the bottleneck for most operating decisions.",
          "The management team has not run a company at this scale before.",
          "Outside advice tends to come from consultants who have never operated a business.",
        ],
        value: [
          "A senior operator who has built and run companies, working alongside the team.",
          "Direct involvement in the business, not a report and a recommendation.",
          "A peer network of other founder-led companies doing the same work.",
        ],
      },
      {
        name: "Execution systems and cadence",
        detail:
          "Install the management cadence, accountability, and operating rhythm that turn a plan into results.",
        challenge: [
          "Strategy is set, but execution consistently falls short.",
          "There is no regular rhythm for reviewing progress against the plan.",
          "Accountability is unclear when something does not get done.",
        ],
        value: [
          "A management cadence built for this specific business, not a generic playbook.",
          "Clear accountability for what gets done and by when.",
          "A rhythm that turns the plan into ongoing, visible progress.",
        ],
      },
      {
        name: "Organizational design and leadership",
        detail:
          "Design the organization and develop the leadership team the next stage of growth requires.",
        challenge: [
          "The org chart reflects the company's history, not where it is headed.",
          "Leaders who got the company this far may not be the right ones for the next stage.",
          "It is unclear who should be hired, promoted, or developed next.",
        ],
        value: [
          "An organizational design built around the next stage of growth.",
          "A candid view of the leadership team's readiness for what is ahead.",
          "A development plan for the leaders the business will need.",
        ],
      },
      {
        name: "Capital allocation and M&A",
        detail:
          "Bring discipline to capital allocation, and to M&A strategy and integration when growth calls for it.",
        challenge: [
          "Capital gets allocated by instinct rather than a clear framework.",
          "An acquisition target has been identified, but there is no integration plan.",
          "Growth ambitions have outpaced the discipline behind capital decisions.",
        ],
        value: [
          "A disciplined framework for how capital gets allocated across the business.",
          "M&A strategy and integration support when growth calls for it.",
          "Capital decisions tied directly back to the company's strategy.",
        ],
      },
      {
        name: "Technology and AI enablement",
        detail:
          "Apply technology and AI where they measurably improve how the company operates.",
        challenge: [
          "Technology decisions get made ad hoc, without a clear operating case.",
          "Leadership is unsure where AI would actually help this business.",
          "New systems get adopted without the process changes to make them work.",
        ],
        value: [
          "Technology and AI applied only where they measurably improve operations.",
          "Adoption paired with the process changes needed to make it stick.",
          "An operator's judgment about what is worth building, not a vendor's.",
        ],
      },
    ],
    engagement: [
      {
        step: "Envision",
        title: "Set the plan",
        body: "Work with the owner and management to set the operating priorities and the case for the next stage of growth.",
      },
      {
        step: "Execute",
        title: "Install the operating system",
        body: "Put the management cadence, accountability, and organizational design in place that turn the plan into results.",
      },
      {
        step: "Expand",
        title: "Scale beyond the founder",
        body: "Develop leadership, bring discipline to capital allocation, and pursue M&A as the company grows.",
      },
    ],
    faq: [
      {
        q: "How is an Operating Partner different from a consultant?",
        a: "An Operating Partner has built and run companies. They work inside the business alongside the owner and management team on the decisions that determine whether it scales, rather than delivering a report and a recommendation from outside it.",
      },
      {
        q: "What do Envision, Execute and Expand actually mean?",
        a: "Envision sets the operating priorities and the case for the next stage of growth with the owner and management. Execute installs the management cadence, accountability and organizational design that turn that plan into results. Expand develops leadership, brings discipline to capital allocation, and pursues M&A as the company grows.",
      },
      {
        q: "What size company is E3 Scale Network built for?",
        a: "Founder-led and private companies at the point where the founder has become the bottleneck for most operating decisions, and where the management team has not previously run a business at the scale now required.",
      },
      {
        q: "How does E3 relate to the board work Lodestone Global does?",
        a: "Governance sets the direction and the accountability; E3 works with management on executing against it. A board often surfaces the operating gaps an Operating Partner is then brought in to close.",
      },
    ],
    note:
      "E3 operates its own platform at e3scale.com and works alongside the wider Lodestone practice.",
    meta: {
      title: "E3 Scale Network",
      description:
        "Senior Operating Partners for founder-led companies. E3 Scale Network brings execution systems, organizational design, and management discipline to scale a private company.",
    },
  },
  compound: {
    eyebrow: "Compound",
    heading: "A principal-led investment platform.",
    intro:
      "Lodestone Capital invests alongside founders and family offices, drawing on the governance and executive relationships built across the wider practice.",
    overview: [
      "Lodestone Capital is the investment arm of the practice. It invests in private companies, real estate, and select opportunities, often alongside the owners and family offices it already knows through its governance work.",
      "That relationship-led approach is the point. Direct access to experienced directors and operators informs how opportunities are evaluated, and long-standing relationships create a diligence advantage that is hard to build from the outside.",
    ],
    capabilityGroups: [
      {
        name: "Private equity",
        detail: "Direct and co-investment in private companies, often in services businesses.",
        challenge: [
          "An owner needs a capital partner who understands governance, not just a check.",
          "Standard private equity terms can conflict with a founder's long-term intentions.",
          "Diligence from an outside investor rarely reflects how the business actually runs.",
        ],
        value: [
          "Capital paired with direct governance and operating relationships.",
          "Terms structured around the owner's actual objectives.",
          "Diligence informed by direct experience sitting on boards like this one.",
        ],
      },
      {
        name: "Real estate",
        detail: "Selective real estate investment alongside experienced operators.",
        challenge: [
          "A real estate opportunity needs a partner with genuine operating experience.",
          "Passive capital alone does not add value to a real estate investment.",
        ],
        value: [
          "Investment alongside operators with direct real estate experience.",
          "A relationship-led approach rather than a purely financial one.",
        ],
      },
      {
        name: "Co-investments",
        detail: "Investing alongside family offices and aligned partners on shared opportunities.",
        challenge: [
          "A family office wants a co-investment partner it already trusts.",
          "Shared opportunities require aligned incentives, not just shared capital.",
        ],
        value: [
          "Co-investment with family offices and partners already known through the practice.",
          "Alignment built on existing governance and operating relationships.",
        ],
      },
      {
        name: "Founder and family opportunities",
        detail:
          "Investment opportunities created through the practice's founder and family relationships.",
        challenge: [
          "The best opportunities often come from relationships, not a deal process.",
          "Founders and families prefer investors who already understand their business.",
        ],
        value: [
          "Opportunities sourced through existing founder and family relationships.",
          "An investor already familiar with the company's governance and people.",
        ],
      },
      {
        name: "Strategic capital allocation",
        detail: "Working with owners on how capital is allocated across the business and beyond it.",
        challenge: [
          "Capital allocation decisions are made without a consistent framework.",
          "It is unclear how business capital and personal or family capital should interact.",
        ],
        value: [
          "A consistent framework for allocating capital across the business.",
          "Coordination between business capital and the owner's wider objectives.",
        ],
      },
    ],
    // Published by Lodestone Capital on 2026-05-27. Both figures come from the
    // firm's own announcement, carried on the site today at
    // /insights/lodestone-capital-blulabs-investment. No performance or return
    // figure is stated: none is published, and none should be added without approval.
    evidenceStat: {
      value: "$7M",
      label:
        "investment led in Blulabs, valuing the global supply chain platform at $160 million pre-money",
      source: "Lodestone Capital announcement, May 2026",
    },
    faq: [
      {
        q: "What does governance-driven investing mean in practice?",
        a: "Capital is one part of it. The other is the governance and operating insight that comes from having built and served on boards of private companies. That combination shapes which opportunities are seen, how they are assessed, and what happens after the investment is made.",
      },
      {
        q: "Who does Lodestone Capital invest alongside?",
        a: "Family offices and board clients, across private equity, private credit and real estate.",
      },
      {
        q: "How does this relate to the board advisory practice?",
        a: "Many relationships begin with governance work. That proximity to founder-led and family-owned businesses is where the perspective, and often the opportunity, comes from.",
      },
    ],
    engagement: [
      {
        step: "01",
        title: "Understand the mandate",
        body: "Begin with what the owner is trying to achieve across the business and the capital it produces.",
      },
      {
        step: "02",
        title: "Invest with discipline",
        body: "Evaluate opportunities using direct operating knowledge and relationships built through the wider practice.",
      },
      {
        step: "03",
        title: "Stay aligned",
        body: "Invest alongside owners and family offices, with incentives that match theirs over the long term.",
      },
    ],
    relatedArticleSlugs: ["lodestone-capital-blulabs-investment"],
    note:
      "Nothing here is an offer to sell or a solicitation to buy any security. Investing involves risk, including possible loss of principal.",
    meta: {
      title: "Lodestone Capital",
      description:
        "Lodestone Capital is a principal-led investment platform pursuing private equity, real estate, co-investments, and founder-led opportunities alongside family offices.",
    },
  },
  // DELIBERATELY THIN -- NOT AN OVERSIGHT.
  // The other three practices now carry proof sections (evidenceStat, faq,
  // testimonial). Family Advisors does not, because "family office", "multi-family
  // office" and adviser terminology carry regulatory weight, and a claim or FAQ here
  // could imply a service or a registration status that has not been confirmed.
  // Needs: compliance review, then an approved evidence line and FAQ.
  // See docs/design-realness-plan.md in the Wix repo.
  steward: {
    eyebrow: "Steward",
    heading: "The capabilities of a single-family office, without building one.",
    intro:
      "Lodestone Family Advisors gives entrepreneurial families the capabilities and coordination of a single-family office without having to build every function internally.",
    overview: [
      "As a family's wealth grows more complex, the hardest problem is rarely any single decision. It is coordination, keeping investment, estate and tax, governance, and the family's own objectives moving in the same direction.",
      "Lodestone Family Advisors provides that coordination as an independent multi-family-office platform: investment oversight at a chief-investment-officer level, family governance, and the connective work among a family's legal, tax, insurance, and investment advisors.",
    ],
    capabilityGroups: [
      {
        name: "Strategic wealth advisory and investment oversight",
        detail:
          "Chief-investment-officer-level oversight of investment strategy across the family's assets.",
        challenge: [
          "Investment decisions are spread across multiple advisors with no single view.",
          "There is no one accountable for the family's overall investment strategy.",
        ],
        value: [
          "CIO-level oversight across the family's full set of assets.",
          "One point of accountability for investment strategy.",
        ],
      },
      {
        name: "Family governance",
        detail: "Structures and processes that help a family make decisions together over time.",
        challenge: [
          "Family decisions get made informally, and it does not scale across generations.",
          "There is no shared process for resolving disagreements about money or the business.",
        ],
        value: [
          "Governance structures built for how this specific family makes decisions.",
          "A process that holds up as the family and its wealth grow more complex.",
        ],
      },
      {
        name: "Estate and trust coordination",
        detail: "Coordinating estate and trust planning with the family's legal and tax advisors.",
        challenge: [
          "Estate and trust plans exist but were never coordinated with each other.",
          "Legal, tax, and investment advisors work independently of one another.",
        ],
        value: [
          "Coordination across the family's legal, tax, and investment advisors.",
          "Estate and trust planning kept aligned with the family's actual objectives.",
        ],
      },
      {
        name: "Risk management and reporting",
        detail: "Risk oversight and consolidated visibility across the family's financial picture.",
        challenge: [
          "No one has a consolidated view of the family's total financial picture.",
          "Risk exposure across accounts and entities is not tracked in one place.",
        ],
        value: [
          "Consolidated reporting across the family's full financial picture.",
          "Ongoing risk oversight rather than a periodic review.",
        ],
      },
      {
        name: "Next-generation preparation",
        detail: "Preparing the next generation to inherit responsibility, not only assets.",
        challenge: [
          "The next generation is set to inherit assets but not the responsibility that comes with them.",
          "There is no plan for how the next generation gets ready to participate.",
        ],
        value: [
          "A deliberate plan to prepare the next generation for responsibility, not just inheritance.",
          "Involvement of the next generation before it becomes urgent.",
        ],
      },
    ],
    engagement: [
      {
        step: "01",
        title: "Map the whole picture",
        body: "Take stock of investments, entities, advisors, and the family's own objectives in one place.",
      },
      {
        step: "02",
        title: "Coordinate the advisors",
        body: "Align investment oversight, estate and tax planning, and governance so the work moves in one direction.",
      },
      {
        step: "03",
        title: "Prepare what comes next",
        body: "Establish family governance and prepare the next generation to inherit responsibility, not only assets.",
      },
    ],
    note:
      "Advisory services are described here in general terms. Lodestone Family Advisors does not provide legal or tax advice.",
    meta: {
      title: "Family Advisors",
      description:
        "Lodestone Family Advisors is a multi-family office platform for entrepreneurial families: investment oversight, family governance, estate coordination, and next-generation preparation.",
    },
  },
};

/** Industry sectors served, used in place of a fabricated client-logo wall. */
export const sectorsServed: string[] = [
  "Manufacturing",
  "Real estate",
  "Food and beverage",
  "Industrial services",
  "Technology",
  "Financial services",
  "Logistics and distribution",
  "Education",
  "Family holding companies",
];
