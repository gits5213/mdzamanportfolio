import Section from '@/components/ui/Section'
import PageHeader from '@/components/ui/PageHeader'
import Card from '@/components/ui/Card'
import TechBadge from '@/components/ui/TechBadge'
import resumePageData from '@/data/resumePage.json'

export default function ExperiencePage() {
  const { jobs } = resumePageData

  const experience = [
    {
      role: 'Tech Lead/Architect, QA Engineer (SDET)',
      company: 'Global iTech Solutions',
      location: 'Remote',
      startDate: 'Sep 2024',
      endDate: 'Present',
      summary: 'Lead QA and automation strategy for enterprise clients (e.g., HD Supply Internal Inventory Management Microservice and Centene Contract Center), collaborating with business and engineering teams to enhance end-to-end testing processes, implement quality standards, and drive innovation in test automation.',
      bullets: [
        'Lead end-to-end quality engineering for clients (e.g., HD Supply), collaborating with business and engineering teams to deliver precise, high-quality products',
        'Lead end-to-end quality engineering for enterprise clients, partnering with business and engineering teams to deliver reliable, scalable, and high-quality software solutions',
        'Drive QA strategy and test modernization through automation standards, 508 accessibility compliance, Agile 3-Amigos practices, and real-time QA metrics and dashboards',
        'Design, build, and maintain automation frameworks across UI, API, middleware, accessibility, and mobile testing using Playwright, Cypress, Appium, ReadyAPI, GraphQL, and AI-powered testing tools',
        'Leverage existing Tricentis Tosca suites to support migration to Playwright with TypeScript, improving automation speed, stability, maintainability, and scalability',
        'Lead automation transformation by migrating legacy test coverage to Playwright with TypeScript, enabling faster execution, stronger regression coverage, and improved in-sprint automation',
        'Lead automation transformation by migrating legacy test coverage from Katalon Studio to Playwright with TypeScript, continuing in Katalon Studio during the transition and now driving automation development in Playwright with TypeScript',
        'Manage and perform SAP automation and end-to-end testing across SAP GUI, SAP Fiori, SAP ERP and Apriso Web App, SAP EECC, and S/4HANA, validating critical business processes across FICO, MM, SD, and HCM modules with the Tricentis suite (Tosca, qTest, LiveCompare, NeoLoad, Data Integrity)',
        'Design, develop, and scale enterprise regression automation suites for complex applications, applying Tosca and Playwright expertise to support a sustainable test strategy and smooth framework migration',
        'Implement API automation frameworks from scratch using Postman and Newman, integrating them with GitHub Actions CI/CD pipelines for nightly execution',
        'Develop mobile automation frameworks from scratch using Appium for iOS and Android with WebdriverIO, integrating with LambdaTest for emulator and real-device coverage and GitHub Actions for CI execution',
        'Create and execute performance testing for UI, API, and database load using BlazeMeter and JMeter, with continuous tuning based on sprint and project needs',
        'Design and maintain CI/CD-integrated automation across GitHub Actions and AWS services including S3, DynamoDB, CloudWatch, Amazon Connect, and Genesys',
        'Support performance, security, and GraphQL modernization initiatives, including optimization of system behavior under load and migration of critical endpoints',
        'Conduct proofs of concept across Robot Framework, Katalon, AccelQ, and Tosca to evaluate tools, improve automation efficiency, and align testing solutions with business goals',
        'Hands-on expertise in UI, API, middleware, accessibility, and mobile automation using CypressIO, Playwright, Selenium, Appium, TestCafe, ReadyAPI, GraphQL, and AI-powered testing (Claude Code, ChatGPT, CodeGPT, Copilot, Gemini)',
        'Mentor QA engineers and cross-functional teams in automation best practices, accessibility, performance testing, CI/CD integration, and AI-driven testing'
      ],
      domains: ['e-Commerce', 'Healthcare', 'SAP', 'Enterprise Solutions']
    },
    {
      role: 'Tech Lead/Architect Engineer (SDET)',
      company: 'American Airlines (via Insight)',
      location: 'Remote',
      startDate: 'Sep 2023',
      endDate: 'Sep 2024',
      summary: 'Supported internal portal for merger management microservices across M&A, capital markets, trading, and liquidity/payment domains.',
      bullets: [
        'Led QA efforts for Payment Modernization program, testing payment authorization, capture, refund, cancel, 3DS, and reconciliation via Adyen gateway with PostgreSQL backend',
        'Defined and implemented manual, automation, accessibility, and performance testing strategies, improving test maturity across teams',
        'Migrated frameworks from NightwatchJS/Protractor → Cypress → Playwright; transitioned REST API endpoints to GraphQL',
        'Designed and built cross-platform test automation frameworks (UI, API, mobile, microservices) using Selenium, Playwright, Cypress, Cucumber, Python, Java, C#, JS, SoapUI, ReadyAPI, Postman',
        'Set up CI/CD pipelines with AWS, ADO, Jenkins, SonarQube; leveraged Docker, BrowserStack, SauceLabs, LamdaTest for scalable test execution',
        'Mentored and coached junior engineers on OOP principles, automation best practices, and tools (Selenium, Cypress, AccelQ, WebDriverIO, Python, C#)',
        'Drove security and accessibility testing (SonarQube, AXE, WAVE, JAWS, NVDA, PA11Y) and performance testing with JMeter',
        'Validated ETL/data pipelines using Python and PySpark, ensuring data integrity in transformations and migrations'
      ],
      achievements: [
        'Delivered robust automation frameworks across Web, API, Mobile, and Middleware with reusable architecture, reducing test cycle time',
        'Standardized test practices and ADO scorecards, enabling better visibility into QA quality metrics',
        'Reduced technical debt and complexity while improving test environment reliability'
      ],
      domains: ['Aviation', 'Payment Systems', 'Microservices', 'GraphQL']
    },
    {
      role: 'Sr. Mgr. Software Dev',
      company: 'Raytheon Technologies (RTX)',
      location: 'Remote',
      startDate: 'Oct 2018',
      endDate: 'Sep 2023',
      summary: 'Supported digital accelerators across aviation, defense, and space programs, delivering intelligent QA solutions for enterprise applications.',
      bullets: [
        'Led QA initiatives within Enterprise Digital Accelerators (EDX), establishing manual, automation, accessibility, and performance testing best practices',
        'Drove migration of automation frameworks from CypressIO to Playwright, improving efficiency and reliability',
        'Drove migration of automation frameworks from Robot Framework to Playwright, improving efficiency and reliability',
        'Designed and implemented boilerplate architectures for UI, API, and Middleware (event-driven microservices) testing frameworks using Java, Python, C#, JavaScript, and cloud services (AWS, ADO, Jenkins, SauceLabs, BrowserStack, LamdaTest)',
        'Built automation frameworks from scratch for multiple mission-critical projects (Sensitech STM, Reliability Prism, FPO, Rotor Design System, XetaCloud, Digital Twin, SAP Migration)',
        'Performed ETL and database validation with Python and PySpark to ensure data integrity; conducted accessibility 508 compliance testing using AXE, Pa11y, JAWS, and NVDA',
        'Delivered QA Metrics Dashboards and standardized processes across EDX to streamline reporting and governance',
        'Mentored engineers in OOP, automation frameworks, and containerization (Docker), driving knowledge sharing and consistency',
        'Hands-on contributor in test automation, CI/CD integration, version control (GitHub, Bitbucket, GitLab, ADO, SVN), and Unix/Linux scripting',
        'Delivered Sensitech STM (hybrid), Reliability Prism (web), FPO (Flight Optimization Profile), Rotor Design System, XetaCloud, Digital Twin, SAP Migration, and QA Metrics Dashboard',
        'Automated those microservice applications from scratch through advanced frameworks using Protractor, CypressIO, Robot Framework, Playwright, AXE, Pa11y, ReadyAPI, Postman, JavaScript, Java, TestNG, Maven, Python, PyTest, JMeter, Locust, and Appium (XCUITest), with SauceLabs, BrowserStack, LambdaTest, AWS, and Azure DevOps',
        'Set up SQA manual and automation standards and best practices across EDX',
        'Set up UI, middleware, and API multi-automation framework boilerplate architecture across EDX'
      ],
      achievements: [
        'Established enterprise-wide QA standards and multi-layered automation frameworks, enabling scalability across EDX',
        'Improved testing efficiency through automation coverage of hybrid and web apps, APIs, and data platforms',
        'Enhanced accessibility compliance and integrated performance and load testing into CI/CD pipelines'
      ],
      domains: ['Aviation', 'Defense', 'Space', 'Enterprise Applications']
    },
    {
      role: 'Lead Software Engineer in Test',
      company: 'Bank of America Merrill Lynch (via Mitchell Martin)',
      location: 'New York, NY',
      startDate: 'May 2018',
      endDate: 'Oct 2018',
      summary: 'Supported internal portal merger management microservice application for equity, lending, trading, risk management, and payments services.',
      bullets: [
        'Partnered with business, engineering, and operations teams to improve end-to-end testing processes, tools, and methodologies',
        'Designed manual, automation, accessibility, and performance testing strategies leveraging industry best practices',
        'Led test automation and CI/CD integration using GitHub, Bitbucket, GitLab, ADO, AWS, Jenkins, SonarQube, and SauceLabs',
        'Hands-on with Unix/Linux commands and cloud-based test environments',
        'Enhanced agile 3 Amigos process and documentation, streamlining collaboration',
        'Built automation from scratch for Web, iOS, and Android microservices using Cucumber, Java, Selenium, XCUITest, Android Studio, TestNG, Maven, AXE, SoapUI, GraphQL, and Allure Reports',
        'Conducted ETL and database validation with Python & PySpark ensuring data accuracy and integrity',
        'Delivered manual and automated accessibility testing on Web/PDF using ANDI, JAWS, NVDA, AXE, WAVE, and PA11Y',
        'Automated internal web apps with Cypress (POM, data-driven) integrated into CircleCI, Docker, and AWS (S3)'
      ],
      domains: ['Banking', 'Financial Services', 'Trading', 'Microservices']
    },
    {
      role: 'Sr. DevOps/Automation Engineer',
      company: 'Hearst Magazines',
      location: 'New York, NY',
      startDate: 'Oct 2017',
      endDate: 'Apr 2018',
      summary: 'Supported digital strategy for 30+ magazine brand websites across fashion, beauty, lifestyle, automotive, food, and family domains.',
      bullets: [
        'Partnered with business, engineering, and operations teams to refine end-to-end testing processes, tools, and methodologies',
        'Designed manual, automation, accessibility, and performance testing strategies using industry best practices',
        'Maintained source control and daily automation tasks with GitHub, Bitbucket, GitLab, ADO, SVN, and Unix/Linux',
        'Optimized existing NightwatchJS and Protractor frameworks and migrated them to CypressIO with Page Object Model, data-driven, and keyword-driven concepts',
        'Automated API (REST & GraphQL) testing using RestAssured and SuperTest, integrated with AWS, ADO, Jenkins, and SonarQube CI/CD pipelines',
        'Conducted ETL and database validation with Python and PySpark to ensure accuracy and reliability in data transformations',
        'Delivered manual and automated accessibility testing on Web/PDF using ANDI, JAWS, NVDA, AXE, WAVE, and PA11Y',
        'Utilized Docker for consistent test environments, dependency management, and CI/CD efficiency',
        'Conducted manual API testing with Postman, Swagger, and ReadyAPI before automating workflows'
      ],
      domains: ['Media', 'Publishing', 'e-Commerce', 'Content Management']
    },
    {
      role: 'Lead Software Engineer in Test',
      company: 'JCDecaux',
      startDate: 'Mar 2017',
      endDate: 'Oct 2017',
      summary: 'Supported Billing Management (BillIT) and Posting Management (PostIT) microservice applications.',
      bullets: [
        'Collaborated with business, engineering, and operations teams to optimize end-to-end testing processes and methodologies',
        'Developed manual, automation, accessibility, and performance testing strategies aligned with industry standards',
        'Managed version control and daily automation tasks using GitHub, Bitbucket, GitLab, ADO, SVN, and Unix/Linux',
        'Built automation frameworks from scratch using NightwatchJS and Protractor, integrated with CI/CD pipelines',
        'Automated RESTful and GraphQL API endpoints leveraging RestAssured and SuperTest, integrated with AWS, ADO, Jenkins, and SonarQube',
        'Delivered manual and automated accessibility testing for Web/PDF with JAWS, NVDA, ANDI, AXE, WAVE, and PA11Y',
        'Implemented Docker for reliable test environments, dependency management, and CI/CD efficiency',
        'Conducted API testing with Postman, Swagger, and ReadyAPI before automating workflows'
      ],
      domains: ['Advertising', 'Billing', 'Microservices']
    },
    {
      role: 'Lead Software Engineer in Test',
      company: 'Cloud9 Technologies',
      location: 'New York, NY',
      startDate: 'Jul 2016',
      endDate: 'Mar 2017',
      summary: 'Contributed to Cloud9 trading platform (desktop and web) microservice applications.',
      bullets: [
        'Worked closely with business groups, engineering organizations, software development teams, and operations teams to continually evaluate and improve end-to-end software development in test processes, tools, and testing methodology',
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
      summary: 'Supported Customer Information View (CIV) and Contact Center microservice applications.',
      bullets: [
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
      summary: 'Supported FamLink and other CATS applications, the state\'s SACWIS case management system used by public and private caseworkers to maintain official child and family service records.',
      bullets: [
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
      startDate: 'Jun 2014',
      endDate: 'Dec 2014',
      summary: 'Supported Sales, Service & Support web domain, driving improvements in test processes and quality assurance practices.',
      bullets: [
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
    },
    {
      role: 'IT Specialist/BSSO',
      company: 'BRAC Bank',
      startDate: 'Feb 2008',
      endDate: 'Jun 2011',
      summary: 'Worked with financial domains and web-based applications, responsible for both manual and automation testing, with a focus on designing, developing, and maintaining automation code.',
      bullets: [
        'Analyzed software requirements, wrote functional test cases, created test data, and performed functional, smoke, accessibility, regression, and UAT testing',
        'Developed SQL queries to perform backend testing of the database',
        'Built test automation suites using Selenium (API), with hands-on SDLC experience',
        'Worked in waterfall software development methodologies for application development and implementation',
        'Applied continuous regression testing with Selenium (API), Eclipse, Java/JavaScript, JUnit, and a data-driven framework, covering integration, smoke, functional, regression, and UI automation, plus manual testing and application deployment',
        'Performed manual accessibility testing on web and PDF files using JAWS and NVDA, along with ANDI, AXE, WAVE, PA11Y, Lighthouse, and other web accessibility evaluation tools',
        'Automated accessibility testing using AXE and PA11Y to streamline testing for web applications and documents',
        'Created pull requests with Git and GitHub, and used Unix/Linux commands for daily automation tasks'
      ],
      domains: ['Banking', 'Financial Services', 'Web Applications']
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

  const domains = ['Aviation', 'Banking', 'e-Commerce', 'Telecom', 'Government', 'Healthcare', 'Retail', 'Defense', 'Space', 'Media', 'Trading', 'Financial Services', 'Advertising', 'SAP']

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
                    <span className="text-slate-950 font-bold text-sm">{index + 1}</span>
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
                      {exp.location && (
                        <p className="text-sm text-slate-400">{exp.location}</p>
                      )}
                    </div>
                    <div className="text-sm text-slate-400 mt-2 md:mt-0">
                      {exp.startDate} - {exp.endDate}
                    </div>
                  </div>

                  {exp.summary && (
                    <p className="text-slate-300 mb-4 leading-relaxed">{exp.summary}</p>
                  )}

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-slate-300 flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.achievements?.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-sky-400 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="text-slate-300 flex items-start gap-2">
                            <span className="text-emerald-400 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

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

