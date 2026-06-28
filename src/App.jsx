import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import GrainOverlay from "./components/GrainOverlay";
import CustomCursor from "./components/CustomCursor";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

export default function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let frameId;

    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen overflow-hidden bg-[#06070a] font-sans text-slate-50 antialiased"
    >
      <GrainOverlay />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
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
