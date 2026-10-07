"use client"

import { useState, type FormEvent } from "react"
import { motion, useReducedMotion } from "motion/react"
import { IconArrowUpRight, IconMail } from "@tabler/icons-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button, buttonVariants } from "@/components/ui/button"
import { company } from "@/lib/company"

export function ContactForm() {
  const reducedMotion = useReducedMotion()
  const [draft, setDraft] = useState<string | null>(null)

  function prepareInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const value = (field: string) => String(data.get(field) ?? "").trim() || "Not specified"
    const name = `${value("First name")} ${value("Last name")}`
    const subject = `Project inquiry from ${value("Company")}`
    const body = [
      "Hello Deodhani Technologies team,",
      "",
      "I'd like to discuss a data project and learn how your team can help.",
      "",
      "CONTACT DETAILS",
      `Name: ${name}`,
      `Business email: ${value("Business email")}`,
      `Company: ${value("Company")}`,
      `Job title: ${value("Job title")}`,
      "",
      "PROJECT OVERVIEW",
      `Estimated budget (USD): ${value("Budget")}`,
      `Timeline: ${value("Timeline")}`,
      "",
      "Project details:",
      value("Project details"),
      "",
      `How I heard about Deodhani: ${value("How you heard about us")}`,
      "",
      "Please let me know the next steps and any additional information you need.",
      "",
      "Best regards,",
      name,
      value("Company"),
    ].join("\r\n")
    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setDraft(mailto)
    window.location.href = mailto
  }

  return (
    <motion.form initial={reducedMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }} onSubmit={prepareInquiry} onChange={() => setDraft(null)} className="rounded-2xl bg-muted/70 p-6 sm:p-9 lg:p-12">
      <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Talk to our AI data team</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">For business and project inquiries. Fields marked * are required.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {[
          { name: "First name", id: "first-name", autoComplete: "given-name" },
          { name: "Last name", id: "last-name", autoComplete: "family-name" },
          { name: "Business email", id: "business-email", autoComplete: "email", type: "email", full: true },
          { name: "Company", id: "company", autoComplete: "organization" },
          { name: "Job title", id: "job-title", autoComplete: "organization-title" },
        ].map((field) => (
          <div key={field.id} className={`grid gap-2.5 ${field.full ? "sm:col-span-2" : ""}`}>
            <Label htmlFor={field.id}>{field.name} <span className="text-primary" aria-hidden="true">*</span></Label>
            <Input id={field.id} name={field.name} type={field.type ?? "text"} autoComplete={field.autoComplete} required maxLength={160} />
          </div>
        ))}
        {[
          { name: "Budget", options: ["Under $5,000", "$5,000 - $25,000", "$25,000 - $100,000", "$100,000+", "To be discussed"] },
          { name: "Timeline", options: ["As soon as possible", "Within a month", "1-3 months", "3+ months", "Exploring options"] },
        ].map((field) => (
          <div key={field.name} className="grid gap-2.5">
            <Label htmlFor={field.name.toLowerCase()}>{field.name} <span className="text-primary" aria-hidden="true">*</span></Label>
            <Select name={field.name} required onValueChange={() => setDraft(null)}>
              <SelectTrigger id={field.name.toLowerCase()} className="w-full"><SelectValue placeholder="Please select" /></SelectTrigger>
              <SelectContent alignItemWithTrigger={false}>
                {field.options.map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        ))}
        <div className="grid gap-2.5 sm:col-span-2">
          <Label htmlFor="project-details">Tell us about your project <span className="text-primary" aria-hidden="true">*</span></Label>
          <Textarea id="project-details" name="Project details" required minLength={20} maxLength={3000} rows={6} placeholder="What are you building? Tell us about your data types, volume, and goals." className="min-h-36" />
        </div>
        <div className="grid gap-2.5 sm:col-span-2">
          <Label htmlFor="referral">How did you first hear about us?</Label>
          <Select name="How you heard about us" onValueChange={() => setDraft(null)}>
            <SelectTrigger id="referral" className="w-full"><SelectValue placeholder="Please select" /></SelectTrigger>
            <SelectContent alignItemWithTrigger={false}>
              {["Search engine", "Social media", "Referral", "Event or conference", "Other"].map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-7 space-y-3 text-xs leading-relaxed text-muted-foreground">
        <p>Open a ready-to-send email in your default mail app with the details above. Review it and send it to Deodhani.</p>
        <p>Please share project requirements only; avoid including confidential datasets or sensitive personal information.</p>
      </div>
      <Button type="submit" size="cta" className="mt-7">Open email inquiry<IconArrowUpRight aria-hidden="true" /></Button>
      {draft && (
        <div role="status" className="mt-6 rounded-lg border border-border bg-background p-5">
          <p className="text-sm font-medium">Your email draft is ready.</p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">If your mail app didn’t open, use the button below. Review your draft and send it when ready. You can also email {company.email} directly.</p>
          <a href={draft} className={buttonVariants({ variant: "outline", size: "lg", className: "mt-4" })}><IconMail aria-hidden="true" />Open email draft</a>
        </div>
      )}
    </motion.form>
  )
}
