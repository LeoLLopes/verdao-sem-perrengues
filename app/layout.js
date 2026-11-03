import"./globals.css";import Link from"next/link";import Nav from"../components/Nav";import CanalWhatsApp from"../components/CanalWhatsApp";
export const metadata={title:"Verdão sem Perrengues",description:"Guia independente para quem vai à final da Libertadores em Montevidéu."};
export const viewport={width:"device-width",initialScale:1,viewportFit:"cover",themeColor:"#0B6B3A"};
export default function RootLayout({children}){return(
<html lang="pt-BR"><body className="bg-fundo text-tinta">
<header className="sticky top-0 z-10 bg-verde px-4 pb-3 pt-[calc(0.75rem+env(safe-area-inset-top))] text-white"><Link href="/" className="font-bold">Verdão sem Perrengues</Link></header>
<main className="mx-auto max-w-xl px-4 pb-28 pt-5">{children}
<CanalWhatsApp className="mt-10" titulo="📲 Canal Oficial do WhatsApp" texto="Receba avisos e atualizações importantes da viagem." botao="Entrar no Canal"/>
<p className="mt-6 text-xs text-stone-600">Iniciativa independente, sem vínculo com o Palmeiras ou a Conmebol. Confirme sempre nas fontes oficiais. <Link href="/parceiros" className="underline">Como ganhamos dinheiro</Link></p></main><Nav/></body></html>)}
