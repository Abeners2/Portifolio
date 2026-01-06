"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() =>
        setTheme(currentTheme === "dark" ? "light" : "dark")
      }
      className="px-3 py-2 rounded-md border border-slate-700 text-sm hover:bg-slate-800 transition"
    >
      {currentTheme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
