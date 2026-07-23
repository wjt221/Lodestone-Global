import crypto from "crypto";

/**
 * Signed, expiring download tokens for gated report delivery. HMAC-SHA256 over
 * "<slug>.<exp>" with DOWNLOAD_SIGNING_SECRET. No dependency, server-only.
 */

function b64url(input: Buffer | string): string {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function sign(data: string, secret: string): string {
  return b64url(crypto.createHmac("sha256", secret).update(data).digest());
}

export function createDownloadToken(slug: string, ttlSeconds = 60 * 60 * 24 * 7): string {
  const secret = process.env.DOWNLOAD_SIGNING_SECRET;
  if (!secret) throw new Error("DOWNLOAD_SIGNING_SECRET is not set");
  const exp = Math.floor(Date.now() / 1000) + ttlSeconds;
  const data = `${slug}.${exp}`;
  return `${b64url(data)}.${sign(data, secret)}`;
}

export function verifyDownloadToken(token: string): { slug: string } | null {
  const secret = process.env.DOWNLOAD_SIGNING_SECRET;
  if (!secret || !token) return null;
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [encodedData, providedSig] = parts;
  let data: string;
  try {
    data = Buffer.from(encodedData.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString();
  } catch {
    return null;
  }
  const expectedSig = sign(data, secret);
  const a = Buffer.from(providedSig);
  const b = Buffer.from(expectedSig);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  const [slug, expStr] = data.split(".");
  const exp = Number(expStr);
  if (!slug || !exp || exp < Math.floor(Date.now() / 1000)) return null;
  return { slug };
}
