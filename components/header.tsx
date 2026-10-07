"use client"
import Link from "next/link"
import { IconArrowUpRight } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import { useScroll } from "@/hooks/use-scroll"
import { buttonVariants } from "@/components/ui/button"
import { DesktopNav } from "@/components/desktop-nav"
import { MobileNav } from "@/components/mobile-nav"
export function Header() {
  const scrolled = useScroll(10)
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background/95 backdrop-blur-lg transition-shadow duration-200 motion-reduce:transition-none",
        scrolled && "shadow-lg shadow-foreground/5"
      )}
    >
      <a
        className="absolute -top-25 bg-background p-3 focus:top-0"
        href="#main"
      >
        Skip to content
      </a>
      <nav
        className="mx-auto flex h-25 max-w-[1800px] items-center justify-between gap-6 px-16 max-[1100px]:gap-4 max-[1100px]:px-7 max-[850px]:h-21 max-[700px]:gap-2.5 max-[700px]:px-5"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="w-40 shrink-0 max-[1100px]:w-[125px] max-[700px]:w-[115px]"
          aria-label="Deodhani Technologies home"
        >
          <Logo priority className="h-[90px] max-[850px]:h-19" />
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-3 max-[700px]:gap-1">
          <a href="mailto:info@deodhanitechnologies.com" className={buttonVariants({ size: "header" })}>
            Get in touch
            <IconArrowUpRight data-icon="inline-end" aria-hidden="true" />
          </a>
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}
