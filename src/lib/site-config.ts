/**
 * Centralized site configuration and production environment utilities.
 * Ensures consistent canonical URLs, company metadata, and indexing controls.
 */

export const siteConfig = {
  name: "Asheron Management Consultancies, LLC",
  shortName: "Asheron",
  legalName: "Asheron Management Consultancies, LLC",
  description:
    "Dubai-based advisory consultancy delivering AI & Innovation, Strategy & Management, People & Capability, and Project Development for UAE organisations.",
  defaultTitle: "Asheron | Strategy, AI Governance & Advisory Consultancy in Dubai",
  locale: "en_AE",
  jurisdiction: "Dubai, United Arab Emirates",
  address: {
    addressLocality: "Dubai",
    addressCountry: "AE",
    addressRegion: "Dubai",
  },
  licences: [
    { practice: "AI & Innovation", number: "7020039" },
    { practice: "Strategy & Management", number: "7020003" },
    { practice: "People & Capability", number: "7020008" },
    { practice: "Project Development", number: "7020020" },
  ],
  socials: {
    linkedin: "https://www.linkedin.com/company/asheron",
  },
  contact: {
    // Real values must be configured via environment or Sanity CMS before launch
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || undefined,
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || undefined,
  },
} as const

/**
 * Returns the resolved site URL.
 * Reads from NEXT_PUBLIC_SITE_URL or Vercel production URL,
 * and cleanly falls back to http://localhost:3000 for local development.
 */
export function getSiteUrl(): string {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined) ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined)

  if (envUrl) {
    return envUrl.replace(/\/+$/, "")
  }

  // Local development fallback
  return "http://localhost:3000"
}

/**
 * Determines whether the current deployment is an active production environment.
 * Prevents local development, staging, preview builds, or builds without an explicit
 * verified production domain from accidental search engine indexing.
 */
export function isProduction(): boolean {
  // Explicit non-production tags block indexing immediately
  if (
    process.env.NEXT_PUBLIC_APP_ENV === "staging" ||
    process.env.NEXT_PUBLIC_APP_ENV === "preview" ||
    process.env.NEXT_PUBLIC_APP_ENV === "development"
  ) {
    return false
  }

  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
    return false
  }

  // Production indexing requires explicit production NODE_ENV AND a verified https:// production site URL
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || ""
  const isHttpsDomain =
    configuredSiteUrl.startsWith("https://") &&
    !configuredSiteUrl.includes("localhost") &&
    !configuredSiteUrl.includes("127.0.0.1")

  return process.env.NODE_ENV === "production" && isHttpsDomain
}

/**
 * Generates an absolute URL for a given relative path.
 */
export function absoluteUrl(path = ""): string {
  const base = getSiteUrl()
  const cleanPath = path.startsWith("/") ? path : `/${path}`
  return `${base}${cleanPath}`
}
