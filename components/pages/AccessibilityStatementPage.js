'use client'

import Section from '@/components/ui/Section'
import PageHeader from '@/components/ui/PageHeader'
import Card from '@/components/ui/Card'

export default function AccessibilityStatementPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen">
      <Section>
        <PageHeader 
          title="Accessibility Statement"
          subtitle="Our commitment to digital accessibility"
        />

        <Card className="p-8 md:p-12">
          <div className="prose prose-invert prose-slate max-w-none">
            <p className="text-sm text-slate-400 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Our Commitment
              </h2>
              <p className="text-slate-300 mb-4">
                MD Shahnewaz Zaman is committed to ensuring digital accessibility for people with disabilities. We are 
                continually improving the user experience for everyone and applying the relevant accessibility standards 
                to achieve these goals.
              </p>
              <p className="text-slate-300">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, as well as 
                comply with the Americans with Disabilities Act (ADA) and Section 508 of the Rehabilitation Act.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Accessibility Standards
              </h2>
              <p className="text-slate-300 mb-4">
                This website strives to meet the following accessibility standards:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li><strong>WCAG 2.1 Level AA:</strong> Web Content Accessibility Guidelines published by the World Wide Web Consortium (W3C)</li>
                <li><strong>ADA Compliance:</strong> Americans with Disabilities Act requirements for digital accessibility</li>
                <li><strong>Section 508:</strong> Federal accessibility standards for electronic and information technology</li>
                <li><strong>New York State Accessibility Requirements:</strong> Compliance with applicable state accessibility laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Accessibility Features
              </h2>
              <p className="text-slate-300 mb-4">
                Our website includes the following accessibility features:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li><strong>Keyboard Navigation:</strong> All interactive elements can be accessed using only a keyboard</li>
                <li><strong>Screen Reader Compatibility:</strong> Content is structured with proper semantic HTML and ARIA labels</li>
                <li><strong>Alt Text:</strong> Images include descriptive alternative text</li>
                <li><strong>Color Contrast:</strong> Text and background colors meet WCAG contrast ratio requirements</li>
                <li><strong>Text Resizing:</strong> Text can be resized up to 200% without loss of functionality</li>
                <li><strong>Focus Indicators:</strong> Clear visual indicators for keyboard focus</li>
                <li><strong>Descriptive Links:</strong> Link text is descriptive and meaningful out of context</li>
                <li><strong>Form Labels:</strong> All form inputs have associated labels</li>
                <li><strong>Heading Structure:</strong> Proper heading hierarchy for document structure</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Known Limitations
              </h2>
              <p className="text-slate-300 mb-4">
                Despite our best efforts to ensure accessibility, there may be some limitations. We are aware of the 
                following areas and are actively working to improve them:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li>Some third-party content or embedded media may not be fully accessible</li>
                <li>Older PDF documents may not be fully accessible to screen readers</li>
                <li>Some interactive elements may require further optimization for assistive technologies</li>
              </ul>
              <p className="text-slate-300">
                We are committed to addressing these issues and improving accessibility across all areas of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Assistive Technologies
              </h2>
              <p className="text-slate-300 mb-4">
                Our website is designed to work with the following assistive technologies:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
                <li>Screen magnification software</li>
                <li>Voice recognition software</li>
                <li>Keyboard-only navigation</li>
                <li>Switch devices</li>
                <li>Browser zoom and text size adjustments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Feedback and Reporting Issues
              </h2>
              <p className="text-slate-300 mb-4">
                We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers 
                or have suggestions for improvement, please contact us:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li>Describe the accessibility issue you encountered</li>
                <li>Provide the URL of the page where the issue occurred</li>
                <li>Describe what you were trying to do when you encountered the issue</li>
                <li>Include information about your assistive technology and browser</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Ongoing Improvements
              </h2>
              <p className="text-slate-300 mb-4">
                We are committed to continuously improving the accessibility of our website. Our efforts include:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                <li>Regular accessibility audits and testing</li>
                <li>Training for content creators on accessibility best practices</li>
                <li>Implementation of accessibility features in new content and features</li>
                <li>Staying current with accessibility standards and guidelines</li>
                <li>Addressing user feedback and reported issues promptly</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Third-Party Content
              </h2>
              <p className="text-slate-300 mb-4">
                Some content on our website may be provided by third parties. While we strive to ensure all content is 
                accessible, we may not have full control over third-party content. If you encounter accessibility issues 
                with third-party content, please contact us and we will work with the content provider to address the issue.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Alternative Formats
              </h2>
              <p className="text-slate-300 mb-4">
                If you need information from our website in an alternative format, please contact us. We will work with 
                you to provide the information in a format that meets your needs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Contact Us
              </h2>
              <p className="text-slate-300 mb-4">
                For accessibility-related questions, concerns, or to report accessibility issues, please contact:
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
                <p className="text-slate-300 mb-2">
                  Email: <a href="mailto:mdzaman@globalitechsol.com" className="text-sky-400 hover:text-sky-300">mdzaman@globalitechsol.com</a>
                </p>
                <p className="text-slate-300">
                  Please include "Accessibility" in the subject line of your email.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Updates to This Statement
              </h2>
              <p className="text-slate-300 mb-4">
                We will review and update this accessibility statement regularly to reflect our ongoing commitment to 
                accessibility and any changes to our website or accessibility practices.
              </p>
            </section>
          </div>
        </Card>
      </Section>
    </div>
  )
}

