import Link from "next/link";
import { CTA_PRIMARY } from "@/lib/content";

export function CTASection({
  title = "Begin with the decision in front of you.",
  description = "Whether the immediate need is governance, operating support, capital allocation, or family coordination, the first step is a confidential conversation.",
  align = "center",
}: {
  title?: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-8 ${alignment}`}>
      <h2 className="max-w-2xl font-serif text-display-2 font-semibold text-ivory">{title}</h2>
      <p className="max-w-xl font-sans text-[1.05rem] leading-relaxed text-ivory/70">{description}</p>
      <Link href={CTA_PRIMARY.href} className="btn-inverse">
        {CTA_PRIMARY.label}
      </Link>
    </div>
  );
}
