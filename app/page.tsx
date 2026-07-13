import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { BackgroundPhoto } from "@/components/BackgroundPhoto";
import { TwoEntryPoints } from "@/components/TwoEntryPoints";
import { PrincipalJourney } from "@/components/PrincipalJourney";
import { CapabilityGroups } from "@/components/CapabilityGroups";
import { EvidenceSection } from "@/components/EvidenceSection";
import { TeamPreview } from "@/components/TeamPreview";
import { CTASection } from "@/components/CTASection";
import { EcosystemDiagram } from "@/components/infographics/EcosystemDiagram";
import { photos } from "@/components/photos";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* HERO */}
        <section className="relative flex min-h-[80vh] flex-col justify-center overflow-hidden pt-16 text-ivory">
          <BackgroundPhoto src={photos.hero.src} alt={photos.hero.alt} priority overlayClassName="bg-navy/80" />
          <Container className="relative z-10 flex flex-col gap-8 py-16">
            <span className="kicker text-brass-light">Lodestone</span>
            <h1 className="max-w-3xl font-serif text-display-1 font-normal text-ivory">
              For owners building something meant to outlast them.
            </h1>
            <p className="max-w-xl font-sans text-lg leading-relaxed text-ivory/80">
              Lodestone works alongside private-company principals to strengthen the business,
              allocate the capital it produces, and build the structures that support long-term
              ownership.
            </p>
            <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a href="#contact" className="btn-inverse">
                Schedule a Conversation
              </a>
              <a href="/ecosystem" className="btn-text text-ivory/80 hover:text-ivory">
                Explore the Lodestone Ecosystem
              </a>
            </div>
          </Container>
        </section>

        {/* PRINCIPAL JOURNEY */}
        <Section id="journey" tone="light">
          <div className="flex flex-col gap-14">
            <SectionHeading
              index="01"
              kicker="The Principal Journey"
              title="As the business grows, so does the job."
              description="Every Principal moves through the same broad arc: running the company, owning it outright, allocating the capital it produces, and stewarding it for those who come after. Lodestone is built to stay through all four."
            />
            <PrincipalJourney />
          </div>
        </Section>

        {/* ECOSYSTEM */}
        <Section id="ecosystem" tone="parchment">
          <div className="flex flex-col gap-4">
            <SectionHeading
              index="02"
              kicker="The Lodestone Ecosystem"
              title="Four coordinated capabilities. One team."
              description="Lodestone Global, E3, Lodestone Capital, and Lodestone Family Advisors each meet a different stage of the Principal's journey, coordinated as a single relationship rather than four separate businesses."
            />
            <EcosystemDiagram />
          </div>
        </Section>

        {/* TWO ENTRY POINTS */}
        <TwoEntryPoints />

        {/* CAPABILITIES */}
        <Section id="capabilities" tone="light">
          <div className="flex flex-col gap-14">
            <SectionHeading
              index="03"
              kicker="Capabilities"
              title="An integrated system, not a service menu."
            />
            <CapabilityGroups />
          </div>
        </Section>

        {/* EVIDENCE AND CREDIBILITY */}
        <Section tone="parchment">
          <div className="flex flex-col gap-14">
            <SectionHeading
              index="04"
              kicker="Evidence and Credibility"
              title="What this looks like in practice."
            />
            <EvidenceSection />
          </div>
        </Section>

        {/* LEADERSHIP */}
        <Section tone="light">
          <div className="flex flex-col gap-14">
            <SectionHeading index="05" kicker="Leadership" title="The team behind the relationship." />
            <TeamPreview />
          </div>
        </Section>

        {/* CLOSING */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <BackgroundPhoto src={photos.closing.src} alt={photos.closing.alt} overlayClassName="bg-navy/85" />
          <Container className="relative z-10">
            <CTASection />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
