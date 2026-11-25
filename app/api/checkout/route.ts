import Stripe from "stripe";
import { head } from "@vercel/blob";
import { NextResponse } from "next/server";
import { getEditionBySlug } from "@/lib/reports";

export const runtime = "nodejs";
export async function POST(req: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  const live = process.env.VERCEL_ENV === "production" && process.env.REPORTS_LIVE_CHECKOUT === "true";
  if (!key || (!live && !key.startsWith("sk_test_")) || (live && !key.startsWith("sk_live_"))) {
    return NextResponse.json({error:"Secure checkout is not configured for this environment."},{status:503});
  }
  let slug: string;
  try { const body=await req.json(); slug=typeof body.slug==="string"?body.slug:""; }
  catch {return NextResponse.json({error:"Invalid request."},{status:400});}
  const edition=getEditionBySlug(slug);
  if(!edition) return NextResponse.json({error:"Unknown report."},{status:404});
  const base=live?process.env.REPORTS_PUBLIC_ORIGIN:process.env.VERCEL_URL?"https://"+process.env.VERCEL_URL:process.env.REPORTS_TEST_ORIGIN;
  if(!base || !/^https:\/\/[^/]+$/.test(base)) return NextResponse.json({error:"Checkout return address is not configured."},{status:503});
  try {
    if(live){
      if(!process.env.STRIPE_WEBHOOK_SECRET || !process.env.RESEND_API_KEY || !process.env.BLOB_READ_WRITE_TOKEN || !process.env.DOWNLOAD_SIGNING_SECRET) throw new Error("Fulfillment configuration missing");
      await head(edition.fileKey);
    }
    const stripe=new Stripe(key);
    const session=await stripe.checkout.sessions.create({
      mode:"payment",payment_method_types:["card"],customer_creation:"always",
      line_items:[{quantity:1,price_data:{currency:"usd",unit_amount:edition.amountCents,product_data:{name:edition.year+" Private Company Board Compensation Survey"}}}],
      success_url:base+"/research?purchase=success&session_id={CHECKOUT_SESSION_ID}",
      cancel_url:base+"/research?purchase=cancelled",
      metadata:{slug:edition.slug,store:"lodestone-research",amountCents:String(edition.amountCents)},
    });
    if(!session.url) throw new Error("No checkout URL");
    return NextResponse.json({url:session.url});
  }catch{return NextResponse.json({error:"Secure checkout is currently unavailable. Please contact Lodestone for assistance."},{status:503});}
}
