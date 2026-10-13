"use client"

import { IconArrowUpRight } from "@tabler/icons-react"
import { buttonVariants } from "@/components/ui/button"
import ParticleText from "@/components/ParticleText"
import { TextReveal } from "@/components/text-reveal"

export function ClosingCta() {
  return (
    <section
      id="get-started"
      aria-labelledby="closing-cta-title"
      className="closing-stage"
    >
      <div className="closing-copy">
        <TextReveal as="p" className="text-sm text-muted-foreground">
          Have a data project?
        </TextReveal>
        <TextReveal as="h2" id="closing-cta-title" className="particle-heading">
          <ParticleText
            text="Talk to our team"
            fontSize="clamp(32px, 5.7vw, 82px)"
            fontWeight={650}
            color="#12294d"
            highlightColor="#2f73b0"
            particleSize={1.3}
            density={2}
            idleDrift={0}
            scatter={90}
            trigger="hover"
          />
        </TextReveal>
        <TextReveal
          as="p"
          delay={0.12}
          className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          Tell us what data you need.
          <br />
          We’ll help you plan the next steps.
        </TextReveal>
        <TextReveal as="div" delay={0.22}>
          <a
            href="/contact#inquiry"
            className={buttonVariants({ size: "cta" })}
          >
            Let’s talk about your project{" "}
            <IconArrowUpRight data-icon="inline-end" aria-hidden="true" />
          </a>
        </TextReveal>
      </div>
    </section>
  )
}
