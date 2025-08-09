
import CategoryCard from "./CategoryCard";
import type { Category } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function CategoryGrid({cats}:{cats: Category[]}){
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-6")}>
      {cats.map((c, i)=> (
        <div key={c.slug} style={{ transform: `translateY(${(i%2?8:-8)}px) rotate(${i-1}deg)` }}>
          <CategoryCard cat={c} layoutId={c.slug}/>
        </div>
      ))}
    </div>
  );
}
