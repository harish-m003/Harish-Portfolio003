import React from "react";
import Navigation from "./Navigation/Navigation";
import Home from "./Homee/Home";
import About from "./AboutMe/About";
import Projects from "./Projectss/Project";
import Skills from "./Skill/Skills";
import Contact from "./Contactus/Contact";
import Footer from "./Footer/Footer";
import './Style.css';


function portfolio() {
  return (
    <div>
      <Navigation />
      <Home/>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
export default portfolio;
