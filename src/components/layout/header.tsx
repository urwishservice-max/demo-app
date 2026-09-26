"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { ArrowUpRight, ArrowRight, X, ChevronRight } from "lucide-react"

const practices = [
  {
    title: "AI & Innovation",
    href: "/services/ai-innovation",
    desc: "AI governance, workflow automation & execution",
    licence: "7020039",
  },
  {
    title: "Strategy & Management",
    href: "/services/strategy",
    desc: "Target operating models & corporate roadmaps",
    licence: "7020003",
  },
  {
    title: "People & Capability",
    href: "/services/people",
    desc: "Workforce readiness & change management",
    licence: "7020008",
  },
  {
    title: "Project Development",
    href: "/services/projects",
    desc: "Programme PMO, feasibility & delivery assurance",
    licence: "7020020",
  },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [practicesOpen, setPracticesOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)

  // Close on route change
  useEffect(() => {
    setOpen(false)
    setPracticesOpen(false)
  }, [pathname])

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      {/* 1. LITTLE FLOATING NAVBAR ICON (DISAPPEARED NAVBAR TRIGGER) */}
      <div className="fixed top-4 right-4 sm:top-5 sm:right-7 z-50 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`group relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border transition-all duration-300 shadow-sm cursor-pointer select-none ${
            open
              ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-lg"
              : "bg-[#FAFAF8]/90 text-[#1A1A1A] border-[#E7E7E3] hover:border-[#D4B924] hover:bg-white hover:shadow-md backdrop-blur-md"
          }`}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? (
            <X className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90 text-white" />
          ) : (
            <div className="flex flex-col gap-1.5 items-center justify-center w-5">
              <span className="h-[1.5px] w-5 rounded-full bg-[#1A1A1A] transition-all duration-300 group-hover:bg-[#D4B924]" />
              <span className="h-[1.5px] w-3.5 rounded-full bg-[#1A1A1A] transition-all duration-300 group-hover:w-5 group-hover:bg-[#D4B924]" />
            </div>
          )}
        </button>
      </div>

      {/* 2. BACKDROP OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* 3. SLIDE-OUT EDITORIAL NAVIGATION DRAWER */}
      <div
        ref={drawerRef}
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[460px] md:w-[500px] bg-[#FAFAF8] border-l border-[#E7E7E3] shadow-2xl flex flex-col justify-between p-6 sm:p-10 transition-transform duration-300 ease-out overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site Navigation"
      >
        {/* Drawer Header: Brand + Close */}
        <div className="flex items-center justify-between border-b border-[#E7E7E3] pb-6">
          <Link href="/" onClick={() => setOpen(false)} className="group flex flex-col">
            <span className="text-base font-bold tracking-[0.25em] text-[#1A1A1A] uppercase transition-colors group-hover:text-[#D4B924]">
              ACHERON
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#777] font-medium">
              Dubai · Advisory
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[#E7E7E3] text-[#1A1A1A] transition-colors hover:border-[#D4B924] hover:text-[#D4B924]"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Drawer Body: Navigation Links */}
        <nav className="my-8 flex flex-col gap-6" aria-label="Main Drawer Navigation">
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between text-2xl font-bold tracking-tight text-[#1A1A1A] transition-colors hover:text-[#D4B924] group"
          >
            <span>About</span>
            <span className="text-xs font-mono text-[#999] tracking-widest group-hover:text-[#D4B924]">01</span>
          </Link>

          {/* Practices Accordion */}
          <div className="border-y border-[#E7E7E3]/70 py-4">
            <button
              type="button"
              onClick={() => setPracticesOpen(!practicesOpen)}
              className="flex w-full items-center justify-between text-2xl font-bold tracking-tight text-[#1A1A1A] transition-colors hover:text-[#D4B924] group"
            >
              <span>Practices</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#999] tracking-widest group-hover:text-[#D4B924]">02</span>
                <ChevronRight
                  className={`h-4 w-4 text-[#888] transition-transform duration-200 ${
                    practicesOpen ? "rotate-90 text-[#D4B924]" : ""
                  }`}
                />
              </div>
            </button>

            {practicesOpen && (
              <div className="mt-4 flex flex-col gap-2 pl-2 animate-in fade-in slide-in-from-top-2 duration-200">
                {practices.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex flex-col rounded-lg p-2.5 transition-colors hover:bg-white border border-transparent hover:border-[#E7E7E3]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#D4B924] transition-colors">
                        {item.title}
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#999] opacity-0 transition-all group-hover:opacity-100 group-hover:text-[#D4B924]" />
                    </div>
                    <span className="text-xs text-[#777] line-clamp-1 mt-0.5">
                      {item.desc}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="mt-1 flex items-center justify-between px-2.5 py-1.5 text-xs font-semibold text-[#D4B924] hover:underline"
                >
                  <span>View all practices</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/industries"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between text-2xl font-bold tracking-tight text-[#1A1A1A] transition-colors hover:text-[#D4B924] group"
          >
            <span>Industries</span>
            <span className="text-xs font-mono text-[#999] tracking-widest group-hover:text-[#D4B924]">03</span>
          </Link>

          <Link
            href="/approach"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between text-2xl font-bold tracking-tight text-[#1A1A1A] transition-colors hover:text-[#D4B924] group"
          >
            <span>Approach</span>
            <span className="text-xs font-mono text-[#999] tracking-widest group-hover:text-[#D4B924]">04</span>
          </Link>

          <Link
            href="/insights"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between text-2xl font-bold tracking-tight text-[#1A1A1A] transition-colors hover:text-[#D4B924] group"
          >
            <span>Insights</span>
            <span className="text-xs font-mono text-[#999] tracking-widest group-hover:text-[#D4B924]">05</span>
          </Link>
        </nav>

        {/* Drawer Footer: CTA + Contact Info */}
        <div className="border-t border-[#E7E7E3] pt-6 flex flex-col gap-4">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-6 py-3.5 text-xs font-semibold tracking-widest uppercase text-white transition-all hover:bg-[#D4B924] hover:text-[#1A1A1A]"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="flex items-center justify-between text-[11px] text-[#777] font-medium tracking-wider uppercase pt-2">
            <span>Dubai, UAE</span>
            <span>Licence 7020039</span>
          </div>
        </div>
      </div>
    </>
  )
}
