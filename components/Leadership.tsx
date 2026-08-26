import Image from "next/image";
import { SafePhoto } from "./SafePhoto";
import { leadershipRoster } from "@/lib/content";

/**
 * The full team as one roster: every person, one entry, one shape.
 *
 * Two earlier versions are worth not repeating. The first grouped people under
 * four business headings; Lodestone asked for a single team with no indication
 * of who sits in which company. The second split the roster in two -- large
 * arched portraits for the three people with photography, names alone for the
 * other thirteen -- which made a ranking out of nothing but which files
 * happened to exist.
 *
 * So everyone now gets the same small arched tile. Anyone without a photograph
 * yet shows the Lodestone compass on navy, which reads as a brand tile rather
 * than as missing content, and the tiles are deliberately small: at this size a
 * repeated placeholder sits quietly beside the name instead of dominating the
 * section. Dropping a `photo` onto an entry in lib/content.ts swaps that
 * person's compass for their portrait with no change here.
 */
function CompassTile() {
  return (
    <span
      aria-hidden
      className="compass-tile absolute inset-0 flex items-center justify-center"
    >
      <Image
        src="/logo/lodestone-global-icon.png"
        alt=""
        width={237}
        height={207}
        className="h-[52%] w-auto"
      />
    </span>
  );
}

export function Leadership() {
  const roster = leadershipRoster();

  return (
    <ul className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
      {roster.map(({ leader, role }) => (
        <li key={leader.name} className="group flex items-start gap-4">
          <div className="w-16 shrink-0 sm:w-[4.5rem]">
            {leader.photo ? (
              <SafePhoto
                src={leader.photo}
                aspect="aspect-[4/5]"
                sizes="72px"
                objectPosition="center top"
                className="portrait-frame"
                imageClassName="group-hover:scale-[1.04]"
                fallback={<CompassTile />}
              />
            ) : (
              <div className="portrait-frame relative aspect-[4/5] overflow-hidden">
                <CompassTile />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1 pt-1">
            <span className="font-serif text-[1.05rem] leading-snug text-navy">
              {leader.name}
            </span>
            {role.title && (
              <span className="font-sans text-[0.78rem] leading-relaxed text-charcoal/80">
                {role.title}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
