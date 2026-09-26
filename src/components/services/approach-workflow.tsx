"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function ApproachWorkflow() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track vertical scroll progress across the 260vh runway
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001
  });

  // Smooth horizontal translation of the entire workflow canvas
  // Moves from 0px to -520px to reveal all 5 cards including Node 05
  const x = useTransform(smooth, [0.05, 0.92], ["0px", "-520px"]);

  // Progress bar indicator width
  const progressBarWidth = useTransform(smooth, [0.05, 0.92], ["0%", "100%"]);

  return (
    <div 
      ref={containerRef} 
      className="relative h-[250vh] bg-[#F8F9FA] border-b border-[#E5E7EB]"
    >
      {/* STICKY FULLSCREEN VIEWPORT CONTAINER - ZERO SCROLLBARS */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-12 md:py-16 select-none">
        
        {/* DOTTED CANVAS BACKGROUND */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            backgroundImage: "radial-gradient(#CBD5E1 1.4px, transparent 1.4px)",
            backgroundSize: "24px 24px"
          }}
        />

        {/* 1. TOP SECTION HEADER */}
        <div className="container mx-auto px-6 max-w-7xl relative z-10 shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280] font-mono">
                Structured Delivery Workflow
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111827] mt-1">
                Our approach
              </h2>
              <p className="text-[#4B5563] text-sm sm:text-base mt-2 font-normal leading-relaxed max-w-2xl">
                From initial readiness and risk scoring to policy governance, enablement, and assured production rollout.
              </p>
            </div>


          </div>
        </div>

        {/* 2. HORIZONTAL MOVING WORKFLOW TRACK (PINNED TO VERTICAL SCROLL) */}
        <div className="relative w-full overflow-hidden my-auto py-4 z-10">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div 
              style={{ x }}
              className="relative w-[1620px] h-[460px] will-change-transform"
            >
              {/* SVG CONNECTING WIRES - IN THE SAME MOVING CANVAS */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
                viewBox="0 0 1620 460"
                fill="none"
              >
                {/* Wire 1: Node 1 (Assess) -> Node 2 (Prioritise) */}
                <path
                  d="M 260 135 C 295 135, 295 240, 330 240"
                  stroke="#111827"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Wire 2: Node 2 (Prioritise) -> Node 3 (Govern) */}
                <path
                  d="M 590 240 C 625 240, 625 125, 660 125"
                  stroke="#111827"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Wire 3A (Green branch): Node 3 (Govern) -> Node 4 (Enable) */}
                <path
                  d="M 920 110 C 955 110, 955 230, 990 230"
                  stroke="#22C55E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Wire 3B (Coral branch): Node 3 (Govern) -> Branch out */}
                <path
                  d="M 920 138 C 950 138, 955 165, 990 165"
                  stroke="#EF4444"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Wire 4: Node 4 (Enable) -> Node 5 (Implement and assure) */}
                <path
                  d="M 1250 230 C 1285 230, 1285 125, 1320 125"
                  stroke="#111827"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* NODE 01: ASSESS */}
              <div className="absolute left-0 top-[20px] w-[260px]">
                <div className="text-[13px] font-bold text-[#111827] mb-1.5 ml-1">
                  Start
                </div>

                <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.04)] relative">
                  <div className="px-4 py-3 border-b border-[#F3F4F6] flex items-center justify-between">
                    <div className="font-bold text-[14px] text-[#111827] tracking-tight">
                      01 Assess
                    </div>
                    <span className="text-[#9CA3AF] tracking-widest text-xs font-mono">···</span>
                  </div>

                  <div className="p-3.5 space-y-2.5">
                    <div className="bg-[#F9FAFB] rounded-lg p-2.5 border border-[#F3F4F6]">
                      <div className="text-[10px] uppercase font-bold text-[#6B7280]">
                        Objective
                      </div>
                      <div className="text-xs font-semibold text-[#111827] mt-0.5">
                        Review AI maturity & tools
                      </div>
                    </div>

                    <p className="text-[11px] text-[#4B5563] leading-relaxed font-normal px-0.5">
                      Review AI maturity, current tools, data environment, processes, risks, and business objectives.
                    </p>

                    <div className="pt-2 border-t border-[#F3F4F6] space-y-1.5 text-xs">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-[#6B7280]">Data estate</span>
                        <span className="text-[#111827] font-medium">Environment mapped</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-[#6B7280]">Risk profile</span>
                        <span className="text-[#111827] font-medium">Audited</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#F3F4F6] flex justify-between items-center text-[11px] text-[#6B7280]">
                      <span>Duration</span>
                      <span className="font-mono text-[#111827] font-semibold">2-3 Weeks</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* NODE 02: PRIORITISE */}
              <div className="absolute left-[330px] top-[125px] w-[260px]">
                <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.04)] relative">
                  <div className="px-4 py-3 border-b border-[#F3F4F6] flex items-center justify-between">
                    <div className="font-bold text-[14px] text-[#111827] tracking-tight">
                      02 Prioritise
                    </div>
                    <span className="text-[#9CA3AF] tracking-widest text-xs font-mono">···</span>
                  </div>

                  <div className="p-3.5 space-y-2.5">
                    <div className="bg-[#F9FAFB] rounded-lg p-2.5 border border-[#F3F4F6]">
                      <div className="text-[10px] uppercase font-bold text-[#6B7280]">
                        Register
                      </div>
                      <div className="text-xs font-semibold text-[#111827] mt-0.5">
                        Opportunity register
                      </div>
                    </div>

                    <p className="text-[11px] text-[#4B5563] leading-relaxed font-normal px-0.5">
                      Build an opportunity register that ranks use cases by strategic value, feasibility, control requirements, implementation effort, and expected benefit.
                    </p>

                    <div className="pt-2 border-t border-[#F3F4F6] space-y-1.5 text-xs">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-[#6B7280]">Strategic value</span>
                        <span className="text-[#111827] font-medium">Ranked High</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-[#6B7280]">Controls</span>
                        <span className="text-[#111827] font-medium">Validated</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#F3F4F6] flex justify-between items-center text-[11px] text-[#6B7280]">
                      <span>Duration</span>
                      <span className="font-mono text-[#111827] font-semibold">2 Weeks</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* NODE 03: GOVERN */}
              <div className="absolute left-[660px] top-[20px] w-[260px]">
                <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.04)] relative">
                  <div className="px-4 py-3 border-b border-[#F3F4F6] flex items-center justify-between">
                    <div className="font-bold text-[14px] text-[#111827] tracking-tight">
                      03 Govern
                    </div>
                    <span className="text-[#9CA3AF] tracking-widest text-xs font-mono">···</span>
                  </div>

                  <div className="p-3.5 space-y-2.5">
                    <div className="bg-[#F9FAFB] rounded-lg p-2.5 border border-[#F3F4F6]">
                      <div className="text-[10px] uppercase font-bold text-[#6B7280]">
                        Accountable Ownership
                      </div>
                      <div className="text-xs font-semibold text-[#111827] mt-0.5">
                        AI policy & data-handling rules
                      </div>
                    </div>

                    <p className="text-[11px] text-[#4B5563] leading-relaxed font-normal px-0.5">
                      Define accountable ownership, AI policy, data-handling rules, vendor due diligence, human oversight, testing standards, and monitoring arrangements.
                    </p>

                    <div className="pt-2 border-t border-[#F3F4F6] space-y-1.5 text-xs">
                      <div className="flex justify-between items-center text-[11px] text-[#15803D] font-medium">
                        <span>True (Governed)</span>
                        <span className="font-mono font-bold">24</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] text-[#DC2626] font-medium">
                        <span>False (Review)</span>
                        <span className="font-mono font-bold">3</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#F3F4F6] flex justify-between items-center text-[11px] text-[#6B7280]">
                      <span>Duration</span>
                      <span className="font-mono text-[#111827] font-semibold">Continuous</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* NODE 04: ENABLE */}
              <div className="absolute left-[990px] top-[125px] w-[260px]">
                <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.04)] relative">
                  <div className="px-4 py-3 border-b border-[#F3F4F6] flex items-center justify-between">
                    <div className="font-bold text-[14px] text-[#111827] tracking-tight">
                      04 Enable
                    </div>
                    <span className="text-[#9CA3AF] tracking-widest text-xs font-mono">···</span>
                  </div>

                  <div className="p-3.5 space-y-2.5">
                    <div className="bg-[#F9FAFB] rounded-lg p-2.5 border border-[#F3F4F6]">
                      <div className="text-[10px] uppercase font-bold text-[#6B7280]">
                        Guidance
                      </div>
                      <div className="text-xs font-semibold text-[#111827] mt-0.5">
                        Role-specific guidance
                      </div>
                    </div>

                    <p className="text-[11px] text-[#4B5563] leading-relaxed font-normal px-0.5">
                      Equip leadership and teams with role-specific guidance, practical use cases, approved prompts, and clear escalation procedures.
                    </p>

                    <div className="pt-2 border-t border-[#F3F4F6] space-y-1.5 text-xs">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-[#6B7280]">Prompts</span>
                        <span className="text-[#111827] font-medium">Approved catalog</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-[#6B7280]">Escalations</span>
                        <span className="text-[#111827] font-medium">Defined</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#F3F4F6] flex justify-between items-center text-[11px] text-[#6B7280]">
                      <span>Duration</span>
                      <span className="font-mono text-[#111827] font-semibold">Ongoing</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* NODE 05: IMPLEMENT AND ASSURE */}
              <div className="absolute left-[1320px] top-[20px] w-[260px]">
                <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06),0_2px_6px_-1px_rgba(0,0,0,0.04)] relative">
                  <div className="px-4 py-3 border-b border-[#F3F4F6] flex items-center justify-between">
                    <div className="font-bold text-[14px] text-[#111827] tracking-tight">
                      05 Implement and assure
                    </div>
                    <span className="text-[#9CA3AF] tracking-widest text-xs font-mono">···</span>
                  </div>

                  <div className="p-3.5 space-y-2.5">
                    <div className="bg-[#F9FAFB] rounded-lg p-2.5 border border-[#F3F4F6]">
                      <div className="text-[10px] uppercase font-bold text-[#6B7280]">
                        Rollout
                      </div>
                      <div className="text-xs font-semibold text-[#111827] mt-0.5">
                        Controlled rollout & safeguards
                      </div>
                    </div>

                    <p className="text-[11px] text-[#4B5563] leading-relaxed font-normal px-0.5">
                      Support controlled rollout, validate safeguards, monitor outcomes, and refine workflows as adoption matures.
                    </p>

                    <div className="pt-2 border-t border-[#F3F4F6] space-y-1.5 text-xs">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-[#6B7280]">Safeguards</span>
                        <span className="text-[#111827] font-medium">Validated</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-[#6B7280]">Adoption</span>
                        <span className="text-[#111827] font-medium">Refined</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#F3F4F6] flex justify-between items-center text-[11px] text-[#6B7280]">
                      <span>Status</span>
                      <span className="font-mono text-[#15803D] font-bold">Production Assured</span>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>

        {/* 3. BOTTOM CINEMATIC PROGRESS BAR (REPLACES NATIVE SCROLLBAR) */}
        <div className="container mx-auto px-6 max-w-7xl relative z-10 shrink-0">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#E5E7EB]">
            <div className="flex items-center gap-6 text-xs font-bold text-[#6B7280]">
              <span className="text-[#111827]">01 Assess</span>
              <span>02 Prioritise</span>
              <span>03 Govern</span>
              <span>04 Enable</span>
              <span className="text-[#111827]">05 Implement</span>
            </div>

            {/* Subtle progress track */}
            <div className="w-full sm:w-64 h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden">
              <motion.div 
                style={{ width: progressBarWidth }}
                className="h-full bg-[#111827] rounded-full"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
