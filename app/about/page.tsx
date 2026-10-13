import type { Metadata } from "next"
import Link from "next/link"
import {
  IconArrowUpRight,
  IconTarget,
  IconHeartHandshake,
  IconBulb,
  IconShieldCheck,
  IconSparkles,
  IconUsers,
  IconMapPin,
} from "@tabler/icons-react"
import { PageIntro } from "@/components/page-intro"
import { company } from "@/lib/company"
import { TextReveal } from "@/components/text-reveal"

export const metadata: Metadata = {
  title: "About us | Deodhani Technologies",
  description:
    "Meet Deodhani: human expertise for AI data, guided by clear values, thoughtful collaboration, and careful delivery.",
}

const values = [
  {
    title: "Customer focus",
    icon: IconHeartHandshake,
    text: "Listen first. Understand the task, communicate clearly, and build a working relationship around what the project needs.",
  },
  {
    title: "Accountability",
    icon: IconTarget,
    text: "Set clear expectations and take responsibility for delivery. Surface questions early and follow through on the details.",
  },
  {
    title: "Curiosity",
    icon: IconBulb,
    text: "Ask better questions. Learn from new domains, difficult examples, and the people closest to the work.",
  },
  {
    title: "Integrity",
    icon: IconShieldCheck,
    text: "Handle data thoughtfully and work honestly. Respect the people, information, and trust behind every project.",
  },
  {
    title: "Quality",
    icon: IconSparkles,
    text: "Treat review as part of the work. Build clear guidelines, learn from disagreement, and improve the process as we go.",
  },
  {
    title: "People & culture",
    icon: IconUsers,
    text: "Value different perspectives. Share knowledge, support each other, and make room for people to do their best work.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="About us"
        title="Human expertise at the heart of intelligent systems."
        description="We bring people, language, and real-world context into AI data. Deodhani connects your project with thoughtful annotation, collection, and review workflows."
      />
      <section
        aria-labelledby="mission-title"
        className="mx-auto grid max-w-[1400px] gap-10 px-5 pt-4 pb-16 sm:px-10 sm:pt-8 sm:pb-24 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20 lg:px-16"
      >
        <TextReveal
          as="h2"
          id="mission-title"
          className="text-xl font-medium text-primary"
        >
          Our mission & vision
        </TextReveal>
        <TextReveal as="div">
          <p className="text-3xl leading-tight font-medium tracking-[-0.035em] text-balance sm:text-5xl">
            Help AI understand the world through the people who live in it.
          </p>
          <div className="mt-9 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium">Our mission</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Make human expertise a practical part of AI development through
                carefully prepared data and clear, collaborative workflows.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Our vision</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                A future where intelligent systems reflect the languages,
                contexts, and varied experiences of the people they serve.
              </p>
            </div>
          </div>
        </TextReveal>
      </section>
      <section
        aria-labelledby="values-title"
        className="mx-auto max-w-[1400px] px-5 pb-16 sm:px-10 sm:pb-24 lg:px-16"
      >
        <TextReveal
          as="h2"
          id="values-title"
          className="mb-9 text-3xl font-medium tracking-tight sm:text-5xl"
        >
          Our values
        </TextReveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ title, text, icon: Icon }, index) => (
            <TextReveal
              as="article"
              delay={(index % 3) * 0.06}
              key={title}
              className="flex min-h-64 flex-col rounded-xl border p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-medium">{title}</h3>
                <Icon
                  className="size-14 shrink-0 text-primary/65"
                  stroke={1}
                  aria-hidden="true"
                />
              </div>
              <p className="mt-auto pt-10 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </TextReveal>
          ))}
        </div>
      </section>
      <section
        aria-labelledby="connect-title"
        className="mx-auto max-w-[1400px] px-5 pb-16 sm:px-10 sm:pb-24 lg:px-16"
      >
        <div className="grid overflow-hidden rounded-xl border lg:grid-cols-2">
          <TextReveal as="div" className="p-7 sm:p-10">
            <IconMapPin
              className="mb-6 size-7 text-primary"
              aria-hidden="true"
            />
            <h2
              id="connect-title"
              className="text-2xl font-medium tracking-tight"
            >
              Let’s connect.
            </h2>
            <address className="mt-5 text-sm leading-relaxed text-muted-foreground not-italic">
              <p>Deodhani Technologies</p>
              <p className="mt-2">Office address pending confirmation.</p>
              <a
                href={`mailto:${company.email}`}
                className="mt-4 inline-block break-all text-primary underline underline-offset-4"
              >
                {company.email}
              </a>
            </address>
            <p className="mt-5 text-sm text-muted-foreground">
              {company.hours}
            </p>
          </TextReveal>
          <TextReveal
            as="div"
            delay={0.08}
            className="flex flex-col justify-center bg-secondary p-7 sm:p-10"
          >
            <h3 className="text-2xl font-medium tracking-tight">
              The right conversation starts here.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Bring us your data challenge, explore a role, or tell us how your
              team can contribute.
            </p>
            <Link
              href="/contact"
              className="mt-6 flex min-h-11 items-center justify-between border-t py-3 text-sm"
            >
              Talk to sales
              <IconArrowUpRight className="size-5" aria-hidden="true" />
            </Link>
            <Link
              href="/become-a-vendor"
              className="flex min-h-11 items-center justify-between border-t py-3 text-sm"
            >
              Become a vendor
              <IconArrowUpRight className="size-5" aria-hidden="true" />
            </Link>
            <Link
              href="/careers"
              className="flex min-h-11 items-center justify-between border-t py-3 text-sm"
            >
              Explore careers
              <IconArrowUpRight className="size-5" aria-hidden="true" />
            </Link>
          </TextReveal>
        </div>
      </section>
    </>
  )
}
