"use client"

import Link from "next/link"
import { IconArrowUpRight } from "@tabler/icons-react"
import TechText from "@/components/TechText"
import CircularGallery from "@/components/CircularGallery"
import { buttonVariants } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"

const samples = [
  {
    src: "/images/data-work/speech-collection.jpg",
    alt: "An Assamese speaker recording a phrase with a language researcher",
    title: "Every voice has a story",
    subtitle: "Speech collection",
  },
  {
    src: "/images/data-work/annotation-review.jpg",
    alt: "An annotator reviewing object labels on a computer vision monitor",
    title: "A world in motion",
    subtitle: "Computer vision",
  },
  {
    src: "/images/data-work/document-ai.jpg",
    alt: "A document specialist reviewing structured fields in a scanned form",
    title: "Beyond the written word",
    subtitle: "Document intelligence",
  },
  {
    src: "/images/data-work/face-segmentation.jpg",
    alt: "An image reviewer checking precise segmentation boundaries around portrait subjects",
    title: "Every detail matters",
    subtitle: "Image segmentation",
  },
  {
    src: "/images/data-work/model-evaluation.jpg",
    alt: "Two reviewers comparing model search results against human quality criteria",
    title: "Review with context",
    subtitle: "Model evaluation",
  },
  {
    src: "/images/data-work/field-collection.jpg",
    alt: "A field researcher capturing a plant sample on a smartphone",
    title: "Grounded in the real world",
    subtitle: "Image segmentation",
  },
  {
    src: "/images/data-work/face-video.jpg",
    alt: "A participant recording a short video sample on a smartphone",
    title: "Capture real expressions",
    subtitle: "Video data collection",
  },
  {
    src: "/images/data-work/language-localization.jpg",
    alt: "Two language specialists reviewing a document together",
    title: "Every phrase understood",
    subtitle: "Translation & localization",
  },
  {
    src: "/images/data-work/generative-ai.jpg",
    alt: "A human evaluator comparing two model responses on a monitor",
    title: "Human judgment at work",
    subtitle: "Generative AI feedback",
  },
]

const galleryItems = samples.map(({ src, alt, title }) => ({
  image: src,
  alt,
  text: title,
}))

export function Hero() {
  return (
    <section className="hero-stage" aria-labelledby="hero-title">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="hero-intro">
        <TextReveal as="p" delay={0} className="hero-kicker">
          <span /> People behind the intelligence.
        </TextReveal>
        <TextReveal as="h1" delay={0.08} id="hero-title" className="hero-title">
          <span className="sr-only">Real human data. Extraordinary AI.</span>
          <span aria-hidden="true" className="hero-tech-line">
            <TechText
              text="Real human data."
              fontSize={138}
              fontWeight={650}
              color="#12294d"
              accentColor="#2f73b0"
              labels={false}
              draggable={false}
              sweep
            />
          </span>
          <span aria-hidden="true" className="hero-color-line">
            Extraordinary AI.
          </span>
        </TextReveal>
        <TextReveal as="p" delay={0.2} className="hero-description">
          Providing data to train extraordinary AI.
          <br className="hidden sm:block" /> We collect, label, and review
          images, speech, text, and documents.
        </TextReveal>
        <TextReveal as="div" delay={0.3} className="hero-actions">
          <Link
            href="/contact#inquiry"
            className={buttonVariants({ size: "cta" })}
          >
            Tell us what you’re building{" "}
            <IconArrowUpRight data-icon="inline-end" aria-hidden="true" />
          </Link>
          <Link
            href="#data-products"
            className={buttonVariants({ variant: "outline", size: "cta" })}
          >
            Explore our expertise{" "}
            <IconArrowUpRight data-icon="inline-end" aria-hidden="true" />
          </Link>
        </TextReveal>
      </div>
      <div className="hero-gallery">
        <CircularGallery
          items={galleryItems}
          showTitles={false}
          textColor="#12294d"
          font="500 22px sans-serif"
          bend={2.5}
          borderRadius={0.04}
          gap={0.18}
          wave={0.35}
          autoScroll={0.6}
          scrollEase={0.06}
        />
      </div>
    </section>
  )
}
