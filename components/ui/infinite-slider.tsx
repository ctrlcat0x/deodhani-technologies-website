"use client"
import { useEffect, useState, type ReactNode } from "react"
import { animate, motion, useMotionValue, useReducedMotion } from "motion/react"
import useMeasure from "react-use-measure"
import { cn } from "@/lib/utils"
export type InfiniteSliderProps = {
  children: ReactNode
  gap?: number
  speed?: number
  speedOnHover?: number
  direction?: "horizontal" | "vertical"
  reverse?: boolean
  className?: string
}
export function InfiniteSlider({
  children,
  gap = 18,
  speed = 45,
  speedOnHover = 0,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [hovering, setHovering] = useState(false)
  const [viewportRef, viewport] = useMeasure()
  const [groupRef, group] = useMeasure()
  const translation = useMotionValue(0)
  const reducedMotion = useReducedMotion()
  const horizontal = direction === "horizontal"
  const distance = (horizontal ? group.width : group.height) + gap
  const viewportSize = horizontal ? viewport.width : viewport.height
  const currentSpeed = hovering ? speedOnHover : speed
  const copies =
    distance > gap ? Math.max(2, Math.ceil(viewportSize / distance) + 1) : 2
  useEffect(() => {
    if (reducedMotion || distance <= gap) {
      translation.set(0)
      return
    }
    // Wrap to a single group's phase, so speed changes and resizing never expose an end.
    const phase = ((translation.get() % distance) + distance) % distance
    const start = phase === 0 ? (reverse ? -distance : 0) : phase - distance
    translation.set(start)
    if (currentSpeed <= 0) return
    let controls: ReturnType<typeof animate> | undefined
    let stopped = false
    const target = reverse ? 0 : -distance
    const loop = (from: number) => {
      controls = animate(translation, [from, target], {
        ease: "linear",
        duration: Math.abs(target - from) / currentSpeed,
        onComplete: () => {
          if (!stopped) {
            const next = reverse ? -distance : 0
            translation.set(next)
            loop(next)
          }
        },
      })
    }
    loop(start)
    return () => {
      stopped = true
      controls?.stop()
    }
  }, [currentSpeed, distance, gap, reducedMotion, reverse, translation])
  return (
    <div
      ref={viewportRef}
      className={cn(
        "w-full overflow-hidden",
        reducedMotion && "overflow-x-auto",
        className
      )}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.div
        className={cn(
          "flex w-max",
          reducedMotion ? "will-change-auto" : "will-change-transform"
        )}
        style={{
          [horizontal ? "x" : "y"]: translation,
          gap,
          flexDirection: horizontal ? "row" : "column",
        }}
      >
        {Array.from({ length: reducedMotion ? 1 : copies }, (_, copy) => (
          <div
            key={copy}
            ref={copy === 0 ? groupRef : undefined}
            className="flex w-max shrink-0"
            style={{ gap, flexDirection: horizontal ? "row" : "column" }}
            aria-hidden={copy > 0 ? true : undefined}
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
