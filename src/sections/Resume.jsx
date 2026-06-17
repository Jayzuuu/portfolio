import { motion } from "framer-motion";
import { Briefcase, Download } from "lucide-react";
import MagneticButton from "../components/MagneticButton";

const education = [
  {
    degree: "BS Entertainment and Multimedia Computing — Game Development",
    school: "City College of San Jose del Monte, Bulacan",
    duration: "2021 – 2025",
    bullets: [
      "Dean's Lister",
      "Best Capstone & Best Game Project, 2025",
    ],
    img: "/images/citycollege.jpg",
  },
];

const experience = [
  {
    title: "Marketing Graphic Artist",
    company: "R&M Digital Trading",
    duration: "2026 – Present",
    bullets: [
      "Managed 6+ social media pages and created digital ads",
      "Handled product photography and video content",
      "Built a web-based Workforce Management System",
    ],
    img: "/images/logocj.png",
  },
  {
    title: "Multimedia Artist / 3D Modeler",
    company: "Hytec Power Inc.",
    duration: "2025 – 2026",
    bullets: [
      "Created 3D models and layout visualizations",
      "Handled photography and videography",
      "Collaborated with cross-functional teams on corporate multimedia projects",
    ],
    img: "/images/hyteclog.png",
  },
  {
    title: "Founder & Multimedia Designer",
    company: "Zyphron Creative",
    duration: "2022 – Present",
    bullets: [
      "Delivered 3D assets for 10+ clients across games, animation, and visualization",
      "Completed 5+ end-to-end projects spanning game dev, app builds, and web deployments",
    ],
    img: "/images/logocj.png",
  },
  {
    title: "Graphic Artist / Video Editor Intern",
    company: "PESO — Admin Department",
    duration: "Jun – Nov 2024",
    bullets: [
      "Created promotional graphics for social media campaigns",
      "Edited short-form video content for outreach programs",
    ],
    img: "/images/logocj.png",
  },
];

const achievements = [
  "Best Capstone Project — City College of San Jose del Monte, 2025",
  "Best Game Project — City College of San Jose del Monte, 2025",
  "Best EMC Project — City College of San Jose del Monte, 2025",
  "Most Popular Project — City College of San Jose del Monte, 2025",
];

const competencies = [
  {
    label: "3D & Visualization",
    tags: ["Blender", "SketchUp", "D5 Render", "3D Modeling", "Architectural Visualization"],
  },
  {
    label: "Design & Production",
    tags: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Canva", "Brand Identity"],
  },
  {
    label: "Development",
    tags: ["Unity", "Game Dev", "Web Dev", "App Dev", "AI Workflow Automation"],
  },
  {
    label: "Strategy & Marketing",
    tags: ["Social Media Strategy", "Content Management", "Digital Marketing"],
  },
];

function TimelineEntry({ item, index }) {
  const isEven = index % 2 === 0;
  const title = item.title || item.degree;
  const subtitle = item.company || item.school;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative flex w-full mb-12 pl-12 md:pl-0 ${
        isEven ? "md:justify-start" : "md:justify-end"
      }`}
    >
      <div className="absolute left-[11px] md:left-1/2 top-6 w-8 h-8 rounded-full bg-purple-500 border-4 border-white dark:border-[#0f111a] z-10 md:-translate-x-1/2 flex items-center justify-center">
        <Briefcase size={14} strokeWidth={2} className="text-white" />
      </div>

      <div
        className={`w-full md:w-[calc(50%-2rem)] ${
          isEven ? "md:pr-10 md:text-right" : "md:pl-10"
        }`}
      >
        <div className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl border border-purple-100/80 dark:border-purple-800/60 p-5 hover:shadow-lg hover:shadow-purple-500/20 transition-shadow cursor-hover">
          <div
            className={`flex gap-4 ${
              isEven ? "md:flex-row-reverse md:text-right" : ""
            }`}
          >
            <img
              src={item.img}
              alt={title}
              className="w-12 h-12 rounded-full object-cover border border-purple-500 shrink-0"
            />
            <div className="flex-1">
              <h4 className="text-lg font-bold text-purple-500">{title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{subtitle}</p>
              <p className="text-gray-400 dark:text-gray-500 text-xs mb-2">
                {item.duration}
              </p>
              <ul
                className={`text-gray-700 dark:text-gray-300 text-sm space-y-1 ${
                  isEven ? "md:list-none" : "list-disc list-inside"
                }`}
              >
                {item.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Resume() {
  const allTimeline = [...education, ...experience];

  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center px-8 py-24 md:py-32 gap-12 relative overflow-hidden bg-white dark:bg-[#0f111a] transition-colors duration-300"
    >
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl dark:bg-purple-700/30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl dark:bg-purple-800/30" />

      <div className="relative z-10 w-full max-w-5xl">
        <h2 className="text-4xl font-display font-bold text-purple-500 text-center">Resume</h2>
        <div className="w-16 h-1 bg-purple-500 rounded mt-2 mb-12 mx-auto" />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-500 md:-translate-x-1/2" />
          {allTimeline.map((item, i) => (
            <TimelineEntry key={i} item={item} index={i} />
          ))}
        </div>

        <h3 className="text-2xl font-display font-bold text-purple-500 mb-6 mt-16 text-center">
          Achievements
        </h3>
        <div className="flex flex-col gap-3 max-w-2xl mx-auto">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-md px-5 py-3 rounded-xl border border-purple-100/80 dark:border-purple-800/60 text-gray-700 dark:text-gray-300 text-sm"
            >
              {a}
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-display font-bold text-purple-500 mb-6 mt-16 text-center">
          Core Competencies
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {competencies.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl border border-purple-100/80 dark:border-purple-800/60 p-5"
            >
              <h4 className="font-semibold text-purple-500 mb-3">{group.label}</h4>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full border border-purple-200/60 dark:border-purple-700/50 text-purple-600 dark:text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <MagneticButton>
        <a
          href="/resume/CJResume.pdf"
          download
          className="mt-4 inline-flex items-center rounded-xl px-6 py-3 bg-purple-500 text-white hover:bg-purple-600 transition font-semibold relative z-10 shadow-lg shadow-purple-500/20 cursor-hover"
        >
          <Download size={20} strokeWidth={1.75} className="mr-2" />
          Download My Resume
        </a>
      </MagneticButton>
    </section>
  );
}
