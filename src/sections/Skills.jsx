import { motion } from "framer-motion";
import { BadgeCheck, Box, Code2, Megaphone, Palette } from "lucide-react";
import { fadeUp, stagger, viewport } from "../lib/motion";

const categories = [
  {
    Icon: Box,
    label: "3D & Visualization",
    summary: "Models, layouts, environments, product scenes, and render-ready visual assets.",
    skills: ["Blender", "SketchUp", "D5 Render", "3D Modeling", "Architectural Visualization", "Product Visualization"],
  },
  {
    Icon: Palette,
    label: "Design & Production",
    summary: "Campaign graphics, brand materials, video edits, motion assets, and social content.",
    skills: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Canva", "Brand Identity"],
  },
  {
    Icon: Code2,
    label: "Development",
    summary: "Interactive systems that support games, apps, websites, and internal workflows.",
    skills: ["Unity", "Game Development", "Web Development", "App Development", "AI Workflow Automation"],
  },
  {
    Icon: Megaphone,
    label: "Strategy & Marketing",
    summary: "Content planning, publishing systems, campaign support, and creative pipeline management.",
    skills: ["Social Media Strategy", "Content Management", "Digital Marketing", "Creative Pipeline"],
  },
];

const stack = [
  "Blender",
  "SketchUp",
  "D5 Render",
  "Photoshop",
  "Illustrator",
  "Premiere Pro",
  "After Effects",
  "Unity",
  "React",
  "Tailwind",
  "Canva",
  "AI Workflows",
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28">
      <div className="hairline absolute left-1/2 top-0 h-px w-screen -translate-x-1/2" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(245deg,rgba(103,232,249,0.09),transparent_42%)]" />

      <div className="section-shell relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-end"
        >
          <div>
            <motion.p variants={fadeUp} className="section-kicker">
              Core Competencies
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title mt-4">
              A production stack for visuals that actually ship.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-8 text-slate-300">
            Hybrid production is the advantage: visual thinking, technical
            execution, and campaign delivery in one workflow. The result is work
            that can move from concept art to production asset to deployed
            interactive experience.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {categories.map((cat, index) => (
            <motion.article
              key={cat.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="panel premium-card rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-slate-950">
                  <cat.Icon size={22} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">{cat.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{cat.summary}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-semibold text-slate-200"
                  >
                    <BadgeCheck size={13} strokeWidth={2} className="text-cyan-100" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="panel premium-card mt-10 overflow-hidden rounded-lg py-4"
        >
          <div className="flex animate-marquee gap-4 whitespace-nowrap">
            {[...stack, ...stack].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-bold text-cyan-100"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
