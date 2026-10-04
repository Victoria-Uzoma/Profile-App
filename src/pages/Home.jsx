import { NavLink } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

import { projects, articles, skills } from "../data/data";
import SkillOrbit from "../components/SkillOrbit";

function Home() {
  const featuredProjects = projects.slice(0, 2);
  const latestArticles = articles.slice(0, 2);

  return (
    <div>

      {/* HERO */}
      <section className="hero-section">

        <div className="hero-content">

          <p className="eyebrow">DEVELOPER • DESIGNER • CREATIVE</p>

          <h1>
            Hi, I'm <span>Victoria Uzoma.</span>
          </h1>

          <h2>
            I build useful digital experiences through code and creativity.
          </h2>

          <p>
            I'm a developer and graphic designer focused on creating
            practical, thoughtful and user-friendly digital experiences.
          </p>

          <div className="hero-buttons">

            <NavLink to="/projects" className="primary-button">
              View Projects
              <ArrowRight size={18} />
            </NavLink>

            <NavLink to="/contact" className="secondary-button">
              Contact Me
            </NavLink>

          </div>

        </div>

      </section>


      {/* ABOUT PREVIEW */}
      <section className="page-section">

        <div className="page-header">

          <p className="eyebrow">ABOUT ME</p>

          <h2>
            A little about <span>me.</span>
          </h2>

          <p>
            I'm Victoria Uzoma, a developer and designer who enjoys
            learning, building and turning ideas into useful digital
            experiences.
          </p>

          <NavLink to="/about" className="section-link">
            Read More
            <ArrowRight size={17} />
          </NavLink>

        </div>

      </section>


      {/* SKILLS PREVIEW */}
      <section className="page-section">

        <div className="page-header">

          <p className="eyebrow">WHAT I WORK WITH</p>

          <h2>
            My <span>Skills.</span>
          </h2>

          <p>
            A growing collection of technologies and creative tools
            I use to build and design.
          </p>

        </div>

        <SkillOrbit skills={skills} />

        <div className="section-action">

          <NavLink to="/skills" className="section-link">
            View All Skills
            <ArrowRight size={17} />
          </NavLink>

        </div>

      </section>


      {/* FEATURED PROJECTS */}
      <section className="page-section">

        <div className="page-header">

          <p className="eyebrow">MY WORK</p>

          <h2>
            Featured <span>Projects.</span>
          </h2>

          <p>
            A few projects I've built while developing my skills.
          </p>

        </div>

        <div className="project-grid">

          {featuredProjects.map((project) => (

            <article
              className="project-card"
              key={project.title}
            >

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <p className="card-label">PROJECT</p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="technology-list">

                {project.technologies.map((technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                ))}

              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <ExternalLink size={16} />
              </a>

            </article>

          ))}

        </div>

        <div className="section-action">

          <NavLink to="/projects" className="section-link">
            View All Projects
            <ArrowRight size={17} />
          </NavLink>

        </div>

      </section>


      {/* LATEST BLOG */}
      <section className="page-section">

        <div className="page-header">

          <p className="eyebrow">FROM THE BLOG</p>

          <h2>
            Latest <span>Articles.</span>
          </h2>

          <p>
            Things I'm learning and documenting along my development journey.
          </p>

        </div>

        <div className="blog-grid">

          {latestArticles.map((article) => (

            <article
              className="blog-card"
              key={article.slug}
            >

              <p className="card-label">
                {article.category}
              </p>

              <h3>{article.title}</h3>

              <p>{article.excerpt}</p>

              <small>{article.date}</small>

              <NavLink to={`/blog/${article.slug}`}>
                Read Article
                <ArrowRight size={16} />
              </NavLink>

            </article>

          ))}

        </div>

        <div className="section-action">

          <NavLink to="/blog" className="section-link">
            Read Blog
            <ArrowRight size={17} />
          </NavLink>

        </div>

      </section>


      {/* CONTACT PREVIEW */}
      <section className="page-section contact-preview">

        <div className="page-header">

          <p className="eyebrow">LET'S CONNECT</p>

          <h2>
            Have an idea? <span>Let's work together.</span>
          </h2>

          <p>
            Have a project, opportunity or idea you'd like to discuss?
            I'd love to hear about it.
          </p>

          <NavLink to="/contact" className="primary-button">
            Contact Me
            <ArrowRight size={18} />
          </NavLink>

        </div>

      </section>

    </div>
  );
}

export default Home;