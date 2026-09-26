import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"

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
    <div className="flex flex-col bg-white text-[#1A1A1A]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white text-[#111111] pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: Black text on white background */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center z-10">
              {/* Borderless Licence Marker */}
              <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
                <span className="h-2 w-2 rounded-full bg-[#CAC32C] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#1A1A1A]">
                  Licence 7020020
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.08] tracking-tight text-[#111111] mb-8">
                Projects built for delivery — not presentation.
              </h1>

              <p className="text-lg md:text-xl text-[#3A3A3A] font-light leading-relaxed max-w-2xl mb-10">
                Asheron helps clients move from an initial concept or business case to a governed, investable, and deliverable programme, providing independent structure and challenge across the project lifecycle.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1A1A1A] text-white text-sm font-semibold hover:bg-[#CAC32C] hover:text-[#1A1A1A] transition-all duration-300 group shadow-sm"
                >
                  <span>Consult our Projects Team</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <div className="flex items-center gap-2.5 text-xs text-[#6B6B6B] pl-2 border-l border-[#E7E7E3]">
                  <span>PMO Establishment</span>
                  <span>•</span>
                  <span>Programme Recovery</span>
                  <span>•</span>
                  <span>Assurance</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: diffrent.png artwork */}
            <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px]">
                <Image
                  src="/diffrent.png"
                  alt="Asheron Project Development - Engineering Precision"
                  width={1672}
                  height={941}
                  priority
                  unoptimized
                  className="w-full h-auto object-contain drop-shadow-xl select-none transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#CAC32C] mb-3">
                Disciplined Advisory
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#1A1A1A]">Core services</h2>
              <p className="text-lg text-[#6B6B6B] mb-8 leading-relaxed">
                We bring delivery discipline and rigorous governance to complex programmes, ensuring they achieve their intended outcomes.
              </p>
            </div>
            <div>
              <ul className="space-y-5">
                {coreServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E7E7E3] text-[#202020] shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-[#CAC32C] mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed font-medium text-sm sm:text-base">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UAE FOCUS */}
      <section className="py-24 bg-white border-t border-[#E7E7E3]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#CAC32C] mb-3">
              Regional Depth
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-[#1A1A1A]">UAE focus</h2>
            <p className="text-xl text-[#4A4A4A] leading-relaxed font-light border-l-4 border-[#CAC32C] pl-6">
              Suited to transformation initiatives, digital and AI programmes, regulated-business change, capability-building programmes, operational improvement, and strategic growth projects across the UAE.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
