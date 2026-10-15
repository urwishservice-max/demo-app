"use client";

import { motion } from "framer-motion";
import { Landmark, Building2, Globe2, ShieldCheck } from "lucide-react";

export function StrategyRegionalContext() {
  const pillars = [
    {
      title: "Regulated-Business Requirements",
      desc: "Governance, decision rights, and accountability frameworks tuned to federal and freezone supervisory expectations across the Emirates.",
      icon: ShieldCheck,
    },
    {
      title: "Public & Private Operating Models",
      desc: "Balancing commercial velocity with public-sector mandate compliance, committee transparency, and structured stakeholder reporting.",
      icon: Landmark,
    },
    {
      title: "Growth & Diversification Initiatives",
      desc: "Translating national economic initiatives and sector diversification goals into viable business-unit roadmaps.",
      icon: Building2,
    },
    {
      title: "GCC Expansion Alignment",
      desc: "Structuring scalable operating models capable of friction-free expansion across UAE, Saudi Arabia, and wider GCC markets.",
      icon: Globe2,
    },
  ];

  return (
    <section className="py-24 lg:py-36 bg-[#F8F7F5] border-t border-[#E2E0DD] text-[#080808]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Callout */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFC400]" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#080808]">
                Regional Depth
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#080808] mb-8">
              UAE & GCC context.
            </h2>

            <blockquote className="text-xl sm:text-2xl text-[#080808]/85 font-light leading-relaxed border-l-2 border-[#FFC400] pl-6 py-2 mb-8 bg-white/60 p-6 rounded-r-xl border-y border-r border-[#E2E0DD]/60">
              Support is tailored to UAE conditions: growth and diversification initiatives, digital transformation, regulated-business requirements, public and private sector operating models, and market-entry or expansion priorities across the Emirates and wider GCC.
            </blockquote>

            <div className="text-xs text-[#6B6B6B] flex items-center gap-3 font-mono">
              <span>LICENSED MANAGEMENT CONSULTANCY</span>
              <span>•</span>
              <span>DUBAI, UAE</span>
            </div>
          </div>

          {/* Right Column: Architectural Pillar Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 rounded-xl bg-white border border-[#E2E0DD] hover:border-[#351779]/30 transition-all duration-300 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-[#F8F7F5] border border-[#E2E0DD] flex items-center justify-center text-[#351779] mb-4">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[#080808] mb-2 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#080808]/70 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
