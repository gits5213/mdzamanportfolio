'use client'

import Section from '@/components/ui/Section'
import PageHeader from '@/components/ui/PageHeader'
import Card from '@/components/ui/Card'

export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen">
      <Section>
        <PageHeader 
          title="Privacy Policy"
          subtitle="Your privacy is important to us"
        />

        <Card className="p-8 md:p-12">
          <div className="prose prose-invert prose-slate max-w-none">
            <p className="text-sm text-slate-400 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                1. Introduction
              </h2>
              <p className="text-slate-300 mb-4">
                MD Shahnewaz Zaman ("we," "our," or "us") operates the website mdzamanportfolio.com (the "Service"). 
                This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal 
                data when you use our Service and the choices you have associated with that data.
              </p>
              <p className="text-slate-300">
                We are committed to protecting your privacy and ensuring compliance with applicable data protection laws, 
                including the New York State Information Security Breach and Notification Act and other relevant regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold mb-3 text-slate-200 mt-6">2.1 Information You Provide</h3>
              <p className="text-slate-300 mb-4">
                When you contact us through our contact form, we may collect:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number (if provided)</li>
                <li>Message content</li>
                <li>Reason for contact</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-slate-200 mt-6">2.2 Automatically Collected Information</h3>
              <p className="text-slate-300 mb-4">
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                3. How We Use Your Information
              </h2>
              <p className="text-slate-300 mb-4">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li>To respond to your inquiries and provide customer support</li>
                <li>To improve and optimize our website</li>
                <li>To analyze website usage and trends</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                4. Data Storage and Security
              </h2>
              <p className="text-slate-300 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the Internet or electronic storage is 100% secure.
              </p>
              <p className="text-slate-300">
                In accordance with New York State law, we will notify affected individuals and relevant authorities in the 
                event of a data breach that compromises personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                5. Third-Party Services
              </h2>
              <p className="text-slate-300 mb-4">
                Our website may use third-party services for analytics, hosting, and other functions. These services may 
                collect information about your use of our website. We encourage you to review the privacy policies of 
                these third-party services.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-slate-200 mt-6">5.1 Google AdSense</h3>
              <p className="text-slate-300 mb-4">
                This website uses Google AdSense, a service for including advertisements from Google Inc. ("Google"). 
                Google AdSense uses "cookies", which are text files placed on your computer, to help the website analyze 
                how users use the site. Google AdSense also uses web beacons (invisible images). Through these web beacons, 
                information such as visitor traffic on these pages can be evaluated.
              </p>
              <p className="text-slate-300 mb-4">
                The information generated by cookies and web beacons about the use of this website (including your IP address) 
                and delivery of advertising formats is transmitted to a Google server in the USA and stored there. This 
                information can be passed on from Google to contractual partners of Google. However, Google will not merge 
                your IP address with other data stored by you.
              </p>
              <p className="text-slate-300 mb-4">
                You can prevent the installation of cookies by setting your browser software accordingly; however, we point 
                out that in this case you may not be able to fully use all features of this website. By using this website, 
                you consent to the processing of data about you by Google in the manner described above and for the purposes 
                set out above.
              </p>
              <p className="text-slate-300 mb-4">
                You can opt-out of Google's use of cookies by visiting the <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">Google Ad Settings page</a>. 
                Alternatively, you can opt-out of a third-party vendor's use of cookies by visiting the <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">Network Advertising Initiative opt-out page</a>.
              </p>
              <p className="text-slate-300">
                For more information about how Google uses data when you use our site, please visit <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">Google's Privacy & Terms</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                6. Your Rights
              </h2>
              <p className="text-slate-300 mb-4">
                Under New York State law and applicable federal laws, you have the right to:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of certain data collection practices</li>
                <li>File a complaint with relevant authorities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                7. Cookies
              </h2>
              <p className="text-slate-300 mb-4">
                Our website may use cookies and similar tracking technologies to enhance your experience. You can instruct 
                your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                8. Children's Privacy
              </h2>
              <p className="text-slate-300 mb-4">
                Our Service is not intended for individuals under the age of 13. We do not knowingly collect personal 
                information from children under 13. If you are a parent or guardian and believe your child has provided 
                us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-slate-300 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                10. Contact Us
              </h2>
              <p className="text-slate-300 mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
                <p className="text-slate-300 mb-2">
                  <strong>MD Shahnewaz Zaman</strong>
                </p>
                <p className="text-slate-300 mb-2">
                  202nd Street & Hillside Ave Cross Street
                </p>
                <p className="text-slate-300 mb-2">
                  Hollis, NY 11423
                </p>
                <p className="text-slate-300">
                  Email: <a href="mailto:mdzaman@globalitechsol.com" className="text-sky-400 hover:text-sky-300">mdzaman@globalitechsol.com</a>
                </p>
              </div>
            </section>
          </div>
        </Card>
      </Section>
    </div>
  )
}

