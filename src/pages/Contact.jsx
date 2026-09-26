import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="page-section contact-page">

      <div className="page-header">
        <p className="eyebrow">CONTACT</p>

        <h1>
          Let's build something <span>useful.</span>
        </h1>

        <p>
          Have a project, opportunity or idea you'd like to discuss?
        </p>
      </div>

      <div className="contact-grid">

        <a
          href="mailto:your@email.com"
          className="contact-card"
        >
          <Mail size={25} />

          <span>Email</span>

          <strong>your@email.com</strong>
        </a>

        <a href="#" className="contact-card">
          <FaLinkedin size={25} />

          <span>LinkedIn</span>

          <strong>Connect with me</strong>
        </a>

        <a href="#" className="contact-card">
          <FaGithub size={25} />

          <span>GitHub</span>

          <strong>View my code</strong>
        </a>

      </div>

    </section>
  );
}

export default Contact;