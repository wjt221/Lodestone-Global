import { StageId } from "./stages";

export const ecosystemContent: Record<
  StageId,
  { intro: string; capabilities: string[] }
> = {
  govern: {
    intro:
      "Founded in 2013, Lodestone Global has assembled, consulted with, or served on more than 1,000 boards. It is the authority on private company governance: building, optimizing, compensating, and educating the boards that mid-size and family-run companies actually need.",
    capabilities: [
      "Board formation",
      "Board optimization",
      "Executive search",
      "Qualified Director Database",
      "Board compensation",
      "Strategic advisory",
      "Board education",
    ],
  },
  scale: {
    intro:
      "E3 Scale Network is a curated community for $20M+ revenue companies committed to scaling with clarity, discipline, and speed. Each company is matched with a dedicated Operating Partner — a seasoned former executive, investor, and coach who acts as the quarterback of the journey, built around Envision, Execute, Expand.",
    capabilities: [
      "Lead operating partner",
      "Delivery operating partner",
      "Strategic operating partner",
      "Execution systems",
      "Organizational design",
      "Incentive alignment",
      "Capital allocation",
      "M&A",
      "Culture",
      "Peer network",
    ],
  },
  compound: {
    intro:
      "Lodestone Capital is the investment arm of Lodestone Global, investing alongside family offices and board clients in private equity, debt, and real estate. Direct access to board and executive talent gives it an information advantage traditional private equity doesn't have — the ability to underwrite risk more precisely and move faster once it identifies value.",
    capabilities: [
      "Private equity",
      "Debt investments",
      "Real estate",
      "Tactical opportunities",
      "Founders Fund",
      "Co-investments",
      "Strategic capital",
    ],
  },
  steward: {
    intro:
      "Lodestone Family Advisors guides families through generations of prosperity: CIO-level investment management, trust and estate planning, and family governance built around a family's values, not just its balance sheet.",
    capabilities: [
      "Strategic wealth advisory",
      "Investment strategy and oversight",
      "Family governance",
      "Trust and estate coordination",
      "Tax coordination",
      "Risk and insurance",
      "Philanthropy",
      "Next-generation preparation",
    ],
  },
};
