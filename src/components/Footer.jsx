import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-center gap-3 py-8 text-gray-500 text-sm border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0f111a]">
      <span>© 2026 Christian Jay Castro — All rights reserved</span>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Jayzuuu"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-gray-400 hover:text-purple-500 transition cursor-hover"
        >
          <Github size={20} strokeWidth={1.75} />
        </a>
        <a
          href="mailto:christianjaycastro206@gmail.com"
          aria-label="Email"
          className="text-gray-400 hover:text-purple-500 transition cursor-hover"
        >
          <Mail size={20} strokeWidth={1.75} />
        </a>
      </div>
    </footer>
  );
}
