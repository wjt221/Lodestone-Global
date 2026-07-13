import { EditorialImage } from "./EditorialImage";
import { photos } from "./photos";

const leaders = [
  { photo: photos.leadership1, role: "Managing Partner" },
  { photo: photos.leadership2, role: "Managing Partner" },
];

export function TeamPreview() {
  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
        {leaders.map((leader, i) => (
          <div key={i} className="flex flex-col gap-5">
            <EditorialImage src={leader.photo.src} alt={leader.photo.alt} aspect="aspect-[4/5]" />
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-xl font-normal text-navy">[Leadership name]</h3>
              <span className="font-sans text-[0.85rem] text-charcoal/55">{leader.role}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="font-sans text-[0.75rem] text-charcoal/40">
        Leadership names, biographies, and photography to be supplied by Lodestone.
      </p>
    </div>
  );
}
