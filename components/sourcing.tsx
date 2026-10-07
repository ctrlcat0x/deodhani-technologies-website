"use client"

import { TextReveal } from "@/components/text-reveal"
import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { SectionMarker } from "@/components/section-marker"

const sources = [
  {
    image: "field",
    title: "Field data",
    description: "Real-world environments, captured with purpose.",
    span: "lg:col-span-3",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 26vw",
  },
  {
    image: "voice",
    title: "Speech & voice",
    description: "Recordings that preserve the human voice.",
    span: "lg:col-span-3",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 26vw",
  },
  {
    image: "video",
    title: "Video data",
    description: "Everyday activity, seen in motion.",
    span: "lg:col-span-6",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 26vw",
  },
  {
    image: "camera",
    title: "Image data",
    description: "Objects, scenes, and details that matter.",
    span: "lg:col-span-3",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 26vw",
  },
  {
    image: "language",
    title: "Multilingual data",
    description: "Language from people and communities.",
    span: "lg:col-span-3",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 26vw",
  },
  {
    image: "expert",
    title: "Human evaluation",
    description: "Context and judgment from human reviewers.",
    span: "lg:col-span-6",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw",
  },
]

const EASE = [0.22, 1, 0.36, 1] as const

/** Grid orchestrates the staggered card reveal. */
const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
}

const card = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export function Sourcing() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="sourcing"
      aria-labelledby="sourcing-title"
      className="mx-auto max-w-[1660px] px-5 pt-20 pb-12 sm:px-10 lg:px-16 lg:pt-28"
    >
      <SectionMarker
        number="01"
        title="Sourcing"
        description="The source of intelligence"
      />
      <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <TextReveal as="h2"
          id="sourcing-title"
          className="max-w-2xl text-4xl font-medium leading-[1.1] tracking-[-0.04em] text-balance sm:text-5xl"
        >
          Data starts in the <span className="text-primary">real world.</span>
        </TextReveal>
        <TextReveal as="p" className="max-w-sm text-base leading-relaxed text-muted-foreground">
          Images, speech, video, and text. Source the raw material your models
          need, with people and context at the center.
        </TextReveal>
      </div>

      <motion.div
        variants={grid}
        initial={reducedMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12"
      >
        {sources.map((source) => (
          <motion.article
            key={source.title}
            variants={reducedMotion ? undefined : card}
            className={`group relative h-72 overflow-hidden rounded-lg bg-muted sm:h-80 lg:h-80 ${source.span}`}
          >
            <Image
              src={`/images/sourcing/${source.image}.jpg`}
              alt={source.description}
              fill
              sizes={source.sizes}
              className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.06] motion-reduce:transition-none"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
              <TextReveal as="h3" className="mb-2 text-xl font-medium tracking-tight text-white">
                {source.title}
              </TextReveal>
              <TextReveal as="p" className="max-w-sm text-sm leading-relaxed text-white/85">
                {source.description}
              </TextReveal>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
