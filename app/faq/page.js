"use client";
import{useState,useMemo}from"react";import faq from"../../data/faq.json";
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const F=faq.fontes;const CATS=[...new Set(faq.itens.map(i=>i.c))];
function Item({i}){return(<details className="group rounded-2xl bg-white shadow-sm ring-1 ring-linha open:ring-verde/40">
<summary className="flex min-h-[56px] cursor-pointer list-none items-center gap-3 p-4 font-semibold"><span className="flex-1">{i.pop?<span aria-label="Popular" className="mr-1">⭐</span>:null}{i.p}<span className="mt-1 block text-sm font-normal text-stone-600">{i.rc}</span></span><span aria-hidden className="text-2xl text-verde transition group-open:rotate-45">+</span></summary>
<div className="space-y-2 px-4 pb-4 text-stone-700"><p>{i.r}</p>{!i.g&&<p className="rounded-lg bg-ouro/20 p-2 text-sm">⚠️ Valide esta informação na fonte oficial antes de decidir.</p>}<p className="text-sm text-stone-600">Fonte recomendada: {F[i.f]?.url?<a className="underline" href={F[i.f].url}>{F[i.f].nome}</a>:F[i.f]?.nome}</p></div></details>)}
export default function FAQ(){
 const[q,setQ]=useState(""),[cat,setCat]=useState("Todas");
 const lista=useMemo(()=>{const t=norm(q.trim());return faq.itens.filter(i=>(cat==="Todas"||i.c===cat)&&(!t||norm(i.p+" "+i.rc+" "+i.r).includes(t)))},[q,cat]);
 const filtrando=q.trim()!==""||cat!=="Todas",cats=CATS.filter(c=>lista.some(i=>i.c===c));
 return(<><h1 className="h1">Dúvidas frequentes</h1><p className="mt-1 text-stone-600">{faq.itens.length} respostas rápidas. Confirme sempre nas fontes oficiais.</p>
 <label className="mt-4 block"><span className="sr-only">Buscar nas dúvidas</span><input type="search" value={q} onChange={e=>setQ(e.target.value)} placeholder="🔍 Buscar: carro, eSIM, ingresso..." className="campo shadow-sm"/></label>
 <div className="-mx-4 mt-3 flex gap-2 overflow-x-auto px-4 pb-2">{["Todas",...CATS].map(c=>(<button key={c} aria-pressed={cat===c} onClick={()=>setCat(c)} className={"min-h-[40px] shrink-0 rounded-full px-4 text-sm font-semibold ring-1 transition "+(cat===c?"bg-verde text-white ring-verde":"bg-white text-tinta ring-linha")}>{c}</button>))}</div>
 {!filtrando&&<section className="mt-4"><h2 className="font-bold text-verde-escuro">Mais procuradas</h2><div className="mt-2 space-y-2">{faq.itens.filter(i=>i.pop).map(i=><Item key={"p"+i.p} i={i}/>)}</div></section>}
 {filtrando&&<p className="mt-3 text-sm text-stone-600" aria-live="polite">{lista.length} {lista.length===1?"resultado":"resultados"}</p>}
 {lista.length===0&&<p className="card mt-3">Nada encontrado. Tente outra palavra ou escolha outra categoria.</p>}
 {cats.map(c=>(<section key={c} className="mt-6"><h2 className="font-bold text-verde-escuro">{c}</h2><div className="mt-2 space-y-2">{lista.filter(i=>i.c===c).map(i=><Item key={i.p} i={i}/>)}</div></section>))}</>)}
