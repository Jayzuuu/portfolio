import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 relative overflow-hidden bg-white dark:bg-[#0f111a] transition-colors duration-300"
    >
      {/* Background Shapes */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl dark:bg-purple-700/30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl dark:bg-purple-800/30"></div>

      {/* Contact Info */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center bg-white/60 dark:bg-gray-900/40 backdrop-blur-md p-10 rounded-2xl shadow-lg max-w-xl w-full space-y-6"
      >
        <h2 className="text-4xl font-bold text-purple-500 dark:text-purple-400">
          Contact Me
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-lg">
          Feel free to reach out for collaborations, projects, or just to say hi!
        </p>

        <div className="space-y-3 text-gray-900 dark:text-gray-200 text-base">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:christianjaycastro206@gmail.com"
              className="text-purple-500 hover:underline"
            >
              christianjaycastro206@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+639100121091"
              className="text-purple-500 hover:underline"
            >
              +63 910 012 1091
            </a>
          </p>
          <p>
            <strong>Location:</strong> Philippines
          </p>
        </div>
      </motion.div>
    </section>
  );
}
