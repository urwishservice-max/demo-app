"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { StrategyArchitecturalCanvas } from "./strategy-canvas";

export function StrategyHeroCinematic() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F5] text-[#080808] min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 border-b border-[#E2E0DD]">
      
      {/* 1. ARCHITECTURAL 3D BACKGROUND CANVAS */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-85">
        <StrategyArchitecturalCanvas />
      </div>

      {/* 2. SUBTLE SPATIAL GRID PATTERN */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "linear-gradient(to right, #080808 1px, transparent 1px), linear-gradient(to bottom, #080808 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* 3. MAIN CONTAINER */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT FLANK: Editorial Typography & Call to Action */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Restrained Editorial Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-3 mb-6 sm:mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-[#FFC400] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#080808]">
                STRATEGY & MANAGEMENT · LICENCE 7020003
              </span>
            </motion.div>

            {/* Headline with Mask Reveal */}
            <div className="overflow-hidden mb-6 sm:mb-8">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold leading-[1.06] tracking-tight text-[#080808]"
              >
                Strategy that can be executed.
              </motion.h1>
            </div>

            {/* Approved Supporting Lead Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="text-lg md:text-xl text-[#080808]/75 font-light leading-relaxed max-w-2xl mb-10"
            >
              Asheron supports boards, executive teams, and business leaders in translating growth, transformation, regulatory, and operational priorities into a clear operating model and a deliverable roadmap.
            </motion.p>

            {/* CTAs and Metadata Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#351779] text-white text-sm font-semibold hover:bg-[#2B1263] transition-all duration-300 group shadow-sm"
              >
                <span>Consult our Strategy Team</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/approach"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#080808]/80 hover:text-[#080808] transition-colors py-2 px-3 group"
              >
                <span>Explore our approach</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>

              <div className="hidden sm:flex items-center gap-2.5 text-xs text-[#080808]/60 pl-4 border-l border-[#E2E0DD]">
                <span>Operating Model</span>
                <span>•</span>
                <span>Governance</span>
                <span>•</span>
                <span>UAE & GCC</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT FLANK: Regal Visual Metaphor with Multi-Planar Depth */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px]"
            >
              {/* Architectural Framing Border */}
              <div className="absolute -inset-4 border border-[#E2E0DD] rounded-2xl pointer-events-none opacity-60" />
              <div className="absolute -inset-8 border border-[#E2E0DD]/40 rounded-3xl pointer-events-none opacity-40" />
              
              {/* Asset Display */}
              <div className="relative rounded-xl overflow-hidden bg-white/40 p-3 backdrop-blur-xs">
                <Image
                  src="/horse.png"
                  alt="Asheron Strategy - Regal Equestrian Symbol"
                  width={1121}
                  height={1403}
                  priority
                  unoptimized
                  className="w-full h-auto object-contain select-none transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Architectural Precision Badge */}
              <div className="absolute -bottom-4 right-4 bg-white/95 border border-[#E2E0DD] shadow-md px-4 py-2.5 rounded-lg flex items-center gap-3 select-none">
                <div className="w-2 h-2 rounded-full bg-[#FFC400]" />
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#080808]">
                  OPERATIONAL CONTROL
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
