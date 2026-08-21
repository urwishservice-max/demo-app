import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { InsightsGrid, type InsightSummary } from "@/components/insights-grid"

import { client } from "@/sanity/lib/client"
import { projectId } from "@/sanity/env"

export const metadata: Metadata = {
  title: "Insights | Governance, AI & Delivery Commentary | Asheron",
  description: "Practical commentary from Asheron on governance, AI adoption, regulatory change, capability building, and programme delivery in the UAE.",
}

const getInsights = async () => {
  if (projectId === "placeholder-id") return []
  // Try catching Sanity errors if environment variables are missing
  try {
    return await client.fetch(`*[_type == "insight"] | order(publishedAt desc) {
      _id, title, "slug": slug.current, publishedAt, readingTime, excerpt,
      "authorName": author->name, "categoryTitle": category->title
    }`)
  } catch (error) {
    console.error("Sanity fetch failed:", error)
    return []
  }
}

export default async function InsightsPage() {
  const insights: InsightSummary[] = await getInsights()

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-24 pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight mb-8">
              Insights.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-light max-w-3xl leading-relaxed">
              Practical commentary on governance, AI adoption, capability, and delivery in the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER & GRID */}
      <section className="py-16 bg-white flex-1">
        <div className="container mx-auto px-6 max-w-7xl">
          {insights.length > 0 ? (
            <InsightsGrid insights={insights} />
          ) : (
            <div className="py-24 text-center max-w-2xl mx-auto flex flex-col items-center">
              <div className="w-16 h-16 border border-slate-200 rounded-full flex items-center justify-center mb-8">
                <div className="w-8 h-px bg-gold-300" />
              </div>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Our first insights will be published shortly. In the meantime, please get in touch to discuss your priorities.
              </p>
              <Button asChild>
                <Link href="/contact">Request a Consultation</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
