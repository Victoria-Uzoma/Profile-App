import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { articles } from "../data/data";

function Blog() {
  return (
    <section className="page-section">

      <div className="page-header">
        <p className="eyebrow">THE BLOG</p>

        <h1>
          Learning in <span>public.</span>
        </h1>

        <p>
          Notes, lessons and thoughts from my journey through technology.
        </p>
      </div>

      <div className="blog-grid">

        {articles.map((article) => (
          <article className="blog-card" key={article.slug}>

            <p className="card-label">
              {article.category}
            </p>

            <h2>{article.title}</h2>

            <p>{article.excerpt}</p>

            <small>{article.date}</small>

            <Link
              to={`/blog/${article.slug}`}
              className="text-link"
            >
              Read article
              <ArrowRight size={16} />
            </Link>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Blog;