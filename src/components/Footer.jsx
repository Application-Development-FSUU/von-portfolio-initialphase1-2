import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🔗',
      url: 'https://github.com/vongiducos'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/vongiducos'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/vongiducos'
    },
    {
      name: 'Facebook',
      icon: '📘',
      url: 'https://facebook.com/vongiducos'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-section">
            <h3 className="footer-brand">Von Giducos</h3>
            <p className="footer-tagline">
              Building modern web applications with passion and dedication.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#learning">Learning</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>📧 vongiducos@email.com</li>
              <li>📱 +63 912 345 6789</li>
              <li>📍 Philippines</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={link.name}
                >
                  <span>{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-credits">
            <p>
              © {currentYear} Von Giducos. All rights reserved. Built with React.js & Vite
            </p>
            <button onClick={scrollToTop} className="back-to-top">
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
