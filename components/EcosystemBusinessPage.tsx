import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackgroundPhoto } from "@/components/BackgroundPhoto";
import { photos } from "@/components/photos";
import { practices, type PracticeId } from "@/lib/ecosystem-content";
export function practiceMetadata(id:PracticeId):Metadata {
 const p=practices[id];
 return {title:{absolute:p.name+" | "+p.headline.replace(/\.$/,"")},description:p.lead,alternates:{canonical:p.canonical},openGraph:{title:p.name,description:p.lead,url:p.canonical,siteName:p.name},robots:{index:false,follow:false}};
}
export function EcosystemBusinessPage({id}:{id:PracticeId}){
 const p=practices[id],photo=photos[p.photo];
 return <div className="bg-white text-[#10243a] font-sans"><Header fixed/><main id="main" className="pt-[4.25rem]">
 <section className="relative isolate overflow-hidden bg-[#07192b] text-white">
 <BackgroundPhoto src={photo.src} alt={photo.alt} priority overlayStyle={{backgroundImage:"linear-gradient(90deg, rgba(7,25,43,.96) 0%, rgba(7,25,43,.84) 48%, rgba(7,25,43,.36) 100%)"}}/>
 <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1440px] flex-col justify-end px-6 py-16 md:px-12 md:py-24 lg:px-16">
 <Image src={p.logo.src} alt={p.name} width={p.logo.width} height={p.logo.height} className="mb-8 h-auto max-h-[76px] w-auto max-w-[240px] object-contain object-left brightness-0 invert" priority/>
 {id==="e3"&&<span className="mb-3 text-sm font-medium text-[#d5e3ee]">E3 Scale Network</span>}
 <h1 className="max-w-4xl text-[clamp(2.8rem,5.4vw,5.8rem)] font-normal leading-[1.04] tracking-[-.055em]">{p.headline}</h1>
 <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#d5e3ee] sm:text-xl">{p.lead}</p>
 <Link href="/contact" className="mt-8 inline-flex min-h-12 w-fit items-center bg-white px-6 py-3 font-medium text-[#10243a] hover:bg-[#dce8f2]">{p.cta} <span className="ml-4" aria-hidden="true">↗</span></Link>
 </div></section>
 <nav aria-label={p.name+" page sections"} className="border-b border-[#d5dde5] bg-[#f2f6f9]"><div className="mx-auto flex max-w-[1440px] flex-wrap gap-x-7 gap-y-3 px-6 py-5 text-sm md:px-12 lg:px-16">{p.sections.map(s=><a key={s.id} href={"#"+s.id} className="font-medium hover:underline">{s.title}</a>)}</div></nav>
 <section className="mx-auto grid max-w-[1440px] gap-8 px-6 py-16 md:px-12 md:py-20 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-16">
 <h2 className="text-[clamp(2.1rem,4vw,4rem)] font-normal leading-[1.08] tracking-[-.045em]">{p.problemTitle}</h2><p className="max-w-3xl text-xl leading-relaxed text-[#526478]">{p.problem}</p>
 </section>
 {p.sections.map((s,index)=><section key={s.id} id={s.id} className={"scroll-mt-24 "+(index%2===0?"bg-[#eaf1f5]":"bg-white")}>
 {(s.id==="operating-partners"||s.id==="family-office")&&<span id="capabilities" className="block scroll-mt-24"/>}{(s.id==="approach"||s.id==="how-we-work")&&<span id="engagement" className="block scroll-mt-24"/>}
 <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 md:py-20 lg:px-16">
 <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:gap-20"><h2 className="text-[clamp(2rem,3.8vw,3.8rem)] leading-[1.08] tracking-[-.045em]">{s.title}</h2><p className="max-w-3xl text-lg leading-relaxed text-[#526478]">{s.intro}</p></div>
 <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">{s.items.map(item=><article key={item.title} className="border-t border-[#a9bac8] pt-5"><h3 className="text-2xl font-medium leading-tight tracking-tight">{item.title}</h3><p className="mt-3 max-w-2xl text-base leading-relaxed text-[#526478]">{item.body}</p>{id==="capital"&&s.id==="announcements"&&<Link href="/insights/lodestone-capital-blulabs-investment" className="mt-4 inline-block font-medium underline underline-offset-4">Read the announcement</Link>}</article>)}</div>
 </div></section>)}
 <section className="bg-[#10243a] text-white"><div className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 md:py-20 lg:px-16"><h2 className="max-w-3xl text-[clamp(2rem,4vw,4rem)] leading-tight tracking-tight">{p.cta}.</h2><p className="mt-4 max-w-xl text-lg text-[#d5e3ee]">Tell us about your objectives and the decisions in front of you.</p><Link href="/contact" className="mt-7 inline-flex min-h-12 items-center bg-white px-6 py-3 font-medium text-[#10243a]">Contact <span aria-hidden="true" className="ml-4">↗</span></Link><p className="mt-10 max-w-4xl text-sm leading-relaxed text-[#c1cfdd]">{p.disclosure}</p></div></section>
 <section className="bg-white"><div className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 lg:px-16"><h2 className="text-3xl tracking-tight">The Lodestone ecosystem</h2><div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{[{name:"Lodestone Global",href:"/lodestone-global",logo:{src:"/logo/lodestone-global-horizontal-navy.png",width:1000,height:287}},...Object.values(practices)].map(a=><Link key={a.name} href={a.href} className="flex flex-col gap-4 border-t border-[#a9bac8] pt-5 hover:underline"><Image src={a.logo.src} alt={a.name} width={a.logo.width} height={a.logo.height} className="h-12 w-auto max-w-[200px] object-contain object-left"/><span className="text-base font-medium">{a.name}</span></Link>)}</div></div></section>
 </main><Footer/></div>;
}
