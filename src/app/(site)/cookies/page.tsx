import { Metadata } from "next"
import { CookiePreferencesLink } from "@/components/cookie-preferences-link"

export const metadata: Metadata = {
  title: "Cookie Notice | Asheron",
  description: "Cookie policy and consent management information for Asheron Management Consultancies.",
}

export default function CookiesPage() {
  return (
    <div className="flex flex-col bg-white text-[#1A1A1A]">
      <section className="bg-white text-[#111111] pt-28 pb-16 sm:pt-32 sm:pb-20 border-b border-[#E7E7E3]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-[#CAC32C] flex-shrink-0" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#1A1A1A]">
              Cookies & Tracking
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-[#111111] mb-6">
            Cookie Notice
          </h1>
          <p className="text-base sm:text-lg text-[#6B6B6B] font-light leading-relaxed">
            Last updated: [DATE]
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none">
            
            <p>
              This Cookie Notice explains how Asheron Management Consultancies, LLC uses cookies and similar technologies to recognise you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>

            <h2>1. What are cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>

            <h2>2. Why do we use cookies?</h2>
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "Strictly Necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website.
            </p>

            <h2>3. Types of cookies we use</h2>
            
            <h3>Strictly Necessary Cookies</h3>
            <p>
              These cookies are essential to provide you with services available through our website and to use some of its features, such as secure areas and forms. Without these cookies, services you have asked for, like secure contact forms (e.g., Turnstile validation), cannot be provided.
            </p>

            <h3>Functional Cookies</h3>
            <p>
              These cookies allow the website to remember choices you make (such as your language or the region you are in) and provide enhanced, more personal features.
            </p>

            <h3>Analytics Cookies</h3>
            <p>
              These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customise our website for you. We only load these with your explicit consent.
            </p>

            <h3>Marketing Cookies</h3>
            <p>
              These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests. We only load these with your explicit consent.
            </p>

            <h2>4. Cookie Table</h2>
            <p>
              <em>[Note: This table must be updated prior to launch based on the exact final analytics/marketing stack implemented.]</em>
            </p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Provider</th>
                  <th>Purpose</th>
                  <th>Type</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>cf_clearance</code></td>
                  <td>Cloudflare</td>
                  <td>Security & Anti-spam</td>
                  <td>Strictly Necessary</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td><code>cookie_consent</code></td>
                  <td>Asheron</td>
                  <td>Stores user's consent preferences</td>
                  <td>Strictly Necessary</td>
                  <td>1 year</td>
                </tr>
              </tbody>
            </table>

            <h2>5. How can I control cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
            </p>
            <p>
              You can access the Cookie Consent Manager at any time via the link in our website footer.
            </p>
            
            <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-sm">
              <h3 className="text-xl font-semibold mb-4 mt-0">Manage your preferences</h3>
              <p className="text-base mb-6">You can update your cookie preferences at any time.</p>
              <CookiePreferencesLink />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
