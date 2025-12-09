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
      title: 'Payment Modernization – American Airlines',
      role: 'Tech Lead QA Engineer / SDET',
      context: 'Microservices-based payment system modernization',
      stack: ['Cypress', 'Playwright', 'GraphQL', 'AWS'],
      impact: [
        'Improved CI pipeline execution time by 40%',
        'Reduced production defects by 60%',
        'Introduced accessibility and 508 compliance'
      ]
    },
    {
      title: 'Enterprise Platform – Raytheon',
      role: 'Senior SDET',
      context: 'Large-scale enterprise platform testing',
      stack: ['Selenium', 'Java', 'Jenkins', 'Azure'],
      impact: [
        'Automated 80% of regression testing',
        'Reduced test execution time by 50%',
        'Enhanced test coverage to 95%'
      ]
    },
    {
      title: 'Banking System – Wells Fargo',
      role: 'QA Automation Lead',
      context: 'Critical banking application testing',
      stack: ['Tosca', 'AccelQ', 'API Testing', 'DevSecOps'],
      impact: [
        'Achieved 100% automation coverage',
        'Zero critical defects in production',
        'Compliant with banking regulations'
      ]
    }
  ]

  const clientLogos = [
    'American Airlines',
    'Raytheon',
    'Wells Fargo',
    'AT&T',
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
              Full-Stack Quality Assurance Engineer
              <span className="block text-sky-400 mt-2">(SDET | Tech Lead)</span>
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
          <p className="text-base text-slate-400">
            Specializing in full-stack automation, accessibility compliance, and cutting-edge testing methodologies 
            that drive business value and reduce time-to-market.
          </p>
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
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <TechBadge key={i}>{tech}</TechBadge>
                ))}
              </div>

              <ul className="space-y-2">
                {project.impact.map((impact, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>{impact}</span>
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

