"use client";
export default function Compartilhar({id,titulo}){
 const go=async()=>{const url=location.origin+"/#"+id,texto=titulo+" Veja como evitar:";
 try{if(navigator.share){await navigator.share({title:"Verdão sem Perrengues",text:texto,url});return}}catch{return}
 window.open("https://wa.me/?text="+encodeURIComponent(texto+" "+url),"_blank","noopener")};
 return <button onClick={go} className="min-h-[44px] rounded-xl border border-verde px-4 text-sm font-semibold text-verde">📤 Mandar para um amigo</button>}
