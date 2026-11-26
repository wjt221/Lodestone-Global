import { EcosystemDetailPage,practiceMetadata } from "@/components/EcosystemBusinessPage";
import { practices } from "@/lib/ecosystem-content";
export const dynamicParams=false;
export function generateStaticParams(){return practices.e3.sections.map(s=>({section:s.id}));}
export async function generateMetadata({params}:{params:Promise<{section:string}>}){return practiceMetadata("e3",(await params).section);}
export default async function Page({params}:{params:Promise<{section:string}>}){return <EcosystemDetailPage id="e3" slug={(await params).section}/>;}
