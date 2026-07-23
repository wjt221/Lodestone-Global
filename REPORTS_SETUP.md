# Reports: commerce & delivery setup

The agreed model for the board-compensation reports on the new site, and exactly
what must be provisioned to take it live. Purchases stay on Wix until this is
configured and tested.

## Three flows

1. **Free version (gated).** Visitor enters name + email, we capture the lead
   (email to Lodestone) and deliver the free PDF (emailed link). Files served
   from private storage. **Built** — `/api/free-report` (see `FreeSampleForm`
   on `/research` and each `/research/<slug>` page); needs `RESEND_API_KEY` and
   `DOWNLOAD_SIGNING_SECRET` to go live, and the free PDF uploaded per edition.
2. **Paid full report.** Stripe Checkout for the edition → on payment, a webhook
   emails the buyer a private, expiring download link, and the PDF is served
   from private storage behind a signed token. Uses the existing Lodestone
   Stripe account.
3. **Custom report.** An intake form captures the company's requirements and
   emails them to Lodestone. Lodestone scopes it, emails a quote, and — once the
   client agrees — sends a custom Stripe invoice manually. No on-site checkout
   for custom.

## Storage

- **Delivery store: Vercel Blob** (private). Report PDFs live here; the site
  streams them only behind a valid signed download token or a completed purchase.
- **Handoff: Google Drive is fine** as the place to drop the PDFs. Share the
  folder and they can be moved into Blob. (Drive is not used as the live backend.)
- Files are referenced by `fileKey` (paid, e.g.
  `reports/2026-private-company-board-compensation-survey.pdf`) and `freeFileKey`
  (free summary, e.g. `reports/2026-private-company-board-compensation-survey-summary.pdf`)
  in `lib/reports.ts`. Both the free and paid PDFs per edition are needed —
  upload each with `scripts/upload-report.mjs`.

## What to provision (env vars in Vercel)

| Variable | For | Who sets it |
|---|---|---|
| `STRIPE_SECRET_KEY` | server-side Checkout sessions | you (Vercel env) |
| `STRIPE_WEBHOOK_SECRET` | verify the fulfillment webhook | you (from the Stripe webhook you create) |
| `RESEND_API_KEY` | delivery + lead + custom-request emails | you |
| `BLOB_READ_WRITE_TOKEN` | private report storage | auto when you enable Vercel Blob |
| `DOWNLOAD_SIGNING_SECRET` | sign/verify download tokens | you (any long random string) |
| `REPORTS_INBOX` | where lead + custom-request emails go | you (e.g. inquire@lodestoneglobal.com) |

All server routes are written to no-op safely (return "not configured") until
these exist, so nothing breaks before setup.

## Still needed from Lodestone

1. **Per-year prices** for the paid full reports (the store and Stripe currently
   disagree — see the reconciliation in chat). Only 2026 ($3,000) is confirmed,
   with a Stripe price created (`price_1TwRGSLmlez7woNa5iTVwpgY`).
2. **The PDF files** — free and paid full versions per edition — dropped in
   Google Drive (or uploaded to Blob).
3. The **env vars** above set in Vercel.
4. A **Stripe webhook** pointed at `/api/stripe/webhook` (endpoint secret →
   `STRIPE_WEBHOOK_SECRET`).

## Go-live sequence

1. Provision env vars + upload PDFs.
2. Confirm per-year prices; the remaining Stripe prices are created.
3. Test the free, paid, and custom flows end to end in Stripe test mode.
4. Flip the research page purchase/download buttons from the Wix store to the
   on-site flows.
5. Report commerce is then fully off Wix.
