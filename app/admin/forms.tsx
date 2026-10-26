"use client"

import { useActionState, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Opening } from "@/lib/openings"
import { removeOpening, saveOpening, signIn, type ActionState } from "./actions"

function Feedback({ state }: { state: ActionState }) {
  return state.error ? (
    <p role="alert" className="admin-error">
      {state.error}
    </p>
  ) : state.success ? (
    <p role="status" className="admin-success">
      {state.success}
    </p>
  ) : null
}

export function AdminLogin() {
  const [state, action, pending] = useActionState(signIn, {})
  return (
    <form action={action} className="admin-form">
      <div>
        <Label htmlFor="admin-username">Username</Label>
        <Input
          id="admin-username"
          name="username"
          autoComplete="username"
          required
          maxLength={100}
        />
      </div>
      <div>
        <Label htmlFor="admin-password">Password</Label>
        <Input
          id="admin-password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          maxLength={256}
        />
      </div>
      <Feedback state={state} />
      <Button type="submit" size="cta" disabled={pending}>
        {pending ? "Signing in…" : "Sign in"}
      </Button>
    </form>
  )
}

export function OpeningEditor({
  opening,
  revision,
  types,
  onSuccess,
}: {
  opening?: Opening
  revision: string
  types: readonly string[]
  onSuccess?: () => void
}) {
  const initialValues = {
    title: opening?.title ?? "",
    location: opening?.location ?? "",
    type: opening?.type ?? "Full-time",
    description: opening?.description ?? "",
    applyUrl: opening?.applyUrl ?? "",
    skills: opening?.skills.join(", ") ?? "",
  }
  const [values, setValues] = useState(initialValues)
  const [state, action, pending] = useActionState(
    async (previous: ActionState, form: FormData) => {
      const result = await saveOpening(previous, form)
      if (result.success) {
        if (!opening) setValues(initialValues)
        onSuccess?.()
      }
      return result
    },
    {}
  )
  function setField(name: keyof typeof values, value: string) {
    setValues((current) => ({ ...current, [name]: value }))
  }
  const prefix = opening?.id ?? "new"
  return (
    <form action={action} className="admin-form">
      <input type="hidden" name="id" value={opening?.id ?? ""} />
      <input type="hidden" name="revision" value={revision} />
      <div>
        <Label htmlFor={`${prefix}-title`}>Job title *</Label>
        <Input
          id={`${prefix}-title`}
          name="title"
          value={values.title}
          onChange={(event) => setField("title", event.target.value)}
          required
          minLength={3}
          maxLength={120}
        />
      </div>
      <div className="admin-form-row">
        <div>
          <Label htmlFor={`${prefix}-location`}>Location *</Label>
          <Input
            id={`${prefix}-location`}
            name="location"
            value={values.location}
            onChange={(event) => setField("location", event.target.value)}
            required
            minLength={2}
            maxLength={160}
            placeholder="Guwahati, Assam / Remote"
          />
        </div>
        <div>
          <Label htmlFor={`${prefix}-type`}>Employment type *</Label>
          <select
            id={`${prefix}-type`}
            name="type"
            value={values.type}
            onChange={(event) => setField("type", event.target.value)}
            required
          >
            {types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <Label htmlFor={`${prefix}-description`}>Role description *</Label>
        <Textarea
          id={`${prefix}-description`}
          name="description"
          value={values.description}
          onChange={(event) => setField("description", event.target.value)}
          required
          minLength={20}
          maxLength={2000}
          rows={5}
        />
        <p className="admin-hint">
          20–2,000 characters. Include responsibilities and relevant experience.
        </p>
      </div>
      <div>
        <Label htmlFor={`${prefix}-apply-url`}>Application link *</Label>
        <Input
          id={`${prefix}-apply-url`}
          name="applyUrl"
          type="url"
          value={values.applyUrl}
          onChange={(event) => setField("applyUrl", event.target.value)}
          required
          maxLength={2048}
          placeholder="https://forms.example.com/apply"
          autoComplete="off"
        />
        <p className="admin-hint">
          Where candidates go when they select Apply now. Use a full http:// or
          https:// link.
        </p>
      </div>
      <div>
        <Label htmlFor={`${prefix}-skills`}>Skills</Label>
        <Input
          id={`${prefix}-skills`}
          name="skills"
          value={values.skills}
          onChange={(event) => setField("skills", event.target.value)}
          maxLength={350}
          placeholder="Annotation, Assamese, Quality review"
        />
        <p className="admin-hint">
          Separate with commas. Up to 8 skills, 40 characters each.
        </p>
      </div>
      <Feedback state={state} />
      <Button type="submit" size="cta" disabled={pending}>
        {pending ? "Saving…" : opening ? "Save changes" : "Publish opening"}
      </Button>
    </form>
  )
}

export function RemoveOpening({
  opening,
  revision,
  onSuccess,
}: {
  opening: Opening
  revision: string
  onSuccess?: () => void
}) {
  const [state, action, pending] = useActionState(
    async (previous: ActionState, form: FormData) => {
      const result = await removeOpening(previous, form)
      if (result.success) onSuccess?.()
      return result
    },
    {}
  )
  return (
    <form action={action} className="admin-form">
      <input type="hidden" name="id" value={opening.id} />
      <input type="hidden" name="revision" value={revision} />
      <p>Remove “{opening.title}” from the careers page?</p>
      <Feedback state={state} />
      <Button type="submit" variant="destructive" disabled={pending}>
        {pending ? "Removing…" : "Remove opening"}
      </Button>
    </form>
  )
}
