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

  const closeMenu = () => setMenuOpen(false);

  const iconClass = ({ isActive }) =>
    `flex h-10 w-10 items-center justify-center rounded-full transition ${
      isActive
        ? "bg-[#5A1F2B] text-[#F3EBDD]"
        : darkMode
        ? "text-[#F3EBDD] hover:bg-[#5A1F2B]"
        : "text-[#171313] hover:bg-[#5A1F2B] hover:text-[#F3EBDD]"
    }`;

  return (
    <nav className="fixed top-5 left-1/2 z-50 w-[92%] max-w-4xl -translate-x-1/2">

      {/* MAIN NAVBAR */}
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5A1F2B] font-bold text-[#F3EBDD]"
          aria-label="Home"
        >
          VU
        </NavLink>

        {/* DESKTOP ICONS */}
        <div className="hidden items-center gap-1 md:flex">

          <NavLink to="/" className={iconClass} title="Home">
            <Home size={19} />
          </NavLink>

          <NavLink to="/about" className={iconClass} title="About">
            <User size={19} />
          </NavLink>

          <NavLink to="/skills" className={iconClass} title="Skills">
            <Code2 size={19} />
          </NavLink>

          <NavLink to="/projects" className={iconClass} title="Projects">
            <FolderKanban size={19} />
          </NavLink>

          <NavLink to="/blog" className={iconClass} title="Blog">
            <BookOpen size={19} />
          </NavLink>

          <NavLink to="/contact" className={iconClass} title="Contact">
            <Mail size={19} />
          </NavLink>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
              darkMode
                ? "text-[#F3EBDD] hover:bg-[#5A1F2B]"
                : "text-[#171313] hover:bg-[#5A1F2B] hover:text-[#F3EBDD]"
            }`}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>

        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`flex h-10 w-10 items-center justify-center rounded-full ${
            darkMode ? "text-[#F3EBDD]" : "text-[#171313]"
          }`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mt-3 flex justify-end md:hidden">
          <div className="flex flex-col items-center gap-1">

            <NavLink
              to="/"
              onClick={closeMenu}
              className={iconClass}
              title="Home"
            >
              <Home size={19} />
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={iconClass}
              title="About"
            >
              <User size={19} />
            </NavLink>

            <NavLink
              to="/skills"
              onClick={closeMenu}
              className={iconClass}
              title="Skills"
            >
              <Code2 size={19} />
            </NavLink>

            <NavLink
              to="/projects"
              onClick={closeMenu}
              className={iconClass}
              title="Projects"
            >
              <FolderKanban size={19} />
            </NavLink>

            <NavLink
              to="/blog"
              onClick={closeMenu}
              className={iconClass}
              title="Blog"
            >
              <BookOpen size={19} />
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={iconClass}
              title="Contact"
            >
              <Mail size={19} />
            </NavLink>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                darkMode
                  ? "text-[#F3EBDD]"
                  : "text-[#171313]"
              }`}
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {darkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>

          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar; 