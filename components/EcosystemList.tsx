import Image from "next/image";
import Link from "next/link";
import { businesses } from "@/lib/content";

/**
 * The Lodestone ecosystem as a connected map: a numbered arc across the top
 * ties the four businesses together as one progression, then each business
 * gets an equal column showing its full service list, so a visitor learns
 * what all four actually do rather than one flagship plus three teasers.
 */
export function EcosystemList() {
  return (
    <div className="flex flex-col">
      {/* Connected arc */}
      <ol className="grid grid-cols-2 border-y border-charcoal/20 sm:grid-cols-4">
        {businesses.map((b, i) => (
          <li
            key={b.id}
            className={`relative flex flex-col gap-2 px-5 py-6 ${
              i > 0 ? "border-charcoal/15 sm:border-l" : ""
            } ${i === 1 ? "border-l" : ""}`}
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-brass"
            />
            <span className="font-sans text-[0.68rem] uppercase tracking-widest2 text-brass">
              0{i + 1} · {b.stage}
            </span>
            <span className="font-serif text-[1.05rem] leading-snug text-navy">{b.name}</span>
            {i < businesses.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute right-[-1px] top-[1.9rem] hidden h-px w-4 -translate-y-1/2 translate-x-full bg-charcoal/20 sm:block"
              />
            )}
          </li>
        ))}
      </ol>

      {/* Equal columns: every business, every service */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 border-b border-charcoal/20 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {businesses.map((b) => (
          <div key={b.id} className="flex flex-col gap-5">
            <div>
              {b.logo ? (
                <div className="flex h-11 items-start">
                  <Image
                    src={b.logo.src}
                    alt={`${b.name} logo`}
                    width={b.logo.width}
                    height={b.logo.height}
                    className="h-full w-auto object-contain object-left"
                  />
                </div>
              ) : (
                <span className="font-serif text-lg font-normal text-navy">{b.name}</span>
              )}
              <p className="mt-3 font-sans text-[0.8rem] leading-relaxed text-charcoal/55">
                {b.role}
              </p>
            </div>
            <ul className="flex flex-col border-t border-charcoal/12">
              {b.capabilities.map((c) => (
                <li
                  key={c}
                  className="border-b border-charcoal/12 py-2.5 font-sans text-[0.85rem] leading-snug text-charcoal/75"
                >
                  {c}
                </li>
              ))}
            </ul>
            <Link
              href={b.href}
              className="mt-auto w-fit font-sans text-[0.75rem] uppercase tracking-[0.08em] text-navy/70 transition-colors hover:text-brass"
            >
              Explore {b.name} →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
