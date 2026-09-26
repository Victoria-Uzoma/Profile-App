import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { articles } from "../data/data";

function BlogPost() {
  const { slug } = useParams();

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return (
      <section className="page-section">
        <h1>Article not found.</h1>

        <Link to="/blog" className="text-link">
          <ArrowLeft size={17} />
          Back to blog
        </Link>
      </section>
    );
  }

  return (
    <article className="article-page">

      <Link to="/blog" className="back-link">
        <ArrowLeft size={17} />
        Back to blog
      </Link>

      <p className="eyebrow">
        {article.category}
      </p>

      <h1>{article.title}</h1>

      <p className="article-date">
        {article.date}
      </p>

      <div className="article-content">

        <p>
          This is where the full article will live.
          You can replace this content with your actual blog post.
        </p>

        <p>
          Writing about what you're learning is a great way to
          document your development journey and make your knowledge
          easier to revisit later.
        </p>

        <p>
          As you build more projects, you can turn your experiences,
          mistakes and discoveries into articles here.
        </p>

      </div>

    </article>
  );
}

export default BlogPost;