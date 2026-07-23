import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { BackgroundPhoto } from "@/components/BackgroundPhoto";
import { EcosystemList } from "@/components/EcosystemList";
import { InsightCards } from "@/components/InsightCards";
import { Leadership } from "@/components/Leadership";
import { CTASection } from "@/components/CTASection";
import { photos } from "@/components/photos";
import {
  CTA_PRIMARY,
  CTA_SECONDARY,
  proofPoints,
  whoWeServe,
  howWeWork,
  engagements,
  sectorsServed,
} from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const whyPoints = [
  "Deep specialization in private-company governance since 2013",
  "Proprietary private-company board compensation research",
  "An established director and executive network",
  "Direct operating and investment experience",
  "Long-term relationships with entrepreneurial owners",
  "The ability to coordinate business, capital, and family decisions",
];

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      <Header />
      <main id="main">
        {/* 1. HERO */}
        <section className="relative flex min-h-[86vh] flex-col justify-center overflow-hidden pt-[4.25rem] text-ivory">
          <BackgroundPhoto src={photos.hero.src} alt={photos.hero.alt} priority overlayClassName="bg-navy/82" />
          <Container className="relative z-10 flex flex-col gap-8 py-20">
            <h1 className="max-w-4xl font-serif text-display-1 font-normal text-ivory">
              Trusted counsel for owners building enduring companies and family wealth.
            </h1>
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-ivory/80">
              Lodestone works with entrepreneurial owners and families to strengthen governance,
              scale their businesses, allocate capital, and steward wealth across generations.
            </p>
            <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link href={CTA_PRIMARY.href} className="btn-inverse">
                {CTA_PRIMARY.label}
              </Link>
              <Link href={CTA_SECONDARY.href} className="btn-text text-ivory/80 hover:text-ivory">
                {CTA_SECONDARY.label}
              </Link>
            </div>
          </Container>
        </section>

        {/* 2. CREDIBILITY STRIP */}
        <section className="border-b border-charcoal/10 bg-ivory">
          <Container className="grid grid-cols-1 gap-x-10 gap-y-8 py-14 sm:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((p) => (
              <div key={p.label} className="flex flex-col gap-2 border-t border-charcoal/15 pt-5">
                <span className="font-sans text-[0.72rem] uppercase tracking-widest2 text-brass">
                  {p.label}
                </span>
                <p className="font-sans text-[0.9rem] leading-relaxed text-charcoal/65">{p.detail}</p>
              </div>
            ))}
          </Container>
        </section>

        {/* 3. WHO WE SERVE */}
        <Section tone="light">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                kicker="Who We Serve"
                title="Businesses and families that have outgrown disconnected advice."
                description="We work with founders, family enterprises, private-company CEOs, boards, and families whose businesses and wealth have become too complex to manage through disconnected advisors."
              />
            </div>
            <div className="lg:col-span-7">
              <p className="mb-6 font-sans text-[0.82rem] uppercase tracking-[0.08em] text-charcoal/45">
                The moments that typically lead here
              </p>
              <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
                {whoWeServe.map((moment, i) => (
                  <li
                    key={moment}
                    className="flex gap-4 border-t border-charcoal/12 py-4 font-sans text-[0.95rem] leading-relaxed text-charcoal/75"
                  >
                    <span className="index-number pt-1">0{i + 1}</span>
                    <span>{moment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* 4. THE LODESTONE ECOSYSTEM */}
        <Section id="ecosystem" tone="parchment">
          <div className="flex flex-col gap-12">
            <SectionHeading
              kicker="The Ecosystem"
              title="Four capabilities, coordinated as one relationship."
              description="Govern, scale, compound, and steward. Each is delivered by a dedicated part of the practice, and no client is expected to use all four. Lodestone brings the capability that fits the situation and preserves one trusted relationship as it changes."
            />
            <EcosystemList />
          </div>
        </Section>

        {/* 5. WHY LODESTONE */}
        <Section tone="light">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                kicker="Why Lodestone"
                title="Built in the boardroom, not the classroom."
                description="Our perspective comes from forming and sitting on boards, running companies, and investing capital, not from a framework. That is what lets one team coordinate decisions across the business, its capital, and the family."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
                {whyPoints.map((point) => (
                  <li
                    key={point}
                    className="border-t border-charcoal/12 py-5 font-sans text-[0.95rem] leading-relaxed text-charcoal/75"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* 6. SELECTED CLIENT RELATIONSHIPS -> sectors served */}
        <Section tone="parchment">
          <div className="flex flex-col gap-10">
            <SectionHeading
              kicker="Selected Client Relationships"
              title="Work across privately held industries."
              description="Lodestone has advised private and family-owned companies across a range of sectors. Client relationships are confidential and identified only with permission."
            />
            <ul className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
              {sectorsServed.map((sector) => (
                <li
                  key={sector}
                  className="border-t border-charcoal/15 pt-4 font-serif text-lg font-normal text-navy"
                >
                  {sector}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* 7. HOW WE WORK */}
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

        {/* 8. REPRESENTATIVE ENGAGEMENTS */}
        <Section tone="parchment">
          <div className="flex flex-col gap-12">
            <SectionHeading
              kicker="Representative Engagements"
              title="What this looks like in practice."
              description="Representative engagements. Certain details have been combined or anonymized to protect confidentiality."
            />
            <div className="flex flex-col">
              {engagements.map((e, i) => (
                <div
                  key={e.situation}
                  className={`grid grid-cols-1 gap-6 border-t border-charcoal/15 py-10 md:grid-cols-12 md:gap-8 ${
                    i === engagements.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="md:col-span-3">
                    <span className="font-sans text-[0.72rem] uppercase tracking-widest2 text-brass">
                      {e.sector}
                    </span>
                  </div>
                  <div className="flex flex-col gap-5 md:col-span-9 lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="flex flex-col gap-1.5">
                      <span className="font-sans text-[0.72rem] uppercase tracking-[0.06em] text-charcoal/45">
                        Situation
                      </span>
                      <p className="font-sans text-[0.92rem] leading-relaxed text-charcoal/75">
                        {e.situation}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className="font-sans text-[0.72rem] uppercase tracking-[0.06em] text-charcoal/45">
                        Mandate
                      </span>
                      <p className="font-sans text-[0.92rem] leading-relaxed text-charcoal/75">
                        {e.mandate}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className="font-sans text-[0.72rem] uppercase tracking-[0.06em] text-charcoal/45">
                        Work completed
                      </span>
                      <p className="font-sans text-[0.92rem] leading-relaxed text-charcoal/75">
                        {e.work}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 9. LEADERSHIP */}
        <Section tone="light">
          <div className="flex flex-col gap-12">
            <SectionHeading
              kicker="Leadership"
              title="The people behind the relationship."
              description="Lodestone is led by principals with direct governance, operating, and investing experience."
            />
            <Leadership />
          </div>
        </Section>

        {/* 10. INSIGHTS */}
        <Section tone="parchment">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading
                kicker="Insights"
                title="Research and perspective."
                description="Proprietary research and practical guidance on private-company governance."
              />
              <Link href="/insights" className="btn-text w-fit text-navy">
                View all insights
              </Link>
            </div>
            <InsightCards limit={3} />
          </div>
        </Section>

        {/* 11. FINAL CTA */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <BackgroundPhoto src={photos.closing.src} alt={photos.closing.alt} overlayClassName="bg-navy/88" />
          <Container className="relative z-10">
            <CTASection />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
