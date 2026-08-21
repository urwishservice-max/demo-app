import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Development, PMO & Programme Assurance UAE | Asheron",
  description: "Business cases, feasibility studies, PMO establishment, stage-gate governance, vendor selection, project assurance, and recovery of underperforming programmes in the UAE.",
}

const coreServices = [
  "Opportunity assessments, feasibility studies, and business cases.",
  "Project charters, scope definition, requirements, and benefits-realisation plans.",
  "PMO establishment, project governance, and reporting structures.",
  "Programme planning, mobilisation, delivery roadmaps, and dependency management.",
  "Stage-gate design, steering-committee support, and executive reporting.",
  "Vendor selection, evaluation criteria, due diligence, and implementation oversight.",
  "Independent project assurance, risk reviews, and delivery health checks.",
  "Recovery planning for delayed, complex, or underperforming programmes.",
  "Post-implementation reviews, lessons learned, and benefits tracking."
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-24 pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold tracking-wider text-gold-500 uppercase mb-6">Licence 7020020</div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight mb-8">
              Projects built for delivery — not presentation.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-light max-w-3xl leading-relaxed">
              Asheron helps clients move from an initial concept or business case to a governed, investable, and deliverable programme, providing independent structure and challenge across the project lifecycle.
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
                We bring delivery discipline and rigorous governance to complex programmes, ensuring they achieve their intended outcomes.
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
              Suited to transformation initiatives, digital and AI programmes, regulated-business change, capability-building programmes, operational improvement, and strategic growth projects across the UAE.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
