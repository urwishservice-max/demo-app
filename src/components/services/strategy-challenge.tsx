"use client";

import { motion } from "framer-motion";
import { Check, Target, Compass, Split } from "lucide-react";

export function StrategyChallengeSection() {
  return (
    <section className="py-20 lg:py-32 bg-white text-[#080808] border-b border-[#E2E0DD] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Editorial Subheader */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFC400]" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#080808]">
                The Strategic Challenge
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#080808] leading-tight">
              Why strategies fail between intent and reality.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-[#080808]/75 font-normal leading-relaxed">
            <p>
              Across established organisations and high-growth ventures alike, strategic initiatives rarely fail from a lack of executive vision. They falter because operating models remain misaligned, decision rights are diffuse, and transformation roadmaps lack rigorous milestone accountability.
            </p>
            <p>
              Asheron brings disciplined advisory to this exact intersection: aligning organizational architecture, operational governance, and delivery frameworks so that board-level priorities translate into sustainable, compliant commercial outcomes.
            </p>
          </div>

        </div>

        {/* 3 Core Pillars of Execution Assurance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16 pt-12 border-t border-[#E2E0DD]">
          <div className="p-6 rounded-xl bg-[#F8F7F5] border border-[#E2E0DD]/80">
            <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E0DD] flex items-center justify-center text-[#351779] mb-4 font-bold text-xs font-mono">
              01
            </div>
            <h3 className="text-lg font-bold text-[#080808] mb-2">Clarity of Mandate</h3>
            <p className="text-sm text-[#080808]/70 leading-relaxed">
              Unambiguous translation of strategic intent into defined functional objectives, boundaries, and measurable performance standards.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#F8F7F5] border border-[#E2E0DD]/80">
            <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E0DD] flex items-center justify-center text-[#351779] mb-4 font-bold text-xs font-mono">
              02
            </div>
            <h3 className="text-lg font-bold text-[#080808] mb-2">Operating Discipline</h3>
            <p className="text-sm text-[#080808]/70 leading-relaxed">
              Target operating models designed with explicit process ownership, optimized controls, and realistic resource capabilities.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#F8F7F5] border border-[#E2E0DD]/80">
            <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E0DD] flex items-center justify-center text-[#351779] mb-4 font-bold text-xs font-mono">
              03
            </div>
            <h3 className="text-lg font-bold text-[#080808] mb-2">Accountable Governance</h3>
            <p className="text-sm text-[#080808]/70 leading-relaxed">
              Transparent decision rights, delegation frameworks, and active management forums that ensure execution velocity within risk appetite.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
