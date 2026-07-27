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
    logo: { src: "/logo/lodestone-global-horizontal-navy.png", width: 472, height: 177 },
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
    logo: null,
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
    logo: { src: "/logo/lodestone-capital-horizontal-navy.png", width: 503, height: 270 },
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
    logo: null,
  },
];

export function getBusiness(id: StageId): Business {
  const found = businesses.find((b) => b.id === id);
  if (!found) throw new Error(`Unknown business: ${id}`);
  return found;
}

/** Primary navigation, the conventional model requested in the brief. */
export const primaryNav = [
  { href: "/about", label: "About" },
  { href: "/governance-advisory", label: "Governance Advisory" },
  { href: "/e3-scale-network", label: "E3 Scale Network" },
  { href: "/lodestone-capital", label: "Lodestone Capital" },
  { href: "/family-advisors", label: "Family Advisors" },
  { href: "/insights", label: "Insights" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export const CTA_PRIMARY = { label: "Start a Conversation", href: "/contact" };
export const CTA_SECONDARY = { label: "Explore the Lodestone Ecosystem", href: "/about#ecosystem" };

export const CONTACT = {
  email: "inquire@lodestoneglobal.com", // NEEDS CONFIRMATION — public inquiry address
  location: "Morristown, New Jersey",
  linkedin: "https://www.linkedin.com/company/lodestone-global",
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
    detail: "A curated database of experienced director and executive candidates.",
  },
  {
    label: "One relationship",
    detail: "Governance, operating, investing, and family-wealth capability under a single team.",
  },
];

/** Moments that typically bring an owner or family to Lodestone. */
export const whoWeServe: string[] = [
  "The company has outgrown founder-led decision-making",
  "The owner needs an independent board",
  "The leadership team needs to scale",
  "Capital allocation has become more consequential",
  "A transaction or succession event is approaching",
  "Family wealth requires greater coordination",
  "The next generation must be prepared",
];

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
};

/**
 * Leadership. Only individuals with a confirmed name, role, and biography.
 * Incomplete entries are omitted rather than shown as placeholders (see brief).
 * Headshots are pending; entries render a monogram, never a broken image or
 * staged stock photo. Additional team members to be added from the live roster
 * (see CONTENT_NEEDED.md).
 */
export interface Leader {
  name: string;
  role: string;
  bio: string;
  linkedin?: string; // NEEDS CONFIRMATION before enabling
  photo?: string;
}

export const leadership: Leader[] = [
  {
    name: "William Tenenbaum",
    role: "Founder and Managing Partner",
    bio: "William Tenenbaum founded Lodestone Global to help private companies build, optimize, and educate high-performing boards. He brings more than two decades of investing and governance experience across private companies, family enterprises, and the public markets, including work as a portfolio manager at a fundamental hedge fund. He studied at NYU Stern and is an active member of YPO.",
  },
  {
    name: "Marissa Levin",
    role: "Chief Client Officer",
    bio: "Marissa Levin serves Lodestone in a consultative capacity as Chief Client Officer. A long-time entrepreneur, speaker, and growth strategist, she is the author of Built to SCALE, on how companies create durable growth through effective advisory boards, and brings deep experience in leadership development and company culture.",
  },
];

/**
 * Extended detail for each dedicated business page. Overview prose, a set of
 * capability groups (name + description), and page metadata. Confirmed facts
 * only; qualitative where a figure is unverified.
 */
export interface CapabilityGroup {
  name: string;
  detail: string;
}

export interface BusinessDetail {
  eyebrow: string;
  heading: string;
  intro: string;
  overview: string[];
  capabilityGroups: CapabilityGroup[];
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
      },
      {
        name: "Board optimization",
        detail:
          "Assess and strengthen an existing board, from composition and cadence to the work directors are actually asked to do.",
      },
      {
        name: "Director and executive search",
        detail:
          "Draw on a curated network of experienced directors and executives to fill board seats and leadership roles.",
      },
      {
        name: "Board compensation benchmarking",
        detail:
          "Set director pay using proprietary private-company board compensation research, by revenue, industry, size, and structure.",
      },
      {
        name: "Board facilitation and education",
        detail:
          "Facilitate board work and educate directors and owners through seminars and programs built for private companies.",
      },
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
      },
      {
        name: "Execution systems and cadence",
        detail:
          "Install the management cadence, accountability, and operating rhythm that turn a plan into results.",
      },
      {
        name: "Organizational design and leadership",
        detail:
          "Design the organization and develop the leadership team the next stage of growth requires.",
      },
      {
        name: "Capital allocation and M&A",
        detail:
          "Bring discipline to capital allocation, and to M&A strategy and integration when growth calls for it.",
      },
      {
        name: "Technology and AI enablement",
        detail:
          "Apply technology and AI where they measurably improve how the company operates.",
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
      },
      {
        name: "Real estate",
        detail: "Selective real estate investment alongside experienced operators.",
      },
      {
        name: "Co-investments",
        detail: "Investing alongside family offices and aligned partners on shared opportunities.",
      },
      {
        name: "Founder and family opportunities",
        detail:
          "Investment opportunities created through the practice's founder and family relationships.",
      },
      {
        name: "Strategic capital allocation",
        detail: "Working with owners on how capital is allocated across the business and beyond it.",
      },
    ],
    note:
      "Nothing here is an offer to sell or a solicitation to buy any security. Investing involves risk, including possible loss of principal.",
    meta: {
      title: "Lodestone Capital",
      description:
        "Lodestone Capital is a principal-led investment platform pursuing private equity, real estate, co-investments, and founder-led opportunities alongside family offices.",
    },
  },
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
      },
      {
        name: "Family governance",
        detail: "Structures and processes that help a family make decisions together over time.",
      },
      {
        name: "Estate and trust coordination",
        detail: "Coordinating estate and trust planning with the family's legal and tax advisors.",
      },
      {
        name: "Risk management and reporting",
        detail: "Risk oversight and consolidated visibility across the family's financial picture.",
      },
      {
        name: "Next-generation preparation",
        detail: "Preparing the next generation to inherit responsibility, not only assets.",
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
