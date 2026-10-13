import Image from "next/image"
import Link from "next/link"
import { TextReveal } from "@/components/text-reveal"

export function PageIntro({
  label,
  title,
  description,
  image,
  alt,
  caption,
}: {
  label: string
  title: string
  description: string
  image?: string
  alt?: string
  caption?: string
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pt-6 pb-12 sm:px-10 lg:px-16 lg:pb-16">
      <TextReveal
        as="nav"
        aria-label="Breadcrumb"
        className="mb-12 flex flex-wrap gap-2 text-xs text-muted-foreground sm:mb-16"
      >
        <Link href="/" className="hover:text-foreground hover:underline">
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{label}</span>
      </TextReveal>
      <div className="mx-auto max-w-4xl text-center">
        <TextReveal
          as="h1"
          className="text-4xl leading-[1.08] font-medium tracking-[-0.045em] text-balance sm:text-6xl lg:text-[68px]"
        >
          {title}
        </TextReveal>
        <TextReveal
          as="p"
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {description}
        </TextReveal>
      </div>
      {image && (
        <TextReveal as="figure" delay={0.12} className="mt-10 sm:mt-14">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted sm:aspect-[2.15/1]">
            <Image
              src={image}
              alt={alt ?? ""}
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1272px"
              className="object-cover"
            />
          </div>
          <figcaption className="mx-auto mt-4 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            {caption}
          </figcaption>
        </TextReveal>
      )}
    </section>
  )
}
