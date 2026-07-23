import Image from "next/image";
import { Container } from "./Container";

const links = [
  { href: "/#journey", label: "Journey" },
  { href: "/#ecosystem", label: "Ecosystem" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/ecosystem", label: "The Firm" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ivory/10 bg-navy/97">
      <Container className="flex h-[4.25rem] items-center justify-between">
        <a href="/#top" className="flex items-center">
          <Image
            src="/logo/lodestone-global-horizontal-white.png"
            alt="Lodestone Global"
            width={320}
            height={107}
            priority
            className="h-8 w-auto"
          />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[0.76rem] uppercase tracking-[0.1em] text-ivory/65 transition-colors duration-200 hover:text-brass-light"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-inverse hidden text-[0.72rem] sm:inline-flex">
          Schedule a Conversation
        </a>
      </Container>
    </header>
  );
}
