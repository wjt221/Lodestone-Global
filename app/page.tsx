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
      <header className="relative z-20 border-b border-white/10 bg-[#07192b] text-white">
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
        <section className="relative isolate overflow-hidden bg-[#07192b] text-white">
          <div className="absolute inset-0">
            <BackgroundPhoto src={photos.homeStatementBand.src} alt={photos.homeStatementBand.alt} priority objectPosition="center 44%" imageClassName="motion-safe:animate-[lodestone-image-in_1.4s_ease-out_both]" overlayStyle={{backgroundImage:"linear-gradient(90deg, rgba(5,19,34,.94) 0%, rgba(5,19,34,.79) 39%, rgba(5,19,34,.36) 72%, rgba(5,19,34,.24) 100%), linear-gradient(0deg, rgba(5,19,34,.64), transparent 55%)"}} />
          </div>
          <style>{`@keyframes lodestone-image-in { from { transform: scale(1.035); } to { transform: scale(1); } } @keyframes lodestone-copy-in { from { opacity: .15; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } } @media (prefers-reduced-motion:no-preference) { .lg-hero-copy { animation: lodestone-copy-in .75s ease-out both; } .lg-hero-photo img { animation: lodestone-image-in 1.4s ease-out both; } }`}</style>
          <div className="relative z-10 mx-auto flex min-h-[570px] max-w-[1600px] flex-col justify-end px-6 pb-12 pt-20 md:min-h-[680px] md:px-12 md:pb-16 lg:min-h-[min(740px,82svh)] lg:px-16">
            <div className="lg-hero-copy">
              <p className="mb-8 text-sm font-medium text-[#d2e1ed]">Private company board advisory</p>
              <h1 className="max-w-[1100px] text-[clamp(3.3rem,8.2vw,8.4rem)] font-normal leading-[.95] tracking-[-0.065em]">Build a board<br/>that matters.</h1>
              <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/30 pt-7 md:flex-row md:items-end">
                <p className="max-w-[490px] text-lg leading-relaxed text-[#e0e9f1]">We help owners of private companies find independent directors, build effective boards and get more from the boards they already have.</p>
                <Link href="#board-advisory" className="group inline-flex w-fit items-center gap-5 bg-white px-6 py-4 text-sm font-medium text-[#10243a] hover:bg-[#dce8f2]">Explore board services <Arrow /></Link>
              </div>
            </div>
          </div>
        </section>
        <div className="border-b border-[#dce3eb] bg-[#f5f8fa]">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-6 py-4 md:px-12 lg:px-16">
            <p className="text-sm text-[#10243a]"><span className="mr-3 font-medium text-[#42617a]">{latestEdition.year} research</span>Private Company Board Compensation Survey</p>
            <Link href="#research" className="group inline-flex items-center gap-3 text-sm font-medium text-[#10243a]">Discover the report <Arrow /></Link>
          </div>
        </div>

        <section id="board-advisory" className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="mb-14 grid items-end gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
            <div>
              <p className="mb-5 text-sm font-medium text-[#526478]">Our expertise</p>
              <h2 className="max-w-3xl text-[clamp(2.4rem,5.4vw,5.2rem)] font-normal leading-[1.02] tracking-[-0.055em]">What do you need<br className="hidden lg:block"/> from your board?</h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[#526478]">The right answer depends on your business, its strategy and where you want to take it. Start with the problem you need to solve.</p>
          </div>
          <ul className="grid gap-x-12 md:grid-cols-2">
            {services.map((s,i) => <li key={s.title} className="border-t border-[#d5dde5]">
              <Link href={s.href} className="group flex min-h-[145px] items-start justify-between gap-4 py-7 transition-colors hover:text-[#315f85]">
                <span className="pt-1 text-xs tabular-nums text-[#526478]">0{i+1}</span>
                <div className="flex-1"><h3 className="text-2xl font-normal tracking-[-0.035em] md:text-3xl">{s.title}</h3><p className="mt-3 max-w-[360px] text-sm leading-relaxed text-[#526478]">{s.desc}</p></div>
                <span className="text-2xl"><Arrow /></span>
              </Link>
            </li>)}
          </ul>
        </section>

        <section id="research" className="bg-[#e8eff5]">
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-20 md:px-12 md:py-24 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-16">
            <div>
              <p className="mb-5 text-sm font-medium text-[#526478]">Lodestone research / {latestEdition.editionOrdinal} annual edition</p>
              <h2 className="max-w-xl text-[clamp(2.6rem,4.7vw,4.6rem)] font-normal leading-[1.03] tracking-[-0.05em]">What should you pay your board?</h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[#526478]">Benchmark director compensation against private companies by revenue, industry, size and ownership structure.</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                <a href={latestEdition.purchaseUrl} className="group inline-flex items-center gap-3 bg-[#10243a] px-6 py-4 text-sm font-medium text-white">Purchase the report <Arrow /></a>
                <Link href="/research" className="group inline-flex items-center gap-3 border-b border-[#10243a] pb-2 text-sm font-medium">Explore the research <Arrow /></Link>
              </div>
            </div>
            <div className="relative isolate flex min-h-[260px] items-center justify-center overflow-hidden bg-[#0e263d] p-8 md:min-h-[410px] md:p-12">
              <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-10 select-none text-[clamp(8rem,19vw,19rem)] font-normal leading-none tracking-[-.1em] text-white/10">{latestEdition.year}</span>
              <Image src={latestEdition.coverImage.url} alt={latestEdition.year + " Private Company Board Compensation Survey cover"} width={latestEdition.coverImage.width} height={latestEdition.coverImage.height} sizes="(min-width: 1024px) 40vw, 85vw" className="relative z-10 h-auto w-full max-w-[540px] object-contain shadow-2xl" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[#d5dde5] pb-8">
            <div><p className="mb-5 text-sm font-medium text-[#526478]">Selected work</p><h2 className="text-[clamp(2.4rem,4.8vw,4.8rem)] font-normal leading-[1.04] tracking-[-0.05em]">In the boardroom.</h2></div>
            <Link href="/case-studies" className="group inline-flex items-center gap-3 border-b border-[#10243a] pb-2 text-sm font-medium">All case studies <Arrow /></Link>
          </div>
          <div className="grid gap-8 pt-10 md:grid-cols-[.72fr_1.28fr] lg:gap-24">
            <div><p className="text-sm text-[#526478]">Family-owned enterprise</p><h3 className="mt-3 text-3xl font-normal tracking-tight">Diesco Group</h3></div>
            <div><p className="max-w-2xl text-[clamp(1.5rem,2.7vw,2.65rem)] font-normal leading-[1.25] tracking-[-0.035em]">A board organized around the company’s strategy, recognized as Private Company Advisory Board of the Year in 2017.</p><Link href="/case-studies" className="group mt-7 inline-flex items-center gap-3 border-b border-[#10243a] pb-2 text-sm font-medium">See how we work <Arrow /></Link></div>
          </div>
        </section>

        <section id="ecosystem" className="relative isolate overflow-hidden bg-[#07192b] text-white">
          <Image src="/logo/lodestone-global-icon.png" width={700} height={700} alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-32 -z-10 w-[650px] opacity-[0.07] brightness-0 invert" />
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
            <div className="mb-14 grid items-end gap-6 lg:grid-cols-[1.1fr_.9fr] lg:gap-24">
              <div><p className="mb-5 text-sm text-[#a8bdcf]">The Lodestone ecosystem</p><h2 className="max-w-2xl text-[clamp(2.6rem,5.5vw,5.5rem)] font-normal leading-[1.02] tracking-[-0.05em]">Beyond the boardroom.</h2></div>
              <p className="max-w-md text-base leading-relaxed text-[#c1cfdd]">Our businesses work with owners on the board, the operating company, their investments and their family's wealth. Each has its own expertise.</p>
            </div>
            <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
              {ecosystem.map(b => <li key={b.name} className="border-t border-white/30">
                <Link href={b.href} className="group flex min-h-[130px] flex-col items-start gap-3 py-6 hover:text-[#b8d8ef]">
                  <span className="text-lg font-medium md:text-xl">{b.name}</span><span className="text-sm text-[#a8bdcf]">{b.role}</span><span className="mt-auto"><Arrow /></span>
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
