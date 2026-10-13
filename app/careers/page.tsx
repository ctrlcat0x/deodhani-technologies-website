import type { Metadata } from "next"
import Link from "next/link"
import {
  IconArrowDown,
  IconBulb,
  IconUsers,
  IconTarget,
} from "@tabler/icons-react"
import { PageIntro } from "@/components/page-intro"
import { ApplicationForm } from "@/components/application-form"
import { buttonVariants } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"

export const metadata: Metadata = {
  title: "Careers | Deodhani Technologies",
  description:
    "Explore a career in human-powered AI data. Introduce your skills in annotation, language, quality review, or project delivery.",
}

export default function CareersPage() {
  return (
    <>
      <PageIntro
        label="Careers"
        title="Your perspective can make AI better."
        description="Bring your attention to detail, language skills, and curiosity to work that connects human understanding with intelligent systems."
        image="/images/sourcing/language.jpg"
        alt="People collaborating around a table"
        caption="Different perspectives make better work. Illustrative photography; not a Deodhani team portrait."
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-16 sm:px-10 sm:pb-24 lg:px-16">
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
          className="grid gap-8 py-16 lg:grid-cols-2 lg:gap-16"
        >
          <TextReveal as="div">
            <h2
              id="opportunities-title"
              className="text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Find your place in the work.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              We’re interested in the people behind the skills. Introduce
              yourself for future opportunities in data annotation, language
              services, quality review, and project operations.
            </p>
            <Link
              href="#application"
              className={buttonVariants({ size: "cta", className: "mt-7" })}
            >
              Send an open application
              <IconArrowDown data-icon="inline-end" aria-hidden="true" />
            </Link>
          </TextReveal>
          <TextReveal
            as="div"
            delay={0.08}
            className="rounded-xl border p-7 sm:p-9"
          >
            <h3 className="text-xl font-medium">Current opportunities</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              No confirmed vacancies are listed here yet. You can send an open
              application for consideration when a suitable role is available.
            </p>
            <p className="mt-5 border-t pt-5 text-sm leading-relaxed text-muted-foreground">
              Include your area of interest, relevant experience, languages, and
              availability. An application does not guarantee an interview or
              placement.
            </p>
          </TextReveal>
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
