const steps = ["Founder", "Operator", "Leader", "Owner", "Investor", "Steward", "Legacy"];

export function JourneyDiagram() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="hidden sm:flex sm:items-start">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-1 flex-col items-center gap-4">
            <div className="flex w-full items-center">
              <div className={`h-px flex-1 ${i === 0 ? "bg-transparent" : "bg-charcoal/20"}`} />
              <span className="mx-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
              <div className={`h-px flex-1 ${i === steps.length - 1 ? "bg-transparent" : "bg-charcoal/20"}`} />
            </div>
            <span className="font-serif text-base font-normal text-navy">{step}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:hidden">
        {steps.map((step, i) => (
          <div key={step} className="flex items-stretch gap-5">
            <div className="flex flex-col items-center">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
              {i < steps.length - 1 && <div className="w-px flex-1 bg-charcoal/20" />}
            </div>
            <span className="pb-7 font-serif text-lg font-normal text-navy">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
