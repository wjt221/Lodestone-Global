const capabilities = [
  {
    stage: "Govern",
    name: "Board Formation & Optimization",
    detail: "Assembling and refining the board a growing company actually needs.",
  },
  {
    stage: "Govern",
    name: "Executive Search",
    detail: "Leadership talent evaluated against where the business is going, not just where it is.",
  },
  {
    stage: "Scale",
    name: "Operating Partners",
    detail: "Senior operators embedded to build execution systems and organizational design.",
  },
  {
    stage: "Scale",
    name: "Capital Allocation & M&A",
    detail: "Disciplined frameworks for deploying capital and evaluating acquisitions.",
  },
  {
    stage: "Compound",
    name: "Private Equity & Co-Investment",
    detail: "Direct access to private equity, real estate, and tactical opportunities.",
  },
  {
    stage: "Steward",
    name: "Family Governance",
    detail: "Structures and process for how a family makes decisions together.",
  },
];

export function CapabilityCards() {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
      {capabilities.map((c) => (
        <div key={c.name} className="flex flex-col gap-2 border-t border-charcoal/12 py-7 pr-4">
          <span className="kicker">{c.stage}</span>
          <h3 className="font-serif text-lg font-normal text-navy">{c.name}</h3>
          <p className="font-sans text-[0.88rem] leading-relaxed text-charcoal/60">{c.detail}</p>
        </div>
      ))}
    </div>
  );
}
