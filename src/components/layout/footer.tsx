"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { CookiePreferencesLink } from "@/components/cookie-preferences-link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const practices = [
    { name: "AI & Innovation", href: "/services/ai-innovation", meta: "Licence 7020039" },
    { name: "Strategy & Management", href: "/services/strategy", meta: "Licence 7020003" },
    { name: "People & Capability", href: "/services/people", meta: "Licence 7020008" },
    { name: "Project Development", href: "/services/projects", meta: "Licence 7020020" },
    { name: "All Advisory Practices", href: "/services", meta: "Full Directory" },
  ]

  const sectors = [
    { name: "Aviation & Aerospace", href: "/industries" },
    { name: "Banking & Financial Services", href: "/industries" },
    { name: "Healthcare & Life Sciences", href: "/industries" },
    { name: "Real Estate & Construction", href: "/industries" },
    { name: "Supply Chain & Logistics", href: "/industries" },
    { name: "Government & Public Entities", href: "/industries" },
  ]

  const company = [
    { name: "About Asheron", href: "/about" },
    { name: "Our Approach", href: "/approach" },
    { name: "Advisory Insights", href: "/insights" },
    { name: "Contact & Inquiries", href: "/contact" },
  ]

  return (
    <footer className="w-full bg-[#0D0D0C] text-white py-12 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Brutalist Grid Showcase Container (Matching Reference Mockup) */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#141413] border border-white/10 overflow-hidden shadow-2xl">
          
          {/* 1. Atmospheric Warm Bronze / Gold Glow Background */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Ambient Radial Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] sm:h-[600px] bg-radial from-[#FFC400]/20 via-[#351779]/25 to-transparent blur-3xl opacity-80" />
            
            {/* Architectural Shadow Silhouette Depth Overlay */}
            <div className="absolute inset-0 opacity-15 mix-blend-screen overflow-hidden">
              <Image
                src="/practice_ai.jpg"
                alt="Asheron Background Aesthetic"
                fill
                className="object-cover object-center filter grayscale contrast-125"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-transparent to-[#141413]/70" />
          </div>

          {/* 2. Top Bar (Logo on Left, Menu & Dubai Indicator on Right) */}
          <div className="relative z-20 flex items-center justify-between px-6 sm:px-10 py-6 border-b border-white/10">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold tracking-tight lowercase text-white hover:text-[#FFC400] transition-colors"
            >
              asheron
            </Link>

            <div className="flex items-center gap-4">
              <span className="text-[11px] font-mono tracking-widest uppercase text-white/40 hidden sm:inline">
                DUBAI · ADVISORY
              </span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#FFC400] hover:text-[#FFC400]"
                aria-label="Asheron on LinkedIn"
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* 3. Main Center Stage: 12-Column Grid with Giant Wordmark and Editorial Cells */}
          <div className="relative z-10 grid grid-cols-12">
            
            {/* Left Vertical Spine (Rotated Text) */}
            <div className="col-span-1 border-r border-white/10 hidden md:flex flex-col justify-between items-center py-8 text-white/40">
              <div className="writing-vertical -rotate-180 text-[10px] font-mono tracking-[0.28em] uppercase whitespace-nowrap">
                ♦ ESTABLISHED 2026 ♦
              </div>
              <span className="text-[10px] font-mono tracking-wider">
                ©
              </span>
            </div>

            {/* Right Main Grid Area (11 Cols on desktop, 12 on mobile) */}
            <div className="col-span-12 md:col-span-11 flex flex-col justify-between">
              
              {/* Row 1: Massive Display Typography 'asheron' (Matching 'dance' in reference) */}
              <div className="relative border-b border-white/10 py-8 sm:py-12 px-6 sm:px-12 flex items-center justify-center overflow-hidden">
                <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[130px] font-black tracking-[-0.04em] text-white/95 lowercase select-none drop-shadow-2xl">
                  asheron
                </h2>

                {/* Fine Wireframe Vertical Guidelines */}
                <div className="absolute inset-0 grid grid-cols-4 pointer-events-none divide-x divide-white/[0.06]" />
              </div>

              {/* Row 2: Comprehensive Directory Grid Containing ALL Original Data */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-b border-white/10">
                
                {/* Column 1: Practices */}
                <div className="p-6 sm:p-8 flex flex-col justify-between hover:bg-white/[0.02] transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono tracking-widest text-[#FFC400] uppercase font-bold">
                        Practices
                      </span>
                      <span className="text-[10px] font-mono text-white/40">01</span>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {practices.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="group inline-flex items-center gap-2 text-sm text-white/80 hover:text-[#FFC400] transition-colors"
                          >
                            <ArrowUpRight className="h-3.5 w-3.5 text-white/30 group-hover:text-[#FFC400] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-3 border-t border-white/10">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">
                      Licensed Activities
                    </span>
                  </div>
                </div>

                {/* Column 2: Sectors & Industries */}
                <div className="p-6 sm:p-8 flex flex-col justify-between hover:bg-white/[0.02] transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono tracking-widest text-white/60 uppercase font-bold">
                        Sectors & Industries
                      </span>
                      <span className="text-[10px] font-mono text-white/40">02</span>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {sectors.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="group inline-flex items-center gap-2 text-sm text-white/80 hover:text-[#FFC400] transition-colors"
                          >
                            <ArrowUpRight className="h-3.5 w-3.5 text-white/30 group-hover:text-[#FFC400] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-3 border-t border-white/10">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">
                      Regulated UAE Scope
                    </span>
                  </div>
                </div>

                {/* Column 3: Company */}
                <div className="p-6 sm:p-8 flex flex-col justify-between hover:bg-white/[0.02] transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono tracking-widest text-white/60 uppercase font-bold">
                        Company
                      </span>
                      <span className="text-[10px] font-mono text-white/40">03</span>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {company.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="group inline-flex items-center gap-2 text-sm text-white/80 hover:text-[#FFC400] transition-colors"
                          >
                            <ArrowUpRight className="h-3.5 w-3.5 text-white/30 group-hover:text-[#FFC400] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-3 border-t border-white/10">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">
                      Direct Advisory
                    </span>
                  </div>
                </div>

                {/* Column 4: Engagement & Mandate (With preview thumbnail card and CTA) */}
                <div className="p-6 sm:p-8 flex flex-col justify-between bg-black/20">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono tracking-widest text-[#FFC400] uppercase font-bold">
                        Engagement
                      </span>
                      <span className="text-[10px] font-mono text-white/40">04</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed mb-4">
                      Dubai-based strategy, AI governance, and capability advisory for UAE organisations.
                    </p>
                    <div className="flex flex-col gap-1.5 text-xs text-white/50 mb-6">
                      <span>Dubai, United Arab Emirates</span>
                      <span>Available for regional mandates</span>
                    </div>
                  </div>

                  <div>
                    {/* Embedded Central Preview Card */}
                    <div className="relative w-full h-24 rounded-xl overflow-hidden border border-white/15 mb-4">
                      <Image
                        src="/practice_strategy.jpg"
                        alt="Asheron Strategy Visual"
                        fill
                        className="object-cover object-center filter brightness-90"
                        sizes="(max-width: 768px) 100vw, 240px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                        <span className="text-[10px] font-mono text-white/90 uppercase tracking-wider flex items-center justify-between w-full">
                          <span>Executive Mandate</span>
                          <ArrowRight className="w-3 h-3 text-[#FFC400]" />
                        </span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#351779] hover:bg-[#2B1263] text-white font-semibold text-xs transition-all shadow-md active:scale-95 border border-[#351779]"
                    >
                      <span>Thirty minutes, no deck</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FFC400]" />
                    </Link>
                  </div>
                </div>

              </div>

              {/* Row 3: Reference Ticker & Toggle Graphic Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                <div className="p-4 sm:p-5 flex items-center justify-between text-xs text-white/60">
                  <span className="font-semibold text-white">AI Governance & Strategy</span>
                  <span className="text-xs font-mono text-white/40">7020039</span>
                </div>
                <div className="p-4 sm:p-5 flex items-center justify-between text-xs text-white/60">
                  <span className="font-semibold text-white">Target Operating Models</span>
                  <span className="text-xs font-mono text-white/40">7020003</span>
                </div>
                <div className="p-4 sm:p-5 flex items-center justify-between text-xs text-white/60">
                  <span className="font-semibold text-white">PMO Stage-Gate Assurance</span>
                  
                  {/* Wireframe Slider Toggle Icon (--o--) */}
                  <div className="flex items-center">
                    <div className="w-4 h-[1.5px] bg-white/20" />
                    <div className="w-3 h-3 rounded-full border border-white/40 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#FFC400]" />
                    </div>
                    <div className="w-4 h-[1.5px] bg-white/20" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 4. Complete Legal & Regulatory Bar (§3 & §7.2 Compliance) */}
          <div className="relative z-20 flex flex-col px-6 sm:px-10 py-6 bg-[#10100F] border-t border-white/10 text-xs text-white/40 gap-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-6">
                <span>&copy; {currentYear} Asheron Management Consultancies, LLC. All rights reserved.</span>
                <div className="flex items-center gap-4">
                  <Link href="/privacy" className="hover:text-white transition-colors">Privacy Notice</Link>
                  <span className="text-white/20">&middot;</span>
                  <Link href="/cookies" className="hover:text-white transition-colors">Cookie Notice</Link>
                  <span className="text-white/20">&middot;</span>
                  <CookiePreferencesLink />
                  <span className="text-white/20">&middot;</span>
                  <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
                </div>
              </div>
              <div>
                <span className="font-mono text-[11px] text-white/60">Licensed activities: 7020039 &middot; 7020003 &middot; 7020008 &middot; 7020020</span>
              </div>
            </div>

            {/* Required standing disclaimer (§7.2) */}
            <p className="text-[11px] leading-relaxed text-white/40 pt-3 border-t border-white/5">
              Asheron Management Consultancies, LLC provides management, strategy, capability, project, and innovation advisory services. Content on this website is general information only and does not constitute legal, regulatory, audit, tax, or investment advice. No advisory relationship is created by use of this website.
            </p>
          </div>

        </div>

      </div>
    </footer>
  )
}
