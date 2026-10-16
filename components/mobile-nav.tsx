"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dialog } from "@base-ui/react/dialog"
import { IconX, IconMenu2, IconHome } from "@tabler/icons-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { companyLinks, serviceLinks } from "@/components/nav-links"
import { LinkItem } from "@/components/sheard"
export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        render={
          <Button
            size="icon"
            variant="ghost"
            className="hidden max-[850px]:inline-flex"
            aria-label="Open navigation"
          />
        }
      >
        <IconMenu2 aria-hidden="true" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-60 bg-foreground/40 backdrop-blur-sm transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none" />
        <Dialog.Popup className="fixed inset-3.5 z-61 overflow-y-auto rounded-[14px] bg-background p-[22px] transition-[opacity,transform] duration-200 outline-none data-ending-style:-translate-y-3 data-ending-style:opacity-0 data-starting-style:-translate-y-3 data-starting-style:opacity-0 motion-reduce:transition-none max-[700px]:inset-2.5 max-[700px]:p-5">
          <div className="mb-6 flex items-center justify-between">
            <Dialog.Title className="text-[17px] font-semibold">
              Explore Deodhani
            </Dialog.Title>
            <Dialog.Close
              render={
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label="Close navigation"
                />
              }
            >
              <IconX aria-hidden="true" />
            </Dialog.Close>
          </div>
          <nav aria-label="Mobile navigation">
            {pathname !== "/" && (
              <LinkItem
                label="Home"
                href="/"
                description="Back to the homepage"
                icon={<IconHome aria-hidden="true" />}
                onClick={() => setOpen(false)}
              />
            )}
            <h2 className="mt-5 mb-2.5 text-xs text-muted-foreground">
              Services
            </h2>
            {serviceLinks.map((link) => (
              <LinkItem
                key={link.label}
                {...link}
                onClick={() => setOpen(false)}
              />
            ))}
            <h2 className="mt-5 mb-2.5 text-xs text-muted-foreground">
              Company
            </h2>
            {companyLinks.map((link) => (
              <LinkItem
                key={link.label}
                {...link}
                onClick={() => setOpen(false)}
              />
            ))}
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className: "mt-6 w-full",
              })}
              onClick={() => setOpen(false)}
            >
              Get in touch
            </Link>
          </nav>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
