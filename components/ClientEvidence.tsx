"use client";
import { useRef, useState } from "react";

// Client names: live Lodestone homepage. Logo artwork: visually identified marks from company, university, supplier or press sources. Do not substitute client photographs. Preview only; obtain approved artwork, permission, and local copies before production. Null means no verified logo artwork yet.
const clients: [string, string | null][] = [
  [
    "National Society of Leadership and Success",
    "https://www.wtamu.edu/_files/images/student-life/OSEL/nsls/NSLS_Seal_Color_300dpi.png"
  ],
  [
    "Diesco",
    "https://www.diesco.com/wp-content/uploads/2021/02/Logo-Diesco-34-1.png"
  ],
  [
    "Morgan Properties",
    "https://mms.businesswire.com/media/20210224005622/en/827420/4/morgan_properties_logo.jpg"
  ],
  [
    "Niles Industrial Coatings",
    "https://www.munk-schmitz.de/content/uploads/2025/02/Logo-Niles.jpg"
  ],
  [
    "MAXX Properties",
    "https://mma.prnewswire.com/media/2960949/MAXX_Logo.jpg?p=facebook"
  ],
  [
    "Pacific American Group",
    "https://images.squarespace-cdn.com/content/v1/69fba79b7aff4e54514e2588/9c30014a-208f-4d70-9e3e-a3ee3bdc838d/In%2BJune%2B2026%2C%2BCatherine%2BBreed%2Bwill%2Battempt%2Bthe%2Bfirst-ever%2B900-mile%2Bstage%2Bswim%2Bdown%2Bthe%2BCalifornia%2Bcoast%2Bfrom%2BOregon%2Bto%2BMexico%2Bwhile%2Braising%2Bfunds%2B%28%24500k%2Bgoal%29%2Band%2Bawareness%2Bfor%2Bwomen%2Bin%2Bwater%2Bspor-13.png?format=1500w"
  ],
  [
    "Martin Preferred Foods",
    "https://www.pngkit.com/png/detail/178-1782868_to-search-for-a-product-or-company-please.png"
  ],
  [
    "Luxco",
    "https://cdn.tasteatlas.com/images/productmakers/45693d861448461cbf683bb8b77b7edc.png?m=facebook"
  ],
  [
    "AFN",
    "https://patch.com/img/cdn20/users/22912423/20180730/101103/styles/raw/public/processed_images/afn_logo_color-1532959840-1470.jpg"
  ],
  [
    "Symega Food Ingredients",
    null
  ],
  [
    "Whirlwind Technologies",
    null
  ],
  [
    "Strategic Financial Solutions",
    null
  ],
  [
    "Micro-Tech",
    null
  ],
  [
    "Woldenberg",
    null
  ],
  [
    "Zeman",
    null
  ]
];

function ClientLogo({name,file}:{name:string;file:string | null}){
 const [failed,setFailed]=useState(false);
 return <li className="flex h-[86px] w-[170px] shrink-0 snap-start items-center justify-center px-4 sm:w-[195px]">
 {(failed || !file)?<span className="text-center text-base font-medium leading-tight text-[#526478]">{name}</span>:<img src={file} alt={name} loading="lazy" onError={()=>setFailed(true)} className="max-h-[70px] w-full object-contain grayscale transition duration-200 hover:grayscale-0" />}
 </li>;
}

export function ClientLogoBar(){
 const rail=useRef<HTMLUListElement>(null);
 function slide(direction:number){
 const el=rail.current;if(!el)return;
 const end=el.scrollWidth-el.clientWidth;
 const next=el.scrollLeft+direction*Math.max(180,el.clientWidth*.72);
 el.scrollTo({left:next>end+10?0:next<0?end:next,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});
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
