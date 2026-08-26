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
        {/*
          A masthead, not a title screen. This previously ran the headline at
          display-1 down a narrow left-hand column against a full viewport of
          flat navy, with the right half empty and no photograph anywhere: a
          reader reached an index of published research having seen nothing
          published. It now sets the headline and its standfirst as two columns
          of one grid at a scale that leaves the first cards visible above the
          fold.
        */}
        <section className="bg-navy pt-[4.25rem] text-ivory">
          <Container className="py-20 md:py-24">
            <div className="grid grid-cols-1 gap-x-16 gap-y-6 lg:grid-cols-12">
              <div className="flex flex-col gap-5 lg:col-span-7">
                <Kicker tone="dark">Insights</Kicker>
                <h1 className="font-serif text-display-2 font-semibold text-ivory">
                  Research and perspective from the private-company boardroom.
                </h1>
              </div>
              <p className="font-sans text-[1.05rem] leading-relaxed text-ivory/75 lg:col-span-4 lg:col-start-9 lg:pt-10">
                Lodestone Global maintains one of the most comprehensive studies of private-company
                board compensation and publishes practical guidance drawn from its governance work.
              </p>
            </div>
          </Container>
        </section>

        <Section tone="light">
          {/*
            The survey leads at feature width. It is the firm's most substantial
            piece of published work, and three equal thirds gave it no more
            weight than a three-minute blog post.
          */}
          <InsightCards items={[researchCard, ...articleCards]} featureFirst />
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
