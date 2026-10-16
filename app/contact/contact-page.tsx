import type { Metadata } from "next"
import {
  IconArrowUpRight,
  IconMail,
  IconMapPin,
  IconPhone,
  IconBriefcase,
} from "@tabler/icons-react"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"
import { TextReveal } from "@/components/text-reveal"
import { company } from "@/lib/company"
import { buttonVariants } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact | Deodhani Technologies",
  description:
    "Tell Deodhani Technologies about your data collection, annotation, and AI training data requirements.",
}

export default function ContactPage() {
  return (
    <>
      <section
        aria-labelledby="contact-title"
        className="bg-footer px-5 py-20 text-center text-footer-foreground sm:px-10 lg:py-24"
      >
        <TextReveal
          as="h1"
          id="contact-title"
          className="mx-auto max-w-3xl text-4xl leading-[1.08] font-medium tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl"
        >
          Let’s build something
          <br />
          together.
        </TextReveal>
        <TextReveal
          as="p"
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-footer-muted sm:text-lg"
        >
          Tell us about your project. Let’s find the right people, process, and
          data to bring your next idea to life.
        </TextReveal>
      </section>
      <section
        id="inquiry"
        aria-label="Contact Deodhani"
        className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20 lg:px-16 lg:py-24"
      >
        <div>
          <TextReveal
            as="h2"
            className="text-2xl font-medium tracking-tight sm:text-3xl"
          >
            Contact Deodhani
          </TextReveal>
          <TextReveal
            as="p"
            className="mt-5 text-base leading-relaxed text-muted-foreground"
          >
            Whether you’re collecting training data, scaling annotation, or
            exploring a new AI application, we’re ready to help you work through
            the details.
          </TextReveal>
          <div className="mt-9 divide-y divide-border border-t border-border">
            <TextReveal as="div" className="py-7">
              <IconMail
                className="mb-4 size-5 text-primary"
                aria-hidden="true"
              />
              <TextReveal as="h3" className="text-base font-medium">
                Business inquiries
              </TextReveal>
              <a
                href={`mailto:${company.email}`}
                className="mt-3 inline-block text-sm break-all text-primary underline-offset-4 hover:underline"
              >
                {company.email}
              </a>
            </TextReveal>
            <TextReveal as="div" className="py-7">
              <IconPhone
                className="mb-4 size-5 text-primary"
                aria-hidden="true"
              />
              <TextReveal as="h3" className="text-base font-medium">
                Phone
              </TextReveal>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="mt-3 inline-block text-sm text-primary underline-offset-4 hover:underline"
              >
                {company.phone}
              </a>
            </TextReveal>
            <TextReveal as="div" className="py-7">
              <IconMapPin
                className="mb-4 size-5 text-primary"
                aria-hidden="true"
              />
              <TextReveal as="h3" className="text-base font-medium">
                Office address
              </TextReveal>
              <TextReveal
                as="p"
                className="mt-3 text-sm leading-relaxed text-muted-foreground"
              >
                {company.address}
              </TextReveal>
            </TextReveal>
            <TextReveal as="div" className="py-7">
              <IconBriefcase
                className="mb-4 size-5 text-primary"
                aria-hidden="true"
              />
              <TextReveal as="h3" className="text-base font-medium">
                Looking for a role?
              </TextReveal>
              <TextReveal
                as="p"
                className="mt-3 text-sm leading-relaxed text-muted-foreground"
              >
                Interested in working with Deodhani? Get in touch with our team.
              </TextReveal>
              <a
                role="link"
                aria-disabled="true"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "mt-5",
                })}
              >
                Explore careers
                <IconArrowUpRight aria-hidden="true" />
              </a>
              <a
                role="link"
                aria-disabled="true"
                className="mt-5 block text-sm text-primary underline underline-offset-4"
              >
                Join our vendor network
              </a>
            </TextReveal>
          </div>
        </div>
        <ContactForm />
      </section>
      <Testimonials />
    </>
  )
}
