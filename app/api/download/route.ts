import { get } from "@vercel/blob";
import { NextResponse } from "next/server";
import { verifyDownloadToken } from "@/lib/downloadToken";
import { getEditionBySlug } from "@/lib/reports";

export const runtime = "nodejs";

/**
 * Streams a report PDF from private Vercel Blob storage, only for a valid,
 * unexpired download token. The file is never publicly addressable.
 */
export async function GET(req: Request) {
  if (!process.env.BLOB_READ_WRITE_TOKEN || !process.env.DOWNLOAD_SIGNING_SECRET) {
    return NextResponse.json({ error: "Downloads are not configured." }, { status: 503 });
  }

  const token = new URL(req.url).searchParams.get("token") ?? "";
  const payload = verifyDownloadToken(token);
  if (!payload) {
    return NextResponse.json({ error: "This download link is invalid or has expired." }, { status: 403 });
  }

  const edition = getEditionBySlug(payload.slug);
  if (!edition) {
    return NextResponse.json({ error: "Report not found." }, { status: 404 });
  }

  const result = await get(edition.fileKey, { access: "private" });
  if (!result || result.statusCode !== 200 || !result.stream) {
    return NextResponse.json({ error: "Report file is unavailable." }, { status: 404 });
  }

  return new Response(result.stream, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${edition.year}-private-company-board-compensation-survey.pdf"`,
      "Cache-Control": "private, no-store",
    },
  });
}
