import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  const titleColor = tone === "dark" ? "text-ivory" : "text-navy";
  const descColor = tone === "dark" ? "text-ivory/70" : "text-charcoal/70";
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`font-serif text-display-2 font-light ${titleColor}`}>{title}</h2>
      {description && (
        <p className={`font-sans text-[1.05rem] leading-relaxed ${descColor}`}>{description}</p>
      )}
    </div>
  );
}
