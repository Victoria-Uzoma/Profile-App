import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SkillsValue from "./components/SkillsValue";
import Blog from "./Blog/Blog";
import Article from "./Blog/articles/Article";
export default function App() {
  return (
    <div className="bg-[#0b1b3a] min-h-screen text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<SkillsValue />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog/:slug" element={<Article />} />
      </Routes>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};