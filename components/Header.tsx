"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { primaryNav, CTA_PRIMARY, type NavItem } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    const base = href.split("#")[0];
    if (base === "/") return pathname === "/";
    return pathname === base || pathname.startsWith(`${base}/`);
  }

  function isActiveItem(item: NavItem) {
    return isActive(item.href) || Boolean(item.children?.some((c) => isActive(c.href)));
  }

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
      <Container className="flex h-[4.25rem] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Lodestone Global home">
          <Image
            src="/logo/lodestone-global-horizontal-white.png"
            alt="Lodestone Global"
            width={320}
            height={107}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-x-7 xl:flex">
          {primaryNav.map((item) => {
            const active = isActiveItem(item);
            const linkClass = `whitespace-nowrap font-sans text-[0.75rem] uppercase tracking-[0.07em] transition-colors duration-200 hover:text-brass-light ${
              active ? "text-brass-light" : "text-ivory/70"
            }`;

            if (item.children) {
              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex items-center gap-1.5 ${linkClass}`}
                  >
                    {item.label}
                    <span aria-hidden className="text-[0.55rem] leading-none">
                      ▾
                    </span>
                  </Link>
                  <div className="pointer-events-none absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                    <div className="min-w-[16rem] border border-ivory/10 bg-navy py-2 shadow-2xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          aria-current={isActive(child.href) ? "page" : undefined}
                          className={`block whitespace-nowrap px-5 py-2.5 font-sans text-[0.75rem] uppercase tracking-[0.06em] transition-colors hover:text-brass-light ${
                            isActive(child.href) ? "text-brass-light" : "text-ivory/75"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={linkClass}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href={CTA_PRIMARY.href}
            className="btn-inverse hidden whitespace-nowrap px-4 py-2.5 text-[0.68rem] tracking-[0.1em] xl:inline-flex"
          >
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
          className="h-[calc(100vh-4.25rem)] overflow-y-auto border-t border-ivory/10 bg-navy xl:hidden"
        >
          <Container className="flex flex-col py-6">
            <nav aria-label="Mobile" className="flex flex-col">
              {primaryNav.map((item) => {
                const active = isActiveItem(item);
                return (
                  <div key={item.href} className="border-b border-ivory/10">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`block py-4 font-sans text-[0.95rem] uppercase tracking-[0.06em] transition-colors hover:text-brass-light ${
                        active ? "text-brass-light" : "text-ivory/80"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="flex flex-col pb-3 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            aria-current={isActive(child.href) ? "page" : undefined}
                            className={`border-l border-ivory/15 py-2.5 pl-4 font-sans text-[0.85rem] tracking-[0.04em] transition-colors hover:text-brass-light ${
                              isActive(child.href) ? "text-brass-light" : "text-ivory/60"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
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
