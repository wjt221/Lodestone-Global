import { BackgroundPhoto } from "./BackgroundPhoto";
import { photos } from "./photos";

const panels = [
  {
    kicker: "For Founders and Owners",
    title: "Build a Board",
    body: "Install the governance, talent, and strategic discipline that let a business run without depending entirely on you.",
    href: "/#govern",
    cta: "Explore Board Advisory",
    photo: photos.buildABoard,
    overlay: "bg-navy/75",
  },
  {
    kicker: "For Principals and Families",
    title: "Lodestone Family Advisors",
    body: "An independent RIA multi-family office. It gives a family the capabilities of a single-family office, without the cost of building one internally.",
    href: "/#steward",
    cta: "Explore Family Advisors",
    photo: photos.familyAdvisors,
    overlay: "bg-navy/60",
  },
];

export function TwoEntryPoints() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {panels.map((panel) => (
          <a
            key={panel.title}
            href={panel.href}
            className="group relative flex flex-col justify-between gap-10 overflow-hidden px-8 py-16 text-ivory md:px-14 md:py-20"
          >
            <BackgroundPhoto src={panel.photo.src} alt={panel.photo.alt} overlayClassName={panel.overlay} />
            <div className="relative z-10 flex flex-col gap-4">
              <span className="kicker text-brass-light">{panel.kicker}</span>
              <h3 className="font-serif text-display-3 font-normal">{panel.title}</h3>
              <p className="max-w-sm font-sans text-[0.95rem] leading-relaxed text-ivory/85">
                {panel.body}
              </p>
            </div>
            <span className="btn-text relative z-10 w-fit text-ivory">{panel.cta}</span>
          </a>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 border-t border-charcoal/12 bg-parchment/40 px-8 py-10 sm:grid-cols-2 md:px-14">
        <p className="font-serif text-lg font-normal italic text-navy">
          A better company creates greater optionality and capital.
        </p>
        <p className="font-serif text-lg font-normal italic text-navy">
          Better ownership and capital allocation strengthen the company and preserve wealth.
        </p>
      </div>
    </div>
  );
}
