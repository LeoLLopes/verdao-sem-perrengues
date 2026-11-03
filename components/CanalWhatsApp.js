import site from"../data/site.json";
export default function CanalWhatsApp({titulo,texto,botao,className="mt-8"}){return(
<section className={className+" rounded-2xl bg-white p-4 shadow-sm ring-1 ring-linha"}>
<h2 className="text-lg font-bold text-verde-escuro">{titulo}</h2>
<p className="mt-1 text-stone-700">{texto}</p>
<a className="btn mt-3" href={site.canalWhatsApp} target="_blank" rel="noopener noreferrer">{botao}</a></section>)}
