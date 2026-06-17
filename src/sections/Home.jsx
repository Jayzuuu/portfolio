import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";

const roles = [
  "Multimedia Specialist",
  "3D Modeler & Visualizer",
  "Graphic Artist",
  "Game Developer",
  "Founder of Zyphron Creative",
];

const socials = [
  { label: "GitHub", href: "https://github.com/Jayzuuu", icon: "🐙" },
  { label: "Email", href: "mailto:christianjaycastro206@gmail.com", icon: "✉️" },
];

export default function Home() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

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
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-28 px-6 md:px-20 relative overflow-hidden bg-white dark:bg-[#0f111a] transition-colors duration-300"
    >
      <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500 to-indigo-500 opacity-20 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex-1 text-center md:text-left z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-500 leading-[1.1]">
          Christian Jay Castro
        </h1>

        <h2 className="text-3xl md:text-5xl font-extrabold text-purple-400 leading-tight min-h-[60px] mt-2">
          {text}
          <span className="border-r-4 border-purple-500 animate-pulse ml-1" />
        </h2>

        <a
          href="#projects"
          className="mt-6 inline-block rounded-xl px-6 py-3 bg-purple-500 text-white hover:bg-purple-600 transition shadow-md"
        >
          View My Work
        </a>

        <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm rounded-full border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white transition"
            >
              <span>{s.icon}</span> {s.label}
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-center z-10 h-[450px] w-full relative"
      >
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-purple-400 hover:text-purple-500 transition"
        aria-label="Scroll down"
      >
        <span className="text-xs mb-1 tracking-widest uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-2xl"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}
