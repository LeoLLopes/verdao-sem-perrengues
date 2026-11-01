import pend from"../data/pendencias.json";import par from"../data/parceiros.json";
export const PEND=pend;
export const PARCEIROS=par.itens;
export const ativos=()=>PARCEIROS.filter(p=>p.url);
export const link=(p,origem,id)=>p.url+(p.url.includes("?")?"&":"?")+"ref="+encodeURIComponent(origem+"-"+id);
