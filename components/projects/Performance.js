import ProjectCard from './ProjectCard'

export default function Performance() {
  return (
    <ProjectCard
      title="Performance Test (JMeter)"
      imageUrl="https://www.guru99.com/images/JMeterApacheSampler.png"
    >
      <p><strong>Domain:</strong> Facebook (Social Website)</p>
      <p><strong>Test Case:</strong> Create new account error message | User able to validate error message &quot;What&apos;s your name?&quot;</p>
      <p><strong>Description:</strong> Designing, Developing & Maintaining JMeter Script Facebook Application for Performance Test from Scratch to Architecture level.</p>
      <p><strong>TechStack:</strong> This framework consists of following list: JMeter Script, Declare Global Variable, Report</p>
      <p><strong>CI/CD Integration:</strong> Integrated with CI (Travis) and Sending Email report.</p>
    </ProjectCard>
  )
}

