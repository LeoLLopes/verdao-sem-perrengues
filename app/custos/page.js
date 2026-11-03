export const metadata={title:"Quanto vou gastar"};
const ITENS=[["⛽","Combustível"],["🛣️","Pedágios"],["🏨","Hospedagem"],["🍽️","Alimentação"],["📶","Internet"]];
export default function Custos(){return(<><h1 className="h1">Calculadora em atualização</h1>
<p className="mt-2 text-stone-700">Estamos levantando os custos reais de combustível, pedágios, hospedagem, alimentação e deslocamentos para oferecer estimativas mais confiáveis.</p>
<p className="mt-2 text-stone-700">Volte em breve para acompanhar as atualizações.</p>
<ul className="mt-5 space-y-2">{ITENS.map(([i,n])=>(<li key={n} className="card flex items-center justify-between gap-2"><span className="font-semibold"><span aria-hidden className="mr-2 text-2xl">{i}</span>✅ {n}</span><span className="shrink-0 rounded-full bg-ouro/25 px-3 py-1 text-sm font-semibold">Em levantamento</span></li>))}</ul></>)}
