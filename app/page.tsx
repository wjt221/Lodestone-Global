import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProofBand } from "@/components/ProofBand";
import { BoardDoors } from "@/components/BoardDoors";
import { BackgroundPhoto } from "@/components/BackgroundPhoto";
import { EcosystemList } from "@/components/EcosystemList";
import { Kicker } from "@/components/Kicker";
import { PrincipalJourney } from "@/components/PrincipalJourney";
import { InsightCards } from "@/components/InsightCards";
import { Leadership } from "@/components/Leadership";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { photos } from "@/components/photos";
import { engagements, researchCard } from "@/lib/content";
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
        {/*
          A real Lodestone boardroom sits behind the headline. The previous
          hero painted a blindly-chosen Unsplash image under an overlay that
          was fully opaque on the left and never below 0.78 on the right, so
          the photo was invisible at every breakpoint. This one is licensed
          Lodestone photography and the overlay is a left-to-right gradient
          that stays dark behind the copy (0.94) and opens up to 0.55 on the
          right, so the room actually reads -- a board, for a firm that builds
          boards. Height stays tightened from 86vh so the first row of
          BoardDoors ("Where owners usually start") clears the fold on a
          1440x900 laptop.
        */}
        <section className="relative flex min-h-[58vh] flex-col justify-center overflow-hidden pt-[4.25rem] text-ivory">
          <BackgroundPhoto
            src={photos.hero.src}
            alt={photos.hero.alt}
            priority
            objectPosition="center right"
            overlayStyle={{
              backgroundImage:
                "linear-gradient(to right, rgba(10,27,42,0.94) 0%, rgba(10,27,42,0.86) 42%, rgba(10,27,42,0.55) 100%)",
            }}
          />
          <Container className="relative z-10 flex flex-col gap-6 py-16">
            {/*
              Hero copy carried over from the long-running Lodestone Global site.
              The verbs lead because they are concrete and because they are the
              language buyers actually search: build a board, board facilitation,
              board optimization, board education. The previous headline read well
              but contained no term anyone looks for.

              "Award-winning boards" is exact, not puffery: the awards belong to
              clients' boards (Private Company Board of the Year), not to the firm.
              Do not restate it as an award the firm won.

              The compensation survey is deliberately NOT in this subhead. It is a
              credential, not the offer, and leading with it makes the research
              sound like the business. It belongs on /research and in ProofBand.

              The "38 countries and 50 industries" figures are likewise absent:
              they describe the survey's RESPONDENTS, not Lodestone's client base.
              In a hero they read as the firm's operating reach, which is a claim
              nobody has made. ProofBand states them where they are labelled as
              survey data.
            */}
            <Kicker>Lodestone Global · High-performing board experts</Kicker>
            <h1 className="max-w-4xl font-serif text-display-1 font-semibold text-ivory">
              We build, facilitate, optimize and educate award-winning boards.
            </h1>
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-ivory/80">
              For private, family-owned and founder-led companies. We design the board a business
              actually needs, then find the directors to fill it.
            </p>
            <div className="mt-2 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-inverse">
                Discuss your board
              </Link>
              <Link
                href="/governance-advisory"
                className="btn-text text-ivory/80 hover:text-ivory"
              >
                How we build boards
              </Link>
            </div>
          </Container>
        </section>

        <BoardDoors />

        {/*
          3. THE PRINCIPAL JOURNEY
          Merged from two sections that covered the same ground. "The questions
          change as ownership grows" presented a numbered list of owner
          questions; "One principal, four changing roles" then presented the
          Principal Journey stepper -- whose per-stage question field is very
          nearly the same list, shown a second time. One section now carries
          both ideas: the stronger "questions change" framing as the heading,
          and the journey stepper (role -> question -> capability, per stage) as
          the body. This removes a full screen, ends the duplicate questions,
          and drops one blindly chosen stock photo.
        */}
        <Section tone="parchment">
          <div className="flex flex-col gap-12">
            <SectionHeading
              kicker="The Principal Journey"
              title="The questions change as ownership grows."
              layout="split"
              description="Most principals arrive with a single decision in front of them, but the role itself shifts as the company matures—operator, owner, investor, steward—and so does the question that matters most. Lodestone brings the capability that fits each stage while keeping one relationship intact across all of them."
            />
            <Reveal><PrincipalJourney /></Reveal>
          </div>
        </Section>

        {/*
          STATEMENT BAND

          Moved up from below the ecosystem section. Photography previously did
          not reappear until roughly 4,000px past the hero, so the entire middle
          of the page was unbroken text on two alternating tints. Here it lands
          one section after the hero and gives the scroll a second image early.

          The overlay is a diagonal gradient rather than a flat navy/80: the
          copy sits in the dark corner at 0.92 while the far side opens to 0.45,
          so the architecture actually reads as a photograph instead of a navy
          rectangle. Set inline, not as a Tailwind opacity class -- this build
          silently drops color-opacity utilities it has not compiled before (see
          BackgroundPhoto).
        */}
        <section className="relative overflow-hidden py-32 md:py-44">
          <BackgroundPhoto
            src={photos.homeStatementBand.src}
            alt={photos.homeStatementBand.alt}
            objectPosition="top"
            overlayStyle={{
              backgroundImage:
                "linear-gradient(115deg, rgba(10,27,42,0.92) 0%, rgba(10,27,42,0.78) 45%, rgba(10,27,42,0.45) 100%)",
            }}
          />
          <Container className="relative z-10">
            <Reveal>
              <p className="max-w-3xl font-serif text-display-2 font-normal leading-tight text-ivory">
                We start with the whole picture: the business, the family, the capital, and the
                objectives. Not the assignment in front of us.
              </p>
              <span aria-hidden className="mt-10 block h-px w-24 bg-brass" />
            </Reveal>
          </Container>
        </section>

        {/* 5. THE LODESTONE ECOSYSTEM */}
        <Section id="ecosystem" tone="light">
          <div className="flex flex-col gap-12">
            <SectionHeading
              title="Four capabilities, coordinated as one relationship."
              layout="split"
              description="Govern, scale, compound, and steward. Each is delivered by a dedicated part of the practice, and no principal is expected to use all four. Lodestone brings the capability that fits the situation and preserves one trusted relationship as it changes."
            />
            <Reveal><EcosystemList /></Reveal>
          </div>
        </Section>

        {/*
          5. WHY LODESTONE

          Previously a heading beside a flat two-column list of six equal
          bullets, with a blindly-chosen stock photo underneath that this build
          cannot fetch -- so it rendered as an empty panel with alt text
          showing. The photo slot is gone rather than refilled with more stock:
          there is no real Lodestone image for it yet (see CONTENT_NEEDED.md),
          and an honest typographic block beats a placeholder.

          What replaces it is hierarchy. The claim is set as a pull quote at
          display scale, and the six credentials sit in a sticky-headed list
          where each one is a full row with a brass rule rather than a bullet in
          a two-up grid. The section now reads as an argument with a spine,
          which is what the surrounding four-column grids were failing to do.
        */}
        <Section tone="light" density="generous">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 flex flex-col gap-8">
                <SectionHeading
                  title="Built in the boardroom, not the classroom."
                  description="Our perspective comes from forming and sitting on boards, running companies, and investing capital, not from a framework. That is what lets one team coordinate decisions across the business, its capital, and the family."
                />
                <Link href="/about" className="btn-text w-fit text-navy">
                  About the firm
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ul className="flex flex-col">
                {whyPoints.map((point, i) => (
                  <Reveal key={point} delay={i * 60}>
                    <li className="group flex items-baseline gap-6 border-t border-charcoal/15 py-6">
                      <span
                        aria-hidden
                        className="mt-2 h-px w-6 shrink-0 bg-brass-ink/50 transition-all duration-500 ease-editorial group-hover:w-10"
                      />
                      <span className="font-serif text-[1.15rem] leading-snug text-navy">
                        {point}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <ProofBand />

        {/* 8. REPRESENTATIVE ENGAGEMENTS */}
        <Section tone="parchment" density="normal">
          <div className="flex flex-col gap-12">
            <SectionHeading
              kicker="Representative Engagements"
              title="What this looks like in practice."
              layout="split"
              description="Some examples are published; others are representative, with details combined or anonymized to protect confidentiality."
            />
            {/*
              Each engagement leads with its situation, set in the serif at
              reading scale, because that is the line a visitor recognizes
              themselves in. Mandate and work sit beneath it as a two-column
              footnote.

              Previously all three fields were equal-width columns of the same
              0.92rem grey sans, under three identically weighted labels -- a
              data table with nothing to catch the eye, and the flattest block
              on the page. Same facts, same order, same confidentiality
              framing; only the emphasis has changed.
            */}
            <div className="flex flex-col">
              {engagements.map((e, i) => (
                <Reveal key={e.situation} delay={i * 60}>
                  <article
                    className={`grid grid-cols-1 gap-y-6 border-t border-charcoal/15 py-12 md:grid-cols-12 md:gap-x-10 ${
                      i === engagements.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <div className="md:col-span-3">
                      <span className="font-sans text-[0.72rem] uppercase tracking-widest2 text-brass-ink">
                        {e.sector}
                      </span>
                    </div>
                    <div className="flex flex-col gap-7 md:col-span-9">
                      <p className="max-w-2xl font-serif text-[1.35rem] leading-snug text-navy">
                        {e.situation}
                      </p>
                      <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                          <span className="font-sans text-[0.7rem] uppercase tracking-[0.12em] text-charcoal/70">
                            Mandate
                          </span>
                          <p className="font-sans text-[0.92rem] leading-relaxed text-charcoal/80">
                            {e.mandate}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="font-sans text-[0.7rem] uppercase tracking-[0.12em] text-charcoal/70">
                            Work completed
                          </span>
                          <p className="font-sans text-[0.92rem] leading-relaxed text-charcoal/80">
                            {e.work}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* 9. LEADERSHIP */}
        <Section tone="light">
          <div className="flex flex-col gap-12">
            <SectionHeading
                title="The people behind the relationship."
              layout="split"
              description="Lodestone is led by principals with direct governance, operating, and investing experience."
            />
            <Reveal><Leadership /></Reveal>
          </div>
        </Section>

        {/* 10. INSIGHTS */}
        <Section tone="parchment" density="normal">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading
                title="Research and perspective."
                description="Proprietary research and practical guidance on private-company governance."
              />
              <Link href="/insights" className="btn-text w-fit text-navy">
                View all insights
              </Link>
            </div>
            <Reveal>
              <InsightCards items={homeInsights} limit={3} />
            </Reveal>
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
