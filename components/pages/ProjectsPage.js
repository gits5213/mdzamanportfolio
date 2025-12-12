import Section from '@/components/ui/Section'
import PageHeader from '@/components/ui/PageHeader'
import Card from '@/components/ui/Card'
import TechBadge from '@/components/ui/TechBadge'

export default function ProjectsPage() {
  const caseStudies = [
    {
      title: 'HD Supply – Enterprise e-Commerce Platform',
      role: 'Tech Lead QA Engineer (SDET)',
      context: 'Lead QA and automation strategy for enterprise e-commerce client, establishing end-to-end testing processes and quality standards',
      stack: ['Playwright', 'CypressIO', 'Selenium', 'GraphQL', 'AWS', 'Azure DevOps', 'GitHub Actions', 'Jenkins', 'GitLab CI/CD', 'Docker', 'DynamoDB', 'CloudWatch'],
      qaEngineersLed: '8+ QA Engineers (Onshore + Offshore)',
      impact: [
        'Established automation standards and 508 compliance across enterprise platform',
        'Implemented Agile 3-Amigos processes improving collaboration and quality',
        'Delivered real-time QA dashboards and metrics for visibility',
        'Designed automation frameworks with CI/CD pipelines across multiple cloud platforms',
        'Conducted performance, security, and penetration testing optimizing system performance',
        'Migrated critical endpoints to GraphQL improving API efficiency',
        'Mentored teams in AI-driven testing methodologies (ChatGPT, Copilot, Gemini)'
      ],
      github: null
    },
    {
      title: 'Payment Modernization Program – American Airlines',
      role: 'Tech Lead QA Engineer (SDET)',
      context: 'Payment system modernization testing payment authorization, capture, refund, cancel, 3DS, and reconciliation via Adyen gateway',
      stack: ['Playwright', 'Cypress', 'Selenium', 'GraphQL', 'PostgreSQL', 'Python', 'Java', 'C#', 'JavaScript', 'SoapUI', 'ReadyAPI', 'Postman', 'AWS', 'ADO', 'Jenkins', 'Docker', 'BrowserStack', 'SauceLabs', 'LamdaTest', 'SonarQube', 'JMeter', 'AXE', 'WAVE', 'JAWS', 'NVDA', 'PA11Y'],
      qaEngineersLed: '6+ QA Engineers (Onshore + Offshore)',
      impact: [
        'Led QA efforts for Payment Modernization program across M&A, capital markets, trading, and liquidity/payment domains',
        'Migrated frameworks from NightwatchJS/Protractor → Cypress → Playwright improving stability by 40%',
        'Transitioned REST API endpoints to GraphQL reducing API calls and improving performance',
        'Designed cross-platform test automation frameworks (UI, API, mobile, microservices)',
        'Set up comprehensive CI/CD pipelines with AWS, ADO, Jenkins, SonarQube',
        'Validated ETL/data pipelines using Python & PySpark ensuring data integrity',
        'Drove security & accessibility testing (508 compliance) with AXE, WAVE, JAWS, NVDA, PA11Y',
        'Mentored junior engineers on OOP principles and automation best practices'
      ],
      github: null
    },
    {
      title: 'Enterprise Digital Accelerators (EDX) – Raytheon Technologies',
      role: 'Tech Lead QE',
      context: 'Digital accelerators across aviation, defense, and space programs delivering intelligent QA solutions',
      stack: ['Playwright', 'CypressIO', 'Protractor', 'NightwatchJS', 'Selenium', 'Java', 'Python', 'C#', 'JavaScript', 'AWS', 'ADO', 'Jenkins', 'SauceLabs', 'BrowserStack', 'LamdaTest', 'Docker', 'PySpark', 'AXE', 'Pa11y', 'JAWS', 'NVDA', 'GitHub', 'Bitbucket', 'GitLab', 'SVN'],
      qaEngineersLed: '12+ QA Engineers',
      impact: [
        'Built automation frameworks from scratch for mission-critical projects: Sensitech STM, Reliability Prism, FPO, Rotor Design System, XetaCloud, Digital Twin, SAP Migration',
        'Drove migration of automation frameworks (NightwatchJS → Protractor → CypressIO → Playwright) improving efficiency and reliability',
        'Designed boilerplate architectures for UI, API, and Middleware (event-driven microservices) testing frameworks',
        'Performed ETL and database validation with Python & PySpark ensuring data integrity',
        'Conducted accessibility 508 compliance testing using AXE, Pa11y, JAWS, NVDA',
        'Delivered QA Metrics Dashboards and standardized processes across EDX',
        'Mentored engineers in OOP, automation frameworks, and containerization (Docker)',
        'Established manual, automation, accessibility, and performance testing best practices'
      ],
      github: null
    },
    {
      title: 'Merger Management Portal – Bank of America Merrill Lynch',
      role: 'Lead Software Engineer in Test',
      context: 'Internal portal merger management microservice for equity, lending, trading, risk management, and payments',
      stack: ['Cucumber', 'Java', 'Selenium', 'XCUITest', 'Android Studio', 'TestNG', 'Maven', 'AXE', 'SoapUI', 'GraphQL', 'Allure Reports', 'Cypress', 'Python', 'PySpark', 'CircleCI', 'Docker', 'AWS S3', 'ANDI', 'JAWS', 'NVDA', 'WAVE', 'PA11Y'],
      qaEngineersLed: '5+ QA Engineers (Onshore + Offshore)',
      impact: [
        'Built automation from scratch for Web, iOS, and Android microservices',
        'Automated internal web apps with Cypress (POM, data-driven) integrated into CircleCI, Docker, and AWS S3',
        'Conducted ETL and database validation with Python & PySpark ensuring data accuracy',
        'Delivered manual and automated accessibility testing on Web/PDF using ANDI, JAWS, NVDA, AXE, WAVE, and PA11Y',
        'Enhanced agile 3 Amigos process and documentation streamlining collaboration',
        'Led test automation and CI/CD integration using GitHub, Bitbucket, GitLab, ADO, AWS, Jenkins, SonarQube, and SauceLabs'
      ],
      github: null
    },
    {
      title: '30+ Magazine Brand Websites – Hearst Magazines',
      role: 'Sr. DevOps/Automation Engineer',
      context: 'Digital strategy for 30+ magazine brand websites across fashion, beauty, lifestyle, automotive, food, and family domains',
      stack: ['NightwatchJS', 'Protractor', 'RestAssured', 'SuperTest', 'GraphQL', 'AWS', 'ADO', 'Jenkins', 'SonarQube', 'Docker', 'Postman', 'Swagger', 'ReadyAPI', 'JAWS', 'NVDA', 'ANDI', 'AXE', 'WAVE', 'PA11Y'],
      qaEngineersLed: '4+ QA Engineers',
      impact: [
        'Built automation frameworks from scratch using NightwatchJS & Protractor integrated with CI/CD pipelines',
        'Automated RESTful & GraphQL API endpoints leveraging RestAssured & SuperTest',
        'Integrated automation with AWS, ADO, Jenkins, and SonarQube',
        'Delivered manual and automated accessibility testing for Web/PDF with JAWS, NVDA, ANDI, AXE, WAVE, and PA11Y',
        'Implemented Docker for reliable test environments, dependency management, and CI/CD efficiency',
        'Conducted API testing with Postman, Swagger, and ReadyAPI before automating workflows'
      ],
      github: null
    },
    {
      title: 'Cloud9 Trading Platform – Cloud9Technologies',
      role: 'Lead Software Engineer in Test',
      context: 'Cloud9 trading platform (desktop & web) microservice applications for financial trading',
      stack: ['C#.NET', 'NUnit', 'NightwatchJS', 'Protractor', 'SuperTest', 'AWS', 'ADO', 'Jenkins', 'SonarQube', 'Docker', 'Postman', 'Swagger', 'ReadyAPI', 'ANDI', 'JAWS', 'NVDA', 'AXE', 'WAVE', 'PA11Y'],
      qaEngineersLed: '3+ QA Engineers',
      impact: [
        'Automated desktop trading app from scratch using C#.NET & NUnit integrated with CI/CD pipelines',
        'Automated web applications (user management & support) using NightwatchJS, Protractor, SuperTest',
        'Delivered manual & automated accessibility testing for Web/PDF using ANDI, JAWS, NVDA, AXE, WAVE, and PA11Y',
        'Utilized Docker for consistent test environments, dependency management, and CI/CD optimization',
        'Conducted API testing with Postman, Swagger, ReadyAPI, automated with C#.NET (NUnit) & SuperTest',
        'Maintained daily automation workflows and source control using GitHub, Bitbucket, GitLab, ADO, SVN, and Unix/Linux'
      ],
      github: null
    },
    {
      title: 'Customer Information View (CIV) & Contact Center – Wells Fargo',
      role: 'Lead Automation Engineer ASE6',
      context: 'Customer Information View and Contact Center microservice applications for banking operations',
      stack: ['Selenium', 'Cucumber', 'Java', 'TestNG', 'RestAssured', 'Empirix', 'Cyara', 'AWS', 'ADO', 'Jenkins', 'SonarQube', 'AccelQ', 'SauceLabs', 'Postman', 'Swagger', 'ReadyAPI', 'SoapUI', 'SuperTest', 'ANDI', 'JAWS', 'NVDA', 'AXE', 'WAVE', 'PA11Y'],
      qaEngineersLed: '19+ QA Engineers (Onshore & Offshore)',
      impact: [
        'Enhanced Selenium, Cucumber, Java, TestNG framework by applying KISS/DRY coding standards and QA best practices',
        'Automated contact center master call flow with Empirix & Cyara across multiple IDEs (VS Code, PyCharm, Eclipse, IntelliJ)',
        'Developed a new API automation framework using RestAssured (from scratch) and integrated with AWS, ADO, Jenkins, SonarQube, AccelQ, and SauceLabs',
        'Conducted manual and automated RESTful API testing with Postman, Swagger, ReadyAPI, SoapUI, and SuperTest',
        'Performed and automated accessibility testing on Web/PDF using ANDI, JAWS, NVDA, AXE, WAVE, and PA11Y',
        'Maintained source control and automation workflows with ADO, Jenkins, Git, and cloud-based integrations'
      ],
      github: null
    },
    {
      title: 'FamLink & CATS Applications – DSHS Children Administration',
      role: 'SDET - ITS3',
      context: 'State\'s SACWIS case management system used by public and private caseworkers to maintain official child and family service records',
      stack: ['Java', 'C#.NET', 'Selenium', 'Cucumber', 'CodedUI', 'XCUITest', 'Android Studio', 'JMeter', 'SQL', 'ADO', 'Jenkins', 'SonarQube', 'Postman', 'Swagger', 'ReadyAPI', 'C# NUnit', 'JAWS', 'NVDA', 'ANDI', 'AXE', 'WAVE', 'PA11Y'],
      qaEngineersLed: '4+ QA Engineers',
      impact: [
        'Automated end-to-end case management workflows for Web and Desktop apps',
        'Integrated automation with CI/CD pipelines and cloud environments via ADO, Jenkins, and SonarQube',
        'Conducted API testing with Postman, Swagger, and ReadyAPI; automated with C# NUnit for maintainable coverage',
        'Performed manual and automated accessibility testing for Web/PDF using JAWS, NVDA, ANDI, AXE, WAVE, and PA11Y',
        'Performed version control and automation tasks using GitHub, Bitbucket, GitLab, ADO, SVN, and Unix/Linux',
        'Created manual, automation, accessibility, and performance testing strategies aligned with industry standards'
      ],
      github: null
    },
    {
      title: 'Sales, Service & Support Web Domain – AT&T',
      role: 'Sr. Test Engineer',
      context: 'Sales, Service & Support web domain driving improvements in test processes and quality assurance practices',
      stack: ['Java', 'Cucumber', 'Selenium', 'TestNG', 'Maven', 'RestAssured', 'Keynote', 'JMeter', 'Dynatrace', 'Git', 'GitHub', 'Postman', 'Swagger', 'ReadyAPI', 'ANDI', 'JAWS', 'NVDA', 'AXE', 'WAVE', 'PA11Y'],
      qaEngineersLed: '9+ QA Engineers (Onshore + Offshore)',
      impact: [
        'Built a performance testing framework using Keynote & JMeter, monitored with Dynatrace',
        'Designed, developed, and automated test cases with Java, Cucumber, Selenium (API), TestNG, Maven across multiple IDEs',
        'Performed manual and automated accessibility testing on Web/PDF with ANDI, JAWS, NVDA, AXE, WAVE, and PA11Y',
        'Automated RESTful API testing with Java RestAssured after manual validation via Postman, Swagger, and ReadyAPI',
        'Delivered detailed test design, estimations, and peer code reviews to improve test coverage and reliability',
        'Maintained source control and daily automation tasks using Git, GitHub, and Unix/Linux'
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
              
              {/* QA Engineers Led */}
              {project.qaEngineersLed && (
                <div className="mb-4 p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-xs uppercase tracking-wider">QA Engineers Led</span>
                    <span className="text-sky-400 font-semibold text-sm">{project.qaEngineersLed}</span>
                  </div>
                </div>
              )}
              
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

