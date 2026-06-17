import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlipCard from "../components/FlipCard";

const filters = ["All", "3D", "Game Dev", "Graphic Design", "App Dev", "Video"];

const projects = [
  {
    title: "The Gula Game",
    desc: "A 3D parkour game where the player steals colorful jellies while escaping obstacles and guards.",
    image: "/projects/gula/gulaintro.gif",
    tags: ["Game Dev", "3D"],
  },
  {
    title: "The Arya App",
    desc: "A map-based app that showcases famous local landmarks with detailed descriptions and historical background.",
    image: "/projects/aryaapp/aryaintro.gif",
    tags: ["App Dev"],
  },
  {
    title: "PESO",
    desc: "A graphic design project that promotes employment opportunities and helps job seekers connect with potential employers.",
    image: "/projects/peso/pesointro.gif",
    tags: ["Graphic Design"],
  },
  {
    title: "TESDA World Skills Contribution",
    desc: "Handled graphic design, video editing, banner creation, and digital mapping for the TESDA World Skills event.",
    image: "/projects/tesdaworldskills/tesdavid.gif",
    tags: ["Graphic Design", "Video"],
  },
  {
    title: "Work Projects 3D Models",
    desc: "Created 3D models of stages, robots, equipment, and machines for project showcases and visual presentations.",
    image: "/projects/workproject3d/workvid.gif",
    tags: ["3D"],
  },
  {
    title: "Work Project Sketch Up",
    desc: "Designed 3D floor layouts in SketchUp, placing equipment and machines with detailed 3D modeling for realistic visualization.",
    image: "/projects/workprojectsketchup/sketchup3d.gif",
    tags: ["3D"],
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
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-24 md:py-32 pt-32 bg-white dark:bg-[#0f111a] transition-colors duration-300"
    >
      <h2 className="text-4xl font-display font-bold text-purple-500">Projects</h2>
      <div className="w-16 h-1 bg-purple-500 rounded mt-2 mb-8" />

      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition cursor-hover ${
              activeFilter === f
                ? "bg-purple-500 text-white"
                : "border border-purple-400/60 text-purple-400 hover:bg-purple-500 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mb-16 flex flex-col items-center"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-6">
          Featured — Calling Card Design
        </span>
        <FlipCard />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 w-full max-w-6xl">
        {filtered.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelected(p)}
            className={`bg-white/60 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl border border-purple-100/80 dark:border-purple-800/60 overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-purple-500/20 transition-shadow cursor-hover flex flex-col ${
              i === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1"
            }`}
          >
            <img
              src={p.image}
              alt={p.title}
              className={`w-full object-cover ${
                i === 0 ? "h-56 md:h-full md:min-h-[280px]" : "h-40"
              }`}
            />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-purple-500 mb-2">
                {p.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 flex-1">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-full text-purple-600 dark:text-purple-300 border border-purple-200/60 dark:border-purple-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-purple-100/80 dark:border-purple-800/60 shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white hover:bg-purple-600 transition z-10 text-lg font-bold cursor-hover"
                aria-label="Close"
              >
                ×
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full max-h-[400px] object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-500 mb-3">
                  {selected.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selected.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full text-purple-600 dark:text-purple-300 border border-purple-200/60 dark:border-purple-700/50"
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
