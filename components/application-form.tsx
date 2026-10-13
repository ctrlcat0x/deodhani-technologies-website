"use client"

import { useState, type FormEvent } from "react"
import { IconArrowUpRight } from "@tabler/icons-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button, buttonVariants } from "@/components/ui/button"
import { company } from "@/lib/company"
import { TextReveal } from "@/components/text-reveal"

export function ApplicationForm({ kind }: { kind: "careers" | "vendor" }) {
  const vendor = kind === "vendor"
  const [draft, setDraft] = useState<string | null>(null)
  const fields = [
    { name: "Full name", type: "text", autoComplete: "name", required: true },
    { name: "Email", type: "email", autoComplete: "email", required: true },
    {
      name: vendor ? "Company or team name" : "Area of interest",
      type: "text",
      required: true,
    },
    {
      name: "Location",
      type: "text",
      autoComplete: "country-name",
      required: true,
    },
    { name: "Languages", type: "text", required: true },
    {
      name: vendor ? "Website or portfolio URL" : "Resume or portfolio URL",
      type: "url",
      required: false,
    },
  ]

  function prepareApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = `${vendor ? "Vendor inquiry" : "Career application"}: ${data.get("Full name")}`
    const body = [
      "Hello Deodhani team,",
      "",
      vendor
        ? "I would like to discuss joining your contributor or vendor network."
        : "I would like to be considered for opportunities with Deodhani.",
      "",
      ...fields.map(
        ({ name }) =>
          `${name}: ${String(data.get(name) ?? "").trim() || "Not provided"}`
      ),
      "",
      "Experience and availability:",
      String(data.get("Experience") ?? "").trim(),
    ].join("\r\n")
    setDraft(
      `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    )
  }

  return (
    <TextReveal as="div" delay={0.08}>
      <form
        onSubmit={prepareApplication}
        onChange={() => setDraft(null)}
        className="rounded-2xl bg-muted/70 p-6 sm:p-9"
      >
        <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
          {vendor ? "Introduce your team." : "Tell us about yourself."}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Fields marked * are required. Prepare an email draft, then review and
          send it in your mail app.
        </p>
        <fieldset className="mt-8 grid gap-6 sm:grid-cols-2">
          <legend className="sr-only">
            {vendor ? "Vendor details" : "Candidate details"}
          </legend>
          {fields.map((field, index) => (
            <div key={field.name} className="flex flex-col gap-2.5">
              <Label htmlFor={`${kind}-${index}`}>
                {field.name}
                {field.required ? " *" : " (optional)"}
              </Label>
              <Input
                id={`${kind}-${index}`}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                required={field.required}
                maxLength={300}
              />
            </div>
          ))}
          <div className="flex flex-col gap-2.5 sm:col-span-2">
            <Label htmlFor={`${kind}-experience`}>
              {vendor
                ? "Capabilities, team size, and availability"
                : "Experience and availability"}{" "}
              *
            </Label>
            <Textarea
              id={`${kind}-experience`}
              name="Experience"
              rows={5}
              required
              minLength={20}
              maxLength={3000}
              placeholder={
                vendor
                  ? "Tell us about your services, expertise, team capacity, and the types of projects you support."
                  : "Tell us about your skills, relevant work, preferred role, and when you could start."
              }
            />
          </div>
        </fieldset>
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Share professional information only. You can attach supporting
          documents in your email app before sending.
        </p>
        <Button type="submit" size="cta" className="mt-6">
          Prepare {vendor ? "vendor inquiry" : "application"}
          <IconArrowUpRight data-icon="inline-end" aria-hidden="true" />
        </Button>
        {draft && (
          <div role="status" className="mt-6 border-t pt-6">
            <p className="font-medium">Your email draft is ready.</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Open the draft, review your details, and send it to{" "}
              {company.email}. Nothing has been submitted yet.
            </p>
            <a
              href={draft}
              className={buttonVariants({
                variant: "outline",
                size: "cta",
                className: "mt-4",
              })}
            >
              Open email draft
              <IconArrowUpRight data-icon="inline-end" aria-hidden="true" />
            </a>
          </div>
        )}
      </form>
    </TextReveal>
  )
}
