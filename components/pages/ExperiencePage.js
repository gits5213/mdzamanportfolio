import Section from '@/components/ui/Section'
import PageHeader from '@/components/ui/PageHeader'
import Card from '@/components/ui/Card'
import TechBadge from '@/components/ui/TechBadge'
import resumePageData from '@/data/resumePage.json'

export default function ExperiencePage() {
  const { jobs } = resumePageData

  const experience = [
    {
      role: 'Tech Lead QA Engineer (SDET)',
      company: 'Global iTech Solutions',
      location: 'Remote',
      startDate: 'Apr 2024',
      endDate: 'Present',
      bullets: [
        'Lead end-to-end quality engineering for enterprise clients, collaborating with business and engineering teams to deliver precise, high-quality products',
        'Drive QA strategy by establishing automation standards, 508 compliance, Agile 3-Amigos processes, and real-time QA dashboards/metrics',
        'Hands-on expertise in UI, API, Middleware, Accessibility, and Mobile Automation using CypressIO, Playwright, Selenium, Appium, TestCafe, ReadyAPI, GraphQL, and AI-powered testing (Claude Code, ChatGPT, CodeGPT, Copilot, Gemini)',
        'Designed and maintained automation frameworks with CI/CD pipelines across Azure DevOps, GitHub Actions, Jenkins, GitLab, and AWS (S3, DynamoDB, CloudWatch, Amazon Connect, Genesys)',
        'Delivered performance, security, and penetration testing, optimizing system performance and migrating critical endpoints to GraphQL',
        'Conducted proof of concepts across low-code test platforms (Katalon, AccelQ, Tosca, Subject7), scaling automation efficiency',
        'Mentored teams in automation best practices, cross-functional collaboration, and emerging AI-driven testing methodologies'
      ],
      domains: ['e-Commerce', 'Enterprise Solutions', 'Cloud Platforms']
    },
    {
      role: 'Tech Lead QA Engineer (SDET)',
      company: 'American Airlines (via Insight)',
      location: 'Remote',
      startDate: 'Nov 2022',
      endDate: 'Apr 2024',
      bullets: [
        'Supported internal portal for merger management microservices across M&A, capital markets, trading, and liquidity/payment domains',
        'Led QA efforts for Payment Modernization program, testing payment authorization, capture, refund, cancel, 3DS, and reconciliation via Adyen gateway with PostgreSQL backend',
        'Defined and implemented manual, automation, accessibility, and performance testing strategies, improving test maturity across teams',
        'Migrated frameworks from NightwatchJS/Protractor → Cypress → Playwright; transitioned REST API endpoints to GraphQL',
        'Designed and built cross-platform test automation frameworks (UI, API, mobile, microservices) using Selenium, Playwright, Cypress, Cucumber, Python, Java, C#, JS, SoapUI, ReadyAPI, Postman',
        'Set up CI/CD pipelines with AWS, ADO, Jenkins, SonarQube; leveraged Docker, BrowserStack, SauceLabs, LamdaTest for scalable test execution',
        'Mentored and coached junior engineers on OOP principles, automation best practices, and tools (Selenium, Cypress, AccelQ, WebDriverIO, Python, C#)',
        'Drove security & accessibility testing (SonarQube, AXE, WAVE, JAWS, NVDA, PA11Y) and performance testing with JMeter',
        'Validated ETL/data pipelines using Python & PySpark ensuring data integrity in transformations/migrations'
      ],
      domains: ['Aviation', 'Payment Systems', 'Microservices', 'GraphQL']
    },
    {
      role: 'Tech Lead QE',
      company: 'Raytheon Technologies (RTX)',
      location: 'Remote',
      startDate: 'Oct 2018',
      endDate: 'Nov 2022',
      bullets: [
        'Supported digital accelerators across aviation, defense, and space programs, delivering intelligent QA solutions for enterprise applications',
        'Led QA initiatives within Enterprise Digital Accelerators (EDX), establishing manual, automation, accessibility, and performance testing best practices',
        'Drove migration of automation frameworks (NightwatchJS → Protractor → CypressIO → Playwright), improving efficiency and reliability',
        'Designed and implemented boilerplate architectures for UI, API, and Middleware (event-driven microservices) testing frameworks using Java, Python, C#, JavaScript, and cloud services (AWS, ADO, Jenkins, SauceLabs, BrowserStack, LamdaTest)',
        'Built automation frameworks from scratch for multiple mission-critical projects (Sensitech STM, Reliability Prism, FPO, Rotor Design System, XetaCloud, Digital Twin, SAP Migration)',
        'Performed ETL and database validation with Python & PySpark to ensure data integrity; conducted accessibility 508 compliance testing using AXE, Pa11y, JAWS, NVDA',
        'Delivered QA Metrics Dashboards and standardized processes across EDX to streamline reporting and governance',
        'Mentored engineers in OOP, automation frameworks, and containerization (Docker), driving knowledge sharing and consistency',
        'Hands-on contributor in test automation, CI/CD integration, version control (GitHub, Bitbucket, GitLab, ADO, SVN), and Unix/Linux scripting'
      ],
      domains: ['Aviation', 'Defense', 'Space', 'Enterprise Applications']
    },
    {
      role: 'Lead Software Engineer in Test',
      company: 'Bank of America Merrill Lynch (via Mitchell Martin)',
      location: 'New York, NY',
      startDate: 'May 2018',
      endDate: 'Oct 2018',
      bullets: [
        'Supported internal portal merger management microservice application for equity, lending, trading, risk management, and payments services',
        'Partnered with business, engineering, and operations teams to improve end-to-end testing processes, tools, and methodologies',
        'Designed manual, automation, accessibility, and performance testing strategies leveraging industry best practices',
        'Led test automation and CI/CD integration using GitHub, Bitbucket, GitLab, ADO, AWS, Jenkins, SonarQube, and SauceLabs',
        'Built automation from scratch for Web, iOS, and Android microservices using Cucumber, Java, Selenium, XCUITest, Android Studio, TestNG, Maven, AXE, SoapUI, GraphQL, and Allure Reports',
        'Conducted ETL and database validation with Python & PySpark ensuring data accuracy and integrity',
        'Delivered manual and automated accessibility testing on Web/PDF using ANDI, JAWS, NVDA, AXE, WAVE, and PA11Y',
        'Automated internal web apps with Cypress (POM, data-driven) integrated into CircleCI, Docker, and AWS (S3)',
        'Enhanced agile 3 Amigos process and documentation, streamlining collaboration'
      ],
      domains: ['Banking', 'Financial Services', 'Trading', 'Microservices']
    },
    {
      role: 'Sr. DevOps/Automation Engineer',
      company: 'Hearst Magazines',
      location: 'New York, NY',
      startDate: 'Oct 2017',
      endDate: 'Apr 2018',
      bullets: [
        'Supported digital strategy for 30+ magazine brand websites across fashion, beauty, lifestyle, automotive, food, and family domains',
        'Partnered with business, engineering, and operations teams to improve end-to-end testing processes, tools, and methodologies',
        'Designed manual, automation, accessibility, and performance testing strategies using industry best practices',
        'Built automation frameworks from scratch using NightwatchJS & Protractor, integrated with CI/CD pipelines',
        'Automated RESTful & GraphQL API endpoints leveraging RestAssured & SuperTest; integrated with AWS, ADO, Jenkins, and SonarQube',
        'Delivered manual and automated accessibility testing for Web/PDF with JAWS, NVDA, ANDI, AXE, WAVE, and PA11Y',
        'Implemented Docker for reliable test environments, dependency management, and CI/CD efficiency',
        'Conducted API testing with Postman, Swagger, and ReadyAPI before automating workflows'
      ],
      domains: ['Media', 'Publishing', 'e-Commerce', 'Content Management']
    },
    {
      role: 'Lead Software Engineer in Test',
      company: 'Cloud9Technologies',
      location: 'New York, NY',
      startDate: 'Jul 2016',
      endDate: 'Mar 2017',
      bullets: [
        'Contributed to Cloud9 trading platform (desktop & web) microservice applications',
        'Collaborated with business, engineering, and operations teams to refine end-to-end testing processes, tools, and methodologies',
        'Designed manual, automation, accessibility, and performance testing strategies using industry best practices',
        'Maintained daily automation workflows and source control using GitHub, Bitbucket, GitLab, ADO, SVN, and Unix/Linux',
        'Automated desktop trading app from scratch using C#.NET & NUnit; integrated with CI/CD pipelines',
        'Automated web applications (user management & support) using NightwatchJS, Protractor, SuperTest, with AWS, ADO, Jenkins, SonarQube CI/CD integration',
        'Delivered manual & automated accessibility testing for Web/PDF using ANDI, JAWS, NVDA, AXE, WAVE, and PA11Y',
        'Utilized Docker for consistent test environments, dependency management, and CI/CD optimization',
        'Conducted API testing with Postman, Swagger, ReadyAPI, automated with C#.NET (NUnit) & SuperTest'
      ],
      domains: ['Trading', 'Financial Technology', 'Desktop Applications', 'Microservices']
    },
    {
      role: 'Lead Automation Engineer ASE6',
      company: 'Wells Fargo (via TEKsystems)',
      location: 'Remote',
      startDate: 'Nov 2015',
      endDate: 'Jul 2016',
      bullets: [
        'Supported Customer Information View (CIV) and Contact Center microservice applications',
        'Partnered with business, engineering, and operations teams to improve end-to-end testing processes, tools, and methodologies',
        'Created manual, automation, accessibility, and performance testing strategies leveraging industry best practices',
        'Maintained source control and automation workflows with ADO, Jenkins, Git, and cloud-based integrations',
        'Enhanced Selenium, Cucumber, Java, TestNG framework by applying KISS/DRY coding standards and QA best practices',
        'Automated contact center master call flow with Empirix & Cyara across multiple IDEs (VS Code, PyCharm, Eclipse, IntelliJ)',
        'Developed a new API automation framework using RestAssured (from scratch) and integrated with AWS, ADO, Jenkins, SonarQube, AccelQ, and SauceLabs',
        'Conducted manual and automated RESTful API testing with Postman, Swagger, ReadyAPI, SoapUI, and SuperTest',
        'Performed and automated accessibility testing on Web/PDF using ANDI, JAWS, NVDA, AXE, WAVE, and PA11Y'
      ],
      domains: ['Banking', 'Contact Center', 'Customer Service', 'Microservices']
    },
    {
      role: 'SDET - ITS3',
      company: 'DSHS Children Administration',
      location: 'Remote',
      startDate: 'Jan 2015',
      endDate: 'Nov 2015',
      bullets: [
        'Supported FamLink and other CATS applications, the state\'s SACWIS case management system used by public and private caseworkers to maintain official child and family service records',
        'Collaborated with business, engineering, and operations teams to improve testing processes, tools, and methodologies',
        'Created manual, automation, accessibility, and performance testing strategies aligned with industry standards',
        'Performed version control and automation tasks using GitHub, Bitbucket, GitLab, ADO, SVN, and Unix/Linux',
        'Automated end-to-end case management workflows for Web and Desktop apps using Java, C#.NET, Selenium, Cucumber, CodedUI, XCUITest, Android Studio, JMeter, and SQL',
        'Integrated automation with CI/CD pipelines and cloud environments via ADO, Jenkins, and SonarQube',
        'Conducted API testing with Postman, Swagger, and ReadyAPI; automated with C# NUnit for maintainable coverage',
        'Performed manual and automated accessibility testing for Web/PDF using JAWS, NVDA, ANDI, AXE, WAVE, and PA11Y'
      ],
      domains: ['Government', 'Healthcare', 'Case Management', 'Social Services']
    },
    {
      role: 'Sr. Test Engineer',
      company: 'AT&T (via Pyramid Consulting & Tech Mahindra)',
      location: 'Remote',
      startDate: '2014',
      endDate: '2015',
      bullets: [
        'Supported Sales, Service & Support web domain, driving improvements in test processes and quality assurance practices',
        'Collaborated with business, engineering, and operations teams to optimize testing methodology, tools, and processes',
        'Designed manual, automation, accessibility, and performance testing strategies aligned with industry best practices',
        'Maintained source control and daily automation tasks using Git, GitHub, and Unix/Linux',
        'Built a performance testing framework using Keynote & JMeter, monitored with Dynatrace',
        'Designed, developed, and automated test cases with Java, Cucumber, Selenium (API), TestNG, Maven across multiple IDEs',
        'Performed manual and automated accessibility testing on Web/PDF with ANDI, JAWS, NVDA, AXE, WAVE, and PA11Y',
        'Automated RESTful API testing with Java RestAssured after manual validation via Postman, Swagger, and ReadyAPI',
        'Delivered detailed test design, estimations, and peer code reviews to improve test coverage and reliability'
      ],
      domains: ['Telecom', 'Sales & Service', 'Web Applications', 'Performance Testing']
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

  const domains = ['Aviation', 'Banking', 'e-Commerce', 'Telecom', 'Government', 'Healthcare', 'Retail', 'Defense', 'Space', 'Media', 'Trading', 'Financial Services']

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

