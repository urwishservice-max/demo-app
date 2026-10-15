"use client"

import React, { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

/**
 * ASHERON INDUSTRIES INDEX — EDITORIAL INTERACTION EXPERIENCE
 * 
 * Strict Brand Design Tokens:
 * - Canvas Background: #F8F7F5 (Warm Editorial Bone)
 * - Deep Inks: #080808 (Carbon Noir)
 * - Hairline Dividers: #E2E0DD
 * - Brand Primary Gold: #FFC400
 * - Brand Corporate Purple: #351779 (Hover: #2B1263)
 * - Hero Dark Mode: #080808 with White/10 rules
 * 
 * Layout & Animations:
 * - 4-Column Minimal Editorial Index Grid with numbered columns (01-08)
 * - Architectural Dark Hero with Gold/Purple Accents
 * - Staggered scroll-triggered entry
 * - Dynamic scroll rail tracking reading progression
 * - Interactive image zooming with monochrome filter lift
 * - Gold/Purple interactive anchor pulses on hover
 * - Expanding section separators
 */

const industriesData = [
  {
    num: "01",
    title: "BANKING & FINANCE",
    desc: "Banks, finance companies, and exchange houses addressing governance, operating-model, control, and transformation priorities.",
    visual: "/practice_strategy.jpg",
    accent: "FIDUCIARY CONTROLS",
  },
  {
    num: "02",
    title: "INSURANCE",
    desc: "Insurers and intermediaries strengthening governance, controls, capability, and operational efficiency.",
    visual: "/practice_projects.jpg",
    accent: "RISK RESILIENCE",
  },
  {
    num: "03",
    title: "FINTECH & VIRTUAL ASSETS",
    desc: "Fast-scaling regulated businesses building proportionate governance and control frameworks without slowing growth.",
    visual: "/practice_ai.jpg",
    accent: "PROPORTIONATE AUDIT",
  },
  {
    num: "04",
    title: "GOVERNMENT & PUBLIC SECTOR",
    desc: "Entities delivering national and emirate-level priorities, digital initiatives, and capability programmes.",
    visual: "/about_hero_burj.jpg",
    accent: "SOVEREIGN MANDATE",
  },
  {
    num: "05",
    title: "PROFESSIONAL SERVICES",
    desc: "Firms with regulatory obligations that need practical frameworks, training, and delivery structure.",
    visual: "/about_leadership.jpg",
    accent: "COMPLIANCE CADENCE",
  },
  {
    num: "06",
    title: "REAL ESTATE & FAMILY GROUPS",
    desc: "Groups formalising governance, decision rights, and programme delivery as they institutionalise.",
    visual: "/about_canopy.jpg",
    accent: "DECISION RIGHTS",
  },
  {
    num: "07",
    title: "TRADE, LOGISTICS & COMMODITIES",
    desc: "Businesses managing regulatory exposure, counterparty risk, and operational complexity.",
    visual: "/dubai_skyline.jpg",
    accent: "COUNTERPARTY ASSURANCE",
  },
  {
    num: "08",
    title: "HEALTHCARE & EDUCATION",
    desc: "Institutions balancing growth, workforce capability, and governance obligations.",
    visual: "/practice_people.jpg",
    accent: "CAPABILITY GOVERNANCE",
  },
]

export function IndustriesEditorialIndex() {
  const prefersReducedMotion = useReducedMotion()
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  // Page Scroll Progress
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

  return (
    <div ref={containerRef} className="relative bg-[#F8F7F5] text-[#080808] selection:bg-[#FFC400] selection:text-[#080808] min-h-screen">
      
      {/* Background Architectural Grid Lines */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-25 z-0"
        style={{
          backgroundImage: "linear-gradient(to right, #E2E0DD 1px, transparent 1px), linear-gradient(to bottom, #E2E0DD 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      {/* =========================================================================
          SECTION 1: HERO — A QUIET EDITORIAL INTRODUCTION (DARK THEME)
      ========================================================================= */}
      <section 
        ref={heroRef}
        className="relative z-10 pt-8 pb-14 sm:pt-10 sm:pb-20 px-6 sm:px-10 lg:px-16 bg-[#080808] text-white border-b border-white/10 overflow-hidden"
      >
        {/* Ambient Subtle Radial Glow */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-radial from-[#FFC400]/10 via-[#351779]/08 to-transparent blur-3xl pointer-events-none opacity-60" />

        {/* Top Minimal Editorial Baseline (Offset pr-16 for global circular menu trigger) */}
        <div className="relative z-20 flex items-center justify-between border-b border-white/10 pb-5 pr-16 sm:pr-20 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFC400] animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-[0.28em] text-white uppercase">
              ASHERON
            </span>
            <span className="text-[11px] font-mono text-white/50 tracking-[0.2em] uppercase pl-3 border-l border-white/15 hidden sm:inline">
              INDEX / SECTORS
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-[11px] font-mono tracking-widest text-[#FFC400] font-bold uppercase hidden md:inline">
              EIGHT SPECIALISATIONS
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
              <span>SECTOR DEPTH & EXPERIENCE</span>
              <span className="w-10 h-[1px] bg-[#FFC400]" />
              <span className="text-white/50">INDEX</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black uppercase tracking-tight leading-[0.92] text-white">
              INDUSTRIES<br />
              <span className="text-[#351779] bg-[#FFC400] px-2 inline-block">WE SERVE.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
              Our work concentrates on organisations where governance, regulation, and delivery pressure meet.
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
          SECTION 2: EIGHT-INDUSTRY INDEX — NUMBERED VERTICAL DIRECTORY
          (Animated Staggered Revealing Directory Cards in 4-Column Layout)
      ========================================================================= */}
      <section className="relative z-10 px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header Strip */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E2E0DD] mb-12 text-xs font-mono text-[#080808]/60">
            <span className="font-bold tracking-[0.25em] text-[#080808] uppercase">
              SECTOR REPERTORY · 08 ENTRIES
            </span>
            <span className="tracking-widest hidden sm:inline text-[#351779] font-bold">
              SELECT AN INDUSTRY TO INQUIRE
            </span>
          </div>

          {/* 4-Column Editorial Directory Grid (Desktop: 4 columns in 2 balanced rows; Tablet: 2 cols; Mobile: 1 col) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-[#E2E0DD]">
            {industriesData.map((item, idx) => {
              const isHovered = hoveredIdx === idx

              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ 
                    duration: 0.65, 
                    delay: (idx % 4) * 0.1, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="group relative flex flex-col justify-between p-6 sm:p-8 border-r border-b border-[#E2E0DD] bg-[#F8F7F5] transition-all duration-300 hover:bg-white hover:shadow-xl hover:z-20"
                >
                  
                  {/* Top Bar: Large Bold Number + Accent Tag */}
                  <div>
                    <div className="flex items-baseline justify-between mb-6">
                      <span 
                        className={`font-mono text-3xl sm:text-4xl font-black tracking-tight transition-all duration-300 ${
                          isHovered ? "text-[#351779] translate-x-1" : "text-[#080808]"
                        }`}
                      >
                        {item.num}
                      </span>
                      <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#351779] uppercase">
                        {item.accent}
                      </span>
                    </div>

                    {/* Architectural Image Container with Smooth Scale & Filter Lift on Hover */}
                    <div className="relative w-full aspect-[16/11] mb-6 overflow-hidden border border-[#080808]/15 bg-[#080808] rounded-xs">
                      <Image
                        src={item.visual}
                        alt={item.title}
                        fill
                        className="object-cover filter grayscale contrast-125 brightness-95 transition-all duration-700 group-hover:scale-108 group-hover:grayscale-0 group-hover:brightness-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Title with Smooth Color Transition */}
                    <h2 
                      className={`text-base sm:text-lg font-bold uppercase tracking-tight mb-3 transition-colors duration-200 ${
                        isHovered ? "text-[#351779]" : "text-[#080808]"
                      }`}
                    >
                      {item.title}
                    </h2>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#080808]/75 leading-relaxed font-normal mb-8">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Action Footer with Interactive Inquire Link & Animated Anchor */}
                  <div className="pt-4 border-t border-[#E2E0DD] flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#080808] group-hover:text-[#351779] transition-colors"
                    >
                      <span>INQUIRE</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FFC400] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>

                    <span 
                      className={`w-2 h-2 rounded-xs border border-[#080808] transition-all duration-300 ${
                        isHovered ? "bg-[#FFC400] scale-150 rotate-45 border-[#351779]" : "bg-transparent opacity-25"
                      }`} 
                    />
                  </div>

                </motion.div>
              )
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3: CLOSING CTA — COMPACT RESTRAINED CONCLUSION
          (With Animated Expanding Brand Divider)
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
              FIND THE RIGHT STARTING POINT
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#080808] leading-[0.96] mb-5 max-w-2xl">
            NOT SURE WHERE YOUR ORGANISATION FITS?
          </h2>

          <p className="text-base sm:text-lg text-[#080808]/75 leading-relaxed font-normal mb-8">
            Start with a conversation.
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
