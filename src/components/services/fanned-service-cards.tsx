"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, X, Sparkles, Check } from "lucide-react";

export interface PosterCardItem {
  id: string;
  volume: string;
  category: string;
  title: string;
  summary: string;
  bullets: string[];
  footerTag: string;
  theme: "white" | "teal" | "indigo" | "charcoal" | "slate" | "orange" | "grey" | "plum";
  // Custom image slot if user supplies image asset later
  posterImage?: string;
}

export const posterCardsData: PosterCardItem[] = [
  {
    id: "strategy",
    volume: "VOL. 01",
    category: "ADVISORY PRACTICE",
    title: "AI STRATEGY & READINESS",
    summary: "Assess business readiness, priority use cases, data architecture, operating risks, and the governance foundations required for responsible adoption.",
    bullets: [
      "Enterprise AI Readiness Assessment",
      "Executive Priority Alignment",
      "Operating Risk & Constraint Mapping",
      "Strategic Roadmap & Milestone Design"
    ],
    footerTag: "LICENCE 7020039",
    theme: "white"
  },
  {
    id: "discovery",
    volume: "VOL. 02",
    category: "VALUE DISCOVERY",
    title: "USE-CASE PRIORITISATION",
    summary: "Identify and rank high-impact use cases across compliance, risk, operations, customer due diligence, reporting, and executive decision support.",
    bullets: [
      "Opportunity Register Formulation",
      "Feasibility vs Impact Matrix",
      "Resource & Data Viability Audit",
      "Quick-Win vs Long-Term Scoping"
    ],
    footerTag: "ROI & FEASIBILITY",
    theme: "teal"
  },
  {
    id: "governance",
    volume: "VOL. 03",
    category: "OVERSIGHT STANDARDS",
    title: "GOVERNANCE & ASSURANCE",
    summary: "Develop proportionate policies, oversight structures, risk assessments, approval standards, human-review controls, and monitoring requirements.",
    bullets: [
      "AI Policy & Decision Rights",
      "Mandatory Human Oversight Controls",
      "Regulatory Compliance Frameworks",
      "Ethical & Safety Assurance"
    ],
    footerTag: "HUMAN-IN-THE-LOOP",
    theme: "indigo"
  },
  {
    id: "genai",
    volume: "VOL. 04",
    category: "PRODUCTIVITY SYSTEMS",
    title: "GENERATIVE AI ENABLEMENT",
    summary: "Equip teams to use generative AI safely and productively for research, drafting, analysis, knowledge retrieval, and workflow acceleration.",
    bullets: [
      "Approved Enterprise Prompt Libraries",
      "Context & Knowledge Assistants",
      "Regulatory Drafting Copilots",
      "Data Leakage Safeguards"
    ],
    footerTag: "ENTERPRISE AGENTS",
    theme: "charcoal"
  },
  {
    id: "vendor",
    volume: "VOL. 05",
    category: "DUE DILIGENCE",
    title: "VENDOR & MODEL EVALUATION",
    summary: "Evaluate AI vendors, frontier models, data-processing practices, security architectures, contractual protections, and implementation risks.",
    bullets: [
      "Frontier Model Benchmarking",
      "Data Privacy & Retention Reviews",
      "SLA & Contractual Risk Terms",
      "Hosting & Sovereignty Audits"
    ],
    footerTag: "THIRD-PARTY RISK",
    theme: "slate"
  },
  {
    id: "workflow",
    volume: "VOL. 06",
    category: "PROCESS OPTIMISATION",
    title: "WORKFLOW SYNTHESIS",
    summary: "Redesign selected processes and define agent-assisted or automated workflows, controls, escalation routes, audit trails, and performance measures.",
    bullets: [
      "Agent-Assisted Process Re-engineering",
      "Escalation & Exception Routing",
      "Audit Trail & Logging Architecture",
      "Cycle-Time Compression"
    ],
    footerTag: "AGENTIC PIPELINES",
    theme: "orange"
  },
  {
    id: "training",
    volume: "VOL. 07",
    category: "WORKFORCE FLUENCY",
    title: "TRAINING & CAPABILITY",
    summary: "Deliver role-specific training, responsible-use guidance, practical playbooks, and leadership workshops to embed secure AI adoption.",
    bullets: [
      "Role-Based Prompt Engineering",
      "Executive & Board Briefings",
      "Operational Playbooks & Guides",
      "Continuous Capability Metrics"
    ],
    footerTag: "HUMAN CAPABILITY",
    theme: "grey"
  },
  {
    id: "oversight",
    volume: "VOL. 08",
    category: "INDEPENDENT AUDIT",
    title: "IMPLEMENTATION ASSURANCE",
    summary: "Provide independent assurance across AI implementation, stage-gate testing, control design, operational readiness, and post-launch monitoring.",
    bullets: [
      "Stage-Gate Implementation Checks",
      "Model Drift & Output Validation",
      "Safety Verification Runs",
      "Post-Launch Audit Reports"
    ],
    footerTag: "STAGE-GATE AUDIT",
    theme: "plum"
  }
];

// Helper to render high-fashion editorial poster graphics matching the reference image
function PosterArtwork({ item }: { item: PosterCardItem }) {
  if (item.posterImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={item.posterImage}
        alt={item.title}
        className="w-full h-full object-cover rounded-t-sm"
      />
    );
  }

  // 1. WHITE: Bold red Swiss typographical ligature
  if (item.theme === "white") {
    return (
      <div className="relative w-full h-full bg-[#FAFAFA] flex flex-col items-center justify-center overflow-hidden">
        {/* Fine background grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(#0F172A 1px, transparent 1px)",
            backgroundSize: "12px 12px"
          }}
        />
        {/* Red Typographic Mark */}
        <div className="relative z-10 text-[#E11D48] select-none font-serif text-7xl font-bold tracking-tighter italic leading-none">
          fi
        </div>
        <div className="absolute bottom-2 left-3 text-[9px] font-mono text-neutral-400 font-medium">
          GRID 01 / ASHERON
        </div>
      </div>
    );
  }

  // 2. TEAL: Bauhaus Geometric Color-Block Composition
  if (item.theme === "teal") {
    return (
      <div className="relative w-full h-full bg-[#0A2E33] grid grid-cols-2 grid-rows-2 overflow-hidden">
        <div className="bg-[#0D444B] flex items-center justify-center p-2">
          <div className="w-8 h-8 rounded-full border border-teal-300/30" />
        </div>
        <div className="bg-[#F87171] relative flex items-center justify-center">
          <div className="w-7 h-7 bg-[#EA580C] rounded-full" />
        </div>
        <div className="bg-[#111827] flex items-center justify-center">
          <div className="w-6 h-6 rotate-45 border border-white/20" />
        </div>
        <div className="bg-[#134E58] relative flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-[#FBBF24]" />
        </div>
      </div>
    );
  }

  // 3. INDIGO: Faceted Radiant 3D Gold Prism / Crystal
  if (item.theme === "indigo") {
    return (
      <div className="relative w-full h-full bg-gradient-to-b from-[#1E1B4B] via-[#0F172A] to-[#090D16] flex items-center justify-center overflow-hidden">
        {/* Radial ambient glow */}
        <div className="absolute w-28 h-28 rounded-full bg-[#F59E0B]/25 blur-xl" />
        {/* Faceted geometric diamond SVG */}
        <svg viewBox="0 0 100 100" className="relative z-10 w-24 h-24 drop-shadow-[0_10px_25px_rgba(245,158,11,0.5)]">
          <polygon points="50,15 80,40 50,85 20,40" fill="#D97706" />
          <polygon points="50,15 80,40 50,48" fill="#FBBF24" />
          <polygon points="50,15 20,40 50,48" fill="#FDE68A" />
          <polygon points="50,48 80,40 50,85" fill="#B45309" />
          <polygon points="50,48 20,40 50,85" fill="#F59E0B" />
        </svg>
      </div>
    );
  }

  // 4. CHARCOAL: Radiant Spectral Fluid Iridescent Wave
  if (item.theme === "charcoal") {
    return (
      <div className="relative w-full h-full bg-[#0D0F14] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-90 blur-md scale-110"
          style={{
            background: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 30%, #EC4899 70%, #F59E0B 100%)"
          }}
        />
        <div className="relative z-10 w-20 h-20 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
        </div>
      </div>
    );
  }

  // 5. SLATE: Architectural Rhythm Bars & Balance Markers
  if (item.theme === "slate") {
    return (
      <div className="relative w-full h-full bg-[#E2E8F0] p-3 flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between text-[8px] font-mono text-slate-500 font-bold">
          <span>STANDARD 05</span>
          <span>AUDIT 100%</span>
        </div>
        <div className="grid grid-cols-7 gap-1 h-20 items-end px-1">
          {[40, 65, 85, 100, 75, 55, 35].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className="bg-[#0F172A] rounded-t-sm opacity-90 transition-all hover:bg-[#E11D48]"
            />
          ))}
        </div>
        <div className="h-[2px] w-full bg-[#0F172A]" />
      </div>
    );
  }

  // 6. ORANGE: Kinetic Ascending Luminous Gradient Capsules
  if (item.theme === "orange") {
    return (
      <div className="relative w-full h-full bg-gradient-to-tr from-[#EA580C] to-[#C2410C] flex items-center justify-center overflow-hidden">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="absolute w-20 h-20 rounded-full bg-[#FDE047] opacity-80 blur-sm -translate-y-4" />
          <div className="absolute w-16 h-16 rounded-full bg-[#FB923C] opacity-90 translate-x-2" />
          <div className="absolute w-12 h-12 rounded-full bg-[#FFF] opacity-95 translate-y-3" />
          {/* Kinetic light rays */}
          <div className="absolute top-2 right-2 w-10 h-[2px] bg-white/60 rotate-45" />
          <div className="absolute top-6 right-1 w-6 h-[2px] bg-white/60 rotate-45" />
        </div>
      </div>
    );
  }

  // 7. GREY: Minimalist Studio 3D Floating Spheres
  if (item.theme === "grey") {
    return (
      <div className="relative w-full h-full bg-[#27272A] flex items-center justify-center overflow-hidden">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#71717A] via-[#3F3F46] to-[#18181B] shadow-[0_12px_24px_rgba(0,0,0,0.6)]" />
          <div className="absolute top-1 right-2 w-8 h-8 rounded-full bg-gradient-to-br from-[#A1A1AA] to-[#52525B] shadow-md" />
          <div className="absolute bottom-1 left-2 w-6 h-6 rounded-full bg-gradient-to-br from-[#52525B] to-[#27272A] shadow-sm" />
        </div>
      </div>
    );
  }

  // 8. PLUM: Interconnected Neural Constellation Graph
  return (
    <div className="relative w-full h-full bg-[#2E1065] flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-purple-300">
        <circle cx="50" cy="30" r="8" fill="#C084FC" />
        <circle cx="25" cy="70" r="7" fill="#A855F7" />
        <circle cx="75" cy="70" r="7" fill="#A855F7" />
        <line x1="50" y1="30" x2="25" y2="70" stroke="#E9D5FF" strokeWidth="2.5" />
        <line x1="50" y1="30" x2="75" y2="70" stroke="#E9D5FF" strokeWidth="2.5" />
        <line x1="25" y1="70" x2="75" y2="70" stroke="#E9D5FF" strokeWidth="2" strokeDasharray="3 2" />
      </svg>
    </div>
  );
}

export function FannedServiceCards() {
  const [selectedCard, setSelectedCard] = useState<PosterCardItem | null>(null);
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"isometric" | "flat">("isometric");

  const containerRef = useRef<HTMLElement>(null);

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Fluid physics spring for buttery smooth scroll-driven reaction
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    restDelta: 0.0005,
  });

  // Dynamic 3D isometric plane movement driven by scroll
  const planeRotateX = useTransform(smoothProgress, [0, 1], [34, 18]);
  const planeRotateY = useTransform(smoothProgress, [0, 1], [-26, -13]);
  const planeRotateZ = useTransform(smoothProgress, [0, 1], [18, 9]);
  const planeY = useTransform(smoothProgress, [0, 1], [50, -50]);
  const planeScale = useTransform(smoothProgress, [0, 0.5, 1], [0.96, 1.02, 0.98]);

  // Staggered column parallax offsets to enhance 3D spatial depth
  const colY0 = useTransform(smoothProgress, [0, 1], [25, -25]);
  const colY1 = useTransform(smoothProgress, [0, 1], [-30, 30]);
  const colY2 = useTransform(smoothProgress, [0, 1], [35, -35]);
  const colY3 = useTransform(smoothProgress, [0, 1], [-25, 25]);
  const colTransforms = [colY0, colY1, colY2, colY3];

  const renderPosterCard = (item: PosterCardItem, isIso: boolean) => {
    const isHovered = activeHoverId === item.id;
    const isDarkCard = item.theme !== "white" && item.theme !== "slate";

    return (
      <div
        key={item.id}
        onClick={() => setSelectedCard(item)}
        onMouseEnter={() => setActiveHoverId(item.id)}
        onMouseLeave={() => setActiveHoverId(null)}
        style={{
          transform:
            isIso && isHovered
              ? "translateZ(50px) translateY(-14px) scale(1.06)"
              : "translateZ(0px)",
          transformStyle: "preserve-3d",
          transition: "transform 0.35s cubic-bezier(0.2, 0.9, 0.3, 1), box-shadow 0.35s ease"
        }}
        className={`relative w-full aspect-[1/1.42] rounded-md cursor-pointer select-none group flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden ${
          isHovered
            ? "shadow-[0_30px_70px_rgba(0,0,0,0.85)] ring-1 ring-white/40"
            : "shadow-[0_16px_35px_rgba(0,0,0,0.55)] border border-white/10"
        } ${isDarkCard ? "text-white" : "text-[#0F172A]"}`}
      >
        {/* Base Card Background Theme */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              item.theme === "white"
                ? "#FAFAFA"
                : item.theme === "slate"
                ? "#E2E8F0"
                : item.theme === "teal"
                ? "#092428"
                : item.theme === "indigo"
                ? "#131429"
                : item.theme === "charcoal"
                ? "#0E1015"
                : item.theme === "orange"
                ? "#9A3412"
                : item.theme === "grey"
                ? "#1C1C1E"
                : "#1E0B38"
          }}
        />

        {/* POSTER HEADER: Category & Title */}
        <div className="relative z-10 space-y-1">
          <div
            className={`text-[8px] sm:text-[9px] font-mono tracking-widest uppercase font-semibold ${
              isDarkCard ? "text-white/60" : "text-slate-500"
            }`}
          >
            {item.category}
          </div>
          <h3 className="text-xs sm:text-sm font-black tracking-tight leading-tight uppercase font-sans line-clamp-2">
            {item.title}
          </h3>
        </div>

        {/* POSTER CENTER ARTWORK */}
        <div className="relative z-10 flex-1 my-2 rounded-sm overflow-hidden border border-black/10">
          <PosterArtwork item={item} />
        </div>

        {/* POSTER FOOTER */}
        <div
          className={`relative z-10 pt-1.5 flex items-center justify-between text-[8px] sm:text-[9px] font-mono font-medium ${
            isDarkCard ? "text-white/70" : "text-slate-600"
          }`}
        >
          <span>{item.footerTag}</span>
          <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <span>INSPECT</span>
            <ArrowUpRight className="w-2.5 h-2.5" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={containerRef} className="py-24 sm:py-32 bg-[#0B0D12] text-white relative overflow-hidden border-b border-white/[0.08]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[#0B0D12] pointer-events-none" />
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 right-10 w-[550px] h-[550px] rounded-full bg-amber-500/[0.03] blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* LEFT EDITORIAL COLUMN */}
          <div className="lg:col-span-4 xl:col-span-3 ">
            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase text-white mb-4 leading-tight font-sans">
              Core Services
            </h2>

            {/* Editorial Description */}
            <p className="text-neutral-400 text-sm font-light leading-relaxed mb-8">
              Eight operational advisory disciplines engineered for enterprise AI. We replace isolated experimentation with controlled operating models, human-accountable governance, and auditable delivery.
            </p>

            {/* View Mode Switcher */}
            <div className="inline-flex items-center gap-2 p-1 rounded-lg bg-white/[0.05] border border-white/10">
              <button
                onClick={() => setViewMode("isometric")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  viewMode === "isometric"
                    ? "bg-white/15 text-white shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                3D Isometric
              </button>
              <button
                onClick={() => setViewMode("flat")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  viewMode === "flat"
                    ? "bg-white/15 text-white shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Flat Posters
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D ISOMETRIC POSTER WALL (Matching Reference Image) */}
          <div className="lg:col-span-8 xl:col-span-9 flex justify-center items-center py-6 sm:py-10 overflow-visible">
            <div
              className={`w-full max-w-[880px] transition-all duration-700 ${
                viewMode === "isometric" ? "perspective-[1400px]" : ""
              }`}
            >
              {viewMode === "isometric" ? (
                /* THE ISOMETRIC GRID PLANE (Scroll-Driven Dynamic 3D Movement) */
                <motion.div
                  style={{
                    rotateX: planeRotateX,
                    rotateY: planeRotateY,
                    rotateZ: planeRotateZ,
                    y: planeY,
                    scale: planeScale,
                    transformStyle: "preserve-3d"
                  }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-7 origin-center"
                >
                  {posterCardsData.map((item, index) => {
                    const colIndex = index % 4;
                    return (
                      <motion.div
                        key={item.id}
                        style={{
                          y: colTransforms[colIndex],
                          transformStyle: "preserve-3d"
                        }}
                      >
                        {renderPosterCard(item, true)}
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                /* 2D FLAT POSTERS GRID */
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-7">
                  {posterCardsData.map((item) => (
                    <div key={item.id}>
                      {renderPosterCard(item, false)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* DETAIL INSPECTION MODAL */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl rounded-2xl bg-[#13161F] border border-white/15 p-6 sm:p-8 shadow-2xl text-white">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CAC32C]/15 text-[#CAC32C] text-xs font-mono uppercase mb-4">
              <span>{selectedCard.volume}</span>
              <span>&bull;</span>
              <span>{selectedCard.category}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              {selectedCard.title}
            </h3>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
              {selectedCard.summary}
            </p>

            <div className="space-y-3 mb-8">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Operating Deliverables &amp; Controls
              </div>
              <ul className="space-y-2">
                {selectedCard.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                    <Check className="w-4 h-4 text-[#CAC32C] mt-0.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
              <span className="font-mono text-neutral-400">{selectedCard.footerTag}</span>
              <button
                onClick={() => setSelectedCard(null)}
                className="px-4 py-2 rounded-lg bg-[#CAC32C] text-[#0F172A] font-semibold text-xs tracking-wide uppercase hover:bg-[#B5AE22] transition-colors"
              >
                Close Inspection
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
