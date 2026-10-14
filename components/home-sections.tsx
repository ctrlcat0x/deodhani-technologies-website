import { Testimonials } from "@/components/testimonials"
import Image from "next/image"
import Link from "next/link"
import { publicPageHref } from "@/lib/public-pages"
import {
  IconArrowUpRight,
  IconPlus,
  IconCheck,
  IconArrowRight,
} from "@tabler/icons-react"
import { TextReveal } from "@/components/text-reveal"

const phases = [
  {
    title: "Define",
    line: "Agree on what you need.",
    text: "Start with what your model needs to learn. Together, we define the data, label taxonomy, edge cases, and delivery format before the work begins.",
  },
  {
    title: "Collect",
    line: "Collect the right data.",
    text: "Source images, video, speech, and text around your use case. Agree on the languages, environments, and collection requirements that make your dataset relevant.",
  },
  {
    title: "Annotate",
    line: "Label each example.",
    text: "Turn raw inputs into useful training examples. Our teams work from shared guidelines, with calibration samples to keep interpretation consistent.",
  },
  {
    title: "Review",
    line: "Check and correct the work.",
    text: "Check labels against the brief, resolve disagreements, and feed what we learn back into the guidelines. Quality is part of the workflow from the start.",
  },
  {
    title: "Deliver",
    line: "Send data in your format.",
    text: "Receive structured data in the agreed format. Review the batch with our team, close open questions, and plan the next iteration around your model’s needs.",
  },
]

const offerings = [
  {
    title: "Image and video data",
    image: "/images/deodhani/field-collection.webp",
    alt: "Illustration of a field researcher capturing market produce with blue annotation outlines",
    text: "From a basket at a market to a detail in a scan. Labels that turn pixels into context.",
    links: [
      ["Image, video & 3D annotation", "/services/ai-data-annotation"],
      ["Real-world data collection", "/services/data-collection"],
    ],
  },
  {
    title: "Speech and language data",
    image: "/images/deodhani/speech-collection.webp",
    alt: "Illustration of an Assamese woman recording speech on her phone with an audio waveform",
    text: "Every voice carries an accent, an intent, a meaning. Bring that understanding into your data.",
    links: [
      ["Transcription & speech", "/services/transcription-and-speech"],
      ["Translation & localization", "/services/translation-and-localization"],
    ],
  },
  {
    title: "Text and document data",
    image: "/images/deodhani/annotation-workspace.webp",
    alt: "Illustration of an analyst reviewing document annotations in a bright workspace",
    text: "A document is more than text. A response is more than words. Make the meaning usable.",
    links: [
      ["OCR & document AI", "/services/ocr-and-document-ai"],
      ["Generative AI services", "/services/generative-ai-services"],
      ["AI model evaluation", "/services/ai-model-evaluation"],
    ],
  },
]

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
      <section
        id="method"
        className="home-section method-section"
        aria-labelledby="method-title"
      >
        <div className="home-section-intro">
          <TextReveal as="p" className="home-label">
            The way we work
          </TextReveal>
          <TextReveal as="h2" id="method-title" className="home-heading">
            What we do
          </TextReveal>
          <TextReveal as="p" delay={0.12} className="home-lead">
            We collect, label, check, and deliver data for AI training. Here’s
            how we work with your team.
          </TextReveal>
          <TextReveal as="div" delay={0.2}>
            <a href="#method-steps" className="home-text-link">
              See our process <IconArrowRight aria-hidden="true" />
            </a>
          </TextReveal>
          <TextReveal
            as="figure"
            effect="image"
            delay={0.15}
            className="method-image"
          >
            <Image
              src="/images/deodhani/field-collection.webp"
              alt="Illustrative field collection at a market in northeast India"
              width={1536}
              height={1024}
              sizes="(max-width: 767px) calc(100vw - 40px), 42vw"
            />
          </TextReveal>
        </div>
        <div id="method-steps" className="method-steps">
          {phases.map((phase, index) => (
            <TextReveal
              as="div"
              className="method-row"
              key={phase.title}
              delay={index * 0.07}
            >
              <details
                key={phase.title}
                name="data-method"
                open={index === 0}
                className="method-step"
              >
                <summary>
                  <span className="step-number">0{index + 1}</span>
                  <span>{phase.title}</span>
                  <IconPlus className="method-plus" aria-hidden="true" />
                </summary>
                <div className="method-panel">
                  <div className="method-detail">
                    <h3>{phase.line}</h3>
                    <p>{phase.text}</p>
                  </div>
                </div>
              </details>
            </TextReveal>
          ))}
        </div>
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
              <p>{offering.text}</p>
              <ul>
                {offering.links.map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={publicPageHref(href)}
                      role="link"
                      aria-disabled={!publicPageHref(href) || undefined}
                      tabIndex={-1}
                    >
                      {label}
                      <IconArrowUpRight aria-hidden="true" />
                    </a>
                  </li>
                ))}
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
          <div className="quality-copy">
            <TextReveal as="p" className="home-label">
              Data review
            </TextReveal>
            <TextReveal as="h2" id="quality-title" className="home-heading">
              How we check quality
            </TextReveal>
            <TextReveal as="p" delay={0.12} className="home-lead">
              We check the data against your requirements, correct errors, and
              review unclear examples with your team.
            </TextReveal>
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
      </section>

      <Testimonials />

      <section
        className="home-section people-section"
        aria-labelledby="people-title"
      >
        <TextReveal as="div" effect="image" className="people-image">
          <Image
            src="/images/deodhani/team-collaboration.webp"
            alt="Illustration of Indian coworkers collaborating on an annotation review"
            fill
            sizes="(max-width: 767px) calc(100vw - 40px), 42vw"
            className="object-cover"
          />
        </TextReveal>
        <div>
          <TextReveal as="p" className="home-label">
            Careers and vendor opportunities
          </TextReveal>
          <TextReveal as="h2" id="people-title" className="home-heading">
            Work with us
          </TextReveal>
          <TextReveal as="p" delay={0.12} className="home-lead">
            Use your language skills and experience to help prepare AI training
            data. Explore roles or join us as a vendor.
          </TextReveal>
          <TextReveal as="div" delay={0.2} className="people-links">
            <a role="link" aria-disabled="true" className="home-text-link">
              Explore careers <IconArrowUpRight aria-hidden="true" />
            </a>
            <a role="link" aria-disabled="true" className="home-text-link">
              Join our vendor network <IconArrowUpRight aria-hidden="true" />
            </a>
          </TextReveal>
        </div>
      </section>
    </>
  )
}
