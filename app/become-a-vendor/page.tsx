import type { Metadata } from "next"
import Link from "next/link"
import { IconArrowDown, IconCheck } from "@tabler/icons-react"
import { PageIntro } from "@/components/page-intro"
import { ApplicationForm } from "@/components/application-form"
import { buttonVariants } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"

export const metadata: Metadata = {
  title: "Become a vendor | Deodhani Technologies",
  description:
    "Introduce your team or individual expertise for Deodhani’s AI data contributor and vendor network.",
}

export default function VendorPage() {
  return (
    <>
      <PageIntro
        label="Become a vendor"
        title="Become a vendor"
        description="Bring your expertise. Build with us."
      />
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16">
        <section
          aria-labelledby="vendor-fit-title"
          className="grid gap-10 rounded-2xl bg-secondary p-6 sm:p-10 lg:grid-cols-2 lg:gap-16"
        >
          <TextReveal as="div">
            <h2
              id="vendor-fit-title"
              className="text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Good work starts with the right people.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We welcome inquiries from independent contributors, specialist
              teams, and service providers. Share your skills, capacity, and the
              types of assignments you’re equipped to support.
            </p>
            <Link
              href="#registration"
              className={buttonVariants({ size: "cta", className: "mt-7" })}
            >
              Introduce yourself
              <IconArrowDown data-icon="inline-end" aria-hidden="true" />
            </Link>
          </TextReveal>
          <TextReveal as="div" delay={0.08}>
            <h3 className="text-xl font-medium">Where you can contribute</h3>
            <ul className="mt-6 flex flex-col gap-5">
              {[
                "Image, video, text, and document annotation",
                "Voice recording, transcription, and language services",
                "Field collection and participant coordination",
                "Domain expertise, response evaluation, and quality review",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <IconCheck
                    className="size-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </TextReveal>
        </section>
        <section aria-labelledby="onboarding-title" className="py-16 sm:py-24">
          <TextReveal
            as="h2"
            id="onboarding-title"
            className="text-3xl font-medium tracking-tight sm:text-4xl"
          >
            From introduction to collaboration.
          </TextReveal>
          <ol className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Introduce your capabilities",
                "Share your expertise, languages, location, team size, and availability.",
              ],
              [
                "Discuss the fit",
                "We review your capabilities against project requirements and clarify the scope.",
              ],
              [
                "Agree the working terms",
                "Confirm quality expectations, data handling, timelines, and commercial terms before work begins.",
              ],
              [
                "Onboard for a project",
                "Complete any agreed assessment and briefing when a suitable assignment is available.",
              ],
            ].map(([title, text], index) => (
              <TextReveal
                as="li"
                key={title}
                delay={index * 0.06}
                className="border-t pt-5"
              >
                <span className="text-sm text-primary">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </TextReveal>
            ))}
          </ol>
        </section>
        <section
          id="registration"
          aria-label="Vendor introduction"
          className="grid items-start gap-10 border-t pt-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16"
        >
          <TextReveal as="div">
            <h2 className="text-3xl font-medium tracking-tight">
              Let’s get to know your work.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Be specific about the services you offer and the capacity you can
              support. Individuals can enter “Independent contributor” as their
              team name.
            </p>
            <div className="mt-8 divide-y border-y">
              {[
                [
                  "Can individuals apply?",
                  "Yes. Independent contributors and specialist teams can both introduce their capabilities.",
                ],
                [
                  "Does registering guarantee work?",
                  "No. Project availability, requirements, and a suitable match determine whether an assignment can be offered.",
                ],
                [
                  "How are terms agreed?",
                  "Scope, payment terms, quality requirements, and data handling are discussed before an engagement starts.",
                ],
              ].map(([question, answer]) => (
                <details key={question} className="py-5">
                  <summary className="cursor-pointer text-sm font-medium focus-visible:outline-2 focus-visible:outline-ring">
                    {question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
            <p className="mt-7 text-sm text-muted-foreground">
              Looking for employment?{" "}
              <Link
                href="/careers"
                className="text-primary underline underline-offset-4"
              >
                Explore careers.
              </Link>
            </p>
          </TextReveal>
          <ApplicationForm kind="vendor" />
        </section>
      </div>
    </>
  )
}
