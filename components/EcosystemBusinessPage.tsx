import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackgroundPhoto } from "@/components/BackgroundPhoto";
import { photos,businessClosingPhotos } from "@/components/photos";
import { practices,type PracticeId,type Block } from "@/lib/ecosystem-content";
import { EditorialPracticeHome,EditorialDetail } from "@/components/EditorialPractice";
const brands:Record<PracticeId,number>={e3:1,capital:2,lfa:3};
const W="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16";
export function practiceMetadata(id:PracticeId,slug?:string):Metadata {
 const p=practices[id],s=slug?p.sections.find(b=>b.id===slug):undefined;
 if(slug&&!s)return {title:"Page not found",robots:{index:false,follow:false}};
 const title=s?s.title+" | "+p.name:p.name+" | "+p.headline.replace(/\.$/,"");
 const description=s?s.intro:p.lead;
 return {title:{absolute:title},description,alternates:{canonical:p.canonical+(slug||"")},openGraph:{title,description,url:p.canonical+(slug||""),siteName:p.name},robots:{index:false,follow:false}};
}
function Related({id,slug}:{id:PracticeId;slug:string}){const p=practices[id];return <aside className={W+" border-t border-[#d5dde5] py-9"}><div className="flex flex-wrap items-baseline justify-between gap-4"><h2 className="text-lg font-medium">Explore {p.name}</h2>{id!=="capital"&&<Link href="/contact" className="text-sm font-medium underline underline-offset-4">{p.cta} ↗</Link>}</div><nav aria-label="Related pages" className="mt-5 flex flex-wrap gap-x-7 gap-y-3">{p.sections.filter(b=>b.id!==slug).map(b=><Link key={b.id} href={p.href+"/"+b.id} className="text-sm text-[#526478] hover:text-[#10243a] hover:underline">{b.title} ↗</Link>)}</nav></aside>}
function DetailHeading({id,block}:{id:PracticeId;block:Block}){
 const p=practices[id],s=block,photo=photos[p.photo];
 const title=<h1 className="max-w-5xl text-[clamp(2.7rem,5.8vw,6rem)] font-normal leading-[1.02] tracking-[-.055em]">{s.title}</h1>;
 const back=<Link href={p.href} className="mb-7 inline-block text-sm font-medium opacity-80 hover:underline">← {p.name}</Link>;
 if(id==="capital")return <section className="border-b border-[#c3d0da]"><div className={W+" grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr_.9fr]"}><div>{back}{title}<p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#526478]">{s.intro}</p></div><div className="relative aspect-[16/10] overflow-hidden bg-[#10243a]"><Image src="/images/lodestone/closing-skyline.jpg" alt="Manhattan architecture" fill sizes="(min-width:1024px) 42vw,100vw" className="object-cover" style={{objectPosition:s.id==="strategies"?"center 35%":"center 65%"}}/></div></div></section>;
 if(id==="e3"&&s.id==="compass")return <section className="bg-[#07192b] text-white"><div className={W+" grid items-end gap-6 pt-14 pb-8 md:pt-20 lg:grid-cols-[1fr_.85fr]"}><div>{back}{title}</div><p className="text-xl leading-relaxed text-[#d5e3ee]">{s.intro}</p></div></section>;
 if(id==="lfa"&&["who-we-serve","family-governance","trust-estate","family-office"].includes(s.id))return <section className="grid bg-[#eef3f7] lg:grid-cols-[1fr_.9fr]"><div className="flex flex-col justify-center px-6 py-14 md:px-12 lg:px-16 lg:py-20"><div>{back}</div>{title}<p className="mt-6 max-w-xl text-lg leading-relaxed text-[#526478]">{s.intro}</p></div><div className="relative min-h-[250px] lg:min-h-full"><BackgroundPhoto src={s.id==="family-office"?businessClosingPhotos.steward.src:photo.src} alt="" overlayStyle={{backgroundColor:"rgba(7,25,43,.08)"}}/></div></section>;
 if(id==="e3"&&["network","membership","institutional-partnerships"].includes(s.id))return <section className="relative isolate overflow-hidden bg-[#07192b] text-white"><BackgroundPhoto src={s.id==="network"?photo.src:businessClosingPhotos.scale.src} alt="" overlayStyle={{backgroundImage:"linear-gradient(90deg,rgba(7,25,43,.94),rgba(7,25,43,.45))"}}/><div className={W+" relative z-10 py-16 md:py-24"}>{back}{title}<p className="mt-6 max-w-3xl text-xl leading-relaxed text-[#d5e3ee]">{s.intro}</p></div></section>;
 return <section className="border-b border-[#d5dde5]"><div className={W+" py-12 md:py-16"}>{back}<div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end">{title}<p className="max-w-2xl text-xl leading-relaxed text-[#526478]">{s.intro}</p></div></div></section>;
}
export function EcosystemBusinessPage({id}:{id:PracticeId}){
 return <div className="bg-white text-[#10243a] font-sans"><Header fixed brand={brands[id]}/><main id="main" className="pt-[4.25rem]"><EditorialPracticeHome id={id}/></main><Footer ecosystem brand={id}/></div>
}
export function EcosystemDetailPage({id,slug}:{id:PracticeId;slug:string}){
 const p=practices[id],s=p.sections.find(b=>b.id===slug);if(!s)notFound();
 return <div className="bg-white text-[#10243a] font-sans"><Header fixed brand={brands[id]}/><main id="main" className="pt-[4.25rem]"><DetailHeading id={id} block={s}/><section className={id==="e3"&&slug==="compass"?"bg-[#07192b] text-white":"bg-white"}><div className={W+" py-12 md:py-16"}><EditorialDetail id={id} block={s}/></div></section><Related id={id} slug={slug}/></main><Footer ecosystem brand={id}/></div>
}
