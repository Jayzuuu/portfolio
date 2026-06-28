import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Facebook, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import MagneticButton from "../components/MagneticButton";
import { fadeUp, stagger, viewport } from "../lib/motion";

const socials = [
  { label: "Email", href: "mailto:christianjaycastro206@gmail.com", Icon: Mail },
  { label: "Facebook", href: "https://facebook.com/christianjaycastro", Icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com/in/christianjaycastro", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Jayzuuu", Icon: Github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
    );
    window.location.href = `mailto:christianjaycastro206@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="hairline absolute left-1/2 top-0 h-px w-screen -translate-x-1/2" />
      <div className="fine-grid pointer-events-none absolute inset-0 opacity-35" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(103,232,249,0.1),transparent_38%),linear-gradient(250deg,rgba(244,199,107,0.08),transparent_42%)]" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="section-shell relative z-10 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center"
      >
        <motion.div variants={fadeUp}>
          <p className="section-kicker">
            Contact
          </p>
          <h2 className="section-title mt-4">
            Need 3D, design, video, or a complete creative build?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            I am open for freelance projects, collaborations, and creative roles
            where visual production needs to move fast without losing polish.
          </p>

          <div className="mt-8 grid gap-3 text-sm text-slate-300">
            <a
              href="mailto:christianjaycastro206@gmail.com"
              className="panel flex items-center gap-3 rounded-lg px-4 py-3 transition hover:border-cyan-100/50 hover:text-white cursor-hover"
            >
              <Mail size={19} strokeWidth={1.8} />
              christianjaycastro206@gmail.com
            </a>
            <a
              href="tel:+639100121091"
              className="panel flex items-center gap-3 rounded-lg px-4 py-3 transition hover:border-cyan-100/50 hover:text-white cursor-hover"
            >
              <Phone size={19} strokeWidth={1.8} />
              +63 910 012 1091
            </a>
            <div className="panel flex items-center gap-3 rounded-lg px-4 py-3">
              <MapPin size={19} strokeWidth={1.8} />
              San Jose Del Monte, Bulacan, Philippines
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-100/60 hover:text-white cursor-hover"
              >
                <Icon size={17} strokeWidth={1.8} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="panel premium-card rounded-lg p-5 md:p-8">
          {sent ? (
            <div className="flex min-h-[360px] flex-col items-center justify-center gap-4 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-lg bg-cyan-100 text-slate-950">
                <Check size={32} strokeWidth={1.8} />
              </span>
              <h3 className="font-display text-3xl font-bold text-white">Message prepared</h3>
              <p className="max-w-sm text-slate-300">
                Your email client should be open now. Send it there and I will
                receive the inquiry.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] transition hover:bg-white/10 cursor-hover"
              >
                Write another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">Start a project</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Tell me what you need and the kind of output you want.
                </p>
              </div>

              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
                value={form.name}
                onChange={handleChange}
                className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-100"
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={handleChange}
                className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-100"
              />
              <textarea
                name="message"
                placeholder="Project brief"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                className="resize-none rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-100"
              />
              <MagneticButton className="block w-full">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-100 px-6 py-3.5 text-sm font-extrabold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-white cursor-hover"
                >
                  Send inquiry
                  <Send size={17} strokeWidth={1.8} />
                </button>
              </MagneticButton>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
