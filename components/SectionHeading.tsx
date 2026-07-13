import { ReactNode } from "react";

export function SectionHeading({
  index,
  kicker,
  title,
  description,
  tone = "light",
  align = "left",
  headingLevel = "h2",
}: {
  index?: string;
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  headingLevel?: "h2" | "h3";
}) {
  const titleColor = tone === "dark" ? "text-ivory" : "text-navy";
  const descColor = tone === "dark" ? "text-ivory/65" : "text-charcoal/65";
  const ruleColor = tone === "dark" ? "border-ivory/20" : "border-charcoal/15";
  const kickerColor = tone === "dark" ? "text-brass-light" : "text-navy/70";
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left";
  const Heading = headingLevel;

  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${alignment}`}>
      {(index || kicker) && (
        <div className={`flex items-center gap-3 ${align === "center" ? "" : ""}`}>
          {index && <span className={`index-number ${tone === "dark" ? "text-stone" : ""}`}>{index}</span>}
          {index && kicker && <span className={`h-px w-6 ${ruleColor} border-t`} />}
          {kicker && <span className={`kicker ${kickerColor}`}>{kicker}</span>}
        </div>
      )}
      <Heading className={`font-serif text-display-2 font-normal ${titleColor}`}>{title}</Heading>
      {description && (
        <p className={`font-sans text-[1.05rem] leading-relaxed ${descColor}`}>{description}</p>
      )}
    </div>
  );
}
