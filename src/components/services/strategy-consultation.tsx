"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Compass, ShieldCheck, Clock } from "lucide-react";

export function StrategyConsultationSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#080808] text-white relative overflow-hidden">
      
      {/* Background Architectural Subtle Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(#FFC400 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#351779]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#FFC400] text-xs font-bold tracking-[0.22em] uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
            <span>Consulting Inquiry</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-8">
            Translate your strategic priorities into an executable operating reality.
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl font-light leading-relaxed mb-12">
            Speak directly with our Strategy & Management practice leaders regarding target operating model design, governance frameworks, and transformation assurance in the UAE.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FFC400] text-[#080808] font-bold text-sm tracking-wide hover:bg-[#E6B000] transition-all duration-300 shadow-md group"
            >
              <span>Consult our Strategy Team</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/approach"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-all duration-300"
            >
              <span>Explore our approach</span>
            </Link>
          </div>

          {/* Micro Assurance Markers */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-left text-xs text-white/60">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-[#FFC400] shrink-0" />
              <span>Strict Non-Disclosure & Confidentiality</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#FFC400] shrink-0" />
              <span>Direct Practice Leader Engagement</span>
            </div>
            <div className="flex items-center gap-3">
              <Compass className="w-4 h-4 text-[#FFC400] shrink-0" />
              <span>Licence 7020003 · Dubai Advisory</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
