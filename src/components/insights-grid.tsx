"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

export type InsightSummary = { _id: string; title: string; slug: string; publishedAt: string; readingTime?: number; excerpt?: string; categoryTitle?: string }

const DEFAULT_CATEGORIES = ["All", "AI & Governance", "Strategy", "People & Capability", "Project Delivery", "Regulatory Update"]

export function InsightsGrid({ 
  insights, 
  categories: customCategories 
}: { 
  insights: InsightSummary[]
  categories?: string[] 
}) {
  const [category, setCategory] = useState("All")
  const categories = useMemo(() => {
    if (customCategories && customCategories.length > 0) {
      return ["All", ...Array.from(new Set(customCategories.filter(Boolean)))]
    }
    return DEFAULT_CATEGORIES
  }, [customCategories])

  const visible = useMemo(() => category === "All" ? insights : insights.filter((insight) => insight.categoryTitle === category), [category, insights])
  return <>
    <div className="flex flex-wrap gap-3 mb-12" aria-label="Filter insights by category">
      {categories.map((item) => <button key={item} onClick={() => setCategory(item)} aria-pressed={category === item} className={`min-h-11 px-4 text-sm font-medium rounded-full transition-colors ${category === item ? "bg-navy-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-900"}`}>{item}</button>)}
    </div>
    {visible.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {visible.slice(0, 9).map((insight) => <Link key={insight._id} href={`/insights/${insight.slug}`} className="group flex min-h-64 flex-col rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
        <p className="text-xs font-semibold uppercase tracking-wider text-gold-500">{insight.categoryTitle || "Insight"}</p>
        <h2 className="mt-4 text-xl font-semibold group-hover:text-gold-500">{insight.title}</h2>
        <p className="mt-3 text-sm text-slate-500">{new Date(insight.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}{insight.readingTime ? ` · ${insight.readingTime} min read` : ""}</p>
        {insight.excerpt && <p className="mt-4 line-clamp-3 text-sm text-slate-500">{insight.excerpt}</p>}
        <span className="mt-auto pt-6 text-sm font-semibold">Read article →</span>
      </Link>)}
    </div> : <p className="py-12 text-center text-slate-500">No insights match this category.</p>}
  </>
}
