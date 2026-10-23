import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { IconArrowDown, IconArrowUpRight, IconCheck } from "@tabler/icons-react"
import { PageIntro } from "@/components/page-intro"
import { buttonVariants } from "@/components/ui/button"
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
                : slug === "multilingual-indian-language-translation"
                  ? "/images/services/translation-hero.png"
                  : slug === "prompt-creation-and-response"
                    ? "/images/services/generative-ai-hero.png"
                    : group.image
        }
        alt={
          slug === "human-data-collection"
            ? "A wall covered with handwritten notes and sketches"
            : slug === "general-transcription"
              ? "A hand writing the word transcription in a notebook"
              : slug === "image-annotation"
                ? "Pedestrians, cars, a dog, and traffic lights marked with detection boxes"
                : slug === "multilingual-indian-language-translation"
                  ? "A phone displays translations for greetings in several languages"
                  : slug === "prompt-creation-and-response"
                    ? "A metallic hand holding a glowing, wire-wrapped brain"
                    : group.alt
        }
        imageAspectClassName={
          slug === "multilingual-indian-language-translation"
            ? "aspect-[735/449]"
            : undefined
        }
        caption={`${group.label}, shaped around your data and delivery needs.`}
      />
      <div className="service-content">
        <section
          className="service-overview"
          aria-labelledby="service-overview-title"
        >
          <div className="service-overview-intro">
            <p className="service-label">What we deliver</p>
            <h2 id="service-overview-title">{group.overviewTitle}</h2>
            <p className="service-lead">{group.overviewDescription}</p>
            {group.services.length > 1 && (
              <nav
                className="service-index"
                aria-label={`${group.label} capabilities`}
              >
                {group.services.map((item) => (
                  <a href={`#${item.slug}`} key={item.slug}>
                    <span>{item.label}</span>
                    <IconArrowDown aria-hidden="true" />
                  </a>
                ))}
              </nav>
            )}
          </div>
          <div className="service-details">
            {group.services.map((item) => (
              <article
                id={item.slug}
                key={item.slug}
                className="service-detail"
              >
                <h3>{item.label}</h3>
                <p>{item.description}</p>
                <ul aria-label={`${item.label} deliverables`}>
                  {item.includes.map((detail) => (
                    <li key={detail}>
                      <IconCheck aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section
          className="service-process"
          aria-labelledby="service-process-title"
        >
          <div className="service-process-intro">
            <div>
              <p className="service-label">How we work</p>
              <h2 id="service-process-title">
                A clear path from brief to delivery.
              </h2>
            </div>
            <p>Requirements agreed early. Human review throughout.</p>
          </div>
          <ol>
            {group.workflow.map((step, index) => (
              <li key={step.title}>
                <span className="service-step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="service-inquiry">
            <div>
              <h3>Let&apos;s scope your project.</h3>
              <p>{group.inquiry}</p>
            </div>
            <Link
              href="/contact#inquiry"
              className={buttonVariants({ variant: "secondary", size: "cta" })}
            >
              Discuss your project
              <IconArrowUpRight data-icon="inline-end" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
