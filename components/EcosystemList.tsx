import Image from "next/image";
import Link from "next/link";
import { businesses } from "@/lib/content";

/**
 * The four businesses, presented as a system rather than a row of identical
 * cards: a framework arc for orientation, a featured flagship (Lodestone
 * Global), then an aligned index for the other three.
 */
export function EcosystemList() {
  const [flagship, ...rest] = businesses;

  return (
    <div className="flex flex-col gap-14">
      {/* Framework arc */}
      <ol className="grid grid-cols-2 border-y border-charcoal/15 sm:grid-cols-4">
        {businesses.map((b, i) => (
          <li
            key={b.id}
            className={`flex flex-col gap-1 px-4 py-5 ${
              i > 0 ? "border-charcoal/12 sm:border-l" : ""
            } ${i === 1 ? "border-l" : ""}`}
          >
            <span className="font-sans text-[0.68rem] uppercase tracking-widest2 text-brass">
              0{i + 1} · {b.stage}
            </span>
            <span className="font-serif text-[0.95rem] leading-snug text-navy">{b.name}</span>
          </li>
        ))}
      </ol>

      {/* Featured flagship */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <span className="font-sans text-[0.72rem] uppercase tracking-widest2 text-brass">
            {flagship.stage}
          </span>
          {flagship.logo ? (
            <Image
              src={flagship.logo.src}
              alt={`${flagship.name} logo`}
              width={flagship.logo.width}
              height={flagship.logo.height}
              className="mt-4 h-10 w-auto"
            />
          ) : (
            <h3 className="mt-4 font-serif text-3xl font-normal text-navy">{flagship.name}</h3>
          )}
          <p className="mt-4 font-sans text-[0.82rem] uppercase tracking-[0.06em] text-charcoal/50">
            {flagship.role}
          </p>
          <p className="mt-2 font-serif text-lg font-normal italic text-navy/80">
            {flagship.evidence}
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:col-span-7">
          <p className="max-w-xl font-sans text-[1.05rem] leading-relaxed text-charcoal/75">
            {flagship.summary}
          </p>
          <ul className="grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">
            {flagship.capabilities.map((c) => (
              <li
                key={c}
                className="border-t border-charcoal/12 py-2 font-sans text-[0.9rem] text-charcoal/70"
              >
                {c}
              </li>
            ))}
          </ul>
          <Link href={flagship.href} className="btn-text w-fit text-navy">
            Explore {flagship.name}
          </Link>
        </div>
      </div>

      {/* Aligned index for the rest */}
      <div className="border-t border-charcoal/20">
        {rest.map((b, i) => (
          <Link
            key={b.id}
            href={b.href}
            className="group grid grid-cols-1 gap-4 border-b border-charcoal/15 py-8 md:grid-cols-12 md:items-baseline md:gap-8"
          >
            <div className="flex items-baseline gap-3 md:col-span-4">
              <span className="index-number">0{i + 2}</span>
              <div className="flex flex-col">
                <span className="font-sans text-[0.68rem] uppercase tracking-widest2 text-brass">
                  {b.stage}
                </span>
                <span className="font-serif text-xl font-normal text-navy group-hover:text-brass">
                  {b.name}
                </span>
              </div>
            </div>
            <div className="md:col-span-6">
              <p className="font-sans text-[0.82rem] uppercase tracking-[0.06em] text-charcoal/50">
                {b.role}
              </p>
              <p className="mt-1 font-sans text-[0.9rem] leading-relaxed text-charcoal/65">
                {b.evidence}.
              </p>
            </div>
            <div className="flex items-baseline md:col-span-2 md:justify-end">
              <span className="font-sans text-[0.75rem] uppercase tracking-[0.08em] text-navy/70 group-hover:text-brass">
                Explore →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
