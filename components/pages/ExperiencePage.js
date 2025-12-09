import Section from '@/components/ui/Section'
import PageHeader from '@/components/ui/PageHeader'
import Card from '@/components/ui/Card'
import TechBadge from '@/components/ui/TechBadge'
import resumePageData from '@/data/resumePage.json'

export default function ExperiencePage() {
  const { jobs } = resumePageData

  const experience = [
    {
      role: 'Tech Lead QA Engineer / SDET',
      company: 'Global iTech Solutions',
      location: 'Remote',
      startDate: jobs.jobStartYear,
      endDate: jobs.jobEndYear,
      bullets: [
        'Led migration from Protractor → Cypress → Playwright, increased stability by 40%',
        'Architected AI-augmented testing framework using ChatGPT and Copilot',
        'Established DevSecOps practices reducing security vulnerabilities by 50%'
      ],
      domains: ['Aviation', 'Banking', 'e-Commerce']
    },
    {
      role: 'Senior SDET',
      company: 'Previous Company',
      location: 'New York, NY',
      startDate: '2020',
      endDate: '2022',
      bullets: [
        'Built scalable automation framework for microservices architecture',
        'Mentored team of 5 QA engineers in automation best practices',
        'Reduced regression testing time by 60% through parallel execution'
      ],
      domains: ['Telecom', 'Government']
    }
  ]

  const leadership = [
    {
      title: 'Mentoring & Coaching',
      description: 'Mentored 20+ QA analysts and SDETs, establishing best practices and career development paths'
    },
    {
      title: 'Framework Development',
      description: 'Built reusable test automation frameworks adopted across multiple enterprise projects'
    },
    {
      title: '3-Amigos & Agile Practices',
      description: 'Led cross-functional collaboration sessions ensuring quality from design to deployment'
    }
  ]

  const domains = ['Aviation', 'Banking', 'e-Commerce', 'Telecom', 'Government', 'Healthcare', 'Retail']

  return (
    <div className="min-h-screen">
      <Section>
        <PageHeader 
          title="Experience"
          subtitle="15+ years of leading QA initiatives for Fortune 500 companies"
        />

        {/* Career Timeline */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < experience.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-slate-800"></div>
              )}
              
              <div className="flex gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-sky-500 border-4 border-slate-950 flex items-center justify-center">
                    <span className="text-slate-950 font-bold">{index + 1}</span>
                  </div>
                </div>

                {/* Experience Card */}
                <Card className="flex-1 p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-sky-400 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                        {exp.role}
                      </h3>
                      <p className="text-lg text-slate-300 mb-1">{exp.company}</p>
                      <p className="text-sm text-slate-400">{exp.location}</p>
                    </div>
                    <div className="text-sm text-slate-400 mt-2 md:mt-0">
                      {exp.startDate} - {exp.endDate}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-slate-300 flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.domains.map((domain, i) => (
                      <TechBadge key={i}>{domain}</TechBadge>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership & Mentoring */}
      <Section className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-100" style={{ fontFamily: 'var(--font-heading)' }}>
          Leadership & Mentoring
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadership.map((item, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Domains Covered */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-100" style={{ fontFamily: 'var(--font-heading)' }}>
          Domains Covered
        </h2>
        <div className="flex flex-wrap gap-3">
          {domains.map((domain, index) => (
            <TechBadge key={index} className="text-base px-4 py-2">
              {domain}
            </TechBadge>
          ))}
        </div>
      </Section>
    </div>
  )
}

