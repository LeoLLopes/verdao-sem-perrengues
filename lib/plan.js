import checklist from "../data/checklist.json";
import site from "../data/site.json";
export const FINAL=new Date(site.dataFinal+"T12:00:00");
const DAY=864e5;
export const PERFIL_PADRAO={cidade:"",modo:"carro",pessoas:2,dias:3,hospedagem:"nao",wise:false,esim:false,ingresso:false};
export const match=(q={},p)=>Object.entries(q).every(([k,v])=>p[k]===v);
export const limite=i=>new Date(FINAL.getTime()-i.prazo_dias*DAY);
export const fmt=d=>d.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"});
export function buildPlan(p){
 const itens=checklist.filter(i=>match(i.quando,p));
 const urg=[...itens].sort((a,b)=>b.prazo_dias-a.prazo_dias);
 return{itens,proximos:urg.filter(i=>i.pendencia).concat(urg.filter(i=>!i.pendencia)).slice(0,3),pendencias:itens.filter(i=>i.pendencia),documentos:itens.filter(i=>i.categoria==="Documentos")};
}
