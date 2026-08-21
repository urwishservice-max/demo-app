import Link from "next/link"
import { CookiePreferencesLink } from "@/components/cookie-preferences-link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-2xl font-semibold tracking-tight text-white mb-2">
              Asheron
            </Link>
            <p className="text-slate-200 text-sm leading-relaxed">
              Advisory that survives contact with reality.
            </p>
            <p className="text-slate-200 text-sm mt-4">
              Dubai, United Arab Emirates.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg text-white mb-2">Practices</h3>
            <Link href="/services/ai-innovation" className="text-sm text-slate-200 hover:text-gold-500 transition-colors">AI & Innovation</Link>
            <Link href="/services/strategy" className="text-sm text-slate-200 hover:text-gold-500 transition-colors">Strategy & Management</Link>
            <Link href="/services/people" className="text-sm text-slate-200 hover:text-gold-500 transition-colors">People & Capability</Link>
            <Link href="/services/projects" className="text-sm text-slate-200 hover:text-gold-500 transition-colors">Project Development</Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg text-white mb-2">Company</h3>
            <Link href="/about" className="text-sm text-slate-200 hover:text-gold-500 transition-colors">About</Link>
            <Link href="/industries" className="text-sm text-slate-200 hover:text-gold-500 transition-colors">Industries</Link>
            <Link href="/insights" className="text-sm text-slate-200 hover:text-gold-500 transition-colors">Insights</Link>
            <Link href="/contact" className="text-sm text-slate-200 hover:text-gold-500 transition-colors">Contact</Link>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg text-white mb-2">Contact</h3>
            <a href="mailto:[EMAIL]" className="text-sm text-slate-200 hover:text-gold-500 transition-colors">[EMAIL]</a>
            <a href="tel:[PHONE]" className="text-sm text-slate-200 hover:text-gold-500 transition-colors">[PHONE]</a>
            <a href="[LINKEDIN URL]" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-200 hover:text-gold-500 transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-500/30 mb-8" />

        {/* Disclaimer */}
        <div className="mb-8">
          <p className="text-xs text-slate-400 leading-relaxed text-justify">
            <strong>Asheron Management Consultancies, LLC</strong> provides management, strategy, capability, project, and innovation advisory services. Content on this website is general information only and does not constitute legal, regulatory, audit, tax, or investment advice. No advisory relationship is created by use of this website.
          </p>
        </div>

        {/* Legal Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <span>&copy; {currentYear} Asheron Management Consultancies, LLC. All rights reserved.</span>
            <span className="hidden sm:inline">&middot;</span>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-gold-300 transition-colors">Privacy Notice</Link>
              <Link href="/cookies" className="hover:text-gold-300 transition-colors">Cookie Notice</Link>
              <CookiePreferencesLink />
              <Link href="/terms" className="hover:text-gold-300 transition-colors">Terms of Use</Link>
            </div>
          </div>
          <div>
            <span>Licensed activities: 7020039 &middot; 7020003 &middot; 7020008 &middot; 7020020</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
