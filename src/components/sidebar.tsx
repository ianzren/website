"use client";

import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-44 flex flex-col justify-between">
      <div>
        <img src="/logo.svg" alt="Logo" className="mb-4 w-8 h-8 -ml-1" />
        <nav className="flex flex-col gap-3">
          <a
            href="/"
            className={`text-sm font-semibold text-black transition-opacity ${
              pathname === "/" ? "opacity-100" : "opacity-50 hover:opacity-100"
            }`}
          >
            Home
          </a>
          <a
            href="#writing"
            className="text-sm font-semibold text-black opacity-50 hover:opacity-100 transition-opacity"
          >
            Writing
          </a>
          <a
            href="#projects"
            className="text-sm font-semibold text-black opacity-50 hover:opacity-100 transition-opacity"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-sm font-semibold text-black opacity-50 hover:opacity-100 transition-opacity"
          >
            About
          </a>
        </nav>
      </div>
    </aside>
  );
}
