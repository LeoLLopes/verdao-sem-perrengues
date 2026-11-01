"use client";
import Link from"next/link";import{usePathname}from"next/navigation";
const T=[["/","Início","🏠"],["/planejador","Plano","🧭"],["/checklist","Checklist","✅"],["/faq","Dúvidas","💬"],["/dia-do-jogo","Jogo","🏟️"]];
export default function Nav(){const p=usePathname();return(
<nav aria-label="Principal" className="fixed inset-x-0 bottom-0 z-10 border-t border-linha bg-white pb-[env(safe-area-inset-bottom)]">
<ul className="mx-auto flex max-w-xl">{T.map(([h,t,i])=>(<li key={h} className="flex-1"><Link href={h} aria-current={p===h?"page":undefined} className={"flex min-h-[56px] flex-col items-center justify-center text-xs "+(p===h?"font-bold text-verde":"text-stone-600")}><span aria-hidden>{i}</span>{t}</Link></li>))}</ul></nav>)}
