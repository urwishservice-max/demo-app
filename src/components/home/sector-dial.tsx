"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { X, ChevronUp, ChevronDown, RotateCw, ArrowRight } from "lucide-react"

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
    name: "Banking & Financial Services",
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
    id: "interaction",
    name: "Interaction",
    subtitle: "Persistent information and multi-touch surface",
    tag: "Licence 7020020 · PMO Stage-Gate Assurance",
    href: "/industries",
  },
  {
    step: "05",
    id: "supply-chain",
    name: "Supply Chain & Logistics",
    subtitle: "Cross-border clearance and predictive multimodal transport networks",
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
]

export function SectorDial() {
  const stepAngle = 60 // 360 / 6 = 60 deg each

  // Start with 06 (index 5) or 04 (index 3) at 3 o'clock stop
  // Initial angle for index 5 is -5 * 60 = -300 deg
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
    if (diff > 3) diff -= sectors.length
    if (diff < -3) diff += sectors.length
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
    }, 4000)

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
      {/* 1. Header (Matching Reference Screenshot Top-Left: ACHERON / Sector Expertise) */}
      <div className="relative z-30 flex items-center justify-between w-full pb-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-extrabold tracking-[0.25em] uppercase text-[#1A1A1A]">
            ACHERON
          </span>
          <span className="text-xs text-[#8A8A85] font-medium hidden sm:inline">
            / Sector Expertise
          </span>
        </div>

        {/* Top-Right Stepper Controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="w-7 h-7 rounded-full bg-[#EAEAE5] hover:bg-[#DCDCD7] text-[#202020] flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next"
              className="w-7 h-7 rounded-full bg-[#CAC32C] hover:bg-[#B5AE22] text-[#202020] flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
          <button
            onClick={() => dialToStep(5)}
            aria-label="Reset to 06"
            className="w-7 h-7 rounded-full flex items-center justify-center text-[#888880] hover:text-[#1A1A1A] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4 stroke-[1.5]" />
          </button>
        </div>
      </div>

      {/* 2. Main 2-Column Responsive Layout (NO Clipping, NO Overlap) */}
      <div className="w-full flex-1 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 my-auto py-4">
        
        {/* Left Column (5 cols): The Rotary Dial exactly as in reference */}
        <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
          <div
            ref={dialRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{ width: `${boxSize}px`, height: `${boxSize}px` }}
            className={`relative shrink-0 select-none ${
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
                stroke="#DCDCD7"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />

              {/* Fixed Stop Indicator Dot on the Arc (at 3 o'clock: angle 0 deg) */}
              <circle
                cx={center + dialRadius}
                cy={center}
                r="3.5"
                fill="#1A1A1A"
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
                const isAtStop = Math.abs(currentAngleAtStop) < 15

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
                            ? "text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] scale-110 tracking-tight"
                            : "text-2xl sm:text-3xl font-extrabold text-[#C8C8C2] group-hover:text-[#666660] opacity-50 group-hover:opacity-90"
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

        {/* Right Column (6 cols): Active Sector Title & Details */}
        <div className="lg:col-span-6 flex flex-col justify-center pl-0 lg:pl-6 max-w-xl">
          <div key={activeSector.id} className="transition-all duration-300">
            {/* Tag */}
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#888880] block mb-2">
              {activeSector.tag}
            </span>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1A1A] leading-tight">
              {activeSector.name}
            </h3>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-[15px] text-[#7A7A75] font-normal tracking-wide mt-2 leading-relaxed">
              {activeSector.subtitle}
            </p>

            {/* Action Links */}
            <div className="mt-6 flex items-center gap-4">
              <Link
                href={activeSector.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#CAC32C] hover:bg-[#B5AE22] text-[#202020] font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm"
              >
                Explore Practice
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#202020] hover:text-[#CAC32C] transition-colors"
              >
                Book confidential call →
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Footer (Matching Reference Screenshot Bottom-Left: Licenced by — Government of Dubai) */}
      <div className="relative z-30 flex flex-col sm:flex-row items-start sm:items-center justify-between w-full pt-4 text-[11px] sm:text-xs text-[#8A8A85] gap-3">
        <div className="flex items-center gap-2">
          <span>Licenced by</span>
          <span className="w-3 h-[1px] bg-[#B5B5AF]" />
          <span className="font-semibold text-[#1A1A1A]">Government of Dubai</span>
        </div>

        <div className="hidden lg:flex items-center gap-1.5 text-[#999994]">
          <RotateCw className="w-3 h-3 text-[#CAC32C]" />
          <span>Spin the rotary dial or scroll to navigate</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-auto">
          <span className="text-[10px] sm:text-[11px] text-[#A0A09B] hidden md:inline">
            © 2026 Acheron Advisory Corporation. All rights reserved.
          </span>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#5D45FD] hover:bg-[#4E35EB] text-white font-semibold text-xs transition-all duration-200 shadow-sm active:scale-95"
          >
            Apply Now
          </Link>
        </div>
      </div>

    </div>
  )
}
