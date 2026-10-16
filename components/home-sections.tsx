import { Testimonials } from "@/components/testimonials"
import Image from "next/image"
import Link from "next/link"
import { IconArrowUpRight, IconCheck } from "@tabler/icons-react"
import { TextReveal } from "@/components/text-reveal"
import { FAQSection } from "@/components/faq-section"
import { WorldMap } from "@/components/ui/world-map"
import { serviceGroups } from "@/lib/service-pages"
import { publicPageHref } from "@/lib/public-pages"

const checks = [
  {
    title: "Data collection",
    text: "Gather relevant source material using clear project requirements and contributor guidance.",
  },
  {
    title: "Cleaning",
    text: "Remove duplicates, correct errors, and organize the raw data for analysis.",
  },
  {
    title: "Analysing and annotating",
    text: "Review the material, add useful labels, and resolve unclear examples against the project guidelines.",
  },
  {
    title: "Clean data",
    text: "Deliver a consistent, checked dataset that is ready for your next step.",
  },
]

export function HomeSections() {
  return (
    <>
      <section
        className="home-section stats-section"
        aria-labelledby="stats-title"
      >
        <div className="stats-copy">
          <TextReveal as="p" className="home-label">
            Our work at a glance
          </TextReveal>
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
            From human-sourced data to precise labels, language, and model-ready
            examples.
          </TextReveal>
        </div>
        <div className="expertise-grid">
          {serviceGroups.map((group, index) => (
            <TextReveal
              as="article"
              effect="image"
              delay={index * 0.1}
              key={group.id}
              className="expertise-item"
            >
              <div className="expertise-image">
                <Image
                  src={group.image}
                  alt={group.alt}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 45vw, 30vw"
                  className="object-cover"
                />
              </div>
              <h3>{group.label}</h3>
              <p>{group.description}</p>
              <ul>
                {group.services.slice(0, 2).map((service) => {
                  const href = publicPageHref(`/services/${service.slug}`)
                  return (
                    <li key={service.slug}>
                      {href ? (
                        <Link href={href}>
                          <span>
                            <strong>{service.label}</strong>
                            <small>{service.description}</small>
                          </span>
                          <IconArrowUpRight aria-hidden="true" />
                        </Link>
                      ) : (
                        <span
                          aria-disabled="true"
                          className="service-link-disabled"
                        >
                          <span>
                            <strong>{service.label}</strong>
                            <small>{service.description}</small>
                          </span>
                          <IconArrowUpRight aria-hidden="true" />
                        </span>
                      )}
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
                How we provide <br/> quality data
              </TextReveal>
            </div>
            <TextReveal as="p" delay={0.12} className="home-lead">
              We collect, clean, analyse, and annotate data, then review the
              final dataset for consistency.
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
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/images/deodhani/data-quality-process.png"
                  aria-label="A teacher reviews and marks a student's test"
                >
                  <source src="/videos/quality-review.mp4" type="video/mp4" />
                </video>
              </TextReveal>
            </div>
            <ol className="quality-checks">
              {checks.map((check, index) => (
                <TextReveal as="li" key={check.title} delay={index * 0.08}>
                  <div className="quality-node" aria-hidden="true">
                    <IconCheck />
                  </div>
                  <div>
                    <p className="quality-stage">Step 0{index + 1}</p>
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
            <TextReveal as="p" className="home-label">
              Careers and vendor opportunities
            </TextReveal>
            <TextReveal as="h2" id="people-title" className="home-heading">
              Work with us
            </TextReveal>
          </TextReveal>
          <TextReveal as="p" delay={0.12} className="home-lead">
            Use your language skills and experience to help prepare AI training
            data. Explore roles or join us as a vendor.
          </TextReveal>
        </div>
        <div className="people-grid">
          {[
            {
              title: "Build your career with us",
              label: "Careers",
              href: "/careers",
              image: "/images/deodhani/team-collaboration.webp",
              alt: "Illustration of colleagues collaborating around a table",
            },
            {
              title: "Bring your expertise",
              label: "Become a vendor",
              href: "/become-a-vendor",
              image: "/images/deodhani/field-collection.webp",
              alt: "Illustration of field data collection",
            },
          ].map((item) => (
            <article className="people-card" key={item.href}>
              <div className="people-image">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="people-card-copy">
                <h3>{item.title}</h3>
                <Link href={item.href} className="people-cta">
                  {item.label}
                  <IconArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
