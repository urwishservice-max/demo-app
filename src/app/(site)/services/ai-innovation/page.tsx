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
      {/* HERO SECTION - VIEWPORT-OPTIMIZED FULL SIZE VIDEO */}
      <section className="relative overflow-hidden bg-white text-[#141414] min-h-[85vh] lg:min-h-[90vh] flex items-center pt-24 pb-20">
        <AIHeroVideo src="/control1.mp4" />

        <div className="relative z-10 w-full max-w-[1700px] mx-auto px-5 sm:px-10 lg:px-12 xl:px-16 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-10 lg:gap-8 pointer-events-none">
          {/* LEFT FLANK: Licence & Main Title */}
          <div className="pointer-events-auto w-full lg:w-[34%] xl:w-[30%] max-w-[440px] bg-white/70 backdrop-blur-md border border-white/60 shadow-xl lg:shadow-none lg:bg-transparent lg:border-none p-5 sm:p-7 lg:p-0 rounded-2xl lg:rounded-none">
            {/* Borderless Licence Marker */}
            <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
              <span className="h-2 w-2 rounded-full bg-[#FFC400] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#080808]">
                Licence 7020039
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.12] tracking-tight text-[#080808]">
              AI that works within your controls.
            </h1>
          </div>

          {/* RIGHT FLANK: Narrative Description */}
          <div className="pointer-events-auto w-full lg:w-[34%] xl:w-[30%] max-w-[440px] bg-white/70 backdrop-blur-md border border-white/60 shadow-xl lg:shadow-none lg:bg-transparent lg:border-none p-5 sm:p-7 lg:p-0 rounded-2xl lg:rounded-none">
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-base text-[#080808]/85 font-normal leading-relaxed">
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
