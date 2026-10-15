import React from "react"
import { siteConfig, getSiteUrl, absoluteUrl } from "@/lib/site-config"

/**
 * Safely serializes JSON-LD data to prevent XSS / script injection attacks.
 */
function safeJsonLd(data: Record<string, unknown> | Array<Record<string, unknown>>) {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
}

export function JsonLdScript({ data }: { data: Record<string, unknown> | Array<Record<string, unknown>> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  )
}

/**
 * Organization and ProfessionalService JSON-LD for the Homepage.
 */
export function OrganizationJsonLd() {
  const siteUrl = getSiteUrl()
  const orgId = `${siteUrl}/#organization`

  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": orgId,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        alternateName: siteConfig.shortName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/build.png"),
        },
        description: siteConfig.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          addressCountry: siteConfig.address.addressCountry,
        },
        sameAs: [siteConfig.socials.linkedin],
        areaServed: {
          "@type": "Country",
          name: "United Arab Emirates",
        },
        ...(siteConfig.contact.email || siteConfig.contact.phone
          ? {
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                ...(siteConfig.contact.email ? { email: siteConfig.contact.email } : {}),
                ...(siteConfig.contact.phone ? { telephone: siteConfig.contact.phone } : {}),
              },
            }
          : {}),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Asheron Licensed Advisory Practices",
          itemListElement: siteConfig.licences.map((licence, idx) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: licence.practice,
              identifier: licence.number,
            },
            position: idx + 1,
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.name,
        publisher: {
          "@id": orgId,
        },
      },
    ],
  }

  return <JsonLdScript data={organizationSchema} />
}

/**
 * Service JSON-LD for Practice Pages.
 */
export interface ServiceJsonLdProps {
  name: string
  description: string
  path: string
  licenceNumber: string
  serviceTypes?: string[]
}

export function ServiceJsonLd({
  name,
  description,
  path,
  licenceNumber,
  serviceTypes = [],
}: ServiceJsonLdProps) {
  const siteUrl = getSiteUrl()
  const pageUrl = absoluteUrl(path)
  const orgId = `${siteUrl}/#organization`

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}/#service`,
    name,
    description,
    url: pageUrl,
    identifier: licenceNumber,
    serviceType: serviceTypes.length > 0 ? serviceTypes : [name],
    provider: {
      "@type": "ProfessionalService",
      "@id": orgId,
      name: siteConfig.name,
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
  }

  return <JsonLdScript data={serviceSchema} />
}

/**
 * Article JSON-LD for Insights Article detail pages.
 */
export interface ArticleJsonLdProps {
  title: string
  description?: string
  slug: string
  publishedAt: string
  authorName?: string
  heroImageUrl?: string
  dateModified?: string
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  publishedAt,
  authorName = "Asheron Advisory Team",
  heroImageUrl,
  dateModified,
}: ArticleJsonLdProps) {
  const siteUrl = getSiteUrl()
  const articleUrl = absoluteUrl(`/insights/${slug}`)
  const orgId = `${siteUrl}/#organization`

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}/#article`,
    headline: title || "Asheron Insight",
    description: description || title || "Asheron executive perspective and commentary.",
    url: articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    datePublished: publishedAt || new Date().toISOString(),
    dateModified: dateModified || publishedAt || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      "@id": orgId,
      name: siteConfig.name,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/build.png"),
      },
    },
    ...(heroImageUrl ? { image: heroImageUrl } : {}),
  }

  return <JsonLdScript data={articleSchema} />
}

/**
 * BreadcrumbList JSON-LD for sitewide breadcrumb enhancement.
 */
export function BreadcrumbsJsonLd({
  items,
}: {
  items: Array<{ name: string; path: string }>
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }

  return <JsonLdScript data={breadcrumbSchema} />
}
