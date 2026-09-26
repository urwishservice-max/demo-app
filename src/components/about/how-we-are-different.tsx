"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion"
import { SkullCanvas } from "./skull-canvas"

interface Differentiator {
  number: string
  tag: string
  title: string
  subtitle: string
  description: string
  deepDetail: string
  highlights: string[]
}

const differentiators: Differentiator[] = [
  {
    number: "01",
    tag: "JURISDICTION & SOVEREIGNTY",
    title: "Locally grounded.",
    subtitle: "Rooted in UAE Realities",
    description:
      "Our recommendations reflect UAE regulatory expectations, market conditions, workforce realities, and national priorities.",
    deepDetail:
      "Rather than importing abstract offshore templates, our frameworks are calibrated specifically to UAE federal decrees, ADGM/DIFC compliance, and regional operational cadences.",
    highlights: [
      "UAE Federal & Emirate-level regulatory alignment",
      "Calibrated for ADGM, DIFC, and mainland jurisdictions",
      "Grounded in national strategic visions & workforce localization",
    ],
  },
  {
    number: "02",
    tag: "INTEGRATED PRACTICE",
    title: "Multi-disciplinary by design.",
    subtitle: "Unified Advisory & Governance",
    description:
      "Strategy, technology governance, capability, and delivery are handled by one integrated practice rather than four disconnected vendors.",
    deepDetail:
      "We eliminate the friction and finger-pointing of multi-vendor sprawl. Strategy informs AI governance, which directly shapes capability transfer and project milestones under single-point accountability.",
    highlights: [
      "Unified governance spanning AI, strategy, and execution",
      "Single-point fiduciary accountability",
      "Zero vendor fragmentation or siloed handoffs",
    ],
  },
  {
    number: "03",
    tag: "FIT-FOR-PURPOSE ARCHITECTURE",
    title: "Proportionate.",
    subtitle: "Right-Sized Precision",
    description:
      "We size governance and process to the organisation in front of us — not to a global template.",
    deepDetail:
      "Over-engineered frameworks paralyse decision-making; under-engineered ones invite regulatory catastrophe. We engineer right-sized controls that protect without suffocating operational velocity.",
    highlights: [
      "No bloated theoretical frameworks or redundant overhead",
      "Pragmatic governance scaled to organizational maturity",
      "High velocity with continuous risk assurance",
    ],
  },
  {
    number: "04",
    tag: "FIDUCIARY CERTAINTY",
    title: "Accountable.",
    subtitle: "Milestone-Backed Results",
    description:
      "Every engagement defines owners, decision rights, milestones, and evidence.",
    deepDetail:
      "We do not produce advisory reports that sit unopened on executive shelves. We tie our success directly to auditable operational milestones, decision registries, and tangible client capability transfer.",
    highlights: [
      "Explicit RACI and decision rights matrix from Day One",
      "Auditable evidence and milestone-based sign-offs",
      "Verifiable capability transfer before engagement closure",
    ],
  },
]

// Centered, ultra-minimal Intro Slide (Section 0)
function IntroSlide({ progress }: { progress: MotionValue<number> }) {
  // Explicit clamp prevents negative numbers from invalidating CSS opacity
  const opacity = useTransform(progress, [0, 0.10, 0.18], [1, 1, 0], { clamp: true })
  const y = useTransform(progress, [0, 0.10, 0.18], [0, 0, -30], { clamp: true })
  // display: none guarantees it completely disappears from the screen and cannot sit in the background
  const display = useTransform(progress, (p) => (p >= 0.18 ? "none" : "flex"))

  return (
    <motion.div
      style={{ opacity, y, display }}
      className="absolute inset-0 flex items-center justify-center pointer-events-auto z-10"
    >
      <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center px-4">
        {/* Centered Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[1.08] mb-4">
          How We Are <br />
          <span className="text-[#D4B924]">Different.</span>
        </h2>

        {/* Elegant Accent Underline under the text */}
        <div className="w-16 h-[2px] bg-[#D4B924] mb-6" />

        {/* diffrent.png full uncropped image placed under the text */}
        <div className="w-full max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto">
          <Image
            src="/diffrent.png"
            alt="How We Are Different"
            width={1672}
            height={941}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </motion.div>
  )
}

// Pure minimal Content Slide for each distinction (alternates left/right with the 3D model)
function DistinctionSlide({
  item,
  index,
  progress,
  isActive,
}: {
  item: Differentiator
  index: number
  progress: MotionValue<number>
  isActive: boolean
}) {
  let opacityRange: number[]
  let opacityOutput: number[]
  let yRange: number[]
  let yOutput: number[]
  let minP: number
  let maxP: number

  if (index === 0) {
    minP = 0.16
    maxP = 0.39
    opacityRange = [0.16, 0.22, 0.33, 0.39]
    opacityOutput = [0, 1, 1, 0]
    yRange = [0.16, 0.22, 0.33, 0.39]
    yOutput = [30, 0, 0, -30]
  } else if (index === 1) {
    minP = 0.37
    maxP = 0.61
    opacityRange = [0.37, 0.43, 0.55, 0.61]
    opacityOutput = [0, 1, 1, 0]
    yRange = [0.37, 0.43, 0.55, 0.61]
    yOutput = [30, 0, 0, -30]
  } else if (index === 2) {
    minP = 0.59
    maxP = 0.83
    opacityRange = [0.59, 0.65, 0.77, 0.83]
    opacityOutput = [0, 1, 1, 0]
    yRange = [0.59, 0.65, 0.77, 0.83]
    yOutput = [30, 0, 0, -30]
  } else {
    // index === 3
    minP = 0.81
    maxP = 1.01
    opacityRange = [0.81, 0.87, 1.0]
    opacityOutput = [0, 1, 1]
    yRange = [0.81, 0.87, 1.0]
    yOutput = [30, 0, 0]
  }

  // Clamped opacity and y prevent extrapolating invalid values
  const opacity = useTransform(progress, opacityRange, opacityOutput, { clamp: true })
  const y = useTransform(progress, yRange, yOutput, { clamp: true })
  // display: none ensures non-active slides never stay in background
  const display = useTransform(progress, (p) => (p < minP || p >= maxP ? "none" : "flex"))

  // Alternating text position:
  // Slide 1 (index 0): Text LEFT (Skull RIGHT)
  // Slide 2 (index 1): Text RIGHT (Skull LEFT)
  // Slide 3 (index 2): Text LEFT (Skull RIGHT)
  // Slide 4 (index 3): Text RIGHT (Skull LEFT)
  const isLeft = index % 2 === 0

  return (
    <motion.div
      style={{ opacity, y, display }}
      className={`absolute inset-0 flex items-center ${
        isLeft ? "justify-start" : "justify-end"
      } ${isActive ? "pointer-events-auto z-20" : "pointer-events-none z-0"}`}
    >
      <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl text-left px-2 sm:px-4">
        {/* Subtle Category Line */}
        <div className="flex items-center gap-4 mb-4 sm:mb-6">
          <span className="text-3xl sm:text-4xl font-mono font-bold text-[#D4B924]">
            {item.number}
          </span>
          <div className="h-4 w-[1px] bg-white/20" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-white/50 uppercase">
            {item.tag}
          </span>
        </div>

        {/* Subtitle & Main Title */}
        <div className="mb-4 sm:mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4B924]/80 block mb-1 sm:mb-2">
            {item.subtitle}
          </span>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white uppercase tracking-tight leading-[1.1]">
            {item.title}
          </h3>
        </div>

        {/* Primary Statement */}
        <p className="text-sm sm:text-base lg:text-lg text-white/90 font-light leading-relaxed mb-3 sm:mb-4">
          {item.description}
        </p>

        {/* Deep Detail Paragraph */}
        <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light mb-6 sm:mb-8">
          {item.deepDetail}
        </p>

        {/* 3 Pillars / Highlights */}
        <div className="flex flex-col gap-2.5 pt-4 sm:pt-6 border-t border-white/10">
          {item.highlights.map((highlight, hIdx) => (
            <div
              key={hIdx}
              className="flex items-center gap-2.5 text-xs sm:text-sm text-white/70"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4B924] flex-shrink-0" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function HowWeAreDifferent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const stepRef = useRef(0)
  const isLockedRef = useRef(false)

  // Scroll tracking across the tall locked scroll track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Synchronize step for discreet indicator on distinction slides
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let nextStep = 0
    if (latest < 0.18) {
      nextStep = 0
    } else if (latest < 0.40) {
      nextStep = 1
    } else if (latest < 0.62) {
      nextStep = 2
    } else if (latest < 0.84) {
      nextStep = 3
    } else {
      nextStep = 4
    }
    stepRef.current = nextStep
    setActiveStep(nextStep)
  })

  const goToStep = (stepIndex: number) => {
    if (!containerRef.current) return
    const container = containerRef.current
    const rect = container.getBoundingClientRect()
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const sectionTop = rect.top + scrollTop
    const totalScrollable = container.offsetHeight - window.innerHeight
    const targetFractions = [0.08, 0.28, 0.50, 0.72, 0.94]
    const targetScroll = sectionTop + targetFractions[stepIndex] * totalScrollable
    stepRef.current = stepIndex
    setActiveStep(stepIndex)
    window.scrollTo({ top: targetScroll, behavior: "smooth" })
  }

  // Checkpoint locking: catches heavy scroll and locks to next slide without skipping
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const inView = rect.top <= 15 && rect.bottom >= window.innerHeight - 15
      if (!inView) return

      if (e.deltaY > 18) {
        if (stepRef.current < 4) {
          e.preventDefault()
          if (isLockedRef.current) return
          isLockedRef.current = true
          const next = Math.min(4, stepRef.current + 1)
          goToStep(next)
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
        if (stepRef.current < 4) {
          e.preventDefault()
          if (isLockedRef.current) return
          isLockedRef.current = true
          const next = Math.min(4, stepRef.current + 1)
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

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[500vh] bg-[#0A0A0A] text-white"
    >
      {/* ============================================================== */}
      {/* THE STICKY LOCKED VIEWPORT WINDOW                              */}
      {/* ============================================================== */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between p-6 sm:p-12 lg:p-16 z-20">
        
        {/* Extremely Subtle Ambient Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        <div className="pointer-events-none absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#D4B924]/5 rounded-full blur-[160px]" />

        {/* Minimal Corner Step Counter (only shown during the 4 distinction slides) */}
        <div className="relative z-30 flex items-center justify-end w-full max-w-7xl mx-auto h-6">
          {activeStep > 0 && (
            <span className="text-[11px] font-mono tracking-widest text-[#D4B924] transition-opacity duration-300">
              0{activeStep} / 04
            </span>
          )}
        </div>

        {/* ============================================================== */}
        {/* CENTER STAGE: PURE MINIMAL CONTENT + 3D SKULL MODEL            */}
        {/* ============================================================== */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 min-h-0 flex items-center justify-center">
          {/* Three.js Interactive 3D Skull Canvas */}
          <SkullCanvas progress={scrollYProgress} />

          {/* Content Slides */}
          <div className="relative w-full h-full max-h-[540px] z-20 pointer-events-none">
            {/* Slide 0: The Intro (How We Are Different with diffrent.png) */}
            <IntroSlide progress={scrollYProgress} />

            {/* Slides 1 to 4: The 4 Distinctions (alternates left/right with the 3D model) */}
            {differentiators.map((item, index) => (
              <DistinctionSlide
                key={item.number}
                item={item}
                index={index}
                progress={scrollYProgress}
                isActive={activeStep === index + 1}
              />
            ))}
          </div>
        </div>

        {/* Empty bottom spacer to keep stage perfectly vertically centered */}
        <div className="h-6 w-full max-w-7xl mx-auto" />

      </div>
    </section>
  )
}
