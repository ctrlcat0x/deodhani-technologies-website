import type { Metadata } from "next"
import Link from "next/link"
import {
  IconArrowDown,
  IconArrowRight,
  IconClock,
  IconMapPin,
  IconMail,
  IconBulb,
  IconUsers,
  IconTarget,
} from "@tabler/icons-react"
import { PageIntro } from "@/components/page-intro"
import { ApplicationForm } from "@/components/application-form"
import { buttonVariants } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"
import { connection } from "next/server"
import { readOpenings } from "@/lib/openings"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Careers | Deodhani Technologies",
  description:
    "Explore a career in human-powered AI data. Introduce your skills in annotation, language, quality review, or project delivery.",
}

export default async function CareersPage() {
  await connection()
  const { openings } = await readOpenings()
  return (
    <>
      <PageIntro
        label="Careers"
        title="Careers"
        description="Your perspective can make AI better."
        image="/images/sourcing/language.jpg"
        alt="People collaborating around a table"
        caption="Different perspectives make better work. Illustrative photography; not a Deodhani team portrait."
      />
      <section className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16">
        <div className="grid gap-8 border-y py-10 md:grid-cols-3">
          {[
            {
              icon: IconBulb,
              title: "Keep learning",
              text: "Explore new domains, develop your judgment, and learn how human input shapes AI data.",
            },
            {
              icon: IconUsers,
              title: "Work with people",
              text: "Collaborate with colleagues across project delivery, language, annotation, and quality review.",
            },
            {
              icon: IconTarget,
              title: "Care about the details",
              text: "Make useful contributions through careful work, thoughtful questions, and clear communication.",
            },
          ].map(({ icon: Icon, title, text }, index) => (
            <TextReveal as="div" key={title} delay={index * 0.06}>
              <Icon
                className="mb-5 size-8 text-primary"
                stroke={1.3}
                aria-hidden="true"
              />
              <h2 className="text-xl font-medium">{title}</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </TextReveal>
          ))}
        </div>
        <section
          aria-labelledby="opportunities-title"
          className="openings-section"
        >
          <div className="openings-intro">
            <h2
              id="opportunities-title"
              className="text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Current openings
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Bring your skills to human-powered AI. Explore opportunities in
              data, language, and project delivery with Deodhani.
            </p>
          </div>
          {openings.length ? (
            <div className="openings-grid">
              {openings.map((opening) => (
                <article className="opening-card" key={opening.id}>
                  <div className="opening-card-top">
                    <span className="opening-icon">
                      <IconClock aria-hidden="true" />
                    </span>
                    <span className="opening-type">{opening.type}</span>
                  </div>
                  <h3>{opening.title}</h3>
                  <p className="opening-location">
                    <IconMapPin aria-hidden="true" />
                    {opening.location}
                  </p>
                  <p className="opening-description">{opening.description}</p>
                  <ul className="opening-skills" aria-label="Skills">
                    {opening.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                  <div className="opening-actions">
                    <a
                      href={opening.applyUrl ?? "#application"}
                      target="_blank"
                      className={buttonVariants({ size: "default" })}
                    >
                      Apply now
                      <IconArrowRight
                        data-icon="inline-end"
                        aria-hidden="true"
                      />
                    </a>
                    <a
                      href={`mailto:${company.email}?subject=${encodeURIComponent(`Career inquiry: ${opening.title}`)}`}
                      className={buttonVariants({
                        variant: "outline",
                        size: "default",
                      })}
                    >
                      Get in touch
                      <IconMail data-icon="inline-end" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="openings-empty">
              <span className="opening-icon">
                <IconUsers aria-hidden="true" />
              </span>
              <h3>No openings at the moment.</h3>
              <p>
                We still welcome introductions. Share your skills, experience,
                and availability for future opportunities.
              </p>
              <Link
                href="#application"
                className={buttonVariants({ size: "cta" })}
              >
                Send an open application
                <IconArrowDown data-icon="inline-end" aria-hidden="true" />
              </Link>
            </div>
          )}
        </section>
        <section
          id="application"
          aria-label="Open application"
          className="grid items-start gap-10 border-t pt-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16"
        >
          <TextReveal as="div">
            <h2 className="text-3xl font-medium tracking-tight">
              Start with a conversation.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Tell us what you do well and the work you want to do next. Add a
              resume or portfolio link if you have one.
            </p>
            <h3 className="mt-8 text-lg font-medium">What happens next?</h3>
            <ol className="mt-4 flex list-inside list-decimal flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
              <li>Prepare and send your application by email.</li>
              <li>Our team reviews your experience against relevant needs.</li>
              <li>
                If there’s a potential fit, we’ll discuss the role and next
                steps.
              </li>
            </ol>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Applying as a team or service provider?{" "}
              <Link
                href="/become-a-vendor"
                className="text-primary underline underline-offset-4"
              >
                Visit our vendor page.
              </Link>
            </p>
          </TextReveal>
          <ApplicationForm kind="careers" />
        </section>
      </section>
    </>
  )
}
