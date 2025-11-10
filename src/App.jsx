import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";


export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="font-sans bg-white dark:bg-[#0f111a] text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar theme={theme} setTheme={setTheme} />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}
