"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sharedNavigation as groups, practices } from "@/lib/ecosystem-content";
const globalLogo = {name:"Lodestone Global",src:"/logo/lodestone-global-horizontal-white.png",width:320,height:107,white:true};
const brandLogos = { e3:{name:practices.e3.name,...practices.e3.logo,white:false}, capital:{name:practices.capital.name,...practices.capital.logo,white:false}, lfa:{name:practices.lfa.name,...practices.lfa.logo,white:false}};
export function Header({fixed=false}:{fixed?:boolean}={}){
 const pathname=usePathname();
 const [mobile,setMobile]=useState(false);
 const [logo,setLogo]=useState(globalLogo);
 useEffect(()=>{const h=window.location.hostname.toLowerCase();setLogo(h==="e3scale.com"||h==="www.e3scale.com"?brandLogos.e3:h==="capital.lodestoneglobal.com"?brandLogos.capital:h==="lodestonefamilyadvisors.com"||h==="www.lodestonefamilyadvisors.com"?brandLogos.lfa:globalLogo);},[]);
 const [active,setActive]=useState<number|null>(null);
 const root=useRef<HTMLElement>(null);
 const close=()=>{setActive(null);setMobile(false);};
 useEffect(()=>{setActive(null);setMobile(false);},[pathname]);
 useEffect(()=>{const outside=(event:MouseEvent)=>{if(!root.current?.contains(event.target as Node)){setActive(null);setMobile(false);}}; const key=(event:KeyboardEvent)=>{if(event.key==="Escape"){setActive(null);setMobile(false);}};document.addEventListener("pointerdown",outside);document.addEventListener("keydown",key);return()=>{document.removeEventListener("pointerdown",outside);document.removeEventListener("keydown",key);};},[]);
 return <header ref={root} className={`${!fixed&&(pathname==="/"||pathname==="/lodestone-global")?"relative":"fixed inset-x-0 top-0"} z-50 border-b border-white/10 bg-[#07192b] text-white`}>
 <div className="mx-auto flex h-[4.25rem] max-w-[1600px] items-center justify-between gap-4 px-5 md:px-10">
 <Link href="/" aria-label={logo.name+" home"} onClick={close} className="shrink-0"><Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height} priority className={"h-10 w-auto max-w-[180px] object-contain "+(logo.white?"":"brightness-0 invert")}/></Link>
 <nav aria-label="Primary" className="hidden items-center gap-5 text-sm xl:flex 2xl:gap-7">
 {groups.map(([name,links],i)=><div key={name} className="relative" onMouseEnter={()=>setActive(i)} onMouseLeave={()=>setActive(null)}><button type="button" aria-expanded={active===i} aria-controls={"company-menu-"+i} onClick={()=>setActive(i)} className="flex min-h-11 items-center gap-1 whitespace-nowrap font-medium">{name}<span aria-hidden="true">⌄</span></button>
 <div id={"company-menu-"+i} hidden={active!==i} className="absolute right-0 top-full min-w-[235px] border border-slate-200 bg-white p-2 text-[#10243a] shadow-lg">{links.map(([label,href])=><Link href={href} key={label} onClick={close} className="block px-3 py-2.5 hover:bg-slate-100 focus-visible:bg-slate-100">{label}</Link>)}</div></div>)}
 <Link href="/contact" onClick={close} className="font-medium">Contact</Link></nav>
 <button type="button" aria-expanded={mobile} aria-controls="mobile-company-menu" onClick={()=>{setMobile(!mobile);setActive(null);}} className="min-h-11 px-2 xl:hidden">{mobile?"Close":"Menu"} <span aria-hidden="true">{mobile?"−":"+"}</span></button>
 </div>
 {mobile&&<nav id="mobile-company-menu" aria-label="Mobile" className="absolute inset-x-0 top-full max-h-[80svh] overflow-y-auto border-t border-slate-200 bg-white px-6 py-4 text-[#10243a] shadow-xl xl:hidden">{groups.map(([name,links],i)=><div key={name} className="border-b border-slate-200"><button type="button" aria-expanded={active===i} onClick={()=>setActive(active===i?null:i)} className="flex min-h-12 w-full items-center justify-between font-medium">{name}<span aria-hidden="true">{active===i?"−":"+"}</span></button>{active===i&&<div className="pb-3 pl-4">{links.map(([label,href])=><Link key={label} href={href} onClick={close} className="block py-2.5">{label}</Link>)}</div>}</div>)}<Link href="/contact" onClick={close} className="block py-4 font-medium">Contact</Link></nav>}
 </header>;
}
