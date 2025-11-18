import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex items-center justify-center">
        <div className="h-5 w-5 rounded-full border-[4px] border-purple-600" />
      </div>
      <span className="-ml-0.5 text-2xl font-bold tracking-tighter text-foreground">lia</span>
    </div>
  )
}
