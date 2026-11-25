import Stripe from "stripe";
import { NextResponse } from "next/server";
import { getEditionBySlug } from "@/lib/reports";
import { createDownloadToken } from "@/lib/downloadToken";
import { sendReportDownload } from "@/lib/email";
export const runtime = "nodejs";

export async function POST(req: Request) {
  const key=process.env.STRIPE_SECRET_KEY, secret=process.env.STRIPE_WEBHOOK_SECRET;
  if(!key || !secret) return NextResponse.json({error:"Webhook not configured."},{status:503});
  const stripe=new Stripe(key);
  let event: Stripe.Event;
  try {event=stripe.webhooks.constructEvent(await req.text(),req.headers.get("stripe-signature")||"",secret);}
  catch{return NextResponse.json({error:"Invalid signature."},{status:400});}
  if(event.type!=="checkout.session.completed" && event.type!=="checkout.session.async_payment_succeeded") return NextResponse.json({received:true});
  const session=event.data.object as Stripe.Checkout.Session;
  if(session.metadata?.store!=="lodestone-research" || session.payment_status!=="paid") return NextResponse.json({received:true});
  const edition=getEditionBySlug(session.metadata?.slug||"");
  const amount=Number(session.metadata?.amountCents);
  if(!edition || !Number.isSafeInteger(amount) || amount<=0 || session.amount_total!==amount || session.currency!=="usd") return NextResponse.json({error:"Purchase validation failed."},{status:400});
  // Test payments must never unlock real proprietary reports.
  if(!event.livemode) return NextResponse.json({received:true,test:true,delivery:"suppressed"});
  if(process.env.VERCEL_ENV!=="production" || process.env.REPORTS_LIVE_CHECKOUT!=="true") return NextResponse.json({error:"Live fulfillment disabled."},{status:503});
  const recipient=session.customer_details?.email||session.customer_email;
  const base=process.env.REPORTS_PUBLIC_ORIGIN;
  if(!recipient || !base) return NextResponse.json({error:"Delivery configuration missing."},{status:503});
  try {
    const current=await stripe.checkout.sessions.retrieve(session.id);
    if(current.metadata?.fulfilled==="true") return NextResponse.json({received:true,delivered:true});
    const token=createDownloadToken(edition.slug,"paid",60*60*24*7,session.created);
    await sendReportDownload(recipient,edition.year,base+"/api/download?token="+encodeURIComponent(token),"report-"+session.id);
    await stripe.checkout.sessions.update(session.id,{metadata:{fulfilled:"true"}});
    return NextResponse.json({received:true,delivered:true});
  } catch {
    // Return non-2xx so Stripe retries instead of silently losing fulfillment.
    return NextResponse.json({error:"Delivery needs retry."},{status:503});
  }
}
