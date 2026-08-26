import { ReactNode } from "react";
import { Kicker } from "./Kicker";

/**
 * Section heading.
 *
 * `size` and `width` exist so that not every section on a page announces itself
 * at the same volume and the same measure. Uniform scale is the thing that makes
 * a long page feel machine-laid: the reader gets no signal about what matters.
 */
export function SectionHeading({
  kicker,
  title,
  description,
  tone = "light",
  align = "left",
  size = "lg",
  width = "prose",
  headingLevel = "h2",
  layout = "stacked",
}: {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  /** lg is a section that leads. md is a section that supports one. */
  size?: "lg" | "md";
  width?: "prose" | "wide";
  headingLevel?: "h2" | "h3";
  /**
   * "split" sets the title and its description as two columns of one grid
   * instead of stacking them in a narrow left-hand measure.
   *
   * Stacked headings are capped at max-w-2xl, so on a 1360px container every
   * section opened with a headline against roughly half a screen of empty
   * ivory -- six times down the homepage. Repeated at that interval the void
   * stops reading as breathing room and starts reading as a template with
   * nothing to put there. Split uses the full measure and gives the page a
   * grid to sit on. Keep stacked where a section genuinely leads with one
   * short statement.
   */
  layout?: "stacked" | "split";
}) {
  const titleColor = tone === "dark" ? "text-ivory" : "text-navy";
  const descColor = tone === "dark" ? "text-ivory/65" : "text-charcoal/80";
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left";
  const measure = width === "wide" ? "max-w-4xl" : "max-w-2xl";
  const scale = size === "lg" ? "text-display-2" : "text-display-3";
  const Heading = headingLevel;

  if (layout === "split" && description && align !== "center") {
    return (
      <div className="grid grid-cols-1 gap-x-16 gap-y-6 lg:grid-cols-12">
        <div className="flex flex-col gap-4 lg:col-span-6">
          {kicker && <Kicker tone={tone}>{kicker}</Kicker>}
          <Heading className={`font-serif ${scale} font-semibold ${titleColor}`}>{title}</Heading>
        </div>
        <p
          className={`font-sans text-[1.05rem] leading-relaxed lg:col-span-5 lg:col-start-8 lg:pt-3 ${descColor}`}
        >
          {description}
        </p>
      </div>
    );
  }

  return (
    <div className={`flex ${measure} flex-col gap-4 ${alignment}`}>
      {kicker && <Kicker tone={tone}>{kicker}</Kicker>}
      <Heading className={`font-serif ${scale} font-semibold ${titleColor}`}>{title}</Heading>
      {description && (
        <p className={`font-sans text-[1.05rem] leading-relaxed ${descColor}`}>{description}</p>
      )}
    </div>
  );
}
