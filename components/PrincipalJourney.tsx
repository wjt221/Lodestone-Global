import Link from "next/link";
import { principalJourney, journeyOutcomes } from "@/lib/content";

/**
 * The Principal Journey. A single principal's role, defining question, and the
 * capability that matters most all change as ownership matures. Presented as a
 * left-to-right progression rather than four identical columns: a signature arc
 * across the top, then aligned stage detail, then the understated outcomes the
 * full journey produces (listed together, not floated as decoration).
 */
export function PrincipalJourney() {
  return (
    <div className="flex flex-col gap-12">
      {/* Signature arc */}
      <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-serif text-display-3 font-normal leading-tight text-navy">
        {principalJourney.map((s, i) => (
          <span key={s.stage} className="flex items-baseline gap-x-3">
            {s.stage}
            {i < principalJourney.length - 1 && (
              <span className="text-brass" aria-hidden>
                →
              </span>
            )}
          </span>
        ))}
      </p>

      {/* Stage detail */}
      <ol className="grid grid-cols-1 border-t border-charcoal/20 sm:grid-cols-2 lg:grid-cols-4">
        {principalJourney.map((s, i) => (
          <li
            key={s.stage}
            className={`flex flex-col gap-4 py-8 sm:px-6 lg:py-10 ${
              i > 0 ? "border-t border-charcoal/12 sm:border-t-0 sm:border-l" : "sm:pl-0"
            } ${i === 2 ? "border-t sm:border-t lg:border-t-0" : ""}`}
          >
            <span className="font-sans text-[0.68rem] uppercase tracking-widest2 text-brass">
              0{i + 1} · {s.stage}
            </span>
            <p className="font-sans text-[0.95rem] leading-relaxed text-charcoal/75">{s.role}</p>
            <p className="mt-1 font-serif text-[1.05rem] font-normal leading-snug text-navy/85">
              &ldquo;{s.question}&rdquo;
            </p>
            <Link
              href={s.capability.href}
              className="mt-auto pt-2 font-sans text-[0.75rem] uppercase tracking-[0.08em] text-navy/70 transition-colors hover:text-brass"
            >
              {s.capability.label} →
            </Link>
          </li>
        ))}
      </ol>

      {/* Understated outcomes */}
      <div className="flex flex-col gap-3 border-t border-charcoal/15 pt-6 sm:flex-row sm:items-baseline sm:gap-6">
        <span className="font-sans text-[0.72rem] uppercase tracking-[0.08em] text-charcoal/45">
          What the journey is for
        </span>
        <p className="font-serif text-lg font-normal text-navy/80">
          {journeyOutcomes.join("  ·  ")}
        </p>
      </div>
    </div>
  );
}
