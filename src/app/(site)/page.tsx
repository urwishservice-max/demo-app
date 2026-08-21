import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO */}
      <section className="relative bg-navy-900 text-white min-h-[85vh] flex items-center pt-10">
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          {/* Abstract structure/data pattern (placeholder CSS representation) */}
          <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(to_right,#5A6B7C_1px,transparent_1px),linear-gradient(to_bottom,#5A6B7C_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_70%_50%,#000_10%,transparent_100%)]" />
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight mb-8">
              From strategy to implementation — built for the UAE, designed to endure.
            </h1>
            <p className="text-lg md:text-2xl text-slate-200 font-light max-w-2xl leading-relaxed mb-10">
              Asheron helps organisations turn strategic, regulatory, and technology priorities into governed, measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Request a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-navy-900 bg-transparent">
                <Link href="/services">Explore Our Practices</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREDIBILITY STRIP */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600 font-medium text-center md:text-left">
            <span>Dubai, United Arab Emirates</span>
            <span className="hidden md:inline text-gold-300">&middot;</span>
            <span>Four licensed advisory practices</span>
            <span className="hidden md:inline text-gold-300">&middot;</span>
            <span>Regulated-sector experience</span>
            <span className="hidden md:inline text-gold-300">&middot;</span>
            <span>Practical, regulator-ready delivery</span>
          </div>
        </div>
      </section>

      {/* 3. HOME POSITIONING */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-navy-900 leading-tight">
              Advisory that survives contact with reality.
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
              Strategy documents, technology pilots, and training programmes often stall at the point of execution. Asheron works at that point. We combine strategic design with governance, capability, and delivery discipline so that decisions taken at board level become operational practice — with clear ownership, controls, and evidence.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FOUR PRACTICES */}
      <section className="py-24 bg-off-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Four practices, matched to our four licences.</h2>
            <p className="text-lg text-slate-600">
              Engage each practice independently — or combine them in sequence to move from strategic intent to sustainable operational delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Practice 1 */}
            <Link href="/services/ai-innovation" className="group flex flex-col bg-white p-10 border border-slate-200 rounded-sm hover:shadow-xl hover:border-gold-300/50 transition-all duration-300 ease-brand hover:-translate-y-1 h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-gold-500 transition-colors" />
              <div className="text-xs font-semibold tracking-wider text-gold-500 uppercase mb-4">7020039</div>
              <h3 className="text-2xl font-semibold mb-4 text-navy-900 group-hover:text-gold-500 transition-colors">AI & Innovation</h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                AI opportunity discovery, readiness diagnostics, responsible AI governance, workflow design, model and vendor assessment, and implementation assurance.
              </p>
              <div className="text-sm font-semibold text-navy-900 flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore practice <span>&rarr;</span>
              </div>
            </Link>

            {/* Practice 2 */}
            <Link href="/services/strategy" className="group flex flex-col bg-white p-10 border border-slate-200 rounded-sm hover:shadow-xl hover:border-gold-300/50 transition-all duration-300 ease-brand hover:-translate-y-1 h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-gold-500 transition-colors" />
              <div className="text-xs font-semibold tracking-wider text-gold-500 uppercase mb-4">7020003</div>
              <h3 className="text-2xl font-semibold mb-4 text-navy-900 group-hover:text-gold-500 transition-colors">Strategy & Management</h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                Operating-model design, strategic planning, process re-engineering, transformation roadmaps, KPI architecture, governance enhancement, and board advisory.
              </p>
              <div className="text-sm font-semibold text-navy-900 flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore practice <span>&rarr;</span>
              </div>
            </Link>

            {/* Practice 3 */}
            <Link href="/services/people" className="group flex flex-col bg-white p-10 border border-slate-200 rounded-sm hover:shadow-xl hover:border-gold-300/50 transition-all duration-300 ease-brand hover:-translate-y-1 h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-gold-500 transition-colors" />
              <div className="text-xs font-semibold tracking-wider text-gold-500 uppercase mb-4">7020008</div>
              <h3 className="text-2xl font-semibold mb-4 text-navy-900 group-hover:text-gold-500 transition-colors">People & Capability</h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                Workforce impact assessment, organisation design, capability frameworks, AI fluency programmes, leadership development, and change management.
              </p>
              <div className="text-sm font-semibold text-navy-900 flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore practice <span>&rarr;</span>
              </div>
            </Link>

            {/* Practice 4 */}
            <Link href="/services/projects" className="group flex flex-col bg-white p-10 border border-slate-200 rounded-sm hover:shadow-xl hover:border-gold-300/50 transition-all duration-300 ease-brand hover:-translate-y-1 h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-gold-500 transition-colors" />
              <div className="text-xs font-semibold tracking-wider text-gold-500 uppercase mb-4">7020020</div>
              <h3 className="text-2xl font-semibold mb-4 text-navy-900 group-hover:text-gold-500 transition-colors">Project Development</h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                Business cases, PMO design, programme mobilisation, stage-gate governance, vendor selection, project assurance, and programme recovery.
              </p>
              <div className="text-sm font-semibold text-navy-900 flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore practice <span>&rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16">How we work.</h2>
          
          <div className="relative">
            <div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gold-300/30" />
            <div className="md:hidden absolute left-6 top-0 h-full w-px bg-gold-300/30" />
            
            <div className="flex flex-col md:flex-row gap-12 md:gap-6 lg:gap-12 relative z-10">
              {[
                { num: "01", title: "Assess", desc: "Understand how work is actually performed, where value and risk sit, and what the operating environment allows." },
                { num: "02", title: "Prioritise", desc: "Rank opportunities by strategic value, feasibility, control requirements, and expected benefit." },
                { num: "03", title: "Design", desc: "Define the target operating model, governance, controls, and roles required to deliver it." },
                { num: "04", title: "Enable", desc: "Equip leadership and teams with the skills, guidance, and playbooks to run the new way of working." },
                { num: "05", title: "Assure", desc: "Support controlled rollout, validate safeguards, monitor outcomes, and refine." },
              ].map((step) => (
                <div key={step.num} className="flex-1 flex flex-row md:flex-col gap-6 md:gap-8">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-gold-300 text-gold-500 flex items-center justify-center font-semibold text-lg relative z-10">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY ASHERON */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16">Why organisations engage us.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="w-8 h-8 border-b-2 border-gold-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Deep UAE market experience</h3>
              <p className="text-slate-600 leading-relaxed">
                Advisory grounded in how UAE organisations, regulators, and markets actually operate, not imported templates.
              </p>
            </div>
            <div>
              <div className="w-8 h-8 border-b-2 border-gold-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Governance-first innovation</h3>
              <p className="text-slate-600 leading-relaxed">
                Technology and transformation delivered with accountable ownership, documented controls, and auditable evidence.
              </p>
            </div>
            <div>
              <div className="w-8 h-8 border-b-2 border-gold-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Delivery discipline</h3>
              <p className="text-slate-600 leading-relaxed">
                We stay through implementation, where most initiatives fail, and measure the result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold">Sectors we serve.</h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {[
              "Banking & Finance", "Insurance", "Fintech & Virtual Assets", 
              "Government & Public Sector", "Professional Services", 
              "Real Estate & Family Groups", "Trade & Logistics", "Healthcare & Education"
            ].map((sector) => (
              <Link key={sector} href="/industries" className="px-6 py-4 border border-slate-200 rounded-sm hover:border-navy-900 hover:bg-slate-50 transition-colors font-medium text-navy-900">
                {sector}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INSIGHTS PREVIEW */}
      <section className="py-24 bg-off-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Insights.</h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                Practical commentary on governance, AI adoption, and delivery in the UAE.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/insights">View all insights</Link>
            </Button>
          </div>
          
          <div className="border-l-4 border-gold-500 bg-white p-8 text-slate-600">
            The first insights will be published shortly. Please get in touch to discuss your priorities.
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-32 bg-navy-900 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Let's discuss what you are trying to deliver.
          </h2>
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl leading-relaxed mb-10">
            A short, confidential conversation is usually enough to establish whether we are the right fit.
          </p>
          <Button asChild size="lg" className="bg-white text-navy-900 hover:bg-slate-100">
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
