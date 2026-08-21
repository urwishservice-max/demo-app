import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Thank You | Asheron",
  robots: {
    index: false,
    follow: false,
  }
}

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-[70vh] bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <div className="w-20 h-20 mx-auto bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mb-8">
          <div className="w-10 h-px bg-success" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-navy-900">
          Thank you — your enquiry has been received.
        </h1>
        
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          A member of the Asheron team will respond within one business day. For urgent matters, please email <a href="mailto:[EMAIL]" className="text-navy-900 hover:text-gold-500 transition-colors font-medium">[EMAIL]</a>.
        </p>

        <Button asChild size="lg">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}
