import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Consulting & AI Governance in the UAE | Asheron",
  description: "AI readiness assessment, responsible AI governance, use-case prioritisation, vendor and model evaluation, workflow design, and implementation assurance for UAE organisations.",
}

const coreServices = [
  {
    title: "AI Strategy & Readiness",
    desc: "Assess business readiness, priority use cases, data availability, operating risks, and the foundations required for responsible adoption."
  },
  {
    title: "AI Use-Case Discovery",
    desc: "Identify and prioritise high-value use cases across compliance, risk, operations, customer due diligence, reporting, and management information."
  },
  {
    title: "AI Governance & Assurance",
    desc: "Develop proportionate policies, oversight structures, risk assessments, approval standards, human-review controls, and monitoring requirements."
  },
  {
    title: "Generative AI Enablement",
    desc: "Help teams use generative AI productively and safely for research, drafting, analysis, knowledge retrieval, and workflow support."
  },
  {
    title: "AI Vendor & Model Assessment",
    desc: "Evaluate AI vendors, models, data-processing practices, security architecture, contractual protections, and implementation risks."
  },
  {
    title: "AI Workflow Design",
    desc: "Redesign selected processes and define agent-assisted or automated workflows, controls, escalation routes, audit trails, and performance measures."
  },
  {
    title: "AI Training & Capability",
    desc: "Deliver role-specific training, responsible-use guidance, practical playbooks, and leadership workshops to embed secure AI adoption."
  },
  {
    title: "Implementation Oversight",
    desc: "Provide independent assurance across AI implementation, testing, control design, operational readiness, and post-launch monitoring."
  }
]

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
    <div className="flex flex-col">
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-24 pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold tracking-wider text-gold-500 uppercase mb-6">Licence 7020039</div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight mb-8">
              AI that works within your controls.
            </h1>
            <div className="space-y-6 text-lg md:text-xl text-slate-200 font-light max-w-3xl leading-relaxed">
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

      {/* CORE SERVICES */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-navy-900">Core services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, idx) => (
              <div key={idx} className="bg-white p-8 border border-slate-200 rounded-sm">
                <div className="w-8 h-8 border-b-2 border-gold-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-navy-900">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-navy-900">Our approach</h2>
          <div className="relative border-l border-gold-300/30 ml-4 md:ml-6 space-y-12 pb-4">
            {approachSteps.map((step, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                <div className="absolute left-[-17px] top-1 w-8 h-8 bg-white border border-gold-500 rounded-full flex items-center justify-center text-xs font-bold text-gold-500">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-navy-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg max-w-3xl">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EARLY VALUE */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8">Where AI delivers early value</h2>
              <blockquote className="text-2xl md:text-3xl font-light text-gold-300 leading-snug border-l-2 border-gold-500 pl-6 my-12">
                "From AI experimentation to governed, scalable capability."
              </blockquote>
            </div>
            <div>
              <ul className="space-y-6">
                {earlyValueList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-lg text-slate-200 font-light">
                    <div className="w-2 h-2 rounded-full bg-gold-500 mt-2.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="text-sm text-slate-500 leading-relaxed">
            <strong>Asheron provides advisory services only.</strong> We do not guarantee regulatory approval, compliance outcomes, or the performance of third-party AI systems. All AI-assisted outputs are designed to remain subject to human review and client accountability.
          </p>
        </div>
      </section>
    </div>
  )
}
