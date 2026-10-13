import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { IconArrowUpRight, IconCheck } from "@tabler/icons-react"
import { servicePages } from "@/lib/service-pages"
import { PageIntro } from "@/components/page-intro"
import { buttonVariants } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = servicePages.find((item) => item.slug === slug)
  if (!service) notFound()
  return {
    title: `${service.label} | Deodhani Technologies`,
    description: service.description,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = servicePages.find((item) => item.slug === slug)
  if (!service) notFound()
  return (
    <>
      <PageIntro {...service} />
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-16 pt-4 pb-16 sm:gap-24 sm:pt-8 sm:pb-24">
          {service.sections.map((section, index) => (
            <section
              key={section.title}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <TextReveal
                as="div"
                className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-muted ${index % 2 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={section.image}
                  alt={section.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </TextReveal>
              <TextReveal as="div" delay={0.08}>
                <h2 className="max-w-xl text-3xl leading-tight font-medium tracking-[-0.035em] text-balance sm:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {section.text}
                </p>
                <ul className="mt-6 flex flex-col gap-4">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed"
                    >
                      <IconCheck
                        className="mt-0.5 size-5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </TextReveal>
            </section>
          ))}
        </div>
        <TextReveal
          as="section"
          className="mb-16 rounded-2xl bg-secondary p-6 sm:p-10 lg:mb-24"
        >
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
            A clear path from brief to delivery.
          </h2>
          <ol className="my-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.workflow.map((step, index) => (
              <li key={step} className="border-t border-primary/25 pt-4">
                <span className="text-sm text-primary">0{index + 1}</span>
                <p className="mt-3 text-base font-medium">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {service.inquiry}
          </p>
          <Link
            href="/contact#inquiry"
            className={buttonVariants({ size: "cta" })}
          >
            Discuss your project
            <IconArrowUpRight data-icon="inline-end" aria-hidden="true" />
          </Link>
        </TextReveal>
        <TextReveal
          as="nav"
          aria-label="Explore other services"
          className="mb-16 border-t pt-8 lg:mb-24"
        >
          <h2 className="mb-5 text-xl font-medium">Explore more services</h2>
          <div className="flex flex-wrap gap-x-7 gap-y-4">
            {servicePages
              .filter((item) => item.slug !== slug)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="text-sm text-primary underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </TextReveal>
      </div>
    </>
  )
}
