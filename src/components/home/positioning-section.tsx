"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function PositioningSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })
  const y = useTransform(smooth, [0, 1], ["40px", "-40px"])
  const opacity = useTransform(smooth, [0, 0.25, 0.8, 1], [0.6, 1, 1, 0.6])

  return (
    <section
      ref={containerRef}
      id="positioning"
      className="py-20 md:py-28 bg-[#F8F7F5] text-[#080808] border-b border-[#E2E0DD] overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="max-w-5xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#FFC400] animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#351779]">
            REALITY-TESTED ADVISORY
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#080808] leading-[0.96] mb-6 [text-wrap:balance]"
        >
          Advisory that survives contact with reality.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-[#555555] max-w-3xl leading-relaxed mb-10 font-normal [text-wrap:balance]"
        >
          Strategy documents, technology pilots, and training programmes often stall at the point of execution. Asheron works at that point. We combine strategic design with governance, capability, and delivery discipline so that decisions taken at board level become operational practice — with clear ownership, controls, and evidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#351779] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#2B1263] transition-all duration-300 shadow-lg hover:shadow-[#351779]/20"
          >
            <span>Request a Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-[#FFC400] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
