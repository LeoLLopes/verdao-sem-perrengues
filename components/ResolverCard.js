import{PEND,PARCEIROS,link}from"../lib/partners";import{limite,fmt}from"../lib/plan";
export default function ResolverCard({id,origem,feito,onFeito}){
 const p=PEND[id];if(!p)return null;
 const ops=p.parceiros.map(x=>PARCEIROS.find(a=>a.id===x)).filter(a=>a&&a.url);
 if(feito)return(<div className="flex items-center justify-between rounded-2xl bg-verde-claro p-4 ring-1 ring-verde/30"><span className="font-semibold text-verde-escuro">✅ {p.titulo}: resolvido</span><button onClick={()=>onFeito(false)} className="min-h-[44px] px-2 text-sm underline">Desfazer</button></div>);
 return(<section className="rounded-2xl border-l-4 border-ouro bg-white p-4 shadow-sm ring-1 ring-linha">
 <div className="flex items-start gap-3"><span aria-hidden className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-verde-claro text-3xl">{p.icone}</span>
 <div><h3 className="text-lg font-bold leading-tight">{p.titulo}</h3><p className="mt-1 inline-block rounded-full bg-ouro/25 px-2 py-0.5 text-xs font-semibold">Resolva até {fmt(limite({prazo_dias:p.prazoDias}))}</p></div></div>
 <p className="mt-3 text-stone-700">{p.texto}</p>
 <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-stone-700">{p.passos.map(s=><li key={s}>{s}</li>)}</ul>
 {ops.length>0&&<div className="mt-4"><p className="text-sm font-semibold">{p.cta}:</p><div className="mt-2 flex flex-col gap-2">{ops.slice(0,2).map((o,k)=>(<a key={o.id} href={link(o,origem,id)} target="_blank" rel="sponsored noopener noreferrer" className={k?"btn-2":"btn"}>{o.nome}</a>))}</div>
 <p className="mt-2 text-xs text-stone-600">Podemos receber comissão se você contratar por estes links, sem custo extra para você.</p></div>}
 <button onClick={()=>onFeito(true)} className="mt-3 min-h-[44px] rounded-xl px-3 text-sm font-semibold text-verde underline">Já resolvi</button></section>)}
