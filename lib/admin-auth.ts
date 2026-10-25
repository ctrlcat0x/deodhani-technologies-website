import "server-only"
import {
  createHash,
  createHmac,
  randomBytes,
  timingSafeEqual,
} from "node:crypto"
import { cookies } from "next/headers"
import { hasBlobStorage } from "@/lib/openings"

const cookieName = "deodhani-admin"
const sessionSeconds = 8 * 60 * 60

export function adminConfigurationError() {
  if (process.env.VERCEL && !hasBlobStorage())
    return "Connect the private careers Blob store to this Vercel project before editing openings."
  if (
    !process.env.ADMIN_USERNAME ||
    (process.env.ADMIN_PASSWORD?.length ?? 0) < 16 ||
    (process.env.ADMIN_SESSION_SECRET?.length ?? 0) < 32
  ) {
    return "Configure ADMIN_USERNAME, ADMIN_PASSWORD (at least 16 characters), and ADMIN_SESSION_SECRET (at least 32 characters) on the server."
  }
  return null
}

function equal(left: string, right: string) {
  const digest = (value: string) => createHash("sha256").update(value).digest()
  return timingSafeEqual(digest(left), digest(right))
}

function signature(payload: string) {
  return createHmac("sha256", process.env.ADMIN_SESSION_SECRET!)
    .update(
      JSON.stringify([
        process.env.ADMIN_USERNAME,
        process.env.ADMIN_PASSWORD,
        payload,
      ])
    )
    .digest("base64url")
}

// ponytail: per-instance throttling only; use platform firewall limits for distributed protection.
let attempts = { count: 0, resetAt: 0 }

export function verifyCredentials(username: string, password: string) {
  if (Date.now() >= attempts.resetAt)
    attempts = { count: 0, resetAt: Date.now() + 15 * 60 * 1000 }
  if (attempts.count >= 10)
    return "Too many sign-in attempts. Try again in 15 minutes."
  attempts.count++
  const usernameMatches = equal(username, process.env.ADMIN_USERNAME ?? "")
  const passwordMatches = equal(password, process.env.ADMIN_PASSWORD ?? "")
  if (!usernameMatches || !passwordMatches)
    return "Incorrect username or password."
  attempts.count = 0
  return null
}

export async function hasAdminSession() {
  if (adminConfigurationError()) return false
  const token = (await cookies()).get(cookieName)?.value
  if (!token || token.length > 300) return false
  const [expires, nonce, signed, extra] = token.split(".")
  if (
    extra ||
    !expires ||
    !nonce ||
    !signed ||
    !/^\d+$/.test(expires) ||
    !/^[a-f0-9]{32}$/.test(nonce)
  )
    return false
  const expiry = Number(expires)
  if (expiry <= Date.now() || expiry > Date.now() + sessionSeconds * 1000)
    return false
  return equal(signed, signature(`${expires}.${nonce}`))
}

export async function createAdminSession() {
  const expires = Date.now() + sessionSeconds * 1000
  const payload = `${expires}.${randomBytes(16).toString("hex")}`
  ;(await cookies()).set(cookieName, `${payload}.${signature(payload)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/admin",
    maxAge: sessionSeconds,
  })
}

export async function clearAdminSession() {
  ;(await cookies()).set(cookieName, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/admin",
    maxAge: 0,
  })
}
