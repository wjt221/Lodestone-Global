import { NextResponse, type NextRequest } from "next/server";
// All domains serve this exact app. Only the root landing page differs.
// No DNS or Vercel domain assignments are made by this change.
const landing: Record<string,string> = {
 "e3scale.com":"/e3-scale-network", "www.e3scale.com":"/e3-scale-network",
 "capital.lodestoneglobal.com":"/lodestone-capital",
 "lodestonefamilyadvisors.com":"/family-advisors", "www.lodestonefamilyadvisors.com":"/family-advisors"
};
export function middleware(request:NextRequest){
 const host=(request.headers.get("host")||request.nextUrl.hostname).toLowerCase().split(":")[0];
 const configured=process.env.NEXT_PUBLIC_LODESTONE_FRONT_DOOR;
 const byBrand:Record<string,string>={e3:"/e3-scale-network",capital:"/lodestone-capital",lfa:"/family-advisors"};
 const target=landing[host]||(configured?byBrand[configured]:undefined);
 if(request.nextUrl.pathname==="/"&&target){const url=request.nextUrl.clone();url.pathname=target;return NextResponse.rewrite(url);}
 return NextResponse.next();
}
export const config={matcher:["/"]};
