import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
          href="mailto:vuzoma140@gmail.com"
          className="contact-card"
        >
          <Mail size={25} />

          <span>Email</span>

          <strong>vuzoma140@gmail.com</strong>
        </a>

        <a
          href="https://linkedin.com/in/victoria-uzoma-b76274433"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaLinkedin size={25} />

          <span>LinkedIn</span>

          <strong>Connect with me</strong>
        </a>

        <a
          href="https://github.com/Victoria-Uzoma"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaGithub size={25} />

          <span>GitHub</span>

          <strong>View my code</strong>
        </a>

      </div>

    </section>
  );
}

export default Contact;