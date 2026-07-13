const facts = [
  "Independent, with no products to sell",
  "[XX] years advising entrepreneurial families",
  "Family Advisors is registered as an independent RIA",
];

export function TrustStrip() {
  return (
    <div className="border-y border-charcoal/12 bg-parchment/50">
      <div className="mx-auto flex w-full max-w-container flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:px-10 lg:px-16">
        {facts.map((fact) => (
          <p
            key={fact}
            className="font-sans text-[0.78rem] uppercase tracking-[0.08em] text-charcoal/55"
          >
            {fact}
          </p>
        ))}
      </div>
    </div>
  );
}
