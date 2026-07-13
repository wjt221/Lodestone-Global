import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustStrip } from "@/components/TrustStrip";
import { TwoEntryPoints } from "@/components/TwoEntryPoints";
import { WhyLodestone } from "@/components/WhyLodestone";
import { CapabilityCards } from "@/components/CapabilityCards";
import { OutcomesList } from "@/components/OutcomesList";
import { CaseStudyCards } from "@/components/CaseStudyCards";
import { TeamPreview } from "@/components/TeamPreview";
import { ResourceCards } from "@/components/ResourceCards";
import { CTASection } from "@/components/CTASection";
import { PhilosophyDiagram } from "@/components/infographics/PhilosophyDiagram";
import { EcosystemDiagram } from "@/components/infographics/EcosystemDiagram";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* HERO */}
        <section className="flex min-h-[80vh] flex-col justify-center bg-navy pt-20 text-ivory">
          <Container className="flex flex-col gap-8 py-16">
            <span className="kicker text-brass-light">Lodestone</span>
            <h1 className="max-w-3xl font-serif text-display-1 font-normal text-ivory">
              For owners building something meant to outlast them.
            </h1>
            <p className="max-w-xl font-sans text-lg leading-relaxed text-ivory/70">
              Lodestone helps entrepreneurial Principals build stronger companies and govern
              increasingly complex wealth. As a business matures, we help its owner move from
              running it day to day to owning and stewarding it for the long term.
            </p>
            <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a href="#contact" className="btn-inverse">
                Schedule a Conversation
              </a>
              <a href="/ecosystem" className="btn-text text-ivory/70 hover:text-ivory">
                Explore the Lodestone Ecosystem
              </a>
            </div>
          </Container>
        </section>

        <TrustStrip />

        {/* TWO ENTRY POINTS */}
        <TwoEntryPoints />

        {/* PHILOSOPHY */}
        <Section id="philosophy" tone="light">
          <div className="flex flex-col items-center gap-14 text-center">
            <SectionHeading
              index="01"
              kicker="The Lodestone Philosophy"
              title="One relationship. A full arc of value creation."
              description="Every entrepreneurial Principal follows a similar arc, from building something valuable to protecting it for generations."
              align="center"
            />
            <PhilosophyDiagram />
          </div>
        </Section>

        {/* ECOSYSTEM */}
        <Section tone="parchment">
          <div className="flex flex-col gap-14">
            <SectionHeading
              index="02"
              kicker="The Lodestone Ecosystem"
              title="Four coordinated capabilities. One team."
              description="Each stage of the Principal's journey is met by a dedicated capability, coordinated as a single relationship. Select a stage to see how it works."
            />
            <EcosystemDiagram />
          </div>
        </Section>

        {/* WHY LODESTONE */}
        <Section tone="light">
          <div className="flex flex-col gap-14">
            <SectionHeading
              index="03"
              kicker="Why Lodestone"
              title="Coordination is the advantage."
            />
            <WhyLodestone />
          </div>
        </Section>

        {/* SELECTED CAPABILITIES */}
        <Section tone="parchment">
          <div className="flex flex-col gap-14">
            <SectionHeading
              index="04"
              kicker="Selected Capabilities"
              title="A working sample of what we do."
            />
            <CapabilityCards />
          </div>
        </Section>

        {/* PRINCIPAL OUTCOMES */}
        <Section tone="light">
          <div className="flex flex-col gap-14">
            <SectionHeading
              index="05"
              kicker="Principal Outcomes"
              title="What this is actually in service of."
            />
            <OutcomesList />
          </div>
        </Section>

        {/* CASE STUDIES */}
        <Section tone="parchment">
          <div className="flex flex-col gap-14">
            <SectionHeading
              index="06"
              kicker="Representative Engagements"
              title="How this looks in practice."
            />
            <CaseStudyCards />
          </div>
        </Section>

        {/* LEADERSHIP */}
        <Section tone="light">
          <div className="flex flex-col gap-14">
            <SectionHeading index="07" kicker="Leadership" title="The team behind the relationship." />
            <TeamPreview />
          </div>
        </Section>

        {/* INSIGHTS */}
        <Section tone="parchment">
          <div className="flex flex-col gap-14">
            <SectionHeading index="08" kicker="Insights" title="Perspective for entrepreneurial Principals." />
            <ResourceCards />
          </div>
        </Section>

        {/* FINAL CTA */}
        <Section tone="dark">
          <CTASection />
        </Section>
      </main>
      <Footer />
    </>
  );
}
