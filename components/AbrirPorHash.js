"use client";
import{useEffect}from"react";
export default function AbrirPorHash(){useEffect(()=>{const go=()=>{const el=document.getElementById(location.hash.slice(1));if(el&&el.tagName==="DETAILS"){el.open=true;el.scrollIntoView()}};go();addEventListener("hashchange",go);return()=>removeEventListener("hashchange",go)},[]);return null}
