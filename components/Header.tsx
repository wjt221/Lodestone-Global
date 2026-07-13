import { Container } from "./Container";

const links = [
  { href: "/#govern", label: "Govern", index: "01" },
  { href: "/#scale", label: "Scale", index: "02" },
  { href: "/#compound", label: "Compound", index: "03" },
  { href: "/#steward", label: "Steward", index: "04" },
  { href: "/ecosystem", label: "The Ecosystem", index: "05" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/12 bg-ivory">
      <Container className="flex h-[4.5rem] items-center justify-between">
        <a href="/#top" className="font-serif text-[1.05rem] tracking-[0.02em] text-navy">
          Lodestone
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-baseline gap-2 font-sans text-[0.78rem] uppercase tracking-[0.1em] text-charcoal/70 transition-colors duration-200 hover:text-brass"
            >
              <span className="font-serif text-[0.7rem] text-stone group-hover:text-brass">
                {link.index}
              </span>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary hidden sm:inline-flex">
          Schedule a Conversation
        </a>
      </Container>
    </header>
  );
}
