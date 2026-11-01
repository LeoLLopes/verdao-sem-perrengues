import Link from"next/link";import Tile from"../components/Tile";import Countdown from"../components/Countdown";
import site from"../data/site.json";import perfil from"../data/perfil.json";import faq from"../data/faq.json";
const COR=["bg-verde","bg-ouro","bg-verde-escuro"];
const T=[["/checklist","✅","Checklist","O que falta resolver"],["/custos","💰","Quanto vou gastar","Estimativa por categoria"],["/dia-do-jogo","🏟️","Dia do jogo","Do estádio à volta"],["/guias","📘","Guias","Passo a passo por tema"],["/faq","💬","Dúvidas",`${faq.itens.length} respostas rápidas`]];
export default function Home(){const pop=faq.itens.filter(i=>i.pop).slice(0,3);return(<>
<section className="hero subir rounded-3xl p-6 text-white">
<p className="font-semibold text-white/80">Final da Libertadores 2026</p>
<div className="mt-3"><Countdown/></div>
<h1 className="mt-5 text-4xl font-black leading-none">Montevidéu</h1>
<p className="mt-1 text-lg text-white/90">Estádio Centenário, sábado, 28 de novembro</p>
<p className="mt-4 max-w-xs text-white/80">Uma final histórica merece uma viagem sem susto. A gente cuida dos detalhes.</p>
<div className="mt-5 flex flex-wrap gap-3"><Link href="/planejador" className="inline-flex min-h-[48px] items-center rounded-xl bg-ouro px-5 font-bold text-tinta shadow-lg transition active:scale-95">Montar meu plano</Link>
<a href={site.canalWhatsApp} className="inline-flex min-h-[48px] items-center rounded-xl border border-white/60 px-5 font-semibold">Canal de avisos</a></div></section>
<h2 className="mt-8 text-xl font-bold text-verde-escuro">Comece por aqui</h2>
<div className="mt-3 grid grid-cols-2 gap-3"><Tile destaque href="/planejador" icon="🧭" titulo="Planejador de viagem" desc="7 perguntas e seu plano pronto"/>
{T.map(([h,i,t,d])=><Tile key={h} href={h} icon={i} titulo={t} desc={d}/>)}</div>
<section className="mt-8"><h2 className="text-xl font-bold text-verde-escuro">{perfil.titulo}</h2><p className="text-sm text-stone-600">{perfil.fonte}</p>
<ul className="mt-3 space-y-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-linha">{perfil.itens.map((x,k)=>(<li key={x.nome}>
<div className="flex items-center justify-between font-semibold"><span><span aria-hidden className="mr-2 text-2xl">{x.icone}</span>{x.nome}</span><span className="text-xl">{x.pct}%</span></div>
<div className="mt-2 h-3 overflow-hidden rounded-full bg-verde-claro"><div className={"barra h-3 rounded-full "+COR[k%3]} style={{width:x.pct+"%"}}/></div></li>))}</ul></section>
<section className="mt-8"><h2 className="text-xl font-bold text-verde-escuro">Dúvidas mais procuradas</h2>
<ul className="mt-3 space-y-2">{pop.map(i=>(<li key={i.p}><Link href="/faq" className="flex min-h-[56px] items-center justify-between rounded-2xl bg-white p-4 font-semibold shadow-sm ring-1 ring-linha transition hover:-translate-y-0.5 hover:shadow-md active:scale-[.98]"><span>{i.p}</span><span aria-hidden className="text-verde">›</span></Link></li>))}</ul></section></>)}
