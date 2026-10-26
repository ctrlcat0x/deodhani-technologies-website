import type { Metadata } from "next"
import Link from "next/link"
import { connection } from "next/server"
import { IconLock } from "@tabler/icons-react"
import { adminConfigurationError, hasAdminSession } from "@/lib/admin-auth"
import { employmentTypes, hasBlobStorage, readOpenings } from "@/lib/openings"
import { AdminLogin } from "./forms"
import { OpeningsManager } from "./management"

export const runtime = "nodejs"
export const metadata: Metadata = {
  title: "Careers admin | Deodhani Technologies",
  robots: { index: false, follow: false },
}

export default async function AdminPage() {
  await connection()
  const configured = adminConfigurationError()
  const authenticated = await hasAdminSession()
  if (!authenticated)
    return (
      <section className="admin-shell admin-login">
        <span className="opening-icon">
          <IconLock aria-hidden="true" />
        </span>
        <p className="service-label">Deodhani admin</p>
        <h1>Manage careers.</h1>
        <p className="admin-lead">
          Sign in to publish and update job openings.
        </p>
        {configured ? (
          <p role="alert" className="admin-error">
            {configured}
          </p>
        ) : (
          <AdminLogin />
        )}
        <Link href="/careers" className="admin-back">
          Back to careers
        </Link>
      </section>
    )

  const { openings, revision } = await readOpenings()
  return (
    <section className="admin-shell">
      <OpeningsManager
        openings={openings}
        revision={revision}
        types={employmentTypes}
      />
      <p className="admin-storage-note">
        {hasBlobStorage()
          ? "Openings are saved securely in Vercel Blob and remain available across deployments."
          : "Openings are stored locally. Use persistent disk and include the data file in server backups."}
      </p>
    </section>
  )
}
