import Section from '@/components/ui/Section'
import PageHeader from '@/components/ui/PageHeader'
import Card from '@/components/ui/Card'
import TechBadge from '@/components/ui/TechBadge'

export default function SkillsPage() {
  const skillCategories = [
    {
      title: 'Programming & Scripting',
      icon: '💻',
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C#', 'Bash', 'PowerShell']
    },
    {
      title: 'Automation Frameworks',
      icon: '⚙️',
      skills: ['Playwright', 'Cypress', 'Selenium', 'Tosca', 'AccelQ', 'Protractor', 'WebDriverIO']
    },
    {
      title: 'Testing Types',
      icon: '🧪',
      skills: ['UI Testing', 'API Testing', 'Mobile Testing', 'Performance Testing', 'Accessibility Testing', 'Security Testing']
    },
    {
      title: 'DevOps & Cloud',
      icon: '☁️',
      skills: ['AWS', 'Azure', 'GitLab CI/CD', 'GitHub Actions', 'Jenkins', 'Azure DevOps', 'Docker', 'Kubernetes']
    },
    {
      title: 'API & Tools',
      icon: '🔌',
      skills: ['REST Assured', 'SuperTest', 'Postman', 'GraphQL', 'Swagger', 'JMeter']
    },
    {
      title: 'Mobile & Cross-Platform',
      icon: '📱',
      skills: ['Appium', 'Mobile Web Testing', 'Responsive Testing', 'Cross-Browser Testing']
    }
  ]

  const tools = [
    'Playwright', 'Cypress', 'Selenium', 'Tosca', 'AccelQ', 'Protractor', 'WebDriverIO',
    'REST Assured', 'SuperTest', 'Postman', 'JMeter', 'Appium',
    'AWS', 'Azure', 'GitLab', 'GitHub Actions', 'Jenkins', 'Azure DevOps',
    'Docker', 'Kubernetes', 'GraphQL', 'Swagger', 'Jira', 'Confluence'
  ]

  return (
    <div className="min-h-screen">
      <Section>
        <PageHeader 
          title="Skills & Tech Stack"
          subtitle="Comprehensive expertise across automation, testing, and DevOps"
        />

        {/* Skill Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Tools & Platforms Badges */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-100" style={{ fontFamily: 'var(--font-heading)' }}>
            Tools & Platforms
          </h2>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <TechBadge key={index}>{tool}</TechBadge>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}

