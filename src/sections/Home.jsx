import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import FlipCard from "../components/FlipCard"; // ✅ IMPORT

export default function Home() {
  const roles = ["Web Developer", "Graphic Artist", "3D Modeler", "Game Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(roles[index].substring(0, subIndex));
    }, deleting ? 50 : 90);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-28 px-6 md:px-20 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500 to-indigo-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Left Text */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1 text-center md:text-left z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-500 leading-[1.1] whitespace-nowrap">
          Christian&nbsp;Jay&nbsp;Castro
        </h1>

        <h1 className="text-4xl md:text-6xl font-extrabold text-purple-500 leading-tight min-h-[70px] mt-2">
          {text}
          <span className="border-r-4 border-purple-500 animate-pulse ml-1"></span>
        </h1>

        {/* ✅ Updated Button to Scroll to Projects */}
        <a
          href="#projects"
          className="mt-6 inline-block px-8 py-3 text-lg bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition shadow-md"
        >
          View My Work
        </a>
      </motion.div>

      {/* Right Flipping Card */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex justify-center z-10"
      >
        <FlipCard />
      </motion.div>
    </section>
  );
}
