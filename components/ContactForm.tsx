"use client";
import { useId, useRef, useState } from "react";
import { CONTACT } from "@/lib/content";
const topics = [{"id":"global","company":"Lodestone Global","label":"Building or improving my board"},{"id":"e3","company":"E3 Scale Network","label":"Scaling my business and increasing enterprise value"},{"id":"capital","company":"Lodestone Capital","label":"An investment or acquisition opportunity"},{"id":"lfa","company":"Lodestone Family Advisors","label":"Establishing or improving my family office"},{"id":"other","company":"Lodestone ecosystem","label":"Exploring the Lodestone ecosystem"}] as const;
const sharedEmail = CONTACT.email;
const destinations: Record<string, string | undefined> = {
 global: process.env.NEXT_PUBLIC_CONTACT_GLOBAL_EMAIL,
 e3: process.env.NEXT_PUBLIC_CONTACT_E3_EMAIL,
 capital: process.env.NEXT_PUBLIC_CONTACT_CAPITAL_EMAIL,
 lfa: process.env.NEXT_PUBLIC_CONTACT_LFA_EMAIL,
 other: process.env.NEXT_PUBLIC_CONTACT_ECOSYSTEM_EMAIL,
};
type Draft = { to:string; subject:string; body:string; href:string };
const inputClass="block min-h-12 w-full border border-[#b9c7d3] bg-white px-3 py-3 text-base text-[#10243a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#10243a]";
export function ContactForm(){
 const id=useId(), formRef=useRef<HTMLFormElement>(null), statusRef=useRef<HTMLDivElement>(null);
 const [topic,setTopic]=useState("");
 const [draft,setDraft]=useState<Draft|null>(null);
 const [copied,setCopied]=useState(false);
 const [error,setError]=useState("");
 const selection=topics.find(t=>t.id===topic);
 const recipient=selection?(destinations[selection.id]||sharedEmail):sharedEmail;
 const shared=!selection||!destinations[selection.id];
 function submit(event:React.FormEvent<HTMLFormElement>){
  event.preventDefault();setError("");setCopied(false);
  const data=new FormData(event.currentTarget);const read=(name:string)=>String(data.get(name)||"").trim();
  if(read("company_website"))return;
  const first=read("firstName"),last=read("lastName"),email=read("email"),company=read("organization"),message=read("message");
  if(!selection||!first||!last||!email||!event.currentTarget.checkValidity()){setError("Please complete the required fields.");event.currentTarget.reportValidity();return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setError("Please enter a valid email address.");return;}
  const subject="Website inquiry — "+selection.company;
  const body=["Business: "+selection.company,"Topic: "+selection.label,"Source website: Lodestone Global","Name: "+first+" "+last,"Email: "+email,company?"Company or family office: "+company:"","",message].filter(Boolean).join("\n");
  const href="mailto:"+recipient+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
  setDraft({to:recipient,subject,body,href});
  requestAnimationFrame(()=>statusRef.current?.focus());
 }
 async function copy(){if(!draft)return;try{await navigator.clipboard.writeText("To: "+draft.to+"\nSubject: "+draft.subject+"\n\n"+draft.body);setCopied(true);}catch{setError("Copy is unavailable. You can select and copy the draft manually.");}}
 return <div className="text-[#10243a]">
 <form ref={formRef} onSubmit={submit} className="grid gap-6">
 <fieldset className="min-w-0"><legend className="mb-4 text-xl font-semibold">How can we help?</legend><div className="grid gap-2">{topics.map(t=><label key={t.id} className={`flex cursor-pointer items-start gap-3 border p-4 transition-colors ${topic===t.id?"border-[#10243a] bg-[#edf3f8]":"border-[#cbd5df] bg-white hover:bg-[#f4f7fa]"}`}><input type="radio" name="topic" value={t.id} checked={topic===t.id} onChange={()=>{setTopic(t.id);setDraft(null);}} required className="mt-1 h-4 w-4 shrink-0 accent-[#10243a]"/><span><span className="block font-medium">{t.label}</span><span className="mt-1 block text-sm text-[#526478]">{t.company}</span></span></label>)}</div></fieldset>
 <div className="grid gap-4 sm:grid-cols-2">{[["firstName","First name","given-name"],["lastName","Last name","family-name"]].map(([name,label,auto])=><label key={name} className="grid gap-2 text-sm font-medium" htmlFor={id+name}>{label}<input id={id+name} name={name} autoComplete={auto} required maxLength={80} className={inputClass}/></label>)}</div>
 <label htmlFor={id+"email"} className="grid gap-2 text-sm font-medium">Email<input id={id+"email"} name="email" type="email" autoComplete="email" required maxLength={254} className={inputClass}/></label>
 <label htmlFor={id+"organization"} className="grid gap-2 text-sm font-medium">Company or family office (optional)<input id={id+"organization"} name="organization" autoComplete="organization" maxLength={160} className={inputClass}/></label>
 <label htmlFor={id+"message"} className="grid gap-2 text-sm font-medium">How can we help? (optional)<textarea id={id+"message"} name="message" rows={4} maxLength={1200} className={inputClass} placeholder="A short note about what you are looking for."/></label>
 <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor={id+"trap"}>Website</label><input id={id+"trap"} name="company_website" tabIndex={-1} autoComplete="off"/></div>
 <p className="text-sm leading-relaxed text-[#526478]">Please do not include account details, financial documents, tax records, or other sensitive information. </p>
 {selection&&<p className="border-l-2 border-[#10243a] pl-3 text-sm" aria-live="polite">Your inquiry is addressed to <strong>{selection.company}</strong>. {shared?"A draft will be addressed to the shared Lodestone introduction mailbox ("+recipient+").":"A draft will be addressed to "+recipient+"."}</p>}
 {error&&<p role="alert" className="text-sm text-red-800">{error}</p>}
 <button type="submit" className="min-h-12 bg-[#10243a] px-6 py-3 text-base font-semibold text-white hover:bg-[#26465f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Prepare my introduction</button>
 <p className="text-xs text-[#526478]">Nothing is sent automatically. Review the draft before opening it in your email app.</p>
 </form>
 {draft&&<div ref={statusRef} tabIndex={-1} role="status" className="mt-8 border border-[#b9c7d3] bg-[#edf3f8] p-5"><h2 className="text-xl font-semibold">Your introduction is ready</h2><p className="mt-2 text-sm">To: {draft.to}</p><p className="mt-2 text-sm">Subject: {draft.subject}</p><pre className="mt-4 whitespace-pre-wrap break-words font-sans text-sm">{draft.body}</pre><div className="mt-5 flex flex-wrap gap-4"><a href={draft.href} className="inline-flex min-h-11 items-center bg-[#10243a] px-4 text-sm font-medium text-white">Open email draft</a><button type="button" onClick={copy} className="min-h-11 border border-[#10243a] px-4 text-sm font-medium">{copied?"Copied":"Copy message"}</button></div><p className="mt-3 text-xs">This inquiry has not been sent.</p></div>}
 </div>;
}
