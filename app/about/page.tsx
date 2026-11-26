import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { BackgroundPhoto } from "@/components/BackgroundPhoto";
import { practices } from "@/lib/ecosystem-content";
import Image from "next/image";
import { Leadership } from "@/components/Leadership";
import { photos } from "@/components/photos";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/seo";
import { CONTACT, leadership } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "About Us | Lodestone" },
  description:
    "Lodestone is an integrated practice serving entrepreneurial owners and families: governance advisory, an operating-partner network, an investment platform, and a multi-family office.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Lodestone",
    description:
      "An integrated practice for entrepreneurial owners and families, coordinating governance, operating support, capital, and family wealth.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          ...leadership.map(personJsonLd),
        ]}
      />
      <Header />
      <main id="main">
        {/* MASTHEAD */}
        <section className="relative overflow-hidden pt-[4.25rem] text-ivory">
          <BackgroundPhoto src={photos.aboutMasthead.src} alt={photos.aboutMasthead.alt} priority overlayClassName="bg-navy/85" />
          <Container className="relative z-10 flex flex-col gap-6 py-24 md:py-28">
            
            <h1 className="max-w-3xl font-serif text-display-1 font-semibold text-ivory">
              About Lodestone
            </h1>
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-ivory/80">
              Since {CONTACT.founded}, we have worked alongside entrepreneurs, business owners and families. Four specialized businesses, one shared commitment to helping people realize their potential.
            </p>
          </Container>
        </section>

        {/* POSITIONING */}
        <Section tone="light">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading title="Our story" />
            </div>
            <div className="flex flex-col gap-6 lg:col-span-8">
              <p className="max-w-2xl font-sans text-[1.05rem] leading-relaxed text-charcoal/75">
                Lodestone Global has worked in the private-company board market since {CONTACT.founded}.
                That specialization is the foundation of everything else. Owners came to us to build
                and strengthen boards, and those relationships surfaced the same questions again and
                again: how to scale the business, how to allocate the capital it produced, and how to
                steward the wealth that followed.
              </p>
              <p className="max-w-2xl font-sans text-[1.05rem] leading-relaxed text-charcoal/75">
                We built complementary capabilities around those questions. Today, our work spans boards, operating leadership, investments and family wealth. Each business has its own mandate and expertise; together they bring a broader perspective to the decisions owners face. Clients choose the services that fit their needs, through separate engagements.
              </p>
            </div>
          </div>
        </Section>

        {/* ECOSYSTEM */}
        <Section id="ecosystem" tone="parchment">
          <div className="flex flex-col gap-12">
            <SectionHeading
              title="From operator to steward."
              description="Four specialized businesses, supporting entrepreneurs as they build companies, allocate capital and decide what comes next. The journey is rarely linear."
            />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{[{stage:"Govern",name:"Lodestone Global",href:"/lodestone-global",logo:{src:"/logo/lodestone-global-horizontal-navy.png",width:1000,height:287},summary:"High-Performing Board Experts."},{stage:"Scale",...practices.e3,summary:"Embedded operating leadership and aligned value creation."},{stage:"Compound",...practices.capital,summary:"Proprietary investments, operating expertise and patient capital."},{stage:"Steward",...practices.lfa,summary:"A boutique investment office for entrepreneurial families."}].map(b=><Link key={b.stage} href={b.href} className="flex flex-col gap-5 border-t border-charcoal/20 pt-6"><span className="text-lg font-medium">{b.stage}</span><Image src={b.logo.src} alt={b.name} width={b.logo.width} height={b.logo.height} className="h-14 w-auto max-w-[190px] object-contain object-left"/><p className="text-base leading-relaxed">{b.summary}</p><span className="text-sm underline">Explore {b.name}</span></Link>)}</div>
          </div>
        </Section>

        {/* HOW WE WORK */}
        <Section tone="light">
          <div className="flex flex-col gap-12">
            <SectionHeading title="Our philosophy and values" />
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              {[{step:"01",title:"Excellence without ego",body:"We seek exceptional expertise, intellectual honesty and humility. The quality of the outcome matters more than who gets credit."},{step:"02",title:"Enduring trust",body:"We build long-term relationships grounded in integrity, discretion and doing what we say we will do."},{step:"03",title:"Aligned interests",body:"We work alongside owners, investors and families with a clear understanding of what success means to them. We believe strong relationships require mutual contribution and accountability."}].map((s) => (
                <div key={s.step} className="flex flex-col gap-4 border-t border-charcoal/20 pt-6">
                  <span className="index-number">{s.step}</span>
                  <h3 className="font-serif text-xl font-normal text-navy">{s.title}</h3>
                  <p className="font-sans text-[0.92rem] leading-relaxed text-charcoal/80">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Single shared ecosystem team roster. */}
        <Section id="team" tone="parchment">
          <div className="flex flex-col gap-12">
            <SectionHeading
              title="Our people"
              description="Meet the people across the Lodestone ecosystem, bringing together governance, operating, investment and family office experience."
            />
            <Leadership />
          </div>
        </Section>
      </main>
      <Footer ecosystem />
    </>
  );
}
