import Link from "next/link";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { slugifyCapability } from "@/lib/slug";
import { proofPoints } from "@/lib/content";

/**
 * The four doors named in the headline, plus the credibility strip that used
 * to sit directly beneath them.
 *
 * Most people arriving here searched something specific: how to build a board,
 * what to pay directors, how to run a better board meeting. Each door links to
 * the matching capability on /governance-advisory rather than to a page of its
 * own: four thin pages would compete with each other for the same terms, which
 * is the problem the audit found on the old site.
 *
 * The proof points were previously a second section immediately below this one
 * -- a four-column grid of small text on the same ivory ground, directly under
 * a four-column grid of small text. Two identical shapes in a row is what makes
 * a page read as machine-laid. Merged here they become one band with internal
 * hierarchy: the doors carry display weight because they are the offer, the
 * credentials sit under a rule at footnote scale because they are support.
 */
const DOORS = [
  {
    verb: "Build",
    capability: "Board formation",
    line: "Design the board the business actually needs, then recruit the independent directors to fill it.",
  },
  {
    verb: "Facilitate",
    capability: "Board facilitation and education",
    line: "Run the meeting, the agenda and the cadence so the board does real work.",
  },
  {
    verb: "Optimize",
    capability: "Board optimization",
    line: "Assess how an existing board performs, and fix what is holding it back.",
  },
  {
    verb: "Educate",
    capability: "Board facilitation and education",
    line: "Bring directors, owners and the next generation up to the standard the seat requires.",
  },
];

export function BoardDoors() {
  return (
    <section className="border-b border-charcoal/10 bg-ivory">
      <Container className="py-16 md:py-24">
        <h2 className="font-sans text-[0.72rem] uppercase tracking-[0.16em] text-brass-ink">
          Where owners usually start
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {DOORS.map((d, i) => (
            <Reveal key={d.verb} delay={i * 70}>
              <li className="h-full">
                <Link
                  href={`/governance-advisory#${slugifyCapability(d.capability)}`}
                  className="group flex h-full flex-col gap-3"
                >
                  {/* The rule fills brass on hover, so the whole column reads as one target. */}
                  <span
                    aria-hidden
                    className="block h-px w-full bg-charcoal/20"
                  >
                    <span className="block h-px w-0 bg-brass-ink transition-all duration-500 ease-editorial group-hover:w-full" />
                  </span>
                  <span className="mt-3 font-serif text-display-3 leading-none text-navy transition-colors group-hover:text-brass-ink">
                    {d.verb}
                  </span>
                  <span className="font-sans text-[0.9rem] leading-relaxed text-charcoal/70">
                    {d.line}
                  </span>
                  <span className="mt-auto pt-3 font-sans text-[0.85rem] text-navy/75 card-link">
                    {d.capability} →
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>

        {/* Credentials, at footnote weight under the offer. */}
        <Reveal>
          <dl className="mt-16 grid grid-cols-1 gap-x-10 gap-y-6 border-t border-charcoal/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((p) => (
              <div key={p.label} className="flex flex-col gap-1.5">
                <dt className="font-sans text-[0.68rem] uppercase tracking-widest2 text-brass-ink">
                  {p.label}
                </dt>
                <dd className="font-sans text-[0.85rem] leading-relaxed text-charcoal/75">
                  {p.detail}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
