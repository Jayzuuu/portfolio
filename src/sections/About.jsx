import { motion } from "framer-motion";
import profilePic from "../assets/profilepic.jpg"; // adjust path sa src folder mo

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-8 md:px-20 gap-24 bg-white dark:bg-[#0f111a] transition-colors duration-300"
    >
      {/* Left Text */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex flex-col justify-center"
      >
        <h2 className="text-5xl font-bold text-violet-600 dark:text-violet-400 mb-8">
          About Me
        </h2>
        <p className="text-lg text-gray-900 dark:text-gray-200 leading-relaxed max-w-lg">
          I’m a passionate Web Developer, Graphic Artist, 3D Modeler, and Game Developer 
          who loves creating digital experiences that blend creativity and technology. 
          My goal is to turn ideas into interactive, visually striking, and meaningful creations.
        </p>
      </motion.div>

      {/* Right Box with Profile Image as Background */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex justify-center items-center"
      >
        <div
          className="w-60 h-60 md:w-72 md:h-72 relative rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `url(${profilePic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Animated Tiles on top */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1">
            {Array.from({ length: 36 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.1 }}
                animate={{ opacity: [0.1, 0.5, 0.1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.05,
                }}
                className="bg-violet-300/30 dark:bg-violet-700/30 rounded-sm"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
