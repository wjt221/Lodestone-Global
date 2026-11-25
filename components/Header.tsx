"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Board advisory", href: "/governance-advisory" },
  { label: "Our process", href: "/#process" },
  { label: "Research", href: "/research" },
  { label: "Our work", href: "/case-studies" },
  { label: "Our ecosystem", href: "/#ecosystem" },
];
const ecosystem = [
  {label:"Lodestone Global",href:"/"},
  {label:"E3 Scale Network",href:"/e3-scale-network"},
  {label:"Lodestone Family Advisors",href:"/family-advisors"},
  {label:"Lodestone Capital",href:"/lodestone-capital"},
];

export function Header() {
  const pathname = usePathname();
  const home = pathname === "/";
  const [open,setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => { if(e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown",close);
    return () => window.removeEventListener("keydown",close);
  },[]);
  return (
    <header className={`${home ? "relative" : "fixed inset-x-0 top-0"} z-50 border-b border-white/10 bg-[#07192b] text-white`}>
      <div className={`mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-6 md:px-12 lg:px-16 ${home ? "py-6" : "h-[4.25rem]"}`}>
        <Link href="/" onClick={()=>setOpen(false)} aria-label="Lodestone Global home" className="shrink-0">
          <Image src="/logo/lodestone-global-horizontal-white.png" alt="Lodestone Global" width={320} height={107} priority className="h-10 w-auto md:h-11" />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 text-[17px] xl:flex 2xl:gap-8">
          {links.map(n => n.label === "Our ecosystem" ? (
            <div key={n.href} className="group relative">
              <Link href={n.href} className="inline-flex min-h-[44px] items-center gap-2 text-white/90 hover:text-white focus-visible:outline-white">{n.label}<span aria-hidden="true">⌄</span></Link>
              <div className="invisible absolute right-0 top-full w-[290px] border border-white/15 bg-[#07192b] p-4 opacity-0 shadow-xl transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {ecosystem.map(b=><Link key={b.href} href={b.href} className="block px-3 py-3 text-base text-white hover:bg-white/10">{b.label}</Link>)}
              </div>
            </div>
          ) : <Link key={n.href} href={n.href} aria-current={pathname===n.href?"page":undefined} className="inline-flex min-h-[44px] items-center whitespace-nowrap text-white/90 hover:text-white focus-visible:outline-white">{n.label}</Link>)}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="group hidden min-h-[44px] items-center gap-3 border-b border-white/50 pb-1 text-[17px] font-medium md:inline-flex">Contact <span aria-hidden="true">↗</span></Link>
          <button type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)} className="flex min-h-[44px] items-center gap-2 text-base font-medium xl:hidden">{open?"Close":"Menu"} <span aria-hidden="true">{open?"−":"+"}</span></button>
        </div>
      </div>
      {open && <nav id="mobile-nav" aria-label="Mobile" className="absolute inset-x-0 top-full max-h-[80svh] overflow-y-auto border-t border-white/20 bg-[#07192b] px-6 py-5 text-lg shadow-xl md:px-12 xl:hidden">
        {links.map(n=><Link key={n.href} href={n.href} onClick={()=>setOpen(false)} className="block border-b border-white/15 py-4">{n.label}</Link>)}
        <div className="grid gap-1 py-3 sm:grid-cols-2">{ecosystem.slice(1).map(n=><Link key={n.href} href={n.href} onClick={()=>setOpen(false)} className="block py-3 text-base text-[#c1cfdd]">{n.label}</Link>)}</div>
        <Link href="/contact" onClick={()=>setOpen(false)} className="block border-t border-white/15 py-4">Contact ↗</Link>
      </nav>}
    </header>
  );
}
