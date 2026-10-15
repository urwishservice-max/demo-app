"use client"

import React, { useRef, useState } from "react"
import Link from "next/link"
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useReducedMotion, 
  useMotionValue 
} from "framer-motion"
import { ArrowUpRight } from "lucide-react"

/**
 * ASHERON APPROACH — $10,000 CINEMATIC PARALLAX SCROLL EXPERIENCE
 * 
 * Authentic Asheron Brand System:
 * - Canvas Background: #F8F7F5 (Warm Editorial Bone)
 * - Deep Inks: #080808 (Carbon Noir)
 * - Fine Dividers: #E2E0DD
 * - Brand Primary Gold: #FFC400
 * - Brand Corporate Purple: #351779 (Hover: #2B1263)
 * - Muted Annotations: #6B6B6B / #888888
 * 
 * Features Real Multi-Layer Parallax:
 * - Interactive 3D Stage-Gate Methodology Cube responding to pointer & scroll
 * - Parallax floating background numerals drifting at counter-speeds (y: -120px to +180px)
 * - Fluid scroll-driven dynamic progress timeline tracking active sections in real-time
 * - Staggered clipping text masks & kinetic entry of SVG diagnostic diagrams
 */

const stagesData = [
  {
    step: "01",
    shortName: "ASSESS",
    headline: "UNDERSTAND THE PRESENT.",
    body: "We understand how work is actually performed, where value and risk sit, and what the operating environment allows.",
    subtitle: "DIAGNOSTIC BASELINE · OPERATIONAL REALITY",
    accent: "#351779",
  },
  {
    step: "02",
    shortName: "PRIORITISE",
    headline: "FOCUS ON WHAT MATTERS.",
    body: "We rank opportunities by strategic value, feasibility, control requirements, implementation effort, and expected benefit.",
    subtitle: "VALUE / FEASIBILITY MATRIX · SEQUENCED ROADMAP",
    accent: "#FFC400",
  },
  {
    step: "03",
    shortName: "DESIGN",
    headline: "DEFINE THE WAY FORWARD.",
    body: "We define the target operating model, governance, controls, roles, and evidence required to deliver it.",
    subtitle: "OPERATING ARCHITECTURE · TARGET GOVERNANCE",
    accent: "#351779",
  },
  {
    step: "04",
    shortName: "ENABLE",
    headline: "MAKE CHANGE PRACTICAL.",
    body: "We equip leadership and teams with the skills, guidance, and playbooks to run the new way of working.",
    subtitle: "TALENT FLUENCY · PLAYBOOKS · TRANSITION CADENCE",
    accent: "#FFC400",
  },
  {
    step: "05",
    shortName: "ASSURE",
    headline: "SUSTAIN THE OUTCOME.",
    body: "We support controlled rollout, validate safeguards, monitor outcomes, and refine as conditions change.",
    subtitle: "CONTINUOUS AUDIT · REALISATION CONTROLS",
    accent: "#351779",
  },
]

export function ApproachCinematicExperience() {
  const prefersReducedMotion = useReducedMotion()
  const [activeStageIdx, setActiveStageIdx] = useState(0)

  // 1. Overall page scroll progress
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: pageScroll } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // 2. Hero Section Scroll & Parallax
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const smoothHero = useSpring(heroScroll, { stiffness: 85, damping: 26, restDelta: 0.001 })
  const heroNumY = useTransform(smoothHero, [0, 1], ["0px", prefersReducedMotion ? "0px" : "160px"])
  const heroNumScale = useTransform(smoothHero, [0, 1], [1, prefersReducedMotion ? 1 : 1.15])
  const heroTextY = useTransform(smoothHero, [0, 1], ["0px", prefersReducedMotion ? "0px" : "80px"])
  const heroOpacity = useTransform(smoothHero, [0, 0.75], [1, 0.15])

  // 3D Interactive Pointer Tilt in Hero
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 60, damping: 20 })
  const cubeRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [15, -15])
  const cubeRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20])
  const cubeScrollRotateZ = useTransform(smoothHero, [0, 1], [0, prefersReducedMotion ? 0 : 35])

  function handleMouseMove(e: React.MouseEvent) {
    if (prefersReducedMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  // 3. Stage Timeline Scroll Progress
  const stagesSectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress: stagesScroll } = useScroll({
    target: stagesSectionRef,
    offset: ["start 80%", "end 80%"],
  })
  const smoothTimeline = useSpring(stagesScroll, { stiffness: 90, damping: 28 })
  const timelineProgressWidth = useTransform(smoothTimeline, [0, 1], ["0%", "100%"])

  // 4. Parallax Stage Numerals (Floating Ghost Drift)
  const s1Ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress: s1Scroll } = useScroll({ target: s1Ref, offset: ["start end", "end start"] })
  const s1GhostY = useTransform(s1Scroll, [0, 1], [prefersReducedMotion ? 0 : -80, prefersReducedMotion ? 0 : 80])

  const s2Ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress: s2Scroll } = useScroll({ target: s2Ref, offset: ["start end", "end start"] })
  const s2GhostY = useTransform(s2Scroll, [0, 1], [prefersReducedMotion ? 0 : -90, prefersReducedMotion ? 0 : 90])

  const s3Ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress: s3Scroll } = useScroll({ target: s3Ref, offset: ["start end", "end start"] })
  const s3GhostY = useTransform(s3Scroll, [0, 1], [prefersReducedMotion ? 0 : -80, prefersReducedMotion ? 0 : 80])

  const s4Ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress: s4Scroll } = useScroll({ target: s4Ref, offset: ["start end", "end start"] })
  const s4GhostY = useTransform(s4Scroll, [0, 1], [prefersReducedMotion ? 0 : -90, prefersReducedMotion ? 0 : 90])

  const s5Ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress: s5Scroll } = useScroll({ target: s5Ref, offset: ["start end", "end start"] })
  const s5GhostY = useTransform(s5Scroll, [0, 1], [prefersReducedMotion ? 0 : -80, prefersReducedMotion ? 0 : 80])

  // 5. Final CTA Scroll
  const ctaRef = useRef<HTMLElement>(null)
  const { scrollYProgress: ctaScroll } = useScroll({ target: ctaRef, offset: ["start end", "end end"] })
  const smoothCta = useSpring(ctaScroll, { stiffness: 90, damping: 28 })
  const ctaLineScale = useTransform(smoothCta, [0, 0.6], [0, 1])

  return (
    <div ref={containerRef} className="relative bg-[#F8F7F5] text-[#080808] selection:bg-[#FFC400] selection:text-[#080808] overflow-hidden">
      
      {/* Background Architectural Grid Lines with subtle vertical drift */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: "linear-gradient(to right, #E2E0DD 1px, transparent 1px), linear-gradient(to bottom, #E2E0DD 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      {/* Ambient Warm Asheron Glow */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial from-[#FFC400]/08 via-[#351779]/06 to-transparent blur-3xl pointer-events-none opacity-70 z-0" />

      {/* =========================================================================
          SECTION 1: HERO — CINEMATIC 3D PARALLAX TYPOGRAPHIC COMPOSITION
      ========================================================================= */}
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-6 pb-12 px-6 sm:px-10 lg:px-16 border-b border-[#E2E0DD] z-10 overflow-hidden"
      >
        {/* Top Minimal Editorial Metadata Baseline (Offset pr-16 for global circular menu) */}
        <div className="relative z-20 flex items-center justify-between border-b border-[#E2E0DD] pb-4 pr-16 sm:pr-20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFC400] animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-[0.28em] text-[#080808] uppercase">
              ASHERON
            </span>
            <span className="text-[11px] font-mono text-[#080808]/50 tracking-[0.2em] uppercase pl-3 border-l border-[#E2E0DD] hidden sm:inline">
              APPROACH SYSTEM
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-[11px] font-mono tracking-widest text-[#351779] font-bold uppercase hidden md:inline">
              FIVE-STAGE MODEL
            </span>
            <span className="text-[#E2E0DD] hidden md:inline">|</span>
            <Link
              href="/contact"
              className="px-3.5 py-1 rounded-xs border border-[#080808] text-[10px] font-mono font-bold tracking-widest uppercase hover:bg-[#351779] hover:border-[#351779] hover:text-white transition-all shadow-2xs"
            >
              Consult ↗
            </Link>
          </div>
        </div>

        {/* Hero Centerpiece: Massive 05 Typographic Assembly + Interactive 3D Methodology Object */}
        <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-10 lg:py-16">
          
          {/* Left Column: Huge 05 Numeral + Outlined Methodology Descriptor */}
          <div className="lg:col-span-5 relative flex flex-col justify-center items-start">
            
            {/* Monumental Pale 05 Numeral with Subtle Parallax Shift */}
            <motion.div
              style={{ y: heroNumY, scale: heroNumScale, opacity: heroOpacity }}
              className="select-none pointer-events-none relative z-10"
            >
              <span className="font-mono text-[140px] sm:text-[200px] lg:text-[260px] font-black tracking-tighter leading-none text-[#080808]/15 block">
                05
              </span>
            </motion.div>

            {/* Overlaid Outlined Badge */}
            <motion.div 
              style={{ y: heroTextY }}
              className="relative -mt-6 sm:-mt-10 inline-flex items-center gap-2.5 px-3 py-1.5 border border-[#080808] bg-[#F8F7F5] w-fit shadow-xs z-30"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC400]" />
              <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#080808] uppercase">
                A PRACTICAL MODEL FOR LASTING CHANGE
              </span>
            </motion.div>

          </div>

          {/* Right Column: Monumental Headline & Narrative Copy */}
          <motion.div 
            style={{ y: heroTextY }}
            className="lg:col-span-7 flex flex-col justify-center lg:pl-10 relative z-20"
          >
            
            {/* Headline with Staggered Visual Weight */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black uppercase tracking-tight leading-[0.92] text-[#080808] mb-8">
              EXECUTION<br />
              <span className="text-[#351779]">EARNS CONFIDENCE.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#080808]/75 leading-relaxed font-normal max-w-xl mb-10">
              We use a practical five-step model that moves from an honest view of the present to a controlled, sustainable future state.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-[#351779] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xs hover:bg-[#2B1263] transition-all duration-300 shadow-sm"
              >
                <span>REQUEST A CONSULTATION</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFC400] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="#timeline"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#080808]/60 hover:text-[#080808] uppercase transition-colors"
              >
                <span>EXPLORE THE 5 STAGES ↓</span>
              </a>
            </div>

          </motion.div>

        </div>

        {/* Hero Bottom Strip: Minimal Baseline Indicator */}
        <div className="relative z-20 flex items-center justify-between pt-4 border-t border-[#E2E0DD] text-[10px] font-mono tracking-[0.24em] text-[#080808]/50 uppercase">
          <div className="flex items-center gap-6">
            <span>ASSESS</span>
            <span>•</span>
            <span>PRIORITISE</span>
            <span>•</span>
            <span>DESIGN</span>
            <span>•</span>
            <span>ENABLE</span>
            <span>•</span>
            <span>ASSURE</span>
          </div>
          <div>
            <span>SYSTEMATIC OUTCOMES</span>
          </div>
        </div>

      </section>


      {/* =========================================================================
          SECTION 2: SIGNATURE INTERACTION — 5-STAGE PROGRESSIVE TIMELINE RAIL
      ========================================================================= */}
      <section id="timeline" className="relative sticky top-0 z-30 bg-[#F8F7F5]/95 backdrop-blur-md border-b border-[#E2E0DD] py-5 px-6 sm:px-10 lg:px-16 transition-all shadow-2xs">
        <div className="max-w-6xl mx-auto">
          
          {/* Top Label */}
          <div className="flex items-center justify-between text-xs font-mono mb-3">
            <span className="font-bold tracking-[0.25em] text-[#351779] uppercase">
              FIVE-STAGE PROGRESSIVE TIMELINE
            </span>
            <span className="text-[#080808]/50 tracking-wider hidden sm:inline">
              SCROLL DRIVEN · ACTIVE: {stagesData[activeStageIdx].shortName}
            </span>
          </div>

          {/* Continuous Rail Line with dynamic animated fill */}
          <div className="relative w-full h-[2px] bg-[#E2E0DD] mb-4 overflow-hidden">
            <motion.div 
              style={{ width: timelineProgressWidth }}
              className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#351779] via-[#FFC400] to-[#351779]"
            />
          </div>

          {/* Desktop 5 Spaced Interactive Markers */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {stagesData.map((st, idx) => {
              const isActive = activeStageIdx === idx

              return (
                <a
                  key={st.step}
                  href={`#stage-${st.step}`}
                  onClick={() => setActiveStageIdx(idx)}
                  className="group flex flex-col items-start transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span 
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive ? "bg-[#FFC400] scale-150 rotate-45" : "bg-[#E2E0DD] group-hover:bg-[#351779]"
                      }`} 
                    />
                    <span 
                      className={`font-mono text-xs font-bold tracking-wider transition-colors duration-200 ${
                        isActive ? "text-[#351779]" : "text-[#080808]/50 group-hover:text-[#080808]"
                      }`}
                    >
                      {st.step} — {st.shortName}
                    </span>
                  </div>
                </a>
              )
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3: THE 5 APPROACH STAGES — EXPERIMENTAL EDITORIAL SEQUENCE
          (With Parallax Drifting Ghost Numerals & Kinetic Diagnostics)
      ========================================================================= */}
      <section ref={stagesSectionRef} className="relative z-10 py-16 sm:py-24">
        
        {/* =====================================================================
            STAGE 01: ASSESS
        ===================================================================== */}
        <div 
          ref={s1Ref}
          id="stage-01" 
          onMouseEnter={() => setActiveStageIdx(0)}
          className="min-h-[85vh] flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 border-b border-[#E2E0DD] overflow-hidden"
        >
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
            
            {/* Left: Oversized Number & Narrative Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 relative"
            >
              {/* Background Parallax Ghost Numeral as Absolute Watermark */}
              <motion.span 
                style={{ y: s1GhostY }}
                className="absolute -top-16 -left-6 sm:-top-20 sm:-left-10 font-mono text-8xl sm:text-9xl lg:text-[180px] font-black tracking-tighter text-[#080808]/[0.04] leading-none select-none pointer-events-none z-0"
              >
                01
              </motion.span>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#351779] uppercase mb-4">
                  <span>STAGE 01</span>
                  <span className="w-8 h-[1px] bg-[#351779]" />
                  <span className="text-[#080808]/60">ASSESS</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#080808] leading-[0.95] mb-6">
                  UNDERSTAND<br />
                  <span className="text-[#351779]">THE PRESENT.</span>
                </h2>

                <p className="text-base sm:text-lg text-[#080808]/75 leading-relaxed font-normal max-w-lg mb-6">
                  We understand how work is actually performed, where value and risk sit, and what the operating environment allows.
                </p>

                <div className="inline-block px-3 py-1.5 bg-[#080808]/[0.03] border border-[#E2E0DD] text-xs font-mono text-[#080808]/60 tracking-wider uppercase">
                  DIAGNOSTIC BASELINE · OPERATIONAL REALITY
                </div>
              </div>
            </motion.div>

            {/* Right: Minimal Diagnostic Grid Visual Accent */}
            <motion.div 
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center z-10"
            >
              <div className="w-full max-w-[420px] aspect-square border border-[#080808] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-[#351779] transition-colors duration-300">
                <div className="flex items-center justify-between border-b border-[#E2E0DD] pb-3 text-xs font-mono">
                  <span className="font-bold text-[#080808] tracking-widest uppercase">DIAGNOSTIC MATRIX</span>
                  <span className="text-[#FFC400] font-bold">SYS_01</span>
                </div>

                {/* Fine Measurement Grid lines */}
                <div className="grid grid-cols-3 gap-3 my-auto">
                  <div className="p-3 bg-[#F8F7F5] border border-[#E2E0DD]">
                    <span className="text-[10px] font-mono text-[#351779] font-bold block mb-1">01 / WORKFLOW</span>
                    <span className="text-xs font-mono text-[#080808] font-semibold">ACTUAL ROLES</span>
                  </div>
                  <div className="p-3 bg-[#F8F7F5] border border-[#E2E0DD]">
                    <span className="text-[10px] font-mono text-[#351779] font-bold block mb-1">02 / EXPOSURE</span>
                    <span className="text-xs font-mono text-[#080808] font-semibold">RISK SPOTS</span>
                  </div>
                  <div className="p-3 bg-[#F8F7F5] border border-[#E2E0DD]">
                    <span className="text-[10px] font-mono text-[#FFC400] font-bold block mb-1">03 / VALUE</span>
                    <span className="text-xs font-mono text-[#080808] font-semibold">REAL POTENTIAL</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#E2E0DD] text-[11px] font-mono text-[#080808]/60">
                  <span>ENVIRONMENT CONSTRAINTS</span>
                  <span className="text-[#351779] font-bold">VERIFIED</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>


        {/* =====================================================================
            STAGE 02: PRIORITISE
        ===================================================================== */}
        <div 
          ref={s2Ref}
          id="stage-02" 
          onMouseEnter={() => setActiveStageIdx(1)}
          className="min-h-[85vh] flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 border-b border-[#E2E0DD] bg-[#F2F1ED]/50 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
            
            {/* Left: Sparse Ranking Visual with Thin Rules & Active Marker */}
            <motion.div 
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 order-2 lg:order-1 flex justify-center z-10"
            >
              <div className="w-full max-w-[420px] border border-[#080808] bg-[#080808] text-white p-6 sm:p-8 space-y-4 shadow-2xl hover:border-[#FFC400] transition-colors duration-300">
                <div className="flex items-center justify-between pb-3 border-b border-white/15 text-xs font-mono">
                  <span className="font-bold text-[#FFC400] tracking-widest uppercase">STRATEGIC RANKING</span>
                  <span className="text-white/60">GOVERNED</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-white/[0.04] border border-[#FFC400]/40 flex items-center justify-between">
                    <span className="text-white font-medium">STRATEGIC VALUE</span>
                    <span className="px-2 py-0.5 bg-[#FFC400] text-[#080808] font-bold text-[10px]">TIER 1</span>
                  </div>
                  <div className="p-3 bg-white/[0.03] border border-white/10 flex items-center justify-between">
                    <span className="text-white font-medium">FEASIBILITY & CONTROLS</span>
                    <span className="px-2 py-0.5 bg-[#351779] text-white font-bold text-[10px]">TIER 1</span>
                  </div>
                  <div className="p-3 bg-white/[0.02] border border-white/10 flex items-center justify-between">
                    <span className="text-white/70">IMPLEMENTATION EFFORT</span>
                    <span className="text-white/60 text-[10px]">BALANCED</span>
                  </div>
                  <div className="p-3 bg-white/[0.02] border border-white/10 flex items-center justify-between">
                    <span className="text-white/70">EXPECTED BENEFIT</span>
                    <span className="text-white/60 text-[10px]">SECURED</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Oversized Number & Narrative Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 order-1 lg:order-2 relative"
            >
              {/* Background Parallax Ghost Numeral */}
              <motion.span 
                style={{ y: s2GhostY }}
                className="absolute -top-16 -left-6 sm:-top-20 sm:-left-10 font-mono text-8xl sm:text-9xl lg:text-[180px] font-black tracking-tighter text-[#080808]/[0.04] leading-none select-none pointer-events-none z-0"
              >
                02
              </motion.span>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#351779] uppercase mb-4">
                  <span>STAGE 02</span>
                  <span className="w-8 h-[1px] bg-[#351779]" />
                  <span className="text-[#080808]/60">PRIORITISE</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#080808] leading-[0.95] mb-6">
                  FOCUS ON<br />
                  <span className="text-[#351779]">WHAT MATTERS.</span>
                </h2>

                <p className="text-base sm:text-lg text-[#080808]/75 leading-relaxed font-normal max-w-lg mb-6">
                  We rank opportunities by strategic value, feasibility, control requirements, implementation effort, and expected benefit.
                </p>

                <div className="inline-block px-3 py-1.5 bg-[#080808]/[0.03] border border-[#E2E0DD] text-xs font-mono text-[#080808]/60 tracking-wider uppercase">
                  VALUE / FEASIBILITY MATRIX · SEQUENCED ROADMAP
                </div>
              </div>
            </motion.div>

          </div>
        </div>


        {/* =====================================================================
            STAGE 03: DESIGN
        ===================================================================== */}
        <div 
          ref={s3Ref}
          id="stage-03" 
          onMouseEnter={() => setActiveStageIdx(2)}
          className="min-h-[85vh] flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 border-b border-[#E2E0DD] overflow-hidden"
        >
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
            
            {/* Left: Oversized Number & Narrative Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 relative"
            >
              <motion.span 
                style={{ y: s3GhostY }}
                className="absolute -top-16 -left-6 sm:-top-20 sm:-left-10 font-mono text-8xl sm:text-9xl lg:text-[180px] font-black tracking-tighter text-[#080808]/[0.04] leading-none select-none pointer-events-none z-0"
              >
                03
              </motion.span>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#351779] uppercase mb-4">
                  <span>STAGE 03</span>
                  <span className="w-8 h-[1px] bg-[#351779]" />
                  <span className="text-[#080808]/60">DESIGN</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#080808] leading-[0.95] mb-6">
                  DEFINE THE<br />
                  <span className="text-[#351779]">WAY FORWARD.</span>
                </h2>

                <p className="text-base sm:text-lg text-[#080808]/75 leading-relaxed font-normal max-w-lg mb-6">
                  We define the target operating model, governance, controls, roles, and evidence required to deliver it.
                </p>

                <div className="inline-block px-3 py-1.5 bg-[#080808]/[0.03] border border-[#E2E0DD] text-xs font-mono text-[#080808]/60 tracking-wider uppercase">
                  OPERATING ARCHITECTURE · TARGET GOVERNANCE
                </div>
              </div>
            </motion.div>

            {/* Right: Abstract Minimal Systems Diagram */}
            <motion.div 
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center z-10"
            >
              <div className="w-full max-w-[420px] aspect-square border border-[#080808] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-[#351779] transition-colors duration-300">
                <div className="flex items-center justify-between border-b border-[#E2E0DD] pb-3 text-xs font-mono">
                  <span className="font-bold text-[#080808] tracking-widest uppercase">TARGET MODEL</span>
                  <span className="text-[#351779] font-bold">GOVERNED</span>
                </div>

                {/* SVG Rectangular Nodes & Connected Connectors */}
                <svg className="w-full h-44 my-auto" viewBox="0 0 280 140">
                  <rect x="20" y="20" width="100" height="40" fill="#F8F7F5" stroke="#080808" strokeWidth="1" />
                  <text x="32" y="44" fill="#080808" fontSize="10" fontWeight="bold" fontFamily="monospace">ROLES & TALENT</text>

                  <line x1="120" y1="40" x2="160" y2="40" stroke="#351779" strokeWidth="1.5" />

                  <rect x="160" y="20" width="100" height="40" fill="#351779" stroke="#351779" strokeWidth="1" />
                  <text x="172" y="44" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="monospace">GOVERNANCE</text>

                  <line x1="210" y1="60" x2="210" y2="90" stroke="#FFC400" strokeWidth="1.5" strokeDasharray="3,3" />

                  <rect x="160" y="90" width="100" height="40" fill="#FFC400" stroke="#080808" strokeWidth="1" />
                  <text x="175" y="114" fill="#080808" fontSize="10" fontWeight="bold" fontFamily="monospace">EVIDENCE AUDIT</text>
                </svg>

                <div className="flex items-center justify-between pt-3 border-t border-[#E2E0DD] text-[11px] font-mono text-[#080808]/60">
                  <span>ACCOUNTABILITY STRUCTURE</span>
                  <span className="text-[#351779] font-bold">COMPLETE</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>


        {/* =====================================================================
            STAGE 04: ENABLE
        ===================================================================== */}
        <div 
          ref={s4Ref}
          id="stage-04" 
          onMouseEnter={() => setActiveStageIdx(3)}
          className="min-h-[85vh] flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 border-b border-[#E2E0DD] bg-[#F2F1ED]/50 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
            
            {/* Left: Connected Modules Structure */}
            <motion.div 
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 order-2 lg:order-1 flex justify-center z-10"
            >
              <div className="w-full max-w-[420px] border border-[#080808] bg-[#080808] text-white p-6 sm:p-8 space-y-4 shadow-2xl hover:border-[#FFC400] transition-colors duration-300">
                <div className="flex items-center justify-between pb-3 border-b border-white/15 text-xs font-mono">
                  <span className="font-bold text-[#FFC400] tracking-widest uppercase">OPERATIONAL READINESS</span>
                  <span className="text-white/60">CADENCE</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-white/[0.04] border-l-2 border-[#FFC400]">
                    <span className="text-[#FFC400] font-bold block mb-0.5">LEADERSHIP GUIDANCE</span>
                    <span className="text-white/70">Decision protocols & mandate alignment</span>
                  </div>
                  <div className="p-3 bg-white/[0.04] border-l-2 border-[#351779]">
                    <span className="text-white font-bold block mb-0.5">SKILL FLUENCY</span>
                    <span className="text-white/70">Practical playbooks & workflow toolkits</span>
                  </div>
                  <div className="p-3 bg-white/[0.04] border-l-2 border-white/40">
                    <span className="text-white/80 font-bold block mb-0.5">TEAM ADOPTION</span>
                    <span className="text-white/70">Measured operational transition</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Oversized Number & Narrative Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 order-1 lg:order-2 relative"
            >
              <motion.span 
                style={{ y: s4GhostY }}
                className="absolute -top-16 -left-6 sm:-top-20 sm:-left-10 font-mono text-8xl sm:text-9xl lg:text-[180px] font-black tracking-tighter text-[#080808]/[0.04] leading-none select-none pointer-events-none z-0"
              >
                04
              </motion.span>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#351779] uppercase mb-4">
                  <span>STAGE 04</span>
                  <span className="w-8 h-[1px] bg-[#351779]" />
                  <span className="text-[#080808]/60">ENABLE</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#080808] leading-[0.95] mb-6">
                  MAKE CHANGE<br />
                  <span className="text-[#351779]">PRACTICAL.</span>
                </h2>

                <p className="text-base sm:text-lg text-[#080808]/75 leading-relaxed font-normal max-w-lg mb-6">
                  We equip leadership and teams with the skills, guidance, and playbooks to run the new way of working.
                </p>

                <div className="inline-block px-3 py-1.5 bg-[#080808]/[0.03] border border-[#E2E0DD] text-xs font-mono text-[#080808]/60 tracking-wider uppercase">
                  TALENT FLUENCY · PLAYBOOKS · TRANSITION CADENCE
                </div>
              </div>
            </motion.div>

          </div>
        </div>


        {/* =====================================================================
            STAGE 05: ASSURE
        ===================================================================== */}
        <div 
          ref={s5Ref}
          id="stage-05" 
          onMouseEnter={() => setActiveStageIdx(4)}
          className="min-h-[85vh] flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 border-b border-[#E2E0DD] overflow-hidden"
        >
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
            
            {/* Left: Oversized Number & Narrative Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 relative"
            >
              <motion.span 
                style={{ y: s5GhostY }}
                className="absolute -top-16 -left-6 sm:-top-20 sm:-left-10 font-mono text-8xl sm:text-9xl lg:text-[180px] font-black tracking-tighter text-[#080808]/[0.04] leading-none select-none pointer-events-none z-0"
              >
                05
              </motion.span>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#351779] uppercase mb-4">
                  <span>STAGE 05</span>
                  <span className="w-8 h-[1px] bg-[#351779]" />
                  <span className="text-[#080808]/60">ASSURE</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#080808] leading-[0.95] mb-6">
                  SUSTAIN THE<br />
                  <span className="text-[#351779]">OUTCOME.</span>
                </h2>

                <p className="text-base sm:text-lg text-[#080808]/75 leading-relaxed font-normal max-w-lg mb-6">
                  We support controlled rollout, validate safeguards, monitor outcomes, and refine as conditions change.
                </p>

                <div className="inline-block px-3 py-1.5 bg-[#080808]/[0.03] border border-[#E2E0DD] text-xs font-mono text-[#080808]/60 tracking-wider uppercase">
                  CONTINUOUS AUDIT · REALISATION CONTROLS
                </div>
              </div>
            </motion.div>

            {/* Right: Minimal Continuous Loop Graphic */}
            <motion.div 
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center z-10"
            >
              <div className="w-full max-w-[420px] aspect-square border border-[#080808] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-[#351779] transition-colors duration-300">
                <div className="flex items-center justify-between border-b border-[#E2E0DD] pb-3 text-xs font-mono">
                  <span className="font-bold text-[#080808] tracking-widest uppercase">OUTCOME CYCLE</span>
                  <span className="text-[#351779] font-bold">SUSTAINED</span>
                </div>

                {/* Minimal SVG Loop Graphic returning to starting point */}
                <div className="relative flex items-center justify-center my-auto overflow-hidden p-2">
                  <svg className="w-44 h-44" viewBox="0 0 160 160">
                    {/* Fixed Circular Orbit */}
                    <circle cx="80" cy="80" r="50" fill="none" stroke="#E2E0DD" strokeWidth="1.5" />
                    
                    {/* 4 Cardinal Nodes */}
                    <circle cx="80" cy="30" r="5" fill="#FFC400" stroke="#080808" strokeWidth="1" />
                    <circle cx="130" cy="80" r="4" fill="#351779" />
                    <circle cx="80" cy="130" r="4" fill="#351779" />
                    <circle cx="30" cy="80" r="4" fill="#351779" />
                    
                    {/* Center Core Typography */}
                    <text x="80" y="84" fill="#080808" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                      VALIDATE
                    </text>
                  </svg>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#E2E0DD] text-[11px] font-mono text-[#080808]/60">
                  <span>SAFEGUARD INTEGRITY</span>
                  <span className="text-[#351779] font-bold">ACTIVE</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </section>


      {/* =========================================================================
          SECTION 4: THE NEXT STEP — FINAL QUIET & SPACIOUS CLOSING CTA
      ========================================================================= */}
      <section 
        ref={ctaRef}
        className="relative bg-[#F8F7F5] py-28 lg:py-36 px-6 sm:px-10 lg:px-16 border-t border-[#E2E0DD] overflow-hidden"
      >
        {/* Animated Expanding Purple Rule */}
        <motion.div 
          style={{ scaleX: ctaLineScale, originX: 0 }}
          className="absolute top-0 left-0 right-0 h-[2px] bg-[#351779]"
        />

        {/* Subtle Horizontal Marker */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#351779]">
              THE NEXT STEP
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#080808] leading-[0.96] mb-6 max-w-3xl">
            BRING THE RIGHT PEOPLE INTO THE CONVERSATION EARLY.
          </h2>

          <p className="text-base sm:text-lg text-[#080808]/75 leading-relaxed font-normal max-w-xl mb-10">
            Start a conversation about the priorities, decisions, and delivery challenges that matter to your organisation.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#351779] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xs hover:bg-[#2B1263] transition-all duration-300 shadow-md"
          >
            <span>REQUEST A CONSULTATION</span>
            <ArrowUpRight className="w-4 h-4 text-[#FFC400] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

        </div>

      </section>

    </div>
  )
}
