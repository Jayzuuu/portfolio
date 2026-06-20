import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Github, Mail, Sparkles } from "lucide-react";
import Model3D from "../components/Model3D";
import MagneticButton from "../components/MagneticButton";

const roles = [
  "Multimedia Specialist",
  "3D Modeler & Visualizer",
  "Graphic Artist",
  "Game Developer",
  "Founder of Zyphron Creative",
];

const stats = [
  { value: "10+", label: "clients served" },
  { value: "5+", label: "end-to-end builds" },
  { value: "4+", label: "years creating" },
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
      const pause = setTimeout(() => setDeleting(true), 1100);
      return () => clearTimeout(pause);
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return undefined;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(roles[index].substring(0, subIndex));
    }, deleting ? 38 : 72);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#060814] px-6 py-28 text-white md:px-12 lg:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.22),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.24),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.2),rgba(6,8,20,0.95))]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 backdrop-blur">
            <Sparkles size={15} strokeWidth={1.75} />
            3D Visuals / Design / Development
          </div>

          <h1 className="font-display text-[clamp(3.4rem,10vw,8.6rem)] font-bold leading-[0.88] tracking-normal">
            Christian
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-violet-300">
              Jay Castro
            </span>
          </h1>

          <h2 className="mt-6 min-h-[36px] text-xl font-medium text-cyan-100 md:text-2xl">
            {text}
            <span className="ml-1 border-r-2 border-cyan-200 animate-pulse" />
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            I build polished multimedia work for brands, games, and campaigns:
            3D assets, motion graphics, social visuals, web systems, and
            creative pipelines from concept to final output.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <MagneticButton>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/40 transition hover:bg-white cursor-hover"
              >
                View selected work
                <ArrowRight size={18} strokeWidth={1.8} />
              </a>
            </MagneticButton>
            <a
              href="/resume/CJResume.pdf"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-violet-300/60 hover:bg-white/10 cursor-hover"
            >
              Download resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-200/60 hover:text-white cursor-hover"
              >
                <s.Icon size={17} strokeWidth={1.75} />
                {s.label}
              </a>
            ))}
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="border-l border-white/15 pl-4"
              >
                <div className="font-display text-2xl font-bold text-white">
                  {item.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12 }}
          className="relative h-[430px] min-h-[430px] lg:h-[620px]"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 via-violet-500/10 to-transparent blur-2xl" />
          <Model3D />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-cyan-100/80 transition hover:text-white cursor-hover"
        aria-label="Scroll down"
      >
        <span className="mb-1 text-xs uppercase tracking-[0.28em]">Scroll</span>
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
