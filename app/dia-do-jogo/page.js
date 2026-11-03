import d from"../../data/dia-do-jogo.json";import CanalWhatsApp from"../../components/CanalWhatsApp";import site from"../../data/site.json";
export const metadata={title:"Dia do jogo"};
export default function Jogo(){return(<><h1 className="h1">Dia do jogo</h1>
<CanalWhatsApp className="mt-3" titulo="🚨 Alertas em tempo real" texto="Mudanças e informações de última hora serão divulgadas primeiro no Canal Oficial do WhatsApp." botao="👉 Entrar no Canal"/>
<p className="mt-2 inline-block rounded-full bg-ouro/25 px-3 py-1 text-sm font-semibold">⚠️ Informação sujeita a atualização.</p>
<div className="card mt-3"><p className="font-semibold">Sábado, 28/11/2026</p><p>{site.local}</p><p className="text-sm text-stone-600">Horário: {d.horario||"informação aguardando confirmação oficial."}</p></div>
{d.blocos.map(b=>(<section key={b.titulo} className="card mt-3"><h2 className="font-bold text-verde-escuro">{b.titulo}</h2><ul className="mt-2 list-disc space-y-1 pl-5">{b.itens.map(i=><li key={i}>{i}</li>)}</ul></section>))}
</>)}
