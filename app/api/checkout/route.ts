import Stripe from "stripe";
import { NextResponse } from "next/server";
import { getEditionBySlug } from "@/lib/reports";
import { SITE_URL } from "@/lib/site";

export const runtime = "nodejs";

/**
 * Creates a Stripe Checkout Session for a report edition and returns its URL.
 * Uses inline price_data so it works in whichever mode (test/live) the secret
 * key belongs to. Delivery happens in the webhook after payment.
 */
export async function POST(req: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return NextResponse.json({ error: "Checkout is not configured." }, { status: 503 });
  }

  let slug: string | undefined;
  try {
    ({ slug } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const edition = slug ? getEditionBySlug(slug) : undefined;
  if (!edition) {
    return NextResponse.json({ error: "Unknown report." }, { status: 404 });
  }

  const stripe = new Stripe(key);
  const base = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: edition.amountCents,
            product_data: {
              name: `${edition.year} Private Company Board Compensation Survey`,
            },
          },
        },
      ],
      customer_creation: "always",
      success_url: `${base}/research?purchase=success`,
      cancel_url: `${base}/research?purchase=cancelled`,
      metadata: { slug: edition.slug },
    });
    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: "Could not start checkout." }, { status: 500 });
  }
}
