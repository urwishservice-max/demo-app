"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Compass, ShieldCheck, GitMerge, FileCheck } from "lucide-react";

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  tag: string;
  deliverables: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "corp-strategy",
    num: "01",
    title: "Corporate, business-unit, and functional strategy.",
    tag: "Strategic Mandate",
    deliverables: [
      "Board-level strategic ambition & market positioning",
      "Business-unit mandate alignment & capital allocation",
      "Functional operating priorities & capability roadmaps",
    ],
  },
  {
    id: "operating-model",
    num: "02",
    title: "Operating-model assessment and target operating-model design.",
    tag: "TOM Architecture",
    deliverables: [
      "Current-state operating friction & bottleneck diagnostic",
      "Target Operating Model (TOM) blueprint & interaction model",
      "Organisational structure, sizing, and accountability matrices",
    ],
  },
  {
    id: "governance",
    num: "03",
    title: "Governance structures, decision rights, committees, and management forums.",
    tag: "Delegation & Oversight",
    deliverables: [
      "Delegation of Authority (DoA) & decision-rights charters",
      "Executive committee mandates & reporting cadences",
      "Statutory & regional board governance alignment",
    ],
  },
  {
    id: "process-optimisation",
    num: "04",
    title: "Process mapping, simplification, re-engineering, and control optimisation.",
    tag: "Operational Rigour",
    deliverables: [
      "End-to-end critical workflow mapping & waste reduction",
      "Key control integration & operational risk safeguards",
      "Standard Operating Procedures (SOPs) & digital enablement",
    ],
  },
  {
    id: "transformation-roadmaps",
    num: "05",
    title: "Transformation strategies and prioritised implementation roadmaps.",
    tag: "Execution Cadence",
    deliverables: [
      "Multi-year transformation sequencing & dependency mapping",
      "Quick-win initiatives vs structural transformation milestones",
      "Resource allocation, PMO architecture, and change governance",
    ],
  },
  {
    id: "performance-frameworks",
    num: "06",
    title: "KPI, KRI, management-information, and performance-management frameworks.",
    tag: "Management Intelligence",
    deliverables: [
      "Executive dashboard & Management Information (MI) metrics",
      "Balanced KPI & Key Risk Indicator (KRI) cascades",
      "Accountability reviews & performance tracking cadences",
    ],
  },
  {
    id: "business-planning",
    num: "07",
    title: "Business planning, feasibility studies, and investment cases.",
    tag: "Commercial Feasibility",
    deliverables: [
      "Commercial market-entry & expansion feasibility assessments",
      "Five-year operational business plan & sensitivity models",
      "Investment memorandums & capital expenditure justifications",
    ],
  },
  {
    id: "board-advisory",
    num: "08",
    title: "Board and executive advisory on strategic risk, performance, and delivery.",
    tag: "Executive Counsel",
    deliverables: [
      "Independent board reviews on strategy viability & execution risk",
      "Executive sparring & delivery troubleshooting counsel",
      "Regulatory & governance fiduciary oversight assurance",
    ],
  },
];

export function StrategyServiceIndex() {
  const [activeId, setActiveId] = useState<string>("corp-strategy");

  const activeService = SERVICES.find((s) => s.id === activeId) || SERVICES[0];

  return (
    <section className="py-24 lg:py-36 bg-[#F8F7F5] border-t border-[#E2E0DD] text-[#080808]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Metadata */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFC400]" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#080808]">
                Disciplined Advisory
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#080808]">
              Core services
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#080808]/70 max-w-xl font-normal leading-relaxed">
            We design strategy and operating models that survive contact with reality, establishing clear ownership, process, and governance.
          </p>
        </div>

        {/* Interactive Master-Detail Editorial Index */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Numbered List */}
          <div className="lg:col-span-7 divide-y divide-[#E2E0DD] border-y border-[#E2E0DD]">
            {SERVICES.map((service) => {
              const isActive = service.id === activeId;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  onMouseEnter={() => setActiveId(service.id)}
                  className={`group cursor-pointer py-6 sm:py-7 transition-all duration-300 flex items-start gap-5 sm:gap-8 px-2 sm:px-4 ${
                    isActive ? "bg-white/80 shadow-xs pl-4 sm:pl-6" : "hover:bg-black/[0.02]"
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveId(service.id);
                    }
                  }}
                  aria-pressed={isActive}
                >
                  {/* Number */}
                  <span
                    className={`text-xs sm:text-sm font-mono font-bold tracking-wider pt-0.5 transition-colors duration-200 ${
                      isActive ? "text-[#351779]" : "text-[#6B6B6B] group-hover:text-[#080808]"
                    }`}
                  >
                    {service.num}
                  </span>

                  {/* Title & Tag */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#351779] bg-[#351779]/8 px-2 py-0.5 rounded-sm">
                        {service.tag}
                      </span>
                    </div>
                    <h3
                      className={`text-base sm:text-lg md:text-xl font-medium tracking-tight leading-snug transition-colors duration-200 ${
                        isActive ? "text-[#080808] font-semibold" : "text-[#080808]/85 group-hover:text-[#080808]"
                      }`}
                    >
                      {service.title}
                    </h3>

                    {/* Mobile inline deliverables */}
                    <div className="lg:hidden mt-3 pt-3 border-t border-[#E2E0DD]/60">
                      <ul className="space-y-1.5">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#080808]/75">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FFC400] mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Indicator Arrow */}
                  <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-transparent group-hover:border-[#E2E0DD] transition-all duration-200 shrink-0">
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isActive
                          ? "text-[#351779] translate-x-0.5 -translate-y-0.5"
                          : "text-[#6B6B6B] group-hover:text-[#080808]"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Editorial Inspection Panel (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E2E0DD] shadow-sm relative overflow-hidden min-h-[460px] flex flex-col justify-between">
              
              {/* Subtle architectural watermark lines */}
              <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-5">
                <Compass className="w-full h-full text-[#080808]" />
              </div>

              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E2E0DD]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#351779]">
                      SPECIFICATION REF:
                    </span>
                    <span className="text-xs font-mono font-bold text-[#080808] bg-[#F8F7F5] px-2 py-0.5 border border-[#E2E0DD]">
                      {activeService.num} / 08
                    </span>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFC400] bg-[#080808] px-2.5 py-1 rounded-sm">
                    {activeService.tag}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="space-y-6"
                  >
                    <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#080808] leading-snug">
                      {activeService.title}
                    </h4>

                    <div className="pt-2">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B6B6B] mb-3">
                        Operational Outputs & Focus:
                      </p>
                      <ul className="space-y-3">
                        {activeService.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-[#080808]/85 leading-relaxed bg-[#F8F7F5] p-3 rounded-lg border border-[#E2E0DD]/70"
                          >
                            <Check className="w-4 h-4 text-[#FFC400] mt-0.5 shrink-0" />
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E2E0DD] flex items-center justify-between text-xs text-[#6B6B6B]">
                <span>Asheron Strategy & Management Practice</span>
                <span className="font-mono">Licence 7020003</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
