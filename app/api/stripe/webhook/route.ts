import Stripe from "stripe";
import { NextResponse } from "next/server";
import { getEditionBySlug } from "@/lib/reports";
import { createDownloadToken } from "@/lib/downloadToken";
import { sendReportDownload, notifyInbox } from "@/lib/email";
import { SITE_URL } from "@/lib/site";

export const runtime = "nodejs";

/**
 * Stripe fulfillment webhook. On a completed checkout, signs a download token
 * for the purchased edition and emails the buyer a private, expiring link.
 * Requires STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET.
 */
export async function POST(req: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!key || !webhookSecret) {
    return NextResponse.json({ error: "Webhook not configured." }, { status: 503 });
  }

  const stripe = new Stripe(key);
  const body = await req.text();
  const signature = req.headers.get("stripe-signature") ?? "";

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const slug = session.metadata?.slug;
    const email = session.customer_details?.email ?? session.customer_email ?? undefined;
    const edition = slug ? getEditionBySlug(slug) : undefined;

    if (edition && email) {
      const base = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL;
      const token = createDownloadToken(edition.slug);
      const url = `${base}/api/download?token=${encodeURIComponent(token)}`;
      try {
        await sendReportDownload(email, edition.year, url);
      } catch {
        // Surface a fulfillment failure to the team so no purchase is lost.
        try {
          await notifyInbox("Report delivery failed", [
            `A purchase completed but the delivery email failed.`,
            `Edition: ${edition.year}`,
            `Buyer: ${email}`,
          ]);
        } catch {
          /* nothing more we can do here */
        }
        return NextResponse.json({ received: true, delivered: false });
      }
    }
  }

  return NextResponse.json({ received: true });
}
