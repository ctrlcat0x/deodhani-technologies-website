import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClosingCta } from "@/components/closing-cta"
import { WhatsAppContact } from "@/components/whatsapp-contact"
import { SiteBackground } from "@/components/site-background"
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
export const metadata: Metadata = {
  title: "Deodhani Technologies | Human data. Intelligent possibilities.",
  description:
    "Human-powered annotation for images, text, speech, and documents. Build better AI with Deodhani Technologies.",
}
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${mono.variable}`}
    >
      <body>
        <SiteBackground />
        <Header />
        <main id="main">
          {children}
          <ClosingCta />
        </main>
        <Footer />
        <WhatsAppContact />
      </body>
    </html>
  )
}
