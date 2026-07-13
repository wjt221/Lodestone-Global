const contrasts = [
  {
    without: "A recruiter fills a board seat.",
    with: "We build the board around where the company is headed.",
  },
  {
    without: "A consultant delivers a plan and leaves.",
    with: "An operating partner stays to see it through.",
  },
  {
    without: "An investment bank runs a single transaction.",
    with: "A capital partner is already at the table for the next one.",
  },
  {
    without: "A wealth manager oversees the portfolio.",
    with: "A family office coordinates the wealth, the governance, and the generations after it.",
  },
];

export function WhyLodestone() {
  return (
    <div className="flex flex-col gap-10">
      <p className="max-w-2xl font-sans text-[1.05rem] leading-relaxed text-charcoal/70">
        Most Principals assemble their advisors one engagement at a time — a recruiter here, a
        consultant there, a bank for the transaction, a wealth manager for what&rsquo;s left over.
        Each does competent work. None of them see the whole picture, and none of them are
        accountable for it.
      </p>
      <div className="flex flex-col divide-y divide-charcoal/12 border-t border-charcoal/12">
        {contrasts.map((c) => (
          <div key={c.with} className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-2 sm:gap-10">
            <p className="font-sans text-[0.92rem] text-charcoal/45">{c.without}</p>
            <p className="font-serif text-[1.05rem] font-normal text-navy">{c.with}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
