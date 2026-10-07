import Image from "next/image"
import { cn } from "@/lib/utils"
export function Logo({
  className,
  priority = false,
}: {
  className?: string
  priority?: boolean
}) {
  return (
    <Image
      src="/logo.png"
      alt="Deodhani Technologies"
      width={640}
      height={390}
      priority={priority}
      className={cn("block h-auto w-full object-contain", className)}
    />
  )
}
