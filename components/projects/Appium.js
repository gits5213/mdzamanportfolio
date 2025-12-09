import ProjectCard from './ProjectCard'

export default function Appium() {
  return (
    <ProjectCard
      title="Appium Mobile Automation"
      imageUrl="https://miro.medium.com/max/1133/1*9CnarHbnmV7-kWtG4PA41Q.png"
    >
      <p><strong>Domain:</strong> Facebook (Social Website)</p>
      <p><strong>Test Case:</strong> Create new account error message | User able to validate error message &quot;What&apos;s your name?&quot;</p>
      <p><strong>Description:</strong> Designing, Developing & Maintaining Appium (XCUITest) Mobile Facebook App UI Automation Framework from Scratch to Architecture level.</p>
      <p><strong>TechStack:</strong> This framework consists of following list: Appium (XCUITest) API, Java, TestNG, Maven, Page Object Model, Data Driven Concept, Page Factory.</p>
      <p><strong>CI/CD Integration:</strong> Integrated with CI (Travis) and Sending Email report.</p>
    </ProjectCard>
  )
}

