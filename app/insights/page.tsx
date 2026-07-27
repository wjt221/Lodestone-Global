import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { BackgroundPhoto } from "@/components/BackgroundPhoto";
import { Kicker } from "@/components/Kicker";
import { InsightCards } from "@/components/InsightCards";
import { CTASection } from "@/components/CTASection";
import { photos } from "@/components/photos";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, surveyDatasetJsonLd } from "@/lib/seo";
import { researchCard } from "@/lib/content";
import { articleCards } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Proprietary research and practical guidance on private-company governance, including the Private Company Board Compensation Survey.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights | Lodestone Global",
    description:
      "Proprietary research and practical guidance on private-company governance.",
    url: "/insights",
  },
};

export default function InsightsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
          ]),
          surveyDatasetJsonLd(),
        ]}
      />
      <Header />
      <main id="main">
        <section className="bg-navy pt-[4.25rem] text-ivory">
          <Container className="flex flex-col gap-6 py-24 md:py-28">
            <Kicker>Insights</Kicker>
            <h1 className="max-w-3xl font-serif text-display-1 font-semibold text-ivory">
              Research and perspective from the private-company boardroom.
            </h1>
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-ivory/75">
              Lodestone Global maintains one of the most comprehensive studies of private-company
              board compensation and publishes practical guidance drawn from its governance work.
            </p>
          </Container>
        </section>

        <Section tone="light">
          <InsightCards items={[researchCard, ...articleCards]} />
        </Section>

        <section className="relative overflow-hidden py-24 md:py-28">
          <BackgroundPhoto src={photos.closing.src} alt={photos.closing.alt} overlayClassName="bg-gradient-to-b from-navy/80 via-navy/90 to-navy" objectPosition="top" />
          <Container className="relative z-10">
            <CTASection
              title="Ask about the research."
              description="For access to the board compensation survey or a conversation about governance, get in touch."
            />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
