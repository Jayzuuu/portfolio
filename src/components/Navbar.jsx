import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { MenuIcon, XIcon } from "../icons";

export default function Navbar({ theme, setTheme }) {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      let current = "home";
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        if (top >= offset && top < offset + height) current = sec.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const links = ["home", "about", "projects", "skills", "resume", "contact"];

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-slate-200/70 bg-white/70 px-5 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-[#060814]/72 md:px-8">
        <img
          src="/images/logocj.png"
          alt="Logo"
          className="h-10 w-10 cursor-pointer rounded-full border border-slate-200 object-cover shadow-md dark:border-white/10 cursor-hover"
          onClick={() => scrollTo("home")}
        />

        <div className="ml-auto mr-6 hidden gap-2 rounded-full border border-slate-200/80 bg-white/55 p-1 text-sm dark:border-white/10 dark:bg-white/[0.04] md:flex">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`rounded-full px-4 py-2 capitalize transition cursor-hover ${
                active === link
                  ? "bg-slate-950 font-semibold text-white dark:bg-cyan-300 dark:text-slate-950"
                  : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-xl border border-slate-200 bg-white/50 p-2 text-slate-800 transition hover:bg-slate-950 hover:text-white dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-100 dark:hover:bg-cyan-300 dark:hover:text-slate-950 cursor-hover"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} strokeWidth={1.75} />
            ) : (
              <Moon size={18} strokeWidth={1.75} />
            )}
          </button>

          <button
            className="text-slate-800 dark:text-slate-200 md:hidden cursor-hover"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed left-0 top-[65px] z-40 flex w-full flex-col items-center gap-4 border-b border-slate-200 bg-white/95 py-6 backdrop-blur-xl transition-all duration-300 ease-in-out dark:border-white/10 dark:bg-[#060814]/95 md:hidden">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`capitalize text-lg transition cursor-hover ${
                active === link
                  ? "font-semibold text-cyan-600 dark:text-cyan-300"
                  : "font-normal text-slate-800 dark:text-slate-200"
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
