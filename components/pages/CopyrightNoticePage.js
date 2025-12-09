'use client'

import Section from '@/components/ui/Section'
import PageHeader from '@/components/ui/PageHeader'
import Card from '@/components/ui/Card'

export default function CopyrightNoticePage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen">
      <Section>
        <PageHeader 
          title="Copyright Notice"
          subtitle="Intellectual property rights and usage guidelines"
        />

        <Card className="p-8 md:p-12">
          <div className="prose prose-invert prose-slate max-w-none">
            <p className="text-sm text-slate-400 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Copyright Ownership
              </h2>
              <p className="text-slate-300 mb-4">
                Copyright © {currentYear} MD Shahnewaz Zaman. All rights reserved.
              </p>
              <p className="text-slate-300 mb-4">
                All content, materials, and information on this website, including but not limited to text, graphics, 
                logos, icons, images, audio clips, digital downloads, data compilations, and software, are the property 
                of MD Shahnewaz Zaman or its content suppliers and are protected by United States copyright laws and 
                international copyright treaties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Protected Materials
              </h2>
              <p className="text-slate-300 mb-4">
                The following materials are protected by copyright:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li>All written content, articles, and blog posts</li>
                <li>Website design, layout, and structure</li>
                <li>Graphics, logos, and images</li>
                <li>Code, scripts, and software</li>
                <li>Resume and portfolio materials</li>
                <li>Project descriptions and case studies</li>
                <li>Training materials and certifications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Permitted Uses
              </h2>
              <p className="text-slate-300 mb-4">
                You may view, download, and print materials from this website for your personal, non-commercial use only, 
                provided that:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li>You do not modify the materials</li>
                <li>You retain all copyright and other proprietary notices contained in the materials</li>
                <li>You do not use the materials for any commercial purpose</li>
                <li>You do not reproduce, distribute, or transmit the materials without prior written permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Prohibited Uses
              </h2>
              <p className="text-slate-300 mb-4">
                Without prior written permission from MD Shahnewaz Zaman, you may not:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li>Reproduce, distribute, or display any content from this website</li>
                <li>Create derivative works based on the content</li>
                <li>Use the content for commercial purposes</li>
                <li>Remove or alter any copyright, trademark, or other proprietary notices</li>
                <li>Copy or download any content for republication on another website or platform</li>
                <li>Use automated systems or software to extract data from this website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Fair Use
              </h2>
              <p className="text-slate-300 mb-4">
                The fair use provisions of the Copyright Act of 1976 (17 U.S.C. § 107) may apply to certain uses of 
                copyrighted material. Fair use allows limited use of copyrighted material without permission for purposes 
                such as criticism, comment, news reporting, teaching, scholarship, or research.
              </p>
              <p className="text-slate-300">
                If you believe your use of materials from this website constitutes fair use, you are responsible for 
                ensuring compliance with applicable copyright laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Third-Party Content
              </h2>
              <p className="text-slate-300 mb-4">
                Some content on this website may be owned by third parties or used with permission. Such content remains 
                the property of its respective owners and is protected by their copyrights. Any use of third-party content 
                must comply with the terms and conditions set by the respective copyright owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Digital Millennium Copyright Act (DMCA)
              </h2>
              <p className="text-slate-300 mb-4">
                In accordance with the Digital Millennium Copyright Act (DMCA), MD Shahnewaz Zaman respects the intellectual 
                property rights of others. If you believe that any content on this website infringes your copyright, 
                please provide the following information:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li>A description of the copyrighted work that you claim has been infringed</li>
                <li>The location of the allegedly infringing material on the website</li>
                <li>Your contact information, including name, address, telephone number, and email address</li>
                <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner</li>
                <li>A statement, under penalty of perjury, that the information in your notice is accurate and that you 
                    are the copyright owner or authorized to act on the copyright owner's behalf</li>
                <li>Your physical or electronic signature</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Trademarks
              </h2>
              <p className="text-slate-300 mb-4">
                All trademarks, service marks, and trade names used on this website are the property of their respective 
                owners. Use of any trademark, service mark, or trade name without the owner's prior written consent is 
                strictly prohibited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Enforcement
              </h2>
              <p className="text-slate-300 mb-4">
                MD Shahnewaz Zaman will vigorously enforce its intellectual property rights to the fullest extent of the 
                law, including seeking monetary damages and injunctive relief. Unauthorized use of copyrighted materials 
                may result in civil and criminal penalties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Contact for Permissions
              </h2>
              <p className="text-slate-300 mb-4">
                If you wish to request permission to use any copyrighted materials from this website, please contact:
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

