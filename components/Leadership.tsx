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
 *
 * Name and title only. The "Partner firm" note that used to sit under the two
 * people employed by another firm was removed at Lodestone's request, along
 * with the business headings -- the team reads as one group, with nothing on
 * the page about who is employed where. The `relationship` data still exists
 * and still drives both the roster order and the `worksFor` / `affiliation` in
 * personJsonLd, so the site's structured claims stay accurate.
 */
export function Leadership() {
  const roster = leadershipRoster();
  const withPortrait = roster.filter((m) => m.leader.photo);
  const rest = roster.filter((m) => !m.leader.photo);

  return (
    <div className="flex flex-col gap-12">
      {/*
        Three or fewer portraits sit three across so they fill the row and
        carry some scale; a fourth tips it to a four-column grid. Fixing it at
        four left a visible hole where the fourth face is not yet supplied.
      */}
      {withPortrait.length > 0 && (
        <ul
          className={`grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-8 ${
            withPortrait.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {withPortrait.map(({ leader, role }, i) => (
            <li
              key={leader.name}
              /*
                Every second portrait drops half a step. A row of arches all
                landing on the same baseline is still a band; staggered, the
                row reads as a composition and the eye moves along it.
              */
              className={`group flex flex-col gap-5 ${i % 2 === 1 ? "lg:mt-14" : ""}`}
            >
              <SafePhoto
                src={leader.photo as string}
                aspect="aspect-[4/5]"
                sizes="(min-width: 1024px) 22vw, 45vw"
                objectPosition="center top"
                onFail="collapse"
                className="portrait-frame"
                imageClassName="group-hover:scale-[1.03]"
              />
              <div className="flex flex-col gap-1.5">
                <span
                  aria-hidden
                  className="block h-px w-8 bg-brass-ink/50 transition-all duration-500 ease-editorial group-hover:w-14"
                />
                <span className="mt-1 font-serif text-[1.15rem] leading-snug text-navy">
                  {leader.name}
                </span>
                {role.title && (
                  <span className="font-sans text-[0.8rem] leading-relaxed text-charcoal/80">
                    {role.title}
                  </span>
                )}
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
              {role.title && (
                <span className="font-sans text-[0.8rem] leading-relaxed text-charcoal/80">
                  {role.title}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
