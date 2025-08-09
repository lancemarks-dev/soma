
import { cn } from "@/lib/utils";
export function Badge({className, children}:{className?:string; children:React.ReactNode}){
  return <span className={cn("inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium", className)}>{children}</span>;
}
