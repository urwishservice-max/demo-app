import { Metadata } from "next"
import { InsightsEditorialExperience } from "@/components/insights/insights-editorial-experience"
import { type InsightSummary } from "@/components/insights-grid"
import { client } from "@/sanity/lib/client"
import { projectId } from "@/sanity/env"

export const metadata: Metadata = {
  title: "Insights | Governance, AI & Delivery Commentary | Asheron",
  description: "Practical commentary from Asheron on governance, AI adoption, regulatory change, capability building, and programme delivery in the UAE.",
}

export const revalidate = 60

const getInsightsData = async (): Promise<{ insights: InsightSummary[]; categories: string[] }> => {
  if (!projectId || projectId === "placeholder-id") return { insights: [], categories: [] }
  try {
    const [insights, categoryDocs] = await Promise.all([
      client.fetch(`*[_type == "insight"] | order(publishedAt desc) {
        _id, title, "slug": slug.current, publishedAt, readingTime, excerpt,
        "authorName": author->name, "categoryTitle": category->title
      }`),
      client.fetch(`*[_type == "category"] | order(title asc) {
        title
      }`)
    ])
    return {
      insights: insights || [],
      categories: (categoryDocs || []).map((c: { title: string }) => c.title).filter(Boolean)
    }
  } catch (error) {
    console.error("Sanity fetch failed:", error)
    return { insights: [], categories: [] }
  }
}

export default async function InsightsPage() {
  const { insights, categories } = await getInsightsData()

  return <InsightsEditorialExperience insights={insights} categories={categories} />
}
