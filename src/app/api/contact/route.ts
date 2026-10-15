import { NextResponse } from "next/server"
import { z } from "zod"
import { getClientIp } from "@/lib/server-utils"
import { sql } from "@/lib/db"

const contactSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  workEmail: z.string().trim().email().max(254),
  phone: z.string().trim().max(40).optional(),
  organisation: z.string().trim().min(2).max(160),
  jobTitle: z.string().trim().max(120).optional(),
  country: z.string().trim().min(1).max(100),
  areasOfInterest: z.array(z.string().trim().min(1).max(80)).min(1).max(5),
  enquiry: z.string().trim().min(10).max(1000),
  consent: z.literal(true),
  marketingOptIn: z.boolean().optional(),
  honeypot: z.string().max(0).optional(),
})

const disposableDomains = new Set([
  "tempmail.com", "10minutemail.com", "mailinator.com", "yopmail.com", "guerrillamail.com",
])

// In-memory rate limiter — per-IP, 5 submissions per hour
const attempts = new Map<string, number[]>()

export async function POST(request: Request) {
  try {
    // ── Rate limiting ─────────────────────────────────────────────────────────
    const ip = getClientIp(request)
    const cutoff = Date.now() - 60 * 60 * 1000
    const recent = (attempts.get(ip) || []).filter((t) => t > cutoff)

    if (recent.length >= 5) {
      return NextResponse.json(
        { message: "Too many submissions. Please try again later." },
        { status: 429 }
      )
    }

    // ── Parse & validate ──────────────────────────────────────────────────────
    const parsed = contactSchema.safeParse(await request.json().catch(() => null))

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Please check the form and try again." },
        { status: 400 }
      )
    }

    // ── Honeypot ──────────────────────────────────────────────────────────────
    if (parsed.data.honeypot) {
      return NextResponse.json({ ok: true })
    }

    // ── Disposable email check ────────────────────────────────────────────────
    const domain = parsed.data.workEmail.split("@")[1]?.toLowerCase()
    if (domain && disposableDomains.has(domain)) {
      return NextResponse.json(
        { message: "Please use a valid corporate email address." },
        { status: 400 }
      )
    }

    // ── Record attempt ────────────────────────────────────────────────────────
    attempts.set(ip, [...recent, Date.now()])

    const consentTimestamp = new Date().toISOString()

    // ── Save to Neon PostgreSQL ───────────────────────────────────────────────
    await sql`
      INSERT INTO contact_enquiries (
        full_name, work_email, phone, organisation, job_title, country,
        areas_of_interest, enquiry,
        consent, marketing_opt_in, consent_timestamp, consent_version
      ) VALUES (
        ${parsed.data.fullName},
        ${parsed.data.workEmail},
        ${parsed.data.phone ?? null},
        ${parsed.data.organisation},
        ${parsed.data.jobTitle ?? null},
        ${parsed.data.country},
        ${parsed.data.areasOfInterest},
        ${parsed.data.enquiry},
        ${parsed.data.consent},
        ${parsed.data.marketingOptIn ?? false},
        ${consentTimestamp},
        ${"2026-08-14"}
      )
    `

    // ── Also forward to webhook if configured ─────────────────────────────────
    const endpoint = process.env.CONTACT_DELIVERY_WEBHOOK_URL
    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            ...parsed.data,
            consentTimestamp,
            consentVersion: "2026-08-14",
          }),
          signal: AbortSignal.timeout(8000),
        })
      } catch (err) {
        // Webhook failure does NOT fail the request — record is already saved in DB
        console.error("Contact webhook error (non-fatal):", err)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact route error:", error)
    return NextResponse.json(
      { message: "Internal server error. Please try again later." },
      { status: 500 }
    )
  }
}
