import { StageId } from "./stages";

export const ecosystemContent: Record<
  StageId,
  { intro: string; capabilities: string[] }
> = {
  govern: {
    intro:
      "Lodestone Global builds the governance foundation a growing company needs before it can scale responsibly: an independent board, the right executive talent, and a strategic advisory relationship that outlasts any single decision.",
    capabilities: [
      "Board formation",
      "Board optimization",
      "Executive search",
      "Board compensation",
      "Strategic advisory",
      "Board education",
    ],
  },
  scale: {
    intro:
      "E3 Scale Network embeds senior operating partners inside the business to build the execution systems, organizational design, and capital discipline that let a company grow beyond what its founder can run alone.",
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
      "AI intelligence layer",
      "Peer network",
    ],
  },
  compound: {
    intro:
      "Lodestone Capital deploys capital with the same discipline a Principal expects of their own business, across private equity, real estate, and direct co-investment.",
    capabilities: [
      "Private equity",
      "Real estate",
      "Tactical opportunities",
      "Founders Fund",
      "Co-investments",
      "Strategic capital",
    ],
  },
  steward: {
    intro:
      "Lodestone Family Advisors operates as an independent RIA multi-family office, coordinating the wealth, governance, and generational planning that let a family steward what it has built.",
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
