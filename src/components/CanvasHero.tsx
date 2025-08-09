
"use client";
import { useEffect, useRef, useState } from "react";
import type { Media } from "@/lib/types";
import { useUI } from "./ui-context";

export default function CanvasHero({defaultMedia}:{defaultMedia: Media}){
  const { hero } = useUI();
  const [current,setCurrent] = useState<Media>(defaultMedia);
  const [prev,setPrev] = useState<Media|null>(null);
  const timer = useRef<NodeJS.Timeout|null>(null);

  useEffect(()=>{
    if(!hero || hero.url===current.url) return;
    setPrev(current);
    setCurrent(hero);
    if(timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(()=>setPrev(null), 650);
  },[hero]);

  const Layer = ({media}:{media:Media}) => (
    media.type === "video" ? (
      <video className="absolute inset-0 w-full h-full object-cover" src={media.url} poster={media.poster}
        autoPlay muted loop playsInline preload="auto" />
    ) : (
      <img className="absolute inset-0 w-full h-full object-cover" src={media.url} alt={media.alt||""}/>
    )
  );

  return (
    <div className="absolute inset-0 -z-10">
      {prev && (
        <div className="absolute inset-0 transition-opacity duration-500 opacity-100">
          <Layer media={prev}/>
        </div>
      )}
      <div className="absolute inset-0 transition-opacity duration-500 opacity-100">
        <Layer media={current}/>
      </div>
    </div>
  );
}
