"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Copy, Check, Sparkles, Sliders, Layers, Eye, RefreshCw, Sun, Moon, Zap, ArrowUpRight } from "lucide-react"

interface BranchSpec {
  id: string
  name: string
  image: string
  aspectRatio: string
  title: string
  scientificName: string
  description: string
  texture: string
  lighting: string
  prompt: string
}

const branches: BranchSpec[] = [
  {
    id: "branch-1",
    name: "SPECIMEN A",
    image: "/tree.png",
    aspectRatio: "aspect-[16/10]",
    title: "ARBORIS",
    scientificName: "Ramus Sylvestris · Lichen Clad",
    description: "Centuries-old fallen gnarled oak branch cloaked in dense velvet bryophyte moss with fresh emergent tender shoots.",
    texture: "Ultra-High PBR Bark Fissures & Micro-Spore Velvet",
    lighting: "Directional 45° Studio Key + Soft Cyan Rim Light",
    prompt: "Floating driftwood fragment, gnarled wood with deep grooves, covered in soft green moss and lichens, sprouting delicate violet wildflowers, embedded iridescent crystal shards (amethyst/obsidian), small debris pieces orbiting, photoreal macro product render, ultra-detailed PBR materials, crisp edges, studio lighting with soft rim light, clean seamless grey gradient background, gentle soft shadow below, centered composition, object not touching frame, sharp focus, no motion blur --chaos 8 --ar 16:9 --style raw --v 7 --stylize 120",
  },
  {
    id: "branch-2",
    name: "SPECIMEN B",
    image: "/tre1.png",
    aspectRatio: "aspect-[2/1]",
    title: "FLORA",
    scientificName: "Driftwood Lignum · Bryophyta",
    description: "Elongated diagonal timber bough accented with sprawling vine tendrils and vivacious spring leaves reaching toward studio light.",
    texture: "Rough Macro Bark Relief & Translucent Foliage Subsurface",
    lighting: "Dual Rim Contouring + Specular Dewdrop Highlights",
    prompt: "A floating ancient forest tree branch suspended in zero-gravity studio space, wrapped in deep emerald moss and radiant young foliage shoots, soft silver rim lighting outlining gnarled bark edges, hyper-detailed organic macro photography, clean warm neutral grey backdrop, 8k resolution, cinematic post-processing --chaos 5 --ar 16:9 --v 7 --stylize 150",
  },
]

const lightingModes = [
  { id: "studio", name: "Studio Rim", bgClass: "from-[#ECECE9] via-[#E2E2DE] to-[#D5D5CF]", glow: "rgba(212, 185, 36, 0.15)", icon: Sun },
  { id: "emerald", name: "Biolume", bgClass: "from-[#E6ECE8] via-[#DAE4DE] to-[#CAD7D0]", glow: "rgba(34, 197, 94, 0.18)", icon: Sparkles },
  { id: "noir", name: "Deep Obsidian", bgClass: "from-[#1A1A1C] via-[#141416] to-[#0D0D0E]", glow: "rgba(100, 200, 255, 0.15)", icon: Moon },
]

export default function RimTreeConceptPage() {
  const [selectedBranch, setSelectedBranch] = useState<BranchSpec>(branches[0])
  const [activeLighting, setActiveLighting] = useState(lightingModes[0])
  const [activePin, setActivePin] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isPromptExpanded, setIsPromptExpanded] = useState(false)

  // Handle subtle 3D mouse parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e
    const { width, height, left, top } = currentTarget.getBoundingClientRect()
    const x = ((clientX - left) / width - 0.5) * 20
    const y = ((clientY - top) / height - 0.5) * 20
    setMousePos({ x, y })
  }

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(selectedBranch.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const isDark = activeLighting.id === "noir"

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative min-h-[100dvh] h-[100dvh] w-full overflow-hidden select-none flex flex-col justify-between transition-colors duration-700 font-sans ${
        isDark ? "bg-[#111112] text-white" : "bg-[#EAEAE6] text-[#191919]"
      }`}
    >
      {/* 1. ARCHITECTURAL BACKGROUND GRADIENT & RADIAL STUDIO LIGHT */}
      <div
        className={`pointer-events-none absolute inset-0 z-0 bg-gradient-to-b ${activeLighting.bgClass} transition-all duration-700`}
      />

      {/* Dynamic Radial Rim Glow anchored to central specimen */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[140px] transition-all duration-700 z-0"
        style={{ background: activeLighting.glow }}
      />

      {/* Minimal Architectural Grid Backdrop */}
      <div
        className={`pointer-events-none absolute inset-0 z-0 opacity-[0.035] transition-opacity duration-500`}
        style={{
          backgroundImage: `
            linear-gradient(to right, ${isDark ? "#ffffff" : "#000000"} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? "#ffffff" : "#000000"} 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 2. REGISTRATION MARKS (FOUR CORNERS) */}
      <div className="pointer-events-none absolute top-4 left-4 z-30 opacity-40 font-mono text-[9px] tracking-widest">
        + 00.1 / SPECIMEN
      </div>
      <div className="pointer-events-none absolute top-4 right-4 z-30 opacity-40 font-mono text-[9px] tracking-widest">
        LAT: 25.2048° N · LON: 55.2708° E +
      </div>
      <div className="pointer-events-none absolute bottom-4 left-4 z-30 opacity-40 font-mono text-[9px] tracking-widest">
        + MIDJOURNEY v7.0 ARCHIVE
      </div>
      <div className="pointer-events-none absolute bottom-4 right-4 z-30 opacity-40 font-mono text-[9px] tracking-widest">
        MACRO PBR RENDER +
      </div>

      {/* 3. TOP NAVIGATION & EDITORIAL BAR */}
      <header className="relative z-30 w-full px-6 sm:px-10 lg:px-14 pt-6 pb-4 flex items-center justify-between border-b border-black/10 dark:border-white/10 shrink-0">
        
        {/* Left: Brand / Concept Label */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="group flex flex-col"
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase group-hover:text-[#D4B924] transition-colors">
              ACHERON · LABS
            </span>
            <span className="text-[9px] font-mono tracking-widest opacity-50 uppercase">
              STUDIO EXPERIMENT · RIM UI
            </span>
          </Link>

          <span className="hidden sm:inline-block w-[1px] h-6 bg-black/15 dark:bg-white/15" />

          {/* Specimen Switcher */}
          <div className="hidden sm:flex items-center gap-1.5 p-1 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md">
            {branches.map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedBranch(b)}
                className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all ${
                  selectedBranch.id === b.id
                    ? "bg-[#191919] text-white dark:bg-white dark:text-black shadow-sm font-bold"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>
        </div>

        {/* Center: Live Time / Seed Tag */}
        <div className="hidden lg:flex items-center gap-3 text-[10px] font-mono tracking-[0.2em] opacity-60">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4B924] animate-pulse" />
          <span>SEED: 88491029</span>
          <span>·</span>
          <span>CHAOS: 08</span>
          <span>·</span>
          <span>RAW: v7.0</span>
        </div>

        {/* Right: Lighting Modes + Navigation Links */}
        <div className="flex items-center gap-3">
          {/* Lighting Mode Picker */}
          <div className="flex items-center gap-1 p-1 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md">
            {lightingModes.map((lm) => {
              const Icon = lm.icon
              const isSelected = activeLighting.id === lm.id
              return (
                <button
                  key={lm.id}
                  onClick={() => setActiveLighting(lm)}
                  title={lm.name}
                  className={`p-1.5 rounded-full transition-all ${
                    isSelected
                      ? "bg-[#191919] text-white dark:bg-white dark:text-black shadow-sm"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </button>
              )
            })}
          </div>

          {/* Quick Exit to Main Site */}
          <Link
            href="/about"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-black/15 dark:border-white/15 bg-white/40 dark:bg-black/40 text-[10px] font-mono tracking-widest uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-sm"
          >
            <span>ABOUT</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </header>

      {/* 4. MAIN CENTRAL STAGE (MASSIVE BACKGROUND TYPOGRAPHY + FLOATING SPECIMEN) */}
      <main className="relative flex-1 flex items-center justify-center min-h-0 w-full px-4 sm:px-8">
        
        {/* MASSIVE BACKGROUND TYPOGRAPHY (FLORA / ARBORIS) */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none z-0">
          <h1
            className={`font-black tracking-[-0.06em] text-[18vw] leading-none uppercase transition-all duration-700 opacity-[0.08] dark:opacity-[0.14]`}
          >
            {selectedBranch.title}
          </h1>
        </div>

        {/* FLOATING CENTRAL DRIFTWOOD SPECIMEN CONTAINER */}
        <div
          className="relative z-10 w-full max-w-[1100px] flex items-center justify-center transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0px) rotate(${mousePos.x * 0.15}deg)`,
          }}
        >
          {/* Main Specimen Image with Ambient Glow and Shadow */}
          <div className="relative w-full max-h-[calc(100dvh-260px)] aspect-[16/10] flex items-center justify-center">
            
            {/* Ground Contact Shadow */}
            <div
              className={`absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[70%] h-14 rounded-[100%] blur-2xl transition-opacity duration-500 ${
                isDark ? "bg-black/90 opacity-90" : "bg-black/25 opacity-70"
              }`}
            />

            <Image
              src={selectedBranch.image}
              alt={selectedBranch.scientificName}
              fill
              priority
              sizes="(max-width: 1200px) 90vw, 1100px"
              className="object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] select-none transition-all duration-500"
            />

            {/* INTERACTIVE HOTSPOT PIN 1: BARK DETAIL */}
            <div className="absolute top-[28%] left-[24%] z-20 group">
              <button
                onClick={() => setActivePin(activePin === 1 ? null : 1)}
                className="relative flex items-center justify-center w-7 h-7 rounded-full bg-black/80 dark:bg-white/90 text-white dark:text-black border border-white/40 shadow-xl cursor-pointer hover:scale-110 transition-transform"
              >
                <span className="w-2 h-2 rounded-full bg-[#D4B924] animate-ping absolute" />
                <span className="text-[10px] font-mono font-bold">01</span>
              </button>
              
              {/* Tooltip Card */}
              <div
                className={`absolute left-9 -top-3 w-52 p-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-2xl transition-all duration-300 pointer-events-auto ${
                  activePin === 1 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
                }`}
              >
                <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#D4B924] mb-1">
                  TEXTURE LAYER
                </div>
                <div className="text-xs font-bold leading-tight mb-1">
                  Old-Growth Oak Bark
                </div>
                <p className="text-[10.5px] opacity-70 leading-relaxed">
                  Deep axial crevices with micro-spores and dry moss lichens clinging to the bark ridges.
                </p>
              </div>
            </div>

            {/* INTERACTIVE HOTSPOT PIN 2: VELVET MOSS */}
            <div className="absolute top-[42%] left-[48%] z-20 group">
              <button
                onClick={() => setActivePin(activePin === 2 ? null : 2)}
                className="relative flex items-center justify-center w-7 h-7 rounded-full bg-black/80 dark:bg-white/90 text-white dark:text-black border border-white/40 shadow-xl cursor-pointer hover:scale-110 transition-transform"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping absolute" />
                <span className="text-[10px] font-mono font-bold">02</span>
              </button>

              <div
                className={`absolute left-9 -top-3 w-52 p-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-2xl transition-all duration-300 pointer-events-auto ${
                  activePin === 2 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
                }`}
              >
                <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-500 mb-1">
                  BIOLUMINESCENCE
                </div>
                <div className="text-xs font-bold leading-tight mb-1">
                  Bryophyte Micro-Cushion
                </div>
                <p className="text-[10.5px] opacity-70 leading-relaxed">
                  Hydrated forest moss cushions capturing soft lateral specular light with high subsurface scattering.
                </p>
              </div>
            </div>

            {/* INTERACTIVE HOTSPOT PIN 3: FRESH BUD SHOOTS */}
            <div className="absolute top-[35%] right-[26%] z-20 group">
              <button
                onClick={() => setActivePin(activePin === 3 ? null : 3)}
                className="relative flex items-center justify-center w-7 h-7 rounded-full bg-black/80 dark:bg-white/90 text-white dark:text-black border border-white/40 shadow-xl cursor-pointer hover:scale-110 transition-transform"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping absolute" />
                <span className="text-[10px] font-mono font-bold">03</span>
              </button>

              <div
                className={`absolute right-9 -top-3 w-52 p-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-2xl transition-all duration-300 pointer-events-auto ${
                  activePin === 3 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
                }`}
              >
                <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-cyan-500 mb-1">
                  NEW EMERGENCE
                </div>
                <div className="text-xs font-bold leading-tight mb-1">
                  Vigorous Green Leaflets
                </div>
                <p className="text-[10.5px] opacity-70 leading-relaxed">
                  Sub-millimeter tender foliage exhibiting leaf vein translucency under directional rim radiance.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* LEFT FLOATING METRIC OVERLAY (FLORA SPECS) */}
        <div className="hidden xl:flex absolute left-14 top-1/2 -translate-y-1/2 flex-col gap-5 z-20 max-w-[240px]">
          <div>
            <span className="text-[10px] font-mono font-semibold tracking-widest opacity-50 uppercase block mb-1">
              SPECIMEN CLASSIFICATION
            </span>
            <h2 className="text-lg font-bold tracking-tight leading-tight">
              {selectedBranch.scientificName}
            </h2>
          </div>

          <p className="text-xs opacity-75 leading-relaxed">
            {selectedBranch.description}
          </p>

          <div className="space-y-2 border-t border-black/10 dark:border-white/10 pt-3 text-[11px] font-mono">
            <div className="flex justify-between">
              <span className="opacity-50">TEXTURE</span>
              <span className="font-semibold text-right">4K PBR</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50">LIGHTING</span>
              <span className="font-semibold text-right">Soft Rim Light</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50">STATUS</span>
              <span className="font-semibold text-emerald-500">ISOLATED PNG</span>
            </div>
          </div>
        </div>

        {/* RIGHT FLOATING METRIC OVERLAY (CONTROLS & SPECS) */}
        <div className="hidden xl:flex absolute right-14 top-1/2 -translate-y-1/2 flex-col gap-4 z-20 max-w-[240px] text-right">
          <div>
            <span className="text-[10px] font-mono font-semibold tracking-widest opacity-50 uppercase block mb-1">
              LIGHTING PROFILE
            </span>
            <div className="text-sm font-bold tracking-tight">
              {activeLighting.name}
            </div>
            <div className="text-[11px] font-mono opacity-60 mt-0.5">
              Kelvin: 5600K · Rim: +2.4EV
            </div>
          </div>

          <div className="border-t border-black/10 dark:border-white/10 pt-3">
            <span className="text-[10px] font-mono font-semibold tracking-widest opacity-50 uppercase block mb-2">
              QUICK SELECT
            </span>
            <div className="flex flex-col gap-2">
              {branches.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBranch(b)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    selectedBranch.id === b.id
                      ? "border-black dark:border-white bg-black/5 dark:bg-white/10 shadow-sm"
                      : "border-black/10 dark:border-white/10 hover:border-black/30"
                  }`}
                >
                  <div className="text-xs font-bold">{b.name}</div>
                  <div className="text-[10px] font-mono opacity-60 line-clamp-1">
                    {b.title} · {b.scientificName}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

      </main>

      {/* 5. BOTTOM EDITORIAL PROMPT DOCK (LIKE THE REFERENCE "PROMT + PNG" POSTER) */}
      <footer className="relative z-30 w-full px-6 sm:px-10 lg:px-14 pb-5 pt-3 border-t border-black/10 dark:border-white/10 shrink-0 bg-white/30 dark:bg-black/30 backdrop-blur-md">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          {/* Prompt Label & Copy Action */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 text-[10px] font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#D4B924]" />
              <span>PROMPT + PNG</span>
            </div>

            <button
              onClick={handleCopyPrompt}
              className="group flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#191919] text-white dark:bg-white dark:text-black text-[10px] font-mono tracking-wider uppercase transition-all hover:bg-[#D4B924] hover:text-black shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400 dark:text-emerald-600" />
                  <span>COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 transition-transform group-hover:scale-110" />
                  <span>COPY PROMPT</span>
                </>
              )}
            </button>
          </div>

          {/* Prompt Verbatim Text Container */}
          <div className="flex-1 min-w-0 max-w-3xl">
            <p
              onClick={() => setIsPromptExpanded(!isPromptExpanded)}
              className={`text-[11px] font-mono leading-relaxed opacity-80 cursor-pointer hover:opacity-100 transition-all ${
                isPromptExpanded ? "line-clamp-none" : "line-clamp-2"
              }`}
              title="Click to toggle full prompt"
            >
              <span className="font-bold text-[#D4B924] mr-2">/imagine:</span>
              {selectedBranch.prompt}
            </p>
          </div>

          {/* Model Stats Pills */}
          <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono tracking-wider opacity-75 shrink-0">
            <span className="px-2 py-0.5 rounded border border-black/10 dark:border-white/10">--ar 16:9</span>
            <span className="px-2 py-0.5 rounded border border-black/10 dark:border-white/10">--v 7</span>
            <span className="px-2 py-0.5 rounded border border-black/10 dark:border-white/10">--stylize 120</span>
          </div>

        </div>
      </footer>

    </div>
  )
}
