import { useState } from "react";

export default function Navbar({ active, setActive }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (page) => {
    setActive(page);
    setMenuOpen(false);
  };

  const btnStyle = (page) =>
    active === page
      ? "text-blue-400 font-bold"
      : "text-white hover:text-blue-300";

  return (
    <nav className="bg-[#08142b] text-white px-6 py-4">

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

          <button className={btnStyle("home")} onClick={() => handleClick("home")}>
            Home
          </button>

          <button className={btnStyle("about")} onClick={() => handleClick("about")}>
            About
          </button>

          <button className={btnStyle("contact")} onClick={() => handleClick("contact")}>
            Contact
          </button>

          <button className={btnStyle("projects")} onClick={() => handleClick("projects")}>
            Projects
          </button>

          <button className={btnStyle("skillsvalue")} onClick={() => handleClick("skillsvalue")}>
            Skills & Value
          </button>

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

          <button className={btnStyle("home")} onClick={() => handleClick("home")}>
            Home
          </button>

          <button className={btnStyle("about")} onClick={() => handleClick("about")}>
            About
          </button>

          <button className={btnStyle("contact")} onClick={() => handleClick("contact")}>
            Contact
          </button>

          <button className={btnStyle("projects")} onClick={() => handleClick("projects")}>
            Projects
          </button>

          <button className={btnStyle("skillsvalue")} onClick={() => handleClick("skillsvalue")}>
            Skills & Value
          </button>

        </div>
      )}

    </nav>
  );
}