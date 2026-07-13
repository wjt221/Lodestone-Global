import Image from "next/image";

/**
 * Wrapper for real editorial photography (Unsplash or firm-supplied).
 * Once a real `src` is available, drop it in here — sizing, alt text, and
 * responsive behavior are already wired up via next/image.
 */
export function EditorialImage({
  src,
  alt,
  caption,
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
  overlay = false,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  overlay?: boolean;
  className?: string;
}) {
  return (
    <figure className={`relative overflow-hidden border border-charcoal/15 ${aspect} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      {overlay && <div className="absolute inset-0 bg-navy/45" aria-hidden />}
      {caption && (
        <figcaption className="absolute bottom-0 left-0 right-0 bg-navy/80 px-3 py-2 font-sans text-[0.68rem] uppercase tracking-[0.06em] text-ivory/80">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
