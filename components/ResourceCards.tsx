const topics = [
  { stage: "Govern", title: "What a growth-stage board actually needs" },
  { stage: "Scale", title: "The operating partner model, explained" },
  { stage: "Compound", title: "Diversifying beyond the operating business" },
  { stage: "Steward", title: "Preparing the next generation for wealth" },
];

export function ResourceCards() {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2">
      {topics.map((t) => (
        <div
          key={t.title}
          className="flex items-baseline justify-between gap-6 border-t border-charcoal/12 py-6"
        >
          <div className="flex flex-col gap-1">
            <span className="kicker">{t.stage}</span>
            <h3 className="font-serif text-lg font-normal text-navy">{t.title}</h3>
          </div>
          <span className="whitespace-nowrap font-sans text-[0.78rem] uppercase tracking-[0.08em] text-charcoal/35">
            Coming soon
          </span>
        </div>
      ))}
    </div>
  );
}
