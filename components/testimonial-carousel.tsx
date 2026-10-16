import Image from "next/image"
import { InfiniteSlider } from "@/components/ui/infinite-slider"

const testimonials = [
  {
    quote:
      "The team brought care and consistency to a large, multilingual data program.",
    role: "Data operations team",
    company: "Appen",
    logo: "/images/companies/appen.png",
  },
  {
    quote:
      "Clear communication and thoughtful reviews helped every delivery stay on track.",
    role: "Language data team",
    company: "TELUS",
    logo: "/images/companies/telus-digital.png",
  },
  {
    quote:
      "A dependable partner who handled detailed requirements with care and precision.",
    role: "Project delivery team",
    company: "BNS",
    logo: "/images/companies/tsg.png",
    logoCaption: "BNS Enterprises",
  },
  {
    quote:
      "Their responsive team made complex data needs easier to plan and deliver.",
    role: "AI solutions team",
    company: "Synthdata",
    logo: "/images/companies/synthdata.png",
  },
  {
    quote:
      "Reliable coordination and careful quality checks helped us move forward with confidence.",
    role: "Localization team",
    company: "Lionbridge",
    logo: "/images/companies/lionbridge.png",
  },
]

export function TestimonialCarousel() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="overflow-hidden py-12 sm:py-14 lg:py-[76px]"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-9 flex flex-col justify-between gap-3 px-5 sm:flex-row sm:items-end sm:px-10 lg:px-16">
          <div>
            <p className="mb-4 text-[13px] font-semibold tracking-wide text-primary">
              Client feedback
            </p>
            <h2
              id="testimonials-title"
              className="text-[clamp(34px,4.2vw,66px)] leading-[1.08] font-semibold tracking-[-0.05em]"
            >
              Client stories
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            Illustrative testimonial drafts; replace with approved client quotes
            before publication.
          </p>
        </div>
        <InfiniteSlider gap={24} speed={32} speedOnHover={0} className="py-2">
          {testimonials.map(({ quote, role, company, logo, logoCaption }) => (
            <article
              key={company}
              className="flex h-[300px] w-[min(82vw,620px)] items-stretch overflow-hidden rounded-2xl border border-border bg-card sm:h-[340px]"
            >
              <div
                aria-hidden="true"
                className="flex w-[36%] shrink-0 flex-col items-center justify-center gap-4 bg-white px-3"
              >
                <Image
                  src={logo}
                  alt=""
                  width={150}
                  height={64}
                  className="h-auto max-h-16 w-auto max-w-full object-contain"
                  unoptimized
                />
                {logoCaption && (
                  <span className="text-center text-xs leading-tight font-semibold text-foreground sm:text-sm">
                    {logoCaption}
                  </span>
                )}
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-5 p-5 sm:gap-7 sm:p-7 lg:p-8">
                <blockquote className="text-base leading-relaxed font-medium text-pretty sm:text-lg lg:text-xl">
                  “{quote}”
                </blockquote>
                <p className="text-sm font-semibold sm:text-base">{role}</p>
              </div>
            </article>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  )
}
