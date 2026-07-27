import { ReactNode } from "react";

/**
 * Small eyebrow label with a circular chevron marker, used above masthead
 * headlines and section titles.
 */
export function Kicker({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const color = tone === "dark" ? "text-brass-light" : "text-navy/70";
  const ring = tone === "dark" ? "border-brass-light/40" : "border-navy/30";

  return (
    <div className={`flex items-center gap-2.5 ${color}`}>
      <span
        aria-hidden="true"
        className={`flex h-[1.2rem] w-[1.2rem] shrink-0 items-center justify-center rounded-full border ${ring}`}
      >
        <svg width="7" height="7" viewBox="0 0 8 8" fill="none" className="translate-x-px">
          <path
            d="M2 1l4 3-4 3"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-sans text-[0.7rem] uppercase tracking-widest2">{children}</span>
    </div>
  );
}
