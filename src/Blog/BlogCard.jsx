import { NavLink } from "react-router-dom";
import blogs from "./BlogData";

export default function Blog() {
  return (
    <section className="min-h-screen bg-[#08142B] text-[#F8FAFC] px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Blog Header */}
        <div className="text-center mb-16">
          <p className="text-[#14B8A6] font-semibold uppercase tracking-widest mb-3">
            My Blog
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Thoughts, Lessons & Ideas
          </h1>

          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            I share what I'm learning about web development, design,
            technology, and my journey as a developer.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="bg-[#0F1F38] rounded-2xl overflow-hidden border border-[#1E3354] hover:border-[#3B82F6] transition"
            >

              {/* Image Area */}
              <div className="h-48 bg-[#0B1B32] flex items-center justify-center">
                <span className="text-[#94A3B8]">
                  Blog Image
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6">

                <p className="text-[#14B8A6] text-sm mb-2">
                  {blog.category}
                </p>

                <h2 className="text-xl font-bold mb-3">
                  {blog.title}
                </h2>

                <p className="text-[#94A3B8] text-sm mb-5">
                  {blog.content[0]}
                </p>

                <NavLink
                  to={`/blog/${blog.slug}`}
                  className="text-[#3B82F6] font-semibold hover:text-[#14B8A6]"
                >
                  Read More →
                </NavLink>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}