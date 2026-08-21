import { ReactNode } from "react";

/**
 * A plain label. Use it rarely.
 *
 * This used to render a circled chevron before the text. That mark carried no
 * information and appeared above almost every block on the site, which is the
 * kind of ornament that makes a page look assembled from a template rather than
 * designed. It is gone.
 *
 * A label earns its place only when it tells the reader something the headline
 * beneath it does not. "Leadership" above "The people behind the relationship"
 * is not a label, it is an echo.
 */
export function Kicker({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const color = tone === "dark" ? "text-brass-light" : "text-navy/55";
  return (
    <span className={`font-sans text-[0.7rem] uppercase tracking-widest2 ${color}`}>
      {children}
    </span>
  );
}
