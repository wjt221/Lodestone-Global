const stages = [
  { label: "Operator", detail: "Running the business day to day.", size: "text-xl sm:text-2xl" },
  { label: "Owner", detail: "Directing it without running every part.", size: "text-2xl sm:text-3xl" },
  { label: "Investor", detail: "Allocating the capital it produces.", size: "text-3xl sm:text-4xl" },
  { label: "Steward", detail: "Protecting it for the next generation.", size: "text-4xl sm:text-5xl" },
];

const outcomes = ["Freedom", "Optionality", "Time", "Continuity", "Purpose"];

export function PrincipalJourney() {
  return (
    <div className="flex flex-col gap-16">
      <div className="hidden items-end justify-between gap-6 border-b border-charcoal/25 pb-5 sm:flex">
        {stages.map((s) => (
          <div key={s.label} className="flex flex-1 flex-col items-start gap-2">
            <span className={`font-serif ${s.size} font-normal leading-none text-navy`}>{s.label}</span>
          </div>
        ))}
      </div>
      <div className="hidden justify-between gap-6 sm:flex">
        {stages.map((s) => (
          <p key={s.label} className="max-w-[12rem] flex-1 font-sans text-[0.85rem] leading-relaxed text-charcoal/60">
            {s.detail}
          </p>
        ))}
      </div>

      <div className="flex flex-col gap-8 sm:hidden">
        {stages.map((s, i) => (
          <div key={s.label} className={`flex flex-col gap-1 ${i > 0 ? "border-t border-charcoal/20 pt-6" : ""}`}>
            <span className="font-serif text-2xl font-normal text-navy">{s.label}</span>
            <p className="font-sans text-[0.88rem] leading-relaxed text-charcoal/60">{s.detail}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6 border-t border-charcoal/12 pt-12 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {outcomes.map((o, i) => (
            <span key={o} className="font-sans text-[0.78rem] uppercase tracking-[0.12em] text-charcoal/55">
              {o}
              {i < outcomes.length - 1 && <span className="ml-5 text-brass">·</span>}
            </span>
          ))}
        </div>
        <p className="font-serif text-lg font-normal italic text-navy">
          Built on trust. Focused on generations.
        </p>
      </div>
    </div>
  );
}
