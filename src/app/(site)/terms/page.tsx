import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use | Asheron",
  description: "Terms of use and legal disclaimers for the Asheron Management Consultancies website.",
}

export default function TermsPage() {
  return (
    <div className="flex flex-col bg-white">
      <section className="bg-navy-900 text-white pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-8">
            Terms of Use
          </h1>
          <p className="text-lg text-slate-200 font-light leading-relaxed">
            Last updated: [DATE]
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead border-l-4 border-gold-500 pl-4 italic">
              [Note for Legal Review: This template requires legal approval before launch.]
            </p>

            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2>1. Permitted Use</h2>
            <p>
              You may use this website for lawful informational purposes only. You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.
            </p>

            <h2>2. Intellectual Property</h2>
            <p>
              Unless otherwise stated, Asheron Management Consultancies, LLC owns the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
            </p>

            <h2>3. No Advisory Relationship</h2>
            <p>
              <strong>Asheron Management Consultancies, LLC provides management, strategy, capability, project, and innovation advisory services. Content on this website is general information only and does not constitute legal, regulatory, audit, tax, or investment advice. No advisory relationship is created by use of this website.</strong>
            </p>

            <h2>4. No Warranties</h2>
            <p>
              This website is provided "as is," with all faults, and Asheron Management Consultancies, LLC expresses no representations or warranties, of any kind related to this website or the materials contained on this website. Also, nothing contained on this website shall be interpreted as advising you.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              In no event shall Asheron Management Consultancies, LLC, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. Asheron Management Consultancies, LLC, including its officers, directors, and employees, shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
            </p>

            <h2>6. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites or services that are not owned or controlled by Asheron. Asheron has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
            </p>

            <h2>7. Governing Law and Jurisdiction</h2>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of the United Arab Emirates, and the jurisdiction of the courts of the Emirate of Dubai for the resolution of any disputes.
            </p>

            <h2>8. Amendments</h2>
            <p>
              Asheron is permitted to revise these Terms at any time as it sees fit, and by using this website you are expected to review these Terms on a regular basis.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
