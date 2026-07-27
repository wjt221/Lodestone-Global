import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { BackgroundPhoto } from "@/components/BackgroundPhoto";
import { EditorialImage } from "@/components/EditorialImage";
import { EcosystemList } from "@/components/EcosystemList";
import { Kicker } from "@/components/Kicker";
import { PrincipalJourney } from "@/components/PrincipalJourney";
import { InsightCards } from "@/components/InsightCards";
import { Leadership } from "@/components/Leadership";
import { CTASection } from "@/components/CTASection";
import { photos } from "@/components/photos";
import {
  CTA_PRIMARY,
  CTA_SECONDARY,
  proofPoints,
  ownerQuestions,
  howWeWork,
  engagements,
  sectorsServed,
  researchCard,
} from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { articleCards } from "@/lib/articles";

const homeInsights = [researchCard, ...articleCards];

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
          <BackgroundPhoto
            src={photos.hero.src}
            alt={photos.hero.alt}
            priority
            overlayClassName="bg-gradient-to-r from-navy via-navy/90 to-navy/78"
          />
          <Container className="relative z-10 flex flex-col gap-8 py-20">
            <Kicker>One principal. One trusted team. Every important decision.</Kicker>
            <h1 className="max-w-4xl font-serif text-display-1 font-semibold text-ivory">
              For owners building something meant to outlast them.
            </h1>
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-ivory/80">
              Lodestone works alongside private-company principals to strengthen the operating
              business, build governance and leadership, allocate the capital the company creates,
              and establish the structures that carry ownership to the next generation.
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

        {/* 3. RECOGNITION — the questions change as ownership grows */}
        <Section tone="light">
          <SectionHeading
            kicker="Who We Serve"
            title="The questions change as ownership grows."
            description="Most principals arrive with a specific decision in front of them. The right one usually connects to the others, because the business, its capital, and the family rarely move on separate tracks."
          />
          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <EditorialImage
              src={photos.homeQuestions.src}
              alt={photos.homeQuestions.alt}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="lg:col-span-4"
            />
            <div className="lg:col-span-8">
              <p className="mb-6 font-sans text-[0.82rem] uppercase tracking-[0.08em] text-charcoal/45">
                Questions we are asked to help answer
              </p>
              <ul className="flex flex-col">
                {ownerQuestions.map((q, i) => (
                  <li
                    key={q}
                    className="flex gap-5 border-t border-charcoal/12 py-5 last:border-b"
                  >
                    <span className="index-number pt-1">0{i + 1}</span>
                    <span className="font-serif text-lg font-normal leading-snug text-navy/85">
                      {q}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* 4. THE PRINCIPAL JOURNEY */}
        <Section tone="parchment">
          <div className="flex flex-col gap-12">
            <SectionHeading
              kicker="The Principal Journey"
              title="One principal, four changing roles."
              description="As a company matures, the principal's role shifts, and so does the question that matters most. Lodestone brings the capability that fits each stage while keeping a single relationship intact across all of them."
            />
            <PrincipalJourney />
          </div>
        </Section>

        {/* 5. THE LODESTONE ECOSYSTEM */}
        <Section id="ecosystem" tone="light">
          <div className="flex flex-col gap-12">
            <SectionHeading
              kicker="The Ecosystem"
              title="Four capabilities, coordinated as one relationship."
              description="Govern, scale, compound, and steward. Each is delivered by a dedicated part of the practice, and no principal is expected to use all four. Lodestone brings the capability that fits the situation and preserves one trusted relationship as it changes."
            />
            <EcosystemList />
          </div>
        </Section>

        {/* STATEMENT BAND */}
        <section className="relative overflow-hidden py-28 md:py-36">
          <BackgroundPhoto src={photos.homeStatementBand.src} alt={photos.homeStatementBand.alt} overlayClassName="bg-navy/82" objectPosition="top" />
          <Container className="relative z-10">
            <p className="max-w-3xl font-serif text-display-2 font-normal leading-tight text-ivory">
              We start with the whole picture: the business, the family, the capital, and the
              objectives. Not the assignment in front of us.
            </p>
          </Container>
        </section>

        {/* 5. WHY LODESTONE */}
        <Section tone="light">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-10 lg:col-span-5">
              <SectionHeading
                kicker="Why Lodestone"
                title="Built in the boardroom, not the classroom."
                description="Our perspective comes from forming and sitting on boards, running companies, and investing capital, not from a framework. That is what lets one team coordinate decisions across the business, its capital, and the family."
              />
              <EditorialImage
                src={photos.homeWhyLodestone.src}
                alt={photos.homeWhyLodestone.alt}
                aspect="aspect-[3/2]"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="hidden lg:block"
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
              kicker="Sectors Served"
              title="Work across privately held industries."
              description="Lodestone has advised private and family-owned companies across a range of sectors. Individual relationships are confidential and identified only with permission."
            />
            <ul className="flex flex-wrap items-center gap-y-6 border-y border-charcoal/20 py-2">
              {sectorsServed.map((sector, i) => (
                <li
                  key={sector}
                  className={`px-6 font-serif text-base font-normal text-navy first:pl-0 ${
                    i < sectorsServed.length - 1 ? "border-r border-charcoal/20" : ""
                  }`}
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
              description="Some examples are published; others are representative, with details combined or anonymized to protect confidentiality."
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
            <InsightCards items={homeInsights} limit={3} />
          </div>
        </Section>

        {/* 11. FINAL CTA */}
        <section className="relative overflow-hidden py-24 md:py-32">
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
