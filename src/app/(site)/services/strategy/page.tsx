import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Strategy & Management Consulting in Dubai, UAE | Asheron",
  description: "Operating-model design, strategic planning, governance enhancement, process re-engineering, KPI frameworks, feasibility studies, and board advisory in the UAE.",
}

const coreServices = [
  "Corporate, business-unit, and functional strategy.",
  "Operating-model assessment and target operating-model design.",
  "Governance structures, decision rights, committees, and management forums.",
  "Process mapping, simplification, re-engineering, and control optimisation.",
  "Transformation strategies and prioritised implementation roadmaps.",
  "KPI, KRI, management-information, and performance-management frameworks.",
  "Business planning, feasibility studies, and investment cases.",
  "Board and executive advisory on strategic risk, performance, and delivery."
]

export default function StrategyPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-24 pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold tracking-wider text-gold-500 uppercase mb-6">Licence 7020003</div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight mb-8">
              Strategy that can be executed.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-light max-w-3xl leading-relaxed">
              Asheron supports boards, executive teams, and business leaders in translating growth, transformation, regulatory, and operational priorities into a clear operating model and a deliverable roadmap.
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
                We design strategy and operating models that survive contact with reality, establishing clear ownership, process, and governance.
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
              Support is tailored to UAE conditions: growth and diversification initiatives, digital transformation, regulated-business requirements, public and private sector operating models, and market-entry or expansion priorities across the Emirates and wider GCC.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
