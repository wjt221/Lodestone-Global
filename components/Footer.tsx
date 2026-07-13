import { Container } from "./Container";
import { Divider } from "./Divider";

const columns = [
  {
    stage: "Build",
    entity: "Lodestone Global",
    items: ["Governance", "Board Advisory", "Executive Search", "Strategic Advisory"],
  },
  {
    stage: "Scale",
    entity: "E3 Scale Network",
    items: ["Operating Partners", "Execution Systems", "Organizational Design", "Capital Allocation"],
  },
  {
    stage: "Compound",
    entity: "Lodestone Capital",
    items: ["Private Equity", "Real Estate", "Strategic Capital"],
  },
  {
    stage: "Steward",
    entity: "Lodestone Family Advisors",
    items: [
      "Strategic Wealth Advisory",
      "Investment Oversight",
      "Family Governance",
      "Trust & Estate Coordination",
    ],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-navy text-ivory">
      <Container className="py-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.stage} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-sans text-[0.68rem] uppercase tracking-widest2 text-brass-light">
                  {col.stage}
                </span>
                <span className="font-serif text-[1.05rem] font-light text-ivory">{col.entity}</span>
              </div>
              <ul className="flex flex-col gap-2">
                {col.items.map((item) => (
                  <li key={item} className="font-sans text-[0.85rem] text-ivory/60">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <Divider tone="dark" />
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 text-center">
          <p className="font-serif text-display-3 font-light italic text-ivory/90">
            One Principal. One Trusted Team. Every Important Decision.
          </p>
          <a
            href="mailto:inquire@lodestoneglobal.com"
            className="btn-inverse"
          >
            Begin a Conversation
          </a>
        </div>

        <div className="mt-20 flex flex-col items-center gap-3 border-t border-ivory/10 pt-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="font-serif text-[1rem] tracking-[0.08em] text-ivory/80">LODESTONE</span>
          <span className="font-sans text-[0.72rem] uppercase tracking-[0.14em] text-ivory/40">
            &copy; {new Date().getFullYear()} Lodestone Global. All rights reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
}
