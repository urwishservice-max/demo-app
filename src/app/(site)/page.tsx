import Link from "next/link"
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react"
import { HeroSection } from "@/components/home/hero-section"
import { LogoSlider } from "@/components/home/logo-slider"
import { PracticeTabs } from "@/components/home/practice-tabs"
import { WhatDrivesUs } from "@/components/home/what-drives-us"
import { SectorDial } from "@/components/home/sector-dial"
import { FaqAccordion } from "@/components/home/faq-accordion"
import { ConsultationForm } from "@/components/home/consultation-form"
import { OrganizationJsonLd } from "@/components/seo/json-ld"

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
    <div
      className="bg-[#080808] text-white selection:bg-[#FFC400] selection:text-[#080808]"
      style={{
        ["--color-primary" as any]: "#FFC400",
        ["--color-primary-hover" as any]: "#E6B000",
        ["--color-background" as any]: "#F8F7F5",
        ["--bg-page" as any]: "#F8F7F5",
        ["--azure" as any]: "#FFC400",
        ["--azure-hover" as any]: "#E6B000",
      }}
    >
      
      {/* JSON-LD Structured Data */}
      <OrganizationJsonLd />

      {/* ============== HERO SECTION (ASHERON Minimal Luxury Animated Canvas) ============== */}
      <HeroSection />

      {/* Marquee Sector Slider */}
      <div className="border-t border-[#E2E0DD]">
        <LogoSlider />
      </div>

      {/* ============== SECTION — POSITIONING (§4.1 Specification) ============== */}
      <section id="positioning" className="py-20 md:py-28 bg-[#F8F7F5] text-[#080808] border-b border-[#E2E0DD]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#351779]">
              REALITY-TESTED ADVISORY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#080808] leading-[0.96] mb-6 [text-wrap:balance]">
            Advisory that survives contact with reality.
          </h2>

          <p className="text-base sm:text-lg text-[#555555] max-w-3xl leading-relaxed mb-10 font-normal [text-wrap:balance]">
            Strategy documents, technology pilots, and training programmes often stall at the point of execution. Asheron works at that point. We combine strategic design with governance, capability, and delivery discipline so that decisions taken at board level become operational practice — with clear ownership, controls, and evidence.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#351779] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xs hover:bg-[#2B1263] transition-all duration-300 shadow-md"
          >
            <span>Request a Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-[#FFC400] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>

      {/* ============== FOUR PRACTICES (The Asheron Standard - Full Screen) ============== */}
      <section id="phases" className="w-full bg-[#FFFFFF] text-[#080808] border-b border-[#E2E0DD] overflow-hidden">
        <PracticeTabs />
      </section>

      {/* ============== WHAT DRIVES US (Built for a higher standard) ============== */}
      <section className="py-20 md:py-28 bg-[#F8F7F5] text-[#080808] border-b border-[#E2E0DD]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <WhatDrivesUs />
        </div>
      </section>

      {/* ============== SECTOR EXPERTISE (8 Sectors Rotary Dial) ============== */}
      <section id="industries" className="py-16 md:py-24 bg-[#F8F7F5] text-[#080808] border-b border-[#E2E0DD]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <SectorDial />
        </div>
      </section>

      {/* ============== LICENSED ADVISORY ACTIVITIES (Professional & Borderless) ============== */}
      <section className="py-20 md:py-28 bg-[#F8F7F5] text-[#080808] border-b border-[#E2E0DD]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Institutional Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#E2E0DD] mb-12">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFC400]" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#080808]">
                Licensed Advisory Activities
              </span>
              <span className="font-mono text-xs text-[#8A8A85] hidden sm:inline">
                · Department of Economy and Tourism
              </span>
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#351779]">
              Government of Dubai · UAE
            </span>
          </div>

          {/* 4 Professional Editorial Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* 01 */}
            <div className="flex flex-col justify-between group p-6 border border-[#E2E0DD] bg-white rounded-xs shadow-xs hover:border-[#351779] transition-all">
              <div>
                <div className="flex items-center justify-between mb-3 font-mono">
                  <span className="text-[10px] font-bold text-[#8A8A85] uppercase tracking-wider">
                    Licence
                  </span>
                  <span className="text-xs font-bold text-[#351779]">
                    7020039
                  </span>
                </div>
                <h4 className="text-lg font-black uppercase text-[#080808] tracking-tight group-hover:text-[#351779] transition-colors mb-2">
                  AI & Innovation
                </h4>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6 font-normal">
                  Autonomous systems, algorithmic verification, and governed executive architecture.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E2E0DD] flex items-center justify-between font-mono text-[11px] text-[#8A8A85]">
                <span>Practice 01</span>
                <span className="text-[#351779] font-bold uppercase">Active Status</span>
              </div>
            </div>

            {/* 02 */}
            <div className="flex flex-col justify-between group p-6 border border-[#E2E0DD] bg-white rounded-xs shadow-xs hover:border-[#351779] transition-all">
              <div>
                <div className="flex items-center justify-between mb-3 font-mono">
                  <span className="text-[10px] font-bold text-[#8A8A85] uppercase tracking-wider">
                    Licence
                  </span>
                  <span className="text-xs font-bold text-[#351779]">
                    7020003
                  </span>
                </div>
                <h4 className="text-lg font-black uppercase text-[#080808] tracking-tight group-hover:text-[#351779] transition-colors mb-2">
                  Management Consultancies
                </h4>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6 font-normal">
                  Target operating model design, corporate governance, and executive board advisory.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E2E0DD] flex items-center justify-between font-mono text-[11px] text-[#8A8A85]">
                <span>Practice 02</span>
                <span className="text-[#351779] font-bold uppercase">Active Status</span>
              </div>
            </div>

            {/* 03 */}
            <div className="flex flex-col justify-between group p-6 border border-[#E2E0DD] bg-white rounded-xs shadow-xs hover:border-[#351779] transition-all">
              <div>
                <div className="flex items-center justify-between mb-3 font-mono">
                  <span className="text-[10px] font-bold text-[#8A8A85] uppercase tracking-wider">
                    Licence
                  </span>
                  <span className="text-xs font-bold text-[#351779]">
                    7020008
                  </span>
                </div>
                <h4 className="text-lg font-black uppercase text-[#080808] tracking-tight group-hover:text-[#351779] transition-colors mb-2">
                  Human Resources & Capability
                </h4>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6 font-normal">
                  Workforce skills impact mapping, role-specific fluency, and leadership enablement.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E2E0DD] flex items-center justify-between font-mono text-[11px] text-[#8A8A85]">
                <span>Practice 03</span>
                <span className="text-[#351779] font-bold uppercase">Active Status</span>
              </div>
            </div>

            {/* 04 */}
            <div className="flex flex-col justify-between group p-6 border border-[#E2E0DD] bg-white rounded-xs shadow-xs hover:border-[#351779] transition-all">
              <div>
                <div className="flex items-center justify-between mb-3 font-mono">
                  <span className="text-[10px] font-bold text-[#8A8A85] uppercase tracking-wider">
                    Licence
                  </span>
                  <span className="text-xs font-bold text-[#351779]">
                    7020020
                  </span>
                </div>
                <h4 className="text-lg font-black uppercase text-[#080808] tracking-tight group-hover:text-[#351779] transition-colors mb-2">
                  Project Development
                </h4>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6 font-normal">
                  Stage-gate delivery assurance, capital feasibility, and PMO programme governance.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E2E0DD] flex items-center justify-between font-mono text-[11px] text-[#8A8A85]">
                <span>Practice 04</span>
                <span className="text-[#351779] font-bold uppercase">Active Status</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FAQs (Matching Architectural Dark Editorial Layout) ============== */}
      <section className="py-24 md:py-32 bg-[#080808] text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="flex items-center gap-3 mb-4 font-mono text-xs">
            <span className="text-[#FFC400] font-bold">FAQ / 06</span>
            <span className="w-8 h-[1px] bg-white/20" />
            <span className="text-white/50 uppercase tracking-widest">DISCOURSE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-12">
            Frequently Asked Questions<span className="text-[#FFC400]">.</span>
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ============== CONTACT FORM (Clean Editorial Dual Column) ============== */}
      <section id="contact" className="py-24 md:py-32 bg-[#080808] text-white border-t border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-radial from-[#FFC400]/10 via-[#351779]/08 to-transparent blur-3xl pointer-events-none opacity-60" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Editorial Summary */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4 font-mono text-xs">
                <span className="text-[#FFC400] font-bold uppercase tracking-widest">SCHEDULE A CONSULTATION</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-6">
                The fastest way to know whether we’re the right fit, <span className="text-[#351779] bg-[#FFC400] px-2 inline-block">is a conversation.</span>
              </h2>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light mb-8">
                We spend thirty minutes understanding your operational priorities and regulatory landscape. If we can create immediate leverage, we will show you exactly where.
              </p>
              
              <div className="space-y-4 pt-6 border-t border-white/10 text-xs sm:text-sm font-mono text-white/60">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#FFC400]" />
                  <span>30 minutes, structured, no presentation deck</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#FFC400]" />
                  <span>Senior Advisory Partner attendance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#FFC400]" />
                  <span>Non-disclosure & strict client confidentiality</span>
                </div>
              </div>
            </div>

            {/* Right Column: 2-Step Form */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
