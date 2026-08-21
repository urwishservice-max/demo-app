"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-[70vh] bg-white py-24 text-center px-6">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-navy-900">
          Something went wrong.
        </h1>
        <p className="text-lg text-slate-600 mb-12">
          Please try again shortly, or contact us at <a href="mailto:[EMAIL]" className="text-navy-900 font-medium hover:text-gold-500 transition-colors">[EMAIL]</a>.
        </p>
        
        <div className="flex justify-center">
          <Button onClick={() => reset()} size="lg">
            Try again
          </Button>
        </div>
      </div>
    </div>
  )
}
