import { stages } from "@/components/stages";
import { StageIcon } from "@/components/StageIcon";
import { OutcomeIcon, OutcomeId } from "@/components/OutcomeIcon";

const outcomes: { id: OutcomeId; label: string }[] = [
  { id: "freedom", label: "Freedom" },
  { id: "optionality", label: "Optionality" },
  { id: "impact", label: "Impact" },
  { id: "legacy", label: "Legacy" },
  { id: "time", label: "Time" },
  { id: "continuity", label: "Continuity" },
  { id: "purpose", label: "Purpose" },
];

export function PhilosophyDiagram() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="grid w-full grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
        {stages.map((s, i) => (
          <div key={s.id} className="flex flex-col items-center gap-4 px-2 text-center">
            <div className="flex w-full items-center">
              <span className={`h-px flex-1 ${i === 0 ? "bg-transparent" : "bg-charcoal/15"}`} />
              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border ${s.colorBorder} ${s.colorText}`}
              >
                <StageIcon stage={s.id} className="h-6 w-6" />
              </span>
              <span className={`h-px flex-1 ${i === stages.length - 1 ? "bg-transparent" : "bg-charcoal/15"}`} />
            </div>
            <span className={`font-sans text-[0.78rem] font-semibold uppercase tracking-[0.14em] ${s.colorText}`}>
              {s.label}
            </span>
            <span className="max-w-[10rem] font-sans text-[0.82rem] leading-snug text-charcoal/60">
              {s.detail}
            </span>
          </div>
        ))}
      </div>

      <div className="h-px w-16 bg-charcoal/15" />

      <div className="flex flex-col items-center gap-4">
        <span className="kicker">The Outcomes That Matter Most</span>
        <div className="flex max-w-3xl flex-wrap items-start justify-center gap-x-8 gap-y-6">
          {outcomes.map((o) => (
            <div key={o.id} className="flex w-20 flex-col items-center gap-2 text-center">
              <OutcomeIcon id={o.id} className="h-6 w-6 text-brass" />
              <span className="font-sans text-[0.78rem] text-charcoal/65">{o.label}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="font-serif text-lg font-normal italic text-navy">
        Built on trust. Focused on generations.
      </p>
    </div>
  );
}
