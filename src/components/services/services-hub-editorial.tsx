"use client"

import React, { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion"
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2, Layers, Cpu, Compass, Users, Briefcase } from "lucide-react"

/**
 * ASHERON SERVICES HUB — EDITORIAL EXECUTIVE SUITE
 * 
 * Aligns with the full site design system:
 * - Editorial Palette: #F8F7F5 (Editorial Warm Bone), #080808 (Carbon Noir), #FFFFFF
 * - Accent Colors: #FFC400 (Gold), #351779 (Imperial Purple / Hover #2B1263)
 * - Hairline Dividers: #E2E0DD
 * - Editorial Mono Tags & Micro-typography
 * - Interactive Practice Showcases with rich architectural images
 * - Cross-practice sequencing matrix & direct consultation CTA
 */

interface PracticeItem {
  id: string
  step: string
  name: string
  licence: string
  licenceName: string
  tagline: string
  summary: string
  bullets: string[]
  deliverables: string[]
  metric: string
  image: string
  href: string
  icon: typeof Cpu
}

const practices: PracticeItem[] = [
  {
    id: "ai-innovation",
    step: "01",
    name: "AI & Innovation",
    licence: "7020039",
    licenceName: "Artificial Intelligence Consultancy",
    tagline: "Governed Enterprise AI Architecture",
    summary:
      "AI adoption should create measurable value without weakening governance, confidentiality, regulatory compliance, or accountability. Asheron helps organisations move from isolated experimentation to practical, controlled, and scalable AI-enabled ways of working.",
    bullets: [
      "AI Strategy & Executive Readiness",
      "AI Use-Case Discovery & ROI Prioritisation",
      "AI Governance, Ethics & Assurance",
      "Generative AI Enablement & Guardrails",
      "AI Vendor & Model Risk Assessment",
      "Implementation & Audit Oversight",
    ],
    deliverables: [
      "Enterprise AI Readiness Audit",
      "Responsible AI Governance SOPs",
      "Algorithmic Risk & Model Scorecard",
    ],
    metric: "40+ Workflows Automated",
    image: "/practice_ai.jpg",
    href: "/services/ai-innovation",
    icon: Cpu,
  },
  {
    id: "strategy",
    step: "02",
    name: "Strategy & Management",
    licence: "7020003",
    licenceName: "Management Consultancies",
    tagline: "Operating Models Designed for Execution",
    summary:
      "Strategy that survives contact with reality. Asheron supports boards, executive committees, and business leaders in translating growth, transformation, regulatory, and operational priorities into a clear operating model and an accountable roadmap.",
    bullets: [
      "Corporate & Business-Unit Strategy",
      "Target Operating-Model (TOM) Design",
      "Governance & Decision Rights Matrix",
      "Process Re-engineering & Optimization",
      "KPI & Performance Value Frameworks",
      "Board & Executive Advisory Cadence",
    ],
    deliverables: [
      "Target Operating Model Blueprint",
      "Decision Rights & RACI Matrix",
      "100% Deliverable Milestone Roadmap",
    ],
    metric: "100% Deliverable Roadmaps",
    image: "/practice_strategy.jpg",
    href: "/services/strategy",
    icon: Compass,
  },
  {
    id: "people",
    step: "03",
    name: "People & Capability",
    licence: "7020008",
    licenceName: "Human Resources Consultancies",
    tagline: "Capability That Makes Change Stick",
    summary:
      "Technology and strategy deliver results only when people understand their roles, hold the right skills, and are supported through change. We build role-specific capability frameworks, workforce impact models, and Emiratisation-aligned growth paths.",
    bullets: [
      "Organisation Design & Structuring",
      "Workforce & Critical Skills Planning",
      "Capability Frameworks & Competency Models",
      "Role-Specific AI Fluency Programmes",
      "Change Architecture & Culture Enablement",
      "Emiratisation-aligned Capability Pathways",
    ],
    deliverables: [
      "Workforce Competency Architecture",
      "AI Fluency Playbooks by Department",
      "Change & Leadership Enablement Matrix",
    ],
    metric: "Role-Specific Fluency",
    image: "/practice_people.jpg",
    href: "/services/people",
    icon: Users,
  },
  {
    id: "projects",
    step: "04",
    name: "Project Development",
    licence: "7020020",
    licenceName: "Project Development Consultancies",
    tagline: "Projects Built for Governed Delivery",
    summary:
      "Projects built for delivery — not presentation. Asheron helps clients move from an initial concept or business case to a governed, investable, and deliverable programme with rigorous PMO controls and stage-gate assurance.",
    bullets: [
      "Business Cases & Investment Feasibility",
      "PMO Establishment & Control Setup",
      "Programme Mobilisation & Resource Scoping",
      "Stage-Gate Delivery Assurance",
      "Vendor Selection & Contract Oversight",
      "Programme Recovery & Course Correction",
    ],
    deliverables: [
      "Institutional Feasibility Study",
      "Stage-Gate PMO Governance Charter",
      "Vendor Audit & Milestone Verification",
    ],
    metric: "Governed Stage-Gate Assurance",
    image: "/practice_projects.jpg",
    href: "/services/projects",
    icon: Briefcase,
  },
]

export function ServicesHubEditorial() {
  const prefersReducedMotion = useReducedMotion()
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  // Scroll tracking for reading progression bar
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 28 })
  const railWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"])

  const filteredPractices =
    activeFilter === "all"
      ? practices
      : practices.filter((p) => p.id === activeFilter)

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col bg-[#F8F7F5] text-[#080808] selection:bg-[#FFC400] selection:text-[#080808]"
    >
      {/* ── Top Progress Rail ── */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-transparent z-40">
        <motion.div
          style={{ width: railWidth }}
          className="h-full bg-gradient-to-r from-[#351779] via-[#FFC400] to-[#351779]"
        />
      </div>

      {/* ── HERO SECTION: Editorial Luxury ── */}
      <section className="relative bg-[#080808] text-white pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-white/10 overflow-hidden">
        {/* Subtle Architectural Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl">
            {/* Top Identity Tag */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6 sm:mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-[#FFC400] flex-shrink-0 animate-pulse" />
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.28em] text-[#FFC400]">
                Licensed Advisory Practices
              </span>
              <span className="text-white/30 hidden sm:inline">|</span>
              <span className="font-mono text-xs uppercase tracking-wider text-white/50 hidden sm:inline">
                Dubai, UAE · Department of Economy and Tourism
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-8"
            >
              Four practices. <br />
              <span className="text-white/60 font-light">One governed standard</span>
              <span className="text-[#FFC400]">.</span>
            </motion.h1>

            {/* Subhead Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-white/70 font-light max-w-3xl leading-relaxed mb-10"
            >
              Matched to our four official commercial licences. Asheron integrates strategy,
              enterprise delivery, workforce capability, and responsible AI innovation —
              turning boardroom priorities into controlled, measurable operational outcomes.
            </motion.p>

            {/* Action Bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#351779] text-white font-semibold text-xs tracking-widest uppercase hover:bg-[#2B1263] transition-all shadow-lg hover:shadow-[#351779]/30"
              >
                <span>Request a Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFC400] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/services/complete-shelf"
                className="group inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-xs tracking-widest uppercase transition-all"
              >
                <span>Launch 3D Practice Shelf</span>
                <span className="text-[#FFC400] group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PRACTICES SELECTOR BAR (Sticky Filter & Fast Jump) ── */}
      <section className="sticky top-0 z-30 bg-[#F8F7F5]/95 backdrop-blur-md border-b border-[#E2E0DD] py-4">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                activeFilter === "all"
                  ? "bg-[#080808] text-white font-bold"
                  : "bg-white text-[#080808]/70 hover:bg-[#E2E0DD]/60 border border-[#E2E0DD]"
              }`}
            >
              All Practices (04)
            </button>
            {practices.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveFilter(p.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeFilter === p.id
                    ? "bg-[#351779] text-white font-bold"
                    : "bg-white text-[#080808]/70 hover:bg-[#E2E0DD]/60 border border-[#E2E0DD]"
                }`}
              >
                <span>{p.step}</span>
                <span>{p.name}</span>
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 text-[11px] font-mono uppercase tracking-wider text-[#080808]/60">
            <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
            <span>Dubai Commercial Licences Verified</span>
          </div>
        </div>
      </section>

      {/* ── EDITORIAL PRACTICES SHOWCASE (Full-Width Cinematic Deep Dives) ── */}
      <div className="divide-y divide-[#E2E0DD]">
        {filteredPractices.map((practice, idx) => {
          const IconComp = practice.icon
          const isReversed = idx % 2 !== 0

          return (
            <section
              key={practice.id}
              id={practice.id}
              className={`py-20 lg:py-28 transition-colors ${
                idx % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F8F7F5]"
              }`}
            >
              <div className="container mx-auto px-6 max-w-7xl">
                <div
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left (or Right) Content Column */}
                  <div className="flex-1 w-full">
                    {/* Practice Identifier Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="px-2.5 py-1 rounded bg-[#351779] text-white font-mono text-[11px] font-bold tracking-widest uppercase">
                        Practice {practice.step}
                      </span>
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#080808]/60">
                        Licence #{practice.licence}
                      </span>
                      <span className="text-[#E2E0DD]">•</span>
                      <span className="font-mono text-xs font-medium text-[#777]">
                        {practice.licenceName}
                      </span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#080808] mb-3 leading-[1.12]">
                      {practice.name}
                    </h2>

                    <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#351779] mb-6">
                      {practice.tagline}
                    </p>

                    <p className="text-base sm:text-lg text-[#080808]/75 leading-relaxed mb-8 font-light">
                      {practice.summary}
                    </p>

                    {/* Core Capabilities Grid */}
                    <div className="mb-8">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#080808] block mb-3">
                        Core Advisory Capabilities
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {practice.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm text-[#080808]/85 group"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FFC400] mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables / Signature Artifacts */}
                    <div className="p-5 rounded-xl bg-[#F8F7F5] border border-[#E2E0DD] mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#351779]">
                          Governed Deliverables
                        </span>
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#777] bg-white px-2 py-0.5 rounded border border-[#E2E0DD]">
                          {practice.metric}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#080808]/80 font-medium">
                        {practice.deliverables.map((d, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#351779] flex-shrink-0" />
                            <span className="truncate">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href={practice.href}
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#351779] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#2B1263] transition-all shadow-sm"
                      >
                        <span>Explore {practice.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#FFC400] transition-transform group-hover:translate-x-1" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#080808] border border-[#E2E0DD] text-xs font-semibold tracking-wider uppercase hover:border-[#351779] hover:text-[#351779] transition-all"
                      >
                        <span>Enquire About Practice</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#080808]/40" />
                      </Link>
                    </div>
                  </div>

                  {/* Right (or Left) Image Column: High-End Photography Card */}
                  <div className="flex-1 w-full flex justify-center">
                    <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden border border-[#E2E0DD] shadow-xl group bg-[#080808]">
                      <Image
                        src={practice.image}
                        alt={`${practice.name} - Asheron Licensed Advisory`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        priority={idx === 0}
                      />

                      {/* Editorial Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      {/* Floating Micro Badge on Top Corner */}
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-[11px] font-mono tracking-wider">
                        <IconComp className="w-3.5 h-3.5 text-[#FFC400]" />
                        <span>LICENCE {practice.licence}</span>
                      </div>

                      {/* Bottom Banner Inside Card */}
                      <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between text-white">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 block">
                            Dubai Commercial Authority
                          </span>
                          <span className="text-xs font-bold tracking-wide">
                            {practice.licenceName}
                          </span>
                        </div>
                        <Link
                          href={practice.href}
                          className="h-8 w-8 rounded-full bg-[#FFC400] text-[#080808] flex items-center justify-center transition-transform hover:scale-110 flex-shrink-0"
                          aria-label={`Open ${practice.name} detail`}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* ── PRACTICE SEQUENCING MATRIX (Interactive Value Flow) ── */}
      <section className="py-24 bg-[#080808] text-white border-t border-white/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-2 w-2 rounded-full bg-[#FFC400]" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#FFC400]">
                Sequenced Engagement Model
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Independent or sequenced.
            </h2>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              Clients engage individual practices to solve urgent regulatory, capability, or
              system challenges — or combine all four in sequence to take an ambition from board
              sanction to operational reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practices.map((p, i) => (
              <div
                key={p.id}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFC400]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 font-mono text-xs">
                    <span className="text-[#FFC400] font-bold">STAGE {p.step}</span>
                    <span className="text-white/40">LIC {p.licence}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{p.name}</h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-6">
                    {p.tagline}
                  </p>
                </div>
                <Link
                  href={p.href}
                  className="inline-flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono tracking-wider uppercase text-[#FFC400] hover:text-white transition-colors"
                >
                  <span>Read Practice Spec</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING EDITORIAL CONSULTATION BANNER ── */}
      <section className="py-24 bg-[#F8F7F5] text-[#080808] border-t border-[#E2E0DD]">
        <div className="container mx-auto px-6 max-w-4xl text-center flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-[#FFC400]" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#351779]">
              Direct Engagement
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#080808] mb-6">
            Ready to structure your engagement?
          </h2>

          <p className="text-base sm:text-lg text-[#080808]/70 leading-relaxed mb-10 max-w-2xl font-light">
            Tell us briefly about your mandate. Our leadership team will review and respond within
            one business day with a structured briefing note.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#351779] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#2B1263] transition-all shadow-md"
            >
              <span>Request a Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-[#FFC400]" />
            </Link>

            <Link
              href="/approach"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#080808] border border-[#E2E0DD] text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-full hover:border-[#351779] hover:text-[#351779] transition-all"
            >
              <span>Explore Our Approach</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
