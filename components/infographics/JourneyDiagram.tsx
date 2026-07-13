const steps = ["Founder", "Operator", "Leader", "Owner", "Investor", "Steward", "Legacy"];

export function JourneyDiagram() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="hidden items-center sm:flex">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-1 flex-col items-center">
            <div className="relative flex w-full items-center">
              <div
                className={`h-px flex-1 ${i === 0 ? "bg-transparent" : "bg-brass/50"}`}
              />
              <span className="mx-2 h-2 w-2 shrink-0 rotate-45 border border-brass bg-ivory" />
              <div
                className={`h-px flex-1 ${i === steps.length - 1 ? "bg-transparent" : "bg-brass/50"}`}
              />
            </div>
            <span className="mt-5 whitespace-nowrap font-serif text-base font-light text-navy lg:text-lg">
              {step}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-0 sm:hidden">
        {steps.map((step, i) => (
          <div key={step} className="flex items-stretch gap-5">
            <div className="flex flex-col items-center">
              <span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 border border-brass bg-ivory" />
              {i < steps.length - 1 && <div className="w-px flex-1 bg-brass/50" />}
            </div>
            <span className="pb-8 font-serif text-lg font-light text-navy">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
