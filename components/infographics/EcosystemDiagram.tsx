const stages = [
  {
    stage: "Build",
    entity: "Lodestone Global",
    items: ["Governance", "Board Advisory", "Executive Search", "Strategic Advisory"],
  },
  {
    stage: "Scale",
    entity: "E3 Scale Network",
    items: [
      "Operating Partners",
      "Execution Systems",
      "Organizational Design",
      "Capital Allocation",
      "AI Intelligence",
    ],
  },
  {
    stage: "Compound",
    entity: "Lodestone Capital",
    items: ["Private Equity", "Real Estate", "Strategic Capital"],
  },
  {
    stage: "Steward",
    entity: "Lodestone Family Advisors",
    items: [
      "Strategic Wealth Advisory",
      "Investment Oversight",
      "Family Governance",
      "Trust & Estate Coordination",
      "Next Generation",
    ],
  },
];

function Connector() {
  return (
    <div className="flex justify-center py-2" aria-hidden>
      <svg width="14" height="36" viewBox="0 0 14 36" fill="none" className="text-brass">
        <line x1="7" y1="0" x2="7" y2="26" stroke="currentColor" strokeWidth="1" />
        <path d="M2 22L7 30L12 22" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}

export function EcosystemDiagram() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col">
      {stages.map((s, i) => (
        <div key={s.stage} id={s.stage.toLowerCase()} className="flex scroll-mt-24 flex-col">
          <div className="flex flex-col gap-4 rounded-sm border border-charcoal/10 bg-parchment/60 px-8 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
            <div className="flex flex-col gap-1 sm:w-1/3">
              <span className="eyebrow">{s.stage}</span>
              <span className="font-serif text-xl font-light text-navy">{s.entity}</span>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 sm:w-2/3 sm:justify-end">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="font-sans text-[0.85rem] text-charcoal/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {i < stages.length - 1 && <Connector />}
        </div>
      ))}

      <div className="mt-14 flex flex-col items-center gap-2 text-center">
        <div className="mb-6 h-px w-16 bg-brass/60" />
        <p className="font-serif text-xl font-light italic text-navy sm:text-2xl">
          One Principal.
        </p>
        <p className="font-serif text-xl font-light italic text-navy sm:text-2xl">
          One Trusted Team.
        </p>
        <p className="font-serif text-xl font-light italic text-navy sm:text-2xl">
          Every Important Decision.
        </p>
      </div>
    </div>
  );
}
