import { leadershipByOrg, leaderOrgLabel, leaderOrgOrder } from "@/lib/content";

/**
 * Typographic roster, not an avatar grid.
 *
 * There is no leadership photography yet. Sixteen boxes containing initials read
 * as unfinished placeholders, so until real portraits exist this renders as a
 * masthead: names set in the serif, grouped by business. Restraint reads as
 * deliberate where empty avatar frames read as missing content.
 *
 * When headshots arrive, reintroduce the portrait here rather than the monogram.
 */
export function Leadership() {
  return (
    <div className="flex flex-col gap-14">
      {leaderOrgOrder.map((org) => {
        const members = leadershipByOrg(org);
        if (members.length === 0) return null;
        return (
          <section key={org} className="flex flex-col gap-6">
            <h3 className="font-sans text-[0.72rem] uppercase tracking-[0.16em] text-brass-ink">
              {leaderOrgLabel[org]}
            </h3>
            <ul className="grid grid-cols-1 gap-x-12 gap-y-7 border-t border-charcoal/15 pt-7 sm:grid-cols-2 lg:grid-cols-3">
              {members.map(({ leader, role, alsoAt }) => (
                <li key={leader.name} className="flex flex-col gap-1">
                  <span className="font-serif text-[1.15rem] leading-snug text-navy">
                    {leader.name}
                  </span>
                  {role.title && (
                    <span className="font-sans text-[0.78rem] leading-relaxed text-charcoal/80">
                      {role.title}
                    </span>
                  )}
                  {alsoAt.length > 0 && (
                    <span className="font-sans text-[0.75rem] italic leading-relaxed text-charcoal/80">
                      Also across {alsoAt.join(", ")}
                    </span>
                  )}
                  {role.relationship === "affiliate" && (
                    <span className="font-sans text-[0.75rem] italic leading-relaxed text-charcoal/80">
                      {leader.employer ? `In partnership with ${leader.employer}` : "Partner firm"}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
