"use client";
import { useEffect, useRef, useState } from "react";

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
    "Little Caesars",
    "https://littlec.com.mx/assets/images/open-graph-little-caesars.jpg"
  ],
  [
    "Indiana Farmers Insurance",
    "https://thorneinsuranceagency.com/wp-content/uploads/indiana-farmers-insurance-logo-268.webp"
  ],
  [
    "Serra Automotive",
    "/images/client-logos/serra.png"
  ],
  [
    "Indium Corporation",
    "/images/client-logos/indium.png"
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
    "/images/client-logos/maxx.png"
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
    "/images/client-logos/symega.png"
  ],
  [
    "Whirlwind Technologies",
    null
  ],
  [
    "MicroTechnologies",
    "/images/client-logos/microtech.png"
  ],
  [
    "Zeman Homes",
    "/images/client-logos/zeman.png"
  ],
  [
    "Advanced Asset Management",
    null
  ],
  [
    "Coastal MD",
    null
  ],
  [
    "Eva Pharma",
    "https://www.egycareers.com/wp-content/uploads/2022/01/eva-pharma.jpg"
  ],
  [
    "Hencorp",
    null
  ],
  [
    "Horatio",
    "https://cdn.prod.website-files.com/695e71bdb7b9bb290585a265/6979900783ce3f026e7d179b_Horatio_Preview_Logo.png"
  ],
  [
    "USA Talent Solutions",
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
 <button type="button" onClick={()=>setPaused(x=>!x)} aria-label={paused?"Resume client logo animation":"Pause client logo animation"} className="lg-client-pause absolute bottom-1 right-3 flex h-8 min-w-8 items-center justify-center rounded bg-white/95 px-2 text-xs text-[#526478] shadow-sm opacity-70 hover:opacity-100 focus:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#10243a]"><span aria-hidden="true">{paused?"▶":"Ⅱ"}</span></button>
 </section>;
}

// Client statements transcribed verbatim from the owner's supplied screenshots of the original website.
// Original roles are retained as shown. Google review excerpts are separately identified;
// reviewer identities were not available in the retrieved public listing.
const quotes = [
 {quote:"Lodestone Global has been absolutely instrumental in the process of creating an Advisory Board for my family business.",name:"Jeff Tapick",role:"President & CEO, Martin Preferred Foods",source:"Client testimonial"},
 {quote:"I want to thank you and your team for an incredible job at taking the lead in board design, development & my first few meetings. There was a lot of work to be done and you forced me to think about things that I otherwise would not have. The result has been outstanding!",name:"Donn Lux",role:"President & CEO, Luxco",source:"Client testimonial"},
 {quote:"I've been part of two boards you put together, and in both cases, we had significant impact on the future performance of the company. Your team does a great job!",name:"Ken Munkacy",role:"Senior Managing Director, Kingbird Properties",source:"Client testimonial"},
 {quote:"Thanks for taking the time to help us think through the future of Zeman and how it relates to the board. Your guidance on strategic issues was invaluable.",name:"Dee Pizer",role:"President, Zeman Homes",source:"Client testimonial"},
 {quote:"You helped us clarify some key issues in our family business in a way that allowed all of us to show up at Thanksgiving.",name:"Jim Adler",role:"CEO, Myron",source:"Client testimonial"},
 {quote:"Very holistic, thorough, and personal approach to assembling Advisory Boards.",name:"Google reviewer",role:"Public review excerpt",source:"Google review"},
 {quote:"The most professional Board Advisory institution I have ever interacted with!",name:"Google reviewer",role:"Public review excerpt",source:"Google review"},
];

export function ClientTestimonials(){
 const [active,setActive]=useState(0);
 const [paused,setPaused]=useState(false);
 const [hover,setHover]=useState(false);
 const [focus,setFocus]=useState(false);
 const [reduced,setReduced]=useState(false);
 const [visible,setVisible]=useState(false);
 const sectionRef=useRef<HTMLElement>(null);
 const q=quotes[active];
 useEffect(()=>{
   const media=window.matchMedia("(prefers-reduced-motion: reduce)");
   const sync=()=>setReduced(media.matches);
   sync();media.addEventListener("change",sync);
   return ()=>media.removeEventListener("change",sync);
 },[]);
 useEffect(()=>{
   const section=sectionRef.current;
   if(!section)return;
   if(!("IntersectionObserver" in window)){setVisible(true);return;}
   const observer=new IntersectionObserver(entries=>setVisible(entries[0].isIntersecting),{threshold:.25});
   observer.observe(section);
   return ()=>observer.disconnect();
 },[]);
 useEffect(()=>{
   if(paused||hover||focus||reduced||!visible)return;
   const duration=Math.max(9500,Math.min(24000,2500+q.quote.split(/\s+/).length*350));
   const timer=window.setTimeout(()=>setActive(i=>(i+1)%quotes.length),duration);
   return ()=>window.clearTimeout(timer);
 },[active,paused,hover,focus,reduced,visible,q.quote]);
 const manual=(i:number)=>{setPaused(true);setActive((i+quotes.length)%quotes.length);};
 return <section id="testimonials" ref={sectionRef} aria-label="Client testimonials" aria-roledescription="carousel" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onFocusCapture={()=>setFocus(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))setFocus(false);}} className="relative isolate overflow-hidden bg-gradient-to-br from-[#07192b] via-[#10243a] to-[#25475f] text-white">
 <style>{`@keyframes lg-quote-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}} @media(prefers-reduced-motion:no-preference){.lg-quote-in{animation:lg-quote-in .45s ease-out both}}`}</style>
 <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24 lg:px-16">
 <div className="mb-10 flex flex-wrap items-center justify-between gap-4"><p className="text-base text-[#c1cfdd]">In our clients' words</p><a href="https://www.google.com/maps/search/?api=1&query=Lodestone%20Global&query_place_id=ChIJo9roPpKZw4kRfo36vpyxb9s" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 flex-wrap items-center gap-2 text-sm text-white hover:underline"><span aria-hidden="true" className="tracking-[.16em]">★★★★★</span><span>5.0 · 7 Google reviews</span><span aria-hidden="true">↗</span></a></div>
 <div className="grid items-start gap-5 lg:grid-cols-[.18fr_1fr] lg:gap-12"><span aria-hidden="true" className="hidden select-none text-[clamp(7rem,14vw,13rem)] leading-[.85] text-[#8facbf]/35 lg:block">“</span>
 <div className="grid min-h-[330px] md:min-h-[330px] lg:min-h-[365px]">
 {quotes.map((item,i)=><figure key={i} aria-hidden={i!==active} className={`col-start-1 row-start-1 flex flex-col justify-center ${i===active?"lg-quote-in":"invisible pointer-events-none"}`}>
 <blockquote className="max-w-5xl text-[clamp(1.65rem,3vw,3rem)] font-normal leading-[1.25] tracking-[-.035em]">“{item.quote}”</blockquote>
 <figcaption className="mt-8"><p className="text-lg font-medium">{item.name}</p><p className="mt-1 text-base leading-relaxed text-[#c1cfdd]">{item.role}</p><p className="mt-2 text-xs text-[#b7cadb]">{item.source==="Client testimonial"?"Title at time of testimonial":item.source}</p></figcaption>
 </figure>)}
 </div></div>
 <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-6">
 <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Choose a testimonial">{quotes.map((item,i)=><button key={i} type="button" aria-label={"Show testimonial "+(i+1)+" by "+item.name} aria-pressed={i===active} onClick={()=>manual(i)} className="grid h-11 w-11 place-items-center rounded-full hover:bg-white/10"><span className={`block h-2.5 w-2.5 rounded-full ${i===active?"bg-white":"bg-[#8299ad]"}`}/></button>)}</div>
 <div className="flex items-center gap-2"><span className="mr-2 text-sm tabular-nums text-[#b7cadb]">{active+1} / {quotes.length}</span>{!reduced&&<button type="button" onClick={()=>setPaused(p=>!p)} aria-label={paused?"Resume testimonials":"Pause testimonials"} className="grid h-11 w-11 place-items-center border border-white/30 text-lg hover:bg-white/10">{paused?"▶":"Ⅱ"}</button>}<button type="button" onClick={()=>manual(active-1)} aria-label="Previous testimonial" className="grid h-11 w-11 place-items-center border border-white/30 text-xl hover:bg-white/10">←</button><button type="button" onClick={()=>manual(active+1)} aria-label="Next testimonial" className="grid h-11 w-11 place-items-center border border-white/30 text-xl hover:bg-white/10">→</button></div>
 </div>
 </div></section>;
}
