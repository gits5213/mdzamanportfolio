import ProjectCard from './ProjectCard'

export default function Supertest() {
  return (
    <ProjectCard
      title="API Automation (Javascript based)"
      imageUrl="https://miro.medium.com/max/5336/1*R8dpDe1F8LIgCrN1QTfVBw.png"
    >
      <p><strong>Domain:</strong> http://jsonplaceholder.typicode.com/</p>
      <p><strong>Test Case:</strong> Posts endpoint | User able to validate status code 200, userId, id, title & body</p>
      <p><strong>Description:</strong> Designing, Developing & Maintaining SUPERTEST API Automation Framework from Scratch to Architecture level.</p>
      <p><strong>TechStack:</strong> This framework consists of following list: SuperTest API, Javascript, Mocha, Chai, http protocol Model, Data Driven Concept.</p>
      <p><strong>CI/CD Integration:</strong> Integrated with CI (Travis) and Sending Email report.</p>
    </ProjectCard>
  )
}

