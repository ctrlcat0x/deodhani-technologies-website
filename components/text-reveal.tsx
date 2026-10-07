"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

const elements = { h1: motion.h1, h2: motion.h2, h3: motion.h3, p: motion.p }

type TextRevealProps = {
  as: keyof typeof elements
  children: ReactNode
  className?: string
  id?: string
  delay?: number
}

export function TextReveal({ as, children, delay, ...props }: TextRevealProps) {
  const reducedMotion = useReducedMotion()
  const Element = elements[as]

  return (
    <Element
      {...props}
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: reducedMotion ? 0 : 0.65,
        delay: reducedMotion ? 0 : (delay ?? (as === "p" ? 0.12 : 0)),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Element>
  )
}
