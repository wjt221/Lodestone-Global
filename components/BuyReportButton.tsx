/** Wix is the only live store. Keep the prototype from creating Stripe sessions
 * until checkout, prices and fulfillment have been explicitly approved. */
export function BuyReportButton({fallbackUrl,className="btn-primary",label="Purchase"}:{
  slug:string; fallbackUrl:string; className?:string; label?:string;
}) {
  return <a href={fallbackUrl} className={className}>{label} <span aria-hidden="true">↗</span></a>;
}
