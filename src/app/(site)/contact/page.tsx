import { Metadata } from "next"
import { ContactForm } from "@/components/forms/contact-form"

export const metadata: Metadata = {
  title: "Contact Asheron | Request a Consultation | Dubai, UAE",
  description: "Request a confidential consultation with Asheron Management Consultancies in Dubai. Advisory across AI governance, strategy, capability, and project delivery.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* HERO */}
      <section className="bg-navy-900 text-white pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight mb-8">
              Request a consultation.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed">
              Tell us briefly what you are trying to deliver. We will respond within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* FORM & INFO SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Form Column */}
            <div className="flex-1 w-full max-w-3xl">
              <ContactForm />
            </div>

            {/* Info Column */}
            <div className="w-full lg:w-96 flex-shrink-0">
              <div className="sticky top-32 bg-slate-50 p-8 border border-slate-200 rounded-sm">
                <h2 className="text-xl font-semibold mb-8 text-navy-900">Contact Information</h2>
                
                <div className="space-y-6 text-sm text-slate-600">
                  <div>
                    <span className="block font-semibold text-navy-900 mb-1">Email:</span>
                    <a href="mailto:[EMAIL]" className="text-gold-500 hover:text-navy-900 transition-colors">[EMAIL]</a>
                  </div>
                  
                  <div>
                    <span className="block font-semibold text-navy-900 mb-1">Phone:</span>
                    <a href="tel:[PHONE]" className="hover:text-navy-900 transition-colors">[PHONE]</a>
                  </div>

                  <div>
                    <span className="block font-semibold text-navy-900 mb-1">Address:</span>
                    <address className="not-italic">
                      [OFFICE ADDRESS],<br />
                      Dubai, United Arab Emirates
                    </address>
                  </div>

                  <div>
                    <span className="block font-semibold text-navy-900 mb-1">LinkedIn:</span>
                    <a href="[LINKEDIN URL]" target="_blank" rel="noopener noreferrer" className="hover:text-navy-900 transition-colors">
                      Follow Asheron
                    </a>
                  </div>

                  <div className="pt-6 border-t border-slate-200">
                    <span className="block font-semibold text-navy-900 mb-2">Office hours:</span>
                    <p>Monday to Friday<br />09:00–18:00 (GST / UTC+4)</p>
                  </div>

                  {/* Booking Link (Optional per spec) */}
                  <div className="pt-6 border-t border-slate-200">
                    <a 
                      href="[BOOKING URL]" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center w-full h-10 px-4 border border-navy-900 text-navy-900 font-semibold rounded-sm hover:bg-slate-200 transition-colors"
                    >
                      Schedule a Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
