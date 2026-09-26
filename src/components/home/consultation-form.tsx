"use client"

import { useState } from "react"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function ConsultationForm() {
  const [step, setStep] = useState<1 | 2>(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    timeline: "This quarter",
    practice: "AI & Innovation",
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleNext(e: React.FormEvent) {
    e.preventDefault()
    if (!formData.firstName || !formData.email) {
      alert("Please enter your name and work email.")
      return
    }
    setStep(2)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-white/10 bg-[#202020] p-8 md:p-12 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#CAC32C]/20 text-[#CAC32C]">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">Consultation Requested</h3>
        <p className="mt-2 text-sm text-white/60 max-w-md mx-auto">
          Thank you, {formData.firstName}. A senior advisory partner will review your inquiry and reach out within 24 business hours.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#202020] p-8 md:p-12">
      <form onSubmit={step === 1 ? handleNext : handleSubmit}>
        
        {step === 1 ? (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#CAC32C]">
                Step 1/2 · About You
              </span>
              <span className="text-xs text-white/40">Confidential</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-white/60 font-medium">First name *</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="e.g. Tariq"
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#CAC32C] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-white/60 font-medium">Last name *</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="e.g. Al-Mansoor"
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#CAC32C] focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/60 font-medium">Work email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@organisation.ae"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#CAC32C] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/60 font-medium">Phone number / Organisation</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+971 50 000 0000"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#CAC32C] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="btn btn--primary !py-3.5 mt-2 justify-center"
            >
              Continue to Project Details <ArrowRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#CAC32C]">
                Step 2/2 · Mandate & Requirements
              </span>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-white/50 hover:text-white transition-colors"
              >
                ← Back
              </button>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/60 font-medium">Practice Area</label>
              <select
                name="practice"
                value={formData.practice}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-sm text-white focus:border-[#CAC32C] focus:outline-none"
              >
                <option value="AI & Innovation">AI & Innovation (Licence 7020039)</option>
                <option value="Strategy & Management">Strategy & Management (Licence 7020003)</option>
                <option value="People & Capability">People & Capability (Licence 7020008)</option>
                <option value="Project Development">Project Development (Licence 7020020)</option>
                <option value="Multi-Practice Transformation">Integrated Mandate</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/60 font-medium">Timeline</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-sm text-white focus:border-[#CAC32C] focus:outline-none"
              >
                <option value="Immediate">Immediate (Within 30 days)</option>
                <option value="This quarter">This quarter</option>
                <option value="Next quarter">Next quarter</option>
                <option value="Planning phase">Exploratory / Planning</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/60 font-medium">
                Context or objectives *
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Give us as much detail as you can: operational challenges, AI opportunities, or transformation scope."
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#CAC32C] focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3 mt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn btn--outline !py-3.5 flex-1 justify-center text-white border-white/20 hover:bg-white/10"
              >
                Back
              </button>
              <button
                type="submit"
                className="btn btn--primary !py-3.5 flex-1 justify-center"
              >
                Submit Consultation Request
              </button>
            </div>
          </div>
        )}

      </form>
    </div>
  )
}
