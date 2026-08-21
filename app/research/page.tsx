import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Kicker } from "@/components/Kicker";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { BuyReportButton } from "@/components/BuyReportButton";
import { FreeSampleForm } from "@/components/FreeSampleForm";
import { breadcrumbJsonLd, surveyDatasetJsonLd } from "@/lib/seo";
import { reportEditions, latestEdition, licenseNote, surveyHighlights } from "@/lib/reports";

export const metadata: Metadata = {
  title: "Board Compensation Research",
  description:
    "The Private Company Board Compensation Survey: one of the most comprehensive studies of how private companies pay their directors, by revenue, industry, size, and structure.",
  alternates: { canonical: "/research" },
  openGraph: {
    title: "Private Company Board Compensation Survey",
    description:
      "One of the most comprehensive studies of private-company director compensation.",
    url: "/research",
  },
};

export default function ResearchPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: "Board Compensation Research", path: "/research" },
          ]),
          surveyDatasetJsonLd(),
        ]}
      />
      <Header />
      <main id="main">
        {/* MASTHEAD */}
        <section className="bg-navy pt-[4.25rem] text-ivory">
          <Container className="flex flex-col gap-6 py-20 md:py-24">
            <Kicker>Proprietary Research</Kicker>
            <h1 className="max-w-3xl font-serif text-display-1 font-semibold text-ivory">
              Private Company Board Compensation Survey
            </h1>
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-ivory/75">
              One of the most comprehensive studies of how private companies compensate their
              directors, published annually since Lodestone Global began the work. It gives board
              chairs, CEOs, and compensation committees real market data to set director pay.
            </p>
          </Container>
        </section>

        {/* WHAT IT COVERS */}
        <Section tone="light">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                kicker="What it covers"
                title="Director pay, measured across the private-company market."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2">
                {surveyHighlights.map((h) => (
                  <li
                    key={h}
                    className="border-t border-charcoal/10 py-5 font-sans text-[0.95rem] leading-relaxed text-charcoal/75"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <p className="mt-8 max-w-xl font-sans text-[0.9rem] leading-relaxed text-charcoal/80">
                The full data set is proprietary and available for purchase. Summary findings are
                published from time to time in Insights.
              </p>
            </div>
          </div>
        </Section>

        {/* EDITIONS */}
        <Section tone="parchment">
          <div className="flex flex-col gap-10">
            <SectionHeading
              kicker="Editions"
              title="The latest edition, and the archive."
              description="The current edition reflects the most recent survey. Prior editions remain available."
            />

            {/* Featured latest */}
            <div className="grid grid-cols-1 gap-8 border-y border-charcoal/20 py-8 sm:grid-cols-12 sm:items-center">
              <div className="sm:col-span-4">
                <Image
                  src={latestEdition.coverImage.url}
                  alt={`${latestEdition.year} Private Company Board Compensation Survey cover`}
                  width={latestEdition.coverImage.width}
                  height={latestEdition.coverImage.height}
                  className="w-full border border-charcoal/10"
                />
              </div>
              <div className="flex flex-col gap-5 sm:col-span-8">
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-[0.72rem] uppercase tracking-widest2 text-brass-ink">
                    Current edition · {latestEdition.editionOrdinal} annual
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-navy">
                    {latestEdition.year} Private Company Board Compensation Survey
                  </h3>
                </div>
                <p className="max-w-xl font-sans text-[0.95rem] leading-relaxed text-charcoal/70">
                  {latestEdition.description}
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <span className="font-serif text-xl text-navy">{latestEdition.price}</span>
                  <BuyReportButton
                    slug={latestEdition.slug}
                    fallbackUrl={latestEdition.purchaseUrl}
                  />
                  <FreeSampleForm slug={latestEdition.slug} year={latestEdition.year} />
                </div>
                <p className="font-sans text-[0.8rem] leading-relaxed text-charcoal/80">{licenseNote}</p>
              </div>
            </div>

            {/* Archive */}
            <div>
              <p className="mb-4 font-sans text-[0.72rem] uppercase tracking-[0.08em] text-charcoal/80">
                Prior editions
              </p>
              <ul className="flex flex-col">
                {reportEditions.slice(1).map((e) => (
                  <li
                    key={e.year}
                    className="flex items-center justify-between gap-4 border-t border-charcoal/15 py-4 last:border-b"
                  >
                    <Link href={`/research/${e.slug}`} className="flex items-center gap-4 hover:opacity-80">
                      <Image
                        src={e.coverImage.url}
                        alt={`${e.year} Private Company Board Compensation Survey cover`}
                        width={e.coverImage.width}
                        height={e.coverImage.height}
                        className="h-14 w-14 border border-charcoal/10 object-cover"
                      />
                      <span className="font-serif text-lg font-normal text-navy">{e.year}</span>
                    </Link>
                    <div className="flex items-center gap-6">
                      <span className="font-sans text-[0.9rem] text-charcoal/80">{e.price}</span>
                      <Link
                        href={`/research/${e.slug}`}
                        className="font-sans text-[0.78rem] uppercase tracking-[0.08em] text-navy/70 hover:text-brass-ink"
                      >
                        View report →
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <section className="bg-navy py-20 md:py-24">
          <Container>
            <CTASection
              title="Questions about the data?"
              description="For help applying the research to your board, or for enterprise access, start a conversation."
              align="left"
            />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
