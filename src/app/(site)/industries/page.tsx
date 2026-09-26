import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Industries We Serve | Asheron Advisory, Dubai",
  description: "Asheron advises banks, finance companies, insurers, fintech and virtual-asset firms, government entities, professional services, and family groups across the UAE.",
}

const industries = [
  {
    title: "Banking & Finance",
    desc: "Banks, finance companies, and exchange houses addressing governance, operating-model, control, and transformation priorities."
  },
  {
    title: "Insurance",
    desc: "Insurers and intermediaries strengthening governance, controls, capability, and operational efficiency."
  },
  {
    title: "Fintech & Virtual Assets",
    desc: "Fast-scaling regulated businesses building proportionate governance and control frameworks without slowing growth."
  },
  {
    title: "Government & Public Sector",
    desc: "Entities delivering national and emirate-level priorities, digital initiatives, and capability programmes."
  },
  {
    title: "Professional Services",
    desc: "Firms with regulatory obligations that need practical frameworks, training, and delivery structure."
  },
  {
    title: "Real Estate & Family Groups",
    desc: "Groups formalising governance, decision rights, and programme delivery as they institutionalise."
  },
  {
    title: "Trade, Logistics & Commodities",
    desc: "Businesses managing regulatory exposure, counterparty risk, and operational complexity."
  },
  {
    title: "Healthcare & Education",
    desc: "Institutions balancing growth, workforce capability, and governance obligations."
  }
]

export default function IndustriesPage() {
  return (
    <div className="flex flex-col bg-white text-[#1A1A1A]">
      {/* HERO */}
      <section className="bg-white text-[#111111] pt-28 pb-16 sm:pt-32 sm:pb-24 border-b border-[#E7E7E3]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
              <span className="h-2 w-2 rounded-full bg-[#CAC32C] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#1A1A1A]">
                Sector Depth & Experience
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.08] tracking-tight text-[#111111] mb-8">
              Industries we serve.
            </h1>

            <p className="text-lg md:text-xl text-[#3A3A3A] font-light max-w-3xl leading-relaxed">
              Our work concentrates on organisations where governance, regulation, and delivery pressure meet.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 border border-[#E7E7E3] rounded-2xl hover:border-[#CAC32C] hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
              >
                <div className="w-8 h-8 border-b-2 border-[#E7E7E3] group-hover:border-[#CAC32C] transition-colors mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-[#111111] group-hover:text-[#CAC32C] transition-colors">{industry.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed flex-1">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-[#E7E7E3]">
        <div className="container mx-auto px-6 max-w-3xl text-center flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-8 text-[#111111]">
            Not sure where your organisation fits? Start with a conversation.
          </h2>
          <Button asChild size="lg" className="rounded-full bg-[#1A1A1A] text-white hover:bg-[#CAC32C] hover:text-[#1A1A1A]">
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
