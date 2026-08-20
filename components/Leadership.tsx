import Image from "next/image";
import {
  leadershipByOrg,
  leaderOrgLabel,
  leaderOrgOrder,
} from "@/lib/content";
import { isImageAvailable } from "@/lib/localImage";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export function Leadership({ full = false }: { full?: boolean }) {
  return (
    <div className="flex flex-col gap-10">
      {leaderOrgOrder.map((org) => {
        const members = leadershipByOrg(org);
        if (members.length === 0) return null;
        return (
          <section key={org} className="flex flex-col gap-7">
            <h3 className="font-sans text-[0.8rem] uppercase tracking-[0.12em] text-brass">
              {leaderOrgLabel[org]}
            </h3>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {members.map(({ leader: person, role }) => {
                const hasPhoto = person.photo && isImageAvailable(person.photo);
                return (
                  <article
                    key={`${person.name}-${org}`}
                    className="flex flex-col gap-5 sm:flex-row sm:gap-7"
                  >
                    <div className="h-28 w-28 shrink-0 overflow-hidden border border-charcoal/15 bg-parchment">
                      {hasPhoto ? (
                        <Image
                          src={person.photo as string}
                          alt={`Portrait of ${person.name}`}
                          width={224}
                          height={224}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center" aria-hidden>
                          <span className="font-serif text-2xl text-navy/70">
                            {initials(person.name)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="font-serif text-xl font-normal text-navy">{person.name}</h4>
                      {role.title && (
                        <span className="font-sans text-[0.8rem] uppercase tracking-[0.08em] text-brass">
                          {role.title}
                        </span>
                      )}
                      {person.bio && (
                        <p className="mt-1 font-sans text-[0.92rem] leading-relaxed text-charcoal/70">
                          {person.bio}
                        </p>
                      )}
                      {person.linkedin && (
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 w-fit font-sans text-[0.8rem] uppercase tracking-[0.08em] text-navy/70 hover:text-brass"
                        >
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
      {!full && (
        <p className="font-sans text-[0.85rem] text-charcoal/50">
          Additional principals and advisors support each part of the practice.
        </p>
      )}
    </div>
  );
}
