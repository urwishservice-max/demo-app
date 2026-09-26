"use client"

import React, { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"

interface ActivityItem {
  id: string
  colorName: "base" | "red" | "yellow" | "green" | "white" | "all"
  imageSrc: string
  line1: string
  line2?: string
  line3?: string
  secondaryColor: string
  code?: string
  isBase?: boolean
  isAll?: boolean
}

const activities: ActivityItem[] = [
  // 0: Base
  {
    id: "base",
    colorName: "base",
    imageSrc: "/crop_base.png",
    line1: "LICENSED",
    line2: "ACTIVITIES",
    secondaryColor: "#CAC32C",
    isBase: true,
  },
  // 1: Red Light
  {
    id: "red",
    colorName: "red",
    imageSrc: "/crop_red.png",
    line1: "AI",
    line2: "&",
    line3: "INNOVATION",
    secondaryColor: "#EF4444",
    code: "7020039",
  },
  // 2: Yellow Light
  {
    id: "yellow",
    colorName: "yellow",
    imageSrc: "/crop_yellow.png",
    line1: "STRATEGY",
    line2: "&",
    line3: "MANAGEMENT",
    secondaryColor: "#EAB308",
    code: "7020003",
  },
  // 3: Green Light
  {
    id: "green",
    colorName: "green",
    imageSrc: "/crop_green.png",
    line1: "PEOPLE",
    line2: "&",
    line3: "CAPABILITY",
    secondaryColor: "#10B981",
    code: "7020008",
  },
  // 4: White Light
  {
    id: "white",
    colorName: "white",
    imageSrc: "/crop_white.png",
    line1: "PROJECT",
    line2: "DEVELOPMENT",
    secondaryColor: "#0F172A",
    code: "7020020",
  },
  // 5: All Lights
  {
    id: "all",
    colorName: "all",
    imageSrc: "/crop_all.png",
    line1: "LICENSED",
    line2: "ACTIVITIES",
    secondaryColor: "#CAC32C",
    isAll: true,
  },
]

export function LicensedActivities() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const stepRef = useRef(0)
  const isLockedRef = useRef(false)

  // Track scroll position across the scroll track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Synchronize step from scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let nextStep = 0
    if (latest < 0.16) {
      nextStep = 0 // Base
    } else if (latest < 0.35) {
      nextStep = 1 // Red
    } else if (latest < 0.54) {
      nextStep = 2 // Yellow
    } else if (latest < 0.73) {
      nextStep = 3 // Green
    } else if (latest < 0.88) {
      nextStep = 4 // White
    } else {
      nextStep = 5 // All
    }
    stepRef.current = nextStep
    setActiveStep(nextStep)
  })

  // Go to specific checkpoint
  const goToStep = (stepIndex: number) => {
    if (!containerRef.current) return
    const container = containerRef.current
    const rect = container.getBoundingClientRect()
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const containerTop = rect.top + scrollTop
    const totalScrollable = container.offsetHeight - window.innerHeight

    const targetFraction = stepIndex / 5
    const targetY = containerTop + targetFraction * totalScrollable

    stepRef.current = stepIndex
    setActiveStep(stepIndex)

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    })
  }

  // Checkpoint locking: catches heavy scroll and locks to next checkpoint without skipping
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const inView = rect.top <= 15 && rect.bottom >= window.innerHeight - 15
      if (!inView) return

      // Scrolling Down
      if (e.deltaY > 18) {
        if (stepRef.current < 5) {
          e.preventDefault()
          if (isLockedRef.current) return
          isLockedRef.current = true
          const next = Math.min(5, stepRef.current + 1)
          goToStep(next)
          setTimeout(() => {
            isLockedRef.current = false
          }, 650)
        }
      }
      // Scrolling Up (Reversely)
      else if (e.deltaY < -18) {
        if (stepRef.current > 0) {
          e.preventDefault()
          if (isLockedRef.current) return
          isLockedRef.current = true
          const prev = Math.max(0, stepRef.current - 1)
          goToStep(prev)
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
        if (stepRef.current < 5) {
          e.preventDefault()
          if (isLockedRef.current) return
          isLockedRef.current = true
          const next = Math.min(5, stepRef.current + 1)
          goToStep(next)
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
          goToStep(prev)
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

  const currentItem = activities[activeStep] || activities[0]

  return (
    <section ref={containerRef} className="relative h-[480vh] bg-white text-neutral-900 select-none">
      {/* Sticky Fullscreen Frame */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-white px-3 sm:px-6 lg:px-8">
        
        {/* Relative Anchor Frame: Traffic light is permanently anchored in place using absolute + z-index */}
        <div className="relative w-full max-w-4xl xl:max-w-5xl h-[480px] sm:h-[540px] md:h-[600px] flex items-center">
          
          {/* LEFT SIDE TEXT: Dedicated z-index: 10 with right padding to never push the traffic light */}
          <div className="relative z-10 w-full pr-[115px] sm:pr-[155px] md:pr-[185px] lg:pr-[210px] pl-2 sm:pl-4 flex flex-col justify-center text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="space-y-2 sm:space-y-3"
              >
                {currentItem.isAll ? (
                  <div className="space-y-2.5 sm:space-y-3">
                    {/* Big Title */}
                    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.88] text-neutral-900">
                      <div>{currentItem.line1}</div>
                      <div style={{ color: currentItem.secondaryColor }}>{currentItem.line2}</div>
                    </h2>

                    {/* Content */}
                    <div className="space-y-1 font-mono text-xs sm:text-sm text-neutral-800 pt-1">
                      <div>
                        <span className="font-semibold text-neutral-500 block text-[10px] sm:text-[11px] uppercase tracking-wider">
                          Trade licence number:
                        </span>
                        <span className="font-bold text-xs sm:text-base text-neutral-900 break-words">[TRADE LICENCE NUMBER]</span>
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-500 block text-[10px] sm:text-[11px] uppercase tracking-wider">
                          Registered address:
                        </span>
                        <span className="text-[11px] sm:text-sm text-neutral-700 font-medium break-words">[REGISTERED ADDRESS]</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-neutral-900 bg-[#CAC32C] hover:bg-[#B5AE22] transition-colors shadow-xs"
                      >
                        Request a Consultation
                      </Link>
                    </div>
                  </div>
                ) : currentItem.isBase ? (
                  <div>
                    {/* Base Big Title */}
                    <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-neutral-900 mb-2 sm:mb-3">
                      <div>{currentItem.line1}</div>
                      <div style={{ color: currentItem.secondaryColor }}>{currentItem.line2}</div>
                    </h2>
                    {/* Base Subtitle */}
                    <p className="text-xs sm:text-base lg:text-lg text-neutral-700 font-normal leading-relaxed max-w-sm">
                      Asheron operates under the following licensed activities in the United Arab Emirates.
                    </p>
                  </div>
                ) : (
                  <div>
                    {/* Main Monumental Headline - responsive so it never overflows on mobile */}
                    <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-neutral-900 break-words">
                      <div>{currentItem.line1}</div>
                      {currentItem.line2 && (
                        <div
                          style={{
                            color: currentItem.line3 ? "#171717" : currentItem.secondaryColor,
                          }}
                        >
                          {currentItem.line2}
                        </div>
                      )}
                      {currentItem.line3 && (
                        <div style={{ color: currentItem.secondaryColor }}>
                          {currentItem.line3}
                        </div>
                      )}
                    </h2>

                    {/* Licence Code */}
                    {currentItem.code && (
                      <div className="pt-1.5 sm:pt-3">
                        <span className="font-mono text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 block">
                          {currentItem.code}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE TRAFFIC LIGHT: ANCHORED IN PLACE VIA ABSOLUTE + Z-INDEX: 20 */}
          {/* Can NEVER be pushed or moved by text width on any screen size */}
          <div className="absolute right-1 sm:right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-20 flex-shrink-0 flex items-center justify-center pointer-events-none select-none">
            <div
              className="relative select-none"
              style={{
                filter: "drop-shadow(20px 28px 28px rgba(0, 0, 0, 0.18))",
              }}
            >
              <Image
                src={currentItem.imageSrc}
                alt={`Traffic Signal ${currentItem.colorName}`}
                width={110}
                height={364}
                className="w-[95px] sm:w-[125px] md:w-[155px] lg:w-[175px] max-h-[56vh] sm:max-h-[62vh] h-auto object-contain select-none"
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
