import Image from "next/image";
import Link from "next/link";
import { businesses } from "@/lib/content";

/**
 * The four businesses as an editorial list rather than a repeating card grid.
 * Each row: framework verb, real logo or wordmark, plain-English role,
 * principal capabilities, and a link to the dedicated page.
 */
export function EcosystemList() {
  return (
    <div className="flex flex-col">
      {businesses.map((b, i) => (
        <div
          key={b.id}
          className={`grid grid-cols-1 gap-6 border-t border-charcoal/15 py-10 md:grid-cols-12 md:gap-8 ${
            i === businesses.length - 1 ? "border-b" : ""
          }`}
        >
          <div className="md:col-span-3">
            <span className="index-number">0{i + 1}</span>
            <p className="mt-3 font-sans text-[0.72rem] uppercase tracking-widest2 text-brass">
              {b.stage}
            </p>
            <div className="mt-4">
              {b.logo ? (
                <Image
                  src={b.logo.src}
                  alt={`${b.name} logo`}
                  width={b.logo.width}
                  height={b.logo.height}
                  className="h-8 w-auto"
                />
              ) : (
                <span className="font-serif text-xl font-normal text-navy">{b.name}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 md:col-span-6">
            <p className="font-sans text-[0.82rem] uppercase tracking-[0.06em] text-charcoal/50">
              {b.role}
            </p>
            <p className="max-w-xl font-sans text-[1rem] leading-relaxed text-charcoal/75">
              {b.summary}
            </p>
          </div>

          <div className="flex flex-col justify-between gap-5 md:col-span-3">
            <ul className="flex flex-col gap-1.5">
              {b.capabilities.slice(0, 4).map((c) => (
                <li key={c} className="font-sans text-[0.85rem] text-charcoal/60">
                  {c}
                </li>
              ))}
            </ul>
            <Link href={b.href} className="btn-text w-fit text-navy">
              Explore {b.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
