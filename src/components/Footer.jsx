import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      {/* BRAND / LOGO */}
      <div>
        <NavLink
          to="/"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5A1F2B] font-bold text-[#F3EBDD]"
          aria-label="Go to homepage"
        >
          VU
        </NavLink>

        <h3>Victoria Uzoma</h3>

        <p>
          Building useful digital experiences through code and creativity.
        </p>
      </div>

      {/* SOCIAL LINKS */}
      <div className="footer-links">

        <a
          href="https://github.com/Victoria-Uzoma"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://linkedin.com/in/victoria-uzoma-b76274433"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>

        <a
          href="mailto:vuzoma140@gmail.com"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>

      </div>

      {/* COPYRIGHT */}
      <p className="copyright">
        © 2026 Victoria Uzoma. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;