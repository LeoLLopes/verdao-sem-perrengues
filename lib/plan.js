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
export function estimar(p,c){
 const v=c.premissas,n=Number(p.pessoas)||1,d=Number(p.dias)||1,q=Math.ceil(n/2),faltam=[],g=k=>{if(v[k]==null){faltam.push(k);return 0}return v[k]};
 const transporte=p.modo==="carro"?(g("distanciaIdaKm")*2/(g("consumoKmPorLitro")||1))*g("precoLitro")+g("pedagiosIdaVolta")+g("estacionamentoDia")*d:g("passagemPorPessoa")*n;
 const linhas=[["Transporte",transporte],["Hospedagem",g("diariaQuarto")*d*q],["Alimentação",g("alimentacaoDiaPorPessoa")*n*d],["Deslocamento local",g("deslocamentoLocalDia")*d],["Internet",p.esim?0:g("esimPorPessoa")*n]];
 const sub=linhas.reduce((s,l)=>s+l[1],0);
 return{linhas,sub,total:sub*(1+c.margemReserva),faltam:[...new Set(faltam)]};
}
