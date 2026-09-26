import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Our Services | Strategy, AI, Capability & Project Advisory | Asheron",
  description: "Four licensed advisory practices: AI and innovation, strategy and management, people and capability, and project development — delivered for UAE organisations.",
}

const practices = [
  {
    id: "ai-innovation",
    name: "AI & Innovation",
    licence: "7020039",
    image: "/practice_ai.jpg",
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
    image: "/horse.png",
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
    image: "/tree.png",
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
    image: "/diffrent.png",
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
    <div className="flex flex-col bg-white text-[#1A1A1A]">
      {/* HEADER */}
      <section className="bg-white text-[#111111] pt-28 pb-16 sm:pt-32 sm:pb-24 border-b border-[#E7E7E3]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
              <span className="h-2 w-2 rounded-full bg-[#CAC32C] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#1A1A1A]">
                Licensed Advisory Practices
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.08] tracking-tight text-[#111111] mb-8">
              What we do.
            </h1>

            <p className="text-lg md:text-xl text-[#3A3A3A] font-light max-w-3xl leading-relaxed mb-10">
              Four practices, matched to our four licences. Asheron brings strategy, delivery, capability, and responsible innovation together — helping organisations turn priorities into controlled, measurable outcomes.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/services/complete-shelf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1A1A1A] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#CAC32C] hover:text-[#1A1A1A] transition-all shadow-sm"
              >
                <span>Launch 3D AI Practice Shelf</span>
                <span className="text-sm">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICES LISTING */}
      {practices.map((practice, index) => (
        <section 
          key={practice.id} 
          className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}`}
        >
          <div className="container mx-auto px-6 max-w-7xl">
            <div className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              <div className="flex-1 w-full">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="h-2 w-2 rounded-full bg-[#CAC32C] flex-shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1A1A1A]">
                    Licence {practice.licence}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#1A1A1A]">{practice.name}</h2>
                <p className="text-lg text-[#6B6B6B] mb-8 leading-relaxed">
                  {practice.summary}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {practice.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#CAC32C] mt-2.5 flex-shrink-0" />
                      <span className="text-[#4A4A4A]">{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={practice.href} 
                  className="inline-flex items-center gap-2 text-[#1A1A1A] font-semibold hover:text-[#CAC32C] transition-colors group"
                >
                  Explore practice <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>

              <div className="flex-1 w-full flex justify-center">
                <div className={`w-full max-w-md aspect-square rounded-2xl relative overflow-hidden border border-[#E7E7E3] shadow-md flex items-center justify-center p-6 ${practice.id === 'strategy' || practice.id === 'people' || practice.id === 'projects' ? 'bg-white' : 'bg-[#FAFAF8]'}`}>
                  <Image
                    src={practice.image}
                    alt={practice.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className={`${practice.id === 'strategy' || practice.id === 'people' || practice.id === 'projects' ? 'object-contain p-4' : 'object-cover'}`}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* CLOSING */}
      <section className="py-24 bg-[#FAFAF8] text-[#111111] text-center border-t border-[#E7E7E3]">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-[#202020]">
            Engage each practice independently — or combine them in sequence to move from strategic intent to sustainable operational delivery.
          </p>
        </div>
      </section>
    </div>
  )
}
