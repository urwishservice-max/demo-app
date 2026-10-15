import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Notice | Asheron",
  description: "Privacy notice and data protection information for Asheron Management Consultancies, LLC.",
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col bg-[#F8F7F5] text-[#080808]">
      <section className="bg-[#F8F7F5] text-[#080808] pt-28 pb-16 sm:pt-32 sm:pb-20 border-b border-[#E2E0DD]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-[#FFC400] flex-shrink-0" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#080808]">
              Legal & Compliance
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-[#080808] mb-6">
            Privacy Notice
          </h1>
          <p className="text-base sm:text-lg text-[#080808]/70 font-light leading-relaxed">
            Last updated: [DATE]
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead border-l-4 border-[#FFC400] pl-4 italic">
              [Note for Legal Review: This template requires legal approval before launch.]
            </p>

            <h2>1. Identity of the Controller</h2>
            <p>
              Asheron Management Consultancies, LLC ("Asheron", "we", "us", or "our") is the data controller responsible for your personal data.
            </p>
            <p>
              <strong>Contact Details:</strong><br />
              Email: [EMAIL]<br />
              Registered Address: [REGISTERED ADDRESS], Dubai, United Arab Emirates
            </p>

            <h2>2. Personal Data Collected</h2>
            <p>We may collect and process the following categories of personal data:</p>
            <ul>
              <li><strong>Identity data:</strong> Full name, job title.</li>
              <li><strong>Contact data:</strong> Work email address, phone number.</li>
              <li><strong>Organisation data:</strong> Company name, country/emirate of operation.</li>
              <li><strong>Enquiry content:</strong> Information provided in the "How can we help?" section.</li>
              <li><strong>Technical/usage data:</strong> IP address, browser type, operating system (via strictly necessary cookies/security services).</li>
              <li><strong>Cookie data:</strong> Preferences regarding analytics and marketing cookies.</li>
            </ul>

            <h2>3. Purposes and Legal Basis for Processing</h2>
            <table>
              <thead>
                <tr>
                  <th>Purpose</th>
                  <th>Data Category</th>
                  <th>Legal Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Responding to enquiries</td>
                  <td>Identity, Contact, Organisation, Enquiry</td>
                  <td>Legitimate interest / Consent (where requested)</td>
                </tr>
                <tr>
                  <td>Service delivery (if engaged)</td>
                  <td>Identity, Contact, Organisation</td>
                  <td>Performance of a contract</td>
                </tr>
                <tr>
                  <td>Marketing (with consent)</td>
                  <td>Identity, Contact</td>
                  <td>Consent</td>
                </tr>
                <tr>
                  <td>Security and fraud prevention</td>
                  <td>Technical</td>
                  <td>Legitimate interest</td>
                </tr>
                <tr>
                  <td>Website Analytics</td>
                  <td>Technical, Cookie</td>
                  <td>Consent</td>
                </tr>
              </tbody>
            </table>

            <h2>4. Recipients of Personal Data</h2>
            <p>We may share your data with selected third-party processors who provide services on our behalf:</p>
            <ul>
              <li><strong>Hosting Provider:</strong> Vercel Inc.</li>
              <li><strong>Email Provider:</strong> [EMAIL PROVIDER]</li>
              <li><strong>Anti-spam Provider:</strong> Cloudflare (Turnstile)</li>
              <li><strong>Analytics Provider:</strong> [ANALYTICS PROVIDER]</li>
              <li><strong>CMS Provider:</strong> [CMS PROVIDER]</li>
            </ul>

            <h2>5. Cross-Border Transfers and Safeguards</h2>
            <p>
              Your data may be transferred to and stored at destinations outside the United Arab Emirates. We ensure that all such transfers are protected by appropriate safeguards, such as adequacy decisions or standard contractual clauses, in compliance with applicable UAE data protection laws.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain enquiry data for a period of <strong>24 months</strong> from the date of submission, unless a formal client relationship begins, in which case data is retained in accordance with our client engagement terms and regulatory obligations.
            </p>

            <h2>7. Data Subject Rights</h2>
            <p>Under applicable data protection laws, you have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data.</li>
              <li><strong>Erasure:</strong> Request deletion of your data.</li>
              <li><strong>Restriction:</strong> Request restriction of processing.</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests.</li>
              <li><strong>Portability:</strong> Request transfer of your data.</li>
              <li><strong>Withdrawal of consent:</strong> Withdraw consent at any time (e.g., for marketing).</li>
            </ul>
            <p>
              To exercise these rights, please contact us at [EMAIL]. We aim to respond to all legitimate requests within 30 days.
            </p>

            <h2>8. Security Measures & Breach Notification</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your data against unauthorised access, loss, or alteration. In the unlikely event of a data breach that poses a risk to your rights, we will notify you and the relevant regulatory authority as required by law.
            </p>

            <h2>9. Complaints</h2>
            <p>
              If you have concerns about how we handle your data, you have the right to lodge a complaint with the relevant supervisory authority in the UAE. However, we would appreciate the opportunity to address your concerns first.
            </p>

            <p className="text-sm text-slate-500 mt-12 pt-8 border-t border-slate-200">
              Version: 1.0<br />
              Last Updated: [DATE]
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
