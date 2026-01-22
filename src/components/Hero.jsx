import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hello, I'm Von Giducos</h1>
          <p className="hero-subtitle">Information Technology Student</p>
          <p className="hero-statement">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am an aspiring web developer focused on building clean, 
            functional web applications with React.js while continuously expanding my skills in modern, 
            industry-relevant technologies.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="cta-primary">View My Work</a>
            <a href="#contact" className="cta-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="profile-image-container">
          <div className="profile-image">
            <img 
              src="/profile.jpg" 
              alt="Von Giducos" 
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
