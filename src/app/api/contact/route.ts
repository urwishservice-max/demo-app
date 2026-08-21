import { NextResponse } from "next/server"
import { z } from "zod"

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

const attempts = new Map<string, number[]>()
const disposableDomains = new Set(["tempmail.com", "10minutemail.com", "mailinator.com", "yopmail.com", "guerrillamail.com"])

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
  const cutoff = Date.now() - 60 * 60 * 1000
  const recent = (attempts.get(ip) || []).filter((time) => time > cutoff)
  if (recent.length >= 5) return NextResponse.json({ message: "Too many submissions. Please try again later." }, { status: 429 })

  const parsed = contactSchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 })
  if (parsed.data.honeypot) return NextResponse.json({ ok: true })
  if (disposableDomains.has(parsed.data.workEmail.split("@")[1].toLowerCase())) return NextResponse.json({ message: "Please use a valid corporate email address." }, { status: 400 })

  attempts.set(ip, [...recent, Date.now()])
  const endpoint = process.env.CONTACT_DELIVERY_WEBHOOK_URL
  if (!endpoint) return NextResponse.json({ message: "Enquiry delivery has not yet been configured. Please use the published contact details." }, { status: 503 })

  const delivery = await fetch(endpoint, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...parsed.data, consentTimestamp: new Date().toISOString(), consentVersion: "2026-08-14" }) })
  if (!delivery.ok) return NextResponse.json({ message: "We were unable to send your enquiry. Please try again." }, { status: 502 })
  return NextResponse.json({ ok: true })
}
