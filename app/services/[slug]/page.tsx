import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { IconArrowUpRight, IconCheck } from "@tabler/icons-react"
import { PageIntro } from "@/components/page-intro"
import { buttonVariants } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"
import { serviceGroups } from "@/lib/service-pages"

export const dynamicParams = false

export function generateStaticParams() {
  return serviceGroups.map((group) => ({ slug: group.services[0].slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const group = serviceGroups.find((item) => item.services[0].slug === slug)
  if (!group) notFound()
  const service = group.services[0]
  return {
    title: `${group.label} | Deodhani Technologies`,
    description: service.description,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const group = serviceGroups.find((item) => item.services[0].slug === slug)
  if (!group) notFound()
  const service = group.services[0]

  return (
    <>
      <PageIntro
        label={group.label}
        title={service.title}
        description={service.description}
        image={
          slug === "human-data-collection"
            ? "/images/services/data-collection-notes.png"
            : slug === "general-transcription"
              ? "/images/services/transcription-hero.png"
              : slug === "image-annotation"
                ? "/images/services/annotation-hero.png"
                : group.image
        }
        alt={
          slug === "human-data-collection"
            ? "A wall covered with handwritten notes and sketches"
            : slug === "general-transcription"
              ? "A hand writing the word transcription in a notebook"
              : slug === "image-annotation"
                ? "Pedestrians, cars, a dog, and traffic lights marked with detection boxes"
                : group.alt
        }
        caption={`${group.label}, shaped around your data and delivery needs.`}
      />
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16">
        <TextReveal
          as="section"
          className="border-t border-border py-14 sm:py-20"
        >
          <div className="mb-8 max-w-2xl">
            <p className="mb-4 text-sm font-medium text-primary">
              What we deliver
            </p>
            <h2 className="text-3xl leading-tight font-medium tracking-[-0.035em] text-balance sm:text-4xl">
              {group.label}, shaped around your needs.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Explore our service capabilities below. Each one follows clear
              project guidance and careful review.
            </p>
          </div>
          <div
            className={`grid gap-4 ${group.services.length > 1 ? "md:grid-cols-2" : ""}`}
          >
            {group.services.map((item) => (
              <article
                id={item.slug}
                key={item.slug}
                className={`scroll-mt-28 rounded-2xl border border-border bg-background p-6 sm:p-8 ${
                  group.services.length === 1
                    ? "grid gap-8 md:grid-cols-[1fr_0.85fr] md:items-center"
                    : ""
                }`}
              >
                <div>
                  <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                    {item.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                </div>
                <ul className="mt-5 grid gap-3">
                  {item.includes.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 text-sm leading-relaxed"
                    >
                      <IconCheck
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </TextReveal>
        <TextReveal
          as="section"
          className="mb-14 rounded-2xl bg-secondary p-6 sm:mb-20 sm:p-10 lg:p-12"
        >
          <p className="mb-3 text-sm font-medium text-primary">
            A clear process
          </p>
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
          <Link
            href="/contact#inquiry"
            className={buttonVariants({ size: "cta" })}
          >
            Discuss your project
            <IconArrowUpRight data-icon="inline-end" aria-hidden="true" />
          </Link>
        </TextReveal>
      </div>
    </>
  )
}
