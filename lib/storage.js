"use client";
import{useEffect,useState}from"react";
export function useLocal(key,initial){
 const[v,setV]=useState(initial),[pronto,setPronto]=useState(false);
 useEffect(()=>{try{const s=localStorage.getItem(key);if(s)setV(JSON.parse(s))}catch{}setPronto(true)},[key]);
 const set=n=>{setV(n);try{localStorage.setItem(key,JSON.stringify(n))}catch{}};
 return[v,set,pronto];
}
