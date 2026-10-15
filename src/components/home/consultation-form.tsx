"use client"

import { useState } from "react"
import { CheckCircle2, ArrowRight, Loader2, AlertCircle } from "lucide-react"

export function ConsultationForm() {
  const [step, setStep] = useState<1 | 2>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    timeline: "This quarter",
    practice: "AI & Innovation",
    honeypot: "",
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  function validateStep1() {
    const errors: Record<string, string> = {}
    if (!formData.firstName.trim()) errors.firstName = "First name is required"
    if (!formData.lastName.trim()) errors.lastName = "Last name is required"

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      errors.email = "Work email is required"
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid corporate email address"
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  function handleNext(e: React.FormEvent) {
    e.preventDefault()
    if (!validateStep1()) return
    setStep(2)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setFieldErrors({ message: "Please provide at least 10 characters describing your inquiry." })
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json().catch(() => null)

      if (!res.ok) {
        throw new Error(data?.message || "Failed to submit consultation request.")
      }

      setSubmitted(true)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-[#351779]/40 bg-[#0c061a] p-8 md:p-12 text-center shadow-2xl">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFC400]/20 text-[#FFC400]">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">Consultation Requested</h3>
        <p className="mt-2 text-sm text-white/60 max-w-md mx-auto leading-relaxed">
          Thank you, {formData.firstName}. A senior advisory partner will review your inquiry and reach out within 24 business hours. A confirmation has been sent to your email.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setStep(1)
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              message: "",
              timeline: "This quarter",
              practice: "AI & Innovation",
              honeypot: "",
            })
          }}
          className="mt-6 text-xs text-[#FFC400] hover:underline cursor-pointer"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-3xl border border-[#351779]/40 bg-[#0c061a] p-8 md:p-12 shadow-2xl">
      <form onSubmit={step === 1 ? handleNext : handleSubmit} noValidate>
        {/* Hidden Honeypot for spam bots */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {submitError && (
          <div className="mb-6 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300">
            <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
            <span>{submitError}</span>
          </div>
        )}

        {step === 1 ? (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#FFC400]">
                Step 1/2 · About You
              </span>
              <span className="text-xs text-white/40">Confidential</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="firstName" className="text-xs text-white/60 font-medium">First name *</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="e.g. Tariq"
                  className={`rounded-xl border px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
                    fieldErrors.firstName ? "border-red-500 bg-red-500/[0.05]" : "border-white/10 bg-white/[0.04] focus:border-[#FFC400]"
                  }`}
                />
                {fieldErrors.firstName && <span className="text-[11px] text-red-400">{fieldErrors.firstName}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="lastName" className="text-xs text-white/60 font-medium">Last name *</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="e.g. Al-Mansoor"
                  className={`rounded-xl border px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
                    fieldErrors.lastName ? "border-red-500 bg-red-500/[0.05]" : "border-white/10 bg-white/[0.04] focus:border-[#FFC400]"
                  }`}
                />
                {fieldErrors.lastName && <span className="text-[11px] text-red-400">{fieldErrors.lastName}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs text-white/60 font-medium">Work email *</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@organisation.ae"
                className={`rounded-xl border px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
                  fieldErrors.email ? "border-red-500 bg-red-500/[0.05]" : "border-white/10 bg-white/[0.04] focus:border-[#FFC400]"
                }`}
              />
              {fieldErrors.email && <span className="text-[11px] text-red-400">{fieldErrors.email}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-xs text-white/60 font-medium">Phone number / Organisation</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+971 50 000 0000"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#FFC400] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full !py-3.5 mt-2 bg-[#351779] hover:bg-[#2B1263] text-white font-semibold transition-all shadow-md group cursor-pointer border border-[#351779]"
            >
              <span>Continue to Project Details</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#FFC400]" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#FFC400]">
                Step 2/2 · Mandate & Requirements
              </span>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
              >
                ← Back
              </button>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="practice" className="text-xs text-white/60 font-medium">Practice Area</label>
              <select
                id="practice"
                name="practice"
                value={formData.practice}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-[#130B29] px-4 py-3 text-sm text-white focus:border-[#FFC400] focus:outline-none"
              >
                <option value="AI & Innovation">AI & Innovation (Licence 7020039)</option>
                <option value="Strategy & Management">Strategy & Management (Licence 7020003)</option>
                <option value="People & Capability">People & Capability (Licence 7020008)</option>
                <option value="Project Development">Project Development (Licence 7020020)</option>
                <option value="Multi-Practice Transformation">Integrated Mandate</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="timeline" className="text-xs text-white/60 font-medium">Timeline</label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-[#130B29] px-4 py-3 text-sm text-white focus:border-[#FFC400] focus:outline-none"
              >
                <option value="Immediate">Immediate (Within 30 days)</option>
                <option value="This quarter">This quarter</option>
                <option value="Next quarter">Next quarter</option>
                <option value="Planning phase">Exploratory / Planning</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs text-white/60 font-medium">
                Context or objectives *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Give us as much detail as you can: operational challenges, AI opportunities, or transformation scope."
                className={`rounded-xl border px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
                  fieldErrors.message ? "border-red-500 bg-red-500/[0.05]" : "border-white/10 bg-white/[0.04] focus:border-[#FFC400]"
                }`}
              />
              {fieldErrors.message && <span className="text-[11px] text-red-400">{fieldErrors.message}</span>}
            </div>

            <div className="flex items-center gap-3 mt-2">
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => setStep(1)}
                className="inline-flex items-center justify-center gap-2 rounded-full !py-3.5 flex-1 text-white border border-white/20 hover:bg-white/10 transition-colors font-semibold cursor-pointer disabled:opacity-50"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-full !py-3.5 flex-1 bg-[#351779] hover:bg-[#2B1263] text-white font-semibold transition-all shadow-md cursor-pointer border border-[#351779] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin text-[#FFC400]" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Consultation Request</span>
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
