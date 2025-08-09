
"use client";
import StageFrame from "@/components/StageFrame";
import CanvasHero from "@/components/CanvasHero";
import CategoryGrid from "@/components/CategoryGrid";
import ExperienceStackOverlay from "@/components/ExperienceStackOverlay";
import { CATEGORIES } from "@/lib/categories";

const DEFAULT_MEDIA = { type:"video", url:"/videos/home.mp4", poster:"/videos/home.jpg" } as const;

export default function Home(){
  return (
    <main className="relative">
      <CanvasHero defaultMedia={DEFAULT_MEDIA as any} />

      <div className="relative py-12 sm:py-16">
        <StageFrame>
          <div className="px-4 sm:px-10 pt-[10vh] pb-10 text-center">
            <h1 className="h-headline text-3xl sm:text-5xl md:text-6xl">Looking for a life-changing experience?</h1>
          </div>
          <div className="pb-10">
            <CategoryGrid cats={CATEGORIES} />
          </div>
        </StageFrame>
      </div>

      <ExperienceStackOverlay/>
    </main>
  );
}
