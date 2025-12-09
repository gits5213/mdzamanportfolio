import Section from '@/components/ui/Section'
import PageHeader from '@/components/ui/PageHeader'
import Card from '@/components/ui/Card'
import Link from 'next/link'

export default function TrainingPage() {
  const trainingPrograms = [
    {
      title: 'Full-Stack SDET Training Program',
      organization: 'GITSICS',
      description: 'Comprehensive training program covering automation frameworks, CI/CD, and best practices',
      type: 'Training Program'
    },
    {
      title: 'QA Bootcamps',
      description: 'Intensive bootcamps for QA professionals transitioning to automation',
      type: 'Workshop'
    },
    {
      title: 'Playwright Training',
      description: 'Hands-on Playwright training sessions for teams and individuals',
      type: 'Training'
    },
    {
      title: 'Internal Coaching',
      description: 'Mentoring and coaching programs for QA teams',
      type: 'Coaching'
    }
  ]

  const certifications = [
    { name: 'AWS Solutions Architect Associate', issuer: 'AWS', year: '2023' },
    { name: 'ISTQB CTAL-TAE', issuer: 'ISTQB', year: '2022' },
    { name: 'ISTQB CTAL-TM', issuer: 'ISTQB', year: '2022' },
    { name: 'ISTQB CT-AI', issuer: 'ISTQB', year: '2023' },
    { name: 'PSM I (Professional Scrum Master)', issuer: 'Scrum.org', year: '2021' },
    { name: 'SAFe Practitioner', issuer: 'Scaled Agile', year: '2021' },
    { name: 'Security+', issuer: 'CompTIA', year: '2020' },
    { name: 'DHS Trusted Tester', issuer: 'DHS', year: '2020' },
    { name: 'Tosca AS1, AS2', issuer: 'Tricentis', year: '2019' },
    { name: 'AccelQ Certified', issuer: 'AccelQ', year: '2019' }
  ]

  return (
    <div className="min-h-screen">
      <Section>
        <PageHeader 
          title="Training & Certifications"
          subtitle="Empowering teams through training and continuous learning"
        />

        {/* Training & Workshops */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-100" style={{ fontFamily: 'var(--font-heading)' }}>
            Training & Workshops
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                    {program.title}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {program.type}
                  </span>
                </div>
                {program.organization && (
                  <p className="text-sm text-emerald-400 mb-2">{program.organization}</p>
                )}
                <p className="text-slate-300 text-sm leading-relaxed">{program.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-100" style={{ fontFamily: 'var(--font-heading)' }}>
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                  {cert.name}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">{cert.issuer}</span>
                  <span className="text-slate-500">{cert.year}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Download Link */}
        <div className="mt-12 text-center">
          <Link
            href="https://www.linkedin.com/in/zamanmd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg border border-slate-600 text-slate-100 hover:border-sky-500 hover:text-sky-400 transition-all duration-300"
          >
            View Full Certification List on LinkedIn →
          </Link>
        </div>
      </Section>
    </div>
  )
}

