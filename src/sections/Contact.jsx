import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:christianjaycastro206@gmail.com?subject=Portfolio Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name}%0AEmail: ${form.email}`;
    window.location.href = mailto;
    setSent(true);
  };

  const socials = [
    { label: "Email", href: "mailto:christianjaycastro206@gmail.com", icon: "✉️" },
    { label: "Facebook", href: "https://facebook.com/christianjaycastro", icon: "📘" },
    { label: "LinkedIn", href: "https://linkedin.com/in/christianjaycastro", icon: "💼" },
    { label: "GitHub", href: "https://github.com/Jayzuuu", icon: "🐙" },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 relative overflow-hidden bg-purple-50/30 dark:bg-purple-900/10 transition-colors duration-300"
    >
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl dark:bg-purple-700/30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl dark:bg-purple-800/30" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row gap-10"
      >
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h2 className="text-4xl font-bold text-purple-500">Contact Me</h2>
          <div className="w-16 h-1 bg-purple-500 rounded mt-2 mb-2" />
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Open for freelance projects, collaborations, and full-time opportunities.
            Let's build something great together.
          </p>

          <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            <p>
              <span className="text-purple-400 font-semibold">Email: </span>
              <a className="hover:underline" href="mailto:christianjaycastro206@gmail.com">christianjaycastro206@gmail.com</a>
            </p>
            <p>
              <span className="text-purple-400 font-semibold">Phone: </span>
              <a className="hover:underline" href="tel:+639100121091">+63 910 012 1091</a>
            </p>
            <p>
              <span className="text-purple-400 font-semibold">Location: </span>
              San Jose Del Monte, Bulacan, Philippines
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl border border-purple-400 text-sm text-purple-500 hover:bg-purple-500 hover:text-white transition flex items-center gap-2"
              >
                <span>{s.icon}</span> {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-white/60 dark:bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-800">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="text-5xl">✅</div>
              <h3 className="text-2xl font-bold text-purple-500">Message Sent!</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Your email client should have opened. I'll get back to you soon.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 rounded-xl px-6 py-3 bg-purple-500 text-white hover:bg-purple-600 transition text-sm"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Send a Message
              </h3>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-purple-200 dark:border-purple-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-purple-200 dark:border-purple-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-purple-200 dark:border-purple-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm resize-none"
              />
              <button
                type="submit"
                className="rounded-xl px-6 py-3 bg-purple-500 text-white hover:bg-purple-600 transition font-semibold text-sm"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
