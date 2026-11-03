"use client";
import{useState,useMemo}from"react";import faq from"../../data/faq.json";import Fonte from"../../components/Fonte";import EsimAiralo from"../../components/EsimAiralo";import ContaInternacional from"../../components/ContaInternacional";import AbrirPorHash from"../../components/AbrirPorHash";
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const ICON={"Documentação":"📄","Dinheiro e Wise":"💳","Ônibus":"🚌","Internet":"📶","Carro":"🚗","Dia do jogo":"🏟️","Segurança":"🛡️"};
const CATS=Object.keys(ICON);
function Item({i,ancora}){return(<details id={ancora?i.id:undefined} className="group scroll-mt-20 rounded-2xl bg-white shadow-sm ring-1 ring-linha open:ring-verde/40">
<summary className="flex min-h-[56px] cursor-pointer list-none items-center gap-3 p-4 font-semibold"><span className="flex-1">{i.pop?<span aria-label="Mais procurada" className="mr-1">⭐</span>:null}{i.p}<span className="mt-1 block text-sm font-normal text-stone-600">{i.rc}</span></span><span aria-hidden className="text-2xl text-verde transition group-open:rotate-45">+</span></summary>
<div className="space-y-3 px-4 pb-4 text-stone-700"><p>{i.r}</p>
<div><p className="font-semibold">⚠️ Erros comuns</p><ul className="list-disc pl-5">{i.e.map(x=><li key={x}>{x}</li>)}</ul></div>
<p><span className="font-semibold">➡️ Próximo passo:</span> {i.n}</p>
{["wise","cartao-tudo","especie"].includes(i.id)&&<ContaInternacional/>}{["esim-vs-roaming","internet"].includes(i.id)&&<EsimAiralo/>}<Fonte f={i.f} rf={i.rf} st={i.st}/></div></details>)}
export default function FAQ(){
 const[q,setQ]=useState(""),[cat,setCat]=useState("Todas");
 const lista=useMemo(()=>{const t=norm(q.trim());return faq.itens.filter(i=>(cat==="Todas"||i.c===cat)&&(!t||norm(i.p+" "+i.rc+" "+i.r).includes(t)))},[q,cat]);
 const filtrando=q.trim()!==""||cat!=="Todas",cats=CATS.filter(c=>lista.some(i=>i.c===c));
 return(<><AbrirPorHash/><h1 className="h1">Dúvidas frequentes</h1><p className="mt-1 text-stone-600">Respostas diretas para quem vai à final. Cada resposta mostra a fonte consultada.</p>
 <label className="mt-4 block"><span className="sr-only">Buscar nas dúvidas</span><input type="search" value={q} onChange={e=>setQ(e.target.value)} placeholder="🔍 Buscar: RG, Carta Verde, Wise, eSIM..." className="campo shadow-sm"/></label>
 <div className="-mx-4 mt-3 flex gap-2 overflow-x-auto px-4 pb-2">{["Todas",...CATS].map(c=>(<button key={c} aria-pressed={cat===c} onClick={()=>setCat(c)} className={"min-h-[40px] shrink-0 rounded-full px-4 text-sm font-semibold ring-1 transition "+(cat===c?"bg-verde text-white ring-verde":"bg-white text-tinta ring-linha")}>{ICON[c]?ICON[c]+" ":""}{c}</button>))}</div>
 {!filtrando&&<section className="mt-4"><h2 className="font-bold text-verde-escuro">🔥 Mais procuradas</h2><div className="mt-2 space-y-2">{faq.itens.filter(i=>i.pop).map(i=><Item key={"p"+i.id} i={i}/>)}</div></section>}
 {filtrando&&<p className="mt-3 text-sm text-stone-600" aria-live="polite">{lista.length} {lista.length===1?"resultado":"resultados"}</p>}
 {lista.length===0&&<p className="card mt-3">Nada encontrado. Tente outra palavra ou escolha outra categoria.</p>}
 {cats.map(c=>(<section key={c} className="mt-6"><h2 className="font-bold text-verde-escuro">{ICON[c]} {c}</h2><div className="mt-2 space-y-2">{lista.filter(i=>i.c===c).map(i=><Item key={i.id} i={i} ancora/>)}</div></section>))}</>)}
