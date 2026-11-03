import Link from"next/link";import site from"../../data/site.json";
export const metadata={title:"Conta internacional para a viagem"};
export default function Conta(){return(<>
<h1 className="h1">💳 Conta internacional para a viagem</h1>
<p className="mt-2 text-stone-700">Uma conta internacional funciona como alternativa ao cartão principal. Se o cartão do banco falhar, você ainda consegue pagar.</p>
<section className="card mt-4"><h2 className="font-bold text-verde-escuro">Por que ter uma segunda forma de pagamento</h2><ul className="mt-2 list-disc space-y-1 pl-5"><li>Cartões de banco podem ser bloqueados ou recusados em compras no exterior.</li><li>Com um segundo meio de pagamento, um problema no cartão não atrapalha o resto da viagem.</li><li>É uma etapa simples de planejar antes de sair de casa.</li></ul></section>
<section className="card mt-3"><h2 className="font-bold text-verde-escuro">Benefícios</h2><ul className="mt-2 list-disc space-y-1 pl-5"><li>Um segundo meio de pagamento, separado do cartão do banco.</li><li>Serviço pensado para pagar e converter moedas, com taxas informadas antes da operação. Confira no app.</li><li>Você pode abrir antes da viagem e testar com calma.</li></ul></section>
<section className="card mt-3"><h2 className="font-bold text-verde-escuro">Como funciona</h2><ol className="mt-2 list-decimal space-y-1 pl-5"><li>Abra a conta pelo app ou site da Wise. Pode haver verificação de identidade, então não deixe para a véspera.</li><li>Peça o cartão e confira tarifas, limites e se há moeda disponível para o Uruguai.</li><li>Faça uma compra de teste e leve como segunda forma de pagamento.</li></ol></section>
<div className="mt-4 rounded-2xl bg-ouro/20 p-4"><h2 className="font-bold">Transparência</h2><p className="mt-1">Podemos receber comissão caso você abra uma conta por este link. Não há custo adicional para você.</p></div>
<a href={site.wiseLink} target="_blank" rel="sponsored noopener noreferrer" className="btn mt-5 w-full">👉 Peça seu cartão em segundos</a>
<p className="mt-3 text-sm text-stone-600">A disponibilidade do cartão e das moedas no Uruguai não foi validada em fonte oficial. Confirme no app antes de contar com ela.</p>
<Link href="/" className="btn-2 mt-4 w-full">Voltar ao início</Link></>)}
