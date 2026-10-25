import type { Metadata } from "next"
import Link from "next/link"
import { connection } from "next/server"
import { IconBriefcase, IconLock } from "@tabler/icons-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { adminConfigurationError, hasAdminSession } from "@/lib/admin-auth"
import { employmentTypes, hasBlobStorage, readOpenings } from "@/lib/openings"
import { AdminLogin, OpeningEditor, RemoveOpening } from "./forms"
import { signOut } from "./actions"

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
      <div className="admin-heading">
        <div>
          <p className="service-label">Deodhani admin</p>
          <h1>Job openings</h1>
          <p className="admin-lead">
            {openings.length} published. Saved changes appear on the careers
            page immediately.
          </p>
        </div>
        <div className="admin-toolbar">
          <Link
            href="/careers#opportunities-title"
            className={buttonVariants({ variant: "outline" })}
          >
            View careers page
          </Link>
          <form action={signOut}>
            <Button type="submit" variant="outline">
              Sign out
            </Button>
          </form>
        </div>
      </div>
      <div className="admin-workspace">
        <section className="admin-panel">
          <h2>Add an opening</h2>
          <p className="admin-hint">
            Fields marked * are required. Apply now uses your application link;
            Get in touch opens an email to the company.
          </p>
          <OpeningEditor revision={revision} types={employmentTypes} />
        </section>
        <section className="admin-list" aria-labelledby="published-title">
          <h2 id="published-title">Published openings</h2>
          {!openings.length && (
            <div className="admin-panel admin-empty">
              <IconBriefcase aria-hidden="true" />
              <h3>Your first opening starts here.</h3>
              <p>
                Use the form to add a role. No sample vacancies are published.
              </p>
            </div>
          )}
          {openings.map((opening) => (
            <article key={opening.id} className="admin-panel">
              <h3>{opening.title}</h3>
              <p className="admin-hint">
                {opening.location} · {opening.type}
              </p>
              <details className="admin-edit">
                <summary>Edit opening</summary>
                <OpeningEditor
                  opening={opening}
                  revision={revision}
                  types={employmentTypes}
                />
              </details>
              <RemoveOpening opening={opening} revision={revision} />
            </article>
          ))}
        </section>
      </div>
      <p className="admin-storage-note">
        {hasBlobStorage()
          ? "Openings are saved securely in Vercel Blob and remain available across deployments."
          : "Openings are stored locally. Use persistent disk and include the data file in server backups."}
      </p>
    </section>
  )
}
