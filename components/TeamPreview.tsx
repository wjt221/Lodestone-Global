const seats = ["Managing Partner", "Managing Partner", "Chief Operating Partner", "Head of Family Advisors"];

export function TeamPreview() {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {seats.map((role, i) => (
        <div key={i} className="flex flex-col gap-4">
          <div className="aspect-[4/5] w-full border border-charcoal/15 bg-parchment" aria-hidden />
          <div className="flex flex-col gap-1">
            <h3 className="font-serif text-base font-normal text-navy">[Leadership name]</h3>
            <span className="font-sans text-[0.8rem] text-charcoal/55">{role}</span>
          </div>
        </div>
      ))}
      <p className="col-span-full pt-2 font-sans text-[0.75rem] text-charcoal/40">
        Leadership bios and photography to be supplied by Lodestone.
      </p>
    </div>
  );
}
