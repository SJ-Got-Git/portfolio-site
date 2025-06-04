import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
// import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Education />
      <Experience />
      <Skills />
      {/* <Contact /> */}
    </div>
  );
}