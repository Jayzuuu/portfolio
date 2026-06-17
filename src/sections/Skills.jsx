import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    label: "3D & Visualization",
    skills: [
      { name: "Blender", level: 85 },
      { name: "SketchUp", level: 75 },
      { name: "D5 Render", level: 70 },
    ],
  },
  {
    label: "Design & Production",
    skills: [
      { name: "Photoshop", level: 80 },
      { name: "Illustrator", level: 75 },
      { name: "Premiere Pro", level: 78 },
      { name: "After Effects", level: 65 },
      { name: "Canva", level: 95 },
    ],
  },
  {
    label: "Development",
    skills: [
      { name: "Unity", level: 70 },
      { name: "Web Dev", level: 65 },
    ],
  },
  {
    label: "Strategy & Marketing",
    skills: [
      { name: "Social Media Strategy", level: 80 },
      { name: "Content Management", level: 75 },
      { name: "Digital Marketing", level: 70 },
    ],
  },
];

const radius = 40;
const circumference = 2 * Math.PI * radius;

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-8 py-24 md:py-32 bg-purple-50/30 dark:bg-purple-900/10 transition-colors duration-300"
    >
      <h2 className="text-4xl font-display font-bold text-purple-500">Skills</h2>
      <div className="w-16 h-1 bg-purple-500 rounded mt-2 mb-8" />
      <p className="text-gray-500 dark:text-gray-400 mb-16 text-center max-w-lg">
        Tools and technologies I use across 3D, design, and development.
      </p>

      <div className="flex flex-col gap-16 w-full max-w-5xl">
        {categories.map((cat, ci) => (
          <div key={ci}>
            <h3 className="text-lg font-semibold text-purple-400 mb-8 uppercase tracking-widest">
              {cat.label}
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
              {cat.skills.map((skill, i) => {
                const id = `${ci}-${i}`;
                return (
                  <motion.div
                    key={id}
                    className={`flex flex-col items-center transition-all duration-300 ${
                      hovered !== null && hovered !== id
                        ? "opacity-40 blur-sm"
                        : "opacity-100 blur-0"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHovered(id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="relative w-20 h-20">
                      <svg className="w-20 h-20 -rotate-90">
                        <circle
                          cx="50%"
                          cy="50%"
                          r={radius}
                          strokeWidth="6"
                          fill="none"
                          className="stroke-gray-200 dark:stroke-gray-700"
                        />
                        <motion.circle
                          cx="50%"
                          cy="50%"
                          r={radius}
                          strokeWidth="6"
                          fill="none"
                          className="stroke-purple-500 dark:stroke-purple-400"
                          strokeDasharray={circumference}
                          strokeLinecap="round"
                          initial={{ strokeDashoffset: circumference }}
                          whileInView={{
                            strokeDashoffset:
                              circumference * (1 - skill.level / 100),
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-purple-500">
                        {skill.level}%
                      </div>
                    </div>
                    <div className="mt-3 text-sm font-medium text-center text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
