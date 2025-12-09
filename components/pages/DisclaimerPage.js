'use client'

import Section from '@/components/ui/Section'
import PageHeader from '@/components/ui/PageHeader'
import Card from '@/components/ui/Card'

export default function DisclaimerPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen">
      <Section>
        <PageHeader 
          title="Disclaimer"
          subtitle="Important information regarding the use of this website"
        />

        <Card className="p-8 md:p-12">
          <div className="prose prose-invert prose-slate max-w-none">
            <p className="text-sm text-slate-400 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                1. General Information
              </h2>
              <p className="text-slate-300 mb-4">
                The information contained on the website mdzamanportfolio.com (the "Service") is for general information 
                purposes only. MD Shahnewaz Zaman assumes no responsibility for errors or omissions in the contents of 
                the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                2. No Warranties
              </h2>
              <p className="text-slate-300 mb-4">
                The information on this Service is provided on an "as is" basis with no guarantees of completeness, 
                accuracy, usefulness, or timeliness. MD Shahnewaz Zaman makes no representations or warranties of any kind, 
                express or implied, about:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li>The completeness, accuracy, reliability, suitability, or availability of the website or information</li>
                <li>The products, services, or related graphics contained on the website for any purpose</li>
                <li>The uninterrupted or error-free operation of the website</li>
                <li>The correction of defects or errors</li>
                <li>The absence of viruses or other harmful components</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                3. Professional Advice
              </h2>
              <p className="text-slate-300 mb-4">
                The information provided on this website does not constitute professional advice, including but not limited 
                to legal, financial, technical, or career advice. You should consult with appropriate professionals before 
                making any decisions based on information from this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                4. Limitation of Liability
              </h2>
              <p className="text-slate-300 mb-4">
                In no event shall MD Shahnewaz Zaman be liable for any special, direct, indirect, consequential, or 
                incidental damages or any damages whatsoever, whether in an action of contract, negligence, or other tort, 
                arising out of or in connection with the use of the Service or the contents of the Service.
              </p>
              <p className="text-slate-300 mb-4">
                MD Shahnewaz Zaman reserves the right to make additions, deletions, or modifications to the contents of 
                the Service at any time without prior notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                5. External Links
              </h2>
              <p className="text-slate-300 mb-4">
                This Service may contain links to external websites that are not provided or maintained by or in any way 
                affiliated with MD Shahnewaz Zaman. Please note that MD Shahnewaz Zaman does not guarantee the accuracy, 
                relevance, timeliness, or completeness of any information on these external websites.
              </p>
              <p className="text-slate-300">
                The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed 
                within them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                6. Employment and Hiring
              </h2>
              <p className="text-slate-300 mb-4">
                Information regarding employment opportunities, job availability, or hiring practices is provided for 
                informational purposes only. MD Shahnewaz Zaman does not guarantee:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li>The availability of any specific position</li>
                <li>The continuation of any employment relationship</li>
                <li>The accuracy of job descriptions or requirements</li>
                <li>The outcome of any application or hiring process</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                7. Technical Information
              </h2>
              <p className="text-slate-300 mb-4">
                Technical information, code examples, tutorials, or documentation provided on this website are provided 
                "as is" without warranty of any kind. MD Shahnewaz Zaman does not guarantee that:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li>The information is current or up-to-date</li>
                <li>The code examples will work in all environments</li>
                <li>The information is suitable for your specific needs</li>
                <li>The use of provided information will not cause damage or loss</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                8. Testimonials and Endorsements
              </h2>
              <p className="text-slate-300 mb-4">
                Any testimonials, endorsements, or reviews displayed on this website reflect the individual experiences 
                of those providing them and may not be representative of all users. Results may vary.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                9. Third-Party Services
              </h2>
              <p className="text-slate-300 mb-4">
                This website may use third-party services, tools, or platforms. MD Shahnewaz Zaman is not responsible 
                for the availability, accuracy, or functionality of these third-party services. Your use of third-party 
                services is subject to their respective terms and conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                10. Changes to Disclaimer
              </h2>
              <p className="text-slate-300 mb-4">
                MD Shahnewaz Zaman reserves the right to modify this disclaimer at any time. Changes will be effective 
                immediately upon posting to the website. Your continued use of the website after any changes constitutes 
                your acceptance of the modified disclaimer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                11. Governing Law
              </h2>
              <p className="text-slate-300 mb-4">
                This disclaimer is governed by and construed in accordance with the laws of the State of New York, United 
                States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                12. Contact Information
              </h2>
              <p className="text-slate-300 mb-4">
                If you have any questions about this disclaimer, please contact us:
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

