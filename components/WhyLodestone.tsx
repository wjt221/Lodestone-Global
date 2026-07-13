import { EditorialImage } from "./EditorialImage";
import { photos } from "./photos";

export function WhyLodestone() {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
      <div className="flex flex-col gap-8">
        <p className="max-w-2xl font-sans text-[1.05rem] leading-relaxed text-charcoal/70">
          Most Principals assemble their advisors one engagement at a time. A recruiter fills a
          board seat. A consultant delivers a plan and moves on. A bank runs the transaction. A
          wealth manager oversees whatever is left. Each relationship ends when its mandate does,
          and no one is responsible for how the pieces fit together.
        </p>
        <p className="max-w-2xl font-sans text-[1.05rem] leading-relaxed text-charcoal/70">
          Lodestone works differently. The team that helps form the board is still involved when
          the business scales, when capital gets deployed, and when the family plans for the next
          generation. One team carries the history of the relationship forward, and stays
          accountable for the outcome, not just their piece of it.
        </p>
      </div>
      <EditorialImage
        src={photos.credibility.src}
        alt={photos.credibility.alt}
        aspect="aspect-[4/5] lg:aspect-auto lg:h-full"
        sizes="(min-width: 1024px) 35vw, 100vw"
      />
    </div>
  );
}
