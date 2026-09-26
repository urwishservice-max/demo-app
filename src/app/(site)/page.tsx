import Link from "next/link"
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react"
import { HeroSection } from "@/components/home/hero-section"
import { LogoSlider } from "@/components/home/logo-slider"
import { PracticeTabs } from "@/components/home/practice-tabs"
import { WhatDrivesUs } from "@/components/home/what-drives-us"
import { SectorDial } from "@/components/home/sector-dial"
import { FaqAccordion } from "@/components/home/faq-accordion"
import { ConsultationForm } from "@/components/home/consultation-form"

const industries = [
  {
    name: "Aviation & Aerospace",
    href: "/industries",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Banking & Financial Services",
    href: "/industries",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Healthcare & Life Sciences",
    href: "/industries",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Real Estate & Infrastructure",
    href: "/industries",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Supply Chain & Logistics",
    href: "/industries",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
]

export default function Home() {
  return (
    <div className="bg-[#202020] text-white">
      
      {/* ============== HERO SECTION (ACHERON Minimal Luxury Animated Canvas) ============== */}
      <HeroSection />

      {/* Marquee Sector Slider */}
      <div className="border-t border-[#E7E7E3]">
        <LogoSlider />
      </div>

      {/* ============== WHAT GOT YOU HERE (Matching Phos Framed Statement Band) ============== */}
      <section id="what-got-you-here" className="section--light sframe sframe--rails sframe--rule-top sframe--rule-bottom py-20 md:py-28 bg-[#FAFAF8] text-[#202020]">
        <div className="wrap">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="t-title font-medium tracking-tight text-[#202020] mb-6">
              What got you here <em className="!text-[#CAC32C]">won’t take you into the future.</em>
            </h2>
            <p className="t-lead text-[#6B6B6B] max-w-2xl mx-auto mb-10 text-base md:text-lg">
              Strategy documents, technology pilots, and isolated AI experiments routinely stall at the point of operational execution. Acheron works at that critical inflection point: connecting executive intent with governed, accountable delivery.
            </p>
            <Link href="#contact" className="btn btn--dark !py-3.5 !px-8">
              Start now
            </Link>
          </div>
        </div>
      </section>

      {/* ============== FOUR PRACTICES (The Acheron Standard) ============== */}
      <section id="phases" className="section--light sframe sframe--rails py-20 md:py-28 bg-[#FAFAF8] text-[#202020]">
        <div className="wrap">
          <PracticeTabs />
        </div>
      </section>

      {/* ============== WHAT DRIVES US (Built for a higher standard) ============== */}
      <section className="section--light sframe sframe--rails sframe--rule-top sframe--rule-bottom py-14 md:py-18 bg-[#FAFAF8] text-[#202020]">
        <div className="wrap">
          <WhatDrivesUs />
        </div>
      </section>

      {/* ============== SECTOR EXPERTISE (Automatic Left-Moving Slider) ============== */}
      <section id="industries" className="py-8 md:py-10 bg-[#FAFAF8] text-[#202020]">
        <div className="wrap">
          <SectorDial />
        </div>
      </section>

      {/* ============== LICENSED ADVISORY ACTIVITIES (Professional & Borderless) ============== */}
      <section className="py-14 md:py-16 bg-[#FAFAF8] text-[#202020]">
        <div className="wrap">
          {/* Institutional Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#E7E7E3] mb-8">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#CAC32C]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1A1A1A]">
                Licensed Advisory Activities
              </span>
              <span className="text-xs text-[#8A8A85] hidden sm:inline">
                · Department of Economy and Tourism
              </span>
            </div>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#70706C]">
              Government of Dubai · UAE
            </span>
          </div>

          {/* 4 Professional Editorial Columns (No Chunky Box Boundaries) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* 01 */}
            <div className="flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono font-semibold text-[#8A8A85] uppercase tracking-wider">
                    Licence
                  </span>
                  <span className="text-xs font-mono font-bold text-[#1A1A1A]">
                    7020039
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#CAC32C] transition-colors mb-2">
                  AI & Innovation
                </h4>
                <p className="text-xs sm:text-[13px] text-[#6B6B6B] leading-relaxed">
                  Autonomous systems, algorithmic verification, and governed executive architecture.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#EAEAE5] flex items-center justify-between text-[11px] text-[#8A8A85]">
                <span>Practice 01</span>
                <span className="text-[#CAC32C] font-semibold">Active Status</span>
              </div>
            </div>

            {/* 02 */}
            <div className="flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono font-semibold text-[#8A8A85] uppercase tracking-wider">
                    Licence
                  </span>
                  <span className="text-xs font-mono font-bold text-[#1A1A1A]">
                    7020003
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#CAC32C] transition-colors mb-2">
                  Management Consultancies
                </h4>
                <p className="text-xs sm:text-[13px] text-[#6B6B6B] leading-relaxed">
                  Target operating model design, corporate governance, and executive board advisory.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#EAEAE5] flex items-center justify-between text-[11px] text-[#8A8A85]">
                <span>Practice 02</span>
                <span className="text-[#CAC32C] font-semibold">Active Status</span>
              </div>
            </div>

            {/* 03 */}
            <div className="flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono font-semibold text-[#8A8A85] uppercase tracking-wider">
                    Licence
                  </span>
                  <span className="text-xs font-mono font-bold text-[#1A1A1A]">
                    7020008
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#CAC32C] transition-colors mb-2">
                  Human Resources & Capability
                </h4>
                <p className="text-xs sm:text-[13px] text-[#6B6B6B] leading-relaxed">
                  Workforce skills impact mapping, role-specific fluency, and leadership enablement.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#EAEAE5] flex items-center justify-between text-[11px] text-[#8A8A85]">
                <span>Practice 03</span>
                <span className="text-[#CAC32C] font-semibold">Active Status</span>
              </div>
            </div>

            {/* 04 */}
            <div className="flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono font-semibold text-[#8A8A85] uppercase tracking-wider">
                    Licence
                  </span>
                  <span className="text-xs font-mono font-bold text-[#1A1A1A]">
                    7020020
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#CAC32C] transition-colors mb-2">
                  Project Development
                </h4>
                <p className="text-xs sm:text-[13px] text-[#6B6B6B] leading-relaxed">
                  Stage-gate delivery assurance, capital feasibility, and PMO programme governance.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#EAEAE5] flex items-center justify-between text-[11px] text-[#8A8A85]">
                <span>Practice 04</span>
                <span className="text-[#CAC32C] font-semibold">Active Status</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FAQs (Matching Phos Accordion) ============== */}
      <section className="section--dark sframe sframe--dark sframe--rails py-24 md:py-32 bg-[#202020]">
        <div className="wrap">
          <div className="max-w-4xl mx-auto">
            <h2 className="t-h3 text-white font-bold mb-12">
              Frequently Asked Questions
            </h2>
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* ============== CONTACT FORM (Matching Phos 2-Step Form) ============== */}
      <section id="contact" className="section--dark sframe sframe--dark sframe--rails py-24 md:py-32 bg-[#1b1b1b] border-t border-white/10">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 items-start">
            
            {/* Left Intro */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#CAC32C] block mb-4">
                Schedule a Consultation
              </span>
              <h2 className="t-title text-white font-medium leading-tight mb-6">
                The fastest way to know whether we’re the right fit, <em>is a conversation.</em>
              </h2>
              <p className="t-lead text-white/70 max-w-lg mb-8 text-base md:text-lg">
                We spend thirty minutes understanding your operational priorities and regulatory landscape. If we can create immediate leverage, we will show you exactly where.
              </p>
              
              <div className="space-y-4 pt-6 border-t border-white/10 text-sm text-white/60">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#CAC32C]" />
                  <span>30 minutes, structured, no presentation deck</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#CAC32C]" />
                  <span>Senior Advisory Partner attendance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#CAC32C]" />
                  <span>Non-disclosure & strict client confidentiality</span>
                </div>
              </div>
            </div>

            {/* Right 2-Step Form */}
            <div>
              <ConsultationForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
