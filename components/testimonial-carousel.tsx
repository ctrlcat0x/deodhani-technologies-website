import Image from "next/image"
import { InfiniteSlider } from "@/components/ui/infinite-slider"

const testimonials = [
  {
    quote: "The team helped us turn complex visual data into clear, consistent labels.",
    role: "Computer vision team",
    company: "Google",
    logo: "/images/companies/google.svg",
    logoStyle: "bg-white",
  },
  {
    quote: "Careful annotation helped us bring greater consistency to our vehicle data.",
    role: "Automotive AI team",
    company: "Mercedes-Benz",
    logo: "/images/companies/mercedes-benz.png",
    logoStyle: "bg-white",
    logoTextStyle: "text-foreground",
  },
  {
    quote: "Thoughtful review made our speech data more accurate and useful.",
    role: "Speech technology team",
    company: "Apple",
    logo: "/images/companies/apple.svg",
    logoStyle: "bg-[#252525]",
    logoTextStyle: "text-white",
  },
  {
    quote: "Reliable data collection gave our AI projects a strong place to start.",
    role: "AI data team",
    company: "Firecrawl",
    logo: "/images/companies/firecrawl.svg",
    logoStyle: "bg-[#171717]",
    logoTextStyle: "text-white",
  },
  {
    quote: "Their care with language and context helped us build better datasets.",
    role: "Language AI team",
    company: "TELUS Digital",
    logo: "/images/companies/telus-digital.png",
    logoStyle: "bg-white",
  },
  {
    quote: "Clear communication and careful checks kept every batch on track.",
    role: "Data operations team",
    company: "Appen",
    logo: "/images/companies/appen.png",
    logoStyle: "bg-white",
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
              Illustrative stories
            </p>
            <h2
              id="testimonials-title"
              className="text-[clamp(34px,4.2vw,66px)] leading-[1.08] font-semibold tracking-[-0.05em]"
            >
              Client stories
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            Sample testimonial drafts for illustration; they are not client
            endorsements.
          </p>
        </div>
        <InfiniteSlider gap={24} speed={32} speedOnHover={0} className="py-2">
          {testimonials.map(({ quote, role, company, logo, logoStyle, logoTextStyle }) => (
            <article
              key={company}
              className="flex h-[300px] w-[min(82vw,620px)] items-stretch overflow-hidden rounded-2xl border border-border bg-card sm:h-[340px]"
            >
              <div
                aria-hidden="true"
                className={`flex w-[36%] shrink-0 flex-col items-center justify-center gap-4 px-3 ${logoStyle}`}
              >
                <Image
                  src={logo}
                  alt=""
                  aria-hidden="true"
                  width={150}
                  height={64}
                  className="h-auto max-h-16 w-auto max-w-full object-contain"
                  unoptimized
                />
                {["Apple", "Mercedes-Benz", "Firecrawl"].includes(company) && (
                  <span className={`text-center text-xs font-semibold leading-tight sm:text-sm ${logoTextStyle}`}>
                    {company}
                  </span>
                )}
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-5 p-5 sm:gap-7 sm:p-7 lg:p-8">
                <blockquote className="text-base leading-relaxed font-medium text-pretty sm:text-lg lg:text-xl">
                  “{quote}”
                </blockquote>
                <div>
                  <p className="text-sm font-semibold sm:text-base">{role}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Illustrative example · not a client quote
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
