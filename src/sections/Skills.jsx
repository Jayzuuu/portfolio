import { useState } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "Unity", level: 65 },
    { name: "Sketch Up", level: 45 },
    { name: "Photography", level: 60 },
    { name: "VideoGraphy", level: 50 },
    { name: "Blender", level: 60 },
    { name: "Canva", level: 95 },
  ];

  const stats = [
    { title: "Years Experience", value: "1" },
    { title: "Projects Completed", value: "45+" },
    { title: "Tools Mastered", value: "6" },
  ];

  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-8 relative">
      <h2 className="text-4xl font-bold text-purple-500 mb-10">Skills</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        {/* Left Stats */}
        <div className="hidden md:flex flex-col gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="p-4 bg-purple-100 dark:bg-purple-900 rounded-xl text-center shadow-md"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stat.value}</div>
              <div className="text-gray-700 dark:text-gray-200">{stat.title}</div>
            </motion.div>
          ))}
        </div>

        {/* Circular Skill Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className={`flex flex-col items-center transition-all duration-300 ${
                hovered !== null && hovered !== i ? "opacity-50 blur-sm" : "opacity-100 blur-0"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24">
                  {/* Background Circle */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    strokeWidth="8"
                    fill="none"
                    className="stroke-gray-300 dark:stroke-gray-700"
                  />
                  {/* Animated Foreground Circle */}
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    strokeWidth="8"
                    fill="none"
                    className="stroke-purple-500 dark:stroke-purple-400"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: circumference * (1 - skill.level / 100) }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                {/* Percentage Text */}
                <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {skill.level}%
                </div>
              </div>
              <div className="mt-4 text-lg font-medium text-center">{skill.name}</div>
            </motion.div>
          ))}
        </div>

        {/* Right Stats */}
        <div className="hidden md:flex flex-col gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="p-4 bg-purple-100 dark:bg-purple-900 rounded-xl text-center shadow-md"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stat.value}</div>
              <div className="text-gray-700 dark:text-gray-200">{stat.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
