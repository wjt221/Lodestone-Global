import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { WhyLodestone } from "@/components/WhyLodestone";
import { CTASection } from "@/components/CTASection";
import { EcosystemDiagram } from "@/components/infographics/EcosystemDiagram";
import { JourneyDiagram } from "@/components/infographics/JourneyDiagram";
import { FlywheelDiagram } from "@/components/infographics/FlywheelDiagram";

export const metadata: Metadata = {
  title: "The Ecosystem — Lodestone",
  description:
    "One relationship, four coordinated capabilities, and a Principal journey that Lodestone stays with from build to steward.",
};

export default function EcosystemPage() {
  return (
    <>
      <Header />
      <main id="top">
        {/* MASTHEAD */}
        <section className="bg-navy pt-32 text-ivory">
          <Container className="flex flex-col gap-8 pb-20">
            <span className="kicker text-brass-light">The Ecosystem</span>
            <h1 className="max-w-2xl font-serif text-display-1 font-normal text-ivory">
              One relationship, built to last longer than any single engagement.
            </h1>
            <p className="max-w-xl font-sans text-lg leading-relaxed text-ivory/70">
              Most Principals meet Lodestone through a single need — a board seat, an operating
              partner, a capital raise, a family office question. What follows is usually
              broader: one relationship that stays with you as the need changes.
            </p>
          </Container>
        </section>

        {/* WHY ONE RELATIONSHIP */}
        <Section tone="light">
          <div className="flex flex-col gap-14">
            <SectionHeading
              index="01"
              kicker="Why One Relationship"
              title="Coordination is the advantage."
              description="Disconnected advisors optimize for their piece of the engagement. A coordinated team is accountable for the outcome."
            />
            <WhyLodestone />
          </div>
        </Section>

        {/* FOUR COORDINATED CAPABILITIES */}
        <Section tone="parchment">
          <div className="flex flex-col gap-14">
            <SectionHeading
              index="02"
              kicker="Four Coordinated Capabilities"
              title="Govern, Scale, Compound, Steward."
              description="Each stage is delivered by a dedicated part of the Lodestone ecosystem, working from the same view of the Principal. Select a stage to see what it includes."
            />
            <EcosystemDiagram />
          </div>
        </Section>

        {/* THE PRINCIPAL JOURNEY */}
        <Section tone="light">
          <div className="flex flex-col items-center gap-14 text-center">
            <SectionHeading
              index="03"
              kicker="The Principal Journey"
              title="From founder to legacy."
              description="Founders become operators. Operators become leaders. Leaders become owners, then investors, then stewards of something larger than themselves. Lodestone is built to stay through every stage of that arc — not just the one you're in today."
              align="center"
            />
            <JourneyDiagram />
          </div>
        </Section>

        {/* HOW THE RELATIONSHIP EVOLVES */}
        <Section tone="parchment">
          <div className="flex flex-col gap-14">
            <SectionHeading
              index="04"
              kicker="How the Relationship Evolves"
              title="It rarely starts where it ends."
            />
            <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-3">
              <div className="flex flex-col gap-3 border-t border-charcoal/15 pt-6">
                <span className="index-number">01</span>
                <p className="font-serif text-lg font-normal text-navy">A single conversation</p>
                <p className="font-sans text-[0.9rem] leading-relaxed text-charcoal/60">
                  Most relationships begin with one need in Govern or Steward — a board, a
                  search, an estate question — addressed on its own terms.
                </p>
              </div>
              <div className="flex flex-col gap-3 border-t border-charcoal/15 pt-6">
                <span className="index-number">02</span>
                <p className="font-serif text-lg font-normal text-navy">A wider view</p>
                <p className="font-sans text-[0.9rem] leading-relaxed text-charcoal/60">
                  As the business scales or the wealth grows, the same team already understands
                  the context — no new advisor has to be brought up to speed.
                </p>
              </div>
              <div className="flex flex-col gap-3 border-t border-charcoal/15 pt-6">
                <span className="index-number">03</span>
                <p className="font-serif text-lg font-normal text-navy">One continuous relationship</p>
                <p className="font-sans text-[0.9rem] leading-relaxed text-charcoal/60">
                  By the time a transition, a sale, or a generational handoff is on the table,
                  Lodestone has been there long enough to help decide it well.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* FLYWHEEL */}
        <Section tone="light">
          <div className="flex flex-col items-center gap-14 text-center">
            <SectionHeading
              index="05"
              kicker="The Lodestone Flywheel"
              title="Value, once created, compounds."
              align="center"
            />
            <FlywheelDiagram />
          </div>
        </Section>

        {/* FINAL CTA */}
        <Section tone="dark">
          <CTASection
            title="Understand where your relationship with Lodestone could start."
            description="There is no cost, and no obligation, to a first conversation."
          />
        </Section>
      </main>
      <Footer />
    </>
  );
}
