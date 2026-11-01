import d from"../../data/dia-do-jogo.json";import site from"../../data/site.json";
export const metadata={title:"Dia do jogo"};
export default function Jogo(){return(<><h1 className="h1">Dia do jogo</h1>
<div className="card mt-3"><p className="font-semibold">Sábado, 28/11/2026</p><p>{site.local}</p><p className="text-sm text-stone-600">Horário: {d.horario||"a confirmar pela Conmebol"}</p></div>
{d.blocos.map(b=>(<section key={b.titulo} className="card mt-3"><h2 className="font-bold text-verde-escuro">{b.titulo}</h2><ul className="mt-2 list-disc space-y-1 pl-5">{b.itens.map(i=><li key={i}>{i}</li>)}</ul></section>))}
<a href={site.canalWhatsApp} className="btn mt-5 w-full">Receber avisos ao vivo</a></>)}
