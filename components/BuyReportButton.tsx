"use client";
import { useState } from "react";

export function BuyReportButton({slug,className="btn-primary",label="Purchase report"}:{
  slug:string; className?:string; label?:string;
}) {
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");
  async function start(){
    setLoading(true);setError("");
    try{
      const res=await fetch("/api/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug})});
      const data=await res.json();
      if(!res.ok || !data.url){setError(data.error || "Checkout is temporarily unavailable. Please try again.");return;}
      window.location.assign(data.url);
    }catch{setError("Checkout is temporarily unavailable. Please try again.");}
    finally{setLoading(false);}
  }
  return <div className="flex max-w-full flex-col items-start gap-2"><button type="button" onClick={start} disabled={loading} className={className+" disabled:opacity-60"}>{loading?"Opening secure checkout…":label} <span aria-hidden="true">↗</span></button>{error && <p role="alert" className="max-w-sm text-sm leading-relaxed text-[#526478]">{error}</p>}</div>;
}
