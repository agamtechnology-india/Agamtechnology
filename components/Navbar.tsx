"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-20 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        
  <Link
  href="/"
  className="flex h-16 w-[190px] shrink-0 items-center overflow-hidden"
>
  <Image
    src="/images/agamtechnology-navbar-logo.png"
    alt="Agam Technology"
    width={230}
    height={100}
    priority
    className="h-auto w-[190px] object-contain"
  />
</Link>

        <ul className="hidden gap-6 text-sm font-medium lg:flex">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#why-choose-us" className="hover:text-blue-400">About</a></li>
          <li><a href="#services" className="hover:text-blue-400">Services</a></li>
          <li><a href="#technologies" className="hover:text-blue-400">Technologies</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>  
        <button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="lg:hidden"
>
  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
</button>
<ThemeToggle />
        <button className="hidden rounded-lg bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-700 lg:block">
          Book Consultation
        </button>
      </nav>
      {isMenuOpen && (
  <div className="border-t border-slate-800 bg-slate-950 lg:hidden">
    <ul className="flex flex-col space-y-4 px-6 py-6 text-sm font-medium">
      <li>
        <a
          href="#home"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-blue-400"
        >
          Home
        </a>
      </li>

      <li>
        <a
          href="#why-choose-us"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-blue-400"
        >
          About
        </a>
      </li>

      <li>
        <a
          href="#services"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-blue-400"
        >
          Services
        </a>
      </li>

      <li>
        <a
          href="#technologies"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-blue-400"
        >
          Technologies
        </a>
      </li>

      <li>
        <a
          href="#projects"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-blue-400"
        >
          Projects
        </a>
      </li>

      <li>
        <a
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-blue-400"
        >
          Contact
        </a>
      </li>
    </ul>
  </div>
)}
    </header>
  );
}
