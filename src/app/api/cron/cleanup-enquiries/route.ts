/**
 * Enquiry retention cleanup — Phase 7
 *
 * Deletes enquiry records older than 24 months UNLESS retain_beyond_24m = TRUE.
 * Designed to be triggered by Vercel Cron (see vercel.json).
 *
 * Security: protected by CRON_SECRET environment variable.
 * Set CRON_SECRET in Vercel and include it as the Authorization header.
 *
 * IMPORTANT: This endpoint does NOT delete records where:
 *   - retain_beyond_24m = TRUE (established client relationship)
 *   - Records are younger than 24 months
 *
 * Do NOT run this endpoint without reviewing eligible records first in production.
 */

import { NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function POST(request: Request) {
  // ── Verify CRON_SECRET ────────────────────────────────────────────────────
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret) {
    console.error("CRON_SECRET is not configured — cleanup endpoint is disabled.")
    return NextResponse.json({ message: "Not configured." }, { status: 503 })
  }

  const authHeader = request.headers.get("authorization")
  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 })
  }

  const cutoff = new Date()
  cutoff.setMonth(cutoff.getMonth() - 24)

  try {
    // Count eligible records first (audit log)
    const [{ eligible_consultation }] = await sql`
      SELECT COUNT(*) AS eligible_consultation
      FROM consultation_enquiries
      WHERE created_at < ${cutoff.toISOString()}
        AND retain_beyond_24m = FALSE
    ` as [{ eligible_consultation: string }]

    const [{ eligible_contact }] = await sql`
      SELECT COUNT(*) AS eligible_contact
      FROM contact_enquiries
      WHERE created_at < ${cutoff.toISOString()}
        AND retain_beyond_24m = FALSE
    ` as [{ eligible_contact: string }]

    console.log(
      `[retention-cleanup] Eligible for deletion — consultation: ${eligible_consultation}, contact: ${eligible_contact}. Cutoff: ${cutoff.toISOString()}`
    )

    // ── Delete eligible consultation enquiries ──────────────────────────────
    const deletedConsultation = await sql`
      DELETE FROM consultation_enquiries
      WHERE created_at < ${cutoff.toISOString()}
        AND retain_beyond_24m = FALSE
      RETURNING id
    `

    // ── Delete eligible contact enquiries ───────────────────────────────────
    const deletedContact = await sql`
      DELETE FROM contact_enquiries
      WHERE created_at < ${cutoff.toISOString()}
        AND retain_beyond_24m = FALSE
      RETURNING id
    `

    const result = {
      ok: true,
      cutoff: cutoff.toISOString(),
      deleted: {
        consultation: deletedConsultation.length,
        contact: deletedContact.length,
      },
    }

    console.log("[retention-cleanup] Completed:", result)
    return NextResponse.json(result)
  } catch (error) {
    console.error("[retention-cleanup] Error:", error)
    return NextResponse.json(
      { message: "Cleanup failed. Check server logs." },
      { status: 500 }
    )
  }
}
