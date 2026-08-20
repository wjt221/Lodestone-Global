import { Container } from "./Container";

/**
 * A deliberate break in the page rhythm.
 *
 * Every other section on the homepage is eyebrow, serif headline, then columns of
 * small text. Repeated eleven times that uniformity is what makes a page read as
 * generated rather than edited. This band does the opposite: three figures at
 * display scale, no headline, no body copy.
 *
 * Every figure is published by Lodestone and checkable. Nothing here is rounded
 * up, inferred, or illustrative.
 */
const FIGURES = [
  {
    value: "782",
    label: "companies in the 2023 Private Company Board Compensation Survey",
  },
  {
    value: "38",
    label: "countries and 50 industries represented in the data",
  },
  {
    value: "2016–2026",
    label: "an unbroken run of annual survey editions",
  },
];

export function ProofBand() {
  return (
    <section className="bg-navy py-20 text-ivory md:py-24">
      <Container>
        <dl className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          {FIGURES.map((f) => (
            <div key={f.value} className="flex flex-col gap-3">
              <dt className="font-serif text-[3.25rem] leading-none text-ivory md:text-[4rem]">
                {f.value}
              </dt>
              <dd className="max-w-[22ch] font-sans text-[0.9rem] leading-relaxed text-ivory/65">
                {f.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
