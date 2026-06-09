export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React.",
      tech: "React + Tailwind",
    },
    {
      title: "Business Landing Page",
      description: "Modern landing page for a digital business brand.",
      tech: "React + CSS",
    },
    {
      title: "UI Design Concept",
      description: "Graphic design and UI mockup for mobile app.",
      tech: "Figma + Photoshop",
    },
  ];

  return (
    <div className="min-h-[70vh] px-6 py-10 flex flex-col items-center">

      <h2 className="text-white text-4xl font-bold mb-10">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#112a55] p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300 border border-gray-700"
          >
            <h3 className="text-white text-xl font-bold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4">
              {project.description}
            </p>

            <span className="text-blue-400 font-semibold">
              {project.tech}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}