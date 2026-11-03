import site from"../data/site.json";
export default function EsimAiralo(){return(
<div className="rounded-xl bg-verde-claro p-3"><h3 className="font-bold text-verde-escuro">📶 eSIM com bônus</h3>
<p className="mt-1 text-stone-700">Use o cupom <strong className="rounded bg-white px-2 py-0.5 font-mono">LEONAR2213</strong> na Airalo e ganhe USD 5,00 em Airmoney, o crédito da própria Airalo.</p>
<a className="btn mt-3" href={site.airaloLink||"https://www.airalo.com"} target="_blank" rel="sponsored noopener noreferrer">Ver eSIM na Airalo</a>
<p className="mt-2 text-xs italic text-stone-600">Podemos receber um benefício se você usar o nosso cupom, sem custo adicional para você.</p></div>)}
