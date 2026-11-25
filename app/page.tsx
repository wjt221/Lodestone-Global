import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { BackgroundPhoto } from "@/components/BackgroundPhoto";
import { photos } from "@/components/photos";
import { latestEdition } from "@/lib/reports";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Private Company Board Advisory | Lodestone Global" },
  description: "Lodestone Global helps privately held companies form, recruit for and strengthen their boards. Explore board advisory and private company board compensation research.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: false }, // Remove only at approved production cutover.
};

const nav = [
  { label: "Board advisory", href: "#board-advisory" },
  { label: "Research", href: "#research" },
  { label: "Our work", href: "/case-studies" },
  { label: "Our ecosystem", href: "#ecosystem" },
];
const services = [
  { title: "Build a board", desc: "Define the board’s mandate and composition, then recruit the independent directors to fill it.", href: "/governance-advisory#board-formation" },
  { title: "Strengthen your board", desc: "Evaluate effectiveness, clarify priorities and improve how the board works.", href: "/governance-advisory#board-optimization" },
  { title: "Find independent directors", desc: "Bring the right operating experience and perspectives to the boardroom.", href: "/governance-advisory" },
  { title: "Board compensation", desc: "Set director pay using research on the private-company market.", href: "/research" },
];
const ecosystem = [
  { name: "Lodestone Global", role: "Boards & governance", href: "/", logo: "/logo/lodestone-global-horizontal-white.png" },
  { name: "E3 Scale Network", role: "Enterprise value creation", href: "/e3-scale-network", logo: null },
  { name: "Lodestone Family Advisors", role: "Family wealth", href: "/family-advisors", logo: null },
  { name: "Lodestone Capital", role: "Private investment", href: "/lodestone-capital", logo: null },
];

function Arrow() { return <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">↗</span>; }

export default function Home() {
  return (
    <div className="bg-white font-sans text-[#10243a]">
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      <header className="relative z-20 bg-[#091725] text-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-8 px-6 py-6 md:px-12 lg:px-16">
          <Link href="/" aria-label="Lodestone Global home" className="shrink-0">
            <Image src="/logo/lodestone-global-horizontal-white.png" alt="Lodestone Global" width={320} height={107} priority className="h-10 w-auto md:h-11" />
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-8 text-sm lg:flex">
            {nav.map(n => <Link key={n.label} href={n.href} className="text-white/80 hover:text-white focus-visible:outline-white">{n.label}</Link>)}
          </nav>
          <Link href="/contact" className="group hidden items-center gap-3 border-b border-white/50 pb-2 text-sm md:inline-flex">Contact <Arrow /></Link>
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none text-sm">Menu <span aria-hidden="true">+</span></summary>
            <nav aria-label="Mobile" className="absolute right-0 top-10 z-30 flex w-56 flex-col gap-5 border border-white/20 bg-[#091725] p-6 shadow-xl">
              {nav.map(n => <Link key={n.label} href={n.href}>{n.label}</Link>)}
              <Link href="/contact">Contact</Link>
            </nav>
          </details>
        </div>
      </header>
      <main id="main">
        <section className="relative isolate overflow-hidden bg-[#091725] text-white">
          <div className="mx-auto grid max-w-[1600px] lg:min-h-[680px] lg:grid-cols-[0.96fr_1.04fr]">
            <div className="relative z-10 flex flex-col items-start justify-center px-6 pb-16 pt-14 md:px-12 lg:px-16 lg:py-24">
              <p className="mb-7 text-sm tracking-[0.04em] text-[#bac9d8]">Private company board advisory</p>
              <h1 className="max-w-[660px] text-[clamp(3rem,5.7vw,6rem)] font-normal leading-[0.99] tracking-[-0.055em]">Build the board your business needs.</h1>
              <p className="mt-8 max-w-[470px] text-lg leading-relaxed text-[#c1cfdd]">We help private-company owners form effective boards, find exceptional independent directors and make existing boards work better.</p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                <Link href="#board-advisory" className="group inline-flex items-center gap-4 border-b border-white/70 pb-2 text-sm font-medium">Explore our board services <Arrow /></Link>
                <Link href="/contact" className="text-sm text-[#c1cfdd] hover:text-white">Discuss your board</Link>
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden md:min-h-[460px] lg:min-h-full">
              <BackgroundPhoto src={photos.hero.src} alt={photos.hero.alt} priority sizes="(min-width: 1024px) 52vw, 100vw" objectPosition="center right" overlayStyle={{backgroundImage:"linear-gradient(90deg, rgba(9,23,37,.22), rgba(9,23,37,.02))"}} />
            </div>
          </div>
        </section>

        <section id="board-advisory" className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <p className="mb-5 text-sm font-medium text-[#526478]">Board advisory</p>
              <h2 className="max-w-lg text-[clamp(2.3rem,4.2vw,4.3rem)] font-normal leading-[1.04] tracking-[-0.045em]">A board should make the business better.</h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[#526478]">From the first independent director to a fully functioning board, we work with owners and leadership teams at each stage of the process.</p>
            </div>
            <ul className="border-t border-[#d5dde5]">
              {services.map(s => <li key={s.title} className="border-b border-[#d5dde5]">
                <Link href={s.href} className="group flex items-start justify-between gap-6 py-6 md:py-7">
                  <div><h3 className="text-xl font-medium tracking-tight md:text-2xl">{s.title}</h3><p className="mt-2 max-w-lg text-sm leading-relaxed text-[#526478]">{s.desc}</p></div>
                  <span className="mt-1 text-xl"><Arrow /></span>
                </Link>
              </li>)}
            </ul>
          </div>
        </section>

        <section id="research" className="bg-[#e9eef3]">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-20 md:px-12 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24 lg:px-16">
            <div>
              <p className="mb-5 text-sm font-medium text-[#526478]">Proprietary research · {latestEdition.year}</p>
              <h2 className="max-w-xl text-[clamp(2.4rem,4vw,4rem)] font-normal leading-[1.05] tracking-[-0.045em]">What should you pay your board?</h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-[#526478]">The {latestEdition.editionOrdinal} annual Private Company Board Compensation Survey benchmarks director pay by company revenue, industry, size and ownership structure.</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link href="/research" className="group inline-flex items-center gap-3 border-b border-[#10243a] pb-2 text-sm font-medium">Explore the research <Arrow /></Link>
                <a href={latestEdition.purchaseUrl} className="group inline-flex items-center gap-3 bg-[#10243a] px-6 py-3.5 text-sm font-medium text-white">Purchase the report <Arrow /></a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[540px]">
              <Image src={latestEdition.coverImage.url} alt={latestEdition.year + " Private Company Board Compensation Survey cover"} width={latestEdition.coverImage.width} height={latestEdition.coverImage.height} sizes="(min-width: 1024px) 40vw, 85vw" className="h-auto w-full object-contain" />
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-16">
          <div className="relative min-h-[290px] overflow-hidden bg-[#091725] md:min-h-[420px]">
            <BackgroundPhoto src={photos.govern.src} alt={photos.govern.alt} sizes="(min-width: 1024px) 45vw, 100vw" overlayStyle={{backgroundColor:"rgba(9,23,37,.03)"}} />
          </div>
          <div>
            <p className="mb-5 text-sm font-medium text-[#526478]">Our work</p>
            <h2 className="text-[clamp(2.2rem,3.6vw,3.6rem)] font-normal leading-[1.07] tracking-[-0.045em]">Experience in the boardroom.</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#526478]">See how we have worked with privately held and family-owned businesses to build governance around their priorities.</p>
            <Link href="/case-studies" className="group mt-8 inline-flex items-center gap-3 border-b border-[#10243a] pb-2 text-sm font-medium">Explore our case studies <Arrow /></Link>
          </div>
        </section>

        <section id="ecosystem" className="bg-[#091725] text-white">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-24 lg:px-16">
            <div>
              <p className="mb-5 text-sm text-[#a8bdcf]">The Lodestone ecosystem</p>
              <h2 className="max-w-lg text-[clamp(2.5rem,4.3vw,4.2rem)] font-normal leading-[1.04] tracking-[-0.045em]">Beyond the boardroom.</h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[#c1cfdd]">Four businesses with distinct expertise in governance, operating performance, investing and family wealth. Engage the team you need, when you need it.</p>
            </div>
            <ul className="border-t border-white/20">
              {ecosystem.map(b => <li key={b.name} className="border-b border-white/20">
                <Link href={b.href} className="group flex items-center justify-between gap-5 py-6">
                  <span><span className="block text-lg font-medium md:text-xl">{b.name}</span><span className="mt-1 block text-sm text-[#a8bdcf]">{b.role}</span></span><Arrow />
                </Link>
              </li>)}
            </ul>
          </div>
        </section>

        <section className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-end md:px-12 md:py-24 lg:px-16">
          <div><p className="mb-5 text-sm text-[#526478]">Start a conversation</p><h2 className="max-w-xl text-[clamp(2.2rem,4vw,4rem)] font-normal leading-[1.06] tracking-[-0.045em]">Let's talk about your board.</h2></div>
          <div className="flex flex-wrap gap-6">
            <Link href="/contact" className="group inline-flex items-center gap-3 border-b border-[#10243a] pb-2 text-sm font-medium">Contact Lodestone <Arrow /></Link>
            <Link href="/insights" className="group inline-flex items-center gap-3 border-b border-[#10243a] pb-2 text-sm font-medium">Read our insights <Arrow /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
