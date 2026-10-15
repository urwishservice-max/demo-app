import { NextResponse } from "next/server"
import { z } from "zod"
import { getClientIp } from "@/lib/server-utils"
import { sql } from "@/lib/db"

const consultationSchema = z.object({
  firstName: z.string().trim().min(2, "First name must be at least 2 characters").max(60),
  lastName: z.string().trim().min(1, "Last name is required").max(60),
  email: z.string().trim().email("Please enter a valid work email").max(254),
  phone: z.string().trim().max(40).optional(),
  practice: z.string().trim().min(1),
  timeline: z.string().trim().min(1),
  message: z.string().trim().min(10, "Please provide at least 10 characters describing your inquiry.").max(2000),
  honeypot: z.string().max(0).optional(),
})

const disposableDomains = new Set([
  "tempmail.com", "10minutemail.com", "mailinator.com", "yopmail.com", "guerrillamail.com",
])

// In-memory rate limiter — per-IP, 10 submissions per hour
const attempts = new Map<string, number[]>()

export async function POST(request: Request) {
  try {
    // ── Rate limiting ─────────────────────────────────────────────────────────
    const ip = getClientIp(request)
    const cutoff = Date.now() - 60 * 60 * 1000
    const recent = (attempts.get(ip) || []).filter((t) => t > cutoff)

    if (recent.length >= 10) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    // ── Parse & validate ──────────────────────────────────────────────────────
    const body = await request.json().catch(() => null)
    const parsed = consultationSchema.safeParse(body)

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message || "Invalid submission data."
      return NextResponse.json({ message: firstError }, { status: 400 })
    }

    // ── Honeypot: bot hit — silent ok ─────────────────────────────────────────
    if (parsed.data.honeypot) {
      return NextResponse.json({ ok: true })
    }

    // ── Disposable email check ────────────────────────────────────────────────
    const domain = parsed.data.email.split("@")[1]?.toLowerCase()
    if (domain && disposableDomains.has(domain)) {
      return NextResponse.json(
        { message: "Please use a valid corporate email address." },
        { status: 400 }
      )
    }

    // ── Record attempt ────────────────────────────────────────────────────────
    attempts.set(ip, [...recent, Date.now()])

    // ── Save to Neon PostgreSQL ───────────────────────────────────────────────
    await sql`
      INSERT INTO consultation_enquiries
        (first_name, last_name, email, phone, practice, timeline, message)
      VALUES (
        ${parsed.data.firstName},
        ${parsed.data.lastName},
        ${parsed.data.email},
        ${parsed.data.phone ?? null},
        ${parsed.data.practice},
        ${parsed.data.timeline},
        ${parsed.data.message}
      )
    `

    // ── Also forward to webhook if configured (Google Sheets / CRM) ───────────
    const webhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      process.env.CONTACT_DELIVERY_WEBHOOK_URL

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "consultation",
            firstName: parsed.data.firstName,
            lastName: parsed.data.lastName,
            email: parsed.data.email,
            phone: parsed.data.phone || "",
            practice: parsed.data.practice,
            timeline: parsed.data.timeline,
            message: parsed.data.message,
            timestamp: new Date().toISOString(),
          }),
          signal: AbortSignal.timeout(8000),
        })
      } catch (webhookErr) {
        // Webhook failure does NOT fail the request — record is already saved in DB
        console.error("Consultation webhook error (non-fatal):", webhookErr)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Consultation route error:", error)
    return NextResponse.json(
      { message: "Internal server error. Please try again later." },
      { status: 500 }
    )
  }
}
