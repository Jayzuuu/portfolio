import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Facebook, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import MagneticButton from "../components/MagneticButton";

const socials = [
  { label: "Email", href: "mailto:christianjaycastro206@gmail.com", Icon: Mail },
  { label: "Facebook", href: "https://facebook.com/christianjaycastro", Icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com/in/christianjaycastro", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Jayzuuu", Icon: Github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

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
    <section
      id="contact"
      className="relative overflow-hidden bg-[#060814] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_90%_40%,rgba(168,85,247,0.2),transparent_28%)]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center"
      >
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
            Contact
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-normal">
            Need 3D, design, video, or a full creative build?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            I am open for freelance projects, collaborations, and creative roles
            where visual production needs to move fast without losing polish.
          </p>

          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <a
              href="mailto:christianjaycastro206@gmail.com"
              className="flex items-center gap-3 transition hover:text-cyan-200 cursor-hover"
            >
              <Mail size={19} strokeWidth={1.75} />
              christianjaycastro206@gmail.com
            </a>
            <a
              href="tel:+639100121091"
              className="flex items-center gap-3 transition hover:text-cyan-200 cursor-hover"
            >
              <Phone size={19} strokeWidth={1.75} />
              +63 910 012 1091
            </a>
            <div className="flex items-center gap-3">
              <MapPin size={19} strokeWidth={1.75} />
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
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-200/60 hover:text-white cursor-hover"
              >
                <Icon size={17} strokeWidth={1.75} />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur md:p-8">
          {sent ? (
            <div className="flex min-h-[360px] flex-col items-center justify-center gap-4 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950">
                <Check size={32} strokeWidth={1.8} />
              </span>
              <h3 className="font-display text-3xl font-bold">Message prepared</h3>
              <p className="max-w-sm text-slate-300">
                Your email client should be open now. Send it there and I will
                receive the inquiry.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/10 cursor-hover"
              >
                Write another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div>
                <h3 className="font-display text-2xl font-bold">Start a project</h3>
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
                className="rounded-xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              />
              <textarea
                name="message"
                placeholder="Project brief"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                className="resize-none rounded-xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              />
              <MagneticButton className="block w-full">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-white cursor-hover"
                >
                  Send inquiry
                  <Send size={17} strokeWidth={1.8} />
                </button>
              </MagneticButton>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
