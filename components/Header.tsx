import { Container } from "./Container";

const links = [
  { href: "#build", label: "Build" },
  { href: "#scale", label: "Scale" },
  { href: "#compound", label: "Compound" },
  { href: "#steward", label: "Steward" },
  { href: "#firm", label: "The Firm" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/10 bg-ivory/95 backdrop-blur-sm">
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#top"
          className="font-serif text-[1.15rem] tracking-[0.08em] text-navy"
        >
          LODESTONE
        </a>
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[0.75rem] uppercase tracking-[0.14em] text-charcoal/70 transition-colors duration-300 hover:text-brass"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="font-sans text-[0.75rem] uppercase tracking-[0.16em] text-navy border-b border-navy/40 pb-0.5 transition-colors duration-300 hover:text-brass hover:border-brass"
        >
          Inquire
        </a>
      </Container>
    </header>
  );
}
