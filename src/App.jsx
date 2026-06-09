import { useState } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SkillsValue from "./components/SkillsValue";

export default function App() {
  const [active, setActive] = useState("home");

  return (
    <div className="bg-[#0b1b3a] min-h-screen text-white">

      {/* NAVBAR */}
      <Navbar active={active} setActive={setActive} />

      {/* PAGE CONTENT */}
      {active === "home" && <Home />}
      {active === "about" && <About />}
      {active === "contact" && <Contact />}
      {active === "projects" && <Projects />}
      {active === "skillsvalue" && <SkillsValue />}

      {/* FOOTER (EVERY PAGE) */}
      <Footer />

    </div>
  );
}