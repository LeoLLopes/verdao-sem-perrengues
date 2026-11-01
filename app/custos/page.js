"use client";
import{useState,useEffect}from"react";import{useLocal}from"../../lib/storage";import{PERFIL_PADRAO,estimar}from"../../lib/plan";import custos from"../../data/custos.json";
const R=v=>v.toLocaleString("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0});
export default function Custos(){
 const[perfil,,ok]=useLocal("verdao:perfil",null);const[f,setF]=useState(PERFIL_PADRAO);
 useEffect(()=>{if(perfil)setF(perfil)},[perfil]);
 const e=estimar(f,custos),set=(k,v)=>setF(x=>({...x,[k]:v}));
 if(!ok)return null;
 return(<><h1 className="h1">Quanto vou gastar</h1>
 <p className="mt-1 text-stone-600">Estimativa sem o ingresso. Ajuste e veja o resultado.</p>
 <div className="mt-4 grid grid-cols-3 gap-3">
 <label className="text-sm font-medium">Como<select className="campo" value={f.modo} onChange={x=>set("modo",x.target.value)}><option value="carro">Carro</option><option value="aviao">Avião</option></select></label>
 <label className="text-sm font-medium">Pessoas<input type="number" min="1" className="campo" value={f.pessoas} onChange={x=>set("pessoas",x.target.value)}/></label>
 <label className="text-sm font-medium">Dias<input type="number" min="1" className="campo" value={f.dias} onChange={x=>set("dias",x.target.value)}/></label></div>
 {e.faltam.length>0&&<p className="mt-4 rounded-lg bg-ouro/20 p-3 text-sm">Valores ainda não preenchidos em <code>data/custos.json</code>: {e.faltam.join(", ")}. O total abaixo está incompleto.</p>}
 <ul className="card mt-4 divide-y divide-linha">{e.linhas.map(([n,v])=>(<li key={n} className="flex justify-between py-2"><span>{n}</span><span className="font-semibold">{R(v)}</span></li>))}
 <li className="flex justify-between py-2"><span>Reserva ({custos.margemReserva*100}%)</span><span>{R(e.total-e.sub)}</span></li>
 <li className="flex justify-between pt-3 text-lg font-bold text-verde-escuro"><span>Total estimado</span><span>{R(e.total)}</span></li></ul>
 <p className="mt-2 text-xs text-stone-600">{custos.atualizado?"Premissas atualizadas em "+custos.atualizado+".":"Premissas sem data de atualização."} Valores são estimativas, não cotações.</p></>)}
