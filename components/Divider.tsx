export function Divider({ tone = "light" }: { tone?: "light" | "dark" }) {
  const line = tone === "dark" ? "bg-ivory/25" : "bg-charcoal/15";
  const mark = tone === "dark" ? "bg-brass-light" : "bg-brass";

  return (
    <div className="flex items-center justify-center gap-3 py-2" aria-hidden>
      <span className={`h-px w-16 ${line}`} />
      <span className={`h-1 w-1 rotate-45 ${mark}`} />
      <span className={`h-px w-16 ${line}`} />
    </div>
  );
}
