import F from"../data/fontes.json";
export default function Fonte({f,completo}){const o=F.oficiais[f];if(!o)return null;
return(<div className="space-y-1 text-sm text-stone-600">
<p>📚 Fonte: <a className="underline" href={o.url} target="_blank" rel="noopener noreferrer">{o.nome}</a></p>
{completo&&<p>📅 Última atualização: {F.verificadoEm}</p>}</div>)}
