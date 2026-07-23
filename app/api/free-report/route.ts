import { NextResponse } from "next/server";
import { getEditionBySlug } from "@/lib/reports";
import { createDownloadToken } from "@/lib/downloadToken";
import { sendFreeReport, notifyInbox } from "@/lib/email";
import { SITE_URL } from "@/lib/site";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Gated free-summary flow: visitor gives name + email, no payment, and
 * receives a signed, expiring link to the free summary PDF. Requires
 * RESEND_API_KEY and DOWNLOAD_SIGNING_SECRET; the summary file itself must
 * exist at the edition's freeFileKey in Vercel Blob.
 */
export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY || !process.env.DOWNLOAD_SIGNING_SECRET) {
    return NextResponse.json({ error: "The free summary is not available yet." }, { status: 503 });
  }

  let body: { slug?: string; name?: string; email?: string; company_website?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill every field, real visitors never see this one.
  if (body.company_website) {
    return NextResponse.json({ ok: true });
  }

  const slug = body.slug;
  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();

  const edition = slug ? getEditionBySlug(slug) : undefined;
  if (!edition) {
    return NextResponse.json({ error: "Unknown report." }, { status: 404 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const base = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL;
  const token = createDownloadToken(edition.slug, "free");
  const url = `${base}/api/download?token=${encodeURIComponent(token)}`;

  try {
    await sendFreeReport(email, name, url);
  } catch {
    return NextResponse.json({ error: "Could not send the summary. Please try again." }, { status: 500 });
  }

  try {
    await notifyInbox("Free report summary requested", [
      `Edition: ${edition.year}`,
      `Name: ${name || "(not given)"}`,
      `Email: ${email}`,
    ]);
  } catch {
    /* lead notification is best-effort; delivery to the requester already succeeded */
  }

  return NextResponse.json({ ok: true });
}
