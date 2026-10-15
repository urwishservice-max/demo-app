"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { X, ChevronUp, ChevronDown, RotateCw, ArrowRight, ArrowUpRight } from "lucide-react"

/**
 * ASHERON SECTOR EXPERTISE (8 SECTORS ROTARY DIAL & DIRECTORY)
 * 
 * Configured with all 8 authentic industries:
 * 1. Aviation & Aerospace
 * 2. FinTech & Banking
 * 3. Healthcare & Life Sciences
 * 4. Real Estate & Family Groups
 * 5. Supply Chain & Logistics
 * 6. Government & Public Sector
 * 7. Manufacturing & Industrial
 * 8. Retail & Consumer Tech
 */

const sectors = [
  {
    step: "01",
    id: "aviation",
    name: "Aviation & Aerospace",
    subtitle: "Safety-critical flight systems and civil aviation regulatory compliance",
    tag: "Licence 7020039 · Autonomous Flight",
    href: "/industries",
  },
  {
    step: "02",
    id: "banking",
    name: "FinTech & Banking",
    subtitle: "CBUAE regulatory alignment and sovereign data perimeter governance",
    tag: "Licence 7020003 · Quantitative Assurance",
    href: "/industries",
  },
  {
    step: "03",
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    subtitle: "Clinical protocol automation and Department of Health data safeguards",
    tag: "Licence 7020008 · Clinical Governance",
    href: "/industries",
  },
  {
    step: "04",
    id: "realestate",
    name: "Real Estate & Family Groups",
    subtitle: "Governance, decision rights, and stage-gate capital delivery as groups institutionalise",
    tag: "Licence 7020020 · PMO Stage-Gate Assurance",
    href: "/industries",
  },
  {
    step: "05",
    id: "supply-chain",
    name: "Logistics & Supply Chain",
    subtitle: "Cross-border clearance, counterparty risk, and predictive multimodal transport networks",
    tag: "Licence 7020039 · Autonomous Dispatch",
    href: "/industries",
  },
  {
    step: "06",
    id: "government",
    name: "Government & Public Sector",
    subtitle: "Sovereign AI strategy execution and verifiable UAE regulatory compliance",
    tag: "Licence 7020003 · Sovereign Governance",
    href: "/industries",
  },
  {
    step: "07",
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    subtitle: "Operational technology integration, production governance, and supply continuity",
    tag: "Licence 7020020 · Industrial Assurance",
    href: "/industries",
  },
  {
    step: "08",
    id: "retail",
    name: "Retail & Consumer Tech",
    subtitle: "Omnichannel customer data governance, pricing algorithmic audits, and automated fulfilment",
    tag: "Licence 7020008 · Consumer Assurance",
    href: "/industries",
  },
]

export function SectorDial() {
  const stepAngle = 45 // 360 / 8 = 45 deg each

  // Start with 06 (index 5) at 3 o'clock stop
  const [rotation, setRotation] = useState(-5 * stepAngle)
  const [isDragging, setIsDragging] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const dialRef = useRef<HTMLDivElement>(null)
  const dragStartMouseAngle = useRef(0)
  const dragStartRotation = useRef(0)
  const lastWheelTime = useRef(0)

  // Current active index calculated from rotation
  const snappedStep = Math.round(-rotation / stepAngle)
  const activeIndex = ((snappedStep % sectors.length) + sectors.length) % sectors.length
  const activeSector = sectors[activeIndex]

  // Spin to a step
  const dialToStep = useCallback((step: number) => {
    setRotation(-step * stepAngle)
  }, [stepAngle])

  const dialToSector = (targetIdx: number) => {
    const currentIdx = ((snappedStep % sectors.length) + sectors.length) % sectors.length
    let diff = targetIdx - currentIdx
    if (diff > 4) diff -= sectors.length
    if (diff < -4) diff += sectors.length
    dialToStep(snappedStep + diff)
  }

  const handlePrev = useCallback(() => {
    dialToStep(snappedStep - 1)
  }, [snappedStep, dialToStep])

  const handleNext = useCallback(() => {
    dialToStep(snappedStep + 1)
  }, [snappedStep, dialToStep])

  // Mouse angle helper
  const getMouseAngle = (clientX: number, clientY: number) => {
    if (!dialRef.current) return 0
    const rect = dialRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    return Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI)
  }

  // Drag & Spin Physics
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setIsPaused(true)
    dragStartMouseAngle.current = getMouseAngle(e.clientX, e.clientY)
    dragStartRotation.current = rotation
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const currentAngle = getMouseAngle(e.clientX, e.clientY)
    let delta = currentAngle - dragStartMouseAngle.current

    if (delta > 180) delta -= 360
    if (delta < -180) delta += 360

    setRotation(dragStartRotation.current + delta)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    const nearest = Math.round(-rotation / stepAngle)
    dialToStep(nearest)
  }

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true)
      setIsPaused(true)
      dragStartMouseAngle.current = getMouseAngle(e.touches[0].clientX, e.touches[0].clientY)
      dragStartRotation.current = rotation
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return
    const currentAngle = getMouseAngle(e.touches[0].clientX, e.touches[0].clientY)
    let delta = currentAngle - dragStartMouseAngle.current
    if (delta > 180) delta -= 360
    if (delta < -180) delta += 360
    setRotation(dragStartRotation.current + delta)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    const nearest = Math.round(-rotation / stepAngle)
    dialToStep(nearest)
  }

  // Wheel scroll
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const now = Date.now()
    if (now - lastWheelTime.current < 250) return

    if (e.deltaY > 15) {
      lastWheelTime.current = now
      handleNext()
    } else if (e.deltaY < -15) {
      lastWheelTime.current = now
      handlePrev()
    }
  }

  // Auto-play
  useEffect(() => {
    if (isPaused || isDragging) return

    const timer = setInterval(() => {
      setRotation((prev) => prev - stepAngle)
    }, 4500)

    return () => clearInterval(timer)
  }, [isPaused, isDragging, stepAngle])

  // Dial dimensions: Box is 400x400, Radius is 165
  const boxSize = 400
  const center = boxSize / 2
  const dialRadius = 165

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false)
        if (isDragging) handleMouseUp()
      }}
      onWheel={handleWheel}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full max-w-6xl mx-auto min-h-[500px] text-[#202020] select-none flex flex-col justify-between p-4 sm:p-6 md:p-8"
    >
      {/* 1. Header (ASHERON / Sector Expertise) */}
      <div className="relative z-30 flex items-center justify-between w-full pb-4 border-b border-[#E2E0DD]">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFC400] animate-pulse" />
          <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#080808]">
            ASHERON
          </span>
          <span className="text-[11px] font-mono text-[#8A8A85] tracking-[0.2em] uppercase pl-3 border-l border-[#E2E0DD] hidden sm:inline">
            SECTOR EXPERTISE · 08 INDUSTRIES
          </span>
        </div>

        {/* Stepper Controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              aria-label="Previous Sector"
              className="w-7 h-7 rounded-xs bg-[#E2E0DD] hover:bg-[#351779] hover:text-white text-[#080808] flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Sector"
              className="w-7 h-7 rounded-xs bg-[#FFC400] hover:bg-[#351779] hover:text-white text-[#080808] flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
          <button
            onClick={() => dialToStep(5)}
            aria-label="Reset to Government Sector"
            className="w-7 h-7 rounded-xs flex items-center justify-center text-[#888880] hover:text-[#080808] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4 stroke-[1.5]" />
          </button>
        </div>
      </div>

      {/* 2. Main 2-Column Responsive Layout */}
      <div className="w-full flex-1 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 my-auto py-6">
        
        {/* Left Column (6 cols): The Rotary Dial */}
        <div className="lg:col-span-6 flex items-center justify-center lg:justify-end overflow-hidden py-4">
          <div className="w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] flex items-center justify-center">
            <div
              ref={dialRef}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              style={{ width: `${boxSize}px`, height: `${boxSize}px` }}
              className={`relative shrink-0 select-none scale-[0.75] sm:scale-[0.9] md:scale-100 origin-center ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
            >
            {/* SVG Dashed Circular Orbit Line and Stop Marker Dot */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox={`0 0 ${boxSize} ${boxSize}`}
              fill="none"
            >
              {/* Dashed Circular Orbit */}
              <circle
                cx={center}
                cy={center}
                r={dialRadius}
                stroke="#E2E0DD"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />

              {/* Fixed Stop Indicator Dot on the Arc (at 3 o'clock: angle 0 deg) */}
              <circle
                cx={center + dialRadius}
                cy={center}
                r="4.5"
                fill="#351779"
              />
            </svg>

            {/* Rotating Disc with Numbers Around the Circumference */}
            <div
              style={{
                width: `${boxSize}px`,
                height: `${boxSize}px`,
                transform: `rotate(${rotation}deg)`,
                transition: isDragging ? "none" : "transform 650ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="relative w-full h-full"
            >
              {sectors.map((sec, idx) => {
                const itemAngle = idx * stepAngle
                const rad = (itemAngle * Math.PI) / 180

                // Position on circle
                const x = center + dialRadius * Math.cos(rad)
                const y = center + dialRadius * Math.sin(rad)

                // Angle at 3 o'clock stop
                const currentAngleAtStop = (((itemAngle + rotation) % 360) + 540) % 360 - 180
                const isAtStop = Math.abs(currentAngleAtStop) < 12

                return (
                  <div
                    key={sec.id}
                    style={{
                      position: "absolute",
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: `translate(-50%, -50%) rotate(${itemAngle}deg)`,
                    }}
                    className="pointer-events-auto"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        dialToSector(idx)
                      }}
                      title={`Dial ${sec.name}`}
                      className="focus:outline-none flex items-center justify-center p-2 cursor-pointer group"
                    >
                      <span
                        className={`font-mono transition-all duration-300 block select-none ${
                          isAtStop
                            ? "text-4xl sm:text-5xl font-black text-[#080808] scale-110 tracking-tight"
                            : "text-2xl sm:text-3xl font-bold text-[#C8C8C2] group-hover:text-[#666660] opacity-40 group-hover:opacity-90"
                        }`}
                      >
                        {sec.step}
                      </span>
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
          </div>
        </div>

        {/* Right Column (6 cols): Active Sector Title & Details */}
        <div className="lg:col-span-6 flex flex-col justify-center pl-0 lg:pl-8 max-w-xl">
          <div key={activeSector.id} className="transition-all duration-300">
            {/* Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-[#FFC400]">{activeSector.step}</span>
              <span className="w-6 h-[1px] bg-[#E2E0DD]" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#351779]">
                {activeSector.tag}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#080808] leading-tight">
              {activeSector.name}
            </h3>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-[#555555] font-normal mt-3 leading-relaxed">
              {activeSector.subtitle}
            </p>

            {/* Action Links */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={activeSector.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xs bg-[#351779] hover:bg-[#2B1263] text-white font-mono text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm"
              >
                <span>EXPLORE SECTOR</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FFC400]" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-[#080808] hover:text-[#351779] transition-colors"
              >
                <span>BOOK CONFIDENTIAL CALL →</span>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Footer */}
      <div className="relative z-30 flex flex-col sm:flex-row items-start sm:items-center justify-between w-full pt-4 border-t border-[#E2E0DD] text-[11px] sm:text-xs text-[#8A8A85] gap-3">
        <div className="flex items-center gap-2 font-mono">
          <span>Licenced by</span>
          <span className="w-3 h-[1px] bg-[#B5B5AF]" />
          <span className="font-bold text-[#080808] uppercase">Government of Dubai · Licence 7020039</span>
        </div>

        <div className="hidden lg:flex items-center gap-1.5 font-mono text-[#999994] text-[11px]">
          <RotateCw className="w-3 h-3 text-[#FFC400]" />
          <span>Spin the rotary dial or scroll to navigate</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-auto font-mono">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xs bg-[#351779] hover:bg-[#2B1263] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xs"
          >
            REQUEST A CONSULTATION ↗
          </Link>
        </div>
      </div>

    </div>
  )
}
