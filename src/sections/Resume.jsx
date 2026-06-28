import { motion } from "framer-motion";
import { BriefcaseBusiness, Download, GraduationCap, Trophy } from "lucide-react";
import MagneticButton from "../components/MagneticButton";
import { fadeUp, stagger, viewport } from "../lib/motion";

const experience = [
  {
    type: "work",
    title: "Marketing Graphic Artist",
    company: "R&M Digital Trading",
    duration: "2026 - Present",
    bullets: [
      "Managed 6+ social media pages, including content planning, scheduling, and publishing.",
      "Created graphics, digital ads, product photography, and promotional video content.",
      "Built a web-based Workforce Management System to streamline internal operations.",
    ],
    img: "/images/logocj.png",
  },
  {
    type: "work",
    title: "Multimedia Artist / 3D Modeler",
    company: "Hytec Power Inc.",
    duration: "2025 - 2026",
    bullets: [
      "Created 3D models, layout visualizations, and corporate graphic materials.",
      "Handled photography, videography, camera work, and lighting setup for events.",
      "Collaborated with cross-functional teams to deliver multimedia outputs on schedule.",
    ],
    img: "/images/hyteclog.png",
  },
  {
    type: "work",
    title: "Founder & Multimedia Designer",
    company: "Zyphron Creative",
    duration: "2022 - Present",
    bullets: [
      "Delivered production-ready 3D assets for 10+ clients across games, animation, and visualization.",
      "Completed 5+ end-to-end projects spanning game development, app builds, and web deployments.",
      "Produced architectural and product visualizations plus AI workflow automation for clients.",
    ],
    img: "/images/logocj.png",
  },
  {
    type: "work",
    title: "Graphic Artist / Video Editor Intern",
    company: "PESO - Admin Department",
    duration: "Jun - Nov 2024",
    bullets: ["Created promotional graphics and edited short-form video content for social media campaigns."],
    img: "/images/logocj.png",
  },
  {
    type: "education",
    title: "BS Entertainment and Multimedia Computing - Game Development",
    company: "City College of San Jose del Monte, Bulacan",
    duration: "2021 - 2025",
    bullets: ["Dean's Lister", "Best Capstone & Best Game Project, 2025"],
    img: "/images/citycollege.jpg",
  },
];

const achievements = [
  "Best Capstone Project - City College of San Jose del Monte, 2025",
  "Best Game Project - City College of San Jose del Monte, 2025",
  "Best EMC Project - City College of San Jose del Monte, 2025",
  "Most Popular Project - City College of San Jose del Monte, 2025",
];

function TimelineEntry({ item, index }) {
  const Icon = item.type === "education" ? GraduationCap : BriefcaseBusiness;

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
      viewport={{ once: true, margin: "-80px" }}
      className="relative grid gap-4 border-l border-white/10 pb-10 pl-8 last:pb-0 md:grid-cols-[0.24fr_0.76fr] md:gap-8"
    >
      <span className="absolute -left-[18px] top-0 flex h-9 w-9 items-center justify-center rounded-lg border-4 border-[#06070a] bg-cyan-100 text-slate-950">
        <Icon size={17} strokeWidth={1.8} />
      </span>
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-100">
          {item.duration}
        </p>
      </div>
      <div className="panel premium-card rounded-lg p-5">
        <div className="flex gap-4">
          <img
            src={item.img}
            alt={item.company}
            className="h-12 w-12 shrink-0 rounded-lg border border-white/10 object-cover"
          />
          <div>
            <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-1 text-sm font-semibold text-slate-400">{item.company}</p>
          </div>
        </div>
        <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f4c76b]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="relative overflow-hidden py-28">
      <div className="hairline absolute left-1/2 top-0 h-px w-screen -translate-x-1/2" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(244,199,107,0.08),transparent_40%)]" />

      <div className="section-shell relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <motion.p variants={fadeUp} className="section-kicker">
              Experience
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title mt-4 max-w-3xl">
              Experience across corporate production, freelance delivery, and game development.
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
          <MagneticButton>
            <a
              href="/resume/CJResume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-slate-950 shadow-xl shadow-black/30 transition hover:bg-[#f4c76b] cursor-hover"
            >
              <Download size={18} strokeWidth={2} />
              Download resume
            </a>
          </MagneticButton>
          </motion.div>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.42fr]">
          <div>
            {experience.map((item, index) => (
              <TimelineEntry key={`${item.title}-${item.company}`} item={item} index={index} />
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true, margin: "-80px" }}
            className="panel premium-card h-fit rounded-lg p-6 lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-100 text-slate-950">
                <Trophy size={21} strokeWidth={1.8} />
              </span>
              <h3 className="font-display text-2xl font-bold text-white">Achievements</h3>
            </div>
            <div className="mt-6 space-y-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-slate-300"
                >
                  {achievement}
                </motion.div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
