import { list } from "@vercel/blob";
import { NextResponse } from "next/server";
import { reportEditions } from "@/lib/reports";

export const runtime = "nodejs";

/**
 * TEMPORARY diagnostic route: confirms which expected report PDFs exist in
 * Vercel Blob. No file contents are exposed, only pathnames/sizes. Remove
 * once upload is verified.
 */
export async function GET() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ error: "Blob is not configured (no BLOB_READ_WRITE_TOKEN)." }, { status: 503 });
  }

  const { blobs } = await list({ prefix: "reports/" });
  const present = new Set(blobs.map((b) => b.pathname));

  const status = reportEditions.map((e) => ({
    year: e.year,
    paid: { key: e.fileKey, present: present.has(e.fileKey) },
    free: { key: e.freeFileKey, present: present.has(e.freeFileKey) },
  }));

  return NextResponse.json({
    totalBlobsFound: blobs.length,
    status,
  });
}
