"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"

// Illustrative content, pending approved client quotes and attribution.
const testimonials = [
  {
    quote: "Consistent labels helped our team focus on the next stage of our computer vision model.",
    role: "Computer vision team",
    // Unsplash: photo-1494790108377-be9c29b29330 (stock portrait).
    image: "/images/deodhani/testimonial-woman.jpg",
    position: "center 35%",
  },
  {
    quote: "Human review brought the language and context our training data was missing.",
    role: "Language AI team",
    // Unsplash: photo-1500648767791-00dcc994a43e (stock portrait).
    image: "/images/deodhani/testimonial-man.jpg",
    position: "center 35%",
  },
  {
    quote: "A thoughtful approach to speech data, from collection through transcription and review.",
    role: "Speech technology team",
    // Unsplash: photo-1534528741775-53994a69daeb (stock portrait).
    image: "/images/deodhani/testimonial-woman-two.jpg",
    position: "center 35%",
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const section = useRef<HTMLElement>(null)
  const inView = useInView(section, { amount: 0.25 })
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const reducedMotion = useReducedMotion()
  const paused = hovered || focused || reducedMotion
  const testimonial = testimonials[active]
  const ease = [0.22, 1, 0.36, 1] as const
  const duration = reducedMotion ? 0 : 0.45

  useEffect(() => {
    if (!inView || paused) return
    const timer = window.setInterval(() => {
      if (!document.hidden) {
        setActive((current) => (current + 1) % testimonials.length)
      }
    }, 5000)
    return () => window.clearInterval(timer)
  }, [active, inView, paused])

  function move(direction: number) {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length)
  }

  return (
    <section
      ref={section}
      id="testimonials"
      aria-labelledby="testimonials-title"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false)
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault()
          move(event.key === "ArrowLeft" ? -1 : 1)
        }
      }}
      className="overflow-hidden px-5 py-14 sm:px-10 lg:px-16 lg:py-24"
    >
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: reducedMotion ? 0 : 0.7, ease }}
        className="mx-auto grid max-w-[1320px] gap-7 md:grid-cols-[0.95fr_1fr] md:gap-10 lg:gap-16"
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-secondary md:aspect-auto md:min-h-[420px] lg:min-h-[540px] lg:rounded-3xl">
          {testimonials.map(({ image, position }, index) => (
            <motion.div
              key={image}
              initial={false}
              animate={{ opacity: active === index ? 1 : 0, scale: reducedMotion || active === index ? 1 : 1.035 }}
              transition={{ duration, ease }}
              className="absolute inset-0"
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1440px) 45vw, 640px"
                style={{ objectPosition: position }}
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex min-w-0 flex-col md:py-5 lg:py-8">
          <h2 id="testimonials-title" className="text-sm font-medium text-primary sm:text-base">What teams say</h2>
          <div className="mt-7 flex-1 sm:mt-9">
            <AnimatePresence initial={false} mode="wait">
              <motion.figure
                key={testimonial.role}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reducedMotion ? 0 : -8 }}
                transition={{ duration, ease }}
                className="flex h-full flex-col"
              >
                <blockquote className="min-h-[160px] text-[clamp(1.4rem,2.5vw,2.5rem)] leading-[1.3] font-medium tracking-tight sm:min-h-[180px] md:min-h-[220px]">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-7 pb-7 text-sm sm:mt-10 sm:pb-9">
                  <span className="block font-medium">{testimonial.role}</span>
                  <span className="mt-1 block text-muted-foreground">Illustrative testimonial</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-between border-t border-primary/15 pt-5 sm:pt-6">
            <div className="flex gap-1" aria-label="Choose a testimonial">
              {testimonials.map(({ role }, index) => (
                <button
                  key={role}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-pressed={active === index}
                  onClick={() => setActive(index)}
                  className="group flex size-11 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <span className={`h-0.5 w-7 rounded-full transition-colors duration-300 motion-reduce:transition-none ${active === index ? "bg-primary" : "bg-primary/25 group-hover:bg-primary/60"}`} />
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="size-11 rounded-full" aria-label="Previous testimonial" onClick={() => move(-1)}><IconArrowLeft aria-hidden="true" /></Button>
              <Button variant="outline" size="icon" className="size-11 rounded-full" aria-label="Next testimonial" onClick={() => move(1)}><IconArrowRight aria-hidden="true" /></Button>
            </div>
          </div>
          <span role="status" aria-live={paused ? "polite" : "off"} className="sr-only">Testimonial {active + 1} of {testimonials.length}: {testimonial.role}</span>
        </div>
      </motion.div>
    </section>
  )
}
