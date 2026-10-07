"use client"

import { useEffect, useId, useRef, useState, type ReactNode } from "react"
import { motion, MotionConfig, useInView, useReducedMotion } from "motion/react"

type LoopTiming = (delay?: number, duration?: number) => {
  duration: number
  delay: number
  repeat: number
  repeatType: "reverse"
  repeatDelay: number
}

function Illustration({ children }: { children: (gradient: string, timing: LoopTiming) => ReactNode }) {
  const gradient = useId()
  const reducedMotion = useReducedMotion()
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { amount: 0.3 })
  const [tabVisible, setTabVisible] = useState(true)

  useEffect(() => {
    const updateVisibility = () => setTabVisible(document.visibilityState === "visible")
    updateVisibility()
    document.addEventListener("visibilitychange", updateVisibility)
    return () => document.removeEventListener("visibilitychange", updateVisibility)
  }, [])

  const running = inView && tabVisible && !reducedMotion
  const timing: LoopTiming = (delay = 0, duration = 1.2) => ({
    duration: reducedMotion ? 0 : duration,
    delay: reducedMotion ? 0 : delay,
    repeat: running ? Infinity : 0,
    repeatType: "reverse",
    repeatDelay: reducedMotion ? 0 : 0.8,
  })
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}>
    <motion.svg ref={ref} initial={false} animate={reducedMotion || running ? "active" : "rest"} viewBox="0 0 112 112" fill="none" className="size-24 text-foreground sm:size-28" aria-hidden="true">
      <defs>
        <linearGradient id={gradient} x1="30" y1="28" x2="72" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3c82c2" />
          <stop offset="1" stopColor="#b9e6f2" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      {children(`url(#${gradient})`, timing)}
    </motion.svg>
    </MotionConfig>
  )
}

export function LabelQualityIllustration() {
  return <Illustration>{(fill, timing) => <>
    <path d="M25 14h43l19 19v65H25z" stroke="currentColor" strokeWidth="1.3" />
    <path d="M68 14v20h19" stroke="currentColor" strokeWidth="1.3" />
    <path d="M31 21h9v9h-9zM72 82h9v9h-9z" stroke="currentColor" />
    <rect x="37" y="43" width="38" height="32" rx="2" fill={fill} />
    <g stroke="white" strokeWidth="2">
      {["M42 48h8v8h-8z", "M61 48h8v8h-8z", "M42 63h8v7h-8z", "M61 63h8v7h-8z"].map((d, i) => (
        <motion.path key={d} d={d} variants={{ rest: { opacity: 0.15, pathLength: 0 }, active: { opacity: 1, pathLength: 1, transition: timing(i * 0.13) } }} />
      ))}
    </g>
    <motion.path variants={{ rest: { pathLength: 0, opacity: 0 }, active: { pathLength: 1, opacity: 1, transition: timing(0.65) } }} d="m49 82 4 4 9-10" stroke="var(--primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </>}</Illustration>
}

export function AccuracyIllustration() {
  return <Illustration>{(fill, timing) => <>
    <motion.circle variants={{ rest: { opacity: 0.4, scale: 0.85 }, active: { opacity: 1, scale: 1, transition: timing(0.35, 1.4) } }} style={{ transformOrigin: "53px 59px" }} cx="53" cy="59" r="25" fill={fill} />
    <path d="M53 23a36 36 0 1 0 36 36M53 30a29 29 0 1 0 29 29" stroke="currentColor" strokeWidth="1.3" />
    <path d="M53 16v14M10 59h14M53 88v14M82 59h14" stroke="currentColor" strokeWidth="1.3" />
    <motion.path variants={{ rest: { x: 12, y: -12, opacity: 0 }, active: { x: 0, y: 0, opacity: 1, transition: timing() } }} d="m53 59 31-31m-1 1 1-10 9-9 1 8 8 1-9 9z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <circle cx="53" cy="59" r="3" fill="var(--primary)" />
  </>}</Illustration>
}

export function HumanTeamIllustration() {
  return <Illustration>{(fill, timing) => <>
    <path d="M21 40h32v10c-12-6-12 13 0 8v16H42c6-12-13-12-8 0H21z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M21 74h13c-5-12 14-12 8 0h11v11c-12-6-12 13 0 8v10H21zM53 74h12c-5 12 14 12 8 0h12v29H53V93c-12 5-12-14 0-8z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <motion.path style={{ transformOrigin: "80px 40px" }} variants={{ rest: { x: 0, y: 0, rotate: 0 }, active: { x: -10, y: 20, rotate: -16, transition: timing(0.2, 1.6) } }} d="m70 18 31 9-9 31-12-4c3 13-15 8-8-2l-11-3 3-12c-13 3-8-15 2-8z" fill={fill} />
  </>}</Illustration>
}

export function ModelDataIllustration() {
  return <Illustration>{(fill, timing) => <>
    <motion.g variants={{ rest: { x: -5, y: 7, opacity: 0.3 }, active: { x: 0, y: 0, opacity: 1, transition: timing() } }}>
      <path d="M32 29V17h22l6 9h36v58h-7M24 43V32h22l6 9h36v51h-7" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </motion.g>
    <path d="M16 48h24l7 10h33v44H16z" fill={fill} />
    <path d="M27 88h8v7h-8zM40 88h29v7H40z" stroke="currentColor" strokeWidth="1.1" />
    <motion.path variants={{ rest: { pathLength: 0, opacity: 0 }, active: { pathLength: 1, opacity: 1, transition: timing(0.25, 1.4) } }} d="m29 77 9-8 10 5 16-12m-7 0h7v7" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </>}</Illustration>
}
