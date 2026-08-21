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
        <div className="max-w-3xl">
          <p className="font-serif text-display-3 font-normal leading-tight text-ivory">
            For a decade we have published the benchmark private companies use to
            decide what to pay their directors.
          </p>
          <p className="mt-8 max-w-xl font-sans text-[1.02rem] leading-relaxed text-ivory/70">
            The Private Company Board Compensation Survey is now in its tenth edition.
            The 2023 study drew on 782 companies across 50 industries and 38 countries —
            the reference owners turn to when they set board pay.
          </p>
          <Link href="/research" className="btn-inverse mt-10">
            Explore the research
          </Link>
        </div>
      </Container>
    </section>
  );
}
