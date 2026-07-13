import { Container } from "./Container";
import { Divider } from "./Divider";

const columns = [
  {
    stage: "Govern",
    entity: "Lodestone Global",
    href: "/#govern",
    items: ["Board Formation", "Executive Search", "Strategic Advisory"],
  },
  {
    stage: "Scale",
    entity: "E3 Scale Network",
    href: "/#scale",
    items: ["Operating Partners", "Execution Systems", "Capital Allocation"],
  },
  {
    stage: "Compound",
    entity: "Lodestone Capital",
    href: "/#compound",
    items: ["Private Equity", "Real Estate", "Co-Investments"],
  },
  {
    stage: "Steward",
    entity: "Lodestone Family Advisors",
    href: "/#steward",
    items: ["Strategic Wealth Advisory", "Family Governance", "Trust & Estate Coordination"],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-navy text-ivory">
      <Container className="py-20">
        <nav aria-label="Lodestone ecosystem" className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.stage} className="flex flex-col gap-4">
              <a href={col.href} className="flex flex-col gap-1">
                <span className="font-sans text-[0.68rem] uppercase tracking-widest2 text-brass-light">
                  {col.stage}
                </span>
                <span className="font-serif text-[1.05rem] font-normal text-ivory">{col.entity}</span>
              </a>
              <ul className="flex flex-col gap-2">
                {col.items.map((item) => (
                  <li key={item} className="font-sans text-[0.85rem] text-ivory/55">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-16">
          <Divider tone="dark" />
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 text-center">
          <p className="font-serif text-display-3 font-normal italic text-ivory/90">
            One Principal. One Trusted Team. Every Important Decision.
          </p>
          <a href="mailto:inquire@lodestoneglobal.com" className="btn-inverse">
            Schedule a Conversation
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3 border-t border-ivory/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="font-serif text-[1rem] tracking-[0.02em] text-ivory/75">Lodestone</span>
          <span className="font-sans text-[0.72rem] uppercase tracking-[0.1em] text-ivory/35">
            &copy; {new Date().getFullYear()} Lodestone Global. All rights reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
}
