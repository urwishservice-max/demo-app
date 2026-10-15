"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react"

const phases = [
  {
    phase: "Phase 1",
    step: "01",
    id: "ai-innovation",
    name: "AI & Innovation",
    licence: "7020039",
    metric: "40+ Workflows Automated",
    subtitle: "The governance and strategy your AI investment is missing.",
    description:
      "You know AI matters. Your competitors are moving. But inside your organisation, nobody can answer the foundational questions: where do we start, and how do we govern what gets built? Asheron provides executive clarity, workflow redesign, and verifiable assurance.",
    deliverables: [
      "AI Readiness & Opportunity Audit",
      "Responsible AI Governance Framework",
      "Executive SOPs & Guardrail Architecture",
      "Model & Vendor Independent Assessment",
    ],
    ctaHref: "/services/ai-innovation",
    image: "/practice_ai.jpg",
    editorialTop: ["IDEAS", "GOVERNED", "FOR A BRIGHTER", "TOMORROW"],
    editorialBottom: ["ARTIFICIAL INTELLIGENCE", "HUMAN PROGRESS"],
  },
  {
    phase: "Phase 2",
    step: "02",
    id: "strategy-management",
    name: "Strategy & Management",
    licence: "7020003",
    metric: "100% Deliverable Roadmaps",
    subtitle: "Operating models designed for execution, not shelfware.",
    description:
      "Strategic designs and board decks routinely stall at the point of implementation. Asheron connects corporate vision to frontline operations: defining clear decision rights, accountable governance structures, and milestone-backed roadmaps.",
    deliverables: [
      "Target Operating Model (TOM) Design",
      "Governance & Decision Rights Matrix",
      "Performance KPIs & Value Tracking",
      "Executive & Board Advisory Cadence",
    ],
    ctaHref: "/services/strategy",
    image: "/practice_strategy.jpg",
    editorialTop: ["PRECISION", "STRATEGY", "ACCOUNTABLE", "EXECUTION"],
    editorialBottom: ["OPERATIONAL EXCELLENCE", "SUSTAINED VALUE"],
  },
  {
    phase: "Phase 3",
    step: "03",
    id: "people-capability",
    name: "People & Capability",
    licence: "7020008",
    metric: "Role-Specific Enablement",
    subtitle: "This is not a generic workshop.",
    description:
      "Technology and strategy deliver returns only when teams understand their roles and operate with fluency. We embed directly inside departments to build role-specific capability frameworks, AI fluency playbooks, and Emiratisation-aligned growth paths.",
    deliverables: [
      "Workforce Impact & Skills Mapping",
      "Role-Specific AI Fluency Playbooks",
      "Leadership Enablement & Change Architecture",
      "Emiratisation-Aligned Competency Models",
    ],
    ctaHref: "/services/people",
    image: "/practice_people.jpg",
    editorialTop: ["CAPABILITY", "EMPOWERED", "WORKFORCE", "RESILIENCE"],
    editorialBottom: ["HUMAN MASTERY", "FUTURE READINESS"],
  },
  {
    phase: "Phase 4",
    step: "04",
    id: "project-development",
    name: "Project Development",
    licence: "7020020",
    metric: "Governed Stage-Gate Assurance",
    subtitle: "Projects engineered to withstand operational reality.",
    description:
      "From initial feasibility and capital allocation to stage-gate PMO governance, Asheron acts as delivery assurance partner. We ensure strategic programmes stay on budget, comply with regulations, and achieve intended operational targets.",
    deliverables: [
      "Rigorous Business Cases & Feasibility",
      "PMO Setup & Programme Governance",
      "Stage-Gate Delivery Assurance",
      "Vendor Oversight & Recovery Advisory",
    ],
    ctaHref: "/services/projects",
    image: "/practice_projects.jpg",
    editorialTop: ["DELIVERY", "ASSURED", "RIGOROUS", "EXECUTION"],
    editorialBottom: ["ENTERPRISE ASSURANCE", "MEASURED RESULTS"],
  },
]

export function PracticeTabs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const current = phases[activeIndex]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? phases.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === phases.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full">
      {/* 1. Header Section: Title & Right-Aligned Description (Sleeker & More Compact) */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#202020]/70">
            The Asheron Standard
          </span>
          <div className="h-[1px] w-20 bg-[#D8D8D3]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#202020] leading-[1.12]">
              What you actually{" "}
              <span className="text-[#FFC400] block sm:inline">get from Asheron.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-4">
            <p className="text-sm sm:text-base text-[#5A5A57] leading-relaxed">
              Engage our four licensed practices independently, or combine them to move from
              strategic mandate to autonomous operational execution.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Subheader: Engagement Roadmap + Prev/Next Controls */}
      <div className="flex items-end justify-between mb-6 pb-2">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#73736F] block mb-0.5">
            Engagement Roadmap
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#202020] tracking-tight">
            Four Licensed Practices
          </h3>
        </div>

        {/* Prev / Next Circular Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrev}
            aria-label="Previous Practice"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E7E7E3] hover:bg-[#DCDCDC] text-[#202020] flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2]" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Practice"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#CAC32C] hover:bg-[#B5AE22] text-[#202020] flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
          >
            <ArrowRight className="w-4 h-4 stroke-[2]" />
          </button>
        </div>
      </div>

      {/* 3. Horizontal 4-Tab Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#E7E7E3] mb-8">
        {phases.map((item, idx) => {
          const isActive = activeIndex === idx
          return (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className="relative text-left py-3 px-2.5 sm:px-3.5 transition-colors group focus:outline-none"
            >
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span
                  className={`text-xl sm:text-2xl font-medium tracking-tight transition-colors duration-200 ${
                    isActive ? "text-[#CAC32C] font-semibold" : "text-[#9E9E98] group-hover:text-[#202020]"
                  }`}
                >
                  {item.step}
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-medium text-[#73736F] tracking-tight">
                    {item.phase} · Licence {item.licence}
                  </span>
                  <span
                    className={`text-xs sm:text-sm font-bold tracking-tight transition-colors duration-200 mt-0.5 ${
                      isActive ? "text-[#202020]" : "text-[#4A4A48] group-hover:text-[#202020]"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
              </div>

              {/* Active Tab Underline */}
              {isActive && (
                <div className="absolute bottom-[-1px] left-0 right-0 h-[2.5px] bg-[#CAC32C] rounded-full" />
              )}
            </button>
          )
        })}
      </div>

      {/* 4. Main Practice Display with Vertical Step Indicator */}
      <div className="grid grid-cols-1 lg:grid-cols-[40px_1fr] gap-4 lg:gap-6 items-stretch">
        {/* Vertical Stepper Rail (Desktop) */}
        <div className="hidden lg:flex flex-col items-center justify-between py-8 select-none">
          {phases.map((item, idx) => {
            const isActive = activeIndex === idx
            return (
              <div key={item.step} className="flex flex-col items-center">
                <button
                  onClick={() => setActiveIndex(idx)}
                  className={`text-xs font-semibold transition-colors duration-200 ${
                    isActive ? "text-[#CAC32C]" : "text-[#A8A8A2] hover:text-[#202020]"
                  }`}
                >
                  {item.step}
                </button>
                {idx < phases.length - 1 && (
                  <div className="w-[1px] h-8 bg-[#D8D8D3] my-2" />
                )}
              </div>
            )
          })}
        </div>

        {/* Main Card (Compact & Minimal by Default) */}
        <div className="rounded-[24px] sm:rounded-[28px] border border-[#E7E7E3] bg-[#FFFFFF] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-300">
          {/* Left Column: Information */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-9 flex flex-col justify-between">
            <div>
              {/* Top Row: Phase Eyebrow & Dropdown Toggle */}
              <div className="flex items-center justify-between gap-4 mb-2.5">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#73736F]">
                  {current.phase} · {current.metric}
                </span>

                {/* Dropdown Toggle Button to Explore Content */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#202020] bg-[#F4F4F0] hover:bg-[#EBEBE6] border border-[#E0E0DB] transition-all duration-200 group"
                  aria-expanded={isExpanded}
                >
                  <span>{isExpanded ? "Less" : "Explore details"}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#CAC32C] transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Main Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#202020] mb-2">
                {current.name}
              </h3>

              {/* Subtitle */}
              <p className="text-sm sm:text-base font-medium text-[#4A4A48] mb-3">
                {current.subtitle}
              </p>

              {/* Collapsible / Dropdown Content Area */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isExpanded
                    ? "max-h-[500px] opacity-100 pt-2 pb-4"
                    : "max-h-0 opacity-0 py-0"
                }`}
              >
                {/* Detailed Description */}
                <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed mb-5">
                  {current.description}
                </p>

                {/* Deliverables Section */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#73736F] block mb-3">
                    What you walk away with
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-full border border-[#CAC32C] flex items-center justify-center text-[#CAC32C] shrink-0">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="text-xs sm:text-[13px] font-medium text-[#202020]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#F0F0EC] flex flex-wrap items-center gap-3">
              <Link
                href={current.ctaHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#CAC32C] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-[#202020] hover:bg-[#B5AE22] transition-colors shadow-sm"
              >
                Explore {current.name}
                <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D0D0C8] bg-transparent px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-[#202020] hover:bg-[#F4F4F0] transition-colors"
              >
                Discuss mandate
                <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Visual with Editorial Typography */}
          <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px] lg:min-h-full bg-[#F4F4F0] overflow-hidden border-t lg:border-t-0 lg:border-l border-[#E7E7E3]">
            <Image
              key={current.image}
              src={current.image}
              alt={current.name}
              fill
              priority
              className="object-cover object-center transition-opacity duration-300"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />

            {/* Editorial Overlay Typography */}
            <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-between pointer-events-none select-none">
              {/* Top-Left Typography */}
              <div className="space-y-0.5">
                {current.editorialTop.map((line, idx) => (
                  <p
                    key={idx}
                    className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.24em] text-[#333333]/90 drop-shadow-sm"
                  >
                    {line}
                  </p>
                ))}
                <div className="w-5 h-[1.5px] bg-[#333333]/80 mt-1.5" />
              </div>

              {/* Bottom-Right Typography */}
              <div className="self-end text-right space-y-0.5">
                {current.editorialBottom.map((line, idx) => (
                  <p
                    key={idx}
                    className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.24em] text-[#333333]/90 drop-shadow-sm"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
