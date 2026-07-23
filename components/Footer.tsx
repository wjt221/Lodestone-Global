import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { businesses, CONTACT, primaryNav } from "@/lib/content";

const company = primaryNav.filter((l) =>
  ["/about", "/insights", "/contact"].includes(l.href),
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-navy text-ivory">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand + contact */}
          <div className="flex flex-col gap-6 md:col-span-4">
            <Image
              src="/logo/lodestone-global-horizontal-white.png"
              alt="Lodestone Global"
              width={320}
              height={107}
              className="h-8 w-auto"
            />
            <p className="max-w-xs font-sans text-[0.9rem] leading-relaxed text-ivory/60">
              Trusted counsel for owners building enduring companies and family wealth.
            </p>
            <address className="flex flex-col gap-1 font-sans text-[0.9rem] not-italic text-ivory/60">
              <span>{CONTACT.location}</span>
              <a href={`mailto:${CONTACT.email}`} className="w-fit hover:text-brass-light">
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit hover:text-brass-light"
              >
                LinkedIn
              </a>
            </address>
          </div>

          {/* Ecosystem */}
          <div className="md:col-span-5">
            <h2 className="font-sans text-[0.7rem] uppercase tracking-widest2 text-brass-light">
              The Ecosystem
            </h2>
            <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {businesses.map((b) => (
                <li key={b.id}>
                  <Link href={b.href} className="group flex flex-col gap-0.5">
                    <span className="font-serif text-[1rem] font-normal text-ivory group-hover:text-brass-light">
                      {b.name}
                    </span>
                    <span className="font-sans text-[0.8rem] text-ivory/50">{b.role}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-3">
            <h2 className="font-sans text-[0.7rem] uppercase tracking-widest2 text-brass-light">
              Company
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-sans text-[0.9rem] text-ivory/65 hover:text-brass-light">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="font-sans text-[0.9rem] text-ivory/65 hover:text-brass-light">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-ivory/10 pt-8">
          <p className="max-w-3xl font-sans text-[0.72rem] leading-relaxed text-ivory/35">
            Lodestone Family Advisors provides advisory services; Lodestone Capital pursues investment
            activities. Nothing on this site is an offer to sell or a solicitation to buy any security,
            or investment, legal, or tax advice. Investing involves risk, including possible loss of
            principal.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-sans text-[0.72rem] uppercase tracking-[0.08em] text-ivory/40">
              &copy; {year} Lodestone Global. All rights reserved.
            </span>
            <span className="font-sans text-[0.72rem] uppercase tracking-[0.08em] text-ivory/40">
              {CONTACT.location}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
