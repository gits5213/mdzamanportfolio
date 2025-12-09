import ProjectCard from './ProjectCard'

export default function Restassured() {
  return (
    <ProjectCard
      title="API Automation (Java based)"
      imageUrl="https://rest-assured.io/img/logo-transparent.png"
    >
      <p><strong>Domain:</strong> http://jsonplaceholder.typicode.com/</p>
      <p><strong>Test Case:</strong> Posts endpoint | User able to validate status code 200, userId, id, title & body</p>
      <p><strong>Description:</strong> Designing, Developing & Maintaining RestAssured API Automation Framework from Scratch to Architecture level.</p>
      <p><strong>TechStack:</strong> This framework consists of following list: RestAssured API, Java, TestNG, Maven, http protocol Model, Data Driven Concept.</p>
      <p><strong>CI/CD Integration:</strong> Integrated with CI (Travis) and Sending Email report.</p>
    </ProjectCard>
  )
}

