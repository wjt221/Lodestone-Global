import { SafePhoto } from "./SafePhoto";
import { leadershipByOrg, leaderOrgLabel, leaderOrgOrder } from "@/lib/content";

/**
 * Portraits where real photography exists, a typographic roster where it does
 * not.
 *
 * The earlier version was roster-only, on the reasoning that sixteen boxes of
 * initials read as unfinished placeholders. That still holds -- so this does
 * not fill the gap with monograms. Instead each business leads with the people
 * whose portraits Lodestone actually has (pulled from the firm's own media
 * library) and lists the rest as names. A short row of real faces above a
 * clean roster reads as a masthead; a full grid of empty frames reads as
 * missing content.
 *
 * Adding a `photo` to any entry in lib/content.ts promotes that person into
 * the portrait row automatically -- no change needed here.
 */
function Meta({
  role,
  alsoAt,
  employer,
  tone = "light",
}: {
  role: { title?: string; relationship?: string };
  alsoAt: string[];
  employer?: string;
  tone?: "light" | "muted";
}) {
  const sub = tone === "muted" ? "text-charcoal/70" : "text-charcoal/80";
  return (
    <>
      {role.title && (
        <span className={`font-sans text-[0.78rem] leading-relaxed ${sub}`}>{role.title}</span>
      )}
      {alsoAt.length > 0 && (
        <span className={`font-sans text-[0.75rem] italic leading-relaxed ${sub}`}>
          Also across {alsoAt.join(", ")}
        </span>
      )}
      {role.relationship === "affiliate" && (
        <span className={`font-sans text-[0.75rem] italic leading-relaxed ${sub}`}>
          {employer ? `In partnership with ${employer}` : "Partner firm"}
        </span>
      )}
    </>
  );
}

export function Leadership() {
  return (
    <div className="flex flex-col gap-16">
      {leaderOrgOrder.map((org) => {
        const members = leadershipByOrg(org);
        if (members.length === 0) return null;

        const withPortrait = members.filter((m) => m.leader.photo);
        const rest = members.filter((m) => !m.leader.photo);

        return (
          <section key={org} className="flex flex-col gap-8">
            <h3 className="font-sans text-[0.72rem] uppercase tracking-[0.16em] text-brass-ink">
              {leaderOrgLabel[org]}
            </h3>

            {withPortrait.length > 0 && (
              <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:grid-cols-4">
                {withPortrait.map(({ leader, role, alsoAt }) => (
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
                      <Meta role={role} alsoAt={alsoAt} employer={leader.employer} />
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {rest.length > 0 && (
              <ul
                className={`grid grid-cols-1 gap-x-12 gap-y-7 border-t border-charcoal/15 pt-7 sm:grid-cols-2 lg:grid-cols-3 ${
                  withPortrait.length > 0 ? "mt-2" : ""
                }`}
              >
                {rest.map(({ leader, role, alsoAt }) => (
                  <li key={leader.name} className="flex flex-col gap-1">
                    <span className="font-serif text-[1.15rem] leading-snug text-navy">
                      {leader.name}
                    </span>
                    <Meta role={role} alsoAt={alsoAt} employer={leader.employer} />
                  </li>
                ))}
              </ul>
            )}
          </section>
        );
      })}
    </div>
  );
}
