"use client";
import { useState } from "react";

// Client names: live Lodestone homepage. Logo artwork: visually identified marks from company, university, supplier or press sources. Do not substitute client photographs. Preview only; obtain approved artwork, permission, and local copies before production. Null means no verified logo artwork yet.
const clients: [string, string | null][] = [
  [
    "Unilever",
    "https://www.unilever.com/content-images/92ui5egz/production/9e0f37eccb1de8026371739d059bdf8ecd04c3a0-1920x1080.jpg?auto=format&w=600"
  ],
  [
    "Ben & Jerry's",
    "https://imageproxy.wolt.com/assets/69149c082d5740aaaa59a1d9"
  ],
  [
    "Innovative Construction Solutions",
    "https://gemini-images.s3.amazonaws.com/logo/12049689.png"
  ],
  [
    "Aggregate Resource Industries",
    "https://images.squarespace-cdn.com/content/v1/556e478ae4b0efb9f31e762b/1433291103733-HEQS4K65M6WJ9CFPTDNP/just%2BTRiangle%2Bb-w.png"
  ],
  [
    "Site Impact",
    "https://cdn.prod.website-files.com/69de69f9f87b522550dc6def/69df5b7526ef01224738f186_main%20logo.svg"
  ],
  [
    "Parry Labs",
    "https://www.airandspaceforces.com/app/uploads/2023/01/Parry_Labs.png"
  ],
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
    "https://s3.amazonaws.com/stratfs/our-brands/sfs-stratfs-logo-sm.png"
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

function ClientLogo({name,file,duplicate=false}:{name:string;file:string | null;duplicate?:boolean}){
 const [failed,setFailed]=useState(false);
 return <li className="flex h-[104px] w-[180px] shrink-0 items-center justify-center px-6 md:h-[116px] md:w-[215px] md:px-8">
 {failed || !file?<span className="text-center text-base font-medium leading-tight text-[#526478]">{name}</span>:<img src={file} alt={duplicate?"":name} decoding="async" onError={()=>setFailed(true)} className="max-h-[76px] w-full object-contain grayscale transition duration-300 hover:grayscale-0" />}
 </li>;
}
export function ClientLogoBar(){
 const [paused,setPaused]=useState(false);
 return <section aria-label="Selected current and past clients" className="relative w-full border-b border-[#d5dde5] bg-white">
 <style>{`@keyframes lg-client-loop{from{transform:translateX(0)}to{transform:translateX(-50%)}} .lg-client-track{display:flex;width:max-content;animation:lg-client-loop 82s linear infinite;will-change:transform} .lg-client-viewport:hover .lg-client-track,.lg-client-viewport:focus-within .lg-client-track,.lg-client-track[data-paused=true]{animation-play-state:paused} .lg-client-viewport{overflow:hidden;mask-image:linear-gradient(to right,transparent,#000 2.5%,#000 97.5%,transparent)} @media(prefers-reduced-motion:reduce){.lg-client-track{animation:none;will-change:auto;display:block;width:100%}.lg-client-viewport{mask-image:none}.lg-client-original{flex-wrap:wrap;justify-content:center}.lg-client-copy,.lg-client-pause{display:none!important}}`}</style>
 <div className="lg-client-viewport w-full py-5">
 <div className="lg-client-track" data-paused={paused}>
 <ul className="lg-client-original flex shrink-0">{clients.map(([name,file])=><ClientLogo key={name} name={name} file={file}/>)}</ul>
 <ul aria-hidden="true" className="lg-client-copy flex shrink-0">{clients.map(([name,file])=><ClientLogo key={name} name={name} file={file} duplicate/>)}</ul>
 </div></div>
 <button type="button" onClick={()=>setPaused(x=>!x)} aria-label={paused?"Resume client logo animation":"Pause client logo animation"} className="lg-client-pause absolute bottom-1 right-3 flex h-8 min-w-8 items-center justify-center rounded bg-white/95 px-2 text-xs text-[#526478] opacity-0 shadow-sm focus:opacity-100 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#10243a]">{paused?"Play":"Pause"}</button>
 </section>;
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
