import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleLibrary } from "@/components/ArticleLibrary";
import { articles } from "@/lib/articles";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
export const metadata:Metadata={title:"Insights | Private Company Board Expertise",description:"Explore Lodestone Global's original articles, research and perspectives on building and strengthening private-company boards.",alternates:{canonical:"/insights"}};
export default function InsightsPage(){return <><Header/><JsonLd data={breadcrumbJsonLd([{name:"Home",path:"/"},{name:"Insights",path:"/insights"}])}/><main id="main" className="bg-white pt-[4.25rem] text-[#10243a]">
<section className="bg-[#07192b] text-white"><div className="mx-auto grid max-w-[1440px] items-end gap-8 px-6 py-16 md:px-12 md:py-24 lg:grid-cols-[1.15fr_.85fr] lg:px-16"><div><h1 className="text-[clamp(3.5rem,7vw,7rem)] font-normal leading-[.98] tracking-[-.06em]">Lodestone Insights</h1></div><div><p className="max-w-xl text-lg leading-relaxed text-[#d2e1ed]">Practical guidance, original research and lessons from building high-performing private-company boards. Explore our library of {articles.length} published articles.</p><Link href="/research" className="mt-7 inline-flex border-b border-white/60 pb-2 text-lg">Explore compensation research ↗</Link></div></div></section>
<ArticleLibrary articles={articles}/>
<section className="bg-[#e8eff5]"><div className="mx-auto flex max-w-[1440px] flex-wrap items-end justify-between gap-8 px-6 py-16 md:px-12 lg:px-16"><div><h2 className="max-w-3xl text-[clamp(2.5rem,4vw,4rem)] leading-tight tracking-[-.04em]">Discuss your board</h2></div><Link href="/contact" className="inline-flex bg-[#10243a] px-7 py-4 text-lg font-medium text-white">Discuss your board ↗</Link></div></section>
</main><Footer/></>;}
