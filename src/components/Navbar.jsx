import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

const links = ["home", "about", "projects", "skills", "resume", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "home";
      sections.forEach((sec) => {
        const offset = sec.offsetTop - 170;
        if (window.scrollY >= offset) current = sec.id;
      });
      setActive(current);
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, x: "-50%", y: -16 }}
        animate={{ opacity: 1, x: "-50%", y: 0 }}
        transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-1/2 top-4 z-50 w-[calc(100%-1rem)] max-w-[1200px]"
      >
        <div
          className={`panel flex items-center justify-between rounded-lg px-3 py-3 transition duration-300 md:px-4 ${
            scrolled ? "bg-[#060a12]/86 shadow-2xl shadow-black/35" : "bg-white/[0.035]"
          }`}
        >
          <button
            onClick={() => scrollTo("home")}
            className="group flex min-w-0 items-center gap-3 text-left cursor-hover"
            aria-label="Go to home"
          >
            <img
              src="/images/logocj.png"
              alt="Christian Jay Castro logo"
              className="h-10 w-10 shrink-0 rounded-lg border border-white/10 object-cover"
            />
            <span className="hidden leading-none sm:block">
              <span className="block text-sm font-bold text-white">Christian Jay Castro</span>
              <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100/75">
                Multimedia Specialist
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-1 rounded-lg border border-white/10 bg-white/[0.035] p-1 md:flex">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`relative rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] transition cursor-hover ${
                  active === link
                    ? "text-slate-950"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {active === link && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-cyan-100 shadow-lg shadow-cyan-950/30"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume/CJResume.pdf"
              download
              className="hidden items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-[#f4c76b] cursor-hover sm:inline-flex"
            >
              <Download size={15} strokeWidth={2} />
              Resume
            </a>
            <button
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/10 cursor-hover md:hidden"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-x-3 top-[82px] z-40 rounded-lg border border-white/10 bg-[#060a12]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden"
        >
          <div className="grid gap-1">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`rounded-lg px-4 py-3 text-left text-sm font-bold uppercase tracking-[0.16em] transition cursor-hover ${
                  active === link
                    ? "bg-cyan-100 text-slate-950"
                    : "text-slate-200 hover:bg-white/10"
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
