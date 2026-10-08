"use client"

import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function HeroCarousel({
  images,
}: {
  images: { src: string; alt: string }[]
}) {
  const [index, setIndex] = useState(0)
  const [moving, setMoving] = useState(false)
  const [paused, setPaused] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (paused || moving || reducedMotion || images.length < 2) return
    const timer = window.setTimeout(() => {
      setMoving(true)
      setIndex((current) => (current + 1) % images.length)
    }, 2000)
    return () => window.clearTimeout(timer)
  }, [index, images.length, moving, paused, reducedMotion])

  return (
    <div
      className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-border bg-foreground shadow-xl shadow-primary/10 sm:h-[520px] lg:h-[560px]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Data annotation examples"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
      }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ x: reducedMotion ? 0 : "100%" }}
          animate={{ x: 0 }}
          exit={{ x: reducedMotion ? 0 : "-100%" }}
          transition={{
            duration: reducedMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={() => setMoving(false)}
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            loading="eager"
            className="object-cover"
            sizes="(min-width: 1660px) 680px, (min-width: 1024px) 45vw, 100vw"
            unoptimized={images[index].src.endsWith(".svg")}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-gradient-to-t from-black/50 to-transparent px-5 pt-12 pb-5">
        {images.map((image, slide) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Show image ${slide + 1}`}
            aria-current={slide === index ? "true" : undefined}
            onClick={() => {
              if (slide === index || moving) return
              setMoving(true)
              setIndex(slide)
            }}
            className="group flex h-7 w-7 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 group-hover:bg-white",
                slide === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
