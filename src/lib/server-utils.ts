/**
 * Server-side security and request handling utilities.
 */

/**
 * Safely extracts client IP address, prioritizing trusted edge headers.
 * Protects against basic forwarded-header spoofing.
 */
export function getClientIp(request: Request): string {
  // 1. Cloudflare edge IP
  const cfIp = request.headers.get("cf-connecting-ip")?.trim()
  if (cfIp) return cfIp

  // 2. Vercel / Nginx real IP
  const realIp = request.headers.get("x-real-ip")?.trim()
  if (realIp) return realIp

  // 3. X-Forwarded-For chain
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) {
    const parts = forwarded.split(",").map((s) => s.trim()).filter(Boolean)
    if (parts.length > 0) {
      const candidate = parts[0]
      // Basic sanity check against malicious characters
      if (/^[a-fA-F0-9:.]+$/.test(candidate)) {
        return candidate
      }
    }
  }

  return "unknown-client"
}
