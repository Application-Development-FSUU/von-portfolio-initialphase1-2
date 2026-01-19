import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Student & Faculty Profile Management System",
      category: "Current Knowledge",
      description: "My first key project is a Student & Faculty Profile Management System built with Laravel and MySQL, where I designed the database structure, implemented secure authentication, and developed role-based CRUD features to manage academic user information, demonstrating my current backend development strengths.",
      tech: ["Laravel", "MySQL", "PHP"]
    },
    {
      id: 2,
      title: "Inventory Management System",
      category: "Learning and Growth",
      description: "My second project is an Inventory Management System created to deepen my understanding of real-world business workflows, using Laravel and React.js to handle product tracking, stock level updates, and basic reporting, showing how I have grown by learning a modern frontend library, improving my code organization, and integrating a React.js interface with a Laravel backend.",
      tech: ["Laravel", "React.js", "API Integration"]
    },
    {
      id: 3,
      title: "Modern Portfolio Application",
      category: "Aspirational Goal",
      description: "My aspirational project is a modern React.js-based portfolio or full-stack web application that I will design, build, and deploy, featuring a responsive UI, integrated APIs, and live hosting on a custom URL, representing my goal of working at a professional level and shipping polished, real-world solutions that I can confidently share with recruiters and employers.",
      tech: ["React.js", "Vercel", "REST APIs"]
    }
  ]

  return (
    <section className="projects">
      <div className="projects-content">
        <h2 className="section-title">The "Big Three" Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
