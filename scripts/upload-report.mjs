/**
 * Upload a report PDF to private Vercel Blob storage.
 *
 * Usage (run locally, from the repo root):
 *   BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxx \
 *     node scripts/upload-report.mjs ./2026-report.pdf reports/2026-private-company-board-compensation-survey.pdf
 *
 * The second argument must match the edition's `fileKey` in lib/reports.ts
 * (default pattern: reports/<slug>.pdf). Access is private; the file is served
 * only through /api/download behind a signed token.
 */
import { readFile } from "node:fs/promises";
import { put } from "@vercel/blob";

const [localPath, blobKey] = process.argv.slice(2);

if (!localPath || !blobKey) {
  console.error("Usage: node scripts/upload-report.mjs <localPdfPath> <blobKey>");
  process.exit(1);
}
if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error("Set BLOB_READ_WRITE_TOKEN (from the Vercel Blob store).");
  process.exit(1);
}

const data = await readFile(localPath);
const result = await put(blobKey, data, {
  access: "private",
  contentType: "application/pdf",
  addRandomSuffix: false,
});
console.log("Uploaded:", result.pathname);
