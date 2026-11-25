import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/content";
import { BOARD_TAGLINE } from "@/lib/site";

const groups = [
  {title:"Board advisory",links:[{label:"Board services",href:"/governance-advisory"},{label:"Build your board",href:"/build"},{label:"Our process",href:"/build#process"},{label:"Client case studies",href:"/case-studies"},{label:"Meet our team",href:"/about"}]},
  {title:"Research & insights",links:[{label:"Compensation research",href:"/research"},{label:"Purchase reports",href:"/research#editions"},{label:"Insights",href:"/insights"}]},
  {title:"Our ecosystem",links:[{label:"Lodestone Global",href:"/"},{label:"E3 Scale Network",href:"/e3-scale-network"},{label:"Lodestone Family Advisors",href:"/family-advisors"},{label:"Lodestone Capital",href:"/lodestone-capital"}]},
];
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="bg-[#07192b] font-sans text-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-8 pt-16 md:px-12 md:pt-24 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/20 pb-12 lg:flex-row lg:items-end">
          <div><Link href="/" aria-label="Lodestone Global home"><Image src="/logo/lodestone-global-horizontal-white.png" alt="Lodestone Global" width={320} height={107} className="h-12 w-auto" /></Link>
          <p className="mt-6 whitespace-nowrap text-[clamp(1rem,2.6vw,2.8rem)] font-normal leading-[1.1] tracking-[-.035em]">{BOARD_TAGLINE}</p></div>
          <Link href="/contact" className="group inline-flex min-h-[52px] shrink-0 items-center gap-5 bg-white px-7 py-4 text-lg font-medium text-[#10243a] hover:bg-[#dce8f2]">Contact Lodestone <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="grid gap-x-10 gap-y-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map(g=><nav key={g.title} aria-label={g.title} className="flex flex-col gap-3"><h2 className="mb-2 text-sm font-medium text-[#a8bdcf]">{g.title}</h2>{g.links.map(l=><Link key={l.label} href={l.href} className="w-fit py-1 text-base text-white/90 hover:text-white hover:underline focus-visible:outline-white">{l.label}{l.href.startsWith("https://") ? " ↗" : ""}</Link>)}</nav>)}
          <div className="flex flex-col gap-3"><h2 className="mb-2 text-sm font-medium text-[#a8bdcf]">Get in touch</h2><address className="flex flex-col gap-3 text-base not-italic text-white/90"><span>{CONTACT.location}</span><a href={`mailto:${CONTACT.email}`} className="break-all hover:underline">{CONTACT.email}</a><a href={CONTACT.phoneHref} className="hover:underline">{CONTACT.phone}</a><a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn ↗</a></address></div>
        </div>
        <div className="border-t border-white/20 pt-8">
          <p className="max-w-3xl text-sm leading-relaxed text-[#b6c7d6]">Lodestone Family Advisors provides advisory services; Lodestone Capital pursues investment activities. Nothing on this site is an offer to sell or a solicitation to buy any security, or investment, legal, or tax advice. Investing involves risk, including possible loss of principal.</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-[#b6c7d6]"><span>© {year} {CONTACT.legalEntity}. All rights reserved.</span><Link href="/privacy" className="text-base text-white hover:underline">Privacy policy</Link></div>
        </div>
      </div>
    </footer>
  );
}
