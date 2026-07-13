import Image from "next/image";
import { hasLocalImage } from "@/lib/localImage";

/**
 * Full-bleed background photo (hero, closing section, entry panels) with a
 * fixed overlay tone. Falls back to a plain navy field with no image if the
 * local file hasn't been supplied yet, so the layout never shows a broken
 * <img> — drop the real file into /public/images/lodestone to activate it.
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
  const available = hasLocalImage(src);

  return (
    <>
      {available ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
        />
      ) : (
        <div className="absolute inset-0 bg-navy" aria-hidden />
      )}
      <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden />
    </>
  );
}
