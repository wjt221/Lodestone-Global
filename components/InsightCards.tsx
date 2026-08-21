import Link from "next/link";
import type { Insight } from "@/lib/content";

function Card({ item }: { item: Insight }) {
  const external = item.external;
  const className =
    "group flex flex-col gap-4 border-t border-charcoal/15 pt-6 transition-colors";
  const inner = (
    <>
      <div className="flex items-center justify-between gap-4">
        <span className="font-sans text-[0.72rem] uppercase tracking-[0.1em] text-brass">
          {item.category}
        </span>
        {item.date && (
          <span className="font-sans text-[0.75rem] text-charcoal/45">{item.date}</span>
        )}
      </div>
      <h3 className="font-serif text-xl font-normal leading-snug text-navy group-hover:text-brass">
        {item.title}
      </h3>
      <p className="font-sans text-[0.9rem] leading-relaxed text-charcoal/65">{item.summary}</p>
      <span className="mt-1 font-sans text-[0.9rem] text-navy/75 underline decoration-charcoal/25 underline-offset-4 group-hover:text-brass">
        {item.cta}
        {external ? " ↗" : " →"}
      </span>
    </>
  );

  return external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <Link href={item.href} className={className}>
      {inner}
    </Link>
  );
}

export function InsightCards({ items, limit }: { items: Insight[]; limit?: number }) {
  const shown = typeof limit === "number" ? items.slice(0, limit) : items;
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
      {shown.map((item) => (
        <Card key={item.title} item={item} />
      ))}
    </div>
  );
}
