import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Filter, X } from "lucide-react";
import FlipCard from "../components/FlipCard";
import { fadeUp, stagger, viewport } from "../lib/motion";

const filters = ["All", "3D", "Game Dev", "Graphic Design", "App Dev", "Video"];

const projects = [
  {
    title: "The Gula Game",
    desc: "A 3D parkour game where the player steals colorful jellies while escaping obstacles and guards.",
    image: "/projects/gula/gulaintro.gif",
    tags: ["Game Dev", "3D"],
    impact: "Best Capstone and Best Game Project",
  },
  {
    title: "Work Projects 3D Models",
    desc: "Corporate 3D assets for stages, robots, machines, equipment, and product-style showcase presentations.",
    image: "/projects/workproject3d/workvid.gif",
    tags: ["3D"],
    impact: "Visualization assets for client and internal demos",
  },
  {
    title: "Work Project SketchUp",
    desc: "3D floor layouts with equipment placement and realistic production planning visuals.",
    image: "/projects/workprojectsketchup/sketchup3d.gif",
    tags: ["3D"],
    impact: "Layout visualization for operational planning",
  },
  {
    title: "The Arya App",
    desc: "A map-based app showcasing local landmarks with details, context, and historical background.",
    image: "/projects/aryaapp/aryaintro.gif",
    tags: ["App Dev"],
    impact: "Interactive local discovery experience",
  },
  {
    title: "PESO Campaign Visuals",
    desc: "Promotional graphic design for employment opportunities and job seeker outreach.",
    image: "/projects/peso/pesointro.gif",
    tags: ["Graphic Design"],
    impact: "Social-ready public service materials",
  },
  {
    title: "TESDA World Skills",
    desc: "Graphic design, video editing, banner creation, and digital mapping for the TESDA World Skills event.",
    image: "/projects/tesdaworldskills/tesdavid.gif",
    tags: ["Graphic Design", "Video"],
    impact: "Event graphics and motion support",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="relative overflow-hidden py-28">
      <div className="hairline absolute left-1/2 top-0 h-px w-screen -translate-x-1/2" />
      <div className="fine-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="section-shell relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <motion.p variants={fadeUp} className="section-kicker">
              Selected Work
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title mt-4 max-w-3xl">
              Selected projects across games, 3D visualization, apps, and campaigns.
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} className="panel flex max-w-xl flex-wrap gap-2 rounded-lg p-2">
            <span className="flex items-center gap-2 px-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              <Filter size={14} />
              Filter
            </span>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] transition cursor-hover ${
                  activeFilter === f
                    ? "bg-cyan-100 text-slate-950 shadow-lg shadow-cyan-950/30"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="panel premium-card rounded-lg p-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#f4c76b]">
                  Brand artifact
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">
                  Calling Card Design
                </h3>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
                tap to flip
              </span>
            </div>
            <div className="flex justify-center">
              <FlipCard />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.article
                  layout
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  whileHover={{ y: -7 }}
                  onClick={() => setSelected(p)}
                  className={`group panel premium-card cursor-pointer overflow-hidden rounded-lg transition hover:border-cyan-100/40 cursor-hover ${
                    i === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className={`${i === 0 ? "h-72" : "h-52"} relative overflow-hidden`}>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06070a]/88 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan-100 backdrop-blur"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
                      <ArrowUpRight
                        size={20}
                        strokeWidth={1.9}
                        className="shrink-0 text-cyan-100 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{p.desc}</p>
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#f4c76b]">
                      {p.impact}
                    </p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#020406]/86 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 18 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 18 }}
              onClick={(e) => e.stopPropagation()}
              className="panel relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-950 transition hover:bg-[#f4c76b] cursor-hover"
                aria-label="Close project preview"
              >
                <X size={19} strokeWidth={2} />
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="max-h-[470px] w-full object-cover"
              />
              <div className="p-6 md:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-100">
                  {selected.impact}
                </p>
                <h3 className="mt-3 font-display text-3xl font-bold text-white">
                  {selected.title}
                </h3>
                <p className="mt-4 max-w-2xl leading-7 text-slate-300">{selected.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-sm font-semibold text-cyan-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
