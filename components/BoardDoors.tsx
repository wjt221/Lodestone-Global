import Link from "next/link";
import { Container } from "./Container";
import { slugifyCapability } from "@/lib/slug";

/**
 * The four doors named in the headline.
 *
 * Most people arriving here searched something specific: how to build a board,
 * what to pay directors, how to run a better board meeting. Previously the only
 * routes out of the hero were "Schedule a Conversation" and a link to the holding
 * company, so a visitor with a concrete question had nowhere to go that answered
 * it. The headline promised four things and none of them was clickable.
 *
 * Each door links to the matching capability on /governance-advisory rather than
 * to a page of its own: four thin pages would compete with each other for the
 * same terms, which is the problem the audit found on the old site.
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
      <Container className="py-16 md:py-20">
        <h2 className="font-sans text-[0.72rem] uppercase tracking-[0.16em] text-brass-ink">
          Where owners usually start
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {DOORS.map((d) => (
            <li key={d.verb} className="border-t border-charcoal/15 pt-6">
              <Link
                href={`/governance-advisory#${slugifyCapability(d.capability)}`}
                className="group flex flex-col gap-3"
              >
                <span className="font-serif text-[1.6rem] leading-none text-navy group-hover:text-brass-ink">
                  {d.verb}
                </span>
                <span className="font-sans text-[0.9rem] leading-relaxed text-charcoal/70">
                  {d.line}
                </span>
                <span className="mt-1 font-sans text-[0.9rem] text-navy/75 underline decoration-charcoal/25 underline-offset-4 group-hover:text-brass-ink">
                  {d.capability} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
