import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"

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
                  Licence 7020008
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.08] tracking-tight text-[#111111] mb-8">
                Capability that makes change stick.
              </h1>

              <p className="text-lg md:text-xl text-[#3A3A3A] font-light leading-relaxed max-w-2xl mb-10">
                Technology and strategy deliver results only when people understand their roles, hold the right skills, and are supported through change. Asheron designs practical workforce and capability interventions aligned to the operating model and business objectives.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1A1A1A] text-white text-sm font-semibold hover:bg-[#CAC32C] hover:text-[#1A1A1A] transition-all duration-300 group shadow-sm"
                >
                  <span>Consult our Capability Team</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <div className="flex items-center gap-2.5 text-xs text-[#6B6B6B] pl-2 border-l border-[#E7E7E3]">
                  <span>Organisation Design</span>
                  <span>•</span>
                  <span>AI Fluency</span>
                  <span>•</span>
                  <span>Emiratisation</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: tree.png artwork */}
            <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px]">
                <Image
                  src="/tree.png"
                  alt="Asheron People & Capability - Organic Architecture"
                  width={1491}
                  height={1055}
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
                We design and implement capability frameworks that ensure your workforce is equipped to deliver on strategic and operational goals.
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
              Programmes are designed to support national-talent development goals while ensuring that critical knowledge, capability, and succession planning are embedded within the business rather than retained by external providers.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
