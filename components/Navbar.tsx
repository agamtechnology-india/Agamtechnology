"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-500">
          Agam Technology
        </h1>

        <ul className="hidden gap-8 text-sm font-medium md:flex">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#why-choose-us" className="hover:text-blue-400">About</a></li>
          <li><a href="#services" className="hover:text-blue-400">Services</a></li>
          <li><a href="#technologies" className="hover:text-blue-400">Technologies</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>  
        <button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="md:hidden"
>
  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
</button>
        <button className="hidden rounded-lg bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-700 md:block">
          Book Consultation
        </button>
      </nav>
      {isMenuOpen && (
  <div className="border-t border-slate-800 bg-slate-950 md:hidden">
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