"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion"

/**
 * ASHERON ABOUT HERO — DARK ARCHITECTURAL THEME
 * 
 * Strict Brand Guidelines & Visual System (Matching Industries & Insights):
 * - Canvas Background: #080808 (Carbon Noir)
 * - Typography: Pure White (#FFFFFF) & White/70
 * - Hairline Dividers: border-white/10
 * - Primary Gold: #FFC400
 * - Corporate Purple: #351779
 * - Safe-zone header offset (pr-16 sm:pr-20) for global menu trigger
 */

export function AboutHero() {
  const prefersReducedMotion = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)

  // Hero Scroll Animation
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const smoothHero = useSpring(heroScroll, { stiffness: 90, damping: 28 })
  const heroTextY = useTransform(smoothHero, [0, 1], ["0px", prefersReducedMotion ? "0px" : "35px"])
  const heroOpacity = useTransform(smoothHero, [0, 0.85], [1, 0.25])

  return (
    <section 
      ref={heroRef}
      className="relative z-10 pt-8 pb-16 sm:pt-10 sm:pb-24 px-6 sm:px-10 lg:px-16 bg-[#080808] text-white border-b border-white/10 overflow-hidden"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-radial from-[#FFC400]/10 via-[#351779]/08 to-transparent blur-3xl pointer-events-none opacity-60" />

      {/* Top Minimal Editorial Baseline (pr-16 reserved for global circular menu trigger) */}
      <div className="relative z-20 flex items-center justify-between border-b border-white/10 pb-5 pr-16 sm:pr-20 mb-12 sm:mb-16">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFC400] animate-pulse" />
          <span className="font-mono text-xs font-bold tracking-[0.28em] text-white uppercase">
            ASHERON
          </span>
          <span className="text-[11px] font-mono text-white/50 tracking-[0.2em] uppercase pl-3 border-l border-white/15 hidden sm:inline">
            DUBAI · ADVISORY · EXECUTION
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="text-[11px] font-mono tracking-widest text-[#FFC400] font-bold uppercase hidden md:inline">
            TURN IDEAS INTO PROGRESS
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

      {/* Hero Composition: Large Typography & Technical Editorial Structure */}
      <motion.div 
        style={{ y: heroTextY, opacity: heroOpacity }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-end relative z-20"
      >
        {/* Left Column: Eyebrow & Oversized Headline */}
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.3em] text-[#FFC400] uppercase mb-4">
            <span>A DUBAI CONSULTANCY BUILT AROUND</span>
            <span className="w-12 h-[1px] bg-[#FFC400]" />
            <span className="text-white/50">EXECUTION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-black uppercase tracking-tight leading-[0.9] text-white">
            ABOUT<br />
            <span className="text-[#351779] bg-[#FFC400] px-2.5 inline-block">ASHERON.</span>
          </h1>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5 text-xs font-mono text-white/60">
            <span className="px-3 py-1 border border-white/20 tracking-widest uppercase text-[#FFC400]">
              STRATEGY / GOVERNANCE / DELIVERY
            </span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <span className="tracking-widest uppercase text-white/70">
              FROM INTENT TO IMPACT
            </span>
          </div>
        </div>

        {/* Right Column: Decorative 01 Identifier & Supporting Executive Summary */}
        <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
          
          {/* Oversized Decorative Numerical Identifier 01 */}
          <div className="relative mb-6 select-none opacity-40 hover:opacity-75 transition-opacity">
            <div className="font-mono text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/60 to-white/10 leading-none">
              01
            </div>
            <div className="absolute top-0 right-0 font-mono text-[9px] text-white/40 tracking-widest uppercase text-right">
              OVERVIEW // 01<br />
              UAE ADVISORY
            </div>
            <div className="w-16 h-[1px] bg-[#FFC400] mt-2" />
          </div>

          <p className="text-sm sm:text-base text-white/75 leading-relaxed font-light">
            Asheron Management Consultancies, LLC is an advisory firm based in Dubai, United Arab Emirates. We work with boards, executive teams, and functional leaders on the problems that sit between intent and delivery: unclear operating models, unmanaged technology risk, capability gaps, and programmes that stall after approval.
          </p>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/40 uppercase">
            <span>DUBAI, UAE</span>
            <span>LICENCE 7020039</span>
          </div>
        </div>
      </motion.div>

      {/* Dynamic Progress Baseline */}
      <div className="max-w-7xl mx-auto mt-14 relative w-full h-[1px] bg-white/10" />

    </section>
  )
}
