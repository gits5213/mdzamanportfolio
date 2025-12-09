import ProjectCard from './ProjectCard'

export default function Webdriverio() {
  return (
    <ProjectCard
      title="WebDriverIO UI Automation"
      imageUrl="https://blog.knoldus.com/wp-content/uploads/2020/01/cypress-bw.png"
    >
      <p><strong>Domain:</strong> Facebook (Social Website)</p>
      <p><strong>Test Case:</strong> Create new account error message | User able to validate error message &quot;What&apos;s your name?&quot;</p>
      <p><strong>Description:</strong> Designing, Developing & Maintaining WebDriverIO UI Automation Framework from Scratch to Architecture level.</p>
      <p><strong>TechStack:</strong> This framework consists of following list: WebDriverIO API, JavaScript, NodeJS, Mocha, Chai, Page Object Model, Data Driven Concept.</p>
      <p><strong>CI/CD Integration:</strong> Integrated with CI (Travis) and Sending Email report.</p>
    </ProjectCard>
  )
}

