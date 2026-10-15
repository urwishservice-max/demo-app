"use client"

import React, { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

/**
 * ASHERON — WHAT WE BELIEVE (MINIMALIST EDITORIAL ASYMMETRIC REDESIGN)
 * 
 * Strict Brand Guidelines & Visual System (Matching Industries/Approach editorial rhythm):
 * - Canvas Background: #F8F7F5 (Warm Editorial Bone)
 * - Deep Inks: #080808 (Carbon Noir)
 * - Hairline Dividers: #E2E0DD
 * - Brand Primary Gold: #FFC400
 * - Brand Corporate Purple: #351779 (Hover: #2B1263)
 * - Clean, open background: NO visible grid lines, NO graph-paper, NO blueprint pattern
 * 
 * Editorial Asymmetric Rhythm across 4 Beliefs:
 * - Belief 01 (Realism): Large statement on the left, architectural photograph on the right
 * - Belief 02 (Duality): Photograph offset to the left, statement & elaboration on the right
 * - Belief 03 (Transfer): Wide oversized headline with image offset below
 * - Belief 04 (Integrity): Full-width horizontal corporate purple (#351779) highlight strip with gold accents
 */

interface BeliefItem {
  id: string
  number: string
  tag: string
  statement: string
  elaboration: string
  image: string
  imageAlt: string
  accent: string
}

const beliefs: BeliefItem[] = [
  {
    id: "01",
    number: "01",
    tag: "REALISM",
    statement: "Advice is only valuable if it can be implemented within the client's real constraints.",
    elaboration: "We size operating models and governance to real operational realities, not theoretical ideals.",
    image: "/about_canopy.jpg",
    imageAlt: "Architectural structure with bold geometry",
    accent: "PRACTICAL GOVERNANCE",
  },
  {
    id: "02",
    number: "02",
    tag: "DUALITY",
    statement: "Innovation and control are not opposites; the strongest organisations design both at once.",
    elaboration: "Speed without governance creates vulnerability; governance without speed breeds obsolescence.",
    image: "/practice_ai.jpg",
    imageAlt: "3D architectural spiral cone with yellow and graphite ridges",
    accent: "VELOCITY & ASSURANCE",
  },
  {
    id: "03",
    number: "03",
    tag: "TRANSFER",
    statement: "Capability must transfer to the client team, not remain with the adviser.",
    elaboration: "We build self-sustaining competence within leadership and operations so progress continues after handoff.",
    image: "/about_leadership.jpg",
    imageAlt: "Curving concrete architectural hall with sweeping light",
    accent: "TALENT ADOPTION",
  },
  {
    id: "04",
    number: "04",
    tag: "INTEGRITY",
    statement: "Independence and discretion are conditions of the work, not features of it.",
    elaboration: "We provide clear, unvarnished guidance protected by rigorous confidentiality and fiduciary clarity.",
    image: "/about_hero_burj.jpg",
    imageAlt: "Curved architectural sculpture with inner glow",
    accent: "FIDUCIARY INDEPENDENCE",
  },
]

export function WhatWeBelieve() {
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section 
      ref={sectionRef} 
      className="relative z-10 px-6 sm:px-10 lg:px-16 py-20 sm:py-28 bg-[#F8F7F5] border-b border-[#E2E0DD] text-[#080808]"
    >
      <div className="max-w-7xl mx-auto space-y-20 sm:space-y-28">

        {/* Section Header Strip */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E2E0DD] text-xs font-mono text-[#080808]/60">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#351779]">02</span>
            <span className="text-[#080808]/30">/</span>
            <span className="font-bold tracking-[0.25em] text-[#080808] uppercase">
              CORE PHILOSOPHY · 04 BELIEFS
            </span>
          </div>
          <span className="tracking-widest hidden sm:inline text-[#351779] font-bold uppercase">
            WHAT WE BELIEVE
          </span>
        </div>

        {/* Section Title & Philosophy Overview */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#080808] leading-[0.96] mb-6">
            WHAT WE<br />
            <span className="text-[#351779] bg-[#FFC400] px-2.5 inline-block">BELIEVE.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#080808]/75 leading-relaxed font-normal">
            Advice is tested not by its elegance on paper, but by its endurance in execution. These four convictions govern every recommendation, governance framework, and roadmap we design.
          </p>
        </div>

        {/* =====================================================================
            BELIEF 01: REALISM
            Rhythm: Large statement on left, photograph on right
        ===================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-[#E2E0DD] pb-16 sm:pb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5 font-mono text-xs">
                  <span className="font-bold text-3xl sm:text-5xl text-[#351779]">01</span>
                  <span className="w-10 h-[1px] bg-[#E2E0DD]" />
                  <span className="font-bold tracking-widest text-[#080808]/60 uppercase">{beliefs[0].tag}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#080808] leading-tight mb-6">
                  {beliefs[0].statement}
                </h3>

                <p className="text-base sm:text-lg text-[#080808]/75 leading-relaxed max-w-xl font-normal mb-8">
                  {beliefs[0].elaboration}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E0DD] flex items-center justify-between text-xs font-mono max-w-xl">
                <span className="text-[#080808]/50 uppercase tracking-wider">{beliefs[0].accent}</span>
                <Link href="/contact" className="inline-flex items-center gap-1.5 font-bold uppercase text-[#080808] hover:text-[#351779] transition-colors">
                  <span>DISCUSS PRIORITIES</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FFC400]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="group relative w-full aspect-[4/3] overflow-hidden border border-[#E2E0DD] bg-[#080808] rounded-xs shadow-xs">
                <Image
                  src={beliefs[0].image}
                  alt={beliefs[0].imageAlt}
                  fill
                  className="object-cover filter grayscale contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 bg-black/60 backdrop-blur-xs font-mono text-[9px] text-white tracking-widest uppercase">
                  PHILOSOPHY // 01 · REALISM
                </div>
              </div>
            </div>

          </div>
        </motion.div>


        {/* =====================================================================
            BELIEF 02: DUALITY
            Rhythm: Photograph offset to left, statement and elaboration on right
        ===================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-[#E2E0DD] pb-16 sm:pb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="group relative w-full aspect-[4/3] overflow-hidden border border-[#E2E0DD] bg-[#080808] rounded-xs shadow-xs">
                <Image
                  src={beliefs[1].image}
                  alt={beliefs[1].imageAlt}
                  fill
                  className="object-cover filter grayscale contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 bg-black/60 backdrop-blur-xs font-mono text-[9px] text-white tracking-widest uppercase">
                  PHILOSOPHY // 02 · DUALITY
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5 font-mono text-xs">
                  <span className="font-bold text-3xl sm:text-5xl text-[#351779]">02</span>
                  <span className="w-10 h-[1px] bg-[#E2E0DD]" />
                  <span className="font-bold tracking-widest text-[#080808]/60 uppercase">{beliefs[1].tag}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#080808] leading-tight mb-6">
                  {beliefs[1].statement}
                </h3>

                <p className="text-base sm:text-lg text-[#080808]/75 leading-relaxed max-w-xl font-normal mb-8">
                  {beliefs[1].elaboration}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E0DD] flex items-center justify-between text-xs font-mono max-w-xl">
                <span className="text-[#080808]/50 uppercase tracking-wider">{beliefs[1].accent}</span>
                <Link href="/contact" className="inline-flex items-center gap-1.5 font-bold uppercase text-[#080808] hover:text-[#351779] transition-colors">
                  <span>DISCUSS PRIORITIES</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FFC400]" />
                </Link>
              </div>
            </div>

          </div>
        </motion.div>


        {/* =====================================================================
            BELIEF 03: TRANSFER
            Rhythm: Oversized headline with image offset below
        ===================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-[#E2E0DD] pb-16 sm:pb-24"
        >
          <div>
            <div className="flex items-center gap-3 mb-5 font-mono text-xs">
              <span className="font-bold text-3xl sm:text-5xl text-[#351779]">03</span>
              <span className="w-10 h-[1px] bg-[#E2E0DD]" />
              <span className="font-bold tracking-widest text-[#080808]/60 uppercase">{beliefs[2].tag}</span>
            </div>

            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#080808] leading-[0.95] mb-8">
              {beliefs[2].statement}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <p className="text-base sm:text-lg text-[#080808]/75 leading-relaxed max-w-xl font-normal mb-6">
                  {beliefs[2].elaboration}
                </p>
                <div className="pt-4 border-t border-[#E2E0DD] flex items-center justify-between text-xs font-mono max-w-xl">
                  <span className="text-[#080808]/50 uppercase tracking-wider">{beliefs[2].accent}</span>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 font-bold uppercase text-[#080808] hover:text-[#351779] transition-colors">
                    <span>DISCUSS PRIORITIES</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FFC400]" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="group relative w-full aspect-[16/9] overflow-hidden border border-[#E2E0DD] bg-[#080808] rounded-xs shadow-xs">
                  <Image
                    src={beliefs[2].image}
                    alt={beliefs[2].imageAlt}
                    fill
                    className="object-cover filter grayscale contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 bg-black/60 backdrop-blur-xs font-mono text-[9px] text-white tracking-widest uppercase">
                    PHILOSOPHY // 03 · TRANSFER
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>


        {/* =====================================================================
            BELIEF 04: INTEGRITY
            Rhythm: Full-width corporate purple (#351779) horizontal strip with gold accents
        ===================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#351779] text-white p-8 sm:p-12 lg:p-16 rounded-xs relative overflow-hidden shadow-lg"
        >
          {/* Ambient Radial Accent */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#FFC400]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-5 font-mono text-xs">
                <span className="font-bold text-3xl sm:text-5xl text-[#FFC400]">04</span>
                <span className="w-10 h-[1px] bg-white/30" />
                <span className="font-bold tracking-widest text-[#FFC400] uppercase">{beliefs[3].tag}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-6">
                {beliefs[3].statement}
              </h3>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl font-normal mb-8">
                {beliefs[3].elaboration}
              </p>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-mono max-w-xl">
                <span className="text-white/60 uppercase tracking-wider">{beliefs[3].accent}</span>
                <Link href="/contact" className="inline-flex items-center gap-1.5 font-bold uppercase text-white hover:text-[#FFC400] transition-colors">
                  <span>DISCUSS PRIORITIES</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FFC400]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="group relative w-full aspect-[4/3] overflow-hidden border border-white/20 bg-[#080808] rounded-xs">
                <Image
                  src={beliefs[3].image}
                  alt={beliefs[3].imageAlt}
                  fill
                  className="object-cover filter contrast-125 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 bg-black/60 backdrop-blur-xs font-mono text-[9px] text-[#FFC400] tracking-widest uppercase">
                  PHILOSOPHY // 04 · INTEGRITY
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
