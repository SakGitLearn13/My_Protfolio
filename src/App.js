import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/Scrollup";

const App = () => {
  const [theme, setTheme] = useState(1);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("theme", savedTheme);
  }, []);

  const themeToggler = () => {
    const currentTheme = document.documentElement.getAttribute("theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    currentTheme === "light" ? setTheme(0) : setTheme(1);
    document.documentElement.setAttribute("theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <Header />
      <main className="main">
        <Home themeToggler={themeToggler} theme={theme} />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
