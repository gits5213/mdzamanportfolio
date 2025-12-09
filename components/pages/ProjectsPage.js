import Section from '@/components/ui/Section'
import PageHeader from '@/components/ui/PageHeader'
import Card from '@/components/ui/Card'
import TechBadge from '@/components/ui/TechBadge'

export default function ProjectsPage() {
  const caseStudies = [
    {
      title: 'Payment Modernization – American Airlines',
      role: 'Tech Lead QA Engineer / SDET',
      context: 'Microservices-based payment system modernization for enterprise airline platform',
      stack: ['Cypress', 'Playwright', 'GraphQL', 'AWS', 'Docker', 'GitLab CI/CD'],
      impact: [
        'Improved CI pipeline execution time by 40%',
        'Reduced defects in production by 60%',
        'Introduced accessibility and 508 compliance testing',
        'Achieved 95% automation coverage'
      ],
      github: null
    },
    {
      title: 'Enterprise Platform Testing – Raytheon',
      role: 'Senior SDET',
      context: 'Large-scale enterprise platform with complex integrations',
      stack: ['Selenium', 'Java', 'Jenkins', 'Azure', 'API Testing'],
      impact: [
        'Automated 80% of regression testing suite',
        'Reduced test execution time by 50%',
        'Enhanced test coverage to 95%',
        'Established CI/CD best practices'
      ],
      github: null
    },
    {
      title: 'Banking System – Wells Fargo',
      role: 'QA Automation Lead',
      context: 'Critical banking application with high security requirements',
      stack: ['Tosca', 'AccelQ', 'API Testing', 'DevSecOps', 'Security Testing'],
      impact: [
        'Achieved 100% automation coverage for critical paths',
        'Zero critical defects in production releases',
        'Compliant with banking regulations and standards',
        'Reduced release cycle time by 30%'
      ],
      github: null
    },
    {
      title: 'Telecom Platform – AT&T',
      role: 'SDET / Automation Architect',
      context: 'Telecommunications platform with multi-tenant architecture',
      stack: ['Playwright', 'TypeScript', 'AWS', 'Kubernetes', 'GraphQL'],
      impact: [
        'Designed scalable test automation framework',
        'Implemented parallel test execution reducing time by 65%',
        'Integrated AI-augmented test generation',
        'Improved test maintainability by 70%'
      ],
      github: null
    }
  ]

  return (
    <div className="min-h-screen">
      <Section>
        <PageHeader 
          title="Projects & Case Studies"
          subtitle="Enterprise-scale testing initiatives delivering measurable impact"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((project, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                {project.title}
              </h3>
              <p className="text-sm text-emerald-400 mb-3 font-medium">{project.role}</p>
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.context}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <TechBadge key={i}>{tech}</TechBadge>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-slate-200 mb-3 mt-6">Impact:</h4>
              <ul className="space-y-2 mb-4">
                {project.impact.map((impact, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>

              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors"
                >
                  View on GitHub →
                </a>
              )}
            </Card>
          ))}
        </div>
      </Section>
    </div>
  )
}

