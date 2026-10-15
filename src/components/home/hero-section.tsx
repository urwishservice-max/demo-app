"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Subtle interactive 3D magnetic tilt physics based on cursor
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 120 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7])
  const logoTranslateX = useTransform(smoothX, [-0.5, 0.5], [-12, 12])
  const logoTranslateY = useTransform(smoothY, [-0.5, 0.5], [-12, 12])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#F8F7F5] text-[#080808] select-none perspective-[1200px]"
    >
      {/* ============================================================== */}
      {/* 1. CELESTIAL ORBITAL RING & SATELLITE GOLD DOT                */}
      {/* ============================================================== */}
      <div className="absolute top-1/2 left-0 -translate-x-[55%] md:-translate-x-[48%] -translate-y-1/2 pointer-events-none z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 75, ease: "linear", repeat: Infinity }}
          className="relative w-[640px] h-[640px] sm:w-[780px] sm:h-[780px] md:w-[940px] md:h-[940px] rounded-full border border-[#E2E0DD]"
        >
          {/* Orbital Satellite Gold Dot with soft radiant pulse */}
          <motion.div
            className="absolute top-[29%] right-[11%] w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-[#FFC400]"
            animate={{
              scale: [1, 1.25, 1],
              boxShadow: [
                "0 0 12px rgba(255,196,0,0.45)",
                "0 0 26px rgba(255,196,0,0.85)",
                "0 0 12px rgba(255,196,0,0.45)",
              ],
            }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Ambient delicate warm light aura behind center emblem */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] bg-[radial-gradient(circle_at_center,rgba(53,23,121,0.08),rgba(255,196,0,0.07),transparent_70%)] pointer-events-none blur-3xl z-0" />

      {/* ============================================================== */}
      {/* 2. LEFT SIDE STACKED ACCENTS (TECHNOLOGY · PEOPLE · PROGRESS)  */}
      {/* ============================================================== */}
      <div className="hidden lg:flex flex-col items-start z-10 absolute left-10 md:left-14 xl:left-20 top-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.18, delayChildren: 0.5 },
            },
          }}
          className="text-[10px] md:text-[11px] tracking-[0.32em] text-[#6B6B6B] uppercase font-medium space-y-2.5"
        >
          {["TECHNOLOGY", "PEOPLE", "PROGRESS"].map((word, i) => (
            <motion.p
              key={i}
              variants={{
                hidden: { opacity: 0, x: -16 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {word}
            </motion.p>
          ))}
        </motion.div>

        {/* Animated Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
          className="w-8 h-[1px] bg-[#FFC400] mt-4"
        />
      </div>

      {/* ============================================================== */}
      {/* 3. RIGHT SIDE VERTICAL INDICATOR RAIL (01 | 02 03 04 05)       */}
      {/* ============================================================== */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:flex flex-col items-center z-10 absolute right-10 md:right-14 xl:right-20 top-1/2 -translate-y-1/2"
      >
        <span className="text-xs font-bold tracking-widest text-[#080808]">01</span>
        
        {/* Growing indicator stroke */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ originY: 0 }}
          className="h-6 w-[1.5px] bg-[#351779] my-2"
        />

        <div className="flex flex-col items-center gap-2 text-xs text-[#B5B5B5] tracking-widest font-light">
          {["02", "03", "04", "05"].map((num) => (
            <span
              key={num}
              className="hover:text-[#351779] transition-colors duration-200 cursor-pointer"
            >
              {num}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ============================================================== */}
      {/* 4. CENTER HERO EMBLEM & KINETIC TYPOGRAPHY                     */}
      {/* ============================================================== */}
      <div className="my-auto py-8 z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto w-full">
        
        {/* LOGO CONTAINER with 3D Tilt + Floating Breath + Specular Shimmer */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            x: logoTranslateX,
            y: logoTranslateY,
            transformStyle: "preserve-3d",
          }}
          className="relative w-48 sm:w-60 md:w-72 lg:w-80 aspect-square select-none cursor-grab active:cursor-grabbing"
        >
          {/* Natural ambient floating animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.84, filter: "blur(10px)" }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              y: [-6, 6, -6],
            }}
            transition={{
              opacity: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
              filter: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            }}
            className="relative w-full h-full"
          >
            {/* Base Logo Image */}
            <Image
              src="/ashron.png"
              alt="Asheron Logo"
              fill
              priority
              sizes="(max-width: 640px) 192px, (max-width: 768px) 240px, (max-width: 1024px) 288px, 320px"
              className="object-contain drop-shadow-[0_12px_32px_rgba(53,23,121,0.18)]"
            />

            {/* Specular Traveling Light Sweep / Shimmer */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
              <motion.div
                initial={{ x: "-130%", opacity: 0 }}
                animate={{
                  x: ["-130%", "140%"],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  repeatDelay: 3.8,
                  ease: "easeInOut",
                  delay: 1.2,
                }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-25 filter blur-[3px]"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Spaced Wordmark with Cinematic Tracking Expansion */}
        <motion.h1
          initial={{ opacity: 0, y: 24, letterSpacing: "0.22em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.38em" }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-3xl sm:text-4xl md:text-[44px] lg:text-[50px] font-normal tracking-[0.38em] text-[#080808] uppercase select-none leading-none"
        >
          A S H E R O N
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 text-xs sm:text-sm tracking-[0.32em] text-[#6B6B6B] uppercase font-light"
        >
          Dubai &nbsp;·&nbsp; Advisory
        </motion.p>

        {/* Minimal Divider with Horizontal Center Unfold */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="w-10 h-[1.5px] bg-[#351779] my-6"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] sm:text-xs tracking-[0.35em] text-[#6B6B6B] uppercase font-normal"
        >
          Modern Ideas. Real Impact.
        </motion.p>
      </div>

      {/* ============================================================== */}
      {/* 5. BOTTOM BAR (DUBAI ANNOTATION & SCROLL DOWN)                 */}
      {/* ============================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-end justify-between w-full z-10 mt-auto pt-6 select-none"
      >
        {/* Bottom Left Annotation */}
        <div className="flex items-center border-l-2 border-[#351779] pl-3 py-0.5">
          <div className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.22em] text-[#6B6B6B] uppercase font-medium leading-relaxed">
            <p>Dubai, United Arab Emirates</p>
            <p>Licensed Advisory</p>
          </div>
        </div>

        {/* Bottom Right Scroll Down with bouncing arrow cue */}
        <a
          href="#what-got-you-here"
          className="group inline-flex items-center gap-2 text-[10px] sm:text-[11px] md:text-xs tracking-[0.28em] font-medium text-[#080808] uppercase transition-colors hover:text-[#FFC400]"
        >
          <span>SCROLL</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <ArrowDown className="h-3.5 w-3.5" />
          </motion.span>
        </a>
      </motion.div>
    </section>
  )
}
