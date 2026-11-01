export default function Progress({n,total}){const pct=total?Math.round(n/total*100):0;return(
<div className="rounded-2xl bg-verde p-4 text-white shadow-sm"><p className="text-lg font-bold">Você concluiu {n} de {total} etapas da viagem.</p>
<div className="mt-3 h-3 rounded-full bg-white/25" role="progressbar" aria-valuenow={n} aria-valuemin={0} aria-valuemax={total}><div className="barra h-3 rounded-full bg-ouro" style={{width:pct+"%"}}/></div>
<p className="mt-2 text-sm text-white/85">{pct===100?"Tudo pronto. Boa viagem!":`Faltam ${total-n} para ficar pronto.`}</p></div>)}
