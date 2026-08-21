"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

// Form validation schema using Zod
const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  workEmail: z.string().email("Please enter a valid work email").refine(
    (email) => {
      // Basic disposable email check
      const disposableDomains = ['tempmail.com', '10minutemail.com', 'mailinator.com', 'yopmail.com', 'guerrillamail.com']
      const domain = email.split('@')[1]
      return !disposableDomains.includes(domain?.toLowerCase() || '')
    },
    { message: "Please use a valid corporate email address" }
  ),
  phone: z.string().optional(),
  organisation: z.string().min(2, "Organisation is required"),
  jobTitle: z.string().optional(),
  country: z.string().min(1, "Please select a country/emirate"),
  areasOfInterest: z.array(z.string()).min(1, "Please select at least one area of interest"),
  enquiry: z.string().min(10, "Please provide more details").max(1000, "Enquiry must not exceed 1000 characters"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to data processing to submit an enquiry",
  }),
  marketingOptIn: z.boolean().optional(),
  honeypot: z.string().max(0, "Spam detected").optional(), // Honeypot field
})

type FormData = z.infer<typeof formSchema>

const areasOfInterestOptions = [
  "AI & Innovation",
  "Strategy & Management",
  "People & Capability",
  "Project Development",
  "Not sure yet"
]

const uaeEmirates = [
  "Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Umm Al Quwain", "Ras Al Khaimah", "Fujairah"
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      areasOfInterest: [],
      consent: false,
      marketingOptIn: false,
      phone: "+971 ",
      honeypot: "",
    }
  })

  const enquiryText = watch("enquiry") || ""
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    // Simulate API call for now. In production, this would call a Next.js Server Action / Route Handler
    try {
      if (data.honeypot) {
        // Silent success for bots
        return
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        const body = await response.json().catch(() => null)
        throw new Error(body?.message || "Unable to send your enquiry.")
      }
      router.push("/contact/thank-you")
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "We were unable to send your enquiry. Please try again, or email us directly at [EMAIL].")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Honeypot field - visually hidden */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="honeypot">Leave this field empty</label>
        <input type="text" id="honeypot" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium text-navy-900 flex items-center justify-between">
            Full name <span className="text-error">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-navy-900 transition-shadow ${errors.fullName ? 'border-error' : 'border-slate-300'}`}
            {...register("fullName")}
          />
          {errors.fullName && <p className="text-error text-xs">{errors.fullName.message}</p>}
        </div>

        {/* Work Email */}
        <div className="space-y-2">
          <label htmlFor="workEmail" className="text-sm font-medium text-navy-900 flex items-center justify-between">
            Work email <span className="text-error">*</span>
          </label>
          <input
            id="workEmail"
            type="email"
            className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-navy-900 transition-shadow ${errors.workEmail ? 'border-error' : 'border-slate-300'}`}
            {...register("workEmail")}
          />
          {errors.workEmail && <p className="text-error text-xs">{errors.workEmail.message}</p>}
        </div>

        {/* Organisation */}
        <div className="space-y-2">
          <label htmlFor="organisation" className="text-sm font-medium text-navy-900 flex items-center justify-between">
            Organisation <span className="text-error">*</span>
          </label>
          <input
            id="organisation"
            type="text"
            className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-navy-900 transition-shadow ${errors.organisation ? 'border-error' : 'border-slate-300'}`}
            {...register("organisation")}
          />
          {errors.organisation && <p className="text-error text-xs">{errors.organisation.message}</p>}
        </div>

        {/* Job Title */}
        <div className="space-y-2">
          <label htmlFor="jobTitle" className="text-sm font-medium text-navy-900">
            Job title
          </label>
          <input
            id="jobTitle"
            type="text"
            className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-navy-900 transition-shadow"
            {...register("jobTitle")}
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-navy-900">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-navy-900 transition-shadow"
            {...register("phone")}
          />
        </div>

        {/* Country / Emirate */}
        <div className="space-y-2">
          <label htmlFor="country" className="text-sm font-medium text-navy-900 flex items-center justify-between">
            Country / Emirate <span className="text-error">*</span>
          </label>
          <select
            id="country"
            className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-navy-900 transition-shadow bg-white ${errors.country ? 'border-error' : 'border-slate-300'}`}
            {...register("country")}
          >
            <option value="">Please select</option>
            <optgroup label="United Arab Emirates">
              {uaeEmirates.map(emirate => <option key={emirate} value={emirate}>{emirate}</option>)}
            </optgroup>
            <optgroup label="Other Countries">
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Oman">Oman</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Qatar">Qatar</option>
              <option value="Kuwait">Kuwait</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Other">Other</option>
            </optgroup>
          </select>
          {errors.country && <p className="text-error text-xs">{errors.country.message}</p>}
        </div>
      </div>

      {/* Areas of Interest */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-navy-900 flex items-center justify-between">
          Area of interest <span className="text-error">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {areasOfInterestOptions.map(option => (
            <label key={option} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                value={option}
                className="mt-1 w-4 h-4 text-navy-900 border-slate-300 rounded-sm focus:ring-navy-900"
                {...register("areasOfInterest")}
              />
              <span className="text-sm text-slate-700 group-hover:text-navy-900">{option}</span>
            </label>
          ))}
        </div>
        {errors.areasOfInterest && <p className="text-error text-xs">{errors.areasOfInterest.message}</p>}
      </div>

      {/* Enquiry Textarea */}
      <div className="space-y-2">
        <div className="flex justify-between items-baseline">
          <label htmlFor="enquiry" className="text-sm font-medium text-navy-900 flex items-center justify-between">
            How can we help? <span className="text-error">*</span>
          </label>
          <span className={`text-xs ${enquiryText.length > 1000 ? 'text-error' : 'text-slate-500'}`}>
            {enquiryText.length} / 1000
          </span>
        </div>
        <textarea
          id="enquiry"
          rows={5}
          maxLength={1000}
          className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-navy-900 transition-shadow resize-y ${errors.enquiry ? 'border-error' : 'border-slate-300'}`}
          {...register("enquiry")}
        ></textarea>
        {errors.enquiry && <p className="text-error text-xs">{errors.enquiry.message}</p>}
      </div>

      {/* Consent Checkboxes */}
      <div className="space-y-6 pt-4 border-t border-slate-200">
        <div className="space-y-1">
          <label className="flex items-start gap-4 cursor-pointer group">
            <input
              type="checkbox"
              className="mt-1 w-5 h-5 text-navy-900 border-slate-300 rounded-sm focus:ring-navy-900 flex-shrink-0"
              {...register("consent")}
            />
            <span className="text-sm text-slate-600 leading-relaxed">
              I consent to Asheron Management Consultancies, LLC collecting and processing the personal data I have provided in order to respond to my enquiry, in accordance with the Privacy Notice. <span className="text-error">*</span>
            </span>
          </label>
          {errors.consent && <p className="text-error text-xs ml-9">{errors.consent.message}</p>}
        </div>

        <label className="flex items-start gap-4 cursor-pointer group">
          <input
            type="checkbox"
            className="mt-1 w-5 h-5 text-navy-900 border-slate-300 rounded-sm focus:ring-navy-900 flex-shrink-0"
            {...register("marketingOptIn")}
          />
          <span className="text-sm text-slate-600 leading-relaxed">
            I would like to receive occasional insights and updates from Asheron. I understand I can withdraw this consent at any time.
          </span>
        </label>
      </div>

      {submitError && (
        <div className="p-4 bg-error/10 border border-error/20 rounded-sm text-error text-sm font-medium" role="alert" aria-live="assertive">
          {submitError}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto px-12" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Enquiry"}
      </Button>
      
      <p className="text-xs text-slate-500 mt-4 leading-relaxed font-medium">
        <strong>Confidentiality Note:</strong> Please do not submit confidential, privileged, or client-identifying information through this form. We will arrange a secure channel where needed.
      </p>
    </form>
  )
}
