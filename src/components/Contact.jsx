import './Contact.css'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic here
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'vongiducos@email.com',
      link: 'mailto:vongiducos@email.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+63 912 345 6789',
      link: 'tel:+639123456789'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Philippines',
      link: null
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/vongiducos',
      link: 'https://linkedin.com/in/vongiducos'
    }
  ]

  return (
    <section className="contact">
      <div className="contact-content">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          I'm currently open to opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="contact-container">
          <div className="contact-info-section">
            <h3>Contact Information</h3>
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card">
                  <span className="contact-icon">{info.icon}</span>
                  <div className="contact-details">
                    <span className="contact-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="contact-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-section">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
