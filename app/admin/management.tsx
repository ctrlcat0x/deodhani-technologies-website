"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { IconPencil, IconPlus, IconTrash } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { Opening } from "@/lib/openings"
import { OpeningEditor, RemoveOpening } from "./forms"

type DialogState =
  { kind: "add" } | { kind: "edit" | "remove"; opening: Opening }

export function OpeningsManager({
  openings,
  revision,
  types,
}: {
  openings: Opening[]
  revision: string
  types: readonly string[]
}) {
  const [dialog, setDialog] = useState<DialogState | null>(null)
  const router = useRouter()
  const finish = () => {
    setDialog(null)
    router.refresh()
  }

  return (
    <>
      <div className="admin-heading">
        <div>
          <p className="service-label">Deodhani admin</p>
          <h1>Job openings</h1>
          <p className="admin-lead">
            {openings.length} published. Saved changes appear on the careers
            page immediately.
          </p>
        </div>
        <Button size="cta" onClick={() => setDialog({ kind: "add" })}>
          <IconPlus data-icon="inline-start" />
          Add new opening
        </Button>
      </div>
      <div className="admin-table-heading">
        <h2 id="published-title">Published openings</h2>
      </div>
      <div className="admin-table-wrap">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Position</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Employment type</TableHead>
              <TableHead>Application link</TableHead>
              <TableHead className="admin-actions-column">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {openings.map((opening) => (
              <TableRow key={opening.id}>
                <TableCell className="admin-position-cell">
                  <strong>{opening.title}</strong>
                  <span>{opening.description}</span>
                </TableCell>
                <TableCell>{opening.location}</TableCell>
                <TableCell>{opening.type}</TableCell>
                <TableCell>
                  <a
                    className="admin-apply-link"
                    href={opening.applyUrl}
                    target="_blank"
                    rel="noreferrer"
                    title={opening.applyUrl}
                  >
                    View link
                  </a>
                </TableCell>
                <TableCell>
                  <div className="admin-row-actions">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setDialog({ kind: "edit", opening })}
                    >
                      <IconPencil data-icon="inline-start" />
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => setDialog({ kind: "remove", opening })}
                    >
                      <IconTrash data-icon="inline-start" />
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {!openings.length && (
              <TableRow>
                <TableCell colSpan={5} className="admin-table-empty">
                  No openings yet. Add your first opening to publish it.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Dialog
        open={dialog !== null}
        onOpenChange={(open) => {
          if (!open) setDialog(null)
        }}
      >
        {dialog && (
          <DialogContent className="admin-dialog-content sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {dialog.kind === "add"
                  ? "Add new opening"
                  : dialog.kind === "edit"
                    ? "Edit opening"
                    : "Remove opening"}
              </DialogTitle>
              <DialogDescription>
                {dialog.kind === "remove"
                  ? "This removes the role from the careers page."
                  : "Apply now uses the application link. Get in touch opens an email to the company."}
              </DialogDescription>
            </DialogHeader>
            {dialog.kind === "remove" ? (
              <RemoveOpening
                opening={dialog.opening}
                revision={revision}
                onSuccess={finish}
              />
            ) : (
              <OpeningEditor
                opening={dialog.kind === "edit" ? dialog.opening : undefined}
                revision={revision}
                types={types}
                onSuccess={finish}
              />
            )}
            {dialog.kind === "remove" && (
              <DialogFooter>
                <Button variant="outline" onClick={() => setDialog(null)}>
                  Cancel
                </Button>
              </DialogFooter>
            )}
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}
