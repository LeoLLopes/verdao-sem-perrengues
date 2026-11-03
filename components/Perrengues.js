import Link from"next/link";import data from"../data/perrengues.json";import Fonte from"./Fonte";import EsimAiralo from"./EsimAiralo";import Compartilhar from"./Compartilhar";import{PARCEIROS}from"../lib/partners";
const Comissao=()=><p className="mt-2 text-xs italic text-stone-600">Podemos receber comissão se você comprar ou contratar por este link, sem custo adicional para você.</p>;
export default function Perrengues(){const esim=PARCEIROS.find(p=>p.id==="esim-1");return(
<section className="mt-8"><h2 className="text-2xl font-black leading-tight text-verde-escuro">🚨 Perrengues Reais Que Pegam Torcedores de Surpresa</h2>
<p className="mt-1 text-stone-700">Toque para ver como evitar cada um. Mande para quem vai com você.</p>
<div className="mt-3 space-y-3">{data.map(x=>(<details key={x.id} id={x.id} className="group scroll-mt-20 rounded-2xl border-l-4 border-ouro bg-white shadow-sm ring-1 ring-linha transition open:ring-ouro/60">
<summary className="flex min-h-[72px] cursor-pointer list-none items-center gap-3 p-4"><span aria-hidden className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ouro/25 text-3xl">{x.icone}</span>
<span className="flex-1"><span className="block text-sm font-semibold text-stone-600">{x.titulo}</span><span className="block text-lg font-bold leading-tight">{x.frase}</span></span><span aria-hidden className="text-2xl text-verde transition group-open:rotate-45">+</span></summary>
<div className="space-y-4 px-4 pb-4 text-stone-700">
<div><h3 className="font-bold text-tinta">😬 O problema</h3><p className="mt-1">{x.problema}</p></div>
<div><h3 className="font-bold text-tinta">✅ Como evitar</h3><ul className="mt-1 space-y-2">{x.evitar.map(e=><li key={e} className="flex gap-2"><span aria-hidden>✅</span><span>{e}</span></li>)}</ul></div>
{x.extra&&<div className="rounded-xl bg-verde-claro p-3"><h3 className="font-bold text-verde-escuro">{x.extra.titulo}</h3><p className="mt-1">{x.extra.texto}</p>{x.extra.externo?<a href={x.extra.href} target="_blank" rel="noopener noreferrer" className="btn mt-3">{x.extra.cta}</a>:<Link href={x.extra.href} className="btn mt-3">{x.extra.cta}</Link>}</div>}
{x.aviso&&<div className="rounded-xl bg-ouro/20 p-3"><p className="font-semibold text-tinta">{x.aviso}</p>{x.cta&&<Link href={x.cta.href} className="btn-2 mt-3">{x.cta.texto}</Link>}</div>}
{x.kit&&<div className="rounded-xl bg-verde-claro p-3"><h3 className="font-bold text-verde-escuro">🎒 Kit sem Perrengues</h3><ul className="mt-1 space-y-1">{x.kit.map(k=><li key={k.nome} className="flex gap-2"><span aria-hidden>✅</span>{k.url?<a className="underline" href={k.url} target="_blank" rel="sponsored noopener noreferrer">{k.nome}</a>:k.nome}</li>)}</ul>{x.kit.some(k=>k.url)&&<Comissao/>}</div>}
{x.esim&&<EsimAiralo/>}
<Fonte f={x.f} rf={x.rf} st={x.st}/>
<Compartilhar id={x.id} titulo={x.frase}/></div></details>))}</div></section>)}
