import fs from "fs";
import path from "path";

/**
 * Server-only check for whether a local /public asset exists on disk.
 * Lets image slots degrade to a labeled placeholder instead of a broken
 * <img> until real photography is dropped into /public/images/lodestone.
 */
export function hasLocalImage(publicPath: string): boolean {
  try {
    const cleaned = publicPath.replace(/^\/+/, "");
    return fs.existsSync(path.join(process.cwd(), "public", cleaned));
  } catch {
    return false;
  }
}

/**
 * Whether an image src is ready to render: remote URLs (Unsplash) are
 * always considered available since the browser fetches them directly;
 * local /public paths are checked on disk so unsupplied photography
 * degrades to a placeholder instead of a broken image.
 */
export function isImageAvailable(src: string): boolean {
  if (/^https?:\/\//.test(src)) return true;
  return hasLocalImage(src);
}
