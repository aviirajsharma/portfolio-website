import React, { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill out all required fields'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please enter a valid email address'
      });
      return;
    }
    
    // In a real application, you would send the form data to your backend
    // For this example, we'll simulate a successful submission
    
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you! Your message has been sent successfully.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="underline"></div>
        </div>
        
        <div className="contact-container">
          <div className="contact-info glass">
            <h3>Contact Information</h3>
            <p>Feel free to reach out if you have any questions, project ideas, or just want to connect!</p>
            
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>Gwalior, Madhya Pradesh</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>avirajkanhaua0413@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">📱</span>
              <div>
                <h4>Phone</h4>
                <p>+91-8384878465</p>
              </div>
            </div>
            <div className="social-links">
      {/* GitHub */}
      <a href="https://github.com/aviirajsharma" 
         className="social-link" 
         target="_blank" 
         rel="noopener noreferrer">
        <FaGithub />
      </a>

      {/* LeetCode */}
      <a href="https://leetcode.com/u/aviraj_sharma/" 
         className="social-link" 
         target="_blank" 
         rel="noopener noreferrer">
        <SiLeetcode />
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/avirajsharma/" 
         className="social-link" 
         target="_blank" 
         rel="noopener noreferrer">
        <FaLinkedin />
      </a>

      {/* Instagram */}
      <a href="" 
         className="social-link" 
         target="_blank" 
         rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>

            
          </div>
          
          <div className="contact-form glass">
            <h3>Send Me a Message</h3>
            
            {formStatus.submitted && (
              <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;