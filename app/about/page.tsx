import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Kicker } from "@/components/Kicker";
import { BackgroundPhoto } from "@/components/BackgroundPhoto";
import { EcosystemList } from "@/components/EcosystemList";
import { Leadership } from "@/components/Leadership";
import { CTASection } from "@/components/CTASection";
import { photos } from "@/components/photos";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/seo";
import { howWeWork, CONTACT, leadership } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
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
            <Kicker>About Lodestone</Kicker>
            <h1 className="max-w-3xl font-serif text-display-1 font-semibold text-ivory">
              One relationship across the decisions that shape a company and a family.
            </h1>
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-ivory/80">
              Lodestone began in the boardroom. Since {CONTACT.founded}, the practice has helped
              private and family-owned companies build the governance they need, and it has grown
              into an integrated set of capabilities around a single trusted relationship.
            </p>
          </Container>
        </section>

        {/* POSITIONING */}
        <Section tone="light">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading kicker="Positioning" title="Where we started, and why it matters." />
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
                Rather than hand each of those questions to a separate advisor, we built the
                capability to answer them as one team. Governance advisory, an operating-partner
                network, an investment platform, and a multi-family office now sit alongside each
                other, coordinated so the context an owner shares once is not lost between mandates.
              </p>
            </div>
          </div>
        </Section>

        {/* ECOSYSTEM */}
        <Section id="ecosystem" tone="parchment">
          <div className="flex flex-col gap-12">
            <SectionHeading
              kicker="The Ecosystem"
              title="Govern, scale, compound, steward."
              description="Four capabilities, each delivered by a dedicated part of the practice. No client is expected to use all four. Lodestone brings the capability that fits the situation and keeps one relationship intact as it changes."
            />
            <EcosystemList />
          </div>
        </Section>

        {/* HOW WE WORK */}
        <Section tone="light">
          <div className="flex flex-col gap-12">
            <SectionHeading kicker="How We Work" title="One team, carried forward." />
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              {howWeWork.map((s) => (
                <div key={s.step} className="flex flex-col gap-4 border-t border-charcoal/20 pt-6">
                  <span className="index-number">{s.step}</span>
                  <h3 className="font-serif text-xl font-normal text-navy">{s.title}</h3>
                  <p className="font-sans text-[0.92rem] leading-relaxed text-charcoal/65">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* LEADERSHIP */}
        <Section tone="parchment">
          <div className="flex flex-col gap-12">
            <SectionHeading
              kicker="Leadership"
              title="The people behind the relationship."
              description="Lodestone is led by principals with direct governance, operating, and investing experience."
            />
            <Leadership full />
          </div>
        </Section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 md:py-28">
          <BackgroundPhoto src={photos.closing.src} alt={photos.closing.alt} overlayClassName="bg-gradient-to-b from-navy/80 via-navy/90 to-navy" objectPosition="top" />
          <Container className="relative z-10">
            <CTASection />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
