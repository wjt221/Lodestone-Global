import { EcosystemDetailPage,practiceMetadata } from "@/components/EcosystemBusinessPage";
import { practices } from "@/lib/ecosystem-content";
export const dynamicParams=false;
export function generateStaticParams(){return practices.capital.sections.map(s=>({section:s.id}));}
export async function generateMetadata({params}:{params:Promise<{section:string}>}){return practiceMetadata("capital",(await params).section);}
export default async function Page({params}:{params:Promise<{section:string}>}){return <EcosystemDetailPage id="capital" slug={(await params).section}/>;}
