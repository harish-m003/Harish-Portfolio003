import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/harish-m003",icon:faGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/harishm003", icon:faLinkedin },
    { name: "Twitter", url: "https://www.instagram.com/", icon:faInstagram },
    { name: "Email", url: "https://harishm2021elect105@gmail.com", icon:faEnvelope },
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerContent}>
          <div style={styles.socialLinks}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                style={{
                  ...styles.socialLink,
                  transform:
                    hoveredSocial === index ? "scale(1.2)" : "scale(1)",
                  textShadow:
                    hoveredSocial === index
                      ? "0 0 20px rgba(139, 92, 246, 0.8)"
                      : "none",
                }}
                aria-label={link.name}
                onMouseEnter={() => setHoveredSocial(index)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <FontAwesomeIcon icon={link.icon}/>
              </a>
            ))}
          </div>
          <p style={styles.copyright}>
            © 2025 Harish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Footer Styles

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
  },

  footer: {
    background: "linear-gradient(180deg, #0a0015 0%, #000000 100%)",
    color: "white",
    padding: "3rem 0",
    textAlign: "center",
    borderTop: "1px solid rgba(139, 92, 246, 0.2)",
  },
  footerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
  },
  socialLinks: {
    display: "flex",
    gap: "2rem",
  },
  socialLink: {
    color: "white",
    fontSize: "2rem",
    textDecoration: "none",
    transition: "transform 0.3s ease",
  },
  copyright: {
    color: "#aaa",
    fontSize: "0.9rem",
  },
};


// , icon: "💻"