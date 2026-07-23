import { EditorialImage } from "./EditorialImage";
import { photos } from "./photos";

const leaders = [
  { photo: photos.leadership1, name: "William Tenenbaum", role: "Founder & Managing Partner" },
  { photo: photos.leadership2, name: "Ken Munkacy", role: "Advisory Board Member" },
];

export function TeamPreview() {
  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
        {leaders.map((leader) => (
          <div key={leader.name} className="flex flex-col gap-5">
            <EditorialImage src={leader.photo.src} alt={`Portrait of ${leader.name}`} aspect="aspect-[4/5]" />
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-xl font-normal text-navy">{leader.name}</h3>
              <span className="font-sans text-[0.85rem] text-charcoal/55">{leader.role}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="font-sans text-[0.75rem] text-charcoal/40">
        Full biographies and photography to be supplied by Lodestone.
      </p>
    </div>
  );
}
