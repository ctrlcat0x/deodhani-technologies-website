"use client"

import { useMemo, useRef } from "react"
import { motion, useReducedMotion } from "motion/react"
import DottedMap from "dotted-map"
import Image from "next/image"

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string }
    end: { lat: number; lng: number; label?: string }
  }>
  lineColor?: string
}

export function WorldMap({ dots = [], lineColor = "#2f73b0" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const reducedMotion = useReducedMotion()
  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" })
    return map.getSVG({ radius: 0.22, color: "#2f73b040", shape: "circle", backgroundColor: "transparent" })
  }, [])

  const projectPoint = (lat: number, lng: number) => ({
    x: (lng + 180) * (800 / 360),
    y: (90 - lat) * (400 / 180),
  })

  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2
    const midY = Math.min(start.y, end.y) - 50
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
  }

  return (
    <div className="relative aspect-[2/1] w-full" role="img" aria-label="Illustrative dotted world map">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="pointer-events-none size-full select-none object-contain"
        alt=""
        height={495}
        width={1056}
        draggable={false}
        unoptimized
      />
      <svg ref={svgRef} viewBox="0 0 800 400" className="pointer-events-none absolute inset-0 size-full select-none" aria-hidden="true">
        {dots.map((dot, index) => {
          const start = projectPoint(dot.start.lat, dot.start.lng)
          const end = projectPoint(dot.end.lat, dot.end.lng)
          return <g key={`route-${index}`}>
            <motion.path d={createCurvedPath(start, end)} fill="none" stroke="url(#map-route-gradient)" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reducedMotion ? 0 : 1, delay: reducedMotion ? 0 : index * 0.35, ease: "easeOut" }} />
            {[start, end].map((point, pointIndex) => <g key={pointIndex}>
              <circle cx={point.x} cy={point.y} r="3" fill={lineColor} />
              {!reducedMotion && <circle cx={point.x} cy={point.y} r="3" fill={lineColor} opacity="0.45">
                <animate attributeName="r" from="3" to="10" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.45" to="0" dur="1.5s" repeatCount="indefinite" />
              </circle>}
            </g>)}
          </g>
        })}
        <defs>
          <linearGradient id="map-route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="8%" stopColor={lineColor} />
            <stop offset="92%" stopColor={lineColor} />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
