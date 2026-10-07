"use client"
import { useState } from "react"
import { Dialog } from "@base-ui/react/dialog"
import { IconX, IconMenu2 } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { companyLinks, productLinks } from "@/components/nav-links"
import { LinkItem } from "@/components/sheard"
export function MobileNav() {
  const [open, setOpen] = useState(false)
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
            <h2 className="mt-5 mb-2.5 text-xs text-muted-foreground">
              Data products
            </h2>
            {productLinks.map((link) => (
              <LinkItem
                key={link.label}
                {...link}
                onClick={() => setOpen(false)}
              />
            ))}
            <div className="flex flex-col gap-[18px] px-3.5 py-5 text-sm">
              {[
                ["OTS datasets", "/#data-products"],
                ["Enterprise data", "/#annotation-team"],
              ].map(([label, href]) => (
                <a key={label} href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
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
          </nav>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
