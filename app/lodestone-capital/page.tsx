import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BackgroundPhoto } from "@/components/BackgroundPhoto";
import { photos } from "@/components/photos";

const CAPITAL_URL = "https://capital.lodestoneglobal.com";
const GLOBAL_URL = "https://www.lodestoneglobal.com";
export const metadata: Metadata = {
  title: { absolute: "Lodestone Capital | Long-term private investment" },
  description: "Principal-led private investment, disciplined capital allocation and long-term partnerships with owners and operators.",
  alternates: { canonical: CAPITAL_URL },
  openGraph: { title: "Lodestone Capital", description: "Principal-led private investment and long-term partnerships.", url: CAPITAL_URL, siteName: "Lodestone Capital" },
  robots: { index: false, follow: false },
};
const nav = [{href:"#philosophy",label:"Investment philosophy"},{href:"#criteria",label:"Investment criteria"},{href:"#partnership",label:"Partnership"},{href:"#announcements",label:"Announcements"}];
const criteria = [
  ["Understandable businesses","Businesses whose economics, customers and competitive position can be understood through disciplined diligence."],
  ["Aligned ownership","Owners and management teams with a shared commitment to building lasting enterprise value."],
  ["An identifiable path to improvement","Opportunities where operating expertise, stronger capabilities or disciplined capital allocation can contribute."],
  ["Long-term orientation","An investment thesis grounded in the underlying business, rather than dependence on short-term market conditions."],
];
export default function Page() {
  return <div className="bg-[#0a1420] text-white">
    <header className="border-b border-white/20"><div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-5 px-6 py-6 md:px-12 lg:px-16">
      <Link href="/lodestone-capital" aria-label="Lodestone Capital"><Image src="/logo/lodestone-capital-horizontal-navy.png" alt="Lodestone Capital" width={1000} height={383} className="h-12 w-auto brightness-0 invert"/></Link>
      <nav aria-label="Capital navigation" className="flex flex-wrap gap-5 text-sm">{nav.map(n=><a key={n.href} href={n.href} className="hover:underline">{n.label}</a>)}</nav>
    </div></header>
    <main id="main">
      <section className="relative isolate overflow-hidden"><BackgroundPhoto src={photos.compound.src} alt={photos.compound.alt} priority overlayStyle={{backgroundImage:"linear-gradient(90deg,rgba(10,20,32,.97),rgba(10,20,32,.45))"}}/>
        <div className="relative z-10 mx-auto flex min-h-[580px] max-w-[1440px] flex-col justify-end px-6 py-20 md:px-12 lg:px-16"><h1 className="max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-normal leading-[.96] tracking-[-.065em]">Capital with an owner's perspective.</h1><p className="mt-8 max-w-xl text-xl leading-relaxed text-[#d3dee8]">We pursue selective private investments alongside aligned owners, founders and experienced operators, with a long-term view of business ownership.</p></div></section>
      <section id="philosophy" className="bg-white text-[#10243a]"><div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 md:px-12 lg:grid-cols-2 lg:gap-24 lg:px-16"><h2 className="text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.05] tracking-[-.05em]">Investment philosophy</h2><div className="space-y-6 text-lg leading-relaxed text-[#526478]"><p>We look for opportunities to own good businesses with people who share our approach to capital allocation. We seek to understand how a company makes money, what could impair its value and what its management needs to achieve.</p><p>Lodestone Capital pursues selective private-company, real estate and co-investment opportunities. Our relationships with boards and operating executives inform how we evaluate businesses and work with owners.</p></div></div></section>
      <section id="criteria" className="bg-[#e8eff5] text-[#10243a]"><div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 lg:px-16"><h2 className="text-[clamp(2.5rem,4.5vw,4.5rem)] tracking-[-.05em]">What we look for</h2><div className="mt-8 border-t border-[#a9bac8]">{criteria.map(([title,body],i)=><article key={title} className="grid gap-4 border-b border-[#a9bac8] py-7 md:grid-cols-[.15fr_.85fr_1.4fr]"><span className="text-3xl text-[#526478]">0{i+1}</span><h3 className="text-2xl">{title}</h3><p className="text-lg leading-relaxed text-[#526478]">{body}</p></article>)}</div></div></section>
      <section id="partnership"><div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 md:px-12 lg:grid-cols-2 lg:gap-24 lg:px-16"><h2 className="text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.05] tracking-[-.05em]">How we work with owners</h2><div className="space-y-6 text-lg leading-relaxed text-[#d3dee8]"><p>Our approach combines investment diligence with an understanding of governance, operating performance and management capabilities. We aim to align objectives, clarify responsibilities and evaluate capital decisions in the context of the business.</p><p>Operating and governance support may be available through separately engaged businesses in the Lodestone ecosystem.</p></div></div></section>
      <section id="announcements" className="bg-white text-[#10243a]"><div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 lg:px-16"><h2 className="text-[clamp(2.5rem,4.5vw,4.5rem)] tracking-[-.05em]">Investment announcements</h2><div className="mt-8 max-w-3xl border-t border-[#a9bac8] py-7"><h3 className="text-2xl">Blulabs</h3><p className="mt-3 text-lg text-[#526478]">Read the original Lodestone announcement concerning the investment in Blulabs.</p><Link href={GLOBAL_URL+"/insights/lodestone-capital-blulabs-investment"} className="mt-5 inline-block border-b border-current pb-2 font-medium">Read the announcement ↗</Link></div></div></section>
      <section className="bg-[#e8eff5] text-[#10243a]"><div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 lg:px-16"><h2 className="text-[clamp(2.5rem,4.5vw,4.5rem)] tracking-[-.05em]">From operator to steward.</h2><p className="mt-4 max-w-3xl text-lg text-[#526478]">Four independent businesses supporting owners through governance, operating execution, capital allocation and family stewardship.</p><div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["Govern","Lodestone Global",GLOBAL_URL],["Scale","E3 Scale Network","https://www.e3scale.com"],["Compound","Lodestone Capital","/lodestone-capital"],["Steward","Lodestone Family Advisors","https://www.lodestonefamilyadvisors.com"]].map(([stage,name,href])=><Link key={stage} href={href} className="border-t border-[#a9bac8] pt-5"><span className="block text-2xl">{stage}</span><span className="mt-2 block text-[#526478]">{name}</span></Link>)}</div></div></section>
    </main>
    <footer className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 lg:px-16"><div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/20 pb-8"><Image src="/logo/lodestone-capital-horizontal-navy.png" alt="Lodestone Capital" width={1000} height={383} className="h-12 w-auto brightness-0 invert"/><Link href={GLOBAL_URL} className="text-base">Lodestone Global ↗</Link></div><p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#b8c6d3]">This information is provided for general informational purposes only and does not constitute an offer to sell or a solicitation to purchase any security. Investments involve risk, including possible loss of principal.</p><p className="mt-5 text-sm text-[#b8c6d3]">© {new Date().getFullYear()} Lodestone Capital.</p></footer>
  </div>;
}
