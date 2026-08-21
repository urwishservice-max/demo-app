"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const services = [
  {
    title: "AI & Innovation",
    href: "/services/ai-innovation",
    description: "AI governance, readiness, workflow and implementation advisory.",
  },
  {
    title: "Strategy & Management",
    href: "/services/strategy",
    description: "Strategy, operating models, governance and transformation.",
  },
  {
    title: "People & Capability",
    href: "/services/people",
    description: "Organisation design, workforce capability and AI fluency.",
  },
  {
    title: "Project Development",
    href: "/services/projects",
    description: "Business cases, PMO, programme governance and assurance.",
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-brand",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-slate-200 py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50 relative">
            <span className={cn(
              "text-2xl font-semibold tracking-tight transition-colors",
              isMobileMenuOpen || isScrolled ? "text-navy-900" : (pathname === '/' ? "text-white" : "text-navy-900")
            )}>
              Asheron
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={cn(
            "hidden lg:flex items-center gap-8 transition-colors",
            isScrolled || pathname !== '/' ? "text-navy-900" : "text-white"
          )}>
            <Link href="/about" className="text-sm font-medium hover:text-gold-500 transition-colors">
              About
            </Link>
            
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-sm font-medium hover:text-gold-500 transition-colors py-2"
                aria-expanded={isServicesOpen}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                What We Do <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Dropdown */}
              <div 
                className={cn(
                  "absolute top-full left-0 w-[400px] bg-white border border-slate-200 shadow-lg pt-2 pb-4 px-2 transition-all duration-200 transform",
                  isServicesOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0",
                  "flex flex-col text-navy-900"
                )}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block p-4 hover:bg-slate-50 transition-colors border-b border-transparent hover:border-gold-300/30"
                  >
                    <div className="font-medium mb-1">{service.title}</div>
                    <div className="text-sm text-slate-500 leading-snug">{service.description}</div>
                  </Link>
                ))}
                <Link href="/services" className="block p-4 mt-2 text-sm font-semibold text-gold-500 hover:text-navy-900 transition-colors">
                  View all services &rarr;
                </Link>
              </div>
            </div>

            <Link href="/industries" className="text-sm font-medium hover:text-gold-500 transition-colors">
              Industries
            </Link>
            <Link href="/insights" className="text-sm font-medium hover:text-gold-500 transition-colors">
              Insights
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-gold-500 transition-colors">
              Contact
            </Link>
            
            <Button asChild variant={isScrolled || pathname !== '/' ? "default" : "outline"} className={cn(
              !isScrolled && pathname === '/' && "border-white/30 text-white hover:bg-white hover:text-navy-900"
            )}>
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden z-50 p-2 -mr-2",
              isMobileMenuOpen || isScrolled ? "text-navy-900" : (pathname === '/' ? "text-white" : "text-navy-900")
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col pt-24 px-6 overflow-y-auto">
          <nav className="flex flex-col gap-6 text-2xl font-semibold text-navy-900">
            <Link href="/about">About</Link>
            
            <div className="flex flex-col gap-4">
              <button 
                className="flex items-center justify-between text-left"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                What We Do
                <ChevronDown className={cn("w-6 h-6 transition-transform", isServicesOpen && "rotate-180")} />
              </button>
              
              {isServicesOpen && (
                <div className="flex flex-col gap-4 pl-4 border-l border-gold-300 text-lg font-medium text-slate-500">
                  {services.map((service) => (
                    <Link key={service.title} href={service.href} className="hover:text-navy-900 transition-colors">
                      {service.title}
                    </Link>
                  ))}
                  <Link href="/services" className="text-gold-500 hover:text-navy-900">
                    View all services
                  </Link>
                </div>
              )}
            </div>

            <Link href="/industries">Industries</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="mt-auto py-8">
            <Button asChild className="w-full h-14 text-lg">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
