"use client";
import { useRef, useState } from "react";

// Source: published client list on https://www.lodestoneglobal.com/.
// Temporary preview assets: migrate the original artwork to owned storage before launch.
const clients = [
["National Society of Leadership and Success","c3325c_216ff80d7b7f49b7b76d00e5063556f2~mv2.png"],
["Pacific American Group","c3325c_8769e52b03374270a015538e4fb60d50~mv2.jpg"],
["Niles Industrial Coatings & Plant Services","c3325c_b5b6cab6e4cb4e14bbfb5ac5b11876e3~mv2.jpg"],
["Whirlwind Technologies","c3325c_f5ea70f9568f46bdb8112c4316a184ae~mv2.png"],
["Symega Food Ingredients","c3325c_24547b6059bd45f0975f0a31bb4ffb04~mv2.png"],
["Strategic Financial Solutions","c3325c_75e888aea4bd454899057cc6ddc93b0e~mv2.png"],
["Martin Preferred Foods","c3325c_3e470d083ef94c47b0e2c0a9adbf83d1~mv2.jpg"],
["Luxco","c3325c_1724144027e44be09b9912e9194c51c2.jpg"],
["Micro-Tech","c3325c_41375d79b602441fa2745c5cf420fa5d.jpg"],
["Morgan Properties","c3325c_110d700a91ea46128b8c4f80a8df2b6a~mv2.jpg"],
["MAXX Properties","c3325c_5eddbd4d84eb48bbbf48b023a63d29df.jpg"],
["Diesco","c3325c_a837aaf60dea42ecab51dd81acd68319.jpg"],
["Woldenberg","c3325c_ee2119626c37483086649984e5ba618c.jpg"],
["AFN","c3325c_8aa4de2492844fc4b41aed0e3d44e716.jpg"],
["Zeman","c3325c_2da52284df8a47c690c501194c6d8690.jpg"],
];

function ClientLogo({name,file}:{name:string;file:string}){
 const [failed,setFailed]=useState(false);
 return <li className="flex h-[86px] w-[170px] shrink-0 snap-start items-center justify-center px-4 sm:w-[195px]">
 {failed?<span className="text-center text-base font-medium leading-tight text-[#526478]">{name}</span>:<img src={"https://static.wixstatic.com/media/"+file} alt={name} loading="lazy" onError={()=>setFailed(true)} className="max-h-[70px] w-full object-contain grayscale transition duration-200 hover:grayscale-0" />}
 </li>;
}

export function ClientLogoBar(){
 const rail=useRef<HTMLUListElement>(null);
 function slide(direction:number){
 const el=rail.current;if(!el)return;
 const end=el.scrollWidth-el.clientWidth;
 const next=el.scrollLeft+direction*Math.max(180,el.clientWidth*.72);
 el.scrollTo({left:next>end+10?0:next<0?end:next,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"});
 }
 return <section aria-label="Selected current and past clients" className="border-b border-[#d5dde5] bg-white">
 <div className="mx-auto max-w-[1440px] px-6 py-8 md:px-12 lg:px-16">
 <div className="mb-3 flex items-center justify-between gap-5"><p className="text-sm font-medium text-[#526478]">Selected current and past clients</p><div className="flex gap-2"><button type="button" aria-label="Previous client logos" onClick={()=>slide(-1)} className="grid h-11 w-11 place-items-center border border-[#d5dde5] text-xl hover:bg-[#e8eff5]">←</button><button type="button" aria-label="Next client logos" onClick={()=>slide(1)} className="grid h-11 w-11 place-items-center border border-[#d5dde5] text-xl hover:bg-[#e8eff5]">→</button></div></div>
 <ul ref={rail} tabIndex={0} aria-label="Scroll through client logos" className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:thin]">{clients.map(([name,file])=><ClientLogo key={name} name={name} file={file}/>)}</ul>
 </div></section>;
}

const quotes=[
 {quote:"Lodestone Global has been absolutely instrumental in the process of creating an Advisory Board for my family business.",name:"Jeff Tapick",role:"President & CEO, Martin Preferred Foods (at time of testimonial)"},
 {quote:"The board has driven strategy, demanded accountability, and mentored management team members as they grew into more complex and demanding roles.",name:"Diesco Group",role:"Published client case study"},
];

export function ClientTestimonials(){
 const [active,setActive]=useState(0);
 const q=quotes[active];
 return <section aria-label="Client perspectives" className="bg-[#07192b] text-white">
 <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 md:px-12 md:py-24 lg:grid-cols-[.35fr_1fr] lg:gap-20 lg:px-16">
 <div className="flex flex-col items-start justify-between gap-8"><p className="text-base text-[#b7cadb]">In our clients' words</p><div className="flex items-center gap-3"><button type="button" aria-label="Previous testimonial" onClick={()=>setActive((active+quotes.length-1)%quotes.length)} className="grid h-12 w-12 place-items-center border border-white/30 text-xl hover:bg-white/10">←</button><button type="button" aria-label="Next testimonial" onClick={()=>setActive((active+1)%quotes.length)} className="grid h-12 w-12 place-items-center border border-white/30 text-xl hover:bg-white/10">→</button><span className="text-sm tabular-nums text-[#b7cadb]">{active+1} / {quotes.length}</span></div></div>
 <figure aria-live="polite" className="min-h-[240px]"><blockquote className="text-[clamp(1.9rem,4vw,4rem)] font-normal leading-[1.18] tracking-[-.045em]">“{q.quote}”</blockquote><figcaption className="mt-8 text-base"><span className="font-medium">{q.name}</span><span className="mt-1 block text-[#b7cadb]">{q.role}</span></figcaption></figure>
 </div></section>;
}
