"use client";
import Link from"next/link";import Progress from"../../components/Progress";import site from"../../data/site.json";import ContaInternacional from"../../components/ContaInternacional";import ResolverCard from"../../components/ResolverCard";import{PEND}from"../../lib/partners";import{useLocal}from"../../lib/storage";import{buildPlan,limite,fmt}from"../../lib/plan";
export default function Checklist(){
 const[p,,ok]=useLocal("verdao:perfil",null),[feitos,setFeitos]=useLocal("verdao:feitos",{});
 if(!ok)return null;
 if(!p)return(<><h1 className="h1">Checklist</h1><p className="mt-2">Seu checklist é montado a partir do seu plano.</p><Link href="/planejador" className="btn mt-4">Montar meu plano</Link></>);
 const{itens}=buildPlan(p),cats=[...new Set(itens.map(i=>i.categoria))],n=itens.filter(i=>feitos[i.id]).length;
 return(<><h1 className="h1">Checklist</h1>
 <div className="mt-3"><Progress n={n} total={itens.length}/></div>

 {cats.map(c=>(<section key={c} className="mt-5"><h2 className="font-bold text-verde-escuro">{c}</h2><ul className="mt-2 space-y-2">
 {itens.filter(i=>i.categoria===c).sort((a,b)=>b.prazo_dias-a.prazo_dias).map(i=>(<li key={i.id}><div className="card flex gap-3">
 <input id={i.id} type="checkbox" className="mt-1 h-6 w-6 accent-verde" checked={!!feitos[i.id]} onChange={e=>setFeitos({...feitos,[i.id]:e.target.checked})}/>
 <label htmlFor={i.id} className="flex-1"><span className={feitos[i.id]?"line-through text-stone-500":""}>{i.titulo}</span>
 <span className="block text-sm text-stone-600">até {fmt(limite(i))}{i.fonte?<> · <a className="underline" href={i.fonte}>fonte oficial</a></>:""}</span></label></div>{i.id==="canal"&&!feitos[i.id]&&<div className="mt-2"><a className="btn w-full" href={site.canalWhatsApp} target="_blank" rel="noopener noreferrer">👉 Entrar no Canal do WhatsApp</a></div>}{i.id==="wise"&&!feitos[i.id]&&<div className="mt-2"><ContaInternacional/></div>}{PEND[i.id]&&<div className="mt-2"><ResolverCard id={i.id} origem="checklist" feito={!!feitos[i.id]} onFeito={v=>setFeitos({...feitos,[i.id]:v})}/></div>}</li>))}</ul></section>))}
 <button className="btn-2 mt-6" onClick={()=>setFeitos({})}>Limpar marcações</button></>)}
