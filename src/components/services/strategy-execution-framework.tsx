"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, Target, Shield, Gauge, GitFork } from "lucide-react";

const STAGES = [
  {
    num: "STAGE 01",
    title: "Strategic Priorities",
    subtitle: "Intent & Ambition",
    icon: Target,
    desc: "Translating board ambition, regulatory shifts, and commercial imperatives into defined focus areas with clear boundary conditions.",
    deliverable: "Strategic Mandate & Risk Appetite",
  },
  {
    num: "STAGE 02",
    title: "Operating Model",
    subtitle: "Architecture & Sizing",
    icon: Layers,
    desc: "Designing Target Operating Models (TOM) that establish how people, processes, technology, and data interact seamlessly.",
    deliverable: "TOM Blueprint & Interaction Model",
  },
  {
    num: "STAGE 03",
    title: "Governance & Accountability",
    subtitle: "Decision Rights",
    icon: Shield,
    desc: "Structuring Delegation of Authority, executive committees, decision rights, and control frameworks to eliminate ambiguity.",
    deliverable: "DoA Charters & Management Forums",
  },
  {
    num: "STAGE 04",
    title: "Delivery Roadmap",
    subtitle: "Execution Sequencing",
    icon: GitFork,
    desc: "Sequencing transformation initiatives into a feasible, prioritised timeline with explicit dependencies and ownership.",
    deliverable: "Implementation Sequencing & PMO",
  },
  {
    num: "STAGE 05",
    title: "Performance Measurement",
    subtitle: "Assurance & Control",
    icon: Gauge,
    desc: "Embedding balanced KPI and KRI frameworks with actionable management information to monitor delivery against target outcomes.",
    deliverable: "MI Dashboards & Review Cadence",
  },
];

export function StrategyExecutionFramework() {
  return (
    <section className="py-24 lg:py-36 bg-white border-t border-[#E2E0DD] text-[#080808] relative overflow-hidden">
      
      {/* Background Architectural Grid Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "linear-gradient(to right, #E2E0DD 1px, transparent 1px), linear-gradient(to bottom, #E2E0DD 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFC400]" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#080808]">
              Operating Architecture
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#080808] mb-6">
            From strategy to execution.
          </h2>
          <p className="text-base sm:text-lg text-[#080808]/75 leading-relaxed font-light">
            Strategy frequently falters in the space between intent and delivery. We bridge this gap through a disciplined, connected progression that anchors executive ambition into accountable, measurable operational reality.
          </p>
        </div>

        {/* 5-Stage Architectural Progression */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-[#F8F7F5] rounded-xl p-6 sm:p-7 border border-[#E2E0DD] hover:border-[#351779]/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Stage Index Header */}
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E2E0DD]">
                    <span className="text-[11px] font-mono font-bold text-[#351779] tracking-wider">
                      {stage.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E0DD] flex items-center justify-center text-[#080808] group-hover:bg-[#FFC400] transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#6B6B6B] block mb-1">
                    {stage.subtitle}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-[#080808] mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#080808]/70 leading-relaxed font-normal mb-6">
                    {stage.desc}
                  </p>
                </div>

                {/* Deliverable Tag */}
                <div className="pt-4 border-t border-[#E2E0DD]/60">
                  <span className="text-[9.5px] uppercase font-bold tracking-[0.16em] text-[#6B6B6B] block mb-1">
                    Core Output:
                  </span>
                  <span className="text-xs font-semibold text-[#351779]">
                    {stage.deliverable}
                  </span>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Conceptual Integration Caption */}
        <div className="mt-12 pt-6 border-t border-[#E2E0DD] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#6B6B6B]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#FFC400]" />
            <span className="font-medium text-[#080808]">Five-dimension structural governance framework</span>
          </div>
          <span className="font-mono">UAE & GCC Operational Implementation</span>
        </div>

      </div>
    </section>
  );
}
