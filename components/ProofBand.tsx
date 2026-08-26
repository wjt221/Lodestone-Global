import Link from "next/link";
import { Container } from "./Container";

/**
 * The research credential, stated as a fact with context rather than as three
 * floating numbers.
 *
 * The previous version set 782 / 38 / 2016–2026 at display scale on their own.
 * That read as a templated stats band, and worse, those figures describe the
 * survey's RESPONDENTS, not Lodestone's client base -- shown as hero numbers
 * they implied a reach nobody has claimed. Here the same verified figures sit
 * inside a sentence that names what the survey is and why it matters, and links
 * to the research itself.
 */
export function ProofBand() {
  return (
    <section className="bg-navy py-24 text-ivory md:py-28">
      <Container>
        {/*
          Two columns, not one narrow one. The claim and its evidence used to
          stack inside max-w-3xl against half a screen of empty navy, which on
          a band this dark read as a slide with nothing on the right. Setting
          the evidence beside the claim uses the full measure and lets the
          statement run larger.
        */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-12">
          <p className="font-serif text-display-2 font-normal leading-tight text-ivory lg:col-span-6">
            For a decade we have published the benchmark private companies use to
            decide what to pay their directors.
          </p>
          <div className="flex flex-col items-start gap-8 lg:col-span-5 lg:col-start-8 lg:pt-2">
            <p className="font-sans text-[1.02rem] leading-relaxed text-ivory/70">
              The Private Company Board Compensation Survey is now in its tenth edition.
              The 2023 study drew on 782 companies across 50 industries and 38 countries —
              the reference owners turn to when they set board pay.
            </p>
            <Link href="/research" className="btn-inverse">
              Explore the research
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
