import { motion } from "framer-motion";
import { Box, Monitor, Code2 } from "lucide-react";
import profilePic from "../assets/profilepic.jpg";

const highlights = [
  {
    Icon: Box,
    title: "3D & Visualization",
    tools: "Blender, SketchUp, D5 Render",
  },
  {
    Icon: Monitor,
    title: "Design & Production",
    tools: "Photoshop, Premiere Pro, After Effects",
  },
  {
    Icon: Code2,
    title: "Development",
    tools: "Unity, Web Dev, Game Dev",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-8 md:px-20 gap-16 py-24 md:py-32 bg-purple-50/30 dark:bg-purple-900/10 transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex-1 flex flex-col justify-center max-w-lg"
      >
        <h2 className="text-4xl font-display font-bold text-purple-500">About Me</h2>
        <div className="w-16 h-1 bg-purple-500 rounded mt-2 mb-8" />
        <p className="text-lg text-gray-900 dark:text-gray-200 leading-relaxed mb-4">
          I'm a <strong>Multimedia Specialist</strong> and Founder of{" "}
          <strong>Zyphron Creative</strong> — a freelance multimedia studio
          serving clients across 3D modeling, graphic design, video production,
          and game development.
        </p>
        <p className="text-lg text-gray-900 dark:text-gray-200 leading-relaxed mb-8">
          With experience in both corporate and freelance environments, I manage
          full creative pipelines from concept to final output — blending
          technical skill with visual storytelling.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {highlights.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl border border-purple-100/80 dark:border-purple-800/60 p-5 transition cursor-hover"
            >
              <card.Icon
                size={22}
                strokeWidth={1.75}
                className="text-purple-500 mb-3"
              />
              <h3 className="font-semibold text-purple-500 text-sm mb-1">
                {card.title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {card.tools}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-center"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 opacity-30 blur-2xl" />
          <img
            src={profilePic}
            alt="Christian Jay Castro"
            className="relative w-full h-full object-cover rounded-2xl shadow-xl border border-purple-500/30"
          />
        </div>
      </motion.div>
    </section>
  );
}
