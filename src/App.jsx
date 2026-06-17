import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="font-sans bg-white dark:bg-[#0f111a] text-gray-900 dark:text-white transition-colors duration-300"
    >
      <ScrollProgress />
      <Navbar theme={theme} setTheme={setTheme} />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </motion.div>
  );
}
