"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue, 
  useReducedMotion 
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * ASHERON PROJECTS ADVISORY — EXPERIMENTAL MINIMALISM + 3D SCROLL EXPERIENCE
 * 
 * Official Asheron Brand Design System Alignment:
 * - Canvas Background: #F8F7F5
 * - Primary Ink: #080808
 * - Technical Borders & Dividers: #E2E0DD
 * - Brand Primary Gold: #FFC400 (Hover: #E6B000)
 * - Brand Corporate Purple: #351779 (Hover: #2B1263)
 * - Muted Annotations: #6B6B6B / #B5B5B5
 * - Dark Accent Section: #080808 / #0D0D0C
 * 
 * Features an Interactive Digital Design Poster with a Transforming
 * 3D "Programme Assembly Object", Asymmetrical 9-Capability Sequence,
 * Beautifully Spaced Multi-Node Systems Diagram, and UAE Delivery Alignment.
 */

const deliverySystemSequence = [
  {
    num: "01",
    tag: "FEASIBILITY",
    title: "OPPORTUNITY ASSESSMENT",
    desc: "Feasibility studies, investment logic, and business cases structured for executive conviction.",
    offset: "lg:ml-0 lg:max-w-xl",
  },
  {
    num: "02",
    tag: "DEFINITION",
    title: "PROJECT DEFINITION",
    desc: "Charters, scope boundaries, requirement taxonomies, and benefits realisation roadmaps.",
    offset: "lg:ml-36 lg:max-w-lg",
  },
  {
    num: "03",
    tag: "STRUCTURE",
    title: "PMO ESTABLISHMENT",
    desc: "Governance structures, stage-gate controls, delivery rhythms, and transparent executive reporting.",
    offset: "lg:ml-auto lg:max-w-xl",
  },
  {
    num: "04",
    tag: "MOBILISATION",
    title: "PROGRAMME MOBILISATION",
    desc: "Critical-path roadmaps, integrated dependency schedules, and resource mobilisation architectures.",
    offset: "lg:ml-12 lg:max-w-lg",
  },
  {
    num: "05",
    tag: "CONTROL",
    title: "GOVERNANCE & ASSURANCE",
    desc: "Stage gates, steering committees, fiduciary risk assessments, and executive escalation protocols.",
    offset: "lg:ml-48 lg:max-w-xl",
  },
  {
    num: "06",
    tag: "PARTNERSHIPS",
    title: "VENDOR OVERSIGHT",
    desc: "Procurement evaluation, contract due diligence, SLA verification, and implementation oversight.",
    offset: "lg:ml-auto lg:mr-12 lg:max-w-lg",
  },
  {
    num: "07",
    tag: "HEALTH CHECK",
    title: "PROJECT ASSURANCE",
    desc: "Independent delivery reviews, risk auditing, schedule contingency testing, and forensic health checks.",
    offset: "lg:ml-4 lg:max-w-xl",
  },
  {
    num: "08",
    tag: "TURNAROUND",
    title: "PROGRAMME RECOVERY",
    desc: "Recovery planning, re-baselining, and restructuring for delayed or underperforming programmes.",
    offset: "lg:ml-32 lg:max-w-lg",
  },
  {
    num: "09",
    tag: "OUTCOMES",
    title: "BENEFITS REALISATION",
    desc: "Post-implementation reviews, operational handover assurance, and long-term value verification.",
    offset: "lg:ml-auto lg:max-w-xl",
  },
];

export function ProjectsCinematicExperience() {
  const prefersReducedMotion = useReducedMotion();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // 1. Root & Hero Scroll Tracking
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothHero = useSpring(heroScroll, { stiffness: 90, damping: 28, restDelta: 0.001 });

  // 3D Programme Assembly Object Transforms across scroll
  const objectRotateX = useTransform(smoothHero, [0, 1], [15, prefersReducedMotion ? 15 : 45]);
  const objectRotateY = useTransform(smoothHero, [0, 1], [-25, prefersReducedMotion ? -25 : 30]);
  const objectRotateZ = useTransform(smoothHero, [0, 1], [0, prefersReducedMotion ? 0 : 20]);
  const objectScale = useTransform(smoothHero, [0, 0.5, 1], [1, prefersReducedMotion ? 1 : 1.15, prefersReducedMotion ? 1 : 0.88]);
  const objectY = useTransform(smoothHero, [0, 1], ["0px", prefersReducedMotion ? "0px" : "160px"]);

  // Plate separation physics
  const plateSpread = useTransform(smoothHero, [0, 1], [0, prefersReducedMotion ? 0 : 50]);
  const goldBlockZ = useTransform(smoothHero, [0, 1], [30, prefersReducedMotion ? 30 : 90]);

  // Pointer interaction tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const pointerTiltX = useTransform(smoothMouseY, [-0.5, 0.5], [8, -8]);
  const pointerTiltY = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);

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

  // 2. Section 3 (System Complexity) Scroll Tracking
  const complexityRef = useRef<HTMLElement>(null);
  const { scrollYProgress: complexityScroll } = useScroll({
    target: complexityRef,
    offset: ["start end", "end start"],
  });
  const smoothComplexity = useSpring(complexityScroll, { stiffness: 85, damping: 26 });
  const networkOpacity = useTransform(smoothComplexity, [0, 0.3, 0.8, 1], [0.3, 1, 1, 0.4]);

  // 3. Section 5 (Closing CTA) Scroll Tracking
  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress: ctaScroll } = useScroll({
    target: ctaRef,
    offset: ["start end", "end end"],
  });
  const smoothCta = useSpring(ctaScroll, { stiffness: 90, damping: 28 });
  const ctaLineScale = useTransform(smoothCta, [0, 0.6], [0, 1]);
  const ctaRevealY = useTransform(smoothCta, [0, 0.7], ["40px", "0px"]);

  return (
    <div 
      ref={containerRef}
      className="w-full bg-[#F8F7F5] text-[#080808] font-sans selection:bg-[#FFC400] selection:text-[#080808] antialiased overflow-hidden"
    >
      
      {/* =========================================================================
          SECTION 1: HERO — EXTREME NEGATIVE SPACE POSTER COMPOSITION (/01)
      ========================================================================= */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-[96vh] lg:min-h-screen bg-[#F8F7F5] flex flex-col justify-between pt-6 pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden border-b border-[#E2E0DD]"
      >
        
        {/* Subtle Fine Grid Lines (Swiss Precision) */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-35"
          style={{
            backgroundImage: "linear-gradient(to right, #E2E0DD 1px, transparent 1px), linear-gradient(to bottom, #E2E0DD 1px, transparent 1px)",
            backgroundSize: "96px 96px",
          }}
        />

        {/* Ambient Warm Glow */}
        {/* Ambient Warm Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-radial from-[#FFC400]/10 via-[#351779]/08 to-transparent blur-3xl pointer-events-none opacity-70" />

        <div className="absolute top-8 right-24 text-xs font-mono tracking-widest text-[#351779] font-bold uppercase pointer-events-none hidden sm:block">
          LICENCE 7020020
        </div>

        {/* Lightweight Editorial Header Baseline (pr-16 prevents overlap with global circular menu) */}
        <div className="relative z-20 flex items-center justify-between border-b border-[#E2E0DD] pb-4 pr-16 sm:pr-20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFC400] animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-[0.3em] text-[#080808] uppercase">
              ASHERON
            </span>
            <span className="text-[10px] font-mono text-[#080808]/50 tracking-[0.2em] uppercase pl-2 border-l border-[#E2E0DD] hidden sm:inline">
              PROJECTS / DELIVERY SYSTEMS
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#080808]/50 uppercase hidden md:inline">
              PMO · ASSURANCE · RECOVERY
            </span>
            <span className="text-[#E2E0DD] hidden md:inline">|</span>
            <Link
              href="/#contact"
              className="px-3.5 py-1 rounded-xs border border-[#080808] text-[10px] font-mono font-bold tracking-widest uppercase hover:bg-[#351779] hover:border-[#351779] hover:text-white transition-all"
            >
              Consult ↗
            </Link>
          </div>
        </div>

        {/* Asymmetrical Poster Field: Sparse Typography + Floating Programme Assembly Object */}
        <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-10">
          
          {/* Left / Center-Left: Asymmetric Typography & Poster Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Section Index Marker */}
            <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.3em] text-[#351779] uppercase mb-6">
              <span>/01</span>
              <span className="w-12 h-[1px] bg-[#351779]" />
              <span className="text-[#080808]/70">PROJECTS / DELIVERY SYSTEMS</span>
            </div>

            {/* Heavy Condensed Monumental Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-[80px] font-black uppercase tracking-tight leading-[0.9] text-[#080808] mb-6">
              FROM COMPLEXITY<br />
              <span className="text-[#351779]">TO DELIVERY.</span>
            </h1>

            {/* Supporting Description in Controlled Negative Space */}
            <p className="text-sm sm:text-base text-[#080808]/75 max-w-md leading-relaxed font-normal mb-8">
              Asheron helps clients move from an initial concept or business case to a governed, investable, and deliverable programme, providing independent structure and challenge across the project lifecycle.
            </p>

            {/* Compact Integrated CTA */}
            <div className="flex items-center gap-4">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 px-5 py-2.5 bg-[#351779] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xs hover:bg-[#2B1263] transition-all duration-300 shadow-sm"
              >
                <span>CONSULT OUR PROJECTS TEAM</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FFC400] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <span className="text-[10px] font-mono text-[#080808]/50 tracking-widest uppercase hidden sm:inline">
                DUBAI, UAE
              </span>
            </div>

            {/* Central Graphic Identifiers (00 01 1A) */}
            <div className="flex items-baseline gap-8 sm:gap-14 pt-12 mt-6 border-t border-[#E2E0DD] font-mono font-light select-none">
              <span className="text-2xl sm:text-4xl font-black tracking-widest text-[#080808]">00</span>
              <span className="text-2xl sm:text-4xl font-black tracking-widest text-[#351779]">01</span>
              <span className="text-2xl sm:text-4xl font-black tracking-widest text-[#FFC400]">1A</span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#080808]/50 ml-auto font-mono">
                PROGRAMME TAXONOMY
              </span>
            </div>

          </div>

          {/* Right: Abstract 3D Programme Assembly Object (Transforming Geometry in Asheron Palette) */}
          <div className="lg:col-span-5 relative flex items-center justify-center select-none py-6">
            <motion.div
              style={{
                y: objectY,
                scale: objectScale,
                rotateX: pointerTiltX,
                rotateY: pointerTiltY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-72 sm:w-88 md:w-96 aspect-square flex items-center justify-center perspective-[1200px]"
            >
              
              {/* Outer Coordinate Wireframe Halo */}
              <motion.div 
                style={{ rotateZ: objectRotateZ }}
                className="absolute inset-0 rounded-xs border border-[#080808]/15 pointer-events-none" 
              />
              <div className="absolute inset-6 rounded-xs border border-dashed border-[#351779]/30 pointer-events-none" />

              {/* Suspended Layer 1: Bottom Dark Structural Plate */}
              <motion.div
                style={{
                  rotateX: objectRotateX,
                  rotateY: objectRotateY,
                  z: -30,
                  y: plateSpread,
                }}
                className="absolute w-56 h-56 rounded-xs bg-[#080808] border border-white/20 shadow-2xl p-4 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start text-[10px] font-mono text-white/70 tracking-widest uppercase">
                  <span>STAGE GATE 01</span>
                  <span className="text-[#FFC400] font-bold">LOCKED</span>
                </div>
                {/* Internal Wireframe Grids */}
                <div 
                  className="w-full h-24 opacity-25 pointer-events-none"
                  style={{
                    backgroundImage: "linear-gradient(to right, #351779 1px, transparent 1px), linear-gradient(to bottom, #351779 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />
                <span className="text-[10px] font-mono text-white/70 tracking-wider uppercase">PROGRAMME GOVERNANCE</span>
              </motion.div>

              {/* Suspended Layer 2: Middle Translucent Glass Plate */}
              <motion.div
                style={{
                  rotateX: objectRotateX,
                  rotateY: objectRotateY,
                  z: 0,
                }}
                className="absolute w-48 h-48 rounded-xs bg-white/80 backdrop-blur-md border border-[#E2E0DD] shadow-lg p-3 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start text-[10px] font-mono text-[#080808]/80 tracking-widest uppercase">
                  <span>CONTROLS</span>
                  <span className="text-[#351779] font-bold">VERIFIED</span>
                </div>
                {/* Intersecting Diagonal Rod Line */}
                <div className="w-full h-[1px] bg-[#080808]/30 -rotate-45 my-auto" />
                <span className="text-[10px] font-mono text-[#080808]/70 tracking-wider uppercase">RISK MITIGATION</span>
              </motion.div>

              {/* Suspended Layer 3: The Primary Gold Block (The Signature Visual Anchor) */}
              <motion.div
                style={{
                  rotateX: objectRotateX,
                  rotateY: objectRotateY,
                  z: goldBlockZ,
                }}
                className="absolute w-24 h-24 bg-[#FFC400] text-[#080808] border border-[#080808] shadow-2xl p-2.5 flex flex-col justify-between z-30"
              >
                <div className="flex justify-between items-start">
                  <span className="w-2 h-2 rounded-full bg-[#080808]" />
                  <span className="font-mono text-[10px] font-black tracking-widest">ASHERON</span>
                </div>
                <div className="font-mono text-[11px] font-black uppercase leading-tight tracking-tight">
                  ACTIVE<br />
                  DELIVERY
                </div>
              </motion.div>

              {/* Suspended Layer 4: Floating Corporate Purple Measurement Cube */}
              <motion.div
                style={{
                  rotateX: objectRotateX,
                  rotateY: objectRotateY,
                  z: 60,
                }}
                className="absolute -top-4 -right-2 w-16 h-16 bg-[#351779] text-white border border-[#080808] shadow-xl p-2 flex flex-col justify-between z-30"
              >
                <span className="font-mono text-[10px] tracking-widest text-[#FFC400] font-bold">PMO</span>
                <span className="font-mono text-[9px] tracking-wider uppercase leading-none font-bold">ASSURED</span>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Hero Bottom Strip: Minimal Baseline Rule */}
        <div className="relative z-20 flex items-center justify-between pt-4 border-t border-[#E2E0DD] text-[9px] font-mono tracking-[0.24em] text-[#080808]/50 uppercase">
          <div className="flex items-center gap-6">
            <span>FEASIBILITY</span>
            <span>•</span>
            <span>PMO SETUP</span>
            <span>•</span>
            <span>FIDUCIARY ASSURANCE</span>
          </div>
          <div>
            <span>AUTONOMOUS DELIVERY ARCHITECTURE</span>
          </div>
        </div>

      </section>


      {/* =========================================================================
          SECTION 2: THE DELIVERY SYSTEM — ASYMMETRIC TYPOGRAPHIC SEQUENCE (/02)
      ========================================================================= */}
      <section id="system" className="relative bg-[#F8F7F5] py-28 lg:py-36 px-6 sm:px-10 lg:px-16 border-b border-[#E2E0DD]">
        
        {/* Section Header */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.3em] text-[#351779] uppercase mb-4">
            <span>/02</span>
            <span className="w-12 h-[1px] bg-[#351779]" />
            <span className="text-[#080808]/70">CAPABILITY SEQUENCE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#080808] leading-[0.94]">
                THE DELIVERY<br />
                SYSTEM
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-[#080808]/75 leading-relaxed font-normal">
                We bring delivery discipline and rigorous governance to complex programmes, ensuring they achieve their intended outcomes through structured accountability.
              </p>
            </div>
          </div>
        </div>

        {/* Central Vertical Spine / Subtle Architectural Progress Rail */}
        <div className="max-w-6xl mx-auto relative">
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#351779] via-[#FFC400]/50 to-transparent pointer-events-none opacity-20" />

          {/* Asymmetrical Typographic Stations (Scroll-linked staggered motion) */}
          <div className="space-y-12 sm:space-y-16">
            {deliverySystemSequence.map((svc, idx) => {
              const isHovered = hoveredIdx === idx;

              return (
                <motion.div
                  key={svc.num}
                  initial={{ opacity: 0, y: 35, x: idx % 2 === 0 ? -15 : 15 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ 
                    duration: 0.65, 
                    delay: (idx % 3) * 0.1, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`relative transition-all duration-300 ${svc.offset}`}
                >
                  {/* Hairline Divider with Expanding Brand Purple & Gold Highlight */}
                  <div className="relative w-full h-[1px] bg-[#E2E0DD] mb-5 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-[#351779]"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: (idx % 3) * 0.12 }}
                    />
                    <div 
                      className={`absolute inset-0 bg-gradient-to-r from-[#351779] via-[#FFC400] to-[#351779] transition-opacity duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`} 
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 group">
                    
                    {/* Translucent Oversized Section Number + Tag */}
                    <div className="flex items-baseline gap-3 shrink-0">
                      <span 
                        className={`font-mono text-2xl sm:text-4xl font-black tracking-tight transition-all duration-300 ${
                          isHovered ? "text-[#351779] translate-x-1" : "text-[#080808]/30"
                        }`}
                      >
                        {svc.num}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#351779] font-bold">
                        {svc.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="flex-1 sm:pl-8">
                      <h3 
                        className={`text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight transition-colors duration-200 mb-2.5 ${
                          isHovered ? "text-[#351779]" : "text-[#080808]"
                        }`}
                      >
                        {svc.title}
                      </h3>
                      <p className="text-sm text-[#080808]/75 leading-relaxed font-normal max-w-xl">
                        {svc.desc}
                      </p>
                    </div>

                    {/* Primary Gold Interactive Anchor */}
                    <div className="hidden sm:flex items-center justify-end pl-4">
                      <span 
                        className={`w-2.5 h-2.5 rounded-xs border border-[#080808] transition-all duration-300 ${
                          isHovered ? "bg-[#FFC400] scale-150 rotate-45 border-[#351779]" : "bg-transparent opacity-25"
                        }`}
                      />
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </section>


      {/* =========================================================================
          SECTION 3: SYSTEM COMPLEXITY — MULTI-NODE GENERATIVE SYSTEMS DIAGRAM (/03)
          (High-end architectural diagram in Asheron Gold & Corporate Purple)
      ========================================================================= */}
      <section 
        id="complexity" 
        ref={complexityRef}
        className="relative bg-[#080808] text-white py-28 lg:py-36 px-6 sm:px-10 lg:px-16 border-b border-white/10 overflow-hidden"
      >
        
        {/* Subtle Background Coordinate Dot Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-6xl mx-auto">
          
          {/* Section Marker */}
          <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.3em] text-[#FFC400] uppercase mb-12">
            <span>/03 — SYSTEM COMPLEXITY</span>
            <span className="w-12 h-[1px] bg-[#FFC400]" />
            <span className="text-white/50">SYSTEMS GEOMETRY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-[0.95] mb-8">
                EVERY DELIVERY<br />
                HAS A<br />
                <span className="text-[#351779] bg-[#FFC400] px-2 inline-block">STRUCTURE.</span>
              </h2>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light mb-8 max-w-md">
                Complex programmes need more than plans. They need clear accountability, informed challenge, and a delivery structure that holds together under pressure.
              </p>

              {/* 4 Systems Annotations */}
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/15 font-mono text-xs">
                <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xs">
                  <span className="text-[#FFC400] text-[9px] block mb-1">01 / NODE</span>
                  <span className="text-white font-bold tracking-wider">GOVERNANCE</span>
                </div>
                <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xs">
                  <span className="text-[#351779] text-[9px] block mb-1 font-bold text-white">02 / NODE</span>
                  <span className="text-white font-bold tracking-wider">DEPENDENCIES</span>
                </div>
                <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xs">
                  <span className="text-white/60 text-[9px] block mb-1">03 / NODE</span>
                  <span className="text-white font-bold tracking-wider">ASSURANCE</span>
                </div>
                <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xs">
                  <span className="text-[#FFC400] text-[9px] block mb-1">04 / NODE</span>
                  <span className="text-white font-bold tracking-wider">RECOVERY</span>
                </div>
              </div>
            </div>

            {/* Right: Architectural Delivery Governance Matrix */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              <div 
                className="w-full max-w-[540px] border border-white/15 bg-[#121212] rounded-xs p-6 sm:p-8 shadow-2xl space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFC400]" />
                    <span className="font-mono text-xs font-bold tracking-widest text-white uppercase">
                      DELIVERY GOVERNANCE ARCHITECTURE
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#FFC400]">
                    GATEWAY PMO
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xs flex items-center justify-between">
                    <div>
                      <span className="text-[#FFC400] text-[10px] block mb-0.5 font-bold">STAGE 01</span>
                      <span className="text-white font-medium text-sm">INCEPTION & BUSINESS CASE</span>
                    </div>
                    <span className="px-2.5 py-1 bg-[#351779] text-white text-[11px] font-bold rounded-xs">
                      LOCKED
                    </span>
                  </div>

                  <div className="p-4 bg-white/[0.04] border border-[#FFC400]/40 rounded-xs flex items-center justify-between">
                    <div>
                      <span className="text-[#FFC400] text-[10px] block mb-0.5 font-bold">STAGE 02</span>
                      <span className="text-white font-medium text-sm">PMO CONTROLS & ASSURANCE</span>
                    </div>
                    <span className="px-2.5 py-1 bg-[#FFC400] text-[#080808] text-[11px] font-bold rounded-xs">
                      ACTIVE
                    </span>
                  </div>

                  <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xs flex items-center justify-between">
                    <div>
                      <span className="text-white/50 text-[10px] block mb-0.5 font-bold">STAGE 03</span>
                      <span className="text-white font-medium text-sm">BENEFITS REALISATION</span>
                    </div>
                    <span className="px-2.5 py-1 bg-white/10 text-white/70 text-[11px] font-bold rounded-xs">
                      GOVERNED
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                  <span>FIDUCIARY ASSURANCE</span>
                  <span className="text-[#FFC400] font-bold">0% UNGOVERNED EXPOSURE</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================================
          SECTION 4: UAE CONTEXT — MINIMAL GEOGRAPHIC MARKER (/04)
      ========================================================================= */}
      <section className="relative bg-[#F8F7F5] py-20 lg:py-28 px-6 sm:px-10 lg:px-16 border-b border-[#E2E0DD]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5">
            <span className="text-[10px] font-mono text-[#351779] tracking-[0.28em] uppercase block mb-3 font-bold">
              REGIONAL CONTEXT / UAE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#080808] mb-4">
              JURISDICTIONAL DELIVERY ASSURANCE
            </h3>
            <p className="text-xs sm:text-sm text-[#080808]/70 leading-relaxed font-normal">
              Suited to transformation initiatives, digital and AI programmes, regulated-business change, capability-building programmes, operational improvement, and strategic growth projects across the UAE.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center gap-6 p-6 rounded-xs border border-[#E2E0DD] bg-white shadow-xs">
            <div className="w-12 h-12 rounded-xs bg-[#FFC400] border border-[#080808] flex items-center justify-center shrink-0">
              <span className="font-mono text-xs font-black text-[#080808]">UAE</span>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#080808]">
                DUBAI & ABU DHABI GOVERNANCE ALIGNMENT
              </p>
              <p className="text-xs text-[#080808]/60 leading-relaxed font-mono">
                Stage-gate criteria calibrated to regional supervisory frameworks, ministry mandates, and GCC multi-entity expansion.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5: CLOSING — A QUIET FINAL FRAME (/05)
      ========================================================================= */}
      <section 
        id="cta"
        ref={ctaRef}
        className="relative bg-[#F8F7F5] py-28 lg:py-36 px-6 sm:px-10 lg:px-16 overflow-hidden"
      >
        {/* Fine Animated Corporate Purple Baseline Rule */}
        <motion.div
          style={{ scaleX: ctaLineScale, originX: 0 }}
          className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#351779]"
        />

        <div className="max-w-4xl mx-auto flex flex-col items-start">
          
          {/* Section Marker */}
          <div className="inline-flex items-center gap-3 text-xs font-mono font-bold tracking-[0.3em] text-[#351779] uppercase mb-8">
            <span>/05</span>
            <span className="w-10 h-[1px] bg-[#351779]" />
            <span className="text-[#080808]/70">ENGAGEMENT CADENCE</span>
          </div>

          {/* Sparse Monumental Headline */}
          <motion.div
            style={{ y: ctaRevealY }}
            className="overflow-hidden mb-6"
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.92] text-[#080808]">
              MAKE DELIVERY<br />
              <span className="text-[#351779]">REAL.</span>
            </h2>
          </motion.div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#080808]/75 font-normal max-w-lg mb-10 leading-relaxed">
            Bring structure, assurance, and accountability to your next programme.
          </p>

          {/* Compact CTA with Primary Gold Geometric Accent */}
          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#351779] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xs hover:bg-[#2B1263] transition-all duration-300 shadow-lg"
            >
              <span>DISCUSS A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 text-[#FFC400] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Isolated Primary Gold Square Accent */}
            <div className="w-4 h-4 bg-[#FFC400] border border-[#080808]" />
          </div>

          {/* Minimal Footnote Verification */}
          <div className="mt-16 pt-6 border-t border-[#E2E0DD] w-full flex items-center justify-between text-[9px] font-mono tracking-[0.22em] text-[#080808]/45 uppercase">
            <span>DUBAI, UAE</span>
            <span>•</span>
            <span>LICENCE 7020020</span>
            <span>•</span>
            <span>ASHERON ADVISORY</span>
          </div>

        </div>
      </section>

    </div>
  );
}
