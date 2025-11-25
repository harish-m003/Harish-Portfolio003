import React from "react";
import "./Footer.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/harish-m003", icon: faGithub },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/harishm003",
      icon: faLinkedin,
    },
    { name: "Twitter", url: "https://www.instagram.com/", icon: faInstagram },
    {
      name: "Email",
      url: "https://harishm2021elect105@gmail.com",
      icon: faEnvelope,
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footerContent">
          <div className="socialLinks">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                className="socialLink"
                to={link.url}
                style={{
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
                <FontAwesomeIcon icon={link.icon} />
              </Link>
            ))}
          </div>
          <p className="copyright">© 2025 Harish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
