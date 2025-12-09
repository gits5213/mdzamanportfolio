'use client'

import Section from '@/components/ui/Section'
import PageHeader from '@/components/ui/PageHeader'
import Card from '@/components/ui/Card'

export default function TermsOfUsePage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen">
      <Section>
        <PageHeader 
          title="Terms of Use"
          subtitle="Please read these terms carefully before using our website"
        />

        <Card className="p-8 md:p-12">
          <div className="prose prose-invert prose-slate max-w-none">
            <p className="text-sm text-slate-400 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-300 mb-4">
                By accessing and using the website mdzamanportfolio.com (the "Website"), you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                2. Use License
              </h2>
              <p className="text-slate-300 mb-4">
                Permission is granted to temporarily access the materials on MD Shahnewaz Zaman's website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under 
                this license you may not:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                3. Intellectual Property Rights
              </h2>
              <p className="text-slate-300 mb-4">
                All content on this website, including but not limited to text, graphics, logos, images, and software, 
                is the property of MD Shahnewaz Zaman or its content suppliers and is protected by United States and 
                international copyright laws. The compilation of all content on this site is the exclusive property of 
                MD Shahnewaz Zaman.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                4. User Conduct
              </h2>
              <p className="text-slate-300 mb-4">
                You agree to use the Website only for lawful purposes and in a way that does not infringe the rights of, 
                restrict or inhibit anyone else's use and enjoyment of the Website. Prohibited behavior includes:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li>Harassing or causing distress or inconvenience to any person</li>
                <li>Transmitting obscene or offensive content</li>
                <li>Disrupting the normal flow of dialogue within our website</li>
                <li>Attempting to gain unauthorized access to any portion of the website</li>
                <li>Introducing viruses, trojans, worms, or other malicious code</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                5. Disclaimer
              </h2>
              <p className="text-slate-300 mb-4">
                The materials on MD Shahnewaz Zaman's website are provided on an 'as is' basis. MD Shahnewaz Zaman makes 
                no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, 
                without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
                or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                6. Limitations
              </h2>
              <p className="text-slate-300 mb-4">
                In no event shall MD Shahnewaz Zaman or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use 
                or inability to use the materials on MD Shahnewaz Zaman's website, even if MD Shahnewaz Zaman or an 
                authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                7. Accuracy of Materials
              </h2>
              <p className="text-slate-300 mb-4">
                The materials appearing on MD Shahnewaz Zaman's website could include technical, typographical, or 
                photographic errors. MD Shahnewaz Zaman does not warrant that any of the materials on its website are 
                accurate, complete, or current. MD Shahnewaz Zaman may make changes to the materials contained on its 
                website at any time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                8. Links
              </h2>
              <p className="text-slate-300 mb-4">
                MD Shahnewaz Zaman has not reviewed all of the sites linked to its website and is not responsible for 
                the contents of any such linked site. The inclusion of any link does not imply endorsement by MD Shahnewaz 
                Zaman of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                9. Modifications
              </h2>
              <p className="text-slate-300 mb-4">
                MD Shahnewaz Zaman may revise these terms of service for its website at any time without notice. By using 
                this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                10. Governing Law
              </h2>
              <p className="text-slate-300 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of the State of New 
                York, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that State 
                or location.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                11. Contact Information
              </h2>
              <p className="text-slate-300 mb-4">
                If you have any questions about these Terms of Use, please contact us:
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

