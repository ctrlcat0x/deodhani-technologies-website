"use server"

import { randomUUID } from "node:crypto"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import {
  adminConfigurationError,
  clearAdminSession,
  createAdminSession,
  hasAdminSession,
  verifyCredentials,
} from "@/lib/admin-auth"
import { openingFromForm, updateOpenings } from "@/lib/openings"

export type ActionState = {
  error?: string
  success?: string
}

export async function signIn(
  _: ActionState,
  form: FormData
): Promise<ActionState> {
  const setup = adminConfigurationError()
  if (setup) return { error: setup }
  const username = String(form.get("username") ?? "")
  const password = String(form.get("password") ?? "")
  if (username.length > 100 || password.length > 256)
    return { error: "Incorrect username or password." }
  const error = verifyCredentials(username, password)
  if (error) return { error }
  await createAdminSession()
  redirect("/admin")
}

export async function signOut() {
  await clearAdminSession()
  redirect("/admin")
}

async function requireAdmin() {
  if (!(await hasAdminSession()))
    throw new Error(
      "Your session has expired. Sign in again before making changes."
    )
}

export async function saveOpening(
  _: ActionState,
  form: FormData
): Promise<ActionState> {
  try {
    await requireAdmin()
    const opening = openingFromForm(form)
    const id = String(form.get("id") ?? "")
    await updateOpenings(String(form.get("revision") ?? ""), (openings) => {
      if (!id) return [...openings, { ...opening, id: randomUUID() }]
      if (!openings.some((item) => item.id === id))
        throw new Error("This opening no longer exists. Reload the page.")
      return openings.map((item) =>
        item.id === id ? { ...opening, id } : item
      )
    })
  } catch (error) {
    return { error: actionError(error) }
  }
  revalidatePath("/careers")
  revalidatePath("/admin")
  return { success: "Opening saved. The careers page is updated." }
}

export async function removeOpening(
  _: ActionState,
  form: FormData
): Promise<ActionState> {
  try {
    await requireAdmin()
    const id = String(form.get("id") ?? "")
    await updateOpenings(String(form.get("revision") ?? ""), (openings) => {
      if (!openings.some((item) => item.id === id))
        throw new Error("This opening no longer exists. Reload the page.")
      return openings.filter((item) => item.id !== id)
    })
  } catch (error) {
    return { error: actionError(error) }
  }
  revalidatePath("/careers")
  revalidatePath("/admin")
  return { success: "Opening removed." }
}

function actionError(error: unknown) {
  if (error instanceof Error && !("code" in error)) return error.message
  return "Unable to save openings. Check the server's file permissions and persistent storage, then try again."
}
