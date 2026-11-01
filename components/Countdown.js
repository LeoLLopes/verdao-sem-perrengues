"use client";
import{useEffect,useState}from"react";import{FINAL}from"../lib/plan";
export default function Countdown(){const[d,setD]=useState(null);
useEffect(()=>setD(Math.ceil((FINAL-new Date())/864e5)),[]);
if(d!==null&&d<0)return <p className="text-2xl font-bold">A final já aconteceu</p>;
return(<div className="flex items-end gap-3"><span className="sr-only">{d===null?"":d===0?"A final é hoje":`Faltam ${d} dias para a final`}</span>
<span aria-hidden className="text-8xl font-black leading-none tabular-nums text-ouro">{d===null?"··":d}</span>
<span aria-hidden className="pb-2 text-xl font-semibold leading-tight">{d===0?<>A final<br/>é hoje</>:<>dias para<br/>a final</>}</span></div>)}
