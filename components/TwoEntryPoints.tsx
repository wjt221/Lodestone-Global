const panels = [
  {
    tone: "dark" as const,
    kicker: "For Founders and Owners",
    title: "Build a Board",
    body: "Install the governance, talent, and strategic discipline that let a business run without depending entirely on you.",
    href: "/#govern",
    cta: "Explore Board Advisory",
  },
  {
    tone: "light" as const,
    kicker: "For Principals and Families",
    title: "Lodestone Family Advisors",
    body: "An independent RIA multi-family office. It gives a family the capabilities of a single-family office, without the cost of building one internally.",
    href: "/#steward",
    cta: "Explore Family Advisors",
  },
];

export function TwoEntryPoints() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {panels.map((panel) => {
        const dark = panel.tone === "dark";
        return (
          <a
            key={panel.title}
            href={panel.href}
            className={`group flex flex-col justify-between gap-10 px-8 py-16 transition-colors duration-200 md:px-14 md:py-20 ${
              dark ? "bg-navy text-ivory hover:bg-navy-light" : "bg-parchment text-navy hover:bg-stone-light/60"
            }`}
          >
            <div className="flex flex-col gap-4">
              <span className={`kicker ${dark ? "text-brass-light" : "text-navy/70"}`}>{panel.kicker}</span>
              <h3 className="font-serif text-display-3 font-normal">{panel.title}</h3>
              <p className={`max-w-sm font-sans text-[0.95rem] leading-relaxed ${dark ? "text-ivory/70" : "text-charcoal/65"}`}>
                {panel.body}
              </p>
            </div>
            <span
              className={`btn-text ${dark ? "text-ivory" : "text-navy"} w-fit`}
            >
              {panel.cta}
            </span>
          </a>
        );
      })}
    </div>
  );
}
