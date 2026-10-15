"use client"

import React, { useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion"
import { ArrowUpRight, BookOpen, Clock, Sparkles } from "lucide-react"
import { type InsightSummary } from "@/components/insights-grid"

/**
 * ASHERON INSIGHTS — EDITORIAL DISCOURSE & THOUGHT LEADERSHIP
 * 
 * Strict Alignment with Official Brand System:
 * - Canvas Background: #F8F7F5 (Warm Editorial Bone)
 * - Deep Inks: #080808 (Carbon Noir)
 * - Hairline Dividers: #E2E0DD
 * - Brand Primary Gold: #FFC400
 * - Brand Corporate Purple: #351779 (Hover: #2B1263)
 * - Dark Mode Hero: #080808 with White/10 rules
 * 
 * Aesthetic & Interactions:
 * - Architectural Dark Hero with Gold/Purple Accents
 * - Real-time Category Filtering with Swiss pill tags
 * - Staggered scroll-driven article cards with monochrome/contrast hover states
 * - Dedicated Forthcoming Publication Briefs for immediate advisory context
 * - Compact closing consultation section
 */

const DEFAULT_CURATED_INSIGHTS: any[] = []

const CATEGORIES = ["ALL", "AI & GOVERNANCE", "STRATEGY", "PROJECT DELIVERY", "PEOPLE & CAPABILITY"]

export function InsightsEditorialExperience({
  insights = [],
  categories = [],
}: {
  insights?: InsightSummary[]
  categories?: string[]
}) {
  const prefersReducedMotion = useReducedMotion()
  const [selectedCategory, setSelectedCategory] = useState("ALL")
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  // Scroll Progress
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 28 })
  const railProgressWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"])

  // Hero Scroll
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const smoothHero = useSpring(heroScroll, { stiffness: 90, damping: 28 })
  const heroTextY = useTransform(smoothHero, [0, 1], ["0px", prefersReducedMotion ? "0px" : "40px"])
  const heroOpacity = useTransform(smoothHero, [0, 0.8], [1, 0.2])

  // CTA Section Scroll
  const ctaRef = useRef<HTMLElement>(null)
  const { scrollYProgress: ctaScroll } = useScroll({
    target: ctaRef,
    offset: ["start end", "end end"],
  })
  const smoothCta = useSpring(ctaScroll, { stiffness: 90, damping: 28 })
  const ctaLineScale = useTransform(smoothCta, [0, 0.6], [0, 1])

  const displayList = insights.length > 0 ? insights : DEFAULT_CURATED_INSIGHTS

  const filteredInsights = displayList.filter((item) => {
    if (selectedCategory === "ALL") return true
    return item.categoryTitle?.toUpperCase() === selectedCategory
  })

  return (
    <div ref={containerRef} className="relative bg-[#F8F7F5] text-[#080808] selection:bg-[#FFC400] selection:text-[#080808] min-h-screen">
      
      {/* Background Fine Architectural Grid */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-25 z-0"
        style={{
          backgroundImage: "linear-gradient(to right, #E2E0DD 1px, transparent 1px), linear-gradient(to bottom, #E2E0DD 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      {/* =========================================================================
          SECTION 1: HERO — EXECUTIVE PERSPECTIVES (DARK THEME)
      ========================================================================= */}
      <section 
        ref={heroRef}
        className="relative z-10 pt-8 pb-14 sm:pt-10 sm:pb-20 px-6 sm:px-10 lg:px-16 bg-[#080808] text-white border-b border-white/10 overflow-hidden"
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-radial from-[#FFC400]/10 via-[#351779]/08 to-transparent blur-3xl pointer-events-none opacity-60" />

        {/* Top Minimal Editorial Baseline (Offset pr-16 for global circular menu trigger) */}
        <div className="relative z-20 flex items-center justify-between border-b border-white/10 pb-5 pr-16 sm:pr-20 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFC400] animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-[0.28em] text-white uppercase">
              ASHERON
            </span>
            <span className="text-[11px] font-mono text-white/50 tracking-[0.2em] uppercase pl-3 border-l border-white/15 hidden sm:inline">
              PUBLICATIONS & COMMENTARY
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-[11px] font-mono tracking-widest text-[#FFC400] font-bold uppercase hidden md:inline">
              EXECUTIVE PERSPECTIVES
            </span>
            <span className="text-white/20 hidden md:inline">|</span>
            <Link
              href="/contact"
              className="px-3.5 py-1 rounded-xs border border-white/40 text-[10px] font-mono font-bold tracking-widest uppercase text-white hover:bg-[#351779] hover:border-[#351779] transition-all shadow-2xs"
            >
              Consult ↗
            </Link>
          </div>
        </div>

        {/* Quiet Editorial Introduction */}
        <motion.div 
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative z-20"
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.3em] text-[#FFC400] uppercase mb-4">
              <span>EXECUTIVE PERSPECTIVES</span>
              <span className="w-10 h-[1px] bg-[#FFC400]" />
              <span className="text-white/50">DISCOURSE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black uppercase tracking-tight leading-[0.92] text-white">
              INSIGHTS.
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
              Practical commentary on governance, AI adoption, capability, and delivery in the UAE.
            </p>
          </div>
        </motion.div>

        {/* Dynamic Progress Timeline Rail under Hero */}
        <div className="max-w-6xl mx-auto mt-12 relative w-full h-[1px] bg-white/10">
          <motion.div 
            style={{ width: railProgressWidth }}
            className="absolute top-0 left-0 bottom-0 bg-[#FFC400]"
          />
        </div>

      </section>


      {/* =========================================================================
          SECTION 2: EDITORIAL CATEGORY FILTER & DISCOURSE DIRECTORY
      ========================================================================= */}
      <section className="relative z-10 px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          
          {filteredInsights.length > 0 ? (
            <>
              {/* Filter Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-[#E2E0DD] mb-12">
                
                {/* Category Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {CATEGORIES.map((cat) => {
                    const isActive = selectedCategory === cat

                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3.5 py-1.5 rounded-xs font-mono text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-[#351779] text-white border border-[#351779] shadow-xs"
                            : "bg-white text-[#080808]/70 border border-[#E2E0DD] hover:border-[#080808] hover:text-[#080808]"
                        }`}
                      >
                        {cat}
                      </button>
                    )
                  })}
                </div>

                <span className="text-xs font-mono text-[#080808]/50 tracking-widest uppercase">
                  SHOWING {filteredInsights.length} PERSPECTIVE{filteredInsights.length === 1 ? "" : "S"}
                </span>

              </div>

              {/* Editorial Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredInsights.map((item, idx) => {
                  const isHovered = hoveredIdx === idx

                  return (
                    <motion.article
                      key={item._id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className="group relative flex flex-col justify-between p-7 sm:p-8 border border-[#E2E0DD] bg-white rounded-xs shadow-xs hover:border-[#351779] hover:shadow-xl transition-all duration-300"
                    >
                      <div>
                        {/* Top Meta: Category + Reading Time */}
                        <div className="flex items-center justify-between pb-4 border-b border-[#E2E0DD] mb-5 text-[11px] font-mono">
                          <span className="font-bold text-[#351779] tracking-wider uppercase">
                            {item.categoryTitle || "ADVISORY INSIGHT"}
                          </span>
                          <span className="text-[#080808]/50 flex items-center gap-1.5">
                            <Clock className="w-3 h-3 text-[#FFC400]" />
                            {item.readingTime || 5} MIN READ
                          </span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#080808] leading-snug mb-4 group-hover:text-[#351779] transition-colors duration-200">
                          {item.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-xs sm:text-sm text-[#080808]/70 leading-relaxed font-normal mb-8">
                          {item.excerpt}
                        </p>
                      </div>

                      {/* Card Bottom: Date & Inquire/Read Link */}
                      <div className="pt-4 border-t border-[#E2E0DD] flex items-center justify-between">
                        <span className="font-mono text-[10px] text-[#080808]/50 tracking-widest uppercase">
                          {new Date(item.publishedAt).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>

                        <Link
                          href={item.slug ? `/insights/${item.slug}` : "/contact"}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#080808] group-hover:text-[#351779] transition-colors"
                        >
                          <span>DISCUSS WITH AUTHOR</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#FFC400] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                      </div>
                    </motion.article>
                  )
                })}
              </div>
            </>
          ) : (
            /* EXACT ORIGINAL USER CONTENT IN EDITORIAL LUXURY CONTAINER */
            <div className="py-20 sm:py-28 max-w-3xl mx-auto flex flex-col items-center text-center">
              <div className="w-16 h-16 border border-[#E2E0DD] bg-white rounded-full flex items-center justify-center mb-8 shadow-xs">
                <span className="w-7 h-[2px] bg-[#FFC400]" />
              </div>
              <p className="text-xl sm:text-2xl font-light text-[#080808] leading-relaxed mb-8 max-w-2xl">
                Our first insights will be published shortly. In the meantime, please get in touch to discuss your priorities.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#351779] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xs hover:bg-[#2B1263] transition-all duration-300 shadow-md"
              >
                <span>REQUEST A CONSULTATION</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFC400] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          )}

        </div>
      </section>


      {/* =========================================================================
          SECTION 3: CLOSING CTA — COMPACT RESTRAINED CONCLUSION
      ========================================================================= */}
      <section 
        ref={ctaRef}
        className="relative z-10 bg-[#F8F7F5] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-[#E2E0DD] overflow-hidden"
      >
        {/* Animated Expanding Purple Rule */}
        <motion.div 
          style={{ scaleX: ctaLineScale, originX: 0 }}
          className="absolute top-0 left-0 right-0 h-[2px] bg-[#351779]"
        />

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#351779]">
              ADVISORY ENGAGEMENT
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#080808] leading-[0.96] mb-5 max-w-2xl">
            SHAPE YOUR ORGANISATION&apos;S DELIVERY POSTURE.
          </h2>

          <p className="text-base sm:text-lg text-[#080808]/75 leading-relaxed font-normal mb-8 max-w-xl">
            Engage directly with our practice leads on the governance, regulatory, and capability challenges that matter.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#351779] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xs hover:bg-[#2B1263] transition-all duration-300 shadow-md"
          >
            <span>REQUEST A CONSULTATION</span>
            <ArrowUpRight className="w-4 h-4 text-[#FFC400] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

        </div>
      </section>

    </div>
  )
}
