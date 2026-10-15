"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useReducedMotion 
} from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * StrategyReferenceLayout
 * 
 * Styled strictly with ASHERON's official brand design system:
 * - Brand Primary Gold: #FFC400 (Hover: #E6B000)
 * - Brand Deep Corporate Purple / Navy: #351779 (Hover: #2B1263)
 * - Cinematic Dark Inks: #080808 / #0D0D0C / #141413
 * - Editorial Light Surface: #F8F7F5 (Border: #E2E0DD)
 * - Technical Muted Accents: #6B6B6B / #B5B5B5
 * 
 * Features REAL multi-layer scroll parallax across Hero, About editorial,
 * Solutions directory, and Featured capability sections.
 */

export function StrategyReferenceLayout() {
  const prefersReducedMotion = useReducedMotion();

  // Root container ref for whole page scroll metrics if needed
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Hero Section Scroll Tracking
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Smooth springs for hero layers
  const smoothHero = useSpring(heroScroll, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Hero differential transforms
  const gridY = useTransform(smoothHero, [0, 1], ["0px", prefersReducedMotion ? "0px" : "130px"]);
  const crosshairY = useTransform(smoothHero, [0, 1], ["0px", prefersReducedMotion ? "0px" : "190px"]);
  const heroTextY = useTransform(smoothHero, [0, 1], ["0px", prefersReducedMotion ? "0px" : "65px"]);
  const heroTextOpacity = useTransform(smoothHero, [0, 0.75], [1, prefersReducedMotion ? 1 : 0.2]);
  const heroImageY = useTransform(smoothHero, [0, 1], ["0px", prefersReducedMotion ? "0px" : "-80px"]);
  const heroAccentY = useTransform(smoothHero, [0, 1], ["0px", prefersReducedMotion ? "0px" : "-120px"]);
  const heroImageScale = useTransform(smoothHero, [0, 1], [1, prefersReducedMotion ? 1 : 1.08]);

  // 2. Section 2 (Editorial About) Scroll Tracking
  const aboutRef = useRef<HTMLElement>(null);
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const smoothAbout = useSpring(aboutScroll, { stiffness: 90, damping: 28 });
  const aboutImageY = useTransform(smoothAbout, [0, 1], prefersReducedMotion ? ["0px", "0px"] : ["-50px", "50px"]);
  const aboutStatsY = useTransform(smoothAbout, [0, 1], prefersReducedMotion ? ["0px", "0px"] : ["30px", "-30px"]);

  // 3. Section 4 (Featured Capability) Scroll Tracking
  const featuredRef = useRef<HTMLElement>(null);
  const { scrollYProgress: featuredScroll } = useScroll({
    target: featuredRef,
    offset: ["start end", "end start"],
  });
  const smoothFeatured = useSpring(featuredScroll, { stiffness: 90, damping: 28 });
  const mountainImageY = useTransform(smoothFeatured, [0, 1], prefersReducedMotion ? ["0px", "0px"] : ["-60px", "60px"]);
  const diagonalCtaY = useTransform(smoothFeatured, [0, 1], prefersReducedMotion ? ["0px", "0px"] : ["40px", "-35px"]);
  const diagonalCtaScale = useTransform(smoothFeatured, [0, 0.5, 1], prefersReducedMotion ? [1, 1, 1] : [0.96, 1, 1.02]);

  // Solutions data
  const solutions = [
    {
      num: "01",
      title: "Operating Model & TOM",
      category: "Architecture",
      desc: "Target operating model design, organisational sizing, and end-to-end workflow blueprinting.",
      image: "/practice_strategy.jpg",
      details: "Translating board ambition into functional operating structures with unambiguous process ownership."
    },
    {
      num: "02",
      title: "Governance & Decision Rights",
      category: "Oversight",
      desc: "Delegation of Authority (DoA), executive committees, and management forum charters.",
      image: "/practice_ai.jpg",
      details: "Eliminating decision bottlenecks with auditable governance frameworks designed for UAE supervisory standards."
    },
    {
      num: "03",
      title: "Transformation & Roadmaps",
      category: "Execution",
      desc: "Sequenced multi-year implementation milestones, PMO structures, and control optimisation.",
      image: "/practice_projects.jpg",
      details: "Rigorous execution sequencing balancing near-term efficiency quick wins with long-term structural resilience."
    }
  ];

  const allEightServices = [
    { id: "01", title: "Corporate, business-unit, and functional strategy", tag: "Mandate" },
    { id: "02", title: "Operating-model assessment and target operating-model design", tag: "TOM" },
    { id: "03", title: "Governance structures, decision rights, and management forums", tag: "Governance" },
    { id: "04", title: "Process mapping, simplification, and control optimisation", tag: "Controls" },
    { id: "05", title: "Transformation strategies and prioritised roadmaps", tag: "Execution" },
    { id: "06", title: "KPI, KRI, management-information, and performance frameworks", tag: "Metrics" },
    { id: "07", title: "Business planning, feasibility studies, and investment cases", tag: "Planning" },
    { id: "08", title: "Board and executive advisory on strategic risk and delivery", tag: "Advisory" },
  ];

  return (
    <div 
      ref={containerRef}
      className="w-full bg-[#080808] text-white font-sans selection:bg-[#FFC400] selection:text-[#080808] antialiased overflow-hidden"
    >
      
      {/* =========================================================================
          SECTION 1: DARK CINEMATIC HERO (MULTI-LAYER REAL SCROLL PARALLAX)
      ========================================================================= */}
      <section 
        ref={heroRef}
        className="relative min-h-[95vh] lg:min-h-screen bg-[#080808] flex flex-col justify-between pt-6 pb-12 px-6 sm:px-10 lg:px-14 border-b border-white/10 overflow-hidden"
      >
        
        {/* Layer 1: Parallax Technical Grid (moves slowly downward on scroll) */}
        <motion.div 
          style={{ y: gridY }}
          className="absolute inset-0 pointer-events-none opacity-15"
        >
          <div 
            className="w-full h-[140%] -top-[20%]"
            style={{
              backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </motion.div>

        {/* Ambient Asheron Gold & Purple Soft Spotlight */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-radial from-[#FFC400]/10 via-[#351779]/15 to-transparent blur-3xl pointer-events-none opacity-70" />

        {/* Layer 2: Parallax Floating Vector Crosshairs (faster drift) */}
        <motion.div 
          style={{ y: crosshairY }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-[1px] h-48 bg-[#FFC400]/40" />
          <div className="absolute top-2/3 right-1/4 w-48 h-[1px] bg-[#FFC400]/40" />
          <div className="absolute top-1/2 right-1/6 w-3 h-3 border border-[#FFC400]/50" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-[#FFC400]/70" />
        </motion.div>

        {/* Top Header / Meta Row (pr-16 sm:pr-20 prevents collision with global floating hamburger menu) */}
        <div className="relative z-20 flex items-center justify-between border-b border-white/10 pb-5 pr-14 sm:pr-20">
          {/* Left Brand Identity */}
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFC400] animate-pulse" />
            <span className="font-black tracking-[0.28em] text-sm sm:text-base uppercase text-white">
              ASHERON
            </span>
            <span className="hidden sm:inline text-xs text-white/40 tracking-[0.2em] uppercase pl-2 border-l border-white/15">
              ADVISORY & MANAGEMENT
            </span>
          </div>

          {/* Center Subtle Tag */}
          <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-white/50 uppercase">
            <span>BUILDING AN EXECUTABLE TOMORROW</span>
          </div>

          {/* Right Top Meta */}
          <div className="flex items-center gap-4 text-xs font-mono text-white/70">
            <span className="text-[#FFC400] font-bold">EN</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="hidden sm:inline">DUBAI · 7020003</span>
            <Link 
              href="/#contact"
              className="hidden sm:inline-flex px-4 py-1.5 rounded-full bg-white/10 hover:bg-[#FFC400] hover:text-[#080808] transition-all text-xs font-semibold tracking-wider uppercase"
            >
              Consult
            </Link>
          </div>
        </div>

        {/* Hero Main Body: Left Vertical Nav + Center Headline + Right Parallax Imagery */}
        <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center my-auto py-8">
          
          {/* Far Left Vertical Sub-Navigation (Matching Reference) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col gap-5 text-[11px] font-mono tracking-[0.2em] text-white/40 uppercase">
            <div className="flex items-center gap-2 text-white font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC400]" />
              <span>HOME</span>
            </div>
            <Link href="#solutions" className="hover:text-white transition-colors">SOLUTIONS</Link>
            <Link href="#framework" className="hover:text-white transition-colors">ROADMAP</Link>
            <Link href="#about" className="hover:text-white transition-colors">ABOUT</Link>
            <Link href="/contact" className="hover:text-white transition-colors">CONTACT</Link>
          </div>

          {/* Center-Left Content Area (Layer 3: Subtle Parallax Text with Scroll Fade) */}
          <motion.div 
            style={{ y: heroTextY, opacity: heroTextOpacity }}
            className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-8"
          >
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.28em] text-[#FFC400] uppercase mb-4">
              <span>LICENCE 7020003 · STRATEGY & MANAGEMENT</span>
            </div>

            {/* Oversized Uppercase Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-[80px] font-black uppercase tracking-tight leading-[0.95] text-white mb-8">
              STRATEGY<br />
              IDEAS<br />
              <span className="text-white/90">INTO AN EXECUTABLE</span><br />
              <span className="text-white">TOMORROW</span>
            </h1>

            {/* Approved Supporting Lead Paragraph */}
            <p className="text-sm sm:text-base text-white/70 max-w-lg leading-relaxed font-normal mb-10">
              We translate board ambition, growth mandates, and regulatory priorities into clear target operating models, robust governance, and deliverable roadmaps.
            </p>

            {/* Reference CTA Button with Vibrant Asheron Gold Circular Icon */}
            <div className="flex items-center gap-5">
              <Link
                href="/#contact"
                className="group flex items-center gap-4 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white hover:text-[#FFC400] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#FFC400] text-[#080808] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-[#FFC400]/25">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </div>
                <span>CONSULT OUR STRATEGY TEAM</span>
              </Link>

              <span className="hidden sm:inline text-xs font-mono text-white/30 tracking-widest pl-4 border-l border-white/15">
                01 / 04
              </span>
            </div>
          </motion.div>

          {/* Right Column: Layer 4 & 5 Architectural Graphic (Moves upward against scroll) */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <motion.div 
              style={{ y: heroImageY }}
              className="relative w-full aspect-square max-w-[480px] lg:max-w-[540px]"
            >
              
              {/* Layered Technical Ring & Gear / Architectural Structure Graphic */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-gradient-to-tr from-black via-[#141414] to-[#1C1C1C]">
                <motion.div 
                  style={{ scale: heroImageScale }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/practice_strategy.jpg"
                    alt="Asheron Strategy Architecture"
                    fill
                    className="object-cover object-center filter grayscale contrast-125 opacity-75"
                    priority
                  />
                </motion.div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                
                {/* Thin technical overlay lines (Styled in Asheron Gold) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#FFC400" strokeWidth="0.5" strokeDasharray="2,2" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#ffffff" strokeWidth="0.3" />
                  <line x1="20" y1="20" x2="80" y2="80" stroke="#FFC400" strokeWidth="0.6" />
                </svg>

                {/* Corner Technical Stamp */}
                <div className="absolute bottom-5 right-5 text-right font-mono text-[9px] tracking-[0.24em] text-white/60 uppercase">
                  <p className="text-[#FFC400] font-bold">PRECISION</p>
                  <p>CREATES PROGRESS</p>
                </div>
              </div>

              {/* Layer 5: Geometric Accent Floating Faster */}
              <motion.div 
                style={{ y: heroAccentY }}
                className="absolute -top-4 -right-4 w-10 h-10 border-t-2 border-r-2 border-[#FFC400] pointer-events-none z-10" 
              />
            </motion.div>
          </div>

        </div>

        {/* Hero Bottom Strip: Right Meta Tags */}
        <div className="relative z-20 hidden md:flex items-center justify-between pt-4 border-t border-white/10 text-[10px] font-mono tracking-[0.24em] text-white/50 uppercase">
          <div className="flex items-center gap-6">
            <span>OPERATING MODEL</span>
            <span>•</span>
            <span>GOVERNANCE</span>
            <span>•</span>
            <span>UAE & GCC</span>
          </div>
          <div>
            <span>IDEAS · STRUCTURES · IMPACT</span>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2: LIGHT EDITORIAL INTRODUCTION (IMAGE PARALLAX WITHIN CLIPPED CONTAINER)
      ========================================================================= */}
      <section 
        id="about" 
        ref={aboutRef}
        className="relative bg-[#F8F7F5] text-[#080808] py-20 lg:py-28 px-6 sm:px-10 lg:px-14 border-b border-[#E2E0DD] overflow-hidden"
      >
        
        {/* Top Eyebrow Tag */}
        <div className="text-xs font-mono font-bold tracking-[0.25em] text-[#6B6B6B] uppercase mb-12">
          [ ABOUT US ]
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Bold Asymmetric Typography */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] text-[#080808] mb-8">
                MORE<br />
                THAN<br />
                <span className="text-[#351779]">STRATEGY</span>
              </h2>

              <p className="text-sm sm:text-base text-[#080808]/75 leading-relaxed font-normal mb-8 max-w-sm">
                We combine operating-model discipline, regulatory fluency, and clear accountability structures to turn executive intent into scalable reality.
              </p>

              {/* Reference "Our approach ->" pill button */}
              <Link
                href="/approach"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-md border border-[#080808] text-xs font-bold tracking-[0.2em] uppercase text-[#080808] hover:bg-[#351779] hover:border-[#351779] hover:text-white transition-all"
              >
                <span>OUR APPROACH</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="mt-12 pt-6 border-t border-[#E2E0DD] text-[10px] font-mono tracking-[0.2em] text-[#6B6B6B] uppercase">
              EST. DUBAI, UAE
            </div>
          </div>

          {/* Center Column: Clipped Image Container with Real Scroll Parallax Inside */}
          <div className="lg:col-span-4 relative rounded-2xl overflow-hidden border border-[#E2E0DD] bg-[#EAE8E4] min-h-[420px] shadow-sm flex flex-col justify-between p-6">
            <div className="text-[10px] font-mono tracking-[0.25em] text-[#6B6B6B] uppercase relative z-10">
              PEOPLE · TECHNOLOGY · GOVERNANCE
            </div>

            {/* Clipped parallax image frame */}
            <div className="relative w-full h-[320px] my-auto overflow-hidden rounded-xl bg-neutral-200">
              <motion.div 
                style={{ y: aboutImageY }}
                className="relative w-full h-[125%] -top-[12%]"
              >
                <Image
                  src="/about_leadership.jpg"
                  alt="Asheron Strategy Leadership"
                  fill
                  className="object-cover object-top filter grayscale contrast-125"
                />
              </motion.div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono font-bold tracking-wider text-[#080808] relative z-10">
              <span>ASHERON ADVISORY</span>
              <span className="text-[#351779] font-bold">VOL. 01</span>
            </div>
          </div>

          {/* Right Column: Institutional Stats & Pillar Metrics with subtle parallax lift */}
          <motion.div 
            style={{ y: aboutStatsY }}
            className="lg:col-span-4 flex flex-col justify-between pl-0 lg:pl-6 divide-y divide-[#E2E0DD]"
          >
            <div className="pb-8">
              <div className="text-[10px] font-mono text-[#6B6B6B] text-right mb-2">[ 02 ]</div>
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-[#080808] mb-1">
                8+
              </div>
              <p className="text-xs sm:text-sm text-[#080808]/70 font-medium uppercase tracking-wider">
                CORE ADVISORY CAPABILITIES
              </p>
            </div>

            <div className="py-8">
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-[#080808] mb-1">
                4
              </div>
              <p className="text-xs sm:text-sm text-[#080808]/70 font-medium uppercase tracking-wider">
                LICENSED ADVISORY ACTIVITIES
              </p>
            </div>

            <div className="py-8">
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-[#080808] mb-1">
                100%
              </div>
              <p className="text-xs sm:text-sm text-[#080808]/70 font-medium uppercase tracking-wider">
                UAE & GCC JURISDICTIONAL FOCUS
              </p>
            </div>

            <div className="pt-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#080808]">
                  OPERATIONAL CONTROL
                </p>
                <p className="text-[11px] text-[#6B6B6B]">Measurable delivery outcomes</p>
              </div>
              {/* Equalizer metric graphic in brand Purple & Gold */}
              <div className="flex items-end gap-1.5 h-6">
                <span className="w-1.5 h-3 bg-[#351779] rounded-xs" />
                <span className="w-1.5 h-6 bg-[#FFC400] rounded-xs" />
                <span className="w-1.5 h-4 bg-[#351779] rounded-xs" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3: DARK SOLUTIONS / SERVICE PANELS (MATCHING REFERENCE ROW CARDS)
      ========================================================================= */}
      <section id="solutions" className="relative bg-[#080808] text-white py-24 lg:py-32 px-6 sm:px-10 lg:px-14 border-b border-white/10 overflow-hidden">
        
        {/* Section Header */}
        <div className="text-xs font-mono font-bold tracking-[0.25em] text-white/50 uppercase mb-4">
          [ OUR SOLUTIONS ]
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.02]">
              SOLUTIONS<br />
              FOR A COMPLEX<br />
              <span className="text-white/80">WORLD</span>
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between h-full pt-2">
            <p className="text-sm sm:text-base text-white/70 max-w-lg leading-relaxed mb-8">
              From operating-model diagnostics to full transformation implementation, we deliver structured solutions tailored to board objectives and regulatory realities.
            </p>
            
            <Link
              href="/services"
              className="group inline-flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-[#FFC400] transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFC400] text-[#080808] flex items-center justify-center transition-transform group-hover:scale-110">
                <ArrowRight className="w-4 h-4" />
              </div>
              <span>EXPLORE ALL SOLUTIONS</span>
            </Link>
          </div>
        </div>

        {/* 3 Featured Image Cards with inner hover parallax */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {solutions.map((item) => (
            <div
              key={item.num}
              className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#141414] hover:border-[#FFC400]/40 transition-all duration-300 flex flex-col justify-between p-6 min-h-[380px]"
            >
              {/* Clipped background image with smooth hover expansion */}
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover filter grayscale contrast-125 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>

              {/* Top Row Number in Brand Gold */}
              <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white/50">
                <span className="text-[#FFC400] font-bold">{item.num}</span>
                <span className="tracking-widest uppercase">{item.category}</span>
              </div>

              {/* Bottom Row Title & Circular Arrow Button */}
              <div className="relative z-10 pt-20">
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Minimal Circular Arrow */}
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:border-[#FFC400] group-hover:bg-[#FFC400] group-hover:text-[#080808] transition-all">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            BESPOKE EDITORIAL CAPABILITY DIRECTORY (HUMAN ART DIRECTION)
            Replaces generic AI cards with an architectural editorial index.
        ========================================================================= */}
        <div className="pt-20 sm:pt-28 border-t border-white/10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Dedicated Editorial Masthead */}
            <div className="lg:col-span-4 flex flex-col justify-between lg:sticky lg:top-28">
              <div>
                <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.28em] text-[#FFC400] uppercase mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC400]" />
                  <span>8 CORE CAPABILITIES</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold uppercase tracking-tight text-white leading-[1.1] mb-5">
                  FULL STRATEGY<br />
                  PRACTICE<br />
                  DIRECTORY
                </h3>

                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal max-w-sm mb-8">
                  A structured advisory mandate engineered for board accountability, regulatory compliance, and deliverable operational outcomes across the UAE & GCC.
                </p>
              </div>

              {/* Minimal Editorial Footnote */}
              <div className="hidden lg:flex items-center gap-4 pt-8 border-t border-white/10 text-[10px] font-mono text-white/40 tracking-[0.2em] uppercase">
                <span>LICENCE 7020003</span>
                <span>•</span>
                <span>INDEX 01–08</span>
              </div>
            </div>

            {/* Right Column: Editorial Multi-Column Numbered Index */}
            <div className="lg:col-span-8 divide-y divide-white/10 border-y border-white/10">
              {allEightServices.map((svc) => (
                <div
                  key={svc.id}
                  className="group py-6 sm:py-7 transition-colors duration-200"
                >
                  <div className="grid grid-cols-12 gap-4 items-baseline">
                    
                    {/* Small restrained number + category tag */}
                    <div className="col-span-4 sm:col-span-3 flex items-baseline gap-3">
                      <span className="font-mono text-xs sm:text-sm text-white/40 group-hover:text-[#FFC400] transition-colors duration-200 font-semibold tracking-wider">
                        {svc.id}
                      </span>
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white/45">
                        {svc.tag}
                      </span>
                    </div>

                    {/* Service Title */}
                    <div className="col-span-8 sm:col-span-9">
                      <p className="text-sm sm:text-base lg:text-[17px] font-medium text-white/90 group-hover:text-white transition-colors duration-200 leading-snug">
                        {svc.title}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 4: FEATURED ARCHITECTURAL PROJECT & SIGNATURE CTA
          (ASHERON BRAND PALETTE: DEEP PURPLE + GOLD CUTOUT)
      ========================================================================= */}
      <section 
        id="framework" 
        ref={featuredRef}
        className="relative bg-[#080808] text-white py-24 lg:py-32 px-6 sm:px-10 lg:px-14 border-b border-white/10 overflow-hidden"
      >
        
        {/* Top Eyebrow Tag */}
        <div className="flex items-center justify-between text-xs font-mono font-bold tracking-[0.25em] text-white/50 uppercase mb-8">
          <span>[ 03 ] · FEATURED CAPABILITY</span>
          <div className="hidden sm:flex items-center gap-4 text-white/30">
            <span>←</span>
            <span>→</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
          
          {/* Left Column: Monolithic Mountain with REAL SCROLL PARALLAX & Vector Overlay */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/15 bg-black aspect-[4/3] lg:aspect-auto lg:h-[460px] shadow-2xl">
            {/* Parallax Image Frame */}
            <motion.div 
              style={{ y: mountainImageY }}
              className="relative w-full h-[125%] -top-[12%]"
            >
              <Image
                src="/practice_ai.jpg"
                alt="Asheron Strategic Mountain Foundation"
                fill
                className="object-cover filter grayscale contrast-150 brightness-90"
              />
            </motion.div>

            {/* Dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
            
            {/* Gold & Subtle Purple Angular Perspective Grid Lines Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen"
              style={{
                backgroundImage: "linear-gradient(45deg, #FFC400 1px, transparent 1px), linear-gradient(-45deg, #FFC400 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            {/* Stamp Tag */}
            <div className="absolute top-6 left-6 font-mono text-[10px] tracking-[0.25em] text-white/80 uppercase">
              REAL ROADMAPS. REAL IMPACT.
            </div>

            <div className="absolute bottom-6 left-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
              <span className="font-mono text-xs text-white uppercase tracking-widest">
                TARGET OPERATING MODEL DESIGN
              </span>
            </div>
          </div>

          {/* Right Column: Narrative + Signature Diagonal Cut-Out CTA Block */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full relative">
            
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.02] mb-6">
                A STRONGER<br />
                FOUNDATION<br />
                <span className="text-white/80">FOR THE FUTURE</span>
              </h2>

              <p className="text-sm sm:text-base text-white/70 max-w-xl leading-relaxed mb-8">
                We partner with boards and executive leadership across the UAE to design next-generation operating infrastructure with a relentless focus on governance, regulatory alignment, and delivery assurance.
              </p>

              <Link
                href="/approach"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-md border border-white/20 text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all mb-12"
              >
                <span>EXPLORE THE APPROACH</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* The Signature Diagonal Cut-Out CTA Block in Asheron Signature Royal Purple & Gold */}
            <motion.div 
              style={{ y: diagonalCtaY, scale: diagonalCtaScale }}
              className="relative mt-8 sm:mt-0 flex justify-end"
            >
              <Link
                href="/#contact"
                className="group relative w-full sm:w-[320px] h-[160px] bg-[#351779] hover:bg-[#2B1263] text-white p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:scale-[1.02] border-t-2 border-r-2 border-[#FFC400]/40"
                style={{
                  clipPath: "polygon(28% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              >
                <div className="flex justify-between items-start pl-8 text-[#FFC400] font-mono text-xs">
                  <span className="tracking-widest font-bold">04</span>
                  <div className="w-8 h-8 rounded-full bg-[#FFC400] text-[#080808] flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="pl-6 font-black uppercase text-xl leading-tight tracking-tight text-white">
                  LET&apos;S BUILD<br />
                  <span className="text-[#FFC400]">WHAT&apos;S</span><br />
                  NEXT →
                </div>
              </Link>
            </motion.div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5: UAE & GCC REGIONAL STRATEGIC FOCUS (EDITORIAL COMPOSITION)
      ========================================================================= */}
      <section className="relative bg-[#0D0D0D] text-white py-20 px-6 sm:px-10 lg:px-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono text-[#FFC400] tracking-[0.24em] uppercase block mb-3 font-semibold">
              [ REGIONAL JURISDICTION ]
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-4">
              TAILORED TO UAE & GCC CONDITIONS
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              Support is structured around federal and freezone supervisory standards, growth diversification mandates, and digital transformation initiatives across Dubai, Abu Dhabi, and the wider Emirates.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#FFC400]/40 transition-colors">
              <div className="text-xs font-mono text-[#FFC400] mb-2 font-bold">01</div>
              <h4 className="text-sm font-bold uppercase text-white mb-1">Regulated Businesses</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Governance, decision rights, and accountability frameworks tailored to regional regulatory requirements.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#FFC400]/40 transition-colors">
              <div className="text-xs font-mono text-[#FFC400] mb-2 font-bold">02</div>
              <h4 className="text-sm font-bold uppercase text-white mb-1">Public & Private Models</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Balancing commercial execution velocity with public-sector committee transparency and audit rigour.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#FFC400]/40 transition-colors">
              <div className="text-xs font-mono text-[#FFC400] mb-2 font-bold">03</div>
              <h4 className="text-sm font-bold uppercase text-white mb-1">Diversification Roadmaps</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Translating national economic initiatives into deliverable business-unit roadmaps and operating capabilities.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#FFC400]/40 transition-colors">
              <div className="text-xs font-mono text-[#FFC400] mb-2 font-bold">04</div>
              <h4 className="text-sm font-bold uppercase text-white mb-1">GCC Expansion</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Multi-jurisdiction operating architectures for seamless scaling between the UAE and Saudi Arabia.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
