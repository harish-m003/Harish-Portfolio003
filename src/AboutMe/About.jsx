import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="sectionTitle">About Me</h2>
        <div className="aboutContent">
          <div className="aboutImage">
            <div className="placeholderImage">👤</div>
          </div>
          <div className="aboutText">
            <div className="aboutDetails">
              <h4 className="paragraph">
                Passionate Web Developer Starting My Professional Journey.
              </h4>
            </div>
            <p className="paragraph">
              Motivated Electronics and Communication graduate with an strong
              passion for Web development. Skilled in HTML, CSS, JavaScript,
              React.js, and WordPress, with expertise in responsive design,
              dynamic UI development, and a strong focus on user experience.
              Proficient in version control systems like Git, and committed to
              writing clean, reusable code. Built several hands-on projects that
              demonstrate problemsolving abilities and technical growth. Eager
              to contribute to a dynamic team and further develop my frontend
              skills.
            </p>
            <p className="paragraph">
              My journey into web development began with a fascination for how
              websites are built and function. This curiosity led me to embark
              on various projects, where I enjoy solving challenges while
              continuously learning about new technologies and best practices in
              front-end development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
