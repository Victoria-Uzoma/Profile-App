import { projects } from "../data/data";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section className="page-section">

      <div className="page-header">
        <p className="eyebrow">MY WORK</p>

        <h1>
          Projects I've <span>built.</span>
        </h1>

        <p>
          A collection of projects I've created while learning and
          developing my skills.
        </p>
      </div>

      <div className="project-grid full-grid">

        {projects.map((project) => (
          <article className="project-card" key={project.title}>

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <p className="card-label">PROJECT</p>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="technology-list">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="project-links">

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                Live Project
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={16} />
                GitHub
              </a>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Projects;