import site from"../data/site.json";
export default function ContaInternacional(){return(
<aside className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-linha">
<h3 className="font-bold text-verde-escuro">💳 Conta internacional para a viagem</h3>
<p className="mt-1 text-stone-700">Levar uma segunda forma de pagamento faz parte do planejamento: se o cartão do banco for bloqueado ou recusado, você segue a viagem com tranquilidade.</p>
<a className="btn-2 mt-3" href={site.wiseLink} target="_blank" rel="sponsored noopener noreferrer">👉 Conhecer a Wise</a>
<p className="mt-2 text-xs italic text-stone-600">Podemos receber comissão caso você abra uma conta usando este link, sem custo adicional para você.</p></aside>)}
