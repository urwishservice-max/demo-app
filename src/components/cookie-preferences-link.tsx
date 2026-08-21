"use client"

import { openCookiePreferences } from "@/components/cookie-consent"

export function CookiePreferencesLink() {
  return <button onClick={openCookiePreferences} className="text-left hover:text-gold-300 transition-colors">Cookie preferences</button>
}
