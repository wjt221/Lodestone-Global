"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { primaryNav, CTA_PRIMARY } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ivory/10 bg-navy/95 backdrop-blur-sm">
      <Container className="flex h-[4.25rem] items-center justify-between gap-6">
        <Link href="/" className="flex items-center" aria-label="Lodestone Global home">
          <Image
            src="/logo/lodestone-global-horizontal-white.png"
            alt="Lodestone Global"
            width={320}
            height={107}
            priority
            className="h-7 w-auto md:h-8"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-[0.78rem] uppercase tracking-[0.08em] text-ivory/70 transition-colors duration-200 hover:text-brass-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href={CTA_PRIMARY.href} className="btn-inverse hidden text-[0.7rem] lg:inline-flex">
            {CTA_PRIMARY.label}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-ivory xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="relative block h-4 w-6" aria-hidden>
              <span
                className={`absolute left-0 top-0 h-px w-6 bg-current transition-transform duration-200 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-px w-6 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-px w-6 bg-current transition-transform duration-200 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      {open && (
        <div
          id="mobile-nav"
          className="min-h-[calc(100vh-4.25rem)] border-t border-ivory/10 bg-navy xl:hidden"
        >
          <Container className="flex flex-col py-6">
            <nav aria-label="Mobile" className="flex flex-col">
              {primaryNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ivory/10 py-4 font-sans text-[0.95rem] uppercase tracking-[0.06em] text-ivory/80 transition-colors hover:text-brass-light"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href={CTA_PRIMARY.href}
              onClick={() => setOpen(false)}
              className="btn-inverse mt-6 w-fit"
            >
              {CTA_PRIMARY.label}
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
