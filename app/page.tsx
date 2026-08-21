import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { BackgroundPhoto } from "@/components/BackgroundPhoto";
import { Leadership } from "@/components/Leadership";
import { photos } from "@/components/photos";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { articles, articleCards } from "@/lib/articles";
import { researchCard } from "@/lib/content";

/*
  Homepage, rebuilt for hierarchy rather than coverage.

  The previous page ran twelve near-identical modules (brass eyebrow, serif
  headline, columns of small text under thin rules) and gave every item equal
  weight. That uniform rhythm is what read as machine-made. This version is
  seven sections, most content sitting directly on the page rather than in
  cards, with three deliberate dark moments (hero, proof, close) and light
  space between them -- no alternating panels, no stat cards, no giant CTA box.
*/

// The four capabilities are the four stages of an owner's life. One section,
// not two: the question that matters changes, and a different part of the
// practice answers it -- but the relationship stays whole.
const RELATIONSHIP = [
  {
    stage: "Operator",
    question: "How do I build a company that no longer depends on me?",
    business: "E3 Scale Network",
    href: "/e3-scale-network",
  },
  {
    stage: "Owner",
    question: "What should the board do now the business is more complex?",
    business: "Lodestone Global",
    href: "/governance-advisory",
  },
  {
    stage: "Investor",
    question: "Where should the capital the company produces go next?",
    business: "Lodestone Capital",
    href: "/lodestone-capital",
  },
  {
    stage: "Steward",
    question: "What has to be in place before ownership passes on?",
    business: "Lodestone Family Advisors",
    href: "/family-advisors",
  },
];

const PROOF = [
  { value: "356", label: "directors in the Qualified Director Network" },
  { value: "Since 2013", label: "in the private-company board market" },
  { value: "2016–2026", label: "ten unbroken editions of the compensation survey" },
];

export default function Home() {
  const featured = articles[0];
  const moreInsights = [researchCard, articleCards[1], articleCards[2]].filter(Boolean);

  return (
    <>
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      <Header />
      <main id="main">
        {/* 1 — HERO. Real boardroom, one statement, one action. */}
        <section className="relative flex min-h-[84vh] flex-col justify-end overflow-hidden pt-[4.25rem] text-ivory">
          <BackgroundPhoto
            src={photos.hero.src}
            alt={photos.hero.alt}
            priority
            objectPosition="center right"
            overlayStyle={{
              backgroundImage:
                "linear-gradient(to right, rgba(10,27,42,0.93) 0%, rgba(10,27,42,0.82) 45%, rgba(10,27,42,0.5) 100%)",
            }}
          />
          <Container className="relative z-10 pb-20 pt-28">
            <h1 className="max-w-4xl font-serif text-display-1 font-semibold text-ivory">
              We build, facilitate, optimize and educate award-winning boards.
            </h1>
            <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-ivory/75">
              For private, family-owned and founder-led companies — the board a business
              actually needs, and the directors to fill it.
            </p>
            <Link href="/contact" className="btn-inverse mt-10">
              Discuss your board
            </Link>
          </Container>
        </section>

        {/* 2 — PROPOSITION. One large statement, almost no supporting UI. The
            four verbs live in the hero and in the Board Advisory nav; credibility
            folds in as a single line of prose rather than a strip of cards. */}
        <section className="bg-ivory py-32 md:py-48">
          <Container>
            <div className="max-w-[56rem]">
              <p className="font-serif text-display-2 font-normal leading-[1.08] text-navy">
                The board is where ownership, strategy and capital meet. Most private
                companies build one a decade too late.
              </p>
              <p className="mt-10 max-w-xl font-sans text-[1.05rem] leading-relaxed text-charcoal/70">
                Since 2013 we have formed, optimized and educated the boards behind
                founder- and family-owned businesses — and published the benchmark for
                what their directors are paid.
              </p>
            </div>
          </Container>
        </section>

        {/* 3 — ONE RELATIONSHIP. Journey and ecosystem, merged into four
            typographic rows: stage, its question, the business that answers it. */}
        <section className="bg-parchment py-28 md:py-36">
          <Container>
            <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:gap-x-16">
              <div className="lg:col-span-4">
                <h2 className="font-serif text-display-3 font-normal leading-tight text-navy">
                  One relationship, as the company changes.
                </h2>
                <p className="mt-6 max-w-sm font-sans text-[0.98rem] leading-relaxed text-charcoal/65">
                  The question that matters most shifts as a business matures. Lodestone
                  brings the capability each stage needs and keeps a single relationship
                  across all of them.
                </p>
              </div>
              <ol className="lg:col-span-8">
                {RELATIONSHIP.map((r) => (
                  <li
                    key={r.stage}
                    className="grid grid-cols-1 gap-x-8 gap-y-3 border-t border-charcoal/15 py-8 last:border-b sm:grid-cols-12 sm:items-baseline"
                  >
                    <span className="font-serif text-2xl leading-none text-navy sm:col-span-3">
                      {r.stage}
                    </span>
                    <p className="font-serif text-lg font-normal leading-snug text-navy/80 sm:col-span-6">
                      {r.question}
                    </p>
                    <Link
                      href={r.href}
                      className="font-sans text-[0.72rem] uppercase tracking-[0.08em] text-navy/60 transition-colors hover:text-brass sm:col-span-3 sm:text-right"
                    >
                      {r.business}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </section>

        {/* 4 — PROOF. Three published figures at display scale. No cards. */}
        <section className="bg-navy py-24 text-ivory md:py-28">
          <Container>
            <dl className="grid grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-10">
              {PROOF.map((f) => (
                <div key={f.value} className="flex flex-col gap-3">
                  <dt className="font-serif text-[3.25rem] leading-none text-ivory md:text-[3.75rem]">
                    {f.value}
                  </dt>
                  <dd className="max-w-[24ch] font-sans text-[0.9rem] leading-relaxed text-ivory/60">
                    {f.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        {/* 5 — THE FIRM. One statement, then the roster. */}
        <section className="bg-ivory py-28 md:py-36">
          <Container>
            <div className="max-w-3xl">
              <h2 className="font-serif text-display-2 font-normal leading-[1.08] text-navy">
                Built in the boardroom, not the classroom.
              </h2>
              <p className="mt-8 max-w-xl font-sans text-[1.05rem] leading-relaxed text-charcoal/70">
                Our perspective comes from forming and sitting on boards, running
                companies and investing capital — not from a framework. One team
                coordinates the business, its capital and the family.
              </p>
            </div>
            <div className="mt-20">
              <Leadership />
            </div>
          </Container>
        </section>

        {/* 6 — INSIGHTS. One featured piece with its photograph; the rest as a
            short reading list, not a grid of equal cards. */}
        <section className="bg-parchment py-28 md:py-36">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-serif text-display-3 font-normal text-navy">
                Research and perspective.
              </h2>
              <Link
                href="/insights"
                className="shrink-0 font-sans text-[0.72rem] uppercase tracking-[0.08em] text-navy/70 transition-colors hover:text-brass"
              >
                All insights →
              </Link>
            </div>

            {featured && (
              <Link
                href={`/insights/${featured.slug}`}
                className="group mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14"
              >
                {featured.image && (
                  <div className="relative aspect-[4/3] overflow-hidden lg:col-span-7">
                    <Image
                      src={featured.image.src}
                      alt={featured.title}
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="flex flex-col justify-center lg:col-span-5">
                  <span className="font-sans text-[0.72rem] uppercase tracking-[0.1em] text-brass">
                    {featured.category}
                  </span>
                  <h3 className="mt-4 font-serif text-display-3 font-normal leading-tight text-navy group-hover:text-brass">
                    {featured.title}
                  </h3>
                  <p className="mt-5 max-w-md font-sans text-[0.98rem] leading-relaxed text-charcoal/65">
                    {featured.summary}
                  </p>
                </div>
              </Link>
            )}

            <ul className="mt-16 border-t border-charcoal/15">
              {moreInsights.map((item) => (
                <li key={item!.title}>
                  <Link
                    href={item!.href}
                    className="group grid grid-cols-1 gap-x-8 gap-y-1 border-b border-charcoal/15 py-6 sm:grid-cols-12 sm:items-baseline"
                  >
                    <span className="font-sans text-[0.72rem] uppercase tracking-[0.1em] text-brass sm:col-span-3">
                      {item!.category}
                    </span>
                    <span className="font-serif text-lg font-normal leading-snug text-navy transition-colors group-hover:text-brass sm:col-span-9">
                      {item!.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* 7 — CLOSE. One line, one action. */}
        <section className="bg-navy py-28 text-ivory md:py-36">
          <Container>
            <div className="max-w-3xl">
              <h2 className="font-serif text-display-2 font-normal leading-[1.08] text-ivory">
                Start with the decision in front of you.
              </h2>
              <Link href="/contact" className="btn-inverse mt-10">
                Schedule a conversation
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
