import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Divider } from "@/components/Divider";
import { PhilosophyDiagram } from "@/components/infographics/PhilosophyDiagram";
import { EcosystemDiagram } from "@/components/infographics/EcosystemDiagram";
import { JourneyDiagram } from "@/components/infographics/JourneyDiagram";
import { FlywheelDiagram } from "@/components/infographics/FlywheelDiagram";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* HERO */}
        <section className="flex min-h-screen flex-col justify-center bg-navy pt-20 text-ivory">
          <Container className="flex flex-col gap-10 py-20">
            <span className="eyebrow text-brass-light">
              An Advisory Firm for Entrepreneurial Principals
            </span>
            <h1 className="max-w-4xl font-serif text-display-1 font-light text-ivory">
              Built for the decisions that outlast you.
            </h1>
            <p className="max-w-xl font-sans text-lg leading-relaxed text-ivory/70">
              Lodestone Global is one integrated advisory relationship —
              surrounding entrepreneurial Principals through every stage of
              building, scaling, compounding, and stewarding what they&rsquo;ve
              created.
            </p>
            <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a href="#contact" className="btn-inverse">
                Begin a Conversation
              </a>
              <a
                href="#philosophy"
                className="font-sans text-[0.8rem] uppercase tracking-[0.18em] text-ivory/50 transition-colors duration-300 hover:text-ivory"
              >
                Our Philosophy
              </a>
            </div>
          </Container>
        </section>

        {/* AUDIENCE ACKNOWLEDGMENT */}
        <Section tone="light">
          <SectionHeading
            eyebrow="Who We Serve"
            title="You have seen every pitch."
            description={
              <>
                You&rsquo;ve built something of real consequence — and likely
                worked with the institutions that advise capital, talent, and
                strategy at the highest level. You do not need another firm to
                impress you. You need one you can trust with what matters
                most.
              </>
            }
          />
        </Section>

        {/* WHAT WE PROVIDE */}
        <Section tone="dark">
          <SectionHeading
            tone="dark"
            eyebrow="What We Provide"
            title="Not another service to hire."
            description={
              <span className="text-ivory/70">
                We are not a board seat, a search process, or a capital
                allocator, taken separately. We are the confidence to decide,
                the judgment to act, and the continuity to see it through —
                for as long as it matters.
              </span>
            }
          />
        </Section>

        {/* PHILOSOPHY */}
        <Section id="philosophy" tone="light">
          <div className="flex flex-col items-center gap-16 text-center">
            <SectionHeading
              align="center"
              eyebrow="The Lodestone Philosophy"
              title="One path. Four disciplines."
              description="Every entrepreneurial Principal follows a similar arc — from building something valuable to protecting it for generations. Lodestone exists for the entire arc, not a single chapter."
            />
            <PhilosophyDiagram />
          </div>
        </Section>

        {/* ECOSYSTEM */}
        <Section tone="parchment">
          <div className="flex flex-col items-center gap-16 text-center">
            <SectionHeading
              align="center"
              eyebrow="The Lodestone Ecosystem"
              title="One relationship. Four disciplines."
              description="Each stage of the Principal's journey is supported by a dedicated capability — coordinated as a single, integrated team, not a portfolio of vendors."
            />
            <EcosystemDiagram />
          </div>
        </Section>

        {/* JOURNEY */}
        <Section tone="light">
          <div className="flex flex-col items-center gap-16 text-center">
            <SectionHeading
              align="center"
              eyebrow="The Principal Journey"
              title="From founder to legacy."
              description="Founders become operators. Operators become leaders. Leaders become owners, then investors, then stewards of something larger than themselves. We stand beside you at every chapter."
            />
            <JourneyDiagram />
          </div>
        </Section>

        {/* FLYWHEEL */}
        <Section tone="parchment">
          <div className="flex flex-col items-center gap-16 text-center">
            <SectionHeading
              align="center"
              eyebrow="The Lodestone Flywheel"
              title="Value, once created, compounds."
              description="Enterprise value becomes personal wealth. Personal wealth becomes family capital. Family capital becomes the next generation of investment — and the next generation of enterprise."
            />
            <FlywheelDiagram />
          </div>
        </Section>

        {/* THE FIRM */}
        <Section id="firm" tone="dark">
          <div className="flex flex-col gap-16">
            <SectionHeading
              tone="dark"
              eyebrow="The Firm"
              title="One firm. Not four businesses."
              description={
                <span className="text-ivory/70">
                  Governance. Executive search. Operating partnership. Private
                  capital. Family stewardship. Each is coordinated around one
                  Principal — not sold as separate products. Discretion is
                  assumed. Continuity is the point.
                </span>
              }
            />
            <Divider tone="dark" />
            <p className="mx-auto max-w-2xl text-center font-serif text-display-3 font-light italic text-ivory">
              We do not measure our success in transactions closed. We measure
              it in trust sustained — across decades, across generations.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
