import Image from "next/image"
import Link from "next/link"
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
    line: "A clear brief. A better starting point.",
    text: "Start with what your model needs to learn. Together, we define the data, label taxonomy, edge cases, and delivery format before the work begins.",
  },
  {
    title: "Collect",
    line: "Real people. Real-world context.",
    text: "Source images, video, speech, and text around your use case. Agree on the languages, environments, and collection requirements that make your dataset relevant.",
  },
  {
    title: "Annotate",
    line: "Give every example a meaning.",
    text: "Turn raw inputs into useful training examples. Our teams work from shared guidelines, with calibration samples to keep interpretation consistent.",
  },
  {
    title: "Review",
    line: "The difficult examples deserve a second look.",
    text: "Check labels against the brief, resolve disagreements, and feed what we learn back into the guidelines. Quality is part of the workflow from the start.",
  },
  {
    title: "Deliver",
    line: "Ready for your next step.",
    text: "Receive structured data in the agreed format. Review the batch with our team, close open questions, and plan the next iteration around your model’s needs.",
  },
]

const offerings = [
  {
    title: "Help AI see.",
    image: "/images/deodhani/field-collection.webp",
    alt: "Illustration of a field researcher capturing market produce with blue annotation outlines",
    text: "From a basket at a market to a detail in a scan. Labels that turn pixels into context.",
    links: [
      ["Image, video & 3D annotation", "/services/ai-data-annotation"],
      ["Real-world data collection", "/services/data-collection"],
    ],
  },
  {
    title: "Help AI listen.",
    image: "/images/deodhani/speech-collection.webp",
    alt: "Illustration of an Assamese woman recording speech on her phone with an audio waveform",
    text: "Every voice carries an accent, an intent, a meaning. Bring that understanding into your data.",
    links: [
      ["Transcription & speech", "/services/transcription-and-speech"],
      ["Translation & localization", "/services/translation-and-localization"],
    ],
  },
  {
    title: "Help AI understand.",
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
    title: "Calibrate before scaling",
    text: "Align on a sample. Find ambiguous labels early, while they are still easy to fix.",
  },
  {
    title: "Review against the brief",
    text: "Check the work against your taxonomy and agreed acceptance criteria.",
  },
  {
    title: "Resolve the edge cases",
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
            Good data doesn’t <br />
            happen by chance.
          </TextReveal>
          <TextReveal as="p" delay={0.12} className="home-lead">
            Five steps. One connected workflow. From the first conversation to
            the data your team puts to work.
          </TextReveal>
          <TextReveal as="div" delay={0.2}>
            <a href="#method-steps" className="home-text-link">
              Explore the method <IconArrowRight aria-hidden="true" />
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
              Human expertise, across every format
            </TextReveal>
            <TextReveal as="h2" id="expertise-title" className="home-heading">
              The world isn’t one data type. <br />
              Neither are we.
            </TextReveal>
          </div>
          <TextReveal as="p" delay={0.15} className="home-lead">
            Vision. Language. Documents. Human judgment where your model needs
            it.
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
                    <Link href={href}>
                      {label}
                      <IconArrowUpRight aria-hidden="true" />
                    </Link>
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
              Quality is a process
            </TextReveal>
            <TextReveal as="h2" id="quality-title" className="home-heading">
              More than a label. <br />A reason to trust it.
            </TextReveal>
            <TextReveal as="p" delay={0.12} className="home-lead">
              A dataset can look complete and still miss the point. We make room
              for questions, review, and the human judgment that brings an
              example into focus.
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
            People make the difference
          </TextReveal>
          <TextReveal as="h2" id="people-title" className="home-heading">
            Your perspective <br />
            belongs in AI.
          </TextReveal>
          <TextReveal as="p" delay={0.12} className="home-lead">
            Language skills. Domain knowledge. A sharp eye for detail. Bring
            what you know to the work behind intelligent systems.
          </TextReveal>
          <TextReveal as="div" delay={0.2} className="people-links">
            <Link href="/careers" className="home-text-link">
              Explore careers <IconArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="/become-a-vendor" className="home-text-link">
              Join our vendor network <IconArrowUpRight aria-hidden="true" />
            </Link>
          </TextReveal>
        </div>
      </section>
    </>
  )
}
