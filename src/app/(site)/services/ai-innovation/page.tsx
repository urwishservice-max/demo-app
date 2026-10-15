import { Metadata } from "next"
import { AIHeroVideo } from "@/components/services/ai-hero-video"
import { FannedServiceCards } from "@/components/services/fanned-service-cards"
import { ApproachWorkflow } from "@/components/services/approach-workflow"
import { EarlyValueSection } from "@/components/services/early-value-section"
import { ServiceJsonLd } from "@/components/seo/json-ld"


export const metadata: Metadata = {
  title: "AI Consulting & AI Governance in the UAE | Asheron",
  description: "AI readiness assessment, responsible AI governance, use-case prioritisation, vendor and model evaluation, workflow design, and implementation assurance for UAE organisations.",
}

const approachSteps = [
  {
    title: "Assess",
    desc: "Review AI maturity, current tools, data environment, processes, risks, and business objectives."
  },
  {
    title: "Prioritise",
    desc: "Build an opportunity register that ranks use cases by strategic value, feasibility, control requirements, implementation effort, and expected benefit."
  },
  {
    title: "Govern",
    desc: "Define accountable ownership, AI policy, data-handling rules, vendor due diligence, human oversight, testing standards, and monitoring arrangements."
  },
  {
    title: "Enable",
    desc: "Equip leadership and teams with role-specific guidance, practical use cases, approved prompts, and clear escalation procedures."
  },
  {
    title: "Implement and assure",
    desc: "Support controlled rollout, validate safeguards, monitor outcomes, and refine workflows as adoption matures."
  }
]


export default function AIInnovationPage() {
  return (
    <div className="flex flex-col bg-white text-[#141414]">
      <ServiceJsonLd
        name="AI & Innovation Practice"
        description="AI readiness assessment, responsible AI governance, use-case prioritisation, vendor and model evaluation, workflow design, and implementation assurance for UAE organisations."
        path="/services/ai-innovation"
        licenceNumber="7020039"
        serviceTypes={[
          "AI Strategy & Readiness",
          "AI Use-Case Discovery",
          "AI Governance & Assurance",
          "Generative AI Enablement",
          "AI Vendor & Model Assessment",
          "AI Workflow Design",
          "AI Training & Capability",
          "Implementation Oversight"
        ]}
      />
      {/* HERO SECTION - MOBILE: VIDEO UNBLOCKED WITH CONTENT BELOW / DESKTOP: FULLSCREEN WITH OVERLAY */}
      <section className="relative bg-white text-[#141414] overflow-hidden">
        {/* VIDEO CONTAINER: On mobile it has dedicated visible height (50vh to 60vh), on lg+ it is absolute background */}
        <div className="relative lg:absolute lg:inset-0 w-full h-[52vh] sm:h-[60vh] lg:h-full bg-white flex items-center justify-center overflow-hidden">
          <AIHeroVideo src="/control1.mp4" />
        </div>

        {/* CONTENT CONTAINER: On mobile flows cleanly UNDER the video, on lg+ floats as transparent flanks over the video */}
        <div className="relative z-10 w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 pt-6 pb-16 lg:py-32 min-h-0 lg:min-h-[88vh] flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-8 pointer-events-none">
          {/* LEFT FLANK: Licence & Main Title */}
          <div className="pointer-events-auto w-full lg:w-[34%] xl:w-[30%] max-w-[440px] bg-white lg:bg-transparent p-6 sm:p-8 lg:p-0 rounded-2xl border border-[#E2E0DD] lg:border-none shadow-sm lg:shadow-none">
            {/* Borderless Licence Marker */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
              <span className="h-2 w-2 rounded-full bg-[#FFC400] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#080808]">
                Licence 7020039
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.12] tracking-tight text-[#080808]">
              AI that works within your controls.
            </h1>
          </div>

          {/* RIGHT FLANK: Narrative Description */}
          <div className="pointer-events-auto w-full lg:w-[34%] xl:w-[30%] max-w-[440px] bg-white lg:bg-transparent p-6 sm:p-8 lg:p-0 rounded-2xl border border-[#E2E0DD] lg:border-none shadow-sm lg:shadow-none">
            <div className="space-y-4 text-sm sm:text-base text-[#080808]/75 font-normal leading-relaxed">
              <p>
                AI adoption should create measurable value without weakening governance, confidentiality, regulatory compliance, or accountability. Asheron helps organisations move from isolated experimentation to practical, controlled, and scalable AI-enabled ways of working.
              </p>
              <p>
                We begin by understanding how work is actually performed, where manual effort and decision bottlenecks sit, and which use cases are viable within your risk appetite. We then help establish the governance, operating model, training, and implementation controls needed to deploy AI responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES - GLOWING FANNED CARDS */}
      <FannedServiceCards />

      {/* APPROACH - WORKFLOW PIPELINE WITH PARALLAX */}
      <ApproachWorkflow />

      {/* WHERE AI DELIVERS EARLY VALUE & REGULATORY DISCLAIMER */}
      <EarlyValueSection />
    </div>
  )
}
