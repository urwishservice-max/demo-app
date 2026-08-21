import { Metadata } from "next"

export const metadata: Metadata = {
  title: "People & Capability Consulting UAE | Organisation Design & AI Fluency | Asheron",
  description: "Organisation design, workforce assessment, capability frameworks, AI fluency programmes, leadership development, change management, and Emiratisation-aligned capability building.",
}

const coreServices = [
  "Organisation design, role clarity, and accountability mapping.",
  "Workforce assessments and future-skills planning.",
  "Capability frameworks for leadership, operations, compliance, risk, and AI-enabled work.",
  "Role-based AI fluency, responsible-use, and practical adoption programmes.",
  "Learning pathways, training curricula, workshops, and playbooks.",
  "Change-impact assessments, stakeholder engagement, and communications planning.",
  "Performance and competency frameworks.",
  "Emiratisation-aligned capability strategies, development pathways, and knowledge-transfer plans."
]

export default function PeoplePage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-24 pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold tracking-wider text-gold-500 uppercase mb-6">Licence 7020008</div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight mb-8">
              Capability that makes change stick.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-light max-w-3xl leading-relaxed">
              Technology and strategy deliver results only when people understand their roles, hold the right skills, and are supported through change. Asheron designs practical workforce and capability interventions aligned to the operating model and business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-navy-900">Core services</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We design and implement capability frameworks that ensure your workforce is equipped to deliver on strategic and operational goals.
              </p>
            </div>
            <div>
              <ul className="space-y-6">
                {coreServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-lg text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-gold-500 mt-2.5 flex-shrink-0" />
                    <span className="leading-relaxed">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UAE FOCUS */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-navy-900">UAE focus</h2>
            <p className="text-xl text-slate-600 leading-relaxed font-light border-l-4 border-gold-500 pl-6">
              Programmes are designed to support national-talent development goals while ensuring that critical knowledge, capability, and succession planning are embedded within the business rather than retained by external providers.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
