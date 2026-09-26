"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface BeliefItem {
  id: string
  number: string
  tag: string
  statement: string
  elaboration: string
  image: string
  imageAlt: string
}

const beliefs: BeliefItem[] = [
  {
    id: "01",
    number: "01",
    tag: "REALISM",
    statement: "Advice is only valuable if it can be implemented within the client's real constraints.",
    elaboration: "We size operating models and governance to real operational realities, not theoretical ideals.",
    image: "/about/belief_1.jpg",
    imageAlt: "Architectural concrete structure with bold yellow geometric facet",
  },
  {
    id: "02",
    number: "02",
    tag: "DUALITY",
    statement: "Innovation and control are not opposites; the strongest organisations design both at once.",
    elaboration: "Speed without governance creates vulnerability; governance without speed breeds obsolescence.",
    image: "/about/belief_2.jpg",
    imageAlt: "3D architectural spiral cone with yellow and graphite ridges",
  },
  {
    id: "03",
    number: "03",
    tag: "TRANSFER",
    statement: "Capability must transfer to the client team, not remain with the adviser.",
    elaboration: "We build self-sustaining competence within leadership and operations so progress continues after handoff.",
    image: "/about/belief_3.jpg",
    imageAlt: "Curving concrete architectural hall with sweeping yellow light",
  },
  {
    id: "04",
    number: "04",
    tag: "INTEGRITY",
    statement: "Independence and discretion are conditions of the work, not features of it.",
    elaboration: "We provide clear, unvarnished guidance protected by rigorous confidentiality and fiduciary clarity.",
    image: "/about/belief_4.jpg",
    imageAlt: "Matte black curved architectural sculpture with inner yellow glow",
  },
]

export function WhatWeBelieve() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  const stepRef = useRef(0)
  const isLockedRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const totalScrollable = rect.height - window.innerHeight
      if (totalScrollable <= 0) return

      const currentScroll = -rect.top
      const rawProgress = Math.max(0, Math.min(1, currentScroll / totalScrollable))
      setProgress(rawProgress)

      // Calculate index 0 to 3 based on scroll position
      const index = Math.min(3, Math.floor(rawProgress * 4))
      setActiveIndex(index)
      stepRef.current = index
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToStep = (index: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const sectionTop = rect.top + scrollTop
    const totalScrollable = rect.height - window.innerHeight
    const targetFractions = [0.08, 0.36, 0.64, 0.94]
    const targetScroll = sectionTop + targetFractions[index] * totalScrollable
    stepRef.current = index
    setActiveIndex(index)
    window.scrollTo({ top: targetScroll, behavior: "smooth" })
  }

  // Checkpoint locking: catches heavy scroll and locks to next belief without skipping
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const inView = rect.top <= 15 && rect.bottom >= window.innerHeight - 15
      if (!inView) return

      if (e.deltaY > 18) {
        if (stepRef.current < 3) {
          e.preventDefault()
          if (isLockedRef.current) return
          isLockedRef.current = true
          const next = Math.min(3, stepRef.current + 1)
          scrollToStep(next)
          setTimeout(() => {
            isLockedRef.current = false
          }, 650)
        }
      } else if (e.deltaY < -18) {
        if (stepRef.current > 0) {
          e.preventDefault()
          if (isLockedRef.current) return
          isLockedRef.current = true
          const prev = Math.max(0, stepRef.current - 1)
          scrollToStep(prev)
          setTimeout(() => {
            isLockedRef.current = false
          }, 650)
        }
      }
    }

    let touchStartY = 0
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const inView = rect.top <= 15 && rect.bottom >= window.innerHeight - 15
      if (!inView) return

      const deltaY = touchStartY - e.touches[0].clientY
      if (deltaY > 45) {
        if (stepRef.current < 3) {
          e.preventDefault()
          if (isLockedRef.current) return
          isLockedRef.current = true
          const next = Math.min(3, stepRef.current + 1)
          scrollToStep(next)
          setTimeout(() => {
            isLockedRef.current = false
          }, 650)
        }
      } else if (deltaY < -45) {
        if (stepRef.current > 0) {
          e.preventDefault()
          if (isLockedRef.current) return
          isLockedRef.current = true
          const prev = Math.max(0, stepRef.current - 1)
          scrollToStep(prev)
          setTimeout(() => {
            isLockedRef.current = false
          }, 650)
        }
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("touchstart", handleTouchStart, { passive: true })
    window.addEventListener("touchmove", handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  return (
    /* OUTER SCROLL TRACK (400vh gives comfortable scroll time for each section to come and disappear) */
    <div ref={containerRef} className="relative w-full h-[380vh] bg-[#FAFAF8]">
      
      {/* PINNED FULL-WINDOW VIEWPORT (sticky top-0 h-[100dvh]) */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-[#FAFAF8] text-[#1A1A1A] border-b border-[#E7E7E3] flex flex-col justify-center">
        
        <div className="w-full h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
            
            {/* ============================================================== */}
            {/* LEFT COLUMN: Editorial Space + Step Progress Tracker + Semicircle */}
            {/* ============================================================== */}
            <div className="lg:col-span-5 relative flex flex-col justify-between p-6 sm:p-8 lg:p-10 xl:p-12 border-b lg:border-b-0 lg:border-r border-[#E7E7E3] overflow-hidden bg-[#FAFAF8] h-full z-20">
              
              {/* Top Left Marker */}
              <div className="relative z-10 flex flex-col gap-3">
                <div className="w-8 h-[2px] bg-[#1A1A1A]" />
                
                <div className="flex items-center gap-2.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] text-[#707070] uppercase select-none">
                  <span>02</span>
                  <span className="text-[#D4B924]">/</span>
                  <span>PHILOSOPHY</span>
                </div>
              </div>

              {/* Middle Editorial Title & Scroll Step Navigation */}
              <div className="relative z-10 my-auto py-4">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black tracking-tight text-[#141414] uppercase leading-[1.05] mb-3 lg:mb-4">
                  What We<br />
                  <span className="text-[#D4B924]">Believe.</span>
                </h2>

                <p className="text-xs sm:text-[13.5px] lg:text-[13px] xl:text-[14px] text-[#4A4A4A] leading-[1.65] max-w-[420px] mb-6">
                  Advice is tested not by its elegance on paper, but by its endurance in execution. These four convictions govern every recommendation, governance framework, and roadmap we design.
                </p>

                {/* SCROLL STEP TRACKER */}
                <div className="flex flex-col gap-4 max-w-[280px]">
                  {beliefs.map((b, idx) => {
                    const isCurrent = activeIndex === idx
                    return (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => scrollToStep(idx)}
                        className="group flex items-center gap-3.5 text-left transition-all duration-300 py-1 cursor-pointer select-none"
                      >
                        {/* Preceding Dash / Bar */}
                        <span
                          className={`block transition-all duration-300 rounded-full ${
                            isCurrent
                              ? "w-8 h-[2px] bg-[#CAC32C]"
                              : "w-5 h-[1.5px] bg-[#9E9E9E] group-hover:bg-[#666]"
                          }`}
                        />
                        
                        {/* Number + Tag */}
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-mono tracking-[0.2em] uppercase transition-colors ${
                              isCurrent
                                ? "text-[#141414] font-bold"
                                : "text-[#9E9E9E] font-medium group-hover:text-[#666]"
                            }`}
                          >
                            {b.number}
                          </span>
                          <span
                            className={`text-xs font-mono tracking-[0.2em] uppercase transition-colors ${
                              isCurrent
                                ? "text-[#141414] font-bold"
                                : "text-[#9E9E9E] font-medium group-hover:text-[#666]"
                            }`}
                          >
                            {b.tag}
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Right Divider Line: Iconic Large Yellow Half-Circle */}
              <div
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-20 xl:w-28 h-40 xl:h-56 bg-[#F3C911] rounded-l-full shadow-sm select-none pointer-events-none transition-transform duration-500 ease-out"
                style={{
                  transform: `translateY(-50%) scale(${1 + (progress % 0.25) * 0.4})`,
                }}
              />

            </div>

            {/* ============================================================== */}
            {/* RIGHT COLUMN: DYNAMIC SCROLL TRANSITION STAGE                  */}
            {/* Each section comes in and disappears as the user scrolls       */}
            {/* ============================================================== */}
            <div className="lg:col-span-7 relative h-full w-full bg-[#FAFAF8] overflow-hidden">
              
              {beliefs.map((belief, idx) => {
                const isActive = activeIndex === idx
                const isPast = idx < activeIndex

                return (
                  <div
                    key={belief.id}
                    className={`absolute inset-0 w-full h-full flex flex-col lg:flex-row items-stretch justify-between transition-all duration-700 ease-out ${
                      isActive
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto z-10"
                        : isPast
                        ? "opacity-0 -translate-y-12 scale-95 pointer-events-none z-0"
                        : "opacity-0 translate-y-12 scale-95 pointer-events-none z-0"
                    }`}
                  >
                    
                    {/* LEFT SUB-COLUMN: TEXT CARD */}
                    <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-8 xl:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E7E7E3] bg-white z-10">
                      
                      {/* Top Header in Card */}
                      <div>
                        <div className="flex items-baseline justify-between mb-2">
                          <span className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-[#D4B924]">
                            {belief.number}
                          </span>
                          <span className="text-[11px] font-bold tracking-[0.28em] text-[#777] uppercase">
                            {belief.tag}
                          </span>
                        </div>
                        
                        <div className="w-10 h-[2px] bg-[#1A1A1A] mb-4" />

                        {/* Primary Statement */}
                        <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-black text-[#141414] leading-[1.3] tracking-tight mb-4">
                          {belief.statement}
                        </h3>

                        {/* In-depth Elaboration */}
                        <p className="text-xs sm:text-sm lg:text-[13.5px] xl:text-[14px] text-[#555555] leading-relaxed">
                          {belief.elaboration}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT SUB-COLUMN: FULL-HEIGHT ARCHITECTURAL IMAGE */}
                    <div className="w-full lg:w-1/2 relative min-h-[260px] lg:min-h-0 h-full overflow-hidden bg-[#111111]">
                      <Image
                        src={belief.image}
                        alt={belief.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className={`object-cover transition-transform duration-1000 ease-out ${
                          isActive ? "scale-100" : "scale-110"
                        }`}
                        priority={idx === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                    </div>

                  </div>
                )
              })}

            </div>

          </div>
        </div>

      </div>

    </div>
  )
}
