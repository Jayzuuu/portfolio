import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06070a] px-6 py-8 text-sm text-slate-400">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-4 sm:flex-row">
        <span>&copy; 2026 Christian Jay Castro. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Jayzuuu"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition hover:text-cyan-100 cursor-hover"
          >
            <Github size={20} strokeWidth={1.75} />
          </a>
          <a
            href="mailto:christianjaycastro206@gmail.com"
            aria-label="Email"
            className="text-slate-400 transition hover:text-cyan-100 cursor-hover"
          >
            <Mail size={20} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </footer>
  );
}
