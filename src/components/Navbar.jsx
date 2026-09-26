import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Home,
  User,
  Code2,
  FolderKanban,
  BookOpen,
  Mail,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-5 left-1/2 z-50 w-[92%] max-w-4xl -translate-x-1/2 rounded-full border border-white/15 bg-[#171313]/90 px-3 py-3 shadow-xl backdrop-blur-xl">

      {/* NAVBAR TOP */}
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5A1F2B] font-bold text-[#F3EBDD]"
        >
          VU
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-1 md:flex">

          <NavLink
            to="/"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[#F3EBDD] transition hover:bg-[#5A1F2B]"
          >
            <Home size={17} />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/about"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[#F3EBDD] transition hover:bg-[#5A1F2B]"
          >
            <User size={17} />
            <span>About</span>
          </NavLink>

          <NavLink
            to="/skills"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[#F3EBDD] transition hover:bg-[#5A1F2B]"
          >
            <Code2 size={17} />
            <span>Skills</span>
          </NavLink>

          <NavLink
            to="/projects"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[#F3EBDD] transition hover:bg-[#5A1F2B]"
          >
            <FolderKanban size={17} />
            <span>Projects</span>
          </NavLink>

          <NavLink
            to="/blog"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[#F3EBDD] transition hover:bg-[#5A1F2B]"
          >
            <BookOpen size={17} />
            <span>Blog</span>
          </NavLink>

          <NavLink
            to="/contact"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[#F3EBDD] transition hover:bg-[#5A1F2B]"
          >
            <Mail size={17} />
            <span>Contact</span>
          </NavLink>

          {/* DESKTOP THEME BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-1 rounded-full p-2 text-[#F3EBDD] transition hover:bg-[#5A1F2B]"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full p-2 text-[#F3EBDD] transition hover:bg-[#5A1F2B] md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mt-3 border-t border-white/10 pt-3 md:hidden">

          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#F3EBDD] hover:bg-[#5A1F2B]"
          >
            <Home size={18} />
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#F3EBDD] hover:bg-[#5A1F2B]"
          >
            <User size={18} />
            About
          </NavLink>

          <NavLink
            to="/skills"
            onClick={closeMenu}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#F3EBDD] hover:bg-[#5A1F2B]"
          >
            <Code2 size={18} />
            Skills
          </NavLink>

          <NavLink
            to="/projects"
            onClick={closeMenu}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#F3EBDD] hover:bg-[#5A1F2B]"
          >
            <FolderKanban size={18} />
            Projects
          </NavLink>

          <NavLink
            to="/blog"
            onClick={closeMenu}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#F3EBDD] hover:bg-[#5A1F2B]"
          >
            <BookOpen size={18} />
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#F3EBDD] hover:bg-[#5A1F2B]"
          >
            <Mail size={18} />
            Contact
          </NavLink>

          {/* MOBILE THEME BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-[#F3EBDD] hover:bg-[#5A1F2B]"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

        </div>
      )}
    </nav>
  );
}

export default Navbar;