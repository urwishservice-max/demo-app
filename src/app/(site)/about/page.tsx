import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LeadershipCard } from "@/components/ui/leadership-card"
import { AboutHero } from "@/components/about/about-hero"
import { WhatWeBelieve } from "@/components/about/what-we-believe"
import { HowWeAreDifferent } from "@/components/about/how-we-are-different"

import { LicensedActivities } from "@/components/about/licensed-activities"

export const metadata: Metadata = {
  title: "About Asheron | Dubai-Based Advisory Consultancy",
  description: "Asheron Management Consultancies is a Dubai-based advisory firm combining strategy, AI governance, capability building, and project delivery for UAE organisations.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION MATCHING REFERENCE */}
      <AboutHero />

      {/* WHAT WE BELIEVE - INTERACTIVE CHECKERBOARD SECTION */}
      <WhatWeBelieve />

      {/* HOW WE ARE DIFFERENT - PARALLAX STACKING CARDS */}
      <HowWeAreDifferent />

      {/* LEADERSHIP */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-navy-900">Leadership</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LeadershipCard 
              name="[LEADERSHIP NAME]"
              title="[TITLE]"
              biography="[150–200 WORD BIOGRAPHY]"
              image="[PROFESSIONAL PHOTOGRAPH]"
              linkedinUrl="[LINKEDIN URL]"
            />
          </div>
        </div>
      </section>

      {/* LICENSED ACTIVITIES - INTERACTIVE TRAFFIC LIGHT SCROLL EXPERIENCE */}
      <LicensedActivities />
    </div>
  )
}
