const groups = [
  {
    index: "01",
    name: "Strategy, Governance, and Execution",
    detail:
      "Board formation and optimization, board education, and the operating discipline that turns a plan into results — Lodestone Global's core practice since 2013.",
  },
  {
    index: "02",
    name: "Leadership, Boards, and Organizational Capability",
    detail:
      "Executive search through our Qualified Director Database, board compensation benchmarking, and organizational design evaluated against where the business is going, not just where it is today.",
  },
  {
    index: "03",
    name: "Capital Allocation, Transactions, and Investing",
    detail:
      "M&A, capital allocation frameworks, and direct access to private equity, debt, and real estate through Lodestone Capital.",
  },
  {
    index: "04",
    name: "Family Office Infrastructure and Continuity",
    detail:
      "Family governance, trust and estate coordination, and the structures that let a family make decisions together.",
  },
];

export function CapabilityGroups() {
  return (
    <div className="flex flex-col">
      {groups.map((g) => (
        <div
          key={g.index}
          className="grid grid-cols-1 gap-4 border-t border-charcoal/15 py-8 last:border-b sm:grid-cols-[auto_1fr] sm:gap-10"
        >
          <span className="index-number">{g.index}</span>
          <div className="flex flex-col gap-2 sm:max-w-2xl">
            <h3 className="font-serif text-xl font-normal text-navy">{g.name}</h3>
            <p className="font-sans text-[0.92rem] leading-relaxed text-charcoal/60">{g.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
