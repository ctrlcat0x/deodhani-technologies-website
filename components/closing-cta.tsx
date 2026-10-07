import { IconArrowRight } from "@tabler/icons-react"
import { buttonVariants } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"

const strengths = [
  { title: "Human-reviewed", description: "careful annotation and quality checks" },
  { title: "Agile teams", description: "workflows that adapt as projects grow" },
  { title: "Every detail", description: "attention to complex and edge-case data" },
  { title: "Real-world context", description: "understanding beyond the label" },
]

export function ClosingCta() {
  return (
    <section id="get-started" aria-labelledby="closing-cta-title" className="bg-muted/65 px-5 py-16 sm:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] text-center">
        <TextReveal as="p" delay={0} className="mb-4 text-xs font-medium tracking-wide text-muted-foreground">Humans in the data loop</TextReveal>
        <TextReveal as="h2" id="closing-cta-title" className="mx-auto max-w-4xl text-3xl font-medium leading-tight tracking-[-0.035em] text-balance sm:text-4xl lg:text-[44px]">Support your models with human-verified data.</TextReveal>
        <TextReveal as="p" className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Deodhani brings human expertise to computer vision, language, and multimodal data—helping your team build with data it can trust.</TextReveal>
        <div className="mx-auto my-10 grid max-w-6xl grid-cols-1 gap-y-7 min-[480px]:grid-cols-2 lg:my-14 lg:grid-cols-4 lg:gap-y-0">
          {strengths.map((strength, index) => (
            <div key={strength.title} className="px-5 min-[480px]:even:border-l min-[480px]:even:border-border lg:border-l lg:first:border-l-0">
              <TextReveal as="h3" delay={index * 0.06} className="text-xl font-medium tracking-tight sm:text-2xl">{strength.title}</TextReveal>
              <TextReveal as="p" delay={0.12 + index * 0.06} className="mx-auto mt-3 max-w-[220px] text-xs leading-relaxed text-muted-foreground sm:text-sm">{strength.description}</TextReveal>
            </div>
          ))}
        </div>
        <a href="mailto:info@deodhanitechnologies.com" className={buttonVariants({ size: "cta" })}>Get started<IconArrowRight aria-hidden="true" /></a>
      </div>
    </section>
  )
}
