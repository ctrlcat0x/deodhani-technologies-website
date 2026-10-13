import { IconBrandWhatsapp } from "@tabler/icons-react"
import { buttonVariants } from "@/components/ui/button"
import { company } from "@/lib/company"
import { cn } from "@/lib/utils"

export function WhatsAppContact() {
  const message = encodeURIComponent(
    "Hello Deodhani Technologies, I'd like to discuss a data project."
  )
  return (
    <div className="fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-50 sm:right-7 sm:bottom-7">
      <a
        href={`https://wa.me/${company.whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant: "whatsapp", size: "whatsapp" }))}
        aria-label="Chat with Deodhani on WhatsApp"
      >
        <IconBrandWhatsapp aria-hidden="true" />
      </a>
    </div>
  )
}
