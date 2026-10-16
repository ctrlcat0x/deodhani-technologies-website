import { IconBrandWhatsapp } from "@tabler/icons-react"
import { company } from "@/lib/company"

export function WhatsAppContact() {
  const message = encodeURIComponent(
    "Hello Deodhani Technologies, I'd like to discuss a data project."
  )

  return (
    <a
      href={`https://wa.me/${company.whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50 motion-safe:hover:scale-105 motion-safe:active:scale-95 motion-reduce:transition-none [&_svg]:size-7"
      aria-label="Chat with Deodhani on WhatsApp"
    >
      <IconBrandWhatsapp aria-hidden="true" />
    </a>
  )
}
