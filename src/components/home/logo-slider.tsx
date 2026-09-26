"use client"

import React from "react"

const logos = [
  { name: "Aviation & Aerospace", label: "Aviation" },
  { name: "Financial Services", label: "FinTech & Banking" },
  { name: "Healthcare & Life Sciences", label: "Healthcare" },
  { name: "Real Estate & Development", label: "Real Estate" },
  { name: "Logistics & Supply Chain", label: "Logistics" },
  { name: "Public Sector & Governance", label: "Government" },
  { name: "Manufacturing & Industrial", label: "Manufacturing" },
  { name: "Retail & Consumer Tech", label: "Retail" },
]

export function LogoSlider() {
  const repeated = [...logos, ...logos, ...logos, ...logos]

  return (
    <div className="logo-slider logo-slider--fade py-6 border-y border-white/10 bg-[#202020]">
      <div className="logo-slider__track animate-logo-scroll">
        {repeated.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-8 text-white/40 hover:text-white/80 transition-colors cursor-default whitespace-nowrap"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#CAC32C]" />
            <span className="text-sm font-semibold tracking-wider uppercase">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
