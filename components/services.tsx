"use client"
import { TextReveal } from "@/components/text-reveal"
import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { IconArrowRight, IconArrowUpRight, IconCheck } from "@tabler/icons-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { buttonVariants } from "@/components/ui/button"
import { SectionMarker } from "@/components/section-marker"
import { services } from "@/lib/company"

export function Services() {
  const [active, setActive] = useState(services[0].id)
  const reducedMotion = useReducedMotion()
  const service = services.find((item) => item.id === active) ?? services[0]

  return (
    <section
      id="data-products"
      aria-labelledby="services-title"
      className="mx-auto max-w-[1660px] px-5 pt-12 pb-20 sm:px-10 lg:px-16 lg:pt-16 lg:pb-28"
    >
      <SectionMarker number="02" title="Services" description="Our offerings" />
      <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <TextReveal as="h2"
          id="services-title"
          className="max-w-3xl text-4xl font-medium leading-[1.1] tracking-[-0.04em] text-balance sm:text-5xl"
        >
          Human expertise.
          <br />
          <span className="text-primary">Across every data format.</span>
        </TextReveal>
        <TextReveal as="p" className="max-w-xs text-base leading-relaxed text-muted-foreground">
          Explore the services that bring structure, meaning, and context to
          your data.
        </TextReveal>
      </div>
      <Tabs
        value={active}
        onValueChange={(value) => setActive(String(value))}
        className="gap-7"
      >
        <div className="overflow-x-auto pb-1">
          <TabsList
            variant="service"
            className="min-w-[780px]"
            aria-label="Data services"
          >
            {services.map((item) => (
              <TabsTrigger key={item.id} value={item.id} className="group">
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <TabsContent value={active}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={reducedMotion ? false : { opacity: 0, filter: "blur(5px)", y: 6 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.25 }}
              exit={
                reducedMotion ? undefined : { opacity: 0, filter: "blur(6px)" }
              }
              className="grid grid-cols-1 overflow-hidden rounded-lg bg-muted/65 lg:grid-cols-[1.1fr_1fr]"
            >
              {/* Media */}
              <div className="relative min-h-64 overflow-hidden bg-muted sm:min-h-80 lg:min-h-[540px]">
                <div className="absolute inset-0">
                  <Image
                    src={`/images/sourcing/${service.image}.jpg`}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-black/10" />

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 px-7 py-6 text-sm text-white/80">
                  <span className="text-white">{service.label} data</span>

                </div>
              </div>

              {/* Spec panel */}
              <div className="relative flex flex-col p-6 sm:p-9 xl:p-12">
                <TextReveal as="p" className="mb-5 text-sm font-medium text-primary">
                  {service.label} annotation & collection
                </TextReveal>

                <motion.h3
                  className="mb-4 text-3xl font-medium leading-tight tracking-[-0.03em] text-balance sm:text-4xl"
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  className="mb-7 text-base leading-relaxed text-muted-foreground"
                >
                  {service.description}
                </motion.p>

                <motion.ul
                  className="mb-8 grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2"
                >
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="flex items-start gap-2 text-sm leading-snug"
                    >
                      <IconCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {tag}
                    </li>
                  ))}
                </motion.ul>

                <motion.div className="mt-auto">
                  <TextReveal as="p" className="mb-3 text-xs font-medium text-muted-foreground">
                    Workflow
                  </TextReveal>
                  <ol className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-2">
                    {service.workflow.map((step, i) => (
                      <li
                        key={step}
                        className="flex items-center gap-2 text-xs"
                      >
                        <span
                          className={
                            i === service.workflow.length - 1
                              ? "text-primary"
                              : "text-foreground"
                          }
                        >
                          {step}
                        </span>
                        {i < service.workflow.length - 1 && (
                          <IconArrowRight
                            className="size-3 text-primary/50"
                            aria-hidden="true"
                          />
                        )}
                      </li>
                    ))}
                  </ol>
                  <a
                    href="#contact"
                    className={buttonVariants({
                      variant: "default",
                      size: "lg",
                      className:
                        "h-11 gap-4 px-5 text-[13px] motion-safe:hover:-translate-y-0.5",
                    })}
                  >
                    Discuss your project
                    <IconArrowUpRight
                      data-icon="inline-end"
                      aria-hidden="true"
                    />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </section>
  )
}
