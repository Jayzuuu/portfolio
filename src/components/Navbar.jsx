import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
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
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/60 dark:bg-[#0f111a]/60 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center px-8 py-4">
        <img
          src="/images/logocj.png"
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover shadow-md cursor-pointer cursor-hover"
          onClick={() => scrollTo("home")}
        />

        <div className="hidden md:flex gap-8 text-sm ml-auto mr-6">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`relative capitalize transition text-gray-800 dark:text-gray-200 cursor-hover ${
                active === link ? "font-semibold" : "font-normal"
              }`}
            >
              {link}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 ${
                  active === link ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 border border-purple-400/60 rounded-md hover:bg-purple-500 hover:text-white transition cursor-hover"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} strokeWidth={1.75} />
            ) : (
              <Moon size={18} strokeWidth={1.75} />
            )}
          </button>

          <button
            className="md:hidden text-gray-800 dark:text-gray-200 cursor-hover"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed top-[65px] left-0 w-full z-40 bg-white/90 dark:bg-[#0f111a]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 flex flex-col items-center py-6 gap-5 md:hidden transition-all duration-300 ease-in-out">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`capitalize text-lg transition text-gray-800 dark:text-gray-200 cursor-hover ${
                active === link
                  ? "font-semibold text-purple-500"
                  : "font-normal"
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
