import { insights, type Insight } from "@/lib/content";

function Card({ item }: { item: Insight }) {
  const external = item.external;
  return (
    <a
      href={item.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex flex-col gap-4 border-t border-charcoal/15 pt-6 transition-colors"
    >
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
      <span className="mt-1 font-sans text-[0.78rem] uppercase tracking-[0.08em] text-navy/70 group-hover:text-brass">
        {item.cta}
        {external ? " ↗" : " →"}
      </span>
    </a>
  );
}

export function InsightCards({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? insights.slice(0, limit) : insights;
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} item={item} />
      ))}
    </div>
  );
}
