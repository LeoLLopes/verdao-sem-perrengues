import Link from"next/link";import CanalWhatsApp from"../components/CanalWhatsApp";import Perrengues from"../components/Perrengues";import AbrirPorHash from"../components/AbrirPorHash";import Tile from"../components/Tile";import Countdown from"../components/Countdown";
const DUV=[["/guias#documentos","📄","Documentos","Que documento levar"],["/guias#dinheiro","💳","Dinheiro e Wise","Cartão, conta e dinheiro"],["/guias#internet","📶","Internet","eSIM, chip e roaming"],["/guias#carro","🚗","Carro e fronteira","Carta Verde e documentos"]];
const POP=[["Posso entrar no Uruguai apenas com RG?","/faq#rg"],["Wise funciona no Uruguai?","/faq#wise"],["Como funciona a imigração de ônibus?","/faq#onibus-imigracao"],["O que preciso para ir de carro?","/guias#carro"],["Vale mais a pena eSIM ou roaming?","/faq#esim-vs-roaming"]];
const ATALHOS=[["/checklist","✅","Checklist da viagem","O que falta resolver"],["/guias","📖","Guias","Passo a passo por tema"],["/faq","❓","Dúvidas frequentes","Respostas rápidas"],["/dia-do-jogo","🏟️","Dia do jogo","Do estádio à volta"]];
export default function Home(){return(<><AbrirPorHash/>
<section className="hero subir rounded-3xl p-6 text-white">
<p className="font-semibold text-white/80">Final da Libertadores 2026</p>
<div className="mt-3"><Countdown/></div>
<h1 className="mt-5 text-4xl font-black leading-none">Montevidéu</h1>
<p className="mt-1 text-lg text-white/90">Estádio Centenário, sábado, 28 de novembro</p>
<p className="mt-4 max-w-xs text-white/80">Uma final histórica merece uma viagem sem susto. A gente cuida dos detalhes.</p></section>
<Perrengues/>
<section className="mt-8 rounded-2xl bg-ouro p-5 shadow-sm"><h2 className="text-2xl font-black">🚀 Montar meu plano</h2>
<p className="mt-1 text-tinta">Responda algumas perguntas e receba seu checklist, seus próximos passos e o que ainda falta resolver.</p>
<Link href="/planejador" className="btn mt-4">Começar agora</Link></section>
<section className="mt-8"><h2 className="text-xl font-bold text-verde-escuro">🎯 Resolva sua maior dúvida</h2>
<p className="text-stone-700">As perguntas que mais recebemos de quem nunca foi ao Uruguai.</p>
<div className="mt-3 grid grid-cols-2 gap-3">{DUV.map(([h,i,t,d])=><Tile key={h} href={h} icon={i} titulo={t} desc={d}/>)}</div></section>
<section className="mt-8"><h2 className="text-xl font-bold text-verde-escuro">🔥 Mais procurados</h2>
<ul className="mt-3 space-y-2">{POP.map(([t,h])=>(<li key={t}><Link href={h} className="flex min-h-[56px] items-center justify-between rounded-2xl bg-white p-4 font-semibold shadow-sm ring-1 ring-linha transition hover:-translate-y-0.5 hover:shadow-md active:scale-[.98]"><span>{t}</span><span aria-hidden className="text-verde">›</span></Link></li>))}</ul></section>
<CanalWhatsApp titulo="🚨 Receba alertas da viagem" texto="Receba atualizações importantes sobre documentos, ingressos, estádio, transporte e mudanças de última hora diretamente no WhatsApp." botao="👉 Entrar no Canal do WhatsApp"/>
<section className="mt-8"><h2 className="text-xl font-bold text-verde-escuro">Acessos rápidos</h2>
<div className="mt-3 grid grid-cols-2 gap-3">{ATALHOS.map(([h,i,t,d])=><Tile key={h} href={h} icon={i} titulo={t} desc={d}/>)}</div></section></>)}
