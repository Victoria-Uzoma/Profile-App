import { Link } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <footer className="bg-[#08142B] text-[#F8FAFC] border-t border-[#1E3354]">

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 pb-14">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <p className="text-[#14B8A6] uppercase tracking-[0.25em] text-sm font-semibold mb-5">
              Victoria Paul
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-xl mb-5">
              Developer, designer, and
              <span className="text-[#3B82F6]"> problem solver.</span>
            </h2>

            <p className="text-[#94A3B8] leading-7 max-w-xl">
              I build digital experiences through code and design, while
              continuously expanding my technical skills and creative
              perspective.
            </p>

          </div>

          {/* NAVIGATION */}
          <div>
            <p className="text-[#94A3B8] uppercase tracking-[0.2em] text-sm font-semibold mb-5">
              Explore
            </p>

            <nav className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-[#CBD5E1] hover:text-[#14B8A6] transition-colors duration-300"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-[#CBD5E1] hover:text-[#14B8A6] transition-colors duration-300"
              >
                About
              </Link>

              <Link
                to="/projects"
                className="text-[#CBD5E1] hover:text-[#14B8A6] transition-colors duration-300"
              >
                Projects
              </Link>

              <Link
                to="/skills"
                className="text-[#CBD5E1] hover:text-[#14B8A6] transition-colors duration-300"
              >
                Skills
              </Link>

              <Link
                to="/Blog"
                className="text-[#CBD5E1] hover:text-[#14B8A6] transition-colors duration-300"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="text-[#CBD5E1] hover:text-[#14B8A6] transition-colors duration-300"
              >
                Contact
              </Link>

            </nav>
          </div>

        </div>

        {/* CTA */}
        <div className="border-y border-[#1E3354] py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          <div>
            <p className="text-xl font-semibold mb-2">
              Have a project in mind?
            </p>

            <p className="text-[#94A3B8]">
              Let&apos;s start a conversation.
            </p>
          </div>

          <WhatsAppButton />

        </div>

        {/* BOTTOM */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

          <p className="text-[#64748B]">
            © {new Date().getFullYear()} Victoria Paul. All rights reserved.
          </p>

          <p className="text-[#64748B]">
            Development • Design • Continuous Learning
          </p>

        </div>

      </div>

    </footer>
  );
}