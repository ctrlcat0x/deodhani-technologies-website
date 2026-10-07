import { TextReveal } from "@/components/text-reveal"
import { IconArrowRight } from "@tabler/icons-react"
import { buttonVariants } from "@/components/ui/button"
import { SectionMarker } from "@/components/section-marker"
import { LabelQualityIllustration, AccuracyIllustration, HumanTeamIllustration, ModelDataIllustration } from "@/components/capability-illustrations"

const capabilities = [
  { illustration: LabelQualityIllustration, title: "Consistent labeling quality at scale" },
  { illustration: AccuracyIllustration, title: "Annotation aligned with your accuracy goals" },
  { illustration: HumanTeamIllustration, title: "Human expertise throughout the workflow" },
  { illustration: ModelDataIllustration, title: "Data that supports model performance" },
]

export function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="bg-muted/65">
      <div className="mx-auto max-w-[1660px] px-5 py-16 sm:px-10 lg:px-16 lg:py-20">
        <SectionMarker number="03" title="Capabilities" description="What we do" />
        <TextReveal as="h2" id="capabilities-title" className="max-w-4xl text-4xl font-medium leading-[1.15] tracking-[-0.04em] text-balance sm:text-5xl">Annotation services that drive your AI workflows.</TextReveal>
        <TextReveal as="p" className="mt-7 max-w-3xl text-base leading-relaxed text-muted-foreground sm:mt-9 sm:text-lg">Work with Deodhani on the data behind your next model. Our annotation and review workflows bring structure to images, text, speech, and documents. We align labeling guidelines with your project, review the details that matter, and help maintain consistency as your dataset grows.</TextReveal>
        <a href="#contact" className={buttonVariants({ size: "cta", className: "mt-8 sm:mt-10" })}>Get started<IconArrowRight aria-hidden="true" /></a>
        <div className="mt-14 grid grid-cols-1 gap-10 min-[420px]:grid-cols-2 sm:gap-12 lg:mt-20 lg:grid-cols-4 lg:gap-10">
          {capabilities.map(({ illustration: Illustration, title }) => (
            <div key={title}>
              <Illustration />
              <TextReveal as="h3" className="mt-5 max-w-[270px] text-xl font-medium leading-snug tracking-tight lg:text-[22px]">{title}</TextReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
