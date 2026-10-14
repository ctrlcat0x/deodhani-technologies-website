import {
  IconBrandApple,
  IconBrandGoogle,
  IconBrandMercedes,
} from "@tabler/icons-react"
import { InfiniteSlider } from "@/components/ui/infinite-slider"

const testimonials = [
  {
    quote:
      "Consistent labels helped our team focus on the next stage of our computer vision model.",
    role: "Computer vision team",
    company: "Google",
    Logo: IconBrandGoogle,
    logoStyle: "bg-white text-[#4285f4]",
  },
  {
    quote:
      "Human review brought the language and context our training data was missing.",
    role: "Language AI team",
    company: "Mercedes-Benz",
    Logo: IconBrandMercedes,
    logoStyle: "bg-[#f2f5f8] text-[#172b4d]",
  },
  {
    quote:
      "A thoughtful approach to speech data, from collection through transcription and review.",
    role: "Speech technology team",
    company: "Apple",
    Logo: IconBrandApple,
    logoStyle: "bg-[#f4f4f4] text-[#252525]",
  },
  {
    quote:
      "Human review brought the language and context our training data was missing.",
    role: "Language AI team",
    company: "TELUS Digital",
    logoStyle: "bg-[#f2f8f8] text-[#4b286d]",
  },
  {
    quote:
      "A thoughtful approach to speech data, from collection through transcription and review.",
    role: "Speech technology team",
    company: "Appen",
    logoStyle: "bg-[#f4f7fb] text-[#276db4]",
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
        <div className="mb-8 flex flex-col justify-between gap-3 px-5 sm:flex-row sm:items-end sm:px-10 lg:px-16">
        <div>
        <p className="mb-2 text-sm font-semibold tracking-wide text-primary">Illustrative stories</p>
        <h2
          id="testimonials-title"
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Client stories
        </h2>
        </div>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">Example stories shown for illustration; company marks are visual references.</p>
        </div>
        <InfiniteSlider gap={24} speed={32} speedOnHover={0} className="py-2">
          {testimonials.map(({ quote, role, company, Logo, logoStyle }) => (
            <article
              key={company}
              className="flex h-[300px] w-[min(82vw,620px)] items-stretch overflow-hidden rounded-2xl border border-border bg-card sm:h-[340px]"
            >
              <div
                aria-hidden="true"
                className={`flex w-[36%] shrink-0 flex-col items-center justify-center gap-4 px-3 ${logoStyle}`}
              >
                {Logo ? <Logo className="size-14 sm:size-[4.5rem]" stroke={1.5} /> : <span className="text-2xl font-semibold tracking-tight">TELUS</span>}
                <span className="text-center text-xs font-semibold leading-tight sm:text-sm">{company}</span>
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-5 p-5 sm:gap-7 sm:p-7 lg:p-8">
                <blockquote className="text-base leading-relaxed font-medium text-pretty sm:text-lg lg:text-xl">
                  “{quote}”
                </blockquote>
                <div>
                  <p className="text-sm font-semibold sm:text-base">{role}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Illustrative testimonial · no client attribution
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
