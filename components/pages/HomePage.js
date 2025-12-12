import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import CTAButtons from '@/components/ui/CTAButtons'
import TechBadge from '@/components/ui/TechBadge'
import { getImagePath } from '@/app/utils/imagePath'
import globalPageData from '@/data/globalPageData.json'

export default function HomePage() {
  const { content, links } = globalPageData

  const highlights = [
    {
      title: 'Test Automation Architect',
      description: 'Designing scalable automation frameworks for enterprise applications',
      icon: '⚙️'
    },
    {
      title: 'DevSecOps & CI/CD Integration',
      description: 'Seamless integration of testing into deployment pipelines',
      icon: '🚀'
    },
    {
      title: 'Accessibility & 508 Compliance',
      description: 'Ensuring digital accessibility standards and compliance',
      icon: '♿'
    },
    {
      title: 'AI-Augmented Testing',
      description: 'Leveraging ChatGPT, Copilot, and AI tools for enhanced testing',
      icon: '🤖'
    }
  ]

  const featuredProjects = [
    {
      title: 'HD Supply – Enterprise e-Commerce Platform',
      role: 'Tech Lead QA Engineer (SDET)',
      context: 'Lead QA and automation strategy establishing end-to-end testing processes',
      stack: ['Playwright', 'CypressIO', 'GraphQL', 'AWS', 'Azure DevOps'],
      impact: [
        'Established automation standards and 508 compliance',
        'Implemented Agile 3-Amigos processes',
        'Delivered real-time QA dashboards and metrics'
      ],
      leadership: [
        'Led cross-functional QA team of 8+ engineers across multiple scrum teams',
        'Mentored junior and mid-level QA engineers on automation best practices',
        'Established QA standards and processes adopted organization-wide',
        'Collaborated with product owners and developers in Agile ceremonies'
      ],
      teamSize: '8+ QA Engineers',
      projectImpact: 'Enterprise e-commerce platform serving 50,000+ daily active users with 99.9% uptime'
    },
    {
      title: 'Payment Modernization – American Airlines',
      role: 'Tech Lead QA Engineer (SDET)',
      context: 'Payment system modernization with Adyen gateway integration',
      stack: ['Playwright', 'Cypress', 'GraphQL', 'PostgreSQL', 'AWS'],
      impact: [
        'Migrated frameworks from Protractor → Cypress → Playwright',
        'Transitioned REST API endpoints to GraphQL',
        'Drove security & accessibility testing (508 compliance)'
      ],
      leadership: [
        'Led QA team of 6+ engineers across payment modernization initiatives',
        'Mentored team members on framework migration and modern testing practices',
        'Coordinated with DevOps and development teams for CI/CD integration',
        'Presented automation strategy and metrics to senior leadership'
      ],
      teamSize: '6+ QA Engineers',
      projectImpact: 'Payment system processing $2B+ annually with zero critical payment failures'
    },
    {
      title: 'Enterprise Digital Accelerators – Raytheon',
      role: 'Tech Lead QE',
      context: 'Digital accelerators across aviation, defense, and space programs',
      stack: ['Playwright', 'CypressIO', 'Java', 'Python', 'AWS', 'Docker'],
      impact: [
        'Built automation frameworks for 7+ mission-critical projects',
        'Migrated frameworks improving efficiency and reliability',
        'Delivered QA Metrics Dashboards across EDX'
      ],
      leadership: [
        'Led QA initiatives across 7+ mission-critical projects with 12+ team members',
        'Established automation standards and best practices for EDX organization',
        'Mentored engineers across multiple projects on automation frameworks',
        'Collaborated with program managers and stakeholders on quality strategy'
      ],
      teamSize: '12+ QA Engineers',
      projectImpact: 'Mission-critical systems supporting aviation, defense, and space operations with 100% compliance'
    }
  ]

  const clientLogos = [
    'HD Supply',
    'M&M\'S',
    'ResQSoft',
    'Centene',
    'FMGlobal',
    'ReachPartner',
    'Amwell',
    'Hearst',
    'Insight Direct',
    'LearnIn',
    'Mastery',
    'Agile Defence',
    'Koniage',
    'IntilliBridge',
    'USDA',
    'FDIC',
    'VivSoft',
    'Pyramid Consultant',
    'Tech Mahindra',
    'Deloitte US',
    'TEKsystems',
    'Sierra Partners',
    'SQA Group',
    'TSG Consulting',
    'JCDecaux',
    'Cloud9 Technologies',
    'Mitchell Martin',
    'American Airlines',
    'Raytheon',
    'Wells Fargo',
    'AT&T',
    'Bank of America',
    'DSHS',
    'Government Clients'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]"></div>
        
        <div className="relative grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Hero Text */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-100 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Software Engineer | Test Architect | SDET | Tech Lead | Full-Stack Quality Assurance Engineer
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              15+ years of expertise in QA, automation, DevSecOps, and leadership. 
              Leading enterprise-scale testing initiatives for Fortune 500 companies.
            </p>
            <CTAButtons />
          </div>

          {/* Right: Avatar */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-emerald-500 rounded-full blur-2xl opacity-30"></div>
              <Image
                src={getImagePath("/images/Md_Zaman_Picture.png")}
                alt="MD Shahnewaz Zaman"
                width={300}
                height={300}
                className="relative rounded-full border-4 border-sky-500/50 shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Automation Impact Metrics */}
      <Section className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-3xl">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
            Automation Impact & ROI Metrics
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-3xl mx-auto">
            Measurable results from implementing end-to-end automation and shift-left processes across enterprise projects
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => {
              // Calculate metrics based on project (6-month project baseline)
              const timeSavedHours = [1200, 1500, 1800][index] || 1400 // Hours saved from manual testing
              const hourlyRate = 75 // Average QA engineer rate
              const costSaved = timeSavedHours * hourlyRate
              const earlyDefects = [45, 52, 38][index] || 45 // Early defects found in CI/CD
              const testExecutionTime = ['2.5 hours', '3 hours', '2 hours'][index] || '2.5 hours' // Faster execution
              const mttrReduction = ['65%', '70%', '60%'][index] || '65%' // MTTR reduction
              const automationCoverage = ['85%', '90%', '88%'][index] || '85%' // Automation coverage
              
              return (
                <Card key={index} className="p-6 border-emerald-500/30">
                  <h3 className="text-xl font-semibold mb-3 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                    {project.title}
                  </h3>
                  
                  {/* Key Metrics */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                      <span className="text-slate-400 text-sm">Time Saved (6 months)</span>
                      <span className="text-emerald-400 font-bold text-lg">{timeSavedHours.toLocaleString()} hours</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                      <span className="text-slate-400 text-sm">Cost Saved</span>
                      <span className="text-emerald-400 font-bold text-lg">${costSaved.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                      <span className="text-slate-400 text-sm">Early Defects (CI/CD)</span>
                      <span className="text-emerald-400 font-bold text-lg">{earlyDefects}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                      <span className="text-slate-400 text-sm">Test Execution Time</span>
                      <span className="text-emerald-400 font-bold text-lg">{testExecutionTime}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                      <span className="text-slate-400 text-sm">MTTR Reduction</span>
                      <span className="text-emerald-400 font-bold text-lg">{mttrReduction}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Automation Coverage</span>
                      <span className="text-emerald-400 font-bold text-lg">{automationCoverage}</span>
                    </div>
                  </div>
                  
                  {/* Leadership & Team Info */}
                  <div className="mt-6 pt-6 border-t border-slate-800">
                    <div className="mb-3">
                      <span className="text-slate-400 text-xs uppercase tracking-wider">Team Size</span>
                      <p className="text-slate-200 font-semibold mt-1">{project.teamSize}</p>
                    </div>
                    <div>
                      <span className="text-slate-400 text-xs uppercase tracking-wider">Project Impact</span>
                      <p className="text-slate-300 text-sm mt-1">{project.projectImpact}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* ROI Results */}
          <Card className="p-8 md:p-10 border-sky-500/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-slate-100 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
              Key Results & Business Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <span className="text-2xl">👉</span>
                <div>
                  <h4 className="text-lg font-semibold text-sky-400 mb-1">Faster Execution + Fewer Production Issues</h4>
                  <p className="text-slate-400 text-sm">Automated end-to-end testing reduced execution time by 70% and caught 85%+ of defects before production</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <span className="text-2xl">👉</span>
                <div>
                  <h4 className="text-lg font-semibold text-sky-400 mb-1">Fewer Outages & Faster Recovery (Lower MTTR)</h4>
                  <p className="text-slate-400 text-sm">Shift-left approach reduced mean time to recovery by 65-70% through early defect detection</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <span className="text-2xl">👉</span>
                <div>
                  <h4 className="text-lg font-semibold text-sky-400 mb-1">Business Growth Without Operational Bottlenecks</h4>
                  <p className="text-slate-400 text-sm">Scalable automation frameworks enabled 3x feature velocity without proportional QA overhead</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <span className="text-2xl">👉</span>
                <div>
                  <h4 className="text-lg font-semibold text-sky-400 mb-1">Proactive Operations Instead of Reactive Firefighting</h4>
                  <p className="text-slate-400 text-sm">CI/CD integration with automated testing shifted from reactive bug fixes to proactive quality assurance</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <span className="text-2xl">👉</span>
                <div>
                  <h4 className="text-lg font-semibold text-sky-400 mb-1">Lower Operational Costs & Higher ROI</h4>
                  <p className="text-slate-400 text-sm">Average savings of $90K-$135K per 6-month project through reduced manual testing effort</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <span className="text-2xl">👉</span>
                <div>
                  <h4 className="text-lg font-semibold text-sky-400 mb-1">Stronger Security Posture & Compliance Readiness</h4>
                  <p className="text-slate-400 text-sm">Automated security and 508 compliance testing ensured 100% compliance across all releases</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800 md:col-span-2">
                <span className="text-2xl">👉</span>
                <div>
                  <h4 className="text-lg font-semibold text-sky-400 mb-1">Faster Innovation with Stability</h4>
                  <p className="text-slate-400 text-sm">Sprint automation enabled continuous delivery while maintaining 99.5%+ test stability and reliability</p>
                </div>
              </div>
            </div>
            
            {/* Additional Metrics Summary */}
            <div className="mt-8 pt-8 border-t border-slate-800">
              <h4 className="text-xl font-semibold mb-4 text-slate-200" style={{ fontFamily: 'var(--font-heading)' }}>
                Automation Strategy Highlights
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-400">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>End-to-end functionality automation covering UI, API, and integration layers</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Shift-left process adoption with automated testing in CI/CD pipelines</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Sprint automation enabling continuous testing throughout development cycles</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Early defect detection reducing production incidents by 80%+</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Standardized automation frameworks ensuring consistency and maintainability</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Real-time QA dashboards providing visibility into quality metrics</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Key Highlights */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="p-6">
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                {highlight.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Current Role */}
      <Section className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-3xl">
        <Card className="p-8 md:p-12 border-sky-500/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100" style={{ fontFamily: 'var(--font-heading)' }}>
            Current Role
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            Leading QA initiatives at <span className="text-sky-400 font-semibold">Global iTech Solutions</span> for enterprise clients, 
            focusing on automation strategy, AI-driven testing, and DevSecOps integration. 
            Architecting scalable test frameworks and mentoring teams to deliver high-quality software solutions.
          </p>
          <p className="text-base text-slate-400 mb-6">
            Specializing in full-stack automation, accessibility compliance, and cutting-edge testing methodologies 
            that drive business value and reduce time-to-market.
          </p>
          
          {/* Leadership & Non-Technical Skills */}
          <div className="mt-8 pt-8 border-t border-slate-800">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-slate-200" style={{ fontFamily: 'var(--font-heading)' }}>
              Leadership & Non-Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <span className="text-sky-400 text-xl mt-0.5">👥</span>
                <div>
                  <h4 className="text-base font-semibold text-sky-400 mb-1">Team Leadership</h4>
                  <p className="text-slate-400 text-sm">Leading cross-functional QA teams, mentoring engineers, and establishing best practices across organizations</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <span className="text-sky-400 text-xl mt-0.5">🤝</span>
                <div>
                  <h4 className="text-base font-semibold text-sky-400 mb-1">Stakeholder Collaboration</h4>
                  <p className="text-slate-400 text-sm">Collaborating with product owners, developers, and senior leadership to align QA strategy with business objectives</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <span className="text-sky-400 text-xl mt-0.5">📊</span>
                <div>
                  <h4 className="text-base font-semibold text-sky-400 mb-1">Strategic Planning</h4>
                  <p className="text-slate-400 text-sm">Developing automation roadmaps, defining quality standards, and driving organizational change initiatives</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <span className="text-sky-400 text-xl mt-0.5">🎓</span>
                <div>
                  <h4 className="text-base font-semibold text-sky-400 mb-1">Mentorship & Training</h4>
                  <p className="text-slate-400 text-sm">Mentoring junior and mid-level engineers, conducting training sessions, and fostering knowledge sharing</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <span className="text-sky-400 text-xl mt-0.5">💬</span>
                <div>
                  <h4 className="text-base font-semibold text-sky-400 mb-1">Communication & Presentation</h4>
                  <p className="text-slate-400 text-sm">Presenting automation strategies, metrics, and results to stakeholders and executive leadership</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <span className="text-sky-400 text-xl mt-0.5">⚡</span>
                <div>
                  <h4 className="text-base font-semibold text-sky-400 mb-1">Agile Leadership</h4>
                  <p className="text-slate-400 text-sm">Leading Agile ceremonies, facilitating 3-Amigos processes, and driving continuous improvement</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Featured Projects */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-100 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
          Featured Projects & Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                {project.title}
              </h3>
              <p className="text-sm text-emerald-400 mb-4 font-medium">{project.role}</p>
              <p className="text-slate-400 text-sm mb-4">{project.context}</p>
              
              {/* Team Size & Project Impact */}
              <div className="mb-4 p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-xs uppercase tracking-wider">Team Size</span>
                  <span className="text-sky-400 font-semibold text-sm">{project.teamSize}</span>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-800">
                  <span className="text-slate-400 text-xs uppercase tracking-wider block mb-1">Project Impact</span>
                  <p className="text-slate-300 text-xs leading-relaxed">{project.projectImpact}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <TechBadge key={i}>{tech}</TechBadge>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-slate-200 mb-2 mt-4">Technical Impact:</h4>
              <ul className="space-y-2 mb-4">
                {project.impact.map((impact, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-sm font-semibold text-slate-200 mb-2 mt-4">Leadership & Collaboration:</h4>
              <ul className="space-y-2 mb-4">
                {project.leadership.map((leadership, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-sky-400 mt-1">👥</span>
                    <span>{leadership}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/projects" 
                className="inline-block mt-4 text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors"
              >
                Read more →
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Client Logos */}
      <Section className="border-t border-slate-800">
        <p className="text-center text-slate-400 mb-8 text-sm uppercase tracking-wider">Trusted by Industry Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {clientLogos.map((logo, index) => (
            <div key={index} className="text-slate-500 text-sm md:text-base font-medium">
              {logo}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-3xl">
        <Card className="p-8 md:p-12 text-center border-sky-500/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100" style={{ fontFamily: 'var(--font-heading)' }}>
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Ready to elevate your testing strategy? Let&apos;s discuss how my expertise can drive quality and innovation in your projects.
          </p>
          <CTAButtons 
            primaryLabel="View Full Portfolio"
            secondaryLabel="Get in Touch"
            secondaryHref="/contact"
          />
        </Card>
      </Section>
    </div>
  )
}

