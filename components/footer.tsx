import { TextReveal } from "@/components/text-reveal"
import { company } from "@/lib/company"
import Link from "next/link"
import { IconArrowUpRight, IconArrowUp } from "@tabler/icons-react"
import { Logo } from "@/components/logo"
import { buttonVariants } from "@/components/ui/button"
const groups = [
  {
    title: "Data products",
    links: [
      ["Image annotation", "/#data-products"],
      ["Video annotation", "/#data-products"],
      ["Text & documents", "/#data-products"],
      ["Speech & audio", "/#data-products"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Computer vision", "/#data-products"],
      ["Language & speech", "/#data-products"],
      ["OTS datasets", "/#data-products"],
      ["Enterprise data", "/#annotation-team"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Deodhani", company.aboutUrl],
      ["Get in touch", "mailto:info@deodhanitechnologies.com"],
      ["Careers", "https://www.deodhanitechnologies.com/Home/Jobs.html"],
    ],
  },
]
export function Footer() {
  return (
    <footer
      className="bg-footer px-16 pt-16 pb-7 text-footer-foreground max-[1100px]:px-10 max-[1100px]:pt-[50px] max-[700px]:px-[25px] max-[700px]:pt-10 max-[700px]:pb-[25px]"
      id="about"
    >
      <div className="mx-auto max-w-[1660px]">
        <div className="grid grid-cols-[1.6fr_1fr_1fr_0.8fr] gap-16 max-[1100px]:gap-9 max-[850px]:grid-cols-3 max-[850px]:gap-8 max-[700px]:grid-cols-2 max-[700px]:gap-x-5 max-[700px]:gap-y-[30px]">
          <div className="max-[850px]:col-span-full max-[850px]:flex max-[850px]:items-center max-[850px]:gap-[30px] max-[700px]:block">
            <Link
              href="/"
              className="block w-[190px] shrink-0 rounded-lg bg-background px-2.5 py-1 max-[700px]:w-[170px]"
              aria-label="Deodhani Technologies home"
            >
              <Logo className="h-[104px] max-[700px]:h-[92px]" />
            </Link>
            <TextReveal as="p" className="mt-5 text-[13px] leading-[1.8] text-footer-muted max-[850px]:mt-0 max-[700px]:mt-[18px]">
              Human expertise at the
              <br />
              heart of intelligent systems.
            </TextReveal>
          </div>
          {groups.map((group) => (
            <nav
              className="flex flex-col items-start gap-[13px] pt-2 max-[700px]:gap-3"
              aria-label={group.title}
              key={group.title}
            >
              <TextReveal as="h2" className="mb-3 text-[13px] font-semibold text-footer-accent max-[700px]:mb-1.5 max-[700px]:text-xs">
                {group.title}
              </TextReveal>
              {group.links.map(([label, href]) => (
                <a
                  href={href}
                  key={label}
                  className="text-sm leading-normal text-footer-link transition-colors hover:text-footer-accent hover:underline hover:underline-offset-4 motion-reduce:transition-none max-[700px]:text-xs"
                >
                  {label}
                </a>
              ))}
            </nav>
          ))}
        </div>
        <div className="mt-20 mb-[62px] grid grid-cols-[1.6fr_1fr] items-end gap-20 max-[1100px]:gap-10 max-[850px]:my-[50px] max-[850px]:grid-cols-1">
          <TextReveal as="p" className="text-[clamp(38px,4.6vw,72px)] leading-[1.12] font-normal tracking-[-2.8px] max-[1100px]:text-[44px] max-[1100px]:tracking-[-1.8px] max-[850px]:text-[clamp(36px,6vw,54px)] max-[700px]:text-[clamp(31px,7vw,45px)] max-[700px]:tracking-[-1.3px]">
            Human data.
            <br />
            Intelligent possibilities.
          </TextReveal>
          <div
            className="border-l border-footer-foreground/15 pl-12 max-[1100px]:pl-[30px] max-[850px]:border-l-0 max-[850px]:pl-0"
            id="contact"
          >
            <span className="text-[11px] text-footer-accent">
              Build with Deodhani
            </span>
            <TextReveal as="h2" className="mt-[15px] mb-3 text-2xl leading-[1.35] font-medium tracking-[-0.5px] max-[700px]:text-[23px]">
              Your next breakthrough
              <br />
              starts with better data.
            </TextReveal>
            <TextReveal as="p" className="mb-[22px] text-[13px] leading-[1.8] text-footer-muted">
              Tell us what you’re building.
              <br />
              Let’s find the right data for it.
            </TextReveal>
            <TextReveal as="p" className="mb-4 text-xs leading-relaxed text-footer-muted">
              {company.email}
              <br />
              {company.hours}
            </TextReveal>
            <a
              href={`mailto:${company.email}`}
              className={buttonVariants({ size: "cta" })}
            >
              Start a conversation
              <IconArrowUpRight data-icon="inline-end" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 border-t border-footer-foreground/15 pt-[25px] text-[11px] text-footer-muted max-[700px]:items-start max-[700px]:text-[9px] max-[700px]:leading-[1.7]">
          <span className="max-[700px]:max-w-[230px]">
            © {new Date().getFullYear()} Deodhani Technologies. All rights
            reserved.
          </span>
          <a
            href="#main"
            className="group flex items-center gap-2 whitespace-nowrap text-footer-link"
          >
            Back to top
            <IconArrowUp
              className="size-4 transition-transform motion-safe:group-hover:-translate-y-0.5 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
