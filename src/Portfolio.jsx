import React from "react";
import Navigation from "./Navigation/Navigation";
import Home from "./Homee/Home";
import About from "./AboutMe/About";
import Projects from "./Projectss/Project";
import Skills from "./Skill/Skills";
import Contact from "./Contactus/Contact";
import Footer from "./Footer/Footer";
import "./Style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function portfolio() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <About />
      <Routes>
        <Route path="/" element={<Projects />} />
      </Routes>
      <Skills />
      <Contact />
      <Routes>
        <Route path="/" element={<Footer/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default portfolio;
