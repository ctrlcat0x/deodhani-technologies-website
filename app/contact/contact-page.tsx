import type { Metadata } from "next"
import { IconArrowUpRight, IconMail, IconClock, IconBriefcase } from "@tabler/icons-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import { ClosingCta } from "@/components/closing-cta"
import { WhatsAppContact } from "@/components/whatsapp-contact"
import { ContactForm } from "@/components/contact-form"
import { TextReveal } from "@/components/text-reveal"
import { company } from "@/lib/company"
import { buttonVariants } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact | Deodhani Technologies",
  description: "Tell Deodhani Technologies about your data collection, annotation, and AI training data requirements.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section aria-labelledby="contact-title" className="bg-footer px-5 py-20 text-center text-footer-foreground sm:px-10 lg:py-24">
          <TextReveal as="h1" id="contact-title" className="mx-auto max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl">Let’s build something<br />together.</TextReveal>
          <TextReveal as="p" className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-footer-muted sm:text-lg">Tell us about your project. Let’s find the right people, process, and data to bring your next idea to life.</TextReveal>
        </section>
        <section id="inquiry" aria-label="Contact Deodhani" className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20 lg:px-16 lg:py-24">
          <div>
            <TextReveal as="h2" className="text-2xl font-medium tracking-tight sm:text-3xl">Contact Deodhani</TextReveal>
            <TextReveal as="p" className="mt-5 text-base leading-relaxed text-muted-foreground">Whether you’re collecting training data, scaling annotation, or exploring a new AI application, we’re ready to help you work through the details.</TextReveal>
            <div className="mt-9 divide-y divide-border border-t border-border">
              <div className="py-7">
                <IconMail className="mb-4 size-5 text-primary" aria-hidden="true" />
                <TextReveal as="h3" className="text-base font-medium">Business inquiries</TextReveal>
                <a href={`mailto:${company.email}`} className="mt-3 inline-block break-all text-sm text-primary underline-offset-4 hover:underline">{company.email}</a>
              </div>
              <div className="py-7">
                <IconClock className="mb-4 size-5 text-primary" aria-hidden="true" />
                <TextReveal as="h3" className="text-base font-medium">Working hours</TextReveal>
                <TextReveal as="p" className="mt-3 text-sm leading-relaxed text-muted-foreground">{company.hours}</TextReveal>
              </div>
              <div className="py-7">
                <IconBriefcase className="mb-4 size-5 text-primary" aria-hidden="true" />
                <TextReveal as="h3" className="text-base font-medium">Looking for a role?</TextReveal>
                <TextReveal as="p" className="mt-3 text-sm leading-relaxed text-muted-foreground">Explore opportunities to work with Deodhani. For applications, visit our careers page.</TextReveal>
                <a href="https://www.deodhanitechnologies.com/Home/Jobs.html" className={buttonVariants({ variant: "outline", size: "lg", className: "mt-5" })}>Explore careers<IconArrowUpRight aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <ContactForm />
        </section>
        <Testimonials />
        <ClosingCta />
      </main>
      <Footer />
      <WhatsAppContact />
    </>
  )
}
