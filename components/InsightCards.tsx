import Link from "next/link";
import type { Insight } from "@/lib/content";
import { isImageAvailable } from "@/lib/localImage";
import { SafePhoto } from "./SafePhoto";

/**
 * Photo-led insight cards.
 *
 * Every article migrated from the Wix blog already carried its own cover
 * image, and every survey edition its own designed cover, but the listings
 * rendered none of them: a category, a headline, a paragraph and a link, over
 * a hairline rule -- the same shape as five other sections on the homepage.
 * Leading with the picture is what makes a research index read as published
 * work rather than a list of rows.
 *
 * `feature` promotes one card to a two-column, larger-type version so the
 * grid has a focal point instead of three identical thirds.
 */
function CardMedia({
  item,
  aspect,
  sizes,
}: {
  item: Insight;
  aspect: string;
  sizes: string;
}) {
  const src = item.image?.src;
  const available = src ? isImageAvailable(src) : false;

  return (
    <div className="relative w-full">
      {available && src ? (
        <SafePhoto
          src={src}
          aspect={aspect}
          sizes={sizes}
          imageClassName="group-hover:scale-[1.04]"
        />
      ) : (
        <div
          aria-hidden
          className={`photo-fallback w-full ${aspect}`}
        />
      )}
      {/* Keeps the category legible over a light photo without dimming the whole frame. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-navy/45 to-transparent"
      />
      <span className="absolute left-4 top-4 font-sans text-[0.68rem] uppercase tracking-widest2 text-ivory">
        {item.category}
      </span>
    </div>
  );
}

function Card({ item, feature = false }: { item: Insight; feature?: boolean }) {
  const external = item.external;
  const className = `group flex flex-col gap-5 ${feature ? "md:col-span-2" : ""}`;

  const inner = (
    <>
      <CardMedia
        item={item}
        aspect={feature ? "aspect-[16/9]" : "aspect-[4/3]"}
        sizes={
          feature
            ? "(min-width: 1024px) 66vw, 100vw"
            : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        }
      />
      <div className="flex flex-col gap-3">
        <h3
          className={`font-serif font-normal leading-snug text-navy transition-colors group-hover:text-brass-ink ${
            feature ? "text-display-3" : "text-xl"
          }`}
        >
          {item.title}
        </h3>
        <p
          className={`font-sans leading-relaxed text-charcoal/80 ${
            feature ? "max-w-2xl text-[1rem]" : "text-[0.9rem]"
          }`}
        >
          {item.summary}
        </p>
        <div className="mt-1 flex items-baseline gap-4">
          <span className="font-sans text-[0.85rem] text-navy card-link">
            {item.cta}
            {external ? " ↗" : " →"}
          </span>
          {item.date && (
            <span className="font-sans text-[0.75rem] text-charcoal/70">{item.date}</span>
          )}
        </div>
      </div>
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

export function InsightCards({
  items,
  limit,
  featureFirst = false,
}: {
  items: Insight[];
  limit?: number;
  /** Promote the first card to a wide, larger-type feature. */
  featureFirst?: boolean;
}) {
  const shown = typeof limit === "number" ? items.slice(0, limit) : items;
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
      {shown.map((item, i) => (
        <Card key={item.title} item={item} feature={featureFirst && i === 0} />
      ))}
    </div>
  );
}
