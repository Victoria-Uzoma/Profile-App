export default function About() {
  return (
    <section className="min-h-screen bg-[#08142B] text-[#F8FAFC] px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Intro */}
        <div className="max-w-4xl mb-20">
          <p className="text-[#14B8A6] uppercase tracking-[0.25em] font-semibold text-sm mb-5">
            About Me
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            I design, build, and develop
            <span className="text-[#3B82F6]"> digital products </span>
            from idea to implementation.
          </h1>

          <p className="text-[#94A3B8] text-lg md:text-xl leading-8 max-w-3xl">
            I'm Victoria Paul, a developer and graphic designer focused on
            building digital experiences that combine strong visual design
            with reliable technology.
          </p>
        </div>

        {/* Main About */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">

          {/* Who I Am */}
          <div className="lg:col-span-2 bg-[#0F1F38] border border-[#1E3354] rounded-2xl p-8 md:p-10">
            <p className="text-[#3B82F6] text-sm font-semibold uppercase tracking-wider mb-4">
              Who I Am
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              More than just writing code.
            </h2>

            <div className="space-y-5 text-[#94A3B8] leading-8">
              <p>
                I approach development from both a technical and creative
                perspective. I enjoy understanding how a product should work,
                how it should look, and how people should experience it.
              </p>

              <p>
                On the frontend, I work with technologies such as HTML, CSS,
                JavaScript, React, and Tailwind CSS to create responsive and
                interactive interfaces.
              </p>

              <p>
                On the backend, I work with technologies such as Node.js,
                Express, MongoDB, and Mongoose to build APIs, handle data,
                implement application logic, and connect the different parts
                of a web application.
              </p>

              <p>
                My graphic design background gives me another perspective.
                I understand visual hierarchy, typography, composition,
                branding, and the importance of communicating clearly through
                design.
              </p>
            </div>
          </div>

          {/* Focus */}
          <div className="bg-[#0F1F38] border border-[#1E3354] rounded-2xl p-8 md:p-10">
            <p className="text-[#14B8A6] text-sm font-semibold uppercase tracking-wider mb-6">
              My Focus
            </p>

            <div className="space-y-7">

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Frontend
                </h3>
                <p className="text-[#94A3B8] leading-7 text-sm">
                  Responsive interfaces, reusable components, interaction,
                  and user experience.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Backend
                </h3>
                <p className="text-[#94A3B8] leading-7 text-sm">
                  APIs, databases, server-side logic, authentication, and
                  application architecture.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Design
                </h3>
                <p className="text-[#94A3B8] leading-7 text-sm">
                  Visual systems, branding, typography, composition, and
                  digital communication.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* How I Work */}
        <div className="bg-[#0F1F38] border border-[#1E3354] rounded-2xl p-8 md:p-10 mb-8">

          <p className="text-[#3B82F6] text-sm font-semibold uppercase tracking-wider mb-4">
            How I Work
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            From problem to product.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <span className="text-[#14B8A6] text-sm font-semibold">
                01 — Understand
              </span>

              <h3 className="text-xl font-semibold mt-3 mb-3">
                Understand the problem
              </h3>

              <p className="text-[#94A3B8] leading-7">
                I start by understanding the goal, the users, and the
                requirements before deciding how to approach the solution.
              </p>
            </div>

            <div>
              <span className="text-[#14B8A6] text-sm font-semibold">
                02 — Design
              </span>

              <h3 className="text-xl font-semibold mt-3 mb-3">
                Design the experience
              </h3>

              <p className="text-[#94A3B8] leading-7">
                I think through structure, visual hierarchy, usability, and
                how the different parts of the product should work together.
              </p>
            </div>

            <div>
              <span className="text-[#14B8A6] text-sm font-semibold">
                03 — Build
              </span>

              <h3 className="text-xl font-semibold mt-3 mb-3">
                Build the solution
              </h3>

              <p className="text-[#94A3B8] leading-7">
                I turn the solution into a working product using the
                appropriate frontend, backend, and design tools.
              </p>
            </div>

          </div>
        </div>

        {/* Technology & Tools */}
<div className="bg-[#0F1F38] border border-[#1E3354] rounded-2xl p-8 md:p-10">

  <p className="text-[#14B8A6] text-sm font-semibold uppercase tracking-wider mb-6">
    Technology & Tools
  </p>

  <div className="flex flex-wrap gap-3">

    {[
      // Frontend
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "React Router",
      "Tailwind CSS",
      "Responsive Design",

      // Backend
      "Node.js",
      "Express.js",
      "REST APIs",
      "API Development",

      // Databases
      "MongoDB",
      "Mongoose",
      "SQL",
      "MySQL",

      // Programming
      "C++",

      // Development Tools
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "NPM",
      "Vite",

      // Design
      "CorelDRAW",
      "Adobe Photoshop",
      "Canva",

      // Concepts
      "CRUD",
      "Authentication",
      "Database Design",
      "Error Handling",
      "Routing",
      "Middleware",
      "JSON",
      "HTTP",
    ].map((skill) => (
      <span
        key={skill}
        className="px-4 py-2 rounded-full bg-[#08142B] border border-[#1E3354] text-[#CBD5E1] text-sm hover:border-[#3B82F6] hover:text-white transition"
      >
        {skill}
      </span>
    ))}

  </div>

</div>

      </div>
    </section>
  );
}