"use client"

import { useState } from "react"
import { Shield, BarChart3, Minus, Plus } from "lucide-react"

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

  return (
    <div className="w-full">
      {/* 1. Top Section Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 sm:mb-10">
        <div>
          {/* Eyebrow with extending hairline rule */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#70706C]">
              What drives us
            </span>
            <div className="h-[1px] w-24 bg-[#DCDCD7]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] leading-[1.08]">
            Built for a<br />
            higher standard<span className="text-[#CAC32C]">.</span>
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
          <div className="w-10 h-[1.5px] bg-[#DCDCD7] ml-auto mt-2" />
        </div>
      </div>

      {/* 2. Three Cards Grid (Compact, window-friendly size) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-8">
        {values.map((item, idx) => {
          const isActive = activeCard === idx
          const IconComponent = item.icon

          return (
            <div
              key={item.id}
              onClick={() => setActiveCard(idx)}
              className={`rounded-[24px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer min-h-[360px] sm:min-h-[380px] border ${
                isActive
                  ? "bg-[#DFDCAE] border-[#C8C593] shadow-sm"
                  : "bg-[#ECECE7] hover:bg-[#E7E7E2] border-transparent"
              }`}
            >
              {/* Card Top: Number & Icon */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-[#202020]/75">
                    {item.step}
                  </span>
                  <div className="text-[#202020]">
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
                <div className="w-9 h-[1px] bg-[#202020]/20 mt-3 mb-5" />

                {/* Title */}
                <h3 className="text-2xl font-bold tracking-tight text-[#1A1A1A] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-[#404040] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Bottom: Licence & Read Toggle */}
              <div className="pt-6">
                {/* Licence with vertical accent bar */}
                <div className="border-l-2 border-[#202020]/30 pl-3 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#70706C] block">
                    Licence
                  </span>
                  <span className="text-xs sm:text-[13px] font-semibold text-[#202020]">
                    {item.licence}
                  </span>
                </div>

                {/* Read Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveCard(isActive ? -1 : idx)
                  }}
                  className="flex items-center gap-3 text-left group focus:outline-none"
                >
                  <span
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isActive
                        ? "bg-[#BDB725] text-[#202020]"
                        : "bg-[#D8D8D3] group-hover:bg-[#CAC32C] text-[#202020]"
                    }`}
                  >
                    {isActive ? (
                      <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    )}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#202020]">
                    {isActive ? "Read less" : "Read more"}
                  </span>
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* 3. Section Bottom Bar */}
      <div className="flex items-center justify-between pt-2 border-t border-[#E7E7E3]">
        {/* Step Indicator */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-[2px] bg-[#202020]" />
          <span className="text-xs font-semibold tracking-wider text-[#202020]">
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
