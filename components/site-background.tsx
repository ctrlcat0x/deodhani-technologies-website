"use client"

import ShapeGrid from "@/components/ShapeGrid"

export function SiteBackground() {
  return (
    <div className="site-background" aria-hidden="true">
      <ShapeGrid
        shape="dot"
        opacity={0.35}
        cellSize={26}
        lineColor="#b9c9db"
        hoverColor="#2f73b0"
        hoverFillColor="#2f73b0"
        direction="diagonal"
        speed={0.25}
        fillOpacity={0.15}
        radius={3.2}
        trail={1}
        glow={0.5}
        twinkle={0.3}
        fade={1}
        clickCascade
        intro={false}
      />
    </div>
  )
}
