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
}) {
  const titleColor = tone === "dark" ? "text-ivory" : "text-navy";
  const descColor = tone === "dark" ? "text-ivory/65" : "text-charcoal/80";
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left";
  const measure = width === "wide" ? "max-w-4xl" : "max-w-2xl";
  const scale = size === "lg" ? "text-display-2" : "text-display-3";
  const Heading = headingLevel;

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
