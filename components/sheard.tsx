import type React from "react"
import { cn } from "@/lib/utils"
export type LinkItemType = {
  label: string
  href: string
  icon: React.ReactNode
  description?: string
}
export function LinkItem({
  label,
  description,
  icon,
  className,
  href,
  ...props
}: React.ComponentProps<"a"> & LinkItemType) {
  return (
    <a
      className={cn(
        "flex items-center gap-3 rounded-md p-3.5 transition-colors duration-200 hover:bg-muted motion-reduce:transition-none max-[700px]:px-1.5 max-[700px]:py-3",
        className
      )}
      href={href}
      {...props}
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-accent text-primary [&_svg]:size-5">
        {icon}
      </span>
      <span className="flex flex-col gap-1">
        <span className="text-[13px] font-medium">{label}</span>
        {description && (
          <span className="text-[11px] leading-normal text-muted-foreground max-[700px]:text-[10px]">
            {description}
          </span>
        )}
      </span>
    </a>
  )
}
