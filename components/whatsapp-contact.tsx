"use client"
import { useState } from "react"
import { IconBrandWhatsapp, IconX, IconMail } from "@tabler/icons-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { company } from "@/lib/company"
export function WhatsAppContact() {
  const [open, setOpen] = useState(false)
  const number = company.whatsappNumber.replace(/\D/g, "")
  const message = encodeURIComponent(
    "Hello Deodhani Technologies, I'd like to discuss a data project."
  )
  const floatingClass = buttonVariants({
    variant: "whatsapp",
    size: "whatsapp",
  })
  return (
    <div className="fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-50 sm:right-7 sm:bottom-7">
      {number ? (
        <a
          href={`https://wa.me/${number}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className={floatingClass}
          aria-label="Chat with Deodhani on WhatsApp"
        >
          <IconBrandWhatsapp aria-hidden="true" />
        </a>
      ) : (
        <>
          <Button
            variant="whatsapp"
            size="whatsapp"
            onClick={() => setOpen(!open)}
            aria-label={
              open ? "Close WhatsApp contact" : "Open WhatsApp contact"
            }
            aria-expanded={open}
            aria-controls="whatsapp-contact"
          >
            {open ? (
              <IconX aria-hidden="true" />
            ) : (
              <IconBrandWhatsapp aria-hidden="true" />
            )}
          </Button>
          {open && (
            <div
              id="whatsapp-contact"
              className="absolute right-0 bottom-19 w-[min(320px,calc(100vw-40px))] rounded-xl border border-border bg-background p-6 text-foreground shadow-xl"
            >
              <h2 className="mb-2 text-base font-semibold">
                Let’s talk about your data.
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                WhatsApp contact will be available soon. You can reach our team
                by email in the meantime.
              </p>
              <a
                href={`mailto:${company.email}`}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                <IconMail data-icon="inline-start" aria-hidden="true" />
                Email our team
              </a>
            </div>
          )}
        </>
      )}
    </div>
  )
}
