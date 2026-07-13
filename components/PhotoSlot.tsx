export function PhotoSlot({ caption, className = "" }: { caption: string; className?: string }) {
  return (
    <div
      className={`flex items-end border border-charcoal/15 bg-stone-light/40 p-3 ${className}`}
      role="img"
      aria-label={`Photography placeholder: ${caption}`}
    >
      <span className="font-sans text-[0.68rem] uppercase tracking-[0.06em] text-charcoal/40">
        {caption}
      </span>
    </div>
  );
}
