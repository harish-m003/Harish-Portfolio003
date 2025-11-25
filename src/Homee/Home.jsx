import React from "react";
import "./Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <section className="hero" id="home">
        <div className="heroContent">
          <h1 className="heroTitle">
            H!, I'm <span className="highlight">Harish</span>
          </h1>
          <h2 className="heroSubtitle">Web Developer Fresher</h2>
          <p className="heroDescription">
            I Design. I Build. I Create for the Web.
          </p>
          <Link
            className="ctaButton"
            to="https://drive.google.com/file/d/1IZQn-ghEEPj57tZe4KknFVQjbwWXF7pf/view?usp=drive_link"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              boxShadow: isHovered
                ? "0 12px 35px rgba(139, 92, 246, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
                : "0 8px 25px rgba(139, 92, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Resume
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
