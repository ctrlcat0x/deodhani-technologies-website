import {
  IconAperture,
  IconTopologyStar3,
  IconWaveSine,
} from "@tabler/icons-react"
import { InfiniteSlider } from "@/components/ui/infinite-slider"

const testimonials = [
  {
    quote:
      "Consistent labels helped our team focus on the next stage of our computer vision model.",
    role: "Computer vision team",
    Logo: IconAperture,
    logoStyle: "bg-primary/10 text-primary",
  },
  {
    quote:
      "Human review brought the language and context our training data was missing.",
    role: "Language AI team",
    Logo: IconTopologyStar3,
    logoStyle: "bg-secondary text-foreground",
  },
  {
    quote:
      "A thoughtful approach to speech data, from collection through transcription and review.",
    role: "Speech technology team",
    Logo: IconWaveSine,
    logoStyle: "bg-accent text-accent-foreground",
  },
]

export function TestimonialCarousel() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="overflow-hidden py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1320px]">
        <h2
          id="testimonials-title"
          className="mb-8 px-5 text-2xl font-semibold tracking-tight sm:px-10 sm:text-3xl lg:px-16"
        >
          Client stories
        </h2>
        <InfiniteSlider gap={20} speed={32} speedOnHover={0} className="py-2">
          {testimonials.map(({ quote, role, Logo, logoStyle }) => (
            <article
              key={role}
              className="flex w-[min(86vw,760px)] items-stretch overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div
                aria-hidden="true"
                className={`flex w-1/3 shrink-0 items-center justify-center ${logoStyle}`}
              >
                <Logo className="size-20 sm:size-28" stroke={1.25} />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-5 p-5 sm:gap-7 sm:p-8 lg:p-10">
                <blockquote className="text-base leading-relaxed font-medium text-pretty sm:text-xl lg:text-2xl">
                  “{quote}”
                </blockquote>
                <div>
                  <p className="text-sm font-semibold sm:text-base">{role}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Illustrative testimonial
                  </p>
                </div>
              </div>
            </article>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  )
}
