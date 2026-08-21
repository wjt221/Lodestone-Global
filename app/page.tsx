import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Leadership } from "@/components/Leadership";
import { photos } from "@/components/photos";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { articles, articleCards } from "@/lib/articles";
import { researchCard } from "@/lib/content";

/*
  Homepage as an editorial monograph.

  The prior versions -- old and "lightened" -- shared one skeleton: full-width
  bands stacked vertically, content centred in a container, a left-aligned serif
  headline each time. Trimming sections made it emptier, not different.

  This rebuild changes the composition itself. A numbered rail runs down the
  left as a spine (01-05); the body is offset into the right-hand columns, so
  the page reads as an asymmetric grid rather than a stack of centred blocks.
  A full-bleed photograph breaks the container at the midpoint, the hero
  headline overlaps the image on an ivory slab, and the display type is much
  larger. Three chapters of prose, two image breaks, one roster, one close.
*/

const CHAPTERS = [
  {
    n: "02",
    label: "The relationship",
  },
];

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
  { value: "2013", label: "in the private-company board market since" },
  { value: "2016–2026", label: "ten unbroken editions of the compensation survey" },
];

/** A chapter number set as a spine in the left margin. */
function Rail({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 lg:flex-col lg:items-start lg:gap-3">
      <span className="font-serif text-[2.5rem] leading-none text-brass/70 lg:text-[3.5rem]">
        {n}
      </span>
      <span className="font-sans text-[0.68rem] uppercase tracking-widest2 text-charcoal/45">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  const featured = articles[0];
  const moreInsights = [researchCard, articleCards[1], articleCards[2]].filter(Boolean);

  return (
    <>
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      <Header />
      <main id="main">
        {/* HERO — full-bleed boardroom with a meta rule; the headline lives on an
            ivory slab below that overlaps up into the image. */}
        <section className="relative">
          <div className="relative h-[62vh] min-h-[420px] w-full overflow-hidden md:h-[74vh]">
            <Image
              src={photos.hero.src}
              alt={photos.hero.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "center right" }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(10,27,42,0.55) 0%, rgba(10,27,42,0.25) 45%, rgba(10,27,42,0.35) 100%)",
              }}
              aria-hidden
            />
            <Container className="relative flex h-full flex-col justify-start pt-[6.5rem]">
              <div className="flex items-center gap-4 text-ivory/80">
                <span className="font-sans text-[0.68rem] uppercase tracking-widest2">
                  Lodestone Global
                </span>
                <span className="h-px w-10 bg-ivory/40" aria-hidden />
                <span className="font-sans text-[0.68rem] uppercase tracking-[0.12em]">
                  Private-company boards since 2013
                </span>
              </div>
            </Container>
          </div>

          {/* Overlapping headline slab */}
          <Container>
            <div className="relative z-10 -mt-16 max-w-[62rem] bg-ivory pr-6 pt-10 md:-mt-24 md:pr-16 md:pt-14">
              <h1 className="font-serif text-[clamp(2.6rem,6.4vw,6.25rem)] font-semibold leading-[0.97] tracking-[-0.015em] text-navy">
                We build, facilitate, optimize and educate award-winning boards.
              </h1>
              <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-md font-sans text-lg leading-relaxed text-charcoal/70">
                  For private, family-owned and founder-led companies — the board a
                  business actually needs, and the directors to fill it.
                </p>
                <Link href="/contact" className="btn-primary shrink-0">
                  Discuss your board
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* 01 — THE PROPOSITION. Offset into the right columns; the rail carries
            the number. One large statement, deep whitespace. */}
        <section className="bg-ivory pb-28 pt-24 md:pb-40 md:pt-32">
          <Container>
            <div className="grid grid-cols-12 gap-y-10 lg:gap-x-8">
              <div className="col-span-12 lg:col-span-2">
                <Rail n="01" label="The board" />
              </div>
              <div className="col-span-12 lg:col-span-9 lg:col-start-4">
                <p className="font-serif text-[clamp(1.9rem,3.4vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.01em] text-navy">
                  The board is where ownership, strategy and capital meet. Most private
                  companies build one a decade too late.
                </p>
                <p className="mt-10 max-w-lg font-sans text-[1.05rem] leading-relaxed text-charcoal/65">
                  Since 2013 we have formed, optimized and educated the boards behind
                  founder- and family-owned businesses — and published the benchmark for
                  what their directors are paid.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* IMAGE BREAK — full-bleed, edge to edge, with one line held at the foot. */}
        <section className="relative h-[52vh] min-h-[340px] w-full overflow-hidden md:h-[68vh]">
          <Image
            src={photos.homeStatementBand.src}
            alt={photos.homeStatementBand.alt}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(10,27,42,0.85) 0%, rgba(10,27,42,0.25) 55%, rgba(10,27,42,0.15) 100%)",
            }}
            aria-hidden
          />
          <Container className="absolute inset-x-0 bottom-0 pb-14 md:pb-20">
            <p className="max-w-3xl font-serif text-[clamp(1.6rem,3vw,2.75rem)] font-normal leading-tight text-ivory">
              We start with the whole picture — the business, the family, the capital —
              not the assignment in front of us.
            </p>
          </Container>
        </section>

        {/* 02 — THE RELATIONSHIP. Journey + ecosystem, one offset list. */}
        <section className="bg-ivory py-24 md:py-32">
          <Container>
            <div className="grid grid-cols-12 gap-y-12 lg:gap-x-8">
              <div className="col-span-12 lg:col-span-2">
                <Rail n={CHAPTERS[0].n} label={CHAPTERS[0].label} />
              </div>
              <div className="col-span-12 lg:col-span-9 lg:col-start-4">
                <h2 className="max-w-xl font-serif text-[clamp(1.8rem,3vw,2.75rem)] font-normal leading-[1.1] text-navy">
                  One relationship, as the company changes.
                </h2>
                <ol className="mt-14">
                  {RELATIONSHIP.map((r, i) => (
                    <li
                      key={r.stage}
                      className="grid grid-cols-1 gap-x-8 gap-y-2 border-t border-charcoal/15 py-7 last:border-b sm:grid-cols-12 sm:items-baseline"
                    >
                      <span className="font-sans text-[0.7rem] uppercase tracking-widest2 text-brass sm:col-span-1">
                        0{i + 1}
                      </span>
                      <span className="font-serif text-2xl leading-none text-navy sm:col-span-3">
                        {r.stage}
                      </span>
                      <p className="font-serif text-lg font-normal leading-snug text-navy/75 sm:col-span-5">
                        {r.question}
                      </p>
                      <Link
                        href={r.href}
                        className="font-sans text-[0.72rem] uppercase tracking-[0.08em] text-navy/55 transition-colors hover:text-brass sm:col-span-3 sm:text-right"
                      >
                        {r.business}
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Container>
        </section>

        {/* PROOF — dark break, three figures pinned to the right of a large label. */}
        <section className="bg-navy py-24 text-ivory md:py-28">
          <Container>
            <div className="grid grid-cols-12 items-baseline gap-y-12 lg:gap-x-8">
              <div className="col-span-12 lg:col-span-2">
                <Rail n="03" label="Evidence" />
              </div>
              <dl className="col-span-12 grid grid-cols-1 gap-12 sm:grid-cols-3 lg:col-span-9 lg:col-start-4">
                {PROOF.map((f) => (
                  <div key={f.value} className="flex flex-col gap-3">
                    <dt className="font-serif text-[clamp(2.75rem,4vw,3.75rem)] leading-none text-ivory">
                      {f.value}
                    </dt>
                    <dd className="max-w-[24ch] font-sans text-[0.9rem] leading-relaxed text-ivory/55">
                      {f.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </section>

        {/* 04 — THE FIRM. Statement offset, roster full measure below. */}
        <section className="bg-ivory py-24 md:py-32">
          <Container>
            <div className="grid grid-cols-12 gap-y-10 lg:gap-x-8">
              <div className="col-span-12 lg:col-span-2">
                <Rail n="04" label="The firm" />
              </div>
              <div className="col-span-12 lg:col-span-9 lg:col-start-4">
                <h2 className="max-w-2xl font-serif text-[clamp(1.9rem,3.4vw,3.1rem)] font-normal leading-[1.1] text-navy">
                  Built in the boardroom, not the classroom.
                </h2>
                <p className="mt-8 max-w-lg font-sans text-[1.05rem] leading-relaxed text-charcoal/65">
                  Our perspective comes from forming and sitting on boards, running
                  companies and investing capital — not from a framework. One team
                  coordinates the business, its capital and the family.
                </p>
              </div>
            </div>
            <div className="mt-20 lg:pl-[calc(25%+2rem)]">
              <Leadership />
            </div>
          </Container>
        </section>

        {/* 05 — INSIGHTS. One featured piece, then a short reading list. */}
        <section className="bg-ivory pb-28 pt-4 md:pb-36">
          <Container>
            <div className="grid grid-cols-12 gap-y-12 lg:gap-x-8">
              <div className="col-span-12 lg:col-span-2">
                <Rail n="05" label="Writing" />
              </div>
              <div className="col-span-12 lg:col-span-9 lg:col-start-4">
                <div className="flex items-end justify-between gap-6">
                  <h2 className="font-serif text-[clamp(1.8rem,3vw,2.75rem)] font-normal text-navy">
                    Research &amp; perspective.
                  </h2>
                  <Link
                    href="/insights"
                    className="shrink-0 font-sans text-[0.72rem] uppercase tracking-[0.08em] text-navy/60 transition-colors hover:text-brass"
                  >
                    All insights →
                  </Link>
                </div>

                {featured && (
                  <Link
                    href={`/insights/${featured.slug}`}
                    className="group mt-12 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12"
                  >
                    {featured.image && (
                      <div className="relative aspect-[3/2] overflow-hidden md:col-span-7">
                        <Image
                          src={featured.image.src}
                          alt={featured.title}
                          fill
                          sizes="(min-width: 768px) 45vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                        />
                      </div>
                    )}
                    <div className="flex flex-col justify-center md:col-span-5">
                      <span className="font-sans text-[0.72rem] uppercase tracking-[0.1em] text-brass">
                        {featured.category}
                      </span>
                      <h3 className="mt-4 font-serif text-2xl font-normal leading-tight text-navy group-hover:text-brass md:text-[1.75rem]">
                        {featured.title}
                      </h3>
                      <p className="mt-4 max-w-md font-sans text-[0.95rem] leading-relaxed text-charcoal/60">
                        {featured.summary}
                      </p>
                    </div>
                  </Link>
                )}

                <ul className="mt-14 border-t border-charcoal/15">
                  {moreInsights.map((item) => (
                    <li key={item!.title}>
                      <Link
                        href={item!.href}
                        className="group grid grid-cols-1 gap-x-8 gap-y-1 border-b border-charcoal/15 py-5 sm:grid-cols-12 sm:items-baseline"
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
              </div>
            </div>
          </Container>
        </section>

        {/* CLOSE — a dark full measure, one line, one action, a final rule. */}
        <section className="bg-navy py-24 text-ivory md:py-32">
          <Container>
            <div className="border-t border-ivory/20 pt-12">
              <h2 className="max-w-2xl font-serif text-[clamp(2rem,3.6vw,3.5rem)] font-normal leading-[1.08] text-ivory">
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
