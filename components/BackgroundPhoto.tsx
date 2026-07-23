import Image from "next/image";
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
  overlayClassName = "bg-navy/80",
  priority = false,
  sizes = "100vw",
  imageClassName = "",
}: {
  src: string;
  alt: string;
  overlayClassName?: string;
  priority?: boolean;
  sizes?: string;
  imageClassName?: string;
}) {
  const available = isImageAvailable(src);

  return (
    <>
      {/* Solid base: guarantees a dark, legible field regardless of image state. */}
      <div className="absolute inset-0 bg-navy" aria-hidden />
      {available && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
        />
      )}
      <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden />
    </>
  );
}
