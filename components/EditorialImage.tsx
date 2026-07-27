import Image from "next/image";
import { isImageAvailable } from "@/lib/localImage";

/**
 * Inline editorial photography with a fixed aspect ratio. If the source can't
 * be resolved (e.g. a remote host blocked in a build sandbox), it degrades to a
 * quiet toned panel rather than a broken image, so the layout still reads.
 */
export function EditorialImage({
  src,
  alt,
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  className = "",
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** CSS object-position, for photos whose focal point isn't centered. */
  objectPosition?: string;
}) {
  const available = isImageAvailable(src);
  return (
    <figure className={`relative overflow-hidden bg-parchment ${aspect} ${className}`}>
      {available ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectPosition }}
          className="object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-navy/10 via-parchment to-stone-light/40"
          aria-hidden
        />
      )}
    </figure>
  );
}
