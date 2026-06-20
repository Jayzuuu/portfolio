import { motion } from "framer-motion";
import { Box, Code2, Clapperboard, Layers3, PenTool, Workflow } from "lucide-react";
import profilePic from "../assets/profilepic.jpg";

const services = [
  {
    Icon: Box,
    title: "3D & Visualization",
    body: "Production-ready models, layouts, product scenes, and architectural visualizations for presentations and campaigns.",
  },
  {
    Icon: Clapperboard,
    title: "Motion & Video",
    body: "Short-form content, promotional edits, motion graphics, event materials, and brand storytelling assets.",
  },
  {
    Icon: Code2,
    title: "Interactive Builds",
    body: "Unity games, app prototypes, web deployments, and workflow tools that connect creative output with real use.",
  },
];

const pipeline = [
  { Icon: PenTool, label: "Concept", text: "brief, references, direction" },
  { Icon: Layers3, label: "Production", text: "3D, design, edit, build" },
  { Icon: Workflow, label: "Delivery", text: "export, polish, launch" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-50 px-6 py-24 text-slate-950 transition-colors duration-300 dark:bg-[#080b14] dark:text-white md:px-12 lg:px-20"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/10" />
      <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-violet-400/15 blur-3xl dark:bg-violet-600/15" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-300/40 dark:border-white/10 dark:bg-white/5 dark:shadow-black/40">
            <img
              src={profilePic}
              alt="Christian Jay Castro"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                Zyphron Creative
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold">
                Multimedia specialist with a 3D-first edge.
              </h3>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-300">
              About / Creative Direction
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-normal">
              I turn rough creative ideas into polished visual systems.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              I am a Multimedia Specialist and Founder of Zyphron Creative,
              working across 3D modeling, graphic design, video production, game
              development, and web systems. My sweet spot is the full creative
              pipeline: understanding the brief, building the assets, polishing
              the presentation, and shipping the final output.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04]"
              >
                <item.Icon
                  size={24}
                  strokeWidth={1.75}
                  className="text-cyan-600 dark:text-cyan-300"
                />
                <h3 className="mt-5 font-display text-lg font-bold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {item.body}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 grid gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.035] md:grid-cols-3">
            {pipeline.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 rounded-xl px-3 py-2"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-cyan-200 dark:bg-cyan-300 dark:text-slate-950">
                  <step.Icon size={18} strokeWidth={1.75} />
                </span>
                <span>
                  <span className="block text-sm font-bold">{step.label}</span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400">
                    {step.text}
                  </span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
