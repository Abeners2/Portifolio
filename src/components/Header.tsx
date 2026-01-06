"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isProjetosActive = pathname === "/projetos" || pathname.startsWith("/projetos/");

  return (
    <header className="fixed top-0 z-50 w-full px-6 py-4 flex justify-between items-center border-b border-slate-800 bg-transparent backdrop-blur-md">

      <a
        href="/"
        className="text-lg font-semibold hover:text-blue-400 transition"
      >
        Abner.dev
      </a>

      <nav className="hidden md:flex gap-6 text-sm">
        <a href="/#sobre" className="hover:text-blue-400">
          Sobre
        </a>
        <a href="/#skills" className="hover:text-blue-400">
          Skills
        </a>

        {/* 🔥 Active apenas aqui */}
        <a
          href="/projetos"
          className={`
            transition
            hover:text-blue-400
            ${isProjetosActive ? "text-blue-400 font-medium" : ""}
          `}
        >
          Projetos
        </a>

        <a href="/#contato" className="hover:text-blue-400">
          Contato
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
