import { useParams } from "react-router-dom";
import blogs from "../BlogData";

export default function Article() {
  const { slug } = useParams();

  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    return (
      <section className="min-h-screen bg-slate-950 text-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Article Not Found
          </h1>

          <p className="text-gray-400">
            Sorry, we couldn't find the article you're looking for.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <p className="text-blue-400 font-semibold uppercase tracking-widest mb-4">
          {blog.category}
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {blog.title}
        </h1>

        <p className="text-gray-400 mb-10">
          Published {blog.date}
        </p>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

          {blog.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-300 leading-8 mb-6"
            >
              {paragraph}
            </p>
          ))}

        </div>

      </div>
    </section>
  );
}