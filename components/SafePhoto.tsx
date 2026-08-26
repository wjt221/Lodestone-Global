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
  frameClassName,
  onFail = "tone",
  objectPosition = "center",
  className = "",
  imageClassName = "",
}: {
  src: string;
  alt?: string;
  sizes: string;
  /**
   * Sizing classes for the frame the photo fills. Usually an aspect ratio
   * (`aspect-[4/5]`); pass `absolute inset-0` to fill a positioned parent that
   * already establishes the shape.
   */
  frameClassName: string;
  onFail?: "collapse" | "tone";
  objectPosition?: string;
  className?: string;
  imageClassName?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed && onFail === "collapse") return null;

  return (
    <div className={`relative overflow-hidden bg-parchment ${frameClassName} ${className}`}>
      {failed ? (
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-navy/12 via-parchment to-stone-light/50"
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
