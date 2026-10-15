"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue, 
  useReducedMotion,
  AnimatePresence
} from "framer-motion";
import { 
  ArrowUpRight, 
  Plus, 
  Minus,
  Layers, 
  Cpu, 
  Network, 
  BarChart3, 
  GraduationCap, 
  Compass, 
  Award,
  Users
} from "lucide-react";

/**
 * ASHERON CINEMATIC PARALLAX EXPERIENCE
 * Practice: Capability & People (Licence 7020008)
 * 
 * Styled strictly with ASHERON's official brand design system:
 * - Brand Primary Gold: #FFC400 (Hover: #E6B000)
 * - Brand Corporate Purple: #351779 (Hover: #2B1263)
 * - Editorial Light Surface: #F8F7F5 (Border / Divider: #E2E0DD)
 * - Deep Inks: #080808 / #0D0D0C / #141413
 * - Technical Text Muted: #6B6B6B / #B5B5B5
 * 
 * Features multi-layer scroll parallax, 3D cursor tilt physics,
 * 2-column interactive architectural services grid, and Dubai cartography.
 */

const coreServicesData = [
  {
    num: "01",
    tag: "STRUCTURE",
    title: "Organisation Design",
    desc: "Organisation design, role clarity, and accountability mapping structured around target operating capabilities and decision governance.",
    deliverables: ["Macro & micro-org design", "Span-of-control benchmarking", "Role accountability charters"],
    icon: Layers,
  },
  {
    num: "02",
    tag: "ANALYSIS",
    title: "Workforce Intelligence",
    desc: "Workforce assessments and future-skills planning to identify organisational capability gaps before operational stress occurs.",
    deliverables: ["Skills gap taxonomy", "Capacity demand modeling", "Strategic headcount roadmaps"],
    icon: BarChart3,
  },
  {
    num: "03",
    tag: "STANDARDS",
    title: "Capability Frameworks",
    desc: "Capability frameworks for leadership, operations, compliance, risk, and AI-enabled work tailored to regional supervisory requirements.",
    deliverables: ["Role proficiency rubrics", "Competency tiering", "Assessment playbooks"],
    icon: Compass,
  },
  {
    num: "04",
    tag: "AI READINESS",
    title: "AI Fluency",
    desc: "Role-based AI fluency, responsible-use policies, and practical adoption programmes turning executive intention into frontline habits.",
    deliverables: ["Executive & staff playbooks", "Prompt & workflow literacy", "Model safety & governance SOPs"],
    icon: Cpu,
  },
  {
    num: "05",
    tag: "ACADEMY",
    title: "Learning Systems",
    desc: "Targeted learning pathways, training curricula, executive workshops, and operational playbooks engineered for long-term retention.",
    deliverables: ["Micro-curricula design", "Train-the-trainer toolkits", "Knowledge transfer architecture"],
    icon: GraduationCap,
  },
  {
    num: "06",
    tag: "TRANSFORMATION",
    title: "Change Enablement",
    desc: "Change-impact assessments, stakeholder engagement architectures, and strategic communications planning ensuring frictionless transition.",
    deliverables: ["Change readiness scorecard", "Stakeholder coalition maps", "Communication cadence"],
    icon: Network,
  },
  {
    num: "07",
    tag: "OUTCOMES",
    title: "Performance",
    desc: "Performance and competency frameworks calibrated to executive scorecards, KPI accountability, and transparent career progression.",
    deliverables: ["Balanced scorecards", "Objective & appraisal matrix", "Leadership succession metrics"],
    icon: Award,
  },
  {
    num: "08",
    tag: "JURISDICTION",
    title: "Emiratisation",
    desc: "Emiratisation-aligned capability strategies, national-talent development pathways, and sustainable knowledge-transfer plans across the UAE.",
    deliverables: ["National talent pipelines", "Executive mentorship arcs", "Regulatory quota alignment"],
    icon: Users,
  },
];

export function PeopleCinematicExperience() {
  const prefersReducedMotion = useReducedMotion();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  // 1. Hero Ref & Multi-Layer Parallax Scroll
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothHero = useSpring(heroScroll, { stiffness: 95, damping: 28, restDelta: 0.001 });

  // Layer A: Background technical grid
  const gridY = useTransform(smoothHero, [0, 1], ["0px", prefersReducedMotion ? "0px" : "110px"]);
  // Layer B: Main architectural structure
  const archY = useTransform(smoothHero, [0, 1], ["0px", prefersReducedMotion ? "0px" : "-70px"]);
  const archScale = useTransform(smoothHero, [0, 1], [1, prefersReducedMotion ? 1 : 0.94]);
  // Layer C: Floating geometric modules (Gold & Purple blocks)
  const floatPurpleY = useTransform(smoothHero, [0, 1], ["0px", prefersReducedMotion ? "0px" : "-140px"]);
  const floatGoldY = useTransform(smoothHero, [0, 1], ["0px", prefersReducedMotion ? "0px" : "-190px"]);
  // Layer D: Technical annotations & crosshairs
  const annotY = useTransform(smoothHero, [0, 1], ["0px", prefersReducedMotion ? "0px" : "150px"]);
  // Layer E: Typography drift
  const heroTextY = useTransform(smoothHero, [0, 1], ["0px", prefersReducedMotion ? "0px" : "55px"]);
  const heroTextOpacity = useTransform(smoothHero, [0, 0.75], [1, prefersReducedMotion ? 1 : 0.25]);

  // Mouse tilt physics for architectural centerpiece (Desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const tiltRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [6, -6]);
  const tiltRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent) {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  // 2. Section 3: Dubai Regional Depth Scroll
  const regionalRef = useRef<HTMLElement>(null);
  const { scrollYProgress: regionalScroll } = useScroll({
    target: regionalRef,
    offset: ["start end", "end start"],
  });
  const smoothRegional = useSpring(regionalScroll, { stiffness: 85, damping: 26 });
  const skylineY = useTransform(smoothRegional, [0, 1], prefersReducedMotion ? ["0px", "0px"] : ["40px", "-45px"]);
  const skylineScale = useTransform(smoothRegional, [0, 0.5, 1], prefersReducedMotion ? [1, 1, 1] : [1.06, 1, 0.96]);

  // 3. Section 4: Signature Transition into Final CTA
  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress: ctaScroll } = useScroll({
    target: ctaRef,
    offset: ["start end", "end end"],
  });
  const smoothCta = useSpring(ctaScroll, { stiffness: 90, damping: 28 });
  const ctaLineScale = useTransform(smoothCta, [0, 0.6], [0, 1]);
  const ctaHeadingY = useTransform(smoothCta, [0, 0.8], ["50px", "0px"]);
  const ctaHeadingOpacity = useTransform(smoothCta, [0, 0.5], [0, 1]);

  return (
    <div className="w-full bg-[#F8F7F5] text-[#080808] font-sans selection:bg-[#FFC400] selection:text-[#080808] antialiased overflow-hidden">
      
      {/* =========================================================================
          SECTION 1: CINEMATIC HERO (EDITORIAL BONE CANVAS + 3D ARCHITECTURAL CENTERPIECE)
      ========================================================================= */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-screen bg-[#F8F7F5] flex flex-col justify-between pt-8 pb-12 px-6 sm:px-10 lg:px-14 border-b border-[#E2E0DD] overflow-hidden"
      >
        {/* Layer A: Fine Architectural Technical Grid */}
        <motion.div
          style={{ y: gridY }}
          className="absolute inset-0 pointer-events-none opacity-45"
        >
          <div
            className="w-full h-[140%] -top-[20%]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #E2E0DD 1px, transparent 1px), linear-gradient(to bottom, #E2E0DD 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </motion.div>

        {/* Ambient Subtle Asheron Gold Spotlight */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-radial from-[#FFC400]/12 via-[#351779]/08 to-transparent blur-3xl pointer-events-none opacity-60" />

        {/* Layer D: Clean Subtle Accents */}
        <motion.div
          style={{ y: annotY }}
          className="absolute inset-0 pointer-events-none z-0"
        />

        {/* Top Technical Metadata Row (Offset pr-14 sm:pr-20 for global floating menu button) */}
        <div className="relative z-20 flex items-center justify-between border-b border-[#E2E0DD] pb-5 pr-14 sm:pr-20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFC400] animate-pulse" />
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.28em] text-[#080808] uppercase">
              ASHERON
            </span>
            <span className="hidden sm:inline text-xs font-mono text-[#080808]/50 tracking-[0.2em] pl-2 border-l border-[#E2E0DD]">
              PRACTICE /03
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-[#080808]/60 uppercase">
            <span>PEOPLE</span>
            <span>•</span>
            <span>OPERATING MODELS</span>
            <span>•</span>
            <span>ADOPTION</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-[#351779] font-bold">LICENCE 7020008</span>
            <span className="text-[#E2E0DD] hidden sm:inline">|</span>
            <Link
              href="/#contact"
              className="hidden sm:inline-flex px-3.5 py-1 rounded-full border border-[#080808] text-[11px] font-mono tracking-wider uppercase hover:bg-[#351779] hover:border-[#351779] hover:text-white transition-all font-semibold"
            >
              Consult ↗
            </Link>
          </div>
        </div>

        {/* Main Hero Grid: Left Typography + Right Architectural Centerpiece */}
        <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-8">
          
          {/* Left Column: Monumental Editorial Typography */}
          <motion.div
            style={{ y: heroTextY, opacity: heroTextOpacity }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Section Index Marker */}
            <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.3em] text-[#351779] uppercase mb-4">
              <span>/01</span>
              <span className="w-8 h-[1px] bg-[#351779]" />
              <span className="text-[#080808]/70">PEOPLE & CAPABILITY</span>
            </div>

            {/* Monumental Condensed Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-[76px] font-black uppercase tracking-tight leading-[0.92] text-[#080808] mb-6">
              CAPABILITY<br />
              THAT MAKES<br />
              <span className="text-[#351779]">CHANGE STICK.</span>
            </h1>

            {/* Supporting Statement */}
            <p className="text-xs sm:text-sm font-mono tracking-[0.24em] uppercase text-[#080808]/70 mb-6 font-semibold">
              PEOPLE. OPERATING MODELS. ADOPTION.
            </p>

            {/* Introductory Copy */}
            <p className="text-sm sm:text-base text-[#080808]/80 max-w-lg leading-relaxed font-normal mb-8">
              Technology and strategy deliver results only when people understand their roles, hold the right skills, and are supported through change. Asheron designs practical workforce and capability interventions aligned to the operating model and business objectives.
            </p>

            {/* Black CTA & Micro Metadata */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#351779] text-white text-xs sm:text-sm font-mono font-bold tracking-[0.18em] uppercase rounded-xs hover:bg-[#2B1263] transition-all duration-300 shadow-md"
              >
                <span>CONSULT OUR CAPABILITY TEAM</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <span className="text-[11px] font-mono text-[#080808]/50 tracking-wider">
                DUBAI, UAE · ADVISORY
              </span>
            </div>
          </motion.div>

          {/* Right Column: Monochrome 3D Architectural Structure with Asheron Purple & Gold Modules */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <motion.div
              style={{
                y: archY,
                scale: archScale,
                rotateX: tiltRotateX,
                rotateY: tiltRotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-square flex items-center justify-center select-none"
            >
              {/* Outer Wireframe Framing Cage */}
              <div className="absolute inset-0 border border-[#080808]/20 rounded-xs pointer-events-none" />
              <div className="absolute inset-4 border border-dashed border-[#351779]/30 rounded-xs pointer-events-none" />

              {/* Central Architectural Image / Structural Geometry */}
              <div className="relative w-[85%] h-[85%] overflow-hidden rounded-xs border border-[#080808] bg-[#080808] shadow-2xl">
                <Image
                  src="/practice_people.jpg"
                  alt="Asheron People Architecture"
                  fill
                  priority
                  className="object-cover filter grayscale contrast-150 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Fine Architectural Grid & Perspective Vectors Overlay in Asheron Palette */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 100 100">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="#351779" strokeWidth="0.5" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="#FFC400" strokeWidth="0.5" strokeDasharray="2,2" />
                  <circle cx="50" cy="50" r="32" fill="none" stroke="#FFFFFF" strokeWidth="0.4" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="#351779" strokeWidth="0.6" strokeDasharray="3,3" />
                  <rect x="25" y="25" width="50" height="50" fill="none" stroke="#FFC400" strokeWidth="0.4" />
                </svg>

                {/* Practice Indicator */}
                <div className="absolute bottom-4 left-4 font-mono text-xs tracking-wider text-white uppercase">
                  <p className="text-[#FFC400] font-bold">ASHERON ADVISORY</p>
                  <p className="text-white/80">ORGANISATIONAL ALIGNMENT</p>
                </div>
              </div>

              {/* Layer C: Floating Brand Purple Geometric Module */}
              <motion.div
                style={{ y: floatPurpleY }}
                className="absolute -top-3 -right-3 w-16 h-16 bg-[#351779] text-white border border-[#080808] shadow-xl p-2 flex flex-col justify-between z-20"
              >
                <span className="font-mono text-xs tracking-widest text-[#FFC400] font-bold">/03</span>
                <span className="font-mono text-[10px] tracking-wider leading-none uppercase font-bold">ALIGN</span>
              </motion.div>

              {/* Layer C: Floating Primary Gold Geometric Accent Module */}
              <motion.div
                style={{ y: floatGoldY }}
                className="absolute -bottom-4 -left-4 w-24 h-10 bg-[#FFC400] text-[#080808] border border-[#080808] shadow-xl px-2.5 py-1.5 flex items-center justify-between z-20"
              >
                <div className="w-2 h-2 rounded-full bg-[#080808]" />
                <span className="font-mono text-[10px] font-black tracking-widest uppercase">ENABLE</span>
              </motion.div>

              {/* Technical Bracket Accents */}
              <div className="absolute -top-2 left-6 w-6 h-[2px] bg-[#080808]" />
              <div className="absolute -bottom-2 right-6 w-6 h-[2px] bg-[#351779]" />
            </motion.div>
          </div>

        </div>

        {/* Hero Bottom Strip: Technical Status Bar */}
        <div className="relative z-20 hidden md:flex items-center justify-between pt-4 border-t border-[#E2E0DD] text-[10px] font-mono tracking-[0.24em] text-[#080808]/60 uppercase">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#351779]" />
              ORGANISATION DESIGN
            </span>
            <span>•</span>
            <span>AI FLUENCY</span>
            <span>•</span>
            <span>EMIRATISATION</span>
          </div>
          <div>
            <span>SYSTEMATIC READINESS · MEASURABLE OUTCOMES</span>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2: CORE SERVICES — INTERACTIVE ARCHITECTURAL GRID (/02)
      ========================================================================= */}
      <section id="services" className="relative bg-[#F8F7F5] py-24 lg:py-32 px-6 sm:px-10 lg:px-14 border-b border-[#E2E0DD]">
        
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.3em] text-[#351779] uppercase mb-4">
            <span>/02</span>
            <span className="w-8 h-[1px] bg-[#351779]" />
            <span className="text-[#080808]/70">DISCIPLINED ADVISORY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#080808] leading-[0.98]">
                CORE<br />
                SERVICES
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-[#080808]/75 leading-relaxed font-normal">
                We design and implement capability frameworks that ensure your workforce is equipped to deliver on strategic, technological, and operational goals.
              </p>
            </div>
          </div>
        </div>

        {/* Precise Two-Column Interactive Architectural Grid */}
        <div className="max-w-7xl mx-auto border-t border-[#E2E0DD] divide-y divide-[#E2E0DD]">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E0DD]">
            
            {/* Column 1: Services 01 to 04 */}
            <div className="divide-y divide-[#E2E0DD]">
              {coreServicesData.slice(0, 4).map((svc, idx) => {
                const IconComponent = svc.icon;
                const isExpanded = activeAccordion === idx;

                return (
                  <div
                    key={svc.num}
                    onClick={() => setActiveAccordion(isExpanded ? null : idx)}
                    className="group py-8 px-4 sm:px-8 cursor-pointer transition-colors duration-300 hover:bg-white/60 relative"
                  >
                    {/* Left Accent indicator line on hover */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#351779] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs sm:text-sm font-bold text-[#351779] tracking-wider">
                          {svc.num}
                        </span>
                        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#080808]/50">
                          {svc.tag}
                        </span>
                      </div>

                      <div className="w-8 h-8 rounded-xs border border-[#080808]/20 flex items-center justify-center text-[#080808] group-hover:border-[#351779] group-hover:bg-[#351779] group-hover:text-white transition-all duration-200">
                        {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-xs bg-[#080808]/5 text-[#351779] shrink-0 mt-0.5">
                        <IconComponent className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#080808] group-hover:text-[#351779] transition-colors duration-200 mb-2">
                          {svc.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#080808]/70 leading-relaxed font-normal">
                          {svc.desc}
                        </p>
                      </div>
                    </div>

                    {/* Expandable Deliverables Drawer */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden pt-5 pl-14"
                        >
                          <div className="p-4 bg-white border border-[#E2E0DD] rounded-xs shadow-xs">
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#351779] font-bold block mb-2">
                              Verified Deliverables
                            </span>
                            <ul className="space-y-1.5">
                              {svc.deliverables.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs text-[#080808]/80 font-mono">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC400]" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Column 2: Services 05 to 08 */}
            <div className="divide-y divide-[#E2E0DD]">
              {coreServicesData.slice(4, 8).map((svc, idx) => {
                const adjustedIdx = idx + 4;
                const IconComponent = svc.icon;
                const isExpanded = activeAccordion === adjustedIdx;

                return (
                  <div
                    key={svc.num}
                    onClick={() => setActiveAccordion(isExpanded ? null : adjustedIdx)}
                    className="group py-8 px-4 sm:px-8 cursor-pointer transition-colors duration-300 hover:bg-white/60 relative"
                  >
                    {/* Left Accent indicator line on hover */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#351779] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs sm:text-sm font-bold text-[#351779] tracking-wider">
                          {svc.num}
                        </span>
                        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#080808]/50">
                          {svc.tag}
                        </span>
                      </div>

                      <div className="w-8 h-8 rounded-xs border border-[#080808]/20 flex items-center justify-center text-[#080808] group-hover:border-[#351779] group-hover:bg-[#351779] group-hover:text-white transition-all duration-200">
                        {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-xs bg-[#080808]/5 text-[#351779] shrink-0 mt-0.5">
                        <IconComponent className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#080808] group-hover:text-[#351779] transition-colors duration-200 mb-2">
                          {svc.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#080808]/70 leading-relaxed font-normal">
                          {svc.desc}
                        </p>
                      </div>
                    </div>

                    {/* Expandable Deliverables Drawer */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden pt-5 pl-14"
                        >
                          <div className="p-4 bg-white border border-[#E2E0DD] rounded-xs shadow-xs">
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#351779] font-bold block mb-2">
                              Verified Deliverables
                            </span>
                            <ul className="space-y-1.5">
                              {svc.deliverables.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs text-[#080808]/80 font-mono">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC400]" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 3: REGIONAL DEPTH — CINEMATIC DUBAI VISUAL (/03)
      ========================================================================= */}
      <section 
        id="regional" 
        ref={regionalRef}
        className="relative bg-[#080808] text-white py-24 lg:py-32 px-6 sm:px-10 lg:px-14 border-b border-white/10 overflow-hidden"
      >
        {/* Subtle architectural grid lines */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="max-w-7xl mx-auto">
          {/* Section Marker */}
          <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.3em] text-[#FFC400] uppercase mb-12">
            <span>/03</span>
            <span className="w-8 h-[1px] bg-[#FFC400]" />
            <span className="text-white/60">REGIONAL DEPTH · UAE FOCUS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[0.98] mb-8">
                  BUILD CAPABILITY<br />
                  THAT STAYS IN<br />
                  <span className="text-[#FFC400]">THE BUSINESS.</span>
                </h2>

                <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-8 border-l-2 border-[#FFC400] pl-6">
                  Programmes are designed to support national-talent development goals while ensuring that critical knowledge, capability, and succession planning are embedded within the business rather than retained by external providers.
                </p>

                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal mb-10 max-w-lg">
                  We partner directly with UAE federal entities, freezones, and private enterprises to build sustainable institutional memory and autonomous talent capability across Dubai and Abu Dhabi.
                </p>
              </div>

              {/* Three Strategic Labels */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15">
                <div className="p-3 bg-white/[0.04] border border-white/10 rounded-xs">
                  <span className="text-[10px] font-mono text-[#FFC400] block mb-1">01 / PILLAR</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-white">PEOPLE DEVELOPMENT</span>
                </div>
                <div className="p-3 bg-white/[0.04] border border-white/10 rounded-xs">
                  <span className="text-[10px] font-mono text-[#351779] block mb-1">02 / PILLAR</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-white">LOCAL IMPACT</span>
                </div>
                <div className="p-3 bg-white/[0.04] border border-white/10 rounded-xs">
                  <span className="text-[10px] font-mono text-white/50 block mb-1">03 / PILLAR</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-white">LONG-TERM VALUE</span>
                </div>
              </div>
            </div>

            {/* Right Architectural Cartographic Visualization */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[480px] rounded-xs overflow-hidden border border-white/20 bg-black shadow-2xl">
                
                {/* Parallax Skyline Container */}
                <motion.div
                  style={{ y: skylineY, scale: skylineScale }}
                  className="relative w-full h-[120%] -top-[10%]"
                >
                  <Image
                    src="/dubai_skyline.jpg"
                    alt="Dubai Architectural Elevation"
                    fill
                    className="object-cover filter grayscale contrast-150 brightness-90"
                  />
                </motion.div>

                {/* Technical Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                {/* Architectural Grid & Perspective Vectors (Cartographic lines in Gold & Purple) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-45" viewBox="0 0 100 100">
                  <line x1="0" y1="20" x2="100" y2="20" stroke="#351779" strokeWidth="0.3" strokeDasharray="3,3" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="#FFFFFF" strokeWidth="0.3" />
                  <line x1="0" y1="80" x2="100" y2="80" stroke="#FFC400" strokeWidth="0.3" strokeDasharray="2,2" />
                  <line x1="30" y1="0" x2="30" y2="100" stroke="#351779" strokeWidth="0.3" />
                  <line x1="70" y1="0" x2="70" y2="100" stroke="#FFFFFF" strokeWidth="0.3" strokeDasharray="2,2" />
                </svg>

                {/* Regional Context Marker */}
                <div className="absolute top-6 right-6 font-mono text-xs tracking-wider text-right uppercase text-white/90">
                  <p className="text-[#FFC400] font-bold">DUBAI · UAE</p>
                  <p className="text-white/70">REGIONAL PRACTICE</p>
                </div>

                <div className="absolute bottom-6 left-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
                  <span className="font-mono text-xs text-white uppercase tracking-widest font-semibold">
                    NATIONAL TALENT SOVEREIGNTY
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 4: SIGNATURE TRANSITION INTO FINAL MONUMENTAL CTA (/04)
      ========================================================================= */}
      <section 
        id="cta"
        ref={ctaRef}
        className="relative bg-[#F8F7F5] py-28 lg:py-36 px-6 sm:px-10 lg:px-14 overflow-hidden"
      >
        {/* Animated Brand Corporate Purple Divider Line */}
        <motion.div
          style={{ scaleX: ctaLineScale, originX: 0 }}
          className="absolute top-0 left-0 right-0 h-[2px] bg-[#351779]"
        />

        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Section Marker /04 */}
          <div className="inline-flex items-center gap-3 text-xs font-mono font-bold tracking-[0.3em] text-[#351779] uppercase mb-6">
            <span>/04</span>
            <span className="w-8 h-[1px] bg-[#351779]" />
            <span className="text-[#080808]/70">ENGAGEMENT CADENCE</span>
          </div>

          {/* Monumental Masked Headline */}
          <motion.div
            style={{ y: ctaHeadingY, opacity: ctaHeadingOpacity }}
            className="overflow-hidden mb-6"
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-black uppercase tracking-tight leading-[0.92] text-[#080808]">
              MAKE CHANGE<br />
              <span className="text-[#351779]">OPERATIONAL.</span>
            </h2>
          </motion.div>

          {/* Supporting Line */}
          <p className="text-base sm:text-xl text-[#080808]/75 font-normal max-w-xl mx-auto mb-10 leading-relaxed">
            Turn strategy into clear roles, stronger skills, and sustained adoption across your organisation.
          </p>

          {/* Black & Brand Purple CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#351779] text-white text-xs sm:text-sm font-mono font-bold tracking-[0.2em] uppercase rounded-xs hover:bg-[#2B1263] transition-all duration-300 shadow-xl"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/approach"
              className="px-6 py-4 border border-[#080808]/30 text-xs sm:text-sm font-mono font-bold tracking-[0.16em] uppercase text-[#080808] hover:bg-black/5 transition-all"
            >
              EXPLORE OUR APPROACH →
            </Link>
          </div>

          {/* Minimal Footnote Verification */}
          <div className="mt-14 pt-8 border-t border-[#E2E0DD] w-full max-w-md flex items-center justify-between text-[10px] font-mono tracking-[0.2em] text-[#080808]/50 uppercase">
            <span>DUBAI, UAE</span>
            <span>•</span>
            <span>LICENCE 7020008</span>
            <span>•</span>
            <span>ASHERON ADVISORY</span>
          </div>

        </div>
      </section>

    </div>
  );
}
