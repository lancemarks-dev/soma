
"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/types";
import { useUI } from "./ui-context";

export default function CategoryCard({cat, layoutId}:{cat: Category; layoutId:string}){
  const { setHero, setOpenCategory } = useUI();
  return (
    <motion.button
      layoutId={layoutId}
      onPointerEnter={()=> setHero(cat.hero)}
      onClick={()=> setOpenCategory(cat)}
      className={cn("relative glass overflow-hidden h-64 w-[min(22rem,90vw)] select-none", "transition-transform duration-300")}
      whileHover={{ y:-6, scale:1.02 }}
    >
      {cat.hero.type === 'video' ? (
        <video className="absolute inset-0 w-full h-full object-cover" src={cat.hero.url} poster={cat.hero.poster} muted loop autoPlay playsInline />
      ) : (
        <img className="absolute inset-0 w-full h-full object-cover" src={cat.hero.url} alt={cat.name} />
      )}
      <div className="absolute inset-0 bg-black/20"/>
      <div className="relative z-10 h-full w-full grid place-items-center">
        <span className="px-4 py-2 rounded-lg bg-black/35 text-white text-xl font-medium shadow">{cat.name}</span>
      </div>
      <div className="glass-ink absolute inset-0"/>
    </motion.button>
  );
}
