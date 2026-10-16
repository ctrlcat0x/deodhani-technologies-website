import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { IconArrowUpRight, IconCheck } from "@tabler/icons-react"
import { PageIntro } from "@/components/page-intro"
import { buttonVariants } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"
import { serviceGroups, servicePages } from "@/lib/service-pages"
import { publicPageHref } from "@/lib/public-pages"

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
  const group = serviceGroups.find((item) => item.id === service.groupId)!

  return (
    <>
      <PageIntro
        label={`${service.category} / ${service.label}`}
        title={service.title}
        description={service.description}
        image={service.image}
        alt={service.alt}
        caption={`${service.category}, shaped around your data and delivery needs.`}
      />
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16">
        <TextReveal
          as="section"
          className="grid gap-8 border-t border-border py-14 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
        >
          <div>
            <p className="mb-4 text-sm font-medium text-primary">What we deliver</p>
            <h2 className="max-w-lg text-3xl font-medium leading-tight tracking-[-0.035em] text-balance sm:text-4xl">
              The right details, clearly defined.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              We align the work to your examples, guidelines, and handoff needs, then review for clarity and consistency.
            </p>
          </div>
          <ul className="grid content-start gap-4 sm:grid-cols-2">
            {service.includes.map((item) => (
              <li key={item} className="flex gap-3 border-t border-border py-4 text-sm leading-relaxed sm:text-base">
                <IconCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </TextReveal>
        <TextReveal
          as="section"
          className="mb-14 rounded-2xl bg-secondary p-6 sm:mb-20 sm:p-10 lg:p-12"
        >
          <p className="mb-3 text-sm font-medium text-primary">A clear process</p>
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
            From a well-scoped brief to delivery.
          </h2>
          <ol className="my-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {group.workflow.map((step, index) => (
              <li key={step} className="border-t border-primary/25 pt-4">
                <span className="text-sm text-primary">0{index + 1}</span>
                <p className="mt-3 text-base font-medium">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {group.inquiry}
          </p>
          <Link href="/contact#inquiry" className={buttonVariants({ size: "cta" })}>
            Discuss your project
            <IconArrowUpRight data-icon="inline-end" aria-hidden="true" />
          </Link>
        </TextReveal>
        <TextReveal as="nav" aria-label={`More ${group.label} services`} className="mb-16 border-t pt-8 lg:mb-24">
          <h2 className="mb-5 text-xl font-medium">Explore {group.label.toLowerCase()}</h2>
          <div className="flex flex-wrap gap-x-7 gap-y-4">
            {group.services
              .filter((item) => item.slug !== slug)
              .map((item) => {
                const href = publicPageHref(`/services/${item.slug}`)
                return (
                  href ? (
                    <Link
                      key={item.slug}
                      href={href}
                      className="text-sm text-primary underline-offset-4 hover:underline"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      key={item.slug}
                      aria-disabled="true"
                      className="text-sm text-primary underline-offset-4 opacity-55"
                    >
                      {item.label}
                    </span>
                  )
                )
              })}
          </div>
        </TextReveal>
      </div>
    </>
  )
}
