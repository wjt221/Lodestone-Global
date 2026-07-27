import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { BuyReportButton } from "@/components/BuyReportButton";
import { FreeSampleForm } from "@/components/FreeSampleForm";
import { breadcrumbJsonLd } from "@/lib/seo";
import { reportEditions, licenseNote, getEditionBySlug } from "@/lib/reports";

// The current edition is shown inline on /research; only prior editions get
// their own dedicated page here.
const archivedEditions = reportEditions.slice(1);

export const dynamicParams = false;

export function generateStaticParams() {
  return archivedEditions.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const edition = archivedEditions.find((e) => e.slug === slug);
  if (!edition) return {};
  return {
    title: `${edition.year} Private Company Board Compensation Survey`,
    description: edition.description,
    alternates: { canonical: `/research/${edition.slug}` },
    openGraph: {
      title: `${edition.year} Private Company Board Compensation Survey`,
      description: edition.description,
      url: `/research/${edition.slug}`,
    },
  };
}

export default async function ReportEditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const edition = getEditionBySlug(slug);
  if (!edition || edition.slug === reportEditions[0].slug) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Research", path: "/research" },
          { name: `${edition.year} Survey`, path: `/research/${edition.slug}` },
        ])}
      />
      <Header />
      <main id="main">
        <section className="bg-navy pt-[4.25rem] text-ivory">
          <Container className="flex flex-col gap-6 py-20 md:py-24">
            <Kicker>Proprietary Research</Kicker>
            <h1 className="max-w-3xl font-serif text-display-1 font-semibold text-ivory">
              {edition.year} Private Company Board Compensation Survey
            </h1>
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-ivory/75">
              {edition.description}
            </p>
          </Container>
        </section>

        <Section tone="light">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Image
                src={edition.coverImage.url}
                alt={`${edition.year} Private Company Board Compensation Survey cover`}
                width={edition.coverImage.width}
                height={edition.coverImage.height}
                className="w-full border border-charcoal/10"
              />
            </div>
            <div className="flex flex-col gap-8 lg:col-span-7">
              <div className="flex flex-col gap-1">
                <span className="font-sans text-[0.72rem] uppercase tracking-widest2 text-brass">
                  {edition.editionOrdinal} annual edition
                </span>
                <p className="font-serif text-2xl font-normal text-navy">{edition.price}</p>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <BuyReportButton slug={edition.slug} fallbackUrl={edition.purchaseUrl} />
                <FreeSampleForm slug={edition.slug} year={edition.year} />
              </div>

              {edition.tableOfContents && (
                <div>
                  <p className="mb-3 font-sans text-[0.72rem] uppercase tracking-[0.08em] text-charcoal/45">
                    Table of contents
                  </p>
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                    {edition.tableOfContents.map((item) => (
                      <li
                        key={item}
                        className="border-t border-charcoal/10 py-2 font-sans text-[0.88rem] leading-relaxed text-charcoal/70"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="font-sans text-[0.85rem] leading-relaxed text-charcoal/55">{licenseNote}</p>
            </div>
          </div>
        </Section>

        <section className="bg-navy py-20 md:py-24">
          <Container>
            <CTASection
              title="Questions about this edition?"
              description="For help applying the research to your board, or for a custom report scoped to your company, start a conversation."
              align="left"
            />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
