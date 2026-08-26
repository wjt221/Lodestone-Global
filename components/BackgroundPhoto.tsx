import Image from "next/image";
import type { CSSProperties } from "react";
import { isImageAvailable } from "@/lib/localImage";

/**
 * Full-bleed background photo (hero, closing section) over a fixed overlay
 * tone. A solid navy base is always painted beneath the image, so the section
 * stays legible even before the photo loads or if a remote image fails to
 * fetch. Works with a remote (Unsplash) URL or a local /public file.
 */
export function BackgroundPhoto({
  src,
  alt,
  overlayClassName,
  overlayStyle,
  priority = false,
  sizes = "100vw",
  imageClassName = "",
  objectPosition = "center",
}: {
  src: string;
  /** Written spec of the photo's subject. Not rendered -- see the note below. */
  alt: string;
  /**
   * Tailwind class for the overlay. Only safe with opacity fractions already
   * used elsewhere in this codebase (this build silently drops Tailwind
   * color-opacity utilities it hasn't compiled before, e.g. bg-navy/82 or
   * bg-navy/33 never generate a CSS rule even though the class is present in
   * the markup — confirmed reproducible, not fixed by clearing .next). For
   * any new or precision-sensitive value, use `overlayStyle` instead, which
   * always renders since it bypasses Tailwind's compiled output entirely.
   */
  overlayClassName?: string;
  /** Inline style for the overlay, e.g. { backgroundColor: "rgba(10,27,42,0.78)" } or a custom gradient. Takes precedence over overlayClassName. */
  overlayStyle?: CSSProperties;
  priority?: boolean;
  sizes?: string;
  imageClassName?: string;
  /** CSS object-position, for photos whose focal point isn't centered (e.g. architecture shots cropped tall on mobile). */
  objectPosition?: string;
}) {
  const available = isImageAvailable(src);

  return (
    <>
      {/* Solid base: guarantees a dark, legible field regardless of image state. */}
      <div className="absolute inset-0 bg-navy" aria-hidden />
      {available && (
        <Image
          src={src}
          // Decorative. A full-bleed background always sits behind a heading
          // that already says what the section is, so an assistive-tech user
          // hearing "A family walking together outdoors, understated rather
          // than sentimental" before the headline gets noise, not content.
          // `alt` stays on the prop because photos.ts uses it as the written
          // spec of each slot's intended subject; it is documentation, not
          // page copy. Empty alt also means a fetch failure degrades to the
          // solid navy base below rather than sprawling that sentence across
          // the band.
          alt=""
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectPosition }}
          className={`object-cover ${imageClassName}`}
        />
      )}
      <div
        className={`absolute inset-0 ${overlayStyle ? "" : overlayClassName || "bg-navy/80"}`}
        style={overlayStyle}
        aria-hidden
      />
    </>
  );
}
