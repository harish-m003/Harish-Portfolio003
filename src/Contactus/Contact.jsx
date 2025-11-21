import React from "react";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent successfully! Thank You");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="contact" id="contact">
      <div  className="container">
        <h2 className="sectionTitle">Get In Touch</h2>
        <div className="contactContent">
          <div  className="contactInfo">
            <p  className="contactIntro">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="contactDetails">
              <div className="contactItem">
                <span className="contactIcon">📧</span>
                <span>harishm2021elect105@gmail.com</span>
              </div>
              <div className="contactItem">
                <span className="contactIcon">📱</span>
                <span>+91 63853 55128</span>
              </div>
              <div  className="contactItem">
                <span  className="contactIcon">📍</span>
                <span>Dharmapuri , TamilNadu</span>
              </div>
            </div>
          </div>
          <div  className="contactForm">
            <div className="formGroup">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="formInput"
              />
            </div>
            <div className="formGroup">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="formInput"
                
              />
            </div>
            <div className="formGroup">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="formInput"
                id="text"
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="submitButton"
              style={{
                transform: isButtonHovered ? "scale(1.05)" : "scale(1)",
                boxShadow: isButtonHovered
                  ? "0 12px 35px rgba(139, 92, 246, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
                  : "0 8px 25px rgba(139, 92, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              }}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              Send Message
            </button>
            {status && <p className="formStatus" >{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

