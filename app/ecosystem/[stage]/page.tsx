import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { BackgroundPhoto } from "@/components/BackgroundPhoto";
import { EditorialImage } from "@/components/EditorialImage";
import { CTASection } from "@/components/CTASection";
import { stages, StageId } from "@/components/stages";
import { ecosystemContent } from "@/components/ecosystemContent";
import { photos } from "@/components/photos";

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-brass" aria-hidden>
      <path
        d="M3 8.5 6.2 12 13 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function generateStaticParams() {
  return stages.map((s) => ({ stage: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stage: string }>;
}): Promise<Metadata> {
  const { stage: stageId } = await params;
  const stage = stages.find((s) => s.id === stageId);
  if (!stage) return {};
  return {
    title: `${stage.entity} | Lodestone`,
    description: stage.detail,
  };
}

export default async function EcosystemEntityPage({
  params,
}: {
  params: Promise<{ stage: string }>;
}) {
  const { stage: stageId } = await params;
  const stage = stages.find((s) => s.id === stageId);
  if (!stage) notFound();

  const content = ecosystemContent[stage.id as StageId];
  const siblings = stages.filter((s) => s.id !== stage.id);

  return (
    <>
      <Header />
      <main id="top">
        {/* MASTHEAD */}
        <section className="relative overflow-hidden pt-32 text-ivory">
          <BackgroundPhoto src={photos[stage.id].src} alt={photos[stage.id].alt} overlayClassName="bg-navy/82" />
          <Container className="relative z-10 flex flex-col gap-6 pb-20">
            <span className="kicker text-brass-light">{stage.label}</span>
            <h1 className="max-w-2xl font-serif text-display-1 font-normal text-ivory">{stage.entity}</h1>
            <p className="max-w-xl font-sans text-lg leading-relaxed text-ivory/80">{content.intro}</p>
          </Container>
        </section>

        {/* CAPABILITIES */}
        <Section tone="light">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <span className="kicker">What This Includes</span>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {content.capabilities.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-sans text-[0.92rem] text-charcoal/70">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <EditorialImage
              src={photos[stage.id].src}
              alt={photos[stage.id].alt}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </Section>

        {/* REST OF THE ECOSYSTEM */}
        <Section tone="parchment">
          <div className="flex flex-col gap-10">
            <span className="kicker">The Rest of the Ecosystem</span>
            <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-3">
              {siblings.map((s) => (
                <a key={s.id} href={`/ecosystem/${s.id}`} className="group flex flex-col gap-2 border-t border-charcoal/15 pt-6">
                  <span className="font-sans text-[0.72rem] uppercase tracking-[0.08em] text-charcoal/50">
                    {s.label}
                  </span>
                  <span className="font-serif text-lg font-normal text-navy group-hover:text-brass">
                    {s.entity}
                  </span>
                  <span className="font-sans text-[0.85rem] text-charcoal/60">{s.detail}</span>
                </a>
              ))}
            </div>
            <a href="/ecosystem" className="btn-text w-fit text-navy">
              View the full ecosystem
            </a>
          </div>
        </Section>

        {/* CLOSING */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <BackgroundPhoto src={photos.closing.src} alt={photos.closing.alt} overlayClassName="bg-navy/85" />
          <Container className="relative z-10">
            <CTASection />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
