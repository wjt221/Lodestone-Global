import { ReactNode } from "react";
import { Container } from "./Container";

/**
 * A page section.
 *
 * `density` exists because every section on this site used to carry identical
 * vertical padding. Even spacing throughout is what makes a long page read as
 * generated: a designed page breathes unevenly, giving room to what matters and
 * moving briskly through what does not.
 */
export function Section({
  id,
  children,
  tone = "light",
  density = "normal",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: "light" | "dark" | "parchment";
  density?: "tight" | "normal" | "generous";
  className?: string;
}) {
  const bg =
    tone === "dark" ? "bg-navy" : tone === "parchment" ? "bg-parchment" : "bg-ivory";
  const pad =
    density === "tight"
      ? "py-14 md:py-16"
      : density === "generous"
        ? "py-28 md:py-40"
        : "py-20 md:py-24";

  return (
    <section id={id} className={`${bg} ${pad} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
