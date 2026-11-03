"use client";
import Link from"next/link";import{useState}from"react";import Progress from"../../components/Progress";import CanalWhatsApp from"../../components/CanalWhatsApp";import ContaInternacional from"../../components/ContaInternacional";import ResolverCard from"../../components/ResolverCard";import{PEND}from"../../lib/partners";
import{useLocal}from"../../lib/storage";import{PERFIL_PADRAO,buildPlan,limite,fmt}from"../../lib/plan";
const Sel=({l,n,v,s,o})=>(<label className="block text-sm font-medium">{l}<select className="campo" value={v} onChange={e=>s(n,e.target.value)}>{o.map(([a,b])=><option key={a} value={a}>{b}</option>)}</select></label>);
export default function Planejador(){
 const[perfil,setPerfil]=useLocal("verdao:perfil",null);const[f,setF]=useState(PERFIL_PADRAO);const[ver,setVer]=useState(false);
 const set=(k,v)=>setF(x=>({...x,[k]:v}));const sn=(k,v)=>set(k,v==="sim");
 const submit=e=>{e.preventDefault();setPerfil({...f,pessoas:Number(f.pessoas),dias:Number(f.dias)});setVer(true)};
 const[feitos,setFeitos]=useLocal("verdao:feitos",{});const p=ver&&perfil,plano=p?buildPlan(p):null;const resolver=plano?plano.pendencias.filter(i=>PEND[i.id]):[],outras=plano?plano.pendencias.filter(i=>!PEND[i.id]&&i.id!=="wise"):[];
 return(<>
 <h1 className="h1">Planejador de viagem</h1><p className="mt-1 text-stone-600">Leva 2 minutos. Os dados ficam só no seu aparelho.</p>
 <form onSubmit={submit} className="mt-4 space-y-3">
 <label className="block text-sm font-medium">Cidade de saída<input required className="campo" value={f.cidade} onChange={e=>set("cidade",e.target.value)}/></label>
 <Sel l="Como você vai?" n="modo" v={f.modo} s={set} o={[["carro","De carro"],["aviao","De avião"]]}/>
 <div className="grid grid-cols-2 gap-3"><label className="block text-sm font-medium">Pessoas<input type="number" min="1" max="20" className="campo" value={f.pessoas} onChange={e=>set("pessoas",e.target.value)}/></label>
 <label className="block text-sm font-medium">Dias de viagem<input type="number" min="1" max="15" className="campo" value={f.dias} onChange={e=>set("dias",e.target.value)}/></label></div>
 <Sel l="Hospedagem" n="hospedagem" v={f.hospedagem} s={set} o={[["hotel","Hotel"],["airbnb","Airbnb"],["nao","Ainda não reservei"]]}/>
 <Sel l="Você tem Wise (ou similar)?" n="wise" v={f.wise?"sim":"nao"} s={sn} o={[["sim","Sim"],["nao","Não"]]}/>
 <Sel l="Você tem eSIM?" n="esim" v={f.esim?"sim":"nao"} s={sn} o={[["sim","Sim"],["nao","Não"]]}/>
 <Sel l="Você já tem ingresso?" n="ingresso" v={f.ingresso?"sim":"nao"} s={sn} o={[["sim","Sim"],["nao","Não"]]}/>
 <button className="btn w-full">Gerar meu plano</button></form>
 {plano&&(<section className="mt-6 space-y-4" aria-live="polite"><Progress n={plano.itens.filter(i=>feitos[i.id]).length} total={plano.itens.length}/>
 <div className="card"><h2 className="font-bold text-verde-escuro">Próximos passos</h2><ol className="mt-2 list-decimal space-y-1 pl-5">{plano.proximos.map(i=>(<li key={i.id}>{i.titulo} <span className="text-sm text-stone-600">(até {fmt(limite(i))})</span></li>))}</ol></div>
 {resolver.length>0&&<div className="space-y-3"><h2 className="text-xl font-bold text-verde-escuro">Resolva agora</h2>{resolver.map(i=><ResolverCard key={i.id} id={i.id} origem="planejador" feito={!!feitos[i.id]} onFeito={v=>setFeitos({...feitos,[i.id]:v})}/>)}</div>}{!p.wise&&<ContaInternacional/>}{outras.length>0&&<div className="card"><h2 className="font-bold text-verde-escuro">Outras pendências</h2><ul className="mt-2 list-disc space-y-1 pl-5">{outras.map(i=><li key={i.id}>{i.titulo}</li>)}</ul></div>}
 <div className="card"><h2 className="font-bold text-verde-escuro">Documentos para conferir</h2><ul className="mt-2 list-disc space-y-1 pl-5">{plano.documentos.map(i=><li key={i.id}>{i.titulo}</li>)}</ul></div>
 <CanalWhatsApp className="" titulo="🚨 Não perca atualizações importantes" texto="Receba alertas sobre a final, documentos, transporte e informações oficiais." botao="👉 Entrar no Canal do WhatsApp"/><div className="flex gap-3"><Link href="/checklist" className="btn flex-1">Ver checklist</Link><Link href="/custos" className="btn-2 flex-1">Ver gastos</Link></div></section>)}</>)}
