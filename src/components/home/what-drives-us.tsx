"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Shield, BarChart3 } from "lucide-react"

const values = [
  {
    step: "01",
    id: "governance",
    title: "Governance",
    description:
      "We operate with strict data privacy, documented controls, and full UAE regulatory alignment. We don't deploy unverified models.",
    licence: "7020039",
    icon: Shield,
  },
  {
    step: "02",
    id: "excellence",
    title: "Excellence",
    description:
      "The bar is what we would ship if it were our own organisation. That is the standard we hold every client engagement and roadmap to.",
    licence: "7020003",
    icon: BarChart3,
  },
  {
    step: "03",
    id: "roi-impact",
    title: "ROI & Impact",
    description:
      "Every engagement is measured. Systems and initiatives that do not deliver quantifiable returns are re-engineered. We do not deliver vanity advisory.",
    licence: "7020020",
    icon: "venn",
  },
]

export function WhatDrivesUs() {
  const [activeCard, setActiveCard] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })
  const cardY1 = useTransform(smooth, [0, 1], ["20px", "-20px"])
  const cardY2 = useTransform(smooth, [0, 1], ["40px", "-40px"])
  const cardY3 = useTransform(smooth, [0, 1], ["60px", "-60px"])

  const cardYs = [cardY1, cardY2, cardY3]

  return (
    <div ref={containerRef} className="w-full">
      {/* 1. Top Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 sm:mb-10"
      >
        <div>
          {/* Eyebrow with extending hairline rule */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#70706C]">
              What drives us
            </span>
            <div className="h-[1px] w-24 bg-[#E2E0DD]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#080808] leading-[1.08]">
            Built for a<br />
            higher standard<span className="text-[#FFC400]">.</span>
          </h2>
        </div>

        {/* Right Corner Editorial Stack */}
        <div className="hidden sm:block text-right self-start pt-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#70706C] leading-snug">
            People
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#70706C] leading-snug">
            Discipline
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#70706C] leading-snug">
            Progress
          </p>
          <div className="w-10 h-[1.5px] bg-[#E2E0DD] ml-auto mt-2" />
        </div>
      </motion.div>

      {/* 2. Three Cards Grid with Differential Parallax Float */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-8">
        {values.map((item, idx) => {
          const isActive = activeCard === idx
          const IconComponent = item.icon
          const y = cardYs[idx]

          return (
            <motion.div
              key={item.id}
              style={{ y }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveCard(idx)}
              className={`rounded-[24px] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-300 cursor-pointer min-h-[360px] sm:min-h-[380px] border shadow-sm ${
                isActive
                  ? "bg-[#351779] border-[#351779] text-white shadow-xl"
                  : "bg-[#FFFFFF] hover:bg-[#F8F7F5] border-[#E2E0DD] hover:border-[#351779]/30 text-[#080808]"
              }`}
            >
              {/* Card Top: Number & Icon */}
              <div>
                <div className="flex items-center justify-between">
                  <span className={`text-base font-medium ${isActive ? "text-[#FFC400]" : "text-[#080808]/75"}`}>
                    {item.step}
                  </span>
                  <div className={isActive ? "text-[#FFC400]" : "text-[#080808]"}>
                    {IconComponent === "venn" ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <circle cx="9" cy="12" r="5" />
                        <circle cx="15" cy="12" r="5" />
                      </svg>
                    ) : (
                      <IconComponent className="w-6 h-6 stroke-[1.5]" />
                    )}
                  </div>
                </div>

                {/* Short hairline separator */}
                <div className={`w-9 h-[1px] mt-3 mb-5 ${isActive ? "bg-white/20" : "bg-[#080808]/15"}`} />

                {/* Title */}
                <h3 className={`text-2xl font-bold tracking-tight mb-3 ${isActive ? "text-white" : "text-[#080808]"}`}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className={`text-xs sm:text-[13px] leading-relaxed ${isActive ? "text-white/80" : "text-[#555555]"}`}>
                  {item.description}
                </p>
              </div>

              {/* Card Bottom: Licence */}
              <div className="pt-6">
                {/* Licence with vertical accent bar */}
                <div className={`border-l-2 pl-3 ${isActive ? "border-[#FFC400]/50" : "border-[#080808]/25"}`}>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] block ${isActive ? "text-white/60" : "text-[#70706C]"}`}>
                    Licence
                  </span>
                  <span className={`text-xs sm:text-[13px] font-semibold ${isActive ? "text-white" : "text-[#080808]"}`}>
                    {item.licence}
                  </span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* 3. Section Bottom Bar */}
      <div className="flex items-center justify-between pt-2 border-t border-[#E2E0DD]">
        {/* Step Indicator */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-[2px] bg-[#351779]" />
          <span className="text-xs font-semibold tracking-wider text-[#080808]">
            {activeCard >= 0 ? `0${activeCard + 1}` : "01"} / 03
          </span>
        </div>

        {/* Right Label */}
        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#70706C]">
          Measurable. Responsible. Impactful.
        </span>
      </div>
    </div>
  )
}
