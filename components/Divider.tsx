export function Divider({ tone = "light" }: { tone?: "light" | "dark" }) {
  const line = tone === "dark" ? "bg-ivory/15" : "bg-charcoal/12";
  const mark = tone === "dark" ? "bg-brass-light" : "bg-brass";

  return (
    <div className="flex items-center gap-0" aria-hidden>
      <span className={`h-px w-10 ${mark}`} />
      <span className={`h-px flex-1 ${line}`} />
    </div>
  );
}
