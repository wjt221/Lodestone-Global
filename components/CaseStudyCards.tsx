const cases = [
  {
    stage: "Govern → Scale",
    situation: "A founder-led industrial services company approaching $50M in revenue",
    engagement:
      "Formed an independent board, placed a lead operating partner, and rebuilt the executive team ahead of a planned recapitalization.",
  },
  {
    stage: "Compound",
    situation: "A third-generation manufacturing family with concentrated operating wealth",
    engagement:
      "Structured a co-investment strategy and diversified into real estate and private equity alongside the operating business.",
  },
  {
    stage: "Steward",
    situation: "A Principal eighteen months from a majority sale",
    engagement:
      "Coordinated trust and estate planning, tax structuring, and a next-generation governance framework before closing.",
  },
];

export function CaseStudyCards() {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-3">
      {cases.map((c) => (
        <div key={c.situation} className="flex flex-col gap-4 border-t border-charcoal/15 pt-6">
          <span className="kicker">{c.stage}</span>
          <h3 className="font-serif text-lg font-normal text-navy">{c.situation}</h3>
          <p className="font-sans text-[0.88rem] leading-relaxed text-charcoal/60">{c.engagement}</p>
        </div>
      ))}
      <p className="col-span-full pt-2 font-sans text-[0.75rem] text-charcoal/40">
        Representative engagements. Details are composited to protect Principal confidentiality.
      </p>
    </div>
  );
}
