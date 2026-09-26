"use client"

import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative w-full min-h-[100dvh] lg:h-[100dvh] lg:max-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#FAFAF8] text-[#1A1A1A] pt-5 sm:pt-6 lg:pt-6 pb-3 sm:pb-4 lg:pb-4 border-b border-[#E7E7E3]">
      
      {/* 1. DUBAI SKYLINE SILHOUETTE (Bottom-Right Background) */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[58%] 2xl:w-[52%] max-w-[1400px] opacity-25 select-none mix-blend-multiply">
        <Image
          src="/dubai_skyline.jpg"
          alt="Dubai Skyline Architectural Silhouette"
          width={1400}
          height={780}
          className="h-auto w-full object-contain object-bottom filter contrast-125 brightness-95"
          priority
        />
      </div>

      {/* 2. MAIN CONTENT CONTAINER - FULL WINDOW WIDTH */}
      <div className="relative z-20 mx-auto w-full px-6 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-20 flex-1 flex flex-col justify-between">
        
        {/* TOP ROW: Editorial Navigation / Meta Bar */}
        <div className="flex items-center justify-between border-b border-[#E7E7E3]/70 pb-3 mb-2 lg:mb-3 shrink-0">
          {/* Top Left Breadcrumb */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs font-semibold tracking-[0.3em] text-[#555] uppercase select-none">
            <span>DUBAI</span>
            <span className="text-[#D4B924]">/</span>
            <span>ADVISORY</span>
            <span className="text-[#D4B924]">/</span>
            <span className="text-[#1A1A1A]">EXECUTION</span>
          </div>

          {/* Top Right Slogan */}
          <div className="text-right text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#202020] uppercase leading-tight select-none pr-12 sm:pr-14 md:pr-16">
            <p>TURN IDEAS</p>
            <p>INTO PROGRESS</p>
          </div>
        </div>

        {/* HERO TWO-COLUMN COMPOSITION */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center lg:items-end min-h-0">
          
          {/* LEFT COLUMN: Editorial Typography & Copy (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between lg:h-full lg:pt-3 lg:pb-1 z-20">
            
            <div className="flex items-start gap-4 sm:gap-6 md:gap-7 my-auto">
              
              {/* Vertical Side Category Rail */}
              <div className="hidden sm:flex flex-row items-center gap-3 pt-2.5 select-none shrink-0">
                <div className="w-[1px] h-16 bg-[#202020]/35 rounded-full" />
                <div className="flex flex-col gap-1 text-[9.5px] font-semibold tracking-[0.24em] text-[#6B6B6B] uppercase">
                  <span>PEOPLE</span>
                  <span>STRATEGY</span>
                  <span>TECHNOLOGY</span>
                  <span>OPERATIONS</span>
                </div>
              </div>

              {/* Main Typographic Lockup */}
              <div className="flex-1 min-w-0">
                
                {/* Visual Lockup: Giant "A" + "CTION." */}
                <div className="flex items-end gap-1 sm:gap-1.5 md:gap-2 select-none mb-4 lg:mb-5">
                  {/* Giant Gold "A" */}
                  <span
                    className="font-black text-[100px] sm:text-[120px] md:text-[140px] lg:text-[145px] xl:text-[170px] leading-[0.74] text-[#D4B924] tracking-tight shrink-0 select-none"
                    aria-hidden="true"
                  >
                    A
                  </span>

                  {/* Right side: Top Label + "CTION." */}
                  <div className="flex flex-col justify-between self-stretch pb-1 sm:pb-1.5">
                    <span className="text-[10px] sm:text-[11px] md:text-xs lg:text-[12.5px] font-bold tracking-[0.22em] text-[#202020] uppercase pl-0.5">
                      A DUBAI CONSULTANCY BUILT AROUND
                    </span>
                    <h1 className="text-[44px] sm:text-[54px] md:text-[66px] lg:text-[72px] xl:text-[88px] font-black tracking-tight leading-[0.78] text-[#141414]">
                      CTION.
                    </h1>
                  </div>
                </div>

                {/* Subtitle / Lead Paragraph */}
                <div className="max-w-[480px] pl-0.5">
                  <p className="text-[13.5px] sm:text-[14.5px] lg:text-[15px] text-[#3D3D3D] font-normal leading-[1.65] mb-5 lg:mb-6">
                    Asheron Management Consultancies, LLC is an advisory firm based in Dubai, United Arab Emirates. We work with boards, executive teams, and functional leaders on the problems that sit between intent and delivery: unclear operating models, unmanaged technology risk, capability gaps, and programmes that stall after approval.
                  </p>

                  {/* Horizontal Rule & Micro-Label */}
                  <div className="flex items-center gap-4 pt-1">
                    <div className="w-10 h-[2px] bg-[#141414]" />
                    <span className="text-xs font-bold tracking-[0.26em] text-[#141414] uppercase">
                      FROM INTENT TO IMPACT
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Left Corner Micro-Marker */}
            <div className="mt-4 lg:mt-0 pt-1 flex items-center gap-4 text-[10.5px] font-medium tracking-[0.26em] text-[#7A7A7A] uppercase select-none">
              <span className="font-bold text-[#D4B924]">01</span>
              <span>OPERATING MODELS</span>
            </div>

          </div>

          {/* RIGHT COLUMN: The Visual Hero Asset (abouthero.png) (7 cols on lg, perfectly fits window) */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-end w-full h-full min-h-0">
            
            <div className="relative w-full max-w-[520px] sm:max-w-[580px] lg:max-w-none lg:w-auto h-auto lg:h-[calc(100dvh-100px)] xl:h-[calc(100dvh-95px)] aspect-[1367/1150] shrink-0">
              
              {/* Asset Container */}
              <Image
                src="/abouthero.png"
                alt="Asheron Dubai Management Consultancy - Clarity Builds Momentum"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 55vw"
                className="object-contain object-bottom drop-shadow-lg"
                priority
              />

              {/* OVERLAY TEXT ON CONCRETE PILLAR (Centered directly on the vertical concrete pillar) */}
              <div className="absolute top-[15%] left-[57%] -translate-x-1/2 text-center pointer-events-none select-none z-20">
                <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-bold tracking-[0.28em] text-[#1F1F1F] leading-snug uppercase">
                  CLARITY<br />
                  BUILDS<br />
                  MOMENTUM
                </p>
                <div className="mx-auto mt-2 h-[1.5px] w-6 bg-[#1F1F1F]" />
              </div>

              {/* OVERLAY TEXT ON LOWER-RIGHT CONCRETE WALL */}
              <div className="absolute bottom-[9%] right-[18%] sm:right-[20%] text-left pointer-events-none select-none z-20">
                <p className="text-[9px] sm:text-[10px] lg:text-[11px] font-bold tracking-[0.28em] text-[#333333] leading-snug uppercase">
                  A<br />
                  BRIGHTER<br />
                  TOMORROW
                </p>
              </div>

              {/* ORBITAL ARC & SYSTEMS NODE OVERLAY (Anchored directly around the sun and asset) */}
              <div className="pointer-events-none absolute -top-[15%] -right-[8%] sm:-right-[12%] w-[120%] h-[120%] z-20 hidden md:block">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 600 600"
                  fill="none"
                >
                  {/* Architectural circular arc sweeping above the sun and out to the right */}
                  <path
                    d="M 330 30 A 240 240 0 0 1 540 250"
                    stroke="#202020"
                    strokeWidth="1.2"
                    strokeOpacity="0.35"
                    strokeLinecap="round"
                  />
                  {/* Mustard Gold accent node on the arc */}
                  <circle cx="540" cy="250" r="8" fill="#D4B924" />
                </svg>

                {/* Systems Node Label Stack positioned right next to the node */}
                <div className="absolute top-[38%] right-[2%] lg:right-[1%] flex flex-col gap-1 text-[9.5px] lg:text-[10px] font-semibold tracking-[0.24em] text-[#4A4A4A] uppercase select-none">
                  <span>IDEAS</span>
                  <span>PEOPLE</span>
                  <span>SYSTEMS</span>
                  <span>RESULTS</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
