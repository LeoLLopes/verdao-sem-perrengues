import{ativos}from"../../lib/partners";import site from"../../data/site.json";
export const metadata={title:"Como ganhamos dinheiro"};
export default function Transparencia(){const a=ativos();return(<><h1 className="h1">Como ganhamos dinheiro</h1>
<p className="mt-2 text-stone-700">Este guia é gratuito. Alguns links podem render comissão quando você contrata um serviço, sem custo extra para você.</p>
<ul className="card mt-4 list-disc space-y-2 pl-9"><li>Só mostramos uma oferta quando ela resolve uma pendência do seu plano.</li><li>Nunca vendemos ingresso nem indicamos revendedores. Ingresso só pelos canais oficiais da Conmebol.</li><li>Informações sobre regras vêm de fontes oficiais, nunca de parceiros.</li><li>Indicamos apenas serviços que [PREENCHER: seu critério de seleção].</li></ul>
<h2 className="mt-6 font-bold text-verde-escuro">Parceiros ativos</h2>
{a.length?<ul className="mt-2 space-y-2">{a.map(p=><li key={p.id} className="card">{p.nome} <span className="text-sm text-stone-600">({p.categoria})</span></li>)}</ul>:<p className="mt-2 text-stone-600">Ainda não há parceiros ativos.</p>}
<p className="mt-6 text-sm text-stone-600">Dúvidas ou sugestões: {site.contato}</p></>)}
