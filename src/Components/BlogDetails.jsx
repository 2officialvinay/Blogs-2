import { NavLink } from "react-router";

const BlogDetails = ({ post }) => {
  return (
    <article className="mb-8">
      <NavLink
        to={`/blog/${post.id}`}
        className="mb-2 block text-xl font-bold text-black hover:text-blue-700"
      >
        {post.title}
      </NavLink>

      <p className="mb-1 text-base text-black">
        By <span className="italic">{post.author}</span> on{" "}
        <NavLink
          to={`/categories/${post.category.replaceAll(" ", "-")}`}
          className="font-bold underline hover:text-blue-700"
        >
          {post.category}
        </NavLink>
      </p>

      <p className="mb-4 text-base text-black">
        Posted on {post.date}
      </p>

      <p className="mb-3 text-base leading-7 text-gray-900">
        {post.content}
      </p>

      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {post.tags.map((tag, index) => (
          <NavLink
            key={index}
            to={`/tags/${tag.replaceAll(" ", "-")}`}
            className="text-sm font-semibold text-blue-600 underline hover:text-blue-800"
          >
            #{tag}
          </NavLink>
        ))}
      </div>
    </article>
  );
};

export default BlogDetails;