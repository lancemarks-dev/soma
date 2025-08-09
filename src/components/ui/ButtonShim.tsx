
import { cn } from "@/lib/utils";
export function Button({className, children, ...props}:{className?:string; children:React.ReactNode} & React.ButtonHTMLAttributes<HTMLButtonElement>){
  return <button {...props} className={cn("inline-flex items-center justify-center rounded-lg bg-white/90 text-black px-4 py-2 text-sm font-medium hover:bg-white transition", className)}>{children}</button>;
}
