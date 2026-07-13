import { stages } from "@/components/stages";
import { StageIcon } from "@/components/StageIcon";
import { EditorialImage } from "@/components/EditorialImage";
import { photos } from "@/components/photos";

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
    <div className="flex flex-col">
      {stages.map((s, i) => (
        <div
          key={s.id}
          id={s.id}
          className={`grid scroll-mt-24 grid-cols-1 gap-10 border-t border-charcoal/15 py-12 lg:grid-cols-2 lg:gap-16 ${
            i === stages.length - 1 ? "border-b" : ""
          }`}
        >
          <div className={`flex flex-col gap-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
            <div className="flex items-center gap-4">
              <span className="index-number">0{i + 1}</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stone text-brass">
                <StageIcon stage={s.id} className="h-5 w-5" />
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[0.72rem] uppercase tracking-[0.08em] text-navy/60">
                {s.label}
              </span>
              <h3 className="font-serif text-2xl font-normal text-navy">{s.entity}</h3>
              <p className="mt-1 max-w-md font-sans text-[0.92rem] leading-relaxed text-charcoal/60">
                {s.detail}
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {capabilities[s.id].map((item) => (
                <li key={item} className="flex items-start gap-2 font-sans text-[0.85rem] text-charcoal/70">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <EditorialImage
            src={photos[s.id].src}
            alt={photos[s.id].alt}
            aspect="aspect-[16/10]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={i % 2 === 1 ? "lg:order-1" : ""}
          />
        </div>
      ))}

      <div className="mt-16 flex flex-col items-center gap-1 text-center">
        <p className="font-serif text-xl font-normal italic text-navy">One Principal.</p>
        <p className="font-serif text-xl font-normal italic text-navy">One Trusted Team.</p>
        <p className="font-serif text-xl font-normal italic text-navy">Every Important Decision.</p>
      </div>
    </div>
  );
}
