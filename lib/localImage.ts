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
