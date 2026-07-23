import { StageId } from "./stages";

/**
 * Real approved logo assets, navy-on-light variant (for use on ivory/parchment
 * backgrounds only). Only Lodestone Global and Lodestone Capital have clean,
 * correctly-labeled files in the supplied brand package — the E3 and Family
 * Advisors packages contain mis-cropped/mislabeled assets (see WIX-EXPORT.md
 * notes), so those two stay null until corrected files are supplied.
 */
export const entityLogos: Record<StageId, { src: string; width: number; height: number } | null> = {
  govern: { src: "/logo/lodestone-global-horizontal-navy.png", width: 472, height: 177 },
  scale: null,
  compound: { src: "/logo/lodestone-capital-horizontal-navy.png", width: 503, height: 270 },
  steward: null,
};
