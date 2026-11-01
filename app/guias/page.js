import g from"../../data/guias.json";
export const metadata={title:"Guias"};
export default function Guias(){return(<><h1 className="h1">Guias</h1>
<div className="mt-3 space-y-3">{g.map(x=>(<details key={x.slug} id={x.slug} className="card"><summary className="min-h-[44px] cursor-pointer font-semibold text-verde-escuro">{x.titulo}<span className="block text-sm font-normal text-stone-600">{x.resumo}</span></summary>
<ul className="mt-3 list-disc space-y-1 pl-5">{x.passos.map(p=><li key={p}>{p}</li>)}</ul>
<p className="mt-3 text-xs text-stone-600">{x.verificado?`Verificado em ${x.verificado}. `:"Ainda não verificado em fonte oficial. "}{x.fonte&&<a className="underline" href={x.fonte}>Fonte oficial</a>}</p></details>))}</div></>)}
