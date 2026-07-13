const outcomes = [
  { term: "Freedom", detail: "To choose your next chapter, not be chosen by it." },
  { term: "Optionality", detail: "Capital and counsel, ready before you need them." },
  { term: "Impact", detail: "Building something that outlasts a single decision." },
  { term: "Legacy", detail: "Value that compounds across generations, not just years." },
  { term: "Time", detail: "Judgment that returns your most limited resource." },
  { term: "Continuity", detail: "One relationship, uninterrupted by turnover or transition." },
  { term: "Purpose", detail: "Clarity about what the wealth is actually for." },
];

export function OutcomesList() {
  return (
    <dl className="grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2">
      {outcomes.map((o) => (
        <div key={o.term} className="flex flex-col gap-1 border-t border-charcoal/12 py-6">
          <dt className="font-serif text-lg font-normal text-navy">{o.term}</dt>
          <dd className="font-sans text-[0.9rem] leading-relaxed text-charcoal/60">{o.detail}</dd>
        </div>
      ))}
    </dl>
  );
}
