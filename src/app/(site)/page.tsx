import Link from "next/link"
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react"
import { HeroSection } from "@/components/home/hero-section"
import { LogoSlider } from "@/components/home/logo-slider"
import { PositioningSection } from "@/components/home/positioning-section"
import { PracticeTabs } from "@/components/home/practice-tabs"
import { WhatDrivesUs } from "@/components/home/what-drives-us"
import { SectorDial } from "@/components/home/sector-dial"
import { LicensedActivitiesHome } from "@/components/home/licensed-activities-home"
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
      <PositioningSection />

      {/* ============== FOUR PRACTICES (The Asheron Standard) ============== */}
      <section id="phases" className="w-full bg-[#FFFFFF] text-[#080808] border-b border-[#E2E0DD] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <PracticeTabs />
        </div>
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
      <LicensedActivitiesHome />

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
