"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="rounded-full border border-slate-700 p-2 transition hover:bg-slate-800"
    >
      {darkMode ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}