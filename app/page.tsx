import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ClientLogoBar, ClientTestimonials } from "@/components/ClientEvidence";
import { BuyReportButton } from "@/components/BuyReportButton";
import { BackgroundPhoto } from "@/components/BackgroundPhoto";
import { photos } from "@/components/photos";
import { latestEdition } from "@/lib/reports";
import { articles } from "@/lib/articles";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Private Company Board Advisory | Lodestone Global" },
  description: "High-performing board experts. Lodestone Global builds, facilitates, optimizes and educates private-company boards around the globe to help owners create lasting enterprise value.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: false }, // Remove only at approved production cutover.
};

const services = [
  { title: "Build your board", desc: "Define the right strategy, design the board around it and recruit experienced independent directors who can help deliver it.", href: "/governance-advisory#board-formation", number: "01", category: "Board formation" },
  { title: "Optimize your board", desc: "Evaluate, refresh and strengthen your existing board so it drives performance, accountability and better decisions.", href: "/governance-advisory#board-optimization", number: "02", category: "Board effectiveness" },
  { title: "Compensate your board", desc: "Set the right director compensation with our annual private-company survey and company-specific benchmarking.", href: "/research", number: "03", category: "Research & benchmarking" },
  { title: "Facilitate & educate", desc: "Run more productive meetings, develop your directors and keep the board focused on the work that matters.", href: "/governance-advisory#board-facilitation-and-education", number: "04", category: "Ongoing board support" },
];
// Editorial adaptation of the five board benefits on the live Wix homepage.
// Source: https://www.lodestoneglobal.com/
const value = [
  { title: "Promote accountability", desc: "Give the CEO a trusted sounding board, challenge assumptions and establish clear ownership of the commitments that matter." },
  { title: "Drive performance", desc: "Sharpen strategy, concentrate resources on the highest-priority initiatives and maintain the discipline to execute." },
  { title: "Extend your network", desc: "Access experienced operators, industry relationships and perspectives outside the company's existing circle." },
  { title: "Lend credibility", desc: "Show customers, capital partners and other stakeholders that the business has independent expertise and a serious approach to governance." },
  { title: "Provide air cover", desc: "Help management navigate difficult decisions, competing shareholder interests and sensitive family or leadership dynamics." },
];
const differentiators = [
  { title: "The right people, not just the right résumés", desc: "Our Qualified Director Database™ brings together thousands of experienced directors and executives. We assess their expertise and fit against the strategy of your company." },
  { title: "Partners in the boardroom", desc: "We work alongside owners through board design, recruitment, onboarding and ongoing performance. Our team brings thousands of hours of public- and private-company board experience." },
  { title: "Decisions informed by data", desc: "Our annual compensation research helps companies compete for the right directors and establish pay appropriate to their market and budget." },
];
const publications = ["Directors & Boards", "Private Company Director", "Family Business", "Forbes"];
const process = [
  { title: "Strategic review", desc: "Interview the owners and key decision makers to understand the business, its objectives and whether a board is the right solution.", detail: "Start with the business, not the board seats." },
  { title: "Board design", desc: "Define the mandate and the mix of expertise and personal qualities needed in the boardroom.", detail: "Lodestone Global Matrix™" },
  { title: "Board development", desc: "Prepare a company prospectus, identify candidates, assess their fit and introduce the right people. The owner makes the appointment.", detail: "Qualified Director Database™" },
  { title: "First meeting", desc: "Onboard the directors, establish the agenda and facilitate the first meeting around the company's strategic priorities.", detail: "From recruitment to a working board." },
  { title: "Performance review", desc: "Assess director and board effectiveness regularly, and translate the findings into practical improvements.", detail: "Lodestone Global Feedback Loop™" },
];

const ecosystem = [
  { stage: "Govern", name: "Lodestone Global", role: "Get the board and strategy right.", desc: "Build a high-performing board around the owner's objectives. Establish the strategy, leadership priorities and governance needed to create long-term enterprise value.", href: "#board-advisory", action: "Explore board advisory" },
  { stage: "Scale", name: "E3 Scale Network", role: "Turn strategy into performance.", desc: "Work with experienced operating partners to drive management accountability, improve execution and scale the business beyond its dependence on the owner.", href: "https://e3-ii1imy8q0-wjt221s-projects.vercel.app", action: "Explore E3 Scale Network" },
  { stage: "Compound", name: "Lodestone Capital", role: "Move from operator to investor.", desc: "With a business that can operate without your daily involvement, focus on capital allocation and selective investment opportunities to compound wealth over time.", href: "/lodestone-capital", action: "Explore Lodestone Capital" },
  { stage: "Steward", name: "Lodestone Family Advisors", role: "Pass on wealth with purpose.", desc: "Build a professionally managed family office. Coordinate investments, family governance and tax-efficient wealth transfer planning to prepare the next generation.", href: "https://lfa-xi.vercel.app", action: "Explore Family Advisors" },
];

function Arrow() { return <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">↗</span>; }

export default function Home() {
  return (
    <div className="bg-white font-sans text-[#10243a]">
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      <Header />
      <main id="main">
        <section className="relative isolate overflow-hidden bg-[#07192b] text-white">
          <div className="lg-hero-photo absolute inset-0">
            <BackgroundPhoto src={photos.homeStatementBand.src} alt={photos.homeStatementBand.alt} priority objectPosition="center 44%" imageClassName="motion-safe:animate-[lodestone-image-in_1.4s_ease-out_both]" overlayStyle={{backgroundImage:"linear-gradient(90deg, rgba(5,19,34,.94) 0%, rgba(5,19,34,.79) 39%, rgba(5,19,34,.36) 72%, rgba(5,19,34,.24) 100%), linear-gradient(0deg, rgba(5,19,34,.64), transparent 55%)"}} />
          </div>
          <style>{`@keyframes lodestone-image-in { from { transform: scale(1.035); } to { transform: scale(1); } } @keyframes lodestone-copy-in { from { opacity: .15; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } } @media (prefers-reduced-motion:no-preference) { .lg-hero-copy { animation: lodestone-copy-in .75s ease-out both; } .lg-hero-photo img { animation: lodestone-image-in 1.4s ease-out both; } }`}</style>
          <div className="relative z-10 mx-auto flex min-h-[570px] max-w-[1600px] flex-col justify-end px-6 pb-12 pt-20 md:min-h-[680px] md:px-12 md:pb-16 lg:min-h-[min(740px,82svh)] lg:px-16">
            <div className="lg-hero-copy">
              <p className="mb-7 text-[clamp(1rem,1.5vw,1.35rem)] font-medium tracking-[.015em] text-[#e0e9f1]">High-Performing Board Experts.</p>
              <h1 className="max-w-[1100px] text-[clamp(3.3rem,7.4vw,7.7rem)] font-normal leading-[.95] tracking-[-0.065em]">A better board.<br/>A more valuable business.</h1>
              <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/30 pt-7 md:flex-row md:items-end">
                <p className="max-w-[590px] text-lg leading-relaxed text-[#e0e9f1]">We build, facilitate, optimize and educate boards around the globe, helping private and family-owned businesses accelerate growth, strengthen leadership and create lasting enterprise value.</p>
                <div className="flex shrink-0 flex-wrap items-center gap-5"><Link href="#services" className="group inline-flex min-h-[52px] w-fit items-center gap-4 bg-white px-6 py-4 text-lg font-medium text-[#10243a] hover:bg-[#dce8f2]">Explore our services <Arrow /></Link><Link href="#client-evidence" className="group inline-flex min-h-[52px] w-fit items-center gap-3 border border-white/60 px-6 py-4 text-lg font-medium text-white transition-colors hover:bg-white/10">Our client results <Arrow /></Link></div>
              </div>
            </div>
          </div>
        </section>
        <ClientLogoBar />
        <section id="services" className="mx-auto max-w-[1440px] scroll-mt-20 px-6 py-14 md:px-12 md:py-20 lg:px-16">
          <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="mb-4 text-sm font-medium text-[#526478]">Our products &amp; services</p><h2 className="max-w-4xl text-[clamp(2.5rem,4.5vw,4.6rem)] font-normal leading-[1.03] tracking-[-.05em]">Make your board a competitive advantage.</h2></div><Link href="/governance-advisory" className="group inline-flex min-h-[44px] items-center gap-3 border-b border-[#10243a] pb-2 text-lg font-medium">All board services <Arrow /></Link></div>
          <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{services.map((s,i)=><li key={s.title}><Link href={s.href} className={`group flex h-full min-h-[245px] flex-col border-t-2 border-[#10243a] p-6 transition-colors ${i===0?"bg-[#10243a] text-white hover:bg-[#1d3f59]":"bg-[#eef3f7] hover:bg-[#e1eaf2]"}`}><div className="flex items-center justify-between gap-2"><p className={`text-sm font-medium ${i===0?"text-[#c1cfdd]":"text-[#526478]"}`}>{s.category}</p><span aria-hidden="true" className={`text-sm tabular-nums ${i===0?"text-[#c1cfdd]":"text-[#526478]"}`}>{s.number}</span></div><h3 className="mt-6 text-[clamp(1.5rem,2.35vw,2.25rem)] font-normal leading-tight tracking-[-.035em]">{s.title}</h3><p className={`mb-6 mt-4 text-base leading-relaxed ${i===0?"text-[#dce6ee]":"text-[#526478]"}`}>{s.desc}</p><span className="mt-auto text-2xl"><Arrow /></span></Link></li>)}</ul>
        </section>

        <section id="board-advisory" className="bg-[#eef3f7]">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
              <div><p className="mb-6 text-sm font-medium text-[#526478]">The business case for a board</p><h2 className="max-w-3xl text-[clamp(2.6rem,5.1vw,5.1rem)] font-normal leading-[1.02] tracking-[-.055em]">The return on a board should be measured in the business.</h2><p className="mt-7 max-w-xl text-lg leading-relaxed text-[#526478]">The right independent directors help owners pursue profitable growth, improve capital allocation, strengthen leadership and prepare the company for its next chapter. The mandate begins with the owner's objectives.</p><Link href="/governance-advisory" className="group mt-7 inline-flex min-h-[44px] items-center gap-3 border-b border-[#10243a] pb-2 text-lg font-medium">What a board can do <Arrow /></Link></div>
              <div className="border-[#c2d1df] pt-3 lg:border-l lg:pl-14"><p className="text-[clamp(7rem,15vw,13rem)] leading-[.8] tracking-[-.09em] tabular-nums">90<span className="align-top text-[.54em]">%</span></p><p className="mt-8 max-w-lg text-[clamp(1.45rem,2.5vw,2.25rem)] leading-[1.22] tracking-[-.025em]">of surveyed companies reported higher EBITDA after implementing a board.</p><p className="mt-5 max-w-sm text-sm leading-relaxed text-[#526478]">2026 Private Company Board Compensation Survey. Self-reported; not proof of causation or a guarantee of results.</p></div>
            </div>
            <div className="mt-16 grid gap-x-7 gap-y-7 border-t border-[#c2d1df] pt-9 sm:grid-cols-2 lg:grid-cols-5">{value.map(v=><div key={v.title}><h3 className="text-xl font-medium leading-tight tracking-tight">{v.title}</h3><p className="mt-3 text-base leading-relaxed text-[#526478]">{v.desc}</p></div>)}</div>
          </div>
        </section>

        <section id="client-evidence" className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="flex flex-wrap items-end justify-between gap-6"><div><p className="mb-5 text-sm font-medium text-[#526478]">Value creation in practice</p><h2 className="max-w-3xl text-[clamp(2.4rem,4.8vw,4.8rem)] font-normal leading-[1.04] tracking-[-.05em]">What the right board can help achieve.</h2></div><Link href="/case-studies" className="group inline-flex min-h-[44px] items-center gap-3 border-b border-[#10243a] pb-2 text-lg font-medium">Explore case studies <Arrow /></Link></div>
          {/* Industry imagery from the original public Wix case studies; illustrative, not verified photographs of the clients' premises. */}
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
            <article className="relative isolate flex min-h-[480px] flex-col justify-between overflow-hidden bg-[#07192b] p-8 text-white md:p-12">
              <BackgroundPhoto src="https://static.wixstatic.com/media/b7569128e76a405e9b04cc240497d066.jpg" alt="Packaging manufacturing facility (illustrative)" sizes="(min-width:1024px) 55vw,100vw" overlayStyle={{backgroundImage:"linear-gradient(180deg,rgba(7,25,43,.32),rgba(7,25,43,.72) 38%,rgba(7,25,43,.97))"}}/>
              <p className="relative z-10 text-base font-medium text-white">Diesco Group · Profitability</p>
              <div className="relative z-10"><p className="mt-6 text-[clamp(5rem,10vw,9rem)] leading-[.85] tracking-[-.075em]">10×</p><h3 className="mt-6 text-3xl font-normal tracking-tight">EBITDA following board formation</h3><p className="mt-4 max-w-lg text-base leading-relaxed text-[#d8e5ef]">Independent directors supported strategy, accountability and management development. Recognized as Advisory Board of the Year in 2017 and Best Family Business Board in 2024.</p></div>
            </article>
            <article className="flex flex-col overflow-hidden bg-[#e8eff5]">
              <div className="relative min-h-[200px] flex-1"><BackgroundPhoto src="https://static.wixstatic.com/media/d7f019a0e0ef4cfb83f63dab7b09ecfe.jpg" alt="Residential real estate (illustrative)" sizes="(min-width:1024px) 43vw,100vw" overlayStyle={{backgroundColor:"rgba(7,25,43,.1)"}} /></div>
              <div className="p-8 md:p-10"><p className="text-base text-[#526478]">Morgan Properties · Growth</p><p className="mt-4 text-[clamp(4rem,7vw,6rem)] leading-none tracking-[-.075em]">$2B+</p><h3 className="mt-3 text-2xl font-normal">Acquisitions guided by the board</h3><p className="mt-3 max-w-lg text-base leading-relaxed text-[#526478]">Independent real estate and investment expertise supported acquisitions after board formation in 2017.</p></div>
            </article>
            <article className="grid overflow-hidden border border-[#d5dde5] sm:grid-cols-[.65fr_1fr]"><div className="relative min-h-[190px]"><BackgroundPhoto src="https://static.wixstatic.com/media/d9e74c6ef47b434da206cf466e4c270e.jpg" alt="Food preparation (illustrative)" sizes="(min-width:1024px) 22vw,50vw" /></div><div className="p-7"><p className="text-sm font-medium text-[#526478]">Martin Preferred Foods · Leadership</p><h3 className="mt-4 text-2xl font-normal tracking-tight">A stronger management team</h3><p className="mt-4 text-base leading-relaxed text-[#526478]">New sales, operations and analytics leaders joined following board formation and a generational transition.</p></div></article>
            <article className="grid overflow-hidden border border-[#d5dde5] sm:grid-cols-[.65fr_1fr]"><div className="relative min-h-[190px]"><BackgroundPhoto src="https://static.wixstatic.com/media/0c8d97d482cd4c658502fff90ec9275b.jpg" alt="Food ingredients (illustrative)" sizes="(min-width:1024px) 20vw,50vw" /></div><div className="p-7"><p className="text-sm font-medium text-[#526478]">Symega · International growth</p><h3 className="mt-4 text-2xl font-normal tracking-tight">Expertise for the next market</h3><p className="mt-4 text-base leading-relaxed text-[#526478]">The board added international logistics, food-industry and marketing experience to the expansion agenda.</p></div></article>
          </div><p className="mt-5 text-sm text-[#526478]">Historical client case studies. Other factors contributed to business performance; outcomes vary.</p>
        </section>

        <section className="grid bg-[#07192b] text-white lg:grid-cols-[.95fr_1.05fr]"><div className="relative min-h-[300px] lg:min-h-[580px]"><BackgroundPhoto src={photos.govern.src} alt={photos.govern.alt} sizes="(min-width:1024px) 48vw,100vw" overlayStyle={{backgroundColor:"rgba(7,25,43,.12)"}} /></div><div className="px-6 py-14 md:px-12 md:py-20 lg:px-16"><p className="mb-5 text-sm font-medium text-[#b7cadb]">Why Lodestone Global?</p><h2 className="max-w-xl text-[clamp(2.4rem,4vw,4rem)] font-normal leading-[1.05] tracking-[-.05em]">Board partners, not headhunters.</h2><div className="mt-8 space-y-6">{differentiators.map(d=><div key={d.title}><h3 className="text-xl font-medium">{d.title}</h3><p className="mt-2 max-w-lg text-base leading-relaxed text-[#c1cfdd]">{d.desc}</p></div>)}</div><p className="mt-8 text-sm text-[#b7cadb]">Research and perspectives published in {publications.join(", ")}.</p></div></section>

        <section id="process" className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <p className="mb-5 text-sm font-medium text-[#526478]">Our board formation methodology</p><h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5rem)] font-normal leading-[1.02] tracking-[-.055em]">Start with the value the board needs to create.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#526478]">Work backward from the company's strategy. Define the mandate, recruit against it and evaluate how well the board delivers.</p>
          <ol className="mt-14 grid gap-x-7 gap-y-9 sm:grid-cols-2 lg:grid-cols-5">{process.map((p,i)=><li key={p.title} className="relative border-t-2 border-[#10243a] pt-6"><span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#10243a] text-base font-medium text-white">{i+1}</span><h3 className="mt-5 text-2xl font-medium leading-tight tracking-tight">{p.title}</h3><p className="mt-3 text-base leading-relaxed text-[#526478]">{p.desc}</p><p className="mt-5 text-sm font-medium">{p.detail}</p></li>)}</ol>
          <Link href="/governance-advisory#process" className="group mt-12 inline-flex min-h-[52px] items-center gap-5 bg-[#10243a] px-7 py-4 text-lg font-medium text-white">Explore the five-stage process <Arrow /></Link>
        </section>

        <ClientTestimonials />

        <section id="ecosystem" className="relative isolate overflow-hidden bg-white text-[#10243a] scroll-mt-24">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20 lg:px-16">
            <div className="grid items-end gap-6 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
              <div><p className="mb-5 text-sm font-medium text-[#526478]">The Lodestone ecosystem</p><h2 className="text-[clamp(2.8rem,5.6vw,5.6rem)] font-normal leading-[.98] tracking-[-.06em]">From operator<br className="hidden sm:block"/> to steward.</h2></div>
              <p className="max-w-xl text-lg leading-relaxed text-[#526478]">The journey begins with a board and a strategy. With the right operating partners, that strategy becomes a business that can thrive without you in the day-to-day. You gain the freedom to invest, compound capital and ultimately pass on your wealth to the next generation.</p>
            </div>
            <div className="relative mt-12 border-y border-[#d5dde5]">
              <div aria-hidden="true" className="absolute left-0 right-0 top-[31px] hidden h-px bg-gradient-to-r from-[#bccddd] via-[#456a88] to-[#10243a] lg:block"/>
              <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {ecosystem.map((item,i)=><li key={item.stage} className="group relative border-b border-[#d5dde5] last:border-b-0 sm:even:border-l lg:border-b-0 lg:border-l lg:first:border-l-0">
                  <Link href={item.href} className={`relative flex min-h-[355px] h-full flex-col px-5 pb-7 pt-7 transition-colors md:px-6 ${item.stage==="Govern"?"bg-[#eef3f7] hover:bg-[#e1eaf2]":"hover:bg-[#f5f8fa]"}`}>
                    <div className="relative flex items-center justify-between gap-4">
                      <span className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#a5b9cb] text-sm font-medium ${item.stage==="Govern"?"bg-[#10243a] text-white":"bg-white text-[#526478]"}`}>0{i+1}</span>
                      <span className="text-2xl text-[#526478] transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                    </div>
                    <p className="mt-6 text-[clamp(1.6rem,2.8vw,2.65rem)] font-normal tracking-[-.04em]">{item.stage}</p>
                    <h3 className="mt-2 text-base font-semibold">{item.name}</h3>
                    <p className="mt-4 text-base font-medium leading-snug text-[#10243a]">{item.role}</p><p className="mt-3 text-base leading-relaxed text-[#526478]">{item.desc}</p>
                    {item.stage==="Govern"&&<span className="mt-4 text-sm font-medium text-[#10243a]">Start here · Board advisory</span>}
                    <span className="mt-auto pt-5 text-sm font-medium underline decoration-[#a5b9cb] underline-offset-4">{item.action}</span>
                  </Link>
                </li>)}
              </ol>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#526478]">The journey is different for every owner. Each business can support you independently or work alongside the others as your needs evolve.</p>
          </div>
        </section>

        <section id="insights" className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-24 lg:px-16">
          <div className="flex flex-wrap items-end justify-between gap-6"><div><p className="mb-5 text-sm font-medium text-[#526478]">Lodestone Insights</p><h2 className="max-w-4xl text-[clamp(2.6rem,5vw,5rem)] font-normal leading-[1.03] tracking-[-.05em]">Perspectives from the boardroom.</h2><p className="mt-5 max-w-xl text-lg leading-relaxed text-[#526478]">Practical guidance, original research and lessons from building high-performing private-company boards.</p></div><Link href="/insights" className="group inline-flex min-h-[44px] items-center gap-3 border-b border-[#10243a] pb-2 text-lg font-medium">Explore all {articles.length} articles <Arrow /></Link></div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-12">
            {["improving-board-performance","advisory-board-readiness","attracting-top-board-members"].map((slug,i)=>{const a=articles.find(p=>p.slug===slug);if(!a)return null;return <Link key={slug} href={"/insights/"+slug} className={`group flex flex-col gap-5 ${i===0?"lg:row-span-2":"border-t border-[#d5dde5] pt-5 sm:grid sm:grid-cols-[.65fr_1fr] lg:pt-0 lg:border-t-0"}`}>
              <div className={`relative overflow-hidden bg-[#e8eff5] ${i===0?"aspect-[16/10]":"aspect-[4/3]"}`}>{a.image&&<Image src={a.image.src} alt="" fill sizes={i===0?"(min-width:1024px) 50vw,100vw":"(min-width:640px) 25vw,100vw"} className="object-cover transition duration-500 motion-safe:group-hover:scale-[1.035]" />}</div><div><p className="text-sm font-medium text-[#526478]">{a.category} · {a.minutesToRead} min read</p><h3 className={`mt-3 font-normal leading-tight tracking-[-.035em] group-hover:underline ${i===0?"text-3xl md:text-4xl":"text-2xl"}`}>{a.title}</h3>{i===0&&<p className="mt-4 max-w-xl text-base leading-relaxed text-[#526478]">{a.summary}</p>}<p className="mt-4 text-base font-medium">Read article <Arrow /></p></div></Link>})}
          </div>
        </section>

        <section id="research" className="bg-[#e8eff5]">
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-20 md:px-12 md:py-24 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-16">
            <div>
              <p className="mb-5 text-sm font-medium text-[#526478]">Lodestone research / {latestEdition.editionOrdinal} annual edition</p>
              <h2 className="max-w-xl text-[clamp(2.6rem,4.7vw,4.6rem)] font-normal leading-[1.03] tracking-[-0.05em]">What should you pay your board?</h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[#526478]">Benchmark director compensation against private companies by revenue, industry, size and ownership structure.</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                <BuyReportButton slug={latestEdition.slug} label="Purchase the report" className="group inline-flex items-center min-h-[52px] gap-3 bg-[#10243a] px-7 py-4 text-lg font-medium text-white" />
                <Link href="/research" className="group inline-flex items-center min-h-[44px] gap-3 border-b border-[#10243a] pb-2 text-lg font-medium">Explore the research <Arrow /></Link>
              </div>
            </div>
            <div className="relative isolate flex min-h-[260px] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_75%_20%,#315570_0%,#102b43_46%,#07192b_100%)] p-8 md:min-h-[410px] md:p-12">
              <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-10 select-none text-[clamp(8rem,19vw,19rem)] font-normal leading-none tracking-[-.1em] text-white/10">{latestEdition.year}</span>
              <Image src={latestEdition.coverImage.url} alt={latestEdition.year + " Private Company Board Compensation Survey cover"} width={latestEdition.coverImage.width} height={latestEdition.coverImage.height} sizes="(min-width: 1024px) 40vw, 85vw" className="relative z-10 h-auto w-full max-w-[540px] object-contain shadow-2xl" />
            </div>
          </div>
        </section>

        <section className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-end md:px-12 md:py-24 lg:px-16">
          <div><p className="mb-5 text-sm text-[#526478]">Start a conversation</p><h2 className="max-w-xl text-[clamp(2.2rem,4vw,4rem)] font-normal leading-[1.06] tracking-[-0.045em]">What could the right board do for your business?</h2></div>
          <div className="flex flex-wrap gap-6">
            <Link href="/contact" className="group inline-flex items-center min-h-[44px] gap-3 border-b border-[#10243a] pb-2 text-lg font-medium">Contact Lodestone <Arrow /></Link>
            <Link href="/insights" className="group inline-flex items-center min-h-[44px] gap-3 border-b border-[#10243a] pb-2 text-lg font-medium">Read our insights <Arrow /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
