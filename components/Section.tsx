import { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  children,
  tone = "light",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: "light" | "dark" | "parchment";
  className?: string;
}) {
  const bg =
    tone === "dark" ? "bg-navy" : tone === "parchment" ? "bg-parchment" : "bg-ivory";

  return (
    <section id={id} className={`${bg} py-24 md:py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
