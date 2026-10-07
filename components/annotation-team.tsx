import { TextReveal } from "@/components/text-reveal"
import { IconArrowUpRight, IconWorld, IconArrowsMaximize, IconProgressCheck, IconShieldCheck } from "@tabler/icons-react"
import { buttonVariants } from "@/components/ui/button"
import { WorldMap } from "@/components/world-map"

const capabilities = [
  { icon: IconWorld, title: "Human understanding, across languages", description: "Data shaped by the people and contexts behind it." },
  { icon: IconProgressCheck, title: "A workflow built around your project", description: "From your initial brief to the final dataset." },
  { icon: IconArrowsMaximize, title: "Support as your data needs grow", description: "Collection and annotation for every stage of development." },
  { icon: IconShieldCheck, title: "Quality considered at every step", description: "Clear guidelines, careful labeling, and human review." },
]

export function AnnotationTeam() {
  return (
    <section id="annotation-team" aria-labelledby="annotation-team-title" className="mx-auto max-w-[1660px] px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="relative isolate grid items-center gap-8 lg:min-h-[470px] lg:grid-cols-[1.1fr_1fr] lg:gap-0">
        <div className="relative z-10 max-w-2xl lg:py-12">
          <TextReveal as="h2" id="annotation-team-title" className="text-4xl font-medium leading-[1.1] tracking-[-0.04em] text-balance sm:text-5xl xl:text-[54px]">Your data. Our people.<br />Better AI, together.</TextReveal>
          <TextReveal as="p" className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">Bring your next dataset to life with Deodhani. We help collect, annotate, and review images, text, voice, and documents so your team can focus on what comes next.</TextReveal>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className={buttonVariants({ size: "cta" })}>Discuss your project<IconArrowUpRight aria-hidden="true" /></a>
            <a href="#data-products" className={buttonVariants({ variant: "outline", size: "cta" })}>Explore services<IconArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="relative -z-10 lg:-ml-28 lg:w-[calc(100%+7rem)] xl:-ml-40 xl:w-[calc(100%+10rem)]">
          <WorldMap />
          <TextReveal as="p" className="mt-3 text-center text-xs text-muted-foreground">Built for data that reflects a connected world.</TextReveal>
        </div>
      </div>
      <div className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:mt-14">
        {capabilities.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex gap-4 border-t border-border py-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary"><Icon className="size-5" stroke={1.6} aria-hidden="true" /></span>
            <div><TextReveal as="h3" className="text-sm font-medium sm:text-base">{title}</TextReveal><TextReveal as="p" className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</TextReveal></div>
          </div>
        ))}
      </div>
    </section>
  )
}
