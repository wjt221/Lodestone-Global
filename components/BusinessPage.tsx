import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Section } from "./Section";
import { Container } from "./Container";
import { BackgroundPhoto } from "./BackgroundPhoto";
import { Kicker } from "./Kicker";
import { CapabilityStepper } from "./CapabilityStepper";
import { CTASection } from "./CTASection";
import { InsightCards } from "./InsightCards";
import { PullQuote } from "./PullQuote";
import { photos, businessClosingPhotos } from "./photos";
import { JsonLd } from "./JsonLd";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { articleCards } from "@/lib/articles";
import {
  businesses,
  businessDetail,
  getBusiness,
  type StageId,
} from "@/lib/content";

export function BusinessPage({ id }: { id: StageId }) {
  const business = getBusiness(id);
  const detail = businessDetail[id];
  const others = businesses.filter((b) => b.id !== id);
  const photo = photos[id];
  const closingPhoto = businessClosingPhotos[id];
  const relatedInsights = (detail.relatedArticleSlugs ?? [])
    .map((slug) => articleCards.find((a) => a.href === `/insights/${slug}`))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const hasEvidence = Boolean(
    detail.evidenceStat || detail.recognition || detail.testimonial,
  );

  // Alternate the band tones automatically so two same-tone sections never sit
  // next to each other, regardless of which optional sections (evidence, FAQ,
  // related insights) render for this practice. Capabilities is parchment and
  // engagement is light; everything after engagement toggles from there.
  let prev: "light" | "parchment" = "light"; // engagement section
  const nextTone = (): "light" | "parchment" => {
    prev = prev === "light" ? "parchment" : "light";
    return prev;
  };
  const evidenceTone = hasEvidence ? nextTone() : prev;
  const faqTone = detail.faq ? nextTone() : prev;
  const relatedTone = relatedInsights.length > 0 ? nextTone() : prev;
  const ecosystemTone = nextTone();

  const schema: object[] = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: business.name, path: business.href },
    ]),
    serviceJsonLd(business),
  ];
  if (detail.faq) schema.push(faqJsonLd(detail.faq));

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main id="main">
        {/* MASTHEAD */}
        <section className="relative overflow-hidden pt-[4.25rem] text-ivory">
          <BackgroundPhoto src={photo.src} alt={photo.alt} priority overlayClassName="bg-navy/85" />
          <Container className="relative z-10 flex flex-col gap-6 py-24 md:py-28">
            <Kicker>{detail.eyebrow}</Kicker>
            <h1 className="max-w-3xl font-serif text-display-1 font-semibold text-ivory">
              {detail.heading}
            </h1>
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-ivory/80">{detail.intro}</p>
            {business.external && (
              <a
                href={business.external}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-inverse mt-2 w-fit"
              >
                Visit {business.name}
              </a>
            )}
          </Container>
        </section>

        {/* OVERVIEW */}
        <Section tone="light">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="font-sans text-[0.72rem] uppercase tracking-widest2 text-brass-ink">
                {business.name}
              </p>
              <p className="mt-3 font-sans text-[0.9rem] uppercase tracking-[0.06em] text-charcoal/80">
                {business.role}
              </p>
            </div>
            <div className="flex flex-col gap-6 lg:col-span-8">
              {detail.overview.map((para) => (
                <p key={para} className="max-w-2xl font-sans text-[1.05rem] leading-relaxed text-charcoal/75">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Section>

        {/* CAPABILITIES */}
        <Section tone="parchment">
          <div className="flex flex-col gap-12">
            <h2 className="max-w-2xl font-serif text-display-2 font-semibold text-navy">
              What we do
            </h2>
            <CapabilityStepper items={detail.capabilityGroups} />
            {detail.note && (
              <p className="max-w-2xl font-sans text-[0.8rem] leading-relaxed text-charcoal/80">
                {detail.note}
              </p>
            )}
          </div>
        </Section>

        {/* HOW AN ENGAGEMENT WORKS */}
        <Section tone="light">
          <div className="flex flex-col gap-12">
            <h2 className="max-w-2xl font-serif text-display-2 font-normal text-navy">
              How an engagement works
            </h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              {detail.engagement.map((s) => (
                <div key={s.title} className="flex flex-col gap-4 border-t border-charcoal/20 pt-6">
                  <span className="font-sans text-[0.72rem] uppercase tracking-widest2 text-brass-ink">
                    {s.step}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-navy">{s.title}</h3>
                  <p className="font-sans text-[0.92rem] leading-relaxed text-charcoal/80">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* EVIDENCE */}
        {hasEvidence && (
          <Section tone={evidenceTone}>
            <div className="flex flex-col gap-12">
              <h2 className="max-w-2xl font-serif text-display-2 font-normal text-navy">
                Evidence and recognition
              </h2>
              {(detail.evidenceStat || detail.recognition) && (
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                  {detail.evidenceStat && (
                    <div className="flex flex-col gap-3 lg:col-span-4">
                      <span className="font-serif text-display-1 font-normal leading-none text-navy">
                        {detail.evidenceStat.value}
                      </span>
                      <p className="font-sans text-[0.95rem] leading-relaxed text-charcoal/70">
                        {detail.evidenceStat.label}
                      </p>
                      <span className="font-sans text-[0.72rem] uppercase tracking-[0.06em] text-charcoal/80">
                        Source: {detail.evidenceStat.source}
                      </span>
                    </div>
                  )}
                  {detail.recognition && (
                    <p className="max-w-2xl font-sans text-[1.05rem] leading-relaxed text-charcoal/75 lg:col-span-8">
                      {detail.recognition}
                    </p>
                  )}
                </div>
              )}
              {detail.testimonial && (
                <PullQuote
                  quote={detail.testimonial.quote}
                  attribution={detail.testimonial.attribution}
                />
              )}
            </div>
          </Section>
        )}

        {/* FAQ */}
        {detail.faq && (
          <Section tone={faqTone}>
            <div className="flex flex-col gap-10">
              <h2 className="max-w-2xl font-serif text-display-2 font-semibold text-navy">
                Common questions
              </h2>
              <dl className="flex flex-col">
                {detail.faq.map((item, i) => (
                  <div
                    key={item.q}
                    className={`grid grid-cols-1 gap-3 border-t border-charcoal/15 py-8 md:grid-cols-12 md:gap-8 ${
                      i === detail.faq!.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <dt className="font-serif text-lg font-normal text-navy md:col-span-5">
                      {item.q}
                    </dt>
                    <dd className="font-sans text-[0.95rem] leading-relaxed text-charcoal/70 md:col-span-7">
                      {item.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Section>
        )}

        {/* RELATED INSIGHTS */}
        {relatedInsights.length > 0 && (
          <Section tone={relatedTone}>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <h2 className="font-serif text-display-2 font-normal text-navy">Related insights</h2>
                <Link href="/insights" className="btn-text w-fit text-navy">
                  View all insights
                </Link>
              </div>
              <InsightCards items={relatedInsights} />
            </div>
          </Section>
        )}

        {/* REST OF ECOSYSTEM */}
        <Section tone={ecosystemTone}>
          <div className="flex flex-col gap-10">
            <h2 className="font-sans text-[0.72rem] uppercase tracking-widest2 text-brass-ink">
              Elsewhere in the practice
            </h2>
            <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-3">
              {others.map((b) => (
                <Link
                  key={b.id}
                  href={b.href}
                  className="group flex flex-col gap-2 border-t border-charcoal/15 pt-6"
                >
                  <span className="font-sans text-[0.72rem] uppercase tracking-[0.08em] text-charcoal/80">
                    {b.stage}
                  </span>
                  <span className="font-serif text-lg font-normal text-navy group-hover:text-brass-ink">
                    {b.name}
                  </span>
                  <span className="font-sans text-[0.85rem] leading-relaxed text-charcoal/80">
                    {b.role}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 md:py-28">
          <BackgroundPhoto
            src={closingPhoto.src}
            alt={closingPhoto.alt}
            overlayClassName="bg-gradient-to-b from-navy/80 via-navy/90 to-navy"
            objectPosition={"objectPosition" in closingPhoto ? closingPhoto.objectPosition : "center"}
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
