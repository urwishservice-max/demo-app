import { Metadata } from "next"
import { ContactForm } from "@/components/forms/contact-form"

export const metadata: Metadata = {
  title: "Contact Asheron | Request a Consultation | Dubai, UAE",
  description: "Request a confidential consultation with Asheron Management Consultancies in Dubai. Advisory across AI governance, strategy, capability, and project delivery.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-[#F8F7F5] text-[#080808]">
      {/* HERO */}
      <section className="bg-[#F8F7F5] text-[#080808] pt-28 pb-16 sm:pt-32 sm:pb-20 border-b border-[#E2E0DD]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
              <span className="h-2 w-2 rounded-full bg-[#FFC400] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#080808]">
                Direct Engagement
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.08] tracking-tight text-[#080808] mb-8">
              Request a consultation.
            </h1>

            <p className="text-lg md:text-xl text-[#080808]/70 font-light leading-relaxed">
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
              <div className="sticky top-32 bg-white p-8 border border-[#E2E0DD] rounded-xl shadow-xs">
                <h2 className="text-xl font-semibold mb-8 text-[#080808]">Contact Information</h2>
                
                <div className="space-y-6 text-sm text-[#080808]/70">
                  <div>
                    <span className="block font-semibold text-[#080808] mb-1">Email:</span>
                    <a href="mailto:[EMAIL]" className="text-[#351779] hover:text-[#FFC400] transition-colors">[EMAIL]</a>
                  </div>
                  
                  <div>
                    <span className="block font-semibold text-[#080808] mb-1">Phone:</span>
                    <a href="tel:[PHONE]" className="hover:text-[#351779] transition-colors">[PHONE]</a>
                  </div>

                  <div>
                    <span className="block font-semibold text-[#080808] mb-1">Address:</span>
                    <address className="not-italic">
                      [OFFICE ADDRESS],<br />
                      Dubai, United Arab Emirates
                    </address>
                  </div>

                  <div>
                    <span className="block font-semibold text-[#080808] mb-1">LinkedIn:</span>
                    <a href="[LINKEDIN URL]" target="_blank" rel="noopener noreferrer" className="hover:text-[#351779] transition-colors">
                      Follow Asheron
                    </a>
                  </div>

                  <div className="pt-6 border-t border-[#E2E0DD]">
                    <span className="block font-semibold text-[#080808] mb-2">Office hours:</span>
                    <p>Monday to Friday<br />09:00–18:00 (GST / UTC+4)</p>
                  </div>

                  {/* Booking Link (Optional per spec) */}
                  <div className="pt-6 border-t border-[#E2E0DD]">
                    <a 
                      href="[BOOKING URL]" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center w-full h-11 px-4 border border-[#351779] text-[#351779] font-semibold rounded-lg hover:bg-[#351779] hover:text-white transition-all shadow-xs"
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
