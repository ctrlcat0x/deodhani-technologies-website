"use client"

// Adapted from @ui-layouts/testimonial-carousel.
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useInView, useReducedMotion } from "motion/react"
import {
  IconArrowLeft,
  IconArrowRight,
  IconStarFilled,
} from "@tabler/icons-react"
import { buttonVariants } from "@/components/ui/button"
import {
  Carousel,
  SliderContainer,
  Slider,
  SliderPrevButton,
  SliderNextButton,
  useCarousel,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

// Illustrative content, pending approved client quotes and attribution.
const testimonials = [
  {
    quote:
      "Consistent labels helped our team focus on the next stage of our computer vision model.",
    role: "Computer vision team",
    // Unsplash: photo-1494790108377-be9c29b29330 (stock portrait).
    image: "/images/deodhani/testimonial-woman.jpg",
    position: "center 35%",
  },
  {
    quote:
      "Human review brought the language and context our training data was missing.",
    role: "Language AI team",
    // Unsplash: photo-1500648767791-00dcc994a43e (stock portrait).
    image: "/images/deodhani/testimonial-man.jpg",
    position: "center 35%",
  },
  {
    quote:
      "A thoughtful approach to speech data, from collection through transcription and review.",
    role: "Speech technology team",
    // Unsplash: photo-1534528741775-53994a69daeb (stock portrait).
    image: "/images/deodhani/testimonial-woman-two.jpg",
    position: "center 35%",
  },
]

function TestimonialSlides({ paused }: { paused: boolean }) {
  const { emblaApi, selectedIndex } = useCarousel()

  useEffect(() => {
    const autoplay = emblaApi?.plugins().autoplay
    if (!autoplay) return
    if (paused) autoplay.stop()
    else autoplay.play()
  }, [emblaApi, paused])

  const navigationClassName = cn(
    buttonVariants({ variant: "secondary", size: "icon" }),
    "size-12 rounded-full border border-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
  )

  return (
    <>
      <SliderContainer>
        {testimonials.map((testimonial, index) => (
          <Slider
            key={testimonial.role}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${testimonials.length}`}
            aria-hidden={selectedIndex !== index}
            inert={selectedIndex !== index}
          >
            <div className="grid h-full grid-cols-1 md:grid-cols-2">
              <div className="relative m-4 aspect-[16/11] overflow-hidden bg-secondary sm:m-5">
                <Image
                  src={testimonial.image}
                  alt=""
                  unoptimized
                  width={1000}
                  height={1500}
                  loading="eager"
                  sizes="(max-width: 767px) 90vw, (max-width: 1440px) 45vw, 640px"
                  className="absolute inset-0 size-full object-cover"
                  style={{ objectPosition: testimonial.position }}
                />
              </div>
              <figure className="flex h-full flex-col border-t border-border md:border-t-0 md:border-l">
                <figcaption className="relative flex items-center gap-4 overflow-hidden border-b border-border bg-muted p-4 sm:p-5">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent_0px_7px,var(--border)_7px_8px)] opacity-40"
                  />
                  <div className="relative size-14 shrink-0 overflow-hidden rounded-2xl sm:size-16">
                    <Image
                      src={testimonial.image}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative min-w-0">
                    <p className="text-base font-semibold sm:text-lg">
                      {testimonial.role}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Illustrative testimonial
                    </p>
                  </div>
                  <div
                    aria-hidden="true"
                    className="relative ml-auto hidden gap-1 text-primary xl:flex"
                  >
                    {Array.from({ length: 5 }, (_, star) => (
                      <IconStarFilled key={star} className="size-4" />
                    ))}
                  </div>
                </figcaption>
                <blockquote className="flex-1 p-5 text-[clamp(1.35rem,2vw,2rem)] leading-relaxed font-medium text-pretty sm:p-6">
                  “{testimonial.quote}”
                </blockquote>
                <div className="flex gap-3 p-5 sm:p-6">
                  <SliderPrevButton
                    className={navigationClassName}
                    aria-label="Previous testimonial"
                  >
                    <IconArrowLeft aria-hidden="true" />
                  </SliderPrevButton>
                  <SliderNextButton
                    className={navigationClassName}
                    aria-label="Next testimonial"
                  >
                    <IconArrowRight aria-hidden="true" />
                  </SliderNextButton>
                </div>
              </figure>
            </div>
          </Slider>
        ))}
      </SliderContainer>
      <span
        className="sr-only"
        role="status"
        aria-live={paused ? "polite" : "off"}
      >
        Testimonial {selectedIndex + 1} of {testimonials.length}:{" "}
        {testimonials[selectedIndex].role}
      </span>
    </>
  )
}

export function TestimonialCarousel() {
  const section = useRef<HTMLElement>(null)
  const inView = useInView(section, { amount: 0.25 })
  const reducedMotion = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [autoplay] = useState(() =>
    Autoplay({
      delay: 5000,
      playOnInit: false,
      stopOnInteraction: false,
      stopOnFocusIn: false,
    })
  )
  const paused = !inView || !!reducedMotion || hovered || focused

  return (
    <section
      ref={section}
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="px-5 py-14 sm:px-10 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1320px] bg-background">
        <div className="flex flex-col gap-5 px-5 pt-2 pb-12 text-center sm:pb-16">
          <p className="text-sm font-medium tracking-wider text-primary uppercase">
            « Testimonials »
          </p>
          <h2
            id="testimonials-title"
            className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Testimonials &amp; Social Proof
          </h2>
        </div>
        <Carousel
          options={{ loop: true, duration: reducedMotion ? 0 : 25 }}
          plugins={[autoplay]}
          aria-labelledby="testimonials-title"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget))
              setFocused(false)
          }}
        >
          <TestimonialSlides paused={paused} />
        </Carousel>
      </div>
    </section>
  )
}
