import type { Metadata } from "next";
import Image from "next/image";
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
import { photos } from "@/components/photos";

export const metadata: Metadata = {
  title: "The Ecosystem | Lodestone",
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
              Most Principals meet Lodestone through a single need. Maybe a board seat, an
              operating partner, a capital raise, or a family office question. What follows is
              usually broader: one relationship that stays with you as the need changes.
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
              description="Founders become operators. Operators become leaders. Leaders become owners, then investors, then stewards of something larger than themselves. Lodestone is built to stay through every stage of that arc, including the one you're in today."
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
              description="Most relationships begin with a single need in Govern or Steward, addressed on its own terms: a board, a search, an estate question. As the business scales or the wealth grows, the same team already understands the context, so no new advisor has to be brought up to speed. By the time a transition, a sale, or a generational handoff is on the table, Lodestone has been there long enough to help decide it well."
            />
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
        <section className="relative overflow-hidden py-24 md:py-32">
          <Image
            src={photos.closing.src}
            alt={photos.closing.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" aria-hidden />
          <Container className="relative z-10">
            <CTASection
              title="Understand where your relationship with Lodestone could start."
              description="There is no cost, and no obligation, to a first conversation."
            />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
