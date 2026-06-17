import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Mail, ChevronDown } from "lucide-react";
import Model3D from "../components/Model3D";
import MagneticButton from "../components/MagneticButton";

const roles = [
  "Multimedia Specialist",
  "3D Modeler & Visualizer",
  "Graphic Artist",
  "Game Developer",
  "Founder of Zyphron Creative",
];

const socials = [
  { label: "GitHub", href: "https://github.com/Jayzuuu", Icon: Github },
  {
    label: "Email",
    href: "mailto:christianjaycastro206@gmail.com",
    Icon: Mail,
  },
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
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-28 px-6 md:px-20 py-24 md:py-32 relative overflow-hidden bg-white dark:bg-[#0f111a] transition-colors duration-300"
    >
      <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500 to-indigo-500 opacity-20 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex-1 text-center md:text-left z-10"
      >
        <h1 className="text-[clamp(3.5rem,11vw,8rem)] font-display font-bold leading-[0.95] tracking-tight text-purple-500">
          Christian Jay Castro
        </h1>

        <h2 className="text-xl md:text-2xl font-sans font-normal text-purple-400/90 leading-snug min-h-[36px] mt-4">
          {text}
          <span className="border-r-2 border-purple-400 animate-pulse ml-1" />
        </h2>

        <MagneticButton>
          <a
            href="#projects"
            className="mt-8 inline-block rounded-xl px-6 py-3 bg-purple-500 text-white hover:bg-purple-600 transition shadow-md"
          >
            View My Work
          </a>
        </MagneticButton>

        <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 text-sm rounded-full border border-purple-400/60 text-purple-400 hover:bg-purple-500 hover:text-white transition cursor-hover"
            >
              <s.Icon size={18} strokeWidth={1.75} />
              {s.label}
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
        <Model3D />
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-purple-400 hover:text-purple-500 transition cursor-hover"
        aria-label="Scroll down"
      >
        <span className="text-xs mb-1 tracking-widest uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={24} strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  );
}
