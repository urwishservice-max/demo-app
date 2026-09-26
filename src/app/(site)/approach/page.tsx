import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Our Approach | Governed Delivery for UAE Organisations | Asheron",
  description: "Asheron’s five-step approach connects assessment, prioritisation, design, enablement, and assurance to deliver controlled, measurable outcomes.",
}

const steps = [
  ["01", "Assess", "We understand how work is actually performed, where value and risk sit, and what the operating environment allows."],
  ["02", "Prioritise", "We rank opportunities by strategic value, feasibility, control requirements, implementation effort, and expected benefit."],
  ["03", "Design", "We define the target operating model, governance, controls, roles, and evidence required to deliver it."],
  ["04", "Enable", "We equip leadership and teams with the skills, guidance, and playbooks to run the new way of working."],
  ["05", "Assure", "We support controlled rollout, validate safeguards, monitor outcomes, and refine as conditions change."],
]

export default function ApproachPage() {
  return <div className="bg-white">
    <section className="relative overflow-hidden bg-off-white px-5 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44"><div className="grid-haze absolute inset-0" /><div className="relative mx-auto max-w-[1280px]"><p className="eyebrow mb-6">Our approach</p><h1 className="max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.065em] md:text-7xl">Execution earns confidence.</h1><p className="mt-8 max-w-2xl text-xl leading-9 text-slate-500">We use a practical five-step model that moves from an honest view of the present to a controlled, sustainable future state.</p></div></section>
    <section className="mx-auto max-w-[1280px] px-5 py-24 md:px-8 md:py-36"><div className="space-y-5">{steps.map(([number, title, description]) => <article key={number} className="group grid gap-6 rounded-2xl border border-slate-200 p-7 transition-all hover:border-gold-300 hover:shadow-[0_20px_45px_rgba(11,27,43,.08)] md:grid-cols-[140px_1fr_1.5fr] md:items-center md:p-10"><span className="text-4xl font-semibold tracking-[-.06em] text-gold-500">{number}</span><h2 className="m-0 text-3xl font-semibold tracking-[-.05em]">{title}</h2><p className="m-0 max-w-xl text-base leading-7 text-slate-500">{description}</p></article>)}</div></section>
    <section className="bg-[#FAFAF8] border-t border-[#E7E7E3] px-5 py-24 text-center text-[#111111] md:px-8 md:py-32"><div className="mx-auto max-w-2xl"><div className="flex items-center justify-center gap-2 mb-4"><span className="h-2 w-2 rounded-full bg-[#CAC32C]" /><span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1A1A1A]">The next step</span></div><h2 className="text-4xl font-bold tracking-[-.04em] text-[#111111] md:text-5xl">Bring the right people into the conversation early.</h2><Button asChild size="lg" className="mt-9 rounded-full bg-[#1A1A1A] text-white hover:bg-[#CAC32C] hover:text-[#1A1A1A]"><Link href="/contact">Request a consultation <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div></section>
  </div>
}
