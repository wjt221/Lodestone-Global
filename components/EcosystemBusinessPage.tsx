import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackgroundPhoto } from "@/components/BackgroundPhoto";
import { photos } from "@/components/photos";
import { practices,type PracticeId,type Block } from "@/lib/ecosystem-content";

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
function CompassDiagram(){return <div className="my-10 border border-[#d5dde5] bg-[#f3f6f8] p-6 md:p-10">
 <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{["E3 knowledge","Member context","Meeting intelligence","Operating judgment"].map((t,i)=><div key={t} className="border border-[#bdcbd6] bg-white p-5"><span className="text-sm text-[#61788b]">0{i+1}</span><h3 className="mt-2 text-lg font-medium">{t}</h3></div>)}</div>
 <div aria-hidden="true" className="mx-auto h-8 w-px bg-[#8fa8bc]"/>
 <div className="mx-auto max-w-xl bg-[#10243a] p-7 text-center text-white"><h3 className="text-3xl">Compass</h3><p className="mt-2 text-base text-[#d5e3ee]">AI-driven value creation intelligence</p></div>
 <div aria-hidden="true" className="mx-auto h-8 w-px bg-[#8fa8bc]"/>
 <div className="mx-auto max-w-xl border border-[#bdcbd6] bg-white p-5 text-center"><h3 className="text-xl font-medium">Value Creation Thesis</h3><p className="mt-2 text-[#526478]">Better questions · Focused priorities · Accountability</p></div></div>}
function ApproachSteps({block}:{block:Block}){return <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{block.items.map((item,i)=><li key={item.title} className="border-t border-[#aabcc9] pt-5"><span className="text-3xl text-[#6b879d]">{String(i+1).padStart(2,"0")}</span><h3 className="mt-4 text-2xl font-medium tracking-tight">{item.title}</h3><p className="mt-3 text-base leading-relaxed text-[#526478]">{item.body}</p></li>)}</ol>}
function ContentBlock({id,block}:{id:PracticeId;block:Block}){return <>
 {block.id==="compass"&&<CompassDiagram/>}
 {["approach","how-we-work"].includes(block.id)?<ApproachSteps block={block}/>:<div className={"mt-10 grid gap-x-12 gap-y-8 "+(id==="capital"&&block.id==="announcements"?"":"md:grid-cols-2")}>{block.items.map((item,i)=><article key={item.title} className="border-t border-[#aabcc9] pt-5">
 {id==="capital"&&block.id==="strategies"&&<span className="mb-3 block text-sm text-[#6b879d]">{String(i+1).padStart(2,"0")}</span>}
 <h3 className="text-2xl font-medium leading-tight tracking-tight">{item.title}</h3><p className="mt-3 max-w-3xl text-base leading-relaxed text-[#526478]">{item.body}</p>
 {id==="capital"&&block.id==="announcements"&&<Link href="/insights/lodestone-capital-blulabs-investment" className="mt-5 inline-block font-medium underline underline-offset-4">Read the announcement</Link>}
 </article>)}</div>}
 </>}
function PageLinks({id,exclude}:{id:PracticeId;exclude?:string}){const p=practices[id];return <nav aria-label={p.name+" services"} className="grid gap-x-9 sm:grid-cols-2 lg:grid-cols-3">{p.sections.filter(s=>s.id!==exclude).map(s=><Link key={s.id} href={p.href+"/"+s.id} className="flex items-center justify-between gap-3 border-t border-[#b7c6d1] py-5 text-lg font-medium hover:underline">{s.title}<span aria-hidden="true">↗</span></Link>)}</nav>}
function Closing({id}:{id:PracticeId}){const p=practices[id];return <section className="bg-[#07192b] text-white"><div className={wrap+" py-14 md:py-20"}><div className="flex flex-wrap items-center justify-between gap-8"><h2 className={heading+" max-w-3xl"}>{id==="lfa"?"A relationship built around your family.":id==="e3"?"Build a better business, together.":"Lodestone Capital"}</h2><Link href="/contact" className="inline-flex min-h-12 items-center gap-5 bg-white px-6 py-3 font-medium text-[#10243a] hover:bg-[#dce8f2]">{p.cta}<span aria-hidden="true">↗</span></Link></div><p className="mt-10 max-w-5xl text-sm leading-relaxed text-[#b6c7d6]">{p.disclosure}</p></div></section>}
export function EcosystemBusinessPage({id}:{id:PracticeId}){
 const p=practices[id],photo=photos[p.photo];
 return <div className="bg-white text-[#10243a] font-sans"><Header fixed brand={brands[id]}/><main id="main" className="pt-[4.25rem]">
 <section className="relative isolate overflow-hidden bg-[#07192b] text-white">
 <BackgroundPhoto src={photo.src} alt={photo.alt} priority overlayStyle={{backgroundImage:"linear-gradient(90deg, rgba(7,25,43,.96) 0%, rgba(7,25,43,.8) 48%, rgba(7,25,43,.28) 100%)"}}/>
 <div className={wrap+" relative z-10 flex min-h-[540px] flex-col justify-center py-16 md:py-24"}>
 <Image src={p.logo.src} alt={p.name} width={p.logo.width} height={p.logo.height} className="mb-8 h-auto max-h-[84px] w-auto max-w-[250px] object-contain object-left brightness-0 invert" priority/>
 {id==="lfa"&&<p className="mb-4 text-sm text-[#d5e3ee]">SEC-registered investment adviser</p>}
 <h1 className="max-w-4xl text-[clamp(2.8rem,5.5vw,5.8rem)] font-normal leading-[1.04] tracking-[-.055em]">{p.headline}</h1>
 <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#e0eaf2] sm:text-xl">{p.lead}</p>
 {id!=="capital"&&<Link href="/contact" className="mt-8 inline-flex min-h-12 w-fit items-center gap-5 bg-white px-6 py-3 font-medium text-[#10243a] hover:bg-[#dce8f2]">{p.cta}<span aria-hidden="true">↗</span></Link>}
 </div></section>
 <section className={wrap+" grid gap-8 py-16 md:py-24 lg:grid-cols-[.85fr_1.15fr] lg:gap-20"}><h2 className={heading}>{p.problemTitle}</h2><p className="max-w-3xl text-xl leading-relaxed text-[#526478]">{p.problem}</p></section>
 {id==="e3"&&<section className="bg-[#eef3f7]"><div className={wrap+" py-14 md:py-20"}><div className="grid gap-8 md:grid-cols-3">{[["Faster progress","Experience from people who have navigated the decisions before."],["Lower execution risk","A dedicated Operating Partner and specialist bench to help see around corners."],["Shared upside","Base fees designed to cover costs; economics aligned to value creation."]].map(([t,b])=><article key={t} className="border-t border-[#9fb2c2] pt-5"><h2 className="text-2xl font-medium">{t}</h2><p className="mt-3 text-[#526478] leading-relaxed">{b}</p></article>)}</div></div></section>}
 {id==="lfa"&&<section className="bg-[#eef3f7]"><div className={wrap+" py-14 md:py-20"}><h2 className={heading}>What we want for every family.</h2><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">{[["Freedom","Time for the people and pursuits you love."],["Clarity","A coherent view of your financial life."],["Confidence","Well-informed decisions about what comes next."],["Trust","A team that knows your family and its ambitions."],["Happiness","Enjoy what you have built, on your own terms."]].map(([t,b])=><article key={t} className="border-t border-[#aabcc9] pt-5"><h3 className="text-2xl">{t}</h3><p className="mt-3 text-[#526478]">{b}</p></article>)}</div></div></section>}
 {p.sections.map((s,i)=><section key={s.id} id={s.id} className={"scroll-mt-24 "+(i%2===0?"bg-white":"bg-[#eef3f7]")}><div className={wrap+" py-14 md:py-20"}><div className="grid gap-7 lg:grid-cols-[.8fr_1.2fr] lg:gap-16"><h2 className={heading}>{s.title}</h2><div><p className="max-w-3xl text-lg leading-relaxed text-[#526478]">{s.intro}</p>{id!=="capital"&&<Link className="mt-5 inline-block font-medium underline underline-offset-4" href={p.href+"/"+s.id}>Explore {s.title.toLowerCase()} ↗</Link>}</div></div>{id==="capital"||s.id==="compass"?<ContentBlock id={id} block={s}/>:<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{s.items.slice(0,3).map(item=><div key={item.title} className="border-t border-[#aabcc9] pt-5"><h3 className="text-xl font-medium">{item.title}</h3><p className="mt-2 text-base leading-relaxed text-[#526478]">{item.body}</p></div>)}</div>}{id==="capital"&&<Link className="mt-6 inline-block font-medium underline underline-offset-4" href={p.href+"/"+s.id}>Explore {s.title.toLowerCase()} ↗</Link>}</div></section>)}
 <Closing id={id}/>
 </main><Footer ecosystem/></div>
}
export function EcosystemDetailPage({id,slug}:{id:PracticeId;slug:string}){
 const p=practices[id],s=p.sections.find(b=>b.id===slug);if(!s)notFound();
 const photo=photos[p.photo];
 return <div className="bg-white text-[#10243a] font-sans"><Header fixed brand={brands[id]}/><main id="main" className="pt-[4.25rem]">
 <section className="relative isolate overflow-hidden bg-[#07192b] text-white"><BackgroundPhoto src={photo.src} alt={photo.alt} overlayStyle={{backgroundImage:"linear-gradient(90deg, rgba(7,25,43,.97), rgba(7,25,43,.68))"}}/><div className={wrap+" relative z-10 py-16 md:py-24"}><Link href={p.href} className="text-sm text-[#d5e3ee] hover:underline">← {p.name}</Link><h1 className="mt-7 max-w-5xl text-[clamp(2.6rem,5.4vw,5rem)] leading-[1.05] tracking-[-.045em]">{s.title}</h1><p className="mt-6 max-w-4xl text-xl leading-relaxed text-[#e0eaf2]">{s.intro}</p></div></section>
 <section className={wrap+" py-14 md:py-20"}><ContentBlock id={id} block={s}/>{id!=="capital"&&<Link href="/contact" className={cta+" mt-10"}>{p.cta}<span aria-hidden="true">↗</span></Link>}</section>
 <section className="bg-[#eef3f7]"><div className={wrap+" py-14"}><h2 className="mb-8 text-3xl tracking-tight">Explore {p.name}</h2><PageLinks id={id} exclude={slug}/></div></section>
 <Closing id={id}/></main><Footer ecosystem/></div>
}
