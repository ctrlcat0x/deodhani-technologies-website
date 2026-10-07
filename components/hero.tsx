import { MarqueeEntrance } from "@/components/marquee-entrance"
import { TextReveal } from "@/components/text-reveal"
import Image from "next/image"
import { IconArrowUpRight } from "@tabler/icons-react"
import { buttonVariants } from "@/components/ui/button"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { cn } from "@/lib/utils"
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
    <section className="w-full" aria-labelledby="hero-title">
      <div className="px-6 pt-[70px] pb-[46px] text-center max-[850px]:pt-[52px] max-[700px]:px-5 max-[700px]:pt-11 max-[700px]:pb-9 min-[1600px]:pt-[85px]">
        <TextReveal as="h1"
          id="hero-title"
          className="font-mono text-[clamp(34px,4.4vw,66px)] leading-[1.16] font-normal tracking-[-3.4px] text-balance max-[850px]:tracking-[-2px] max-[700px]:text-[clamp(26px,6vw,42px)] max-[700px]:leading-[1.25] max-[700px]:tracking-[-1.5px]"
        >
          REAL HUMAN DATA FOR
          <br />
          AI INFRASTRUCTURE.
        </TextReveal>
        <TextReveal as="p" className="mx-auto mt-[26px] mb-7 max-w-[650px] text-sm leading-[1.8] text-muted-foreground max-[700px]:mt-5 max-[700px]:mb-6 max-[700px]:max-w-[370px] max-[700px]:text-xs">
          Intelligence starts with understanding. We turn images, text, voice,
          and
          <br className="max-[700px]:hidden" /> documents into the high-quality
          data your AI needs to perform.
        </TextReveal>
        <div className="flex justify-center gap-3">
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
      <InfiniteSlider className="pt-3" gap={18} speed={45} speedOnHover={0}>
        {samples.map((sample) => (
          <div
            className={cn(
              "relative shrink-0 overflow-hidden rounded-xl bg-foreground",
              sample.landscape
                ? "aspect-3/2 w-[770px] max-[700px]:w-[525px]"
                : "aspect-9/14 w-[330px] max-[700px]:w-[225px]"
            )}
            key={sample.src}
          >
            <Image
              src={sample.src}
              alt={sample.alt}
              fill
              className="object-cover"
              sizes={
                sample.landscape
                  ? "(max-width: 700px) 525px, 770px"
                  : "(max-width: 700px) 225px, 330px"
              }
              unoptimized={sample.src.endsWith(".svg")}
            />
          </div>
        ))}
      </InfiniteSlider>
      </MarqueeEntrance>
    </section>
  )
}
