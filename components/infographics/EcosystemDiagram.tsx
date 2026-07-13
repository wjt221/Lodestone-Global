import { stages } from "@/components/stages";
import { StageIcon } from "@/components/StageIcon";
import { StageIllustration } from "@/components/StageIllustration";

const capabilities: Record<string, string[]> = {
  govern: [
    "Board formation",
    "Board optimization",
    "Executive search",
    "Board compensation",
    "Strategic advisory",
  ],
  scale: [
    "Operating partners",
    "Execution systems",
    "Organizational design",
    "M&A",
    "Capital allocation",
    "AI intelligence layer",
  ],
  compound: ["Private equity", "Real estate", "Tactical opportunities", "Founders Fund", "Co-investments"],
  steward: [
    "Strategic wealth advisory",
    "Investment oversight",
    "Family governance",
    "Trust and estate coordination",
    "Risk management",
    "Next-generation preparation",
  ],
};

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-brass" aria-hidden>
      <path
        d="M3 8.5 6.2 12 13 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EcosystemDiagram() {
  return (
    <div className="flex flex-col gap-0">
      {/* Stage bar */}
      <div className="grid grid-cols-2 border border-b-0 border-navy bg-navy sm:grid-cols-4">
        {stages.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`flex items-center justify-center gap-3 py-3 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-ivory ${
              i > 0 ? "border-l border-ivory/15" : ""
            }`}
          >
            <span className="font-serif text-[0.7rem] font-normal text-brass-light">0{i + 1}</span>
            {s.label}
          </a>
        ))}
      </div>

      {/* Stage columns */}
      <div className="grid grid-cols-1 border border-charcoal/12 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((s, i) => (
          <div
            key={s.id}
            id={s.id}
            className={`flex scroll-mt-24 flex-col gap-5 border-charcoal/12 p-7 ${
              i > 0 ? "sm:border-l" : ""
            } ${i >= 2 ? "border-t sm:border-t-0" : ""}`}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-stone text-brass">
              <StageIcon stage={s.id} className="h-5 w-5" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-lg font-normal text-navy">{s.entity}</h3>
              <span className="font-sans text-[0.72rem] uppercase tracking-[0.08em] text-charcoal/50">
                {s.label}
              </span>
            </div>
            <ul className="flex flex-col gap-2">
              {capabilities[s.id].map((item) => (
                <li key={item} className="flex items-start gap-2 font-sans text-[0.85rem] text-charcoal/70">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <StageIllustration stage={s.id} className="mt-auto aspect-[4/5]" />
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-1 text-center">
        <p className="font-serif text-xl font-normal italic text-navy">One Principal.</p>
        <p className="font-serif text-xl font-normal italic text-navy">One Trusted Team.</p>
        <p className="font-serif text-xl font-normal italic text-navy">Every Important Decision.</p>
      </div>
    </div>
  );
}
