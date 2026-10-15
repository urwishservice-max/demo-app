"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const activities = [
  {
    licence: "7020039",
    title: "AI & Innovation",
    practice: "Practice 01",
    desc: "Autonomous systems, algorithmic verification, and governed executive architecture.",
  },
  {
    licence: "7020003",
    title: "Management Consultancies",
    practice: "Practice 02",
    desc: "Target operating model design, corporate governance, and executive board advisory.",
  },
  {
    licence: "7020008",
    title: "Human Resources & Capability",
    practice: "Practice 03",
    desc: "Workforce skills impact mapping, role-specific fluency, and leadership enablement.",
  },
  {
    licence: "7020020",
    title: "Project Development",
    practice: "Practice 04",
    desc: "Stage-gate delivery assurance, capital feasibility, and PMO programme governance.",
  },
]

export function LicensedActivitiesHome() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })
  const yEven = useTransform(smooth, [0, 1], ["20px", "-20px"])
  const yOdd = useTransform(smooth, [0, 1], ["40px", "-40px"])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#F8F7F5] text-[#080808] border-b border-[#E2E0DD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Institutional Top Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#E2E0DD] mb-12"
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFC400] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#080808]">
              Licensed Advisory Activities
            </span>
            <span className="font-mono text-xs text-[#8A8A85] hidden sm:inline">
              · Department of Economy and Tourism
            </span>
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#351779]">
            Government of Dubai · UAE
          </span>
        </motion.div>

        {/* 4 Professional Editorial Columns with Parallax Drift */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {activities.map((item, idx) => {
            const y = idx % 2 === 0 ? yEven : yOdd
            return (
              <motion.div
                key={item.licence}
                style={{ y }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="flex flex-col justify-between group p-6 border border-[#E2E0DD] bg-white rounded-xl shadow-xs hover:border-[#351779] hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 font-mono">
                    <span className="text-[10px] font-bold text-[#8A8A85] uppercase tracking-wider">
                      Licence
                    </span>
                    <span className="text-xs font-bold text-[#351779]">
                      {item.licence}
                    </span>
                  </div>
                  <h4 className="text-lg font-black uppercase text-[#080808] tracking-tight group-hover:text-[#351779] transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E2E0DD] flex items-center justify-between font-mono text-[11px] text-[#8A8A85]">
                  <span>{item.practice}</span>
                  <span className="text-[#351779] font-bold uppercase">Active Status</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
