"use client"

import { useEffect, useState, useRef, useCallback } from "react"

export interface CookiePreferences {
  version: number
  timestamp: string
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

const STORAGE_KEY = "asheron-cookie-preferences"
const CONSENT_VERSION = 1

const DEFAULT_PREFERENCES: CookiePreferences = {
  version: CONSENT_VERSION,
  timestamp: "",
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
}

/**
 * Global helper to inspect current consent from any component or script.
 */
export function getStoredConsent(): CookiePreferences | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (parsed && typeof parsed === "object" && typeof parsed.timestamp === "string") {
      return {
        version: parsed.version || CONSENT_VERSION,
        timestamp: parsed.timestamp,
        necessary: true,
        functional: Boolean(parsed.functional),
        analytics: Boolean(parsed.analytics),
        marketing: Boolean(parsed.marketing),
      }
    }
  } catch {
    // Malformed storage safely ignored
  }
  return null
}

export function hasConsent(category: keyof Omit<CookiePreferences, "version" | "timestamp">): boolean {
  if (category === "necessary") return true
  const consent = getStoredConsent()
  return consent ? Boolean(consent[category]) : false
}

export function openCookiePreferences() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("asheron:open-cookie-preferences"))
  }
}

function persistPreferences(prefs: Omit<CookiePreferences, "version" | "timestamp" | "necessary">): CookiePreferences {
  const full: CookiePreferences = {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    necessary: true,
    functional: Boolean(prefs.functional),
    analytics: Boolean(prefs.analytics),
    marketing: Boolean(prefs.marketing),
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(full))
  } catch {
    // Storage quota or blocked cookies handled gracefully
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("asheron:cookie-preferences-changed", { detail: full }))
    if (!full.analytics || !full.marketing) {
      window.dispatchEvent(new CustomEvent("asheron:consent-withdrawn", { detail: full }))
    }
  }
  return full
}

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false)
  const [showManage, setShowManage] = useState(false)
  const [prefs, setPrefs] = useState({
    functional: false,
    analytics: false,
    marketing: false,
  })
  
  const dialogRef = useRef<HTMLDivElement>(null)
  const previousActiveElementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const stored = getStoredConsent()
    if (stored) {
      setPrefs({
        functional: stored.functional,
        analytics: stored.analytics,
        marketing: stored.marketing,
      })
    } else {
      // First visit: Show the banner
      setIsOpen(true)
    }

    const handleOpen = () => {
      previousActiveElementRef.current = document.activeElement as HTMLElement
      const current = getStoredConsent()
      if (current) {
        setPrefs({
          functional: current.functional,
          analytics: current.analytics,
          marketing: current.marketing,
        })
      }
      setShowManage(true)
      setIsOpen(true)
    }

    window.addEventListener("asheron:open-cookie-preferences", handleOpen)
    return () => window.removeEventListener("asheron:open-cookie-preferences", handleOpen)
  }, [])

  // Manage keyboard accessibility (Escape to close, Focus trap inside dialog)
  useEffect(() => {
    if (!isOpen) return

    // Auto-focus the dialog container or first button on open
    const focusTimer = setTimeout(() => {
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (focusable && focusable.length > 0) {
        focusable[0].focus()
      }
    }, 50)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const stored = getStoredConsent()
        // If user already gave consent previously, allow dismissing the manager
        if (stored) {
          closeDialog()
        }
      }

      // Focus trap
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable || focusable.length === 0) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === last) {
            first.focus()
            e.preventDefault()
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      clearTimeout(focusTimer)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  const closeDialog = () => {
    setIsOpen(false)
    setShowManage(false)
    if (previousActiveElementRef.current) {
      previousActiveElementRef.current.focus()
      previousActiveElementRef.current = null
    }
  }

  const handleAcceptAll = () => {
    persistPreferences({ functional: true, analytics: true, marketing: true })
    setPrefs({ functional: true, analytics: true, marketing: true })
    closeDialog()
  }

  const handleRejectAll = () => {
    persistPreferences({ functional: false, analytics: false, marketing: false })
    setPrefs({ functional: false, analytics: false, marketing: false })
    closeDialog()
  }

  const handleSaveCustom = () => {
    persistPreferences(prefs)
    closeDialog()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-3 sm:p-6 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      ref={dialogRef}
    >
      <div className="w-full max-w-2xl rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl text-[#0B1B2B]">
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#B08D3F]" aria-hidden="true" />
            <h2 id="cookie-consent-title" className="text-xl sm:text-2xl font-bold tracking-tight text-[#0B1B2B]">
              Cookie Preferences &amp; Privacy
            </h2>
          </div>
          {getStoredConsent() && (
            <button
              onClick={closeDialog}
              className="text-slate-400 hover:text-[#0B1B2B] text-sm p-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D3F]"
              aria-label="Close preferences modal"
            >
              ✕
            </button>
          )}
        </div>

        <p id="cookie-consent-desc" className="text-sm text-slate-600 leading-relaxed mb-6">
          Asheron uses strictly necessary cookies to deliver secure corporate services. Functional, analytics, and marketing cookies load only with your explicit permission in compliance with UAE Federal Decree-Law No. 45 of 2021.
        </p>

        {showManage && (
          <div className="space-y-4 border-y border-slate-200 py-5 my-6 text-sm max-h-[45vh] overflow-y-auto pr-1">
            {/* Category 1: Strictly Necessary */}
            <div className="flex items-start justify-between gap-4 p-3 bg-slate-50 rounded-lg">
              <div className="flex-1 pr-2">
                <span className="font-semibold text-[#0B1B2B] flex items-center gap-2">
                  Strictly Necessary
                  <span className="text-[10px] font-mono uppercase bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">Always Active</span>
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  Required for core platform security, secure form tokens, and session operations. Cannot be disabled.
                </p>
              </div>
              <input
                type="checkbox"
                checked={true}
                disabled
                aria-label="Strictly Necessary Cookies (Always Active)"
                className="mt-1 h-4 w-4 rounded accent-[#0B1B2B] cursor-not-allowed opacity-60"
              />
            </div>

            {/* Category 2: Functional */}
            <div className="flex items-start justify-between gap-4 p-3 bg-slate-50 rounded-lg">
              <div className="flex-1 pr-2">
                <label htmlFor="pref-functional" className="font-semibold text-[#0B1B2B] cursor-pointer">
                  Functional
                </label>
                <p className="text-xs text-slate-500 mt-1">
                  Enables enhanced site features, UI choices, and persistent preference settings.
                </p>
              </div>
              <input
                id="pref-functional"
                type="checkbox"
                checked={prefs.functional}
                onChange={(e) => setPrefs((prev) => ({ ...prev, functional: e.target.checked }))}
                className="mt-1 h-4 w-4 rounded accent-[#0B1B2B] cursor-pointer"
              />
            </div>

            {/* Category 3: Analytics */}
            <div className="flex items-start justify-between gap-4 p-3 bg-slate-50 rounded-lg">
              <div className="flex-1 pr-2">
                <label htmlFor="pref-analytics" className="font-semibold text-[#0B1B2B] cursor-pointer">
                  Analytics &amp; Performance
                </label>
                <p className="text-xs text-slate-500 mt-1">
                  Helps us understand readership depth and advisory inquiry patterns with IP anonymisation.
                </p>
              </div>
              <input
                id="pref-analytics"
                type="checkbox"
                checked={prefs.analytics}
                onChange={(e) => setPrefs((prev) => ({ ...prev, analytics: e.target.checked }))}
                className="mt-1 h-4 w-4 rounded accent-[#0B1B2B] cursor-pointer"
              />
            </div>

            {/* Category 4: Marketing */}
            <div className="flex items-start justify-between gap-4 p-3 bg-slate-50 rounded-lg">
              <div className="flex-1 pr-2">
                <label htmlFor="pref-marketing" className="font-semibold text-[#0B1B2B] cursor-pointer">
                  Marketing &amp; Campaign Measurement
                </label>
                <p className="text-xs text-slate-500 mt-1">
                  Permits measuring communication efficacy without profiling across third-party websites.
                </p>
              </div>
              <input
                id="pref-marketing"
                type="checkbox"
                checked={prefs.marketing}
                onChange={(e) => setPrefs((prev) => ({ ...prev, marketing: e.target.checked }))}
                className="mt-1 h-4 w-4 rounded accent-[#0B1B2B] cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* Action Buttons: Accept All, Reject All, and Manage Preferences with EQUAL visual prominence */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={handleAcceptAll}
            className="min-h-[44px] px-4 py-2.5 rounded-lg bg-[#0B1B2B] text-white hover:bg-[#14304A] font-semibold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D3F] focus-visible:ring-offset-2"
          >
            Accept All
          </button>

          <button
            type="button"
            onClick={handleRejectAll}
            className="min-h-[44px] px-4 py-2.5 rounded-lg border-2 border-[#0B1B2B] text-[#0B1B2B] hover:bg-slate-100 font-semibold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D3F] focus-visible:ring-offset-2"
          >
            Reject All
          </button>

          {showManage ? (
            <button
              type="button"
              onClick={handleSaveCustom}
              className="min-h-[44px] px-4 py-2.5 rounded-lg bg-[#B08D3F] text-white hover:bg-[#977732] font-semibold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1B2B] focus-visible:ring-offset-2"
            >
              Save Preferences
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowManage(true)}
              className="min-h-[44px] px-4 py-2.5 rounded-lg border-2 border-slate-300 text-slate-700 hover:border-[#0B1B2B] hover:text-[#0B1B2B] font-semibold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D3F] focus-visible:ring-offset-2"
            >
              Manage Preferences
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
