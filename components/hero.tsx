"use client"

import Link from "next/link"
import { IconArrowUpRight } from "@tabler/icons-react"
import TechText from "@/components/TechText"
import CircularGallery from "@/components/CircularGallery"
import { buttonVariants } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"

const samples = [
  {
    src: "/images/hero img (1).svg",
    alt: "Audio annotation visualization",
    title: "Every voice has a story",
    subtitle: "Speech collection",
  },
  {
    src: "/images/hero img (1).jpg",
    alt: "City traffic annotated with object detection boxes",
    title: "A world in motion",
    subtitle: "Computer vision",
  },
  {
    src: "/images/hero img (1).png",
    alt: "Document with OCR text and signature annotations",
    title: "Beyond the written word",
    subtitle: "Document intelligence",
  },
  {
    src: "/images/hero img (3).webp",
    alt: "X-ray with bone segmentation and reviewer feedback",
    title: "Every detail matters",
    subtitle: "Medical annotation",
  },
  {
    src: "/images/hero img (2).png",
    alt: "Warehouse parcels and robotic gripper with detection boxes",
    title: "Precision at work",
    subtitle: "Industrial vision",
  },
  {
    src: "/images/hero img (1).webp",
    alt: "Leaf annotated to identify necrosis",
    title: "Grounded in the real world",
    subtitle: "Image segmentation",
  },
  {
    src: "/images/hero img (2).webp",
    alt: "LiDAR point cloud with vehicle bounding boxes",
    title: "A new dimension",
    subtitle: "3D annotation",
  },
  {
    src: "/images/hero img (4).webp",
    alt: "Audio waveform with distinct speaker regions",
    title: "Every voice understood",
    subtitle: "Speech & language",
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
