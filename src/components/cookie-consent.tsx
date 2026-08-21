"use client"

import { useEffect, useState } from "react"

type Preferences = { analytics: boolean; marketing: boolean }

const storageKey = "asheron-cookie-preferences"

function save(preferences: Preferences) {
  localStorage.setItem(storageKey, JSON.stringify({ ...preferences, timestamp: new Date().toISOString() }))
  window.dispatchEvent(new Event("asheron:cookie-preferences"))
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event("asheron:open-cookie-preferences"))
}

export function CookieConsent() {
  const [open, setOpen] = useState(false)
  const [manage, setManage] = useState(false)
  const [preferences, setPreferences] = useState<Preferences>({ analytics: false, marketing: false })

  useEffect(() => {
    const stored = localStorage.getItem(storageKey)
    if (stored) {
      setPreferences(JSON.parse(stored))
    } else {
      setOpen(true)
    }
    const handler = () => { setOpen(true); setManage(true) }
    window.addEventListener("asheron:open-cookie-preferences", handler)
    return () => window.removeEventListener("asheron:open-cookie-preferences", handler)
  }, [])

  if (!open) return null

  const choose = (next: Preferences) => {
    save(next)
    setPreferences(next)
    setOpen(false)
    setManage(false)
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
      <div className="mx-auto max-w-3xl rounded-lg border border-slate-200 bg-white p-6 shadow-xl">
        <h2 id="cookie-title" className="text-xl font-semibold">Cookie preferences</h2>
        <p className="mt-3 text-sm text-slate-500">We use essential cookies to make this site work. Analytics and marketing cookies load only with your permission.</p>
        {manage && (
          <div className="mt-5 space-y-4 border-y border-slate-200 py-5 text-sm">
            <label className="flex items-center justify-between gap-4"><span><strong>Analytics</strong><br />Help us understand site use.</span><input type="checkbox" checked={preferences.analytics} onChange={(event) => setPreferences({ ...preferences, analytics: event.target.checked })} /></label>
            <label className="flex items-center justify-between gap-4"><span><strong>Marketing</strong><br />Allow marketing measurement.</span><input type="checkbox" checked={preferences.marketing} onChange={(event) => setPreferences({ ...preferences, marketing: event.target.checked })} /></label>
          </div>
        )}
        <div className="mt-5 flex flex-wrap gap-3">
          <button onClick={() => choose({ analytics: true, marketing: true })} className="min-h-11 rounded-sm bg-navy-900 px-5 text-sm font-semibold text-white">Accept all</button>
          <button onClick={() => choose({ analytics: false, marketing: false })} className="min-h-11 rounded-sm border border-navy-900 px-5 text-sm font-semibold text-navy-900">Reject all</button>
          {manage ? <button onClick={() => choose(preferences)} className="min-h-11 rounded-sm border border-navy-900 px-5 text-sm font-semibold text-navy-900">Save preferences</button> : <button onClick={() => setManage(true)} className="min-h-11 px-3 text-sm font-semibold underline underline-offset-4">Manage preferences</button>}
        </div>
      </div>
    </div>
  )
}
