import { Testimonials } from "@/components/testimonials"
import Image from "next/image"
import Link from "next/link"
import {
  IconArrowUpRight,
  IconCheck,
} from "@tabler/icons-react"
import { TextReveal } from "@/components/text-reveal"
import { FAQSection } from "@/components/faq-section"
import { WorldMap } from "@/components/ui/world-map"
import { servicePages } from "@/lib/service-pages"

const offerings = [
  {
    title: "Visual data services",
    image: "/images/data-work/annotation-review.jpg",
    alt: "A data specialist reviewing labeled portrait examples",
    serviceSlugs: ["ai-data-annotation"],
    serviceLink: {
      label: "AI data annotation & collection",
      description:
        "Human-reviewed image, video, text, audio, and 3D annotation, plus real-world data collection shaped to your use case.",
    },
  },
  {
    title: "Transcription and speech",
    image: "/images/data-work/speech-collection.jpg",
    alt: "An Assamese speaker recording a phrase with a language researcher",
    serviceSlugs: ["transcription-and-speech"],
  },
  {
    title: "Translation and localization",
    image: "/images/data-work/language-localization.jpg",
    alt: "Two language specialists reviewing a document together",
    serviceSlugs: ["translation-and-localization"],
  },
  {
    title: "OCR and document AI",
    image: "/images/data-work/document-ai.jpg",
    alt: "A document specialist reviewing structured fields in a scanned form",
    serviceSlugs: ["ocr-and-document-ai"],
  },
  {
    title: "Generative AI services",
    image: "/images/data-work/generative-ai.jpg",
    alt: "A human evaluator comparing two model responses on a monitor",
    serviceSlugs: ["generative-ai-services"],
  },
  {
    title: "AI model evaluation",
    image: "/images/data-work/model-evaluation.jpg",
    alt: "Two reviewers comparing model search results against human quality criteria",
    serviceSlugs: ["ai-model-evaluation"],
  },
]

const serviceBySlug = new Map(servicePages.map((service) => [service.slug, service]))

const checks = [
  {
    title: "Start with a sample",
    text: "Align on a sample. Find ambiguous labels early, while they are still easy to fix.",
  },
  {
    title: "Check your requirements",
    text: "Check the work against your taxonomy and agreed acceptance criteria.",
  },
  {
    title: "Review unclear examples",
    text: "Bring disagreements back to a person. Record the decision so the next example is clearer.",
  },
  {
    title: "Improve the next batch",
    text: "Use review feedback to refine the guidelines and keep the work consistent as it grows.",
  },
]

export function HomeSections() {
  return (
    <>
      <section className="home-section stats-section" aria-labelledby="stats-title">
        <div className="stats-copy">
          <TextReveal as="p" className="home-label">Our work at a glance</TextReveal>
          <TextReveal as="h2" id="stats-title" className="home-heading">
            Data work shaped around your AI goals.
          </TextReveal>
          <TextReveal as="p" delay={0.12} className="home-lead">
            A focused set of services, delivered through a clear review process.
          </TextReveal>
          <div className="stats-grid">
            <TextReveal as="div" delay={0.16}>
              <strong>500GB+</strong>
              <span>Data collected</span>
            </TextReveal>
            <TextReveal as="div" delay={0.22}>
              <strong>1M+</strong>
              <span>Data points annotated</span>
            </TextReveal>
            <TextReveal as="div" delay={0.28}>
              <strong>40+</strong>
              <span>Languages covered</span>
            </TextReveal>
            <TextReveal as="div" delay={0.34}>
              <strong>99.5%</strong>
              <span>Review accuracy</span>
            </TextReveal>
          </div>
        </div>
        <TextReveal as="div" effect="image" className="stats-map">
          <WorldMap />
        </TextReveal>
      </section>

      <section
        id="data-products"
        className="home-section expertise-section"
        aria-labelledby="expertise-title"
      >
        <div className="expertise-intro">
          <div>
            <TextReveal as="p" className="home-label">
              Data for AI training
            </TextReveal>
            <TextReveal as="h2" id="expertise-title" className="home-heading">
              Our services
            </TextReveal>
          </div>
          <TextReveal as="p" delay={0.15} className="home-lead">
            Data collection, annotation, and review for images, speech, text,
            and documents.
          </TextReveal>
        </div>
        <div className="expertise-grid">
          {offerings.map((offering, index) => (
            <TextReveal
              as="article"
              effect="image"
              delay={index * 0.1}
              key={offering.title}
              className="expertise-item"
            >
              <div className="expertise-image">
                <Image
                  src={offering.image}
                  alt={offering.alt}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 45vw, 30vw"
                  className="object-cover"
                />
              </div>
              <h3>{offering.title}</h3>
              <ul>
                {offering.serviceSlugs.map((slug) => {
                  const service = serviceBySlug.get(slug)
                  if (!service) return null
                  const href = `/services/${service.slug}`
                  return (
                    <li key={service.slug}>
                    <Link href={href}>
                      <span>
                        <strong>{offering.serviceLink?.label ?? service.label}</strong>
                        <small>{offering.serviceLink?.description ?? service.description}</small>
                      </span>
                      <IconArrowUpRight aria-hidden="true" />
                    </Link>
                    </li>
                  )
                })}
              </ul>
            </TextReveal>
          ))}
        </div>
      </section>

      <section
        id="quality"
        className="quality-wrap"
        aria-labelledby="quality-title"
      >
        <div className="home-section quality-section">
          <div className="quality-intro">
            <div>
              <TextReveal as="p" className="home-label">
                Data review
              </TextReveal>
              <TextReveal as="h2" id="quality-title" className="home-heading">
                How we check quality
              </TextReveal>
            </div>
            <TextReveal as="p" delay={0.12} className="home-lead">
              We check the data against your requirements, correct errors, and
              review unclear examples with your team.
            </TextReveal>
          </div>
          <div className="quality-content">
            <div className="quality-copy">
              <TextReveal as="div" delay={0.2}>
                <Link href="/contact#inquiry" className="home-text-link">
                  Discuss your quality requirements{" "}
                  <IconArrowUpRight aria-hidden="true" />
                </Link>
              </TextReveal>
              <TextReveal
                as="figure"
                effect="image"
                delay={0.15}
                className="quality-image"
              >
                <Image
                  src="/images/deodhani/quality-review.webp"
                  alt="Blue data particles passing through glass review layers into a structured cube"
                  width={1536}
                  height={1024}
                  sizes="(max-width: 767px) calc(100vw - 40px), 42vw"
                />
              </TextReveal>
            </div>
            <ol className="quality-checks">
              {checks.map((check, index) => (
                <TextReveal as="li" key={check.title} delay={index * 0.08}>
                  <div className="quality-node" aria-hidden="true">
                    <IconCheck />
                  </div>
                  <div>
                    <p className="quality-stage">Review step 0{index + 1}</p>
                    <h3>{check.title}</h3>
                    <p>{check.text}</p>
                  </div>
                </TextReveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQSection />

      <section
        className="home-section people-section"
        aria-labelledby="people-title"
      >
        <div className="people-intro">
          <TextReveal as="div">
            <TextReveal as="p" className="home-label">Careers and vendor opportunities</TextReveal>
            <TextReveal as="h2" id="people-title" className="home-heading">Work with us</TextReveal>
          </TextReveal>
          <TextReveal as="p" delay={0.12} className="home-lead">
            Use your language skills and experience to help prepare AI training
            data. Explore roles or join us as a vendor.
          </TextReveal>
        </div>
        <div className="people-grid">
          {[
            { title: "Build your career with us", label: "Careers", href: "/careers", image: "/images/deodhani/team-collaboration.webp", alt: "Illustration of colleagues collaborating around a table" },
            { title: "Bring your expertise", label: "Become a vendor", href: "/become-a-vendor", image: "/images/deodhani/field-collection.webp", alt: "Illustration of field data collection" },
          ].map((item) => (
            <article className="people-card" key={item.href}>
              <div className="people-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" /></div>
              <div className="people-card-copy"><h3>{item.title}</h3><Link href={item.href} className="people-cta">{item.label}<IconArrowUpRight aria-hidden="true" /></Link></div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
