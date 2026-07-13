const stages = ["Build", "Scale", "Compound", "Steward"];
const outcomes = [
  "Freedom",
  "Optionality",
  "Impact",
  "Time",
  "Continuity",
  "Purpose",
  "Legacy",
];

export function PhilosophyDiagram() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
        {stages.map((stage, i) => (
          <div key={stage} className="flex items-center gap-4 sm:gap-6">
            <span className="font-serif text-2xl font-light text-navy sm:text-4xl">
              {stage}
            </span>
            {i < stages.length - 1 && (
              <span
                className="hidden text-brass sm:inline-block"
                aria-hidden
              >
                <svg width="40" height="14" viewBox="0 0 40 14" fill="none">
                  <line x1="0" y1="7" x2="32" y2="7" stroke="currentColor" strokeWidth="1" />
                  <path d="M28 2L34 7L28 12" stroke="currentColor" strokeWidth="1" fill="none" />
                </svg>
              </span>
            )}
            {i < stages.length - 1 && (
              <span className="text-brass sm:hidden" aria-hidden>
                <svg width="14" height="32" viewBox="0 0 14 32" fill="none">
                  <line x1="7" y1="0" x2="7" y2="24" stroke="currentColor" strokeWidth="1" />
                  <path d="M2 20L7 26L12 20" stroke="currentColor" strokeWidth="1" fill="none" />
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="h-px w-24 bg-charcoal/15" />

      <div className="flex max-w-2xl flex-wrap items-center justify-center gap-x-4 gap-y-3">
        {outcomes.map((outcome, i) => (
          <div key={outcome} className="flex items-center gap-4">
            <span className="font-sans text-[0.8rem] uppercase tracking-[0.16em] text-charcoal/60">
              {outcome}
            </span>
            {i < outcomes.length - 1 && (
              <span className="h-1 w-1 rounded-full bg-brass/60" aria-hidden />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
