export function CTASection({
  title = "Begin with a conversation.",
  description = "There is no cost, and no obligation, to understanding where you stand.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <h2 className="max-w-xl font-serif text-display-3 font-normal text-ivory">{title}</h2>
      <p className="max-w-md font-sans text-[0.95rem] leading-relaxed text-ivory/65">{description}</p>
      <a href="mailto:inquire@lodestoneglobal.com" className="btn-inverse">
        Schedule a Conversation
      </a>
    </div>
  );
}
