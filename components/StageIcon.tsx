import { ReactElement } from "react";
import { StageId } from "./stages";

function RoundtableGlyph() {
  return (
    <>
      <circle cx="12" cy="12" r="5.5" />
      <path d="M12 3v2.2M12 16.8V21M3 12h2.2M16.8 12H21" />
    </>
  );
}

function MountainGlyph() {
  return <path d="M3 17.5 9 8l3.2 4.6L15 9l6 8.5H3Z" />;
}

function CompassGlyph() {
  return (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M14.6 9.4 13 13l-3.6 1.6L11 11l3.6-1.6Z" />
    </>
  );
}

function TreeGlyph() {
  return (
    <>
      <path d="M12 21v-6.5" />
      <path d="M12 3 6.5 11h3L7 16h10l-2.5-5h3L12 3Z" />
    </>
  );
}

const glyphs: Record<StageId, () => ReactElement> = {
  govern: RoundtableGlyph,
  scale: MountainGlyph,
  compound: CompassGlyph,
  steward: TreeGlyph,
};

export function StageIcon({ stage, className = "" }: { stage: StageId; className?: string }) {
  const Glyph = glyphs[stage];
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
