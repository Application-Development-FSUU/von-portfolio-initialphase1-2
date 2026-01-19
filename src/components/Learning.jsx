import './Learning.css'

function Learning() {
  const learningItems = [
    "React.js",
    "API Integration",
    "Responsive Design",
    "Vercel Deployment"
  ]

  return (
    <section className="learning">
      <div className="learning-content">
        <h2 className="section-title">Currently Learning</h2>
        <p className="learning-description">
          I am currently learning React.js, API integration, responsive design, and deployment 
          using Vercel to strengthen both my frontend and deployment skills. This "Currently Learning" 
          focus highlights my growth mindset and shows that I am actively keeping up with modern web 
          development practices so I can contribute more effectively to future projects and teams.
        </p>
        <div className="learning-tags">
          {learningItems.map((item, index) => (
            <span key={index} className="learning-tag">{item}</span>
          ))}
        </div>
        <div className="tech-stack-note">
          <h3>Why React.js?</h3>
          <p>
            For this portfolio project, I am choosing the Pro Path by focusing on React.js because 
            it is a modern, industry-relevant library used in many professional applications and works 
            smoothly with Vercel for fast deployment. By building my portfolio with React.js and 
            deploying it on Vercel, I can create a high-performance, responsive, and production-ready 
            site that reflects current best practices in web development and showcases my skills to 
            potential employers.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Learning
