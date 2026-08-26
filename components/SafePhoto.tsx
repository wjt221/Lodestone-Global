"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * A photo that degrades on its own when the file can't be fetched.
 *
 * Several images on this site are hotlinked from Lodestone's own Wix media CDN
 * -- leadership portraits and migrated article covers -- because this build's
 * network policy blocks pulling the binaries into /public (see
 * CONTENT_NEEDED.md). That means the page depends on a host nothing can verify
 * at build time, and a failed <img> renders as a broken frame with alt text
 * sprawled across it, which is visibly worse than having no photo at all.
 *
 * So each caller declares what should happen instead:
 *
 *   "collapse"  the frame is removed and the surrounding block (a name, a
 *               headline) carries on alone. Plain, never broken.
 *   "tone"      the frame stays at its aspect ratio and holds a quiet toned
 *               panel, for grids that need their cells to keep their shape.
 *
 * `alt` is empty by default: every current caller renders the same
 * information as text immediately beside the image, and repeating it to a
 * screen reader is noise. Pass a real alt for a photo that carries meaning of
 * its own.
 *
 * When these files move into /public, callers can go back to a plain
 * next/image.
 */
export function SafePhoto({
  src,
  alt = "",
  sizes,
  aspect,
  onFail = "tone",
  objectPosition = "center",
  className = "",
  imageClassName = "",
}: {
  src: string;
  alt?: string;
  sizes: string;

  /**
   * Aspect-ratio class for the frame the photo fills, e.g. `aspect-[4/5]`.
   *
   * It must be an aspect ratio, not positioning: the frame is the containing
   * block for a `fill` image and so is always `relative`. Passing
   * `absolute inset-0` to stretch it inside some other positioned parent
   * collapses it to zero height, because `.absolute` and `.relative` have
   * equal specificity and Tailwind's source order decides the winner. If an
   * overlay needs to sit on top of the photo, wrap this in a `relative`
   * element and position the overlay against that instead.
   */
  aspect: string;
  onFail?: "collapse" | "tone";
  objectPosition?: string;
  className?: string;
  imageClassName?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed && onFail === "collapse") return null;

  return (
    <div className={`relative overflow-hidden bg-parchment ${aspect} ${className}`}>
      {failed ? (
        <div
          aria-hidden
          className="photo-fallback absolute inset-0"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          style={{ objectPosition }}
          className={`object-cover transition-transform duration-700 ease-editorial ${imageClassName}`}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
