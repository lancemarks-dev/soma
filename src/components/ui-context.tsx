
"use client";
import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import type { Media, Category } from "@/lib/types";

interface UIState{
  hero: Media | null;
  setHero: (m: Media | null) => void;
  openCategory: Category | null;
  setOpenCategory: (c: Category | null) => void;
}
const Ctx = createContext<UIState | null>(null);
export function UIProvider({children}:{children:ReactNode}){
  const [hero,setHero] = useState<Media|null>(null);
  const [openCategory,setOpenCategory] = useState<Category|null>(null);
  const value = useMemo(()=>({hero,setHero,openCategory,setOpenCategory}),[hero,openCategory]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export const useUI = ()=>{
  const v = useContext(Ctx); if(!v) throw new Error("useUI outside provider"); return v;
};
