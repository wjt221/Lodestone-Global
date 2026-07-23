import { EditorialImage } from "./EditorialImage";
import { photos } from "./photos";

const facts = [
  "Advising private companies since 2013",
  "1,000+ boards assembled, consulted with, or served",
  "Governance, capital, and family office expertise under one roof",
];

const engagements = [
  {
    stage: "Govern",
    situation: "Martin Preferred Foods",
    engagement:
      "After Lodestone Global helped install its board, the company quadrupled EBITDA, attracted Goldman Sachs' first investment in the Caribbean, won “Advisory Board of the Year” from Directors & Boards, and secured supply contracts with Costco and Walmart.",
    real: true,
  },
  {
    stage: "Compound",
    situation: "A third-generation manufacturing family with concentrated operating wealth",
    engagement:
      "Structured a co-investment strategy and diversified into real estate and private equity alongside the operating business.",
    real: false,
  },
  {
    stage: "Steward",
    situation: "A Principal eighteen months from a majority sale",
    engagement:
      "Coordinated trust and estate planning, tax structuring, and a next-generation governance framework before closing.",
    real: false,
  },
];

export function EvidenceSection() {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
      <EditorialImage
        src={photos.credibility.src}
        alt={photos.credibility.alt}
        aspect="aspect-[4/5] lg:aspect-auto lg:h-full"
        sizes="(min-width: 1024px) 35vw, 100vw"
      />
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 border-b border-charcoal/15 pb-8 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-3">
          {facts.map((fact) => (
            <p key={fact} className="font-sans text-[0.8rem] uppercase tracking-[0.06em] text-charcoal/55">
              {fact}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {engagements.map((e) => (
            <div key={e.situation} className="flex flex-col gap-2">
              <span className="kicker">{e.stage}</span>
              <h3 className="font-serif text-lg font-normal text-navy">{e.situation}</h3>
              <p className="font-sans text-[0.88rem] leading-relaxed text-charcoal/60">{e.engagement}</p>
            </div>
          ))}
          <p className="pt-2 font-sans text-[0.75rem] text-charcoal/40">
            Martin Preferred Foods is a published Lodestone Global case study. The Compound and Steward
            scenarios above are composited to protect Principal confidentiality.
          </p>
        </div>
      </div>
    </div>
  );
}
