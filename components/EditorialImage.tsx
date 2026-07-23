import Image from "next/image";
import { isImageAvailable } from "@/lib/localImage";

/**
 * Wrapper for editorial photography — either a remote (Unsplash) URL or a
 * local file under /public/images/lodestone. If a local file hasn't been
 * supplied yet, renders a labeled placeholder instead of a broken image.
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
  const available = isImageAvailable(src);

  return (
    <figure className={`relative overflow-hidden border border-charcoal/15 ${aspect} ${className}`}>
      {available ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div className="flex h-full w-full items-end bg-stone-light/40 p-3">
          <span className="font-sans text-[0.68rem] uppercase tracking-[0.06em] text-charcoal/40">
            Photography pending — {alt}
          </span>
        </div>
      )}
      {available && overlay && <div className="absolute inset-0 bg-navy/45" aria-hidden />}
      {available && caption && (
        <figcaption className="absolute bottom-0 left-0 right-0 bg-navy/80 px-3 py-2 font-sans text-[0.68rem] uppercase tracking-[0.06em] text-ivory/80">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
