import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Sourcing } from "@/components/sourcing"
import { Services } from "@/components/services"
import { WhatsAppContact } from "@/components/whatsapp-contact"
import { AnnotationTeam } from "@/components/annotation-team"
import { Capabilities } from "@/components/capabilities"
import { ClosingCta } from "@/components/closing-cta"
import { Testimonials } from "@/components/testimonials"
export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Sourcing />
        <Services />
        <AnnotationTeam />
        <Capabilities />
        <Testimonials />
        <ClosingCta />
      </main>
      <Footer />
      <WhatsAppContact />
    </>
  )
}
