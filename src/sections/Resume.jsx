import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Entertainment and Multimedia Computing",
      school: "City College of San Jose Del Monte, Bulacan",
      duration: "2021-2025",
      img: "/images/citycollege.jpg",
    },
  ];

  const experience = [
    {
      title: "Multimedia Artist",
      company: "Hytec Power Inc.",
      duration: "August 13 - Present",
      details: "3D modeling & layout, photography, videography, graphic design, and video editing projects.",
      img: "/images/hyteclog.png",
    },
    {
      title: "3D Modeler / Game Developer",
      company: "Freelance",
      duration: "January 26, 2023 - Present ",
      details: "Created 3D assets and Games or App.",
      img: "/images/logocj.png",
    },
  ];

  const renderCard = (item) => (
    <motion.div
      key={item.title || item.degree}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(139,92,246,0.5)" }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-2xl mb-6 flex flex-col items-center relative z-10 border border-purple-200 dark:border-purple-600"
    >
      <img
        src={item.img}
        alt={item.title || item.degree}
        className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-purple-500"
      />
      <h4 className="text-xl font-bold text-purple-600 dark:text-purple-200">{item.title || item.degree}</h4>
      <p className="text-gray-600 dark:text-gray-300">{item.company || item.school}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{item.duration}</p>
      {item.details && <p className="mt-2 text-gray-700 dark:text-gray-200">{item.details}</p>}
    </motion.div>
  );

  return (
    <section id="resume" className="min-h-screen flex flex-col items-center px-8 gap-12 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl dark:bg-purple-700/30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl dark:bg-purple-800/30"></div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12">
        {/* Left: Education */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-purple-500 mb-6">Education</h2>
          {education.map(renderCard)}
        </div>

        {/* Right: Experience */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-purple-500 mb-6">Experience</h2>
          {experience.map(renderCard)}
        </div>
      </div>

      {/* Download Resume Button */}
      <motion.a
        href="/resume/CJResume.pdf" // ilagay path ng PDF sa public folder
        download
        whileHover={{ scale: 1.05 }}
        className="mt-12 inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
      >
        <FaDownload className="mr-2" />
        Download My Resume
      </motion.a>
    </section>
  );
}
