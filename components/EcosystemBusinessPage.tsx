import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackgroundPhoto } from "@/components/BackgroundPhoto";
import { photos } from "@/components/photos";
import { practices,type PracticeId } from "@/lib/ecosystem-content";
import { EditorialPracticeHome,EditorialDetail } from "@/components/EditorialPractice";

const brands:Record<PracticeId,number>={e3:1,capital:2,lfa:3};
const wrap="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16";
const heading="text-[clamp(2rem,4vw,4rem)] leading-[1.08] tracking-[-.045em] font-normal";
const cta="inline-flex min-h-12 w-fit items-center gap-5 bg-[#10243a] px-6 py-3 text-white font-medium hover:bg-[#234663]";
export function practiceMetadata(id:PracticeId,slug?:string):Metadata{
 const p=practices[id],s=slug?p.sections.find(b=>b.id===slug):undefined;
 if(slug&&!s)return {title:"Page not found",robots:{index:false,follow:false}};
 const title=s?s.title+" | "+p.name:p.name+" | "+p.headline.replace(/\.$/,"");
 const description=s?s.intro:p.lead;
 return {title:{absolute:title},description,alternates:{canonical:p.canonical+(slug||"")},openGraph:{title,description,url:p.canonical+(slug||""),siteName:p.name},robots:{index:false,follow:false}};
}
function PageLinks({id,exclude}:{id:PracticeId;exclude?:string}){const p=practices[id];return <nav aria-label={p.name+" services"} className="grid gap-x-9 sm:grid-cols-2 lg:grid-cols-3">{p.sections.filter(s=>s.id!==exclude).map(s=><Link key={s.id} href={p.href+"/"+s.id} className="flex items-center justify-between gap-3 border-t border-[#b7c6d1] py-5 text-lg font-medium hover:underline">{s.title}<span aria-hidden="true">↗</span></Link>)}</nav>}
function Closing({id}:{id:PracticeId}){const p=practices[id];return <section className="bg-[#07192b] text-white"><div className={wrap+" py-14 md:py-20"}><div className="flex flex-wrap items-center justify-between gap-8"><h2 className={heading+" max-w-3xl"}>{id==="lfa"?"A relationship built around your family.":id==="e3"?"Build a better business, together.":"Lodestone Capital"}</h2><Link href="/contact" className="inline-flex min-h-12 items-center gap-5 bg-white px-6 py-3 font-medium text-[#10243a] hover:bg-[#dce8f2]">{p.cta}<span aria-hidden="true">↗</span></Link></div><p className="mt-10 max-w-5xl text-sm leading-relaxed text-[#b6c7d6]">{p.disclosure}</p></div></section>}
export function EcosystemBusinessPage({id}:{id:PracticeId}){
 return <div className="bg-white text-[#10243a] font-sans"><Header fixed brand={brands[id]}/><main id="main" className="pt-[4.25rem]"><EditorialPracticeHome id={id}/><Closing id={id}/></main><Footer ecosystem brand={id}/></div>
}
export function EcosystemDetailPage({id,slug}:{id:PracticeId;slug:string}){
 const p=practices[id],s=p.sections.find(b=>b.id===slug);if(!s)notFound();
 const photo=photos[p.photo];
 return <div className="bg-white text-[#10243a] font-sans"><Header fixed brand={brands[id]}/><main id="main" className="pt-[4.25rem]">
 <section className="relative isolate overflow-hidden bg-[#07192b] text-white"><BackgroundPhoto src={photo.src} alt={photo.alt} overlayStyle={{backgroundImage:"linear-gradient(90deg, rgba(7,25,43,.97), rgba(7,25,43,.68))"}}/><div className={wrap+" relative z-10 py-16 md:py-24"}><Link href={p.href} className="text-sm text-[#d5e3ee] hover:underline">← {p.name}</Link><h1 className="mt-7 max-w-5xl text-[clamp(2.6rem,5.4vw,5rem)] leading-[1.05] tracking-[-.045em]">{s.title}</h1><p className="mt-6 max-w-4xl text-xl leading-relaxed text-[#e0eaf2]">{s.intro}</p></div></section>
 <section className={wrap+" py-14 md:py-20"}><EditorialDetail id={id} block={s}/>{id!=="capital"&&<Link href="/contact" className={cta+" mt-10"}>{p.cta}<span aria-hidden="true">↗</span></Link>}</section>
 <section className="bg-[#eef3f7]"><div className={wrap+" py-14"}><h2 className="mb-8 text-3xl tracking-tight">Explore {p.name}</h2><PageLinks id={id} exclude={slug}/></div></section>
 <Closing id={id}/></main><Footer ecosystem brand={id}/></div>
}
