import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-[70vh] bg-white py-24 text-center px-6">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-navy-900">
          This page could not be found.
        </h1>
        <p className="text-lg text-slate-600 mb-12">
          The page may have moved or the link may be incorrect.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services">What We Do</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
