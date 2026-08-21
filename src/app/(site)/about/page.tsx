import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LeadershipCard } from "@/components/ui/leadership-card"

export const metadata: Metadata = {
  title: "About Asheron | Dubai-Based Advisory Consultancy",
  description: "Asheron Management Consultancies is a Dubai-based advisory firm combining strategy, AI governance, capability building, and project delivery for UAE organisations.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-24 pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight mb-8">
              A Dubai consultancy built around execution.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-light max-w-3xl leading-relaxed">
              Asheron Management Consultancies, LLC is an advisory firm based in Dubai, United Arab Emirates. We work with boards, executive teams, and functional leaders on the problems that sit between intent and delivery: unclear operating models, unmanaged technology risk, capability gaps, and programmes that stall after approval.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-navy-900">What we believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex gap-6">
              <span className="text-2xl font-light text-gold-300">01</span>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                Advice is only valuable if it can be implemented within the client's real constraints.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="text-2xl font-light text-gold-300">02</span>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                Innovation and control are not opposites; the strongest organisations design both at once.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="text-2xl font-light text-gold-300">03</span>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                Capability must transfer to the client team, not remain with the adviser.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="text-2xl font-light text-gold-300">04</span>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                Independence and discretion are conditions of the work, not features of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE ARE DIFFERENT */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-navy-900">How we are different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-navy-900">Locally grounded.</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our recommendations reflect UAE regulatory expectations, market conditions, workforce realities, and national priorities.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-navy-900">Multi-disciplinary by design.</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Strategy, technology governance, capability, and delivery are handled by one integrated practice rather than four disconnected vendors.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-navy-900">Proportionate.</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                We size governance and process to the organisation in front of us — not to a global template.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-navy-900">Accountable.</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Every engagement defines owners, decision rights, milestones, and evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-navy-900">Leadership</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LeadershipCard 
              name="[LEADERSHIP NAME]"
              title="[TITLE]"
              biography="[150–200 WORD BIOGRAPHY]"
              image="[PROFESSIONAL PHOTOGRAPH]"
              linkedinUrl="[LINKEDIN URL]"
            />
          </div>
        </div>
      </section>

      {/* LICENSED ACTIVITIES */}
      <section className="py-24 bg-off-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-navy-900">Licensed activities</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Asheron operates under the following licensed activities in the United Arab Emirates:
            </p>
            
            <div className="bg-white border border-slate-200 rounded-sm overflow-hidden mb-12">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="py-4 px-6 font-semibold text-navy-900">Practice</th>
                    <th className="py-4 px-6 font-semibold text-navy-900 text-right">Licence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6">AI & Innovation</td>
                    <td className="py-4 px-6 text-right font-mono text-sm">7020039</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6">Strategy & Management</td>
                    <td className="py-4 px-6 text-right font-mono text-sm">7020003</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6">People & Capability</td>
                    <td className="py-4 px-6 text-right font-mono text-sm">7020008</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6">Project Development</td>
                    <td className="py-4 px-6 text-right font-mono text-sm">7020020</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 p-6 border border-slate-200 rounded-sm mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
                <div>
                  <span className="block font-semibold text-navy-900 mb-1">Trade licence number:</span>
                  <span className="font-mono">[TRADE LICENCE NUMBER]</span>
                </div>
                <div>
                  <span className="block font-semibold text-navy-900 mb-1">Registered address:</span>
                  <span>[REGISTERED ADDRESS]</span>
                </div>
              </div>
            </div>

            <Button asChild size="lg">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
