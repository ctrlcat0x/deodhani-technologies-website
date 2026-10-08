import { MarqueeEntrance } from "@/components/marquee-entrance"
import { TextReveal } from "@/components/text-reveal"
import { HeroCarousel } from "@/components/hero-carousel"
import { IconArrowUpRight } from "@tabler/icons-react"
import { buttonVariants } from "@/components/ui/button"
const samples = [
  {
    src: "/images/hero img (1).png",
    alt: "Generated document with OCR bounding boxes around text, tables, and signature",
    landscape: false,
  },
  {
    src: "/images/hero img (3).webp",
    alt: "X-ray image with bone segmentation and annotation review",
    landscape: false,
  },
  {
    src: "/images/hero img (1).jpg",
    alt: "City traffic with cars, signs, and streetlights annotated",
    landscape: true,
  },
  {
    src: "/images/hero img (1).webp",
    alt: "Leaf with an outlined region of necrosis",
    landscape: false,
  },
  {
    src: "/images/hero img (1).svg",
    alt: "Audio annotation waveform and transcription example",
    landscape: false,
  },
  {
    src: "/images/hero img (2).png",
    alt: "Generated warehouse conveyor with object detection boxes around parcels and a robotic gripper",
    landscape: false,
  },
  {
    src: "/images/hero img (2).webp",
    alt: "LiDAR point cloud with three-dimensional bounding boxes around vehicles",
    landscape: true,
  },
  {
    src: "/images/hero img (4).webp",
    alt: "Speech annotation with separate waveform regions for two speakers",
    landscape: true,
  },
]
export function Hero() {
  return (
    <section
      className="mx-auto grid w-full max-w-[1660px] items-center gap-12 px-5 py-12 sm:px-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-16 lg:py-20"
      aria-labelledby="hero-title"
    >
      <div className="text-left">
        <TextReveal
          as="h1"
          id="hero-title"
          className="max-w-[760px] font-mono text-[clamp(34px,3.6vw,60px)] leading-[1.12] font-normal tracking-[-2px] text-balance sm:tracking-[-2.8px]"
        >
          REAL HUMAN DATA FOR
          <br />
          AI INFRASTRUCTURE.
        </TextReveal>
        <TextReveal
          as="p"
          className="mt-7 mb-8 max-w-[490px] text-sm leading-[1.8] text-muted-foreground sm:text-base"
        >
          Intelligence starts with understanding. We turn images, text, voice,
          and documents into the high-quality data your AI needs to perform.
        </TextReveal>
        <div className="flex flex-wrap gap-3">
          <a href="#data-products" className={buttonVariants({ size: "cta" })}>
            Explore our data
            <IconArrowUpRight data-icon="inline-end" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className={buttonVariants({ variant: "outline", size: "cta" })}
          >
            Talk to our team
            <IconArrowUpRight data-icon="inline-end" aria-hidden="true" />
          </a>
        </div>
      </div>
      <MarqueeEntrance>
        <HeroCarousel images={samples} />
      </MarqueeEntrance>
    </section>
  )
}
