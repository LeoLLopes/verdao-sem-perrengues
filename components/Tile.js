import Link from"next/link";
export default function Tile({href,icon,titulo,desc,destaque}){return(
<Link href={href} className={"group flex rounded-2xl p-4 shadow-sm ring-1 transition duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[.98] motion-reduce:transition-none "+(destaque?"col-span-2 items-center gap-4 bg-ouro ring-ouro/60":"flex-col bg-white ring-linha")}>
<span aria-hidden className={"grid h-16 w-16 shrink-0 place-items-center rounded-2xl text-4xl transition group-hover:scale-105 "+(destaque?"bg-white/60":"mb-3 bg-verde-claro")}>{icon}</span>
<span><span className="block text-lg font-bold leading-tight text-tinta">{titulo}</span><span className="mt-1 block text-sm text-stone-700">{desc}</span></span></Link>)}
