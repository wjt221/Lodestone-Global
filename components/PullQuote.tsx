/**
 * A restrained editorial pull quote for published client testimonials. Quiet
 * typography, a single brass rule, no decorative quotation-mark graphics.
 */
export function PullQuote({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <figure className="flex max-w-3xl flex-col gap-6 border-t border-brass/50 pt-8">
      <blockquote className="font-serif text-display-3 font-normal leading-snug text-navy">
        {quote}
      </blockquote>
      <figcaption className="font-sans text-[0.78rem] uppercase tracking-[0.08em] text-charcoal/80">
        {attribution}
      </figcaption>
    </figure>
  );
}
