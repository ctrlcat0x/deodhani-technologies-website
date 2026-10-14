"use client"

// Adapted from @ui-layouts/carousel; retain the primitives used by testimonials.
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ComponentProps,
} from "react"
import { cn } from "@/lib/utils"

interface CarouselContextValue {
  emblaApi: EmblaCarouselType | undefined
  emblaRef: ReturnType<typeof useEmblaCarousel>[0]
  selectedIndex: number
}

const CarouselContext = createContext<CarouselContextValue | null>(null)

export function useCarousel() {
  const context = useContext(CarouselContext)
  if (!context) throw new Error("useCarousel must be used within a Carousel")
  return context
}

interface CarouselProps extends ComponentProps<"div"> {
  options?: EmblaOptionsType
  plugins?: Parameters<typeof useEmblaCarousel>[1]
}

export function Carousel({
  options,
  plugins,
  children,
  className,
  onKeyDown,
  ...props
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    function handleSelect(api: EmblaCarouselType) {
      setSelectedIndex(api.selectedScrollSnap())
    }
    handleSelect(emblaApi)
    emblaApi.on("select", handleSelect).on("reInit", handleSelect)
    return () => {
      emblaApi.off("select", handleSelect).off("reInit", handleSelect)
    }
  }, [emblaApi])

  return (
    <CarouselContext.Provider value={{ emblaRef, emblaApi, selectedIndex }}>
      <div
        role="region"
        aria-roledescription="carousel"
        className={cn("relative w-full", className)}
        onKeyDown={(event) => {
          onKeyDown?.(event)
          if (event.defaultPrevented) return
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault()
            if (event.key === "ArrowLeft") emblaApi?.scrollPrev()
            else emblaApi?.scrollNext()
          }
        }}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

export function SliderContainer({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  const { emblaRef } = useCarousel()
  return (
    <div ref={emblaRef} className="overflow-hidden" {...props}>
      <div className={cn("flex touch-pan-y touch-pinch-zoom", className)}>
        {children}
      </div>
    </div>
  )
}

export function Slider({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
      {...props}
    />
  )
}

export function SliderPrevButton({
  onClick,
  ...props
}: ComponentProps<"button">) {
  const { emblaApi } = useCarousel()
  return (
    <button
      type="button"
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) emblaApi?.scrollPrev()
      }}
      {...props}
    />
  )
}

export function SliderNextButton({
  onClick,
  ...props
}: ComponentProps<"button">) {
  const { emblaApi } = useCarousel()
  return (
    <button
      type="button"
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) emblaApi?.scrollNext()
      }}
      {...props}
    />
  )
}
