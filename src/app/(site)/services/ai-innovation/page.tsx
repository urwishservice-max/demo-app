import { Metadata } from "next"
import { AIHeroVideo } from "@/components/services/ai-hero-video"
import { FannedServiceCards } from "@/components/services/fanned-service-cards"
import { ApproachWorkflow } from "@/components/services/approach-workflow"

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

const earlyValueList = [
  "AI-assisted policy, procedure, and regulatory-change drafting with mandatory human review.",
  "KYC and customer due diligence file preparation, document summarisation, and quality assurance support.",
  "Compliance issue and action-tracker consolidation.",
  "Regulatory reporting preparation and management-information generation.",
  "Internal knowledge assistants built on approved policies, procedures, and guidance.",
  "Risk assessment support, control mapping, and evidence-pack preparation.",
  "Role-specific training content for first-line and control functions.",
  "Vendor due diligence and AI third-party risk evaluation."
]

export default function AIInnovationPage() {
  return (
    <div className="flex flex-col bg-white text-[#141414]">
      {/* HERO SECTION - VIEWPORT-OPTIMIZED FULL SIZE VIDEO */}
      <section className="relative overflow-hidden bg-white text-[#141414] min-h-[85vh] lg:min-h-[90vh] flex items-center pt-24 pb-20">
        <AIHeroVideo src="/control1.mp4" />

        <div className="relative z-10 w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-8">
          {/* LEFT FLANK: Licence & Main Title */}
          <div className="w-full lg:w-[32%] xl:w-[28%] max-w-[420px] bg-white/95 shadow-lg lg:shadow-none lg:bg-transparent p-6 sm:p-8 lg:p-0 rounded-2xl lg:rounded-none">
            {/* Borderless Licence Marker */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#CAC32C] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#1A1A1A]">
                Licence 7020039
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.1] tracking-tight text-[#141414]">
              AI that works within your controls.
            </h1>
          </div>

          {/* RIGHT FLANK: Narrative Description */}
          <div className="w-full lg:w-[32%] xl:w-[28%] max-w-[420px] bg-white/95 shadow-lg lg:shadow-none lg:bg-transparent p-6 sm:p-8 lg:p-0 rounded-2xl lg:rounded-none">
            <div className="space-y-4 text-sm sm:text-base text-[#383838] font-normal leading-relaxed">
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

      {/* WHERE AI DELIVERS EARLY VALUE */}
      <section className="py-24 bg-white border-b border-[#E7E7E3]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0F172A]">Where AI delivers early value</h2>
              <blockquote className="text-2xl md:text-3xl font-light text-[#8C8317] leading-snug border-l-2 border-[#CAC32C] pl-6 my-8">
                &ldquo;From AI experimentation to governed, scalable capability.&rdquo;
              </blockquote>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-5">
                {earlyValueList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-base sm:text-lg text-[#383838] font-normal">
                    <div className="w-2 h-2 rounded-full bg-[#CAC32C] mt-2.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REGULATORY DISCLAIMER */}
      <section className="py-12 bg-white border-t border-[#E7E7E3]">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            <strong className="text-neutral-900 font-semibold">Asheron provides advisory services only.</strong> We do not guarantee regulatory approval, compliance outcomes, or the performance of third-party AI systems. All AI-assisted outputs are designed to remain subject to human review and client accountability.
          </p>
        </div>
      </section>
    </div>
  )
}
