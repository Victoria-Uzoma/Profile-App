import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#08142B] text-[#F8FAFC] px-6 py-4">

      <div className="flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
            VP
          </div>

          <h1 className="font-bold text-xl">
            Victoria Paul
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#3B82F6] font-bold"
                : "text-[#F8FAFC] hover:text-[#3B82F6]"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#3B82F6] font-bold"
                : "text-[#F8FAFC] hover:text-[#3B82F6]"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold"
                : "text-white hover:text-blue-300"
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold"
                : "text-white hover:text-blue-300"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold"
                : "text-white hover:text-blue-300"
            }
          >
            Skills & Value
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold"
                : "text-white hover:text-blue-300"
            }
          >
            Blog
          </NavLink>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold"
                : "text-white hover:text-blue-300"
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold"
                : "text-white hover:text-blue-300"
            }
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold"
                : "text-white hover:text-blue-300"
            }
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold"
                : "text-white hover:text-blue-300"
            }
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold"
                : "text-white hover:text-blue-300"
            }
            onClick={() => setMenuOpen(false)}
          >
            Skills & Value
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold"
                : "text-white hover:text-blue-300"
            }
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </NavLink>

        </div>
      )}

    </nav>
  );
}