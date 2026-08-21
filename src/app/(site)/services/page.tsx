import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Services | Strategy, AI, Capability & Project Advisory | Asheron",
  description: "Four licensed advisory practices: AI and innovation, strategy and management, people and capability, and project development — delivered for UAE organisations.",
}

const practices = [
  {
    id: "ai-innovation",
    name: "AI & Innovation",
    licence: "7020039",
    summary: "AI adoption should create measurable value without weakening governance, confidentiality, regulatory compliance, or accountability. Asheron helps organisations move from isolated experimentation to practical, controlled, and scalable AI-enabled ways of working.",
    bullets: [
      "AI Strategy & Readiness",
      "AI Use-Case Discovery",
      "AI Governance & Assurance",
      "Generative AI Enablement",
      "AI Vendor & Model Assessment",
      "Implementation Oversight"
    ],
    href: "/services/ai-innovation"
  },
  {
    id: "strategy",
    name: "Strategy & Management",
    licence: "7020003",
    summary: "Strategy that can be executed. Asheron supports boards, executive teams, and business leaders in translating growth, transformation, regulatory, and operational priorities into a clear operating model and a deliverable roadmap.",
    bullets: [
      "Corporate & Business-Unit Strategy",
      "Target Operating-Model Design",
      "Governance & Decision Rights",
      "Process Re-engineering",
      "KPI & Performance Frameworks",
      "Board & Executive Advisory"
    ],
    href: "/services/strategy"
  },
  {
    id: "people",
    name: "People & Capability",
    licence: "7020008",
    summary: "Capability that makes change stick. Technology and strategy deliver results only when people understand their roles, hold the right skills, and are supported through change.",
    bullets: [
      "Organisation Design",
      "Workforce & Skills Planning",
      "Capability Frameworks",
      "AI Fluency Programmes",
      "Change Management",
      "Emiratisation-aligned Capability"
    ],
    href: "/services/people"
  },
  {
    id: "projects",
    name: "Project Development",
    licence: "7020020",
    summary: "Projects built for delivery — not presentation. Asheron helps clients move from an initial concept or business case to a governed, investable, and deliverable programme.",
    bullets: [
      "Business Cases & Feasibility",
      "PMO Establishment",
      "Programme Mobilisation",
      "Stage-Gate Governance",
      "Vendor Selection & Oversight",
      "Programme Recovery"
    ],
    href: "/services/projects"
  }
]

export default function ServicesHubPage() {
  return (
    <div className="flex flex-col">
      {/* HEADER */}
      <section className="bg-navy-900 text-white pt-24 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight mb-8">
              What we do.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-light max-w-3xl leading-relaxed">
              Four practices, matched to our four licences. Asheron brings strategy, delivery, capability, and responsible innovation together — helping organisations turn priorities into controlled, measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* PRACTICES LISTING */}
      {practices.map((practice, index) => (
        <section 
          key={practice.id} 
          className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-off-white'}`}
        >
          <div className="container mx-auto px-6 max-w-7xl">
            <div className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              <div className="flex-1 w-full">
                <div className="text-sm font-semibold tracking-wider text-gold-500 uppercase mb-4">Licence {practice.licence}</div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-navy-900">{practice.name}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {practice.summary}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {practice.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2.5 flex-shrink-0" />
                      <span className="text-slate-600">{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={practice.href} 
                  className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-gold-500 transition-colors group"
                >
                  Explore practice <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>

              <div className="flex-1 w-full flex justify-center">
                <div className="w-full max-w-md aspect-square bg-slate-100 rounded-sm relative overflow-hidden border border-slate-200 flex items-center justify-center text-slate-400">
                  {/* Abstract visual placeholder */}
                  [Abstract Visual: {practice.name}]
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* CLOSING */}
      <section className="py-24 bg-navy-900 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-2xl md:text-3xl font-light leading-relaxed">
            Engage each practice independently — or combine them in sequence to move from strategic intent to sustainable operational delivery.
          </p>
        </div>
      </section>
    </div>
  )
}
