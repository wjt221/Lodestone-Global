import { SafePhoto } from "./SafePhoto";
import { leadershipRoster } from "@/lib/content";

/**
 * The full team as one roster.
 *
 * Previously this was four separate lists under four business headings, with an
 * "Also across ..." line on anyone who spanned several. Lodestone asked for a
 * single team with no indication of who sits in which company, so the headings,
 * the grouping and the span line are gone. Each person's real org is still in
 * the data and still drives structured data -- see leadershipRoster().
 *
 * Portraits lead, names follow. Lodestone has real photography for three people
 * so far; the rest are names. That split is not a ranking, it is what
 * photography exists (see CONTENT_NEEDED.md). It stays a split rather than one
 * uniform grid because sixteen cells holding three photographs and thirteen
 * empty frames reads as unfinished, where a short row of real faces above a
 * clean roster reads as a masthead. Adding a `photo` to any entry in
 * lib/content.ts moves that person into the portrait row automatically; once
 * most of the team has one, collapse the two into a single grid.
 */
function Meta({
  role,
  employer,
}: {
  role: { title?: string; relationship?: string };
  employer?: string;
}) {
  return (
    <>
      {role.title && (
        <span className="font-sans text-[0.8rem] leading-relaxed text-charcoal/80">
          {role.title}
        </span>
      )}
      {/*
        Kept deliberately. "Partner firm" says this person is not Lodestone
        staff, which is a factual disclosure the rest of the site is careful
        about -- it does not say which Lodestone business anyone works for.
      */}
      {role.relationship === "affiliate" && (
        <span className="font-sans text-[0.75rem] italic leading-relaxed text-charcoal/70">
          {employer ? `In partnership with ${employer}` : "Partner firm"}
        </span>
      )}
    </>
  );
}

export function Leadership() {
  const roster = leadershipRoster();
  const withPortrait = roster.filter((m) => m.leader.photo);
  const rest = roster.filter((m) => !m.leader.photo);

  return (
    <div className="flex flex-col gap-12">
      {withPortrait.length > 0 && (
        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:grid-cols-4">
          {withPortrait.map(({ leader, role }) => (
            <li key={leader.name} className="group flex flex-col gap-4">
              <SafePhoto
                src={leader.photo as string}
                aspect="aspect-[4/5]"
                sizes="(min-width: 1024px) 22vw, 45vw"
                objectPosition="center top"
                onFail="collapse"
                imageClassName="group-hover:scale-[1.03]"
              />
              <div className="flex flex-col gap-1">
                <span className="font-serif text-[1.15rem] leading-snug text-navy">
                  {leader.name}
                </span>
                <Meta role={role} employer={leader.employer} />
              </div>
            </li>
          ))}
        </ul>
      )}

      {rest.length > 0 && (
        <ul className="grid grid-cols-1 gap-x-12 gap-y-8 border-t border-charcoal/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map(({ leader, role }) => (
            <li key={leader.name} className="flex flex-col gap-1">
              <span className="font-serif text-[1.15rem] leading-snug text-navy">
                {leader.name}
              </span>
              <Meta role={role} employer={leader.employer} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
