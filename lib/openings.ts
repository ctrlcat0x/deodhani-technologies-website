import "server-only"
import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { randomUUID } from "node:crypto"

export const employmentTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
  "Freelance",
] as const

export type Opening = {
  id: string
  title: string
  location: string
  type: (typeof employmentTypes)[number]
  description: string
  applyUrl?: string
  skills: string[]
}

type OpeningsFile = { revision: string; openings: Opening[] }

const filePath = () =>
  resolve(
    /* turbopackIgnore: true */ process.env.OPENINGS_FILE ||
      ".data/openings.json"
  )

function isApplicationUrl(value: unknown): value is string {
  if (typeof value !== "string" || value.length > 2048) return false
  try {
    const url = new URL(value)
    return (
      ["http:", "https:"].includes(url.protocol) &&
      !url.username &&
      !url.password
    )
  } catch {
    return false
  }
}

function isOpening(value: unknown): value is Opening {
  if (!value || typeof value !== "object") return false
  const item = value as Opening
  return (
    typeof item.id === "string" &&
    /^[a-z0-9-]{1,80}$/i.test(item.id) &&
    typeof item.title === "string" &&
    item.title.length >= 3 &&
    item.title.length <= 120 &&
    typeof item.location === "string" &&
    item.location.length >= 2 &&
    item.location.length <= 160 &&
    employmentTypes.includes(item.type) &&
    typeof item.description === "string" &&
    item.description.length >= 20 &&
    item.description.length <= 2000 &&
    (item.applyUrl === undefined || isApplicationUrl(item.applyUrl)) &&
    Array.isArray(item.skills) &&
    item.skills.length <= 8 &&
    item.skills.every(
      (skill) =>
        typeof skill === "string" && skill.length > 0 && skill.length <= 40
    )
  )
}

export async function readOpenings(): Promise<OpeningsFile> {
  let raw: string
  try {
    raw = await readFile(/* turbopackIgnore: true */ filePath(), "utf8")
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT")
      return { revision: "initial", openings: [] }
    throw error
  }
  const data = JSON.parse(raw) as OpeningsFile
  if (
    !data ||
    typeof data.revision !== "string" ||
    !Array.isArray(data.openings) ||
    data.openings.length > 100 ||
    !data.openings.every(isOpening) ||
    new Set(data.openings.map((item) => item.id)).size !== data.openings.length
  ) {
    throw new Error(
      "The openings file is invalid. Restore its backup before editing."
    )
  }
  return data
}

export function openingFromForm(form: FormData): Omit<Opening, "id"> {
  const text = (name: string) => String(form.get(name) ?? "").trim()
  const applyUrl = text("applyUrl")
  if (!isApplicationUrl(applyUrl))
    throw new Error(
      "Enter a full http:// or https:// application link without embedded login credentials."
    )
  const item = {
    title: text("title"),
    location: text("location"),
    type: text("type") as Opening["type"],
    description: text("description"),
    applyUrl: new URL(applyUrl).href,
    skills: [
      ...new Set(
        text("skills")
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean)
      ),
    ],
  }
  if (!isOpening({ id: "validation", ...item }))
    throw new Error(
      "Check the required fields and length limits. Use up to 8 skills, each 40 characters or fewer."
    )
  return item
}

// ponytail: one Node process serializes writes; use a shared store before running multiple instances.
let pendingWrite: Promise<void> = Promise.resolve()

export async function updateOpenings(
  revision: string,
  change: (openings: Opening[]) => Opening[]
) {
  if (process.env.VERCEL)
    throw new Error(
      "File editing requires a Node server with persistent disk. Vercel needs a durable storage service."
    )
  const task = pendingWrite.then(async () => {
    const current = await readOpenings()
    if (current.revision !== revision)
      throw new Error(
        "Openings changed in another tab. Reload this page before saving again."
      )
    const openings = change(current.openings)
    if (openings.length > 100)
      throw new Error("A maximum of 100 openings is supported.")
    const target = filePath()
    await mkdir(dirname(target), { recursive: true })
    const temporary = `${target}.${randomUUID()}.tmp`
    try {
      await writeFile(
        temporary,
        JSON.stringify({ revision: randomUUID(), openings }, null, 2) + "\n",
        { mode: 0o600, flag: "wx", flush: true }
      )
      await writeFile(
        `${target}.bak`,
        JSON.stringify(current, null, 2) + "\n",
        { mode: 0o600, flush: true }
      )
      await rename(temporary, target)
    } finally {
      await rm(temporary, { force: true })
    }
  })
  pendingWrite = task.catch(() => {})
  return task
}
