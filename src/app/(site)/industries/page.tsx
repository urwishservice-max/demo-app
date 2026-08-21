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
    <div className="flex flex-col">
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-24 pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight mb-8">
              Industries we serve.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-light max-w-3xl leading-relaxed">
              Our work concentrates on organisations where governance, regulation, and delivery pressure meet.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 border border-slate-200 rounded-sm hover:border-gold-300/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
              >
                <div className="w-8 h-8 border-b-2 border-slate-200 group-hover:border-gold-500 transition-colors mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-navy-900 group-hover:text-gold-500 transition-colors">{industry.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-3xl text-center flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-8 text-navy-900">
            Not sure where your organisation fits? Start with a conversation.
          </h2>
          <Button asChild size="lg">
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
