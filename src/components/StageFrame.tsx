
import { cn } from "@/lib/utils";

export default function StageFrame({children,className}:{children:React.ReactNode;className?:string}){
  return (
    <div className={cn("relative w-full max-w-[1400px] mx-auto stage", className)}>
      <div className="absolute inset-0 veil rounded-[28px] pointer-events-none"/>
      <div className="absolute inset-0 noise rounded-[28px] pointer-events-none"/>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
