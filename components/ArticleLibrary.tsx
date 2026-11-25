"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";

function Card({a,featured=false}:{a:ArticleMeta;featured?:boolean}){
 return <Link href={"/insights/"+a.slug} className={`group flex flex-col gap-4 ${featured?"md:col-span-2":""}`}>
 <div className={`overflow-hidden bg-[#e8eff5] ${featured?"aspect-[16/8]":"aspect-[16/10]"}`}>{a.image?<img src={a.image.src} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 motion-safe:group-hover:scale-[1.035]" />:<div className="flex h-full items-end bg-gradient-to-br from-[#07192b] to-[#315570] p-6 text-2xl font-normal text-white">Lodestone Insights</div>}</div>
 <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#526478]"><span>{a.category}</span><time dateTime={a.date}>{new Date(a.date+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"})}</time><span>{a.archiveEntry?"From the archive":a.minutesToRead+" min read"}</span></div>
 <h2 className={`font-normal leading-tight tracking-[-.035em] group-hover:underline ${featured?"text-3xl md:text-4xl":"text-2xl"}`}>{a.title}</h2>
 <p className="line-clamp-3 text-base leading-relaxed text-[#526478]">{a.summary}</p>
 <span className="mt-auto text-base font-medium">Read article ↗</span>
 </Link>;
}
export function ArticleLibrary({articles}:{articles:ArticleMeta[]}){
 const [query,setQuery]=useState("");const [category,setCategory]=useState("All");const [order,setOrder]=useState("newest");
 const categories=["All",...Array.from(new Set(articles.map(a=>a.category))).sort()];
 const shown=useMemo(()=>articles.filter(a=>(category==="All"||a.category===category)&&[a.title,a.summary,a.category,...(a.hashtags||[])].join(" ").toLowerCase().includes(query.trim().toLowerCase())).sort((a,b)=>order==="oldest"?a.date.localeCompare(b.date):b.date.localeCompare(a.date)),[articles,query,category,order]);
 return <section id="articles" className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 md:py-20 lg:px-16">
 <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d5dde5] pb-6"><label className="flex w-full max-w-md flex-col gap-2 text-sm font-medium">Search insights<input value={query} onChange={e=>setQuery(e.target.value)} type="search" placeholder="Search by topic or title" className="min-h-[48px] border border-[#b9c9d8] px-4 text-base font-normal outline-offset-2"/></label><label className="flex flex-col gap-2 text-sm font-medium">Sort by<select value={order} onChange={e=>setOrder(e.target.value)} className="min-h-[48px] border border-[#b9c9d8] bg-white px-4 text-base font-normal"><option value="newest">Newest first</option><option value="oldest">Oldest first</option></select></label></div>
 <nav aria-label="Article categories" className="mt-5 flex flex-wrap gap-2">{categories.map(c=><button key={c} type="button" onClick={()=>setCategory(c)} aria-pressed={c===category} className={`min-h-[44px] border px-4 py-2 text-sm font-medium transition-colors ${category===c?"border-[#10243a] bg-[#10243a] text-white":"border-[#d5dde5] hover:bg-[#e8eff5]"}`}>{c}</button>)}</nav>
 <p aria-live="polite" className="mb-8 mt-6 text-sm text-[#526478]">{shown.length} articles</p>
 {shown.length?<div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{shown.map((a,i)=><Card key={a.slug} a={a} featured={i===0&&category==="All"&&!query.trim()&&order==="newest"}/>)}</div>:<p className="py-16 text-lg text-[#526478]">No matching articles. Try another search or category.</p>}
 </section>;
}
