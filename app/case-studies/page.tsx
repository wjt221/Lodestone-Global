import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { BackgroundPhoto } from "@/components/BackgroundPhoto";
import { CTASection } from "@/components/CTASection";
import { PullQuote } from "@/components/PullQuote";
import { photos } from "@/components/photos";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { engagements, businessDetail } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "How Lodestone works with private-company owners in practice: board formation, governance, and family coordination. Published references and anonymized engagements.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies | Lodestone Global",
    description:
      "How Lodestone works with private-company owners in practice — published references and anonymized engagements.",
    url: "/case-studies",
  },
};

const testimonial = businessDetail.govern.testimonial;

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
          ]),
        ]}
      />
      <Header />
      <main id="main">
        {/* MASTHEAD */}
        <section className="bg-white pt-[4.25rem] text-[#10243a]"><Container className="py-16 md:py-24"><p className="mb-5 text-base text-[#526478]">Client case studies</p><h1 className="max-w-5xl text-[clamp(3.2rem,7vw,7rem)] font-normal leading-[.96] tracking-[-.065em]">The work of a board, measured in business outcomes.</h1><div className="mt-12 grid gap-8 border-t border-[#d5dde5] pt-8 md:grid-cols-2"><p className="max-w-xl text-lg leading-relaxed text-[#526478]">Real examples of how independent expertise can help owners make critical decisions, build management capability and navigate growth.</p><Link href="/contact" className="w-fit self-end border-b border-current pb-2 text-lg font-medium">Talk to us about your business ↗</Link></div></Container></section><section className="bg-[#07192b] text-white"><Container className="grid gap-12 py-16 md:grid-cols-2 md:gap-20"><div><p className="text-base text-[#b7cadb]">Diesco Group</p><p className="mt-3 text-[clamp(4rem,9vw,8rem)] leading-none tracking-[-.07em]">~4×</p><p className="mt-4 text-xl">Historical earnings growth after board formation.</p></div><div><p className="text-base text-[#b7cadb]">Morgan Properties</p><p className="mt-3 text-[clamp(4rem,9vw,8rem)] leading-none tracking-[-.07em]">$2B+</p><p className="mt-4 text-xl">Acquisitions guided by the board in the published case study.</p></div><p className="text-sm text-[#b7cadb] md:col-span-2">Historical client outcomes; other factors contributed to business performance.</p></Container></section>

        {/* ENGAGEMENTS */}
        <Section tone="light">
          <div className="flex flex-col gap-12">
            <SectionHeading
              kicker="Selected Engagements"
              title="Situations, mandates, and outcomes."
              description="Each begins with the owner's strategy, defines the work the board or the family needs done, and stays accountable to it over time."
            />
            <div className="flex flex-col">
              {engagements.map((e, i) => (
                <div
                  key={e.situation}
                  className={`grid grid-cols-1 gap-6 border-t border-charcoal/15 py-10 md:grid-cols-12 md:gap-8 ${
                    i === engagements.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="flex flex-col gap-2 md:col-span-3">
                    <span className="font-sans text-[0.72rem] uppercase tracking-widest2 text-brass-ink">
                      {e.sector}
                    </span>
                    <span className="font-sans text-[0.72rem] uppercase tracking-[0.06em] text-charcoal/80">
                      {e.named ? "Published with permission" : "Details anonymized"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-5 md:col-span-9 lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="flex flex-col gap-1.5">
                      <span className="font-sans text-[0.72rem] uppercase tracking-[0.06em] text-charcoal/80">
                        Situation
                      </span>
                      <p className="font-sans text-[0.92rem] leading-relaxed text-charcoal/75">
                        {e.situation}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className="font-sans text-[0.72rem] uppercase tracking-[0.06em] text-charcoal/80">
                        Mandate
                      </span>
                      <p className="font-sans text-[0.92rem] leading-relaxed text-charcoal/75">
                        {e.mandate}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className="font-sans text-[0.72rem] uppercase tracking-[0.06em] text-charcoal/80">
                        Work and outcome
                      </span>
                      <p className="font-sans text-[0.92rem] leading-relaxed text-charcoal/75">
                        {e.work}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* TESTIMONIAL */}
        {testimonial && (
          <Section tone="parchment">
            <PullQuote quote={testimonial.quote} attribution={testimonial.attribution} />
          </Section>
        )}

        {/* DISCLOSURE */}
        <Section tone="light">
          <p className="max-w-3xl font-sans text-[0.8rem] leading-relaxed text-charcoal/80">
            Named references are published with the client&rsquo;s permission. Other engagements are
            described in general terms, with identifying details omitted or combined, to protect
            client confidentiality. Outcomes described are specific to those engagements and are not
            a prediction or guarantee of results in any other matter.
          </p>
        </Section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 md:py-28">
          <BackgroundPhoto
            src={photos.closing.src}
            alt={photos.closing.alt}
            overlayClassName="bg-gradient-to-b from-navy/80 via-navy/90 to-navy"
          />
          <Container className="relative z-10">
            <CTASection
              title="Start with the decision in front of you."
              description="A first conversation is confidential and carries no obligation."
            />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
