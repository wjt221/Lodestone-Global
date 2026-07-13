import { ReactElement } from "react";

export type OutcomeId =
  | "freedom"
  | "optionality"
  | "impact"
  | "legacy"
  | "time"
  | "continuity"
  | "purpose";

function Freedom() {
  return <path d="M12 21c4-3 7-7.5 7-12a7 7 0 0 0-14 0c0 4.5 3 9 7 12Z M9.5 9.5 12 7l2.5 2.5M12 7v6" />;
}

function Optionality() {
  return (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.8 2.8" />
    </>
  );
}

function Impact() {
  return (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  );
}

function Legacy() {
  return (
    <>
      <circle cx="8.5" cy="12" r="3.3" />
      <circle cx="15.5" cy="12" r="3.3" />
    </>
  );
}

function Time() {
  return (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5V12l3 2" />
    </>
  );
}

function Continuity() {
  return <path d="M12 3.5c4 1 7 2.4 7 2.4v6c0 4.2-3 7-7 8.6-4-1.6-7-4.4-7-8.6v-6S8 4.5 12 3.5Z" />;
}

function Purpose() {
  return (
    <path d="M12 3v4.2M12 16.8V21M3 12h4.2M16.8 12H21M6 6l3 3M18 6l-3 3M6 18l3-3M18 18l-3-3" />
  );
}

const glyphs: Record<OutcomeId, () => ReactElement> = {
  freedom: Freedom,
  optionality: Optionality,
  impact: Impact,
  legacy: Legacy,
  time: Time,
  continuity: Continuity,
  purpose: Purpose,
};

export function OutcomeIcon({ id, className = "" }: { id: OutcomeId; className?: string }) {
  const Glyph = glyphs[id];
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <Glyph />
    </svg>
  );
}
