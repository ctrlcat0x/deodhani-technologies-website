"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "motion/react"
import { IconArrowLeft, IconArrowRight, IconQuote, IconScan, IconMessageLanguage, IconMicrophone, IconFileText, IconCar } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"

// Preview content only. Replace with approved quotes and attribution before publishing.
const testimonials = [
  { icon: IconScan, quote: "Consistent labels helped our team focus on the next stage of our computer vision model.", role: "Computer vision team" },
  { icon: IconMessageLanguage, quote: "Human review brought the language and context our training data was missing.", role: "Language AI team" },
  { icon: IconMicrophone, quote: "A thoughtful approach to speech data, from collection through transcription and review.", role: "Speech technology team" },
  { icon: IconFileText, quote: "Complex documents became structured data our team could put to work.", role: "Document intelligence team" },
  { icon: IconCar, quote: "Careful attention to edge cases made our annotation workflow easier to manage.", role: "Mobility AI team" },
]

export function Testimonials() {
  const track = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const [edges, setEdges] = useState({ start: true, end: false })

  function updateEdges() {
    const element = track.current
    if (!element) return
    setEdges({ start: element.scrollLeft <= 2, end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2 })
  }

  useEffect(() => {
    const element = track.current
    if (!element) return
    const observer = new ResizeObserver(updateEdges)
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  function move(direction: number) {
    const element = track.current
    if (!element) return
    const card = element.firstElementChild as HTMLElement | null
    element.scrollBy({ left: direction * ((card?.offsetWidth ?? 320) + 16), behavior: reducedMotion ? "instant" : "smooth" })
  }

  return (
    <section aria-labelledby="testimonials-title" aria-roledescription="carousel" className="overflow-hidden bg-muted px-5 py-14 sm:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-[1532px]">
        <div
          ref={track}
          onScroll={updateEdges}
          tabIndex={0}
          aria-label="Sample client testimonials. Use the arrow buttons or left and right arrow keys to browse."
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault()
              move(event.key === "ArrowLeft" ? -1 : 1)
            }
          }}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-2xl pb-2 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map(({ icon: Icon, quote, role }, index) => (
            <figure key={role} aria-label={`${index + 1} of ${testimonials.length}`} className="flex min-h-[300px] w-[85%] shrink-0 snap-start flex-col rounded-2xl bg-background p-6 sm:w-[calc((100%-16px)/2)] sm:p-7 lg:w-[calc((100%-48px)/3.5)]">
              <div className="mb-8 flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-lg bg-accent text-primary"><Icon className="size-6" stroke={1.5} aria-hidden="true" /></span>
                <IconQuote className="size-6 text-primary/25" aria-hidden="true" />
              </div>
              <blockquote className="mb-8 text-lg leading-relaxed tracking-tight text-foreground">{quote}</blockquote>
              <figcaption className="mt-auto text-xs leading-relaxed text-muted-foreground"><span className="block font-medium text-foreground">{role}</span><span>Sample testimonial</span></figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-7 flex items-end justify-between gap-6 sm:mt-9">
          <div>
            <TextReveal as="h2" id="testimonials-title" className="text-2xl font-medium tracking-tight sm:text-3xl">Human expertise. Shared success.</TextReveal>
            <p className="mt-2 text-xs text-muted-foreground">Illustrative quotes — client stories coming soon.</p>
          </div>
          <div className="flex shrink-0 gap-2">
            <Button variant="outline" size="icon" aria-label="Previous testimonial" disabled={edges.start} onClick={() => move(-1)}><IconArrowLeft aria-hidden="true" /></Button>
            <Button variant="outline" size="icon" aria-label="Next testimonial" disabled={edges.end} onClick={() => move(1)}><IconArrowRight aria-hidden="true" /></Button>
          </div>
        </div>
      </div>
    </section>
  )
}
