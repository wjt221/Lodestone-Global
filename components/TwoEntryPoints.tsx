import Image from "next/image";
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
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {panels.map((panel) => (
        <a
          key={panel.title}
          href={panel.href}
          className="group relative flex flex-col justify-between gap-10 overflow-hidden px-8 py-16 text-ivory md:px-14 md:py-20"
        >
          <Image
            src={panel.photo.src}
            alt={panel.photo.alt}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className={`absolute inset-0 ${panel.overlay} transition-opacity duration-300 group-hover:opacity-90`} aria-hidden />
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
  );
}
