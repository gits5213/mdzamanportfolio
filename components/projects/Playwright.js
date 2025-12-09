import ProjectCard from './ProjectCard'

export default function Playwright() {
  return (
    <ProjectCard
      title="Playwright UI Automation"
      imageUrl="https://raw.githubusercontent.com/github/explore/60cd2530141f67f07a947fa2d310c482e287e387/topics/playwright/playwright.png"
    >
      <p><strong>Domain:</strong> Facebook (Social Website)</p>
      <p><strong>Test Case:</strong> Create new account error message | User able to validate error message &quot;What&apos;s your name?&quot;</p>
      <p><strong>Description:</strong> Designing, Developing & Maintaining WebDriverIO UI Automation Framework from Scratch to Architecture level.</p>
      <p><strong>TechStack:</strong> This framework consists of following list: WebDriverIO API, JavaScript, NodeJS, Mocha, Chai, Page Object Model, Data Driven Concept.</p>
      <p><strong>CI/CD Integration:</strong> Integrated with CI (Travis) and Sending Email report.</p>
    </ProjectCard>
  )
}

