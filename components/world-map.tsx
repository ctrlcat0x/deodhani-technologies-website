"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, useReducedMotion } from "motion/react"
import map from "@/lib/world-map.json"

// Adapted from the supplied WorldMap: precomputed dots keep geographic data
// out of the client bundle. Pins use the same projection as the base map.
export function WorldMap() {
  const reducedMotion = useReducedMotion()
  const origin = map.locations[0]
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.3 })
  const [tabVisible, setTabVisible] = useState(true)

  useEffect(() => {
    const updateVisibility = () => setTabVisible(document.visibilityState === "visible")
    updateVisibility()
    document.addEventListener("visibilitychange", updateVisibility)
    return () => document.removeEventListener("visibilitychange", updateVisibility)
  }, [])

  const running = inView && tabVisible && !reducedMotion

  return (
    <div ref={ref} className="relative aspect-[1.98/1] w-full" role="img" aria-label="Illustrative world map connecting India with regions around the world">
      <Image src="/images/world-map.svg" alt="" fill sizes="(max-width: 1024px) 100vw, 65vw" className="pointer-events-none object-contain select-none" />
      <svg viewBox={`0 0 ${map.width} ${map.height}`} className="absolute inset-0 size-full overflow-visible" aria-hidden="true">
        {map.locations.slice(1).map((point, i) => (
          <motion.path
            key={point.label}
            d={`M ${origin.x} ${origin.y} Q ${(origin.x + point.x) / 2} ${Math.min(origin.y, point.y) - 15} ${point.x} ${point.y}`}
            fill="none" stroke="var(--primary)" strokeWidth="0.3" strokeOpacity="0.45"
            initial={false}
            animate={running
              ? { pathLength: [0, 1, 1, 1], opacity: [0, 1, 1, 0] }
              : { pathLength: 1, opacity: 1 }}
            transition={running
              ? { duration: 4.5, delay: i * 0.22, times: [0, 0.45, 0.8, 1], repeat: Infinity, repeatDelay: 0.7, ease: "easeInOut" }
              : { duration: 0 }}
          />
        ))}
        {map.locations.map((point, i) => (
          <g key={point.label}>
            <circle cx={point.x} cy={point.y} r={i === 0 ? 2 : 1.3} fill="var(--primary)" stroke="white" strokeWidth="0.7" />
            <circle cx={point.x} cy={point.y} r={i === 0 ? 4 : 2.7} fill="none" stroke="var(--primary)" strokeWidth="0.25" opacity="0.3" />
          </g>
        ))}
      </svg>
      <span className="absolute rounded-md border border-border bg-background/95 px-2.5 py-1 text-xs font-medium text-foreground shadow-sm" style={{ left: `${origin.x / map.width * 100}%`, top: `${origin.y / map.height * 100}%`, transform: "translate(-50%, -150%)" }}>Deodhani</span>
    </div>
  )
}
