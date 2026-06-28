import { motion } from "framer-motion";
import { Box, Clapperboard, Code2, Layers3, PenTool, Workflow } from "lucide-react";
import profilePic from "../assets/profilepic.jpg";
import { fadeUp, scaleIn, stagger, viewport } from "../lib/motion";

const services = [
  {
    Icon: Box,
    title: "3D & Visualization",
    body: "Production-ready models, layouts, product visuals, and presentation scenes for corporate and client-facing work.",
  },
  {
    Icon: Clapperboard,
    title: "Campaign Production",
    body: "Graphics, photography, short-form edits, event coverage, motion assets, and social content built for publishing.",
  },
  {
    Icon: Code2,
    title: "Interactive Delivery",
    body: "Unity games, app prototypes, websites, workflow tools, and creative automation that turn assets into usable systems.",
  },
];

const pipeline = [
  { Icon: PenTool, label: "Direct", text: "brief, references, scope, creative route" },
  { Icon: Layers3, label: "Produce", text: "model, design, shoot, edit, build" },
  { Icon: Workflow, label: "Ship", text: "polish, optimize, publish, handoff" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="hairline absolute left-1/2 top-0 h-px w-screen -translate-x-1/2" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(244,199,107,0.075),transparent_34%),linear-gradient(245deg,rgba(103,232,249,0.08),transparent_42%)]" />

      <div className="section-shell relative z-10 grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-lg border border-white/10" />
          <div className="panel relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-lg">
            <img
              src={profilePic}
              alt="Christian Jay Castro"
              className="h-full w-full object-cover grayscale-[8%] saturate-110"
            />
            <div className="animate-scan pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent via-cyan-100/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06070a] via-[#06070a]/72 to-transparent p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f4c76b]">
                Zyphron Creative
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold leading-tight">
                A multimedia specialist with a 3D-first production edge.
              </h3>
            </div>
          </div>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.div
            variants={fadeUp}
          >
            <p className="section-kicker">
              About / Creative Pipeline
            </p>
            <h2 className="section-title mt-4 max-w-3xl">
              I turn rough ideas into production-ready visual systems.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I work across 3D modeling, graphic design, video production, game development,
              and web systems. My advantage is end-to-end ownership: I can plan the direction,
              create the assets, build the interactive layer, and polish the final output.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((item, index) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="panel premium-card rounded-lg p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-100 text-slate-950">
                  <item.Icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.body}</p>
              </motion.article>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-6 grid gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 md:grid-cols-3">
            {pipeline.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 rounded-lg px-2 py-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-[#f4c76b]">
                  <step.Icon size={18} strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block text-sm font-bold text-white">{step.label}</span>
                  <span className="block text-xs text-slate-400">{step.text}</span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
