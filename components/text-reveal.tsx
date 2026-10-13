"use client"

import type { AriaAttributes, ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

const elements = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  div: motion.div,
  section: motion.section,
  article: motion.article,
  figure: motion.figure,
  nav: motion.nav,
  li: motion.li,
}

type TextRevealProps = AriaAttributes & {
  as: keyof typeof elements
  children: ReactNode
  className?: string
  id?: string
  delay?: number
  effect?: "rise" | "image"
}

export function TextReveal({
  as,
  children,
  delay,
  effect = "rise",
  ...props
}: TextRevealProps) {
  const reducedMotion = useReducedMotion()
  const Element = elements[as]

  return (
    <Element
      {...props}
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: effect === "image" ? 32 : 20,
              scale: effect === "image" ? 0.97 : 1,
            }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reducedMotion ? 0 : effect === "image" ? 0.9 : 0.7,
        delay: reducedMotion ? 0 : (delay ?? (as === "p" ? 0.08 : 0)),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Element>
  )
}
