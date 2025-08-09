
"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/BadgeShim";
import { Button } from "@/components/ui/ButtonShim";
import type { Experience } from "@/lib/types";

export default function ExperienceCard({exp}:{exp: Experience}){
  return (
    <motion.div whileHover={{ y:-6, scale:1.02 }} className="relative snap-center min-w-[900px] h-[520px] glass overflow-hidden p-6">
      {exp.media.type === 'video' ? (
        <video className="absolute inset-0 w-full h-full object-cover" src={exp.media.url} poster={exp.media.poster} muted loop autoPlay playsInline />
      ) : (
        <img className="absolute inset-0 w-full h-full object-cover" src={exp.media.url} alt={exp.title} />
      )}
      <div className="absolute inset-0 bg-black/25"/>
      <div className="relative z-10 max-w-[70%] space-y-3 text-white">
        <h3 className="text-3xl font-semibold tracking-tight">{exp.title}</h3>
        <p className="text-lg/6 opacity-90">{exp.summary}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {exp.tags.map(t=> <Badge key={t} className="bg-white/20 text-white border-white/30">{t}</Badge>)}
        </div>
        <div className="flex items-center gap-4 pt-2">
          {exp.price && <span className="text-sm opacity-85">{exp.price}</span>}
          <Button className="rounded-xl">Inquire</Button>
        </div>
      </div>
      <div className="glass-ink absolute inset-0 pointer-events-none"/>
    </motion.div>
  );
}
