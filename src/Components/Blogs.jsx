import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-y-8 px-5 pb-24 pt-28">
      {loading ? (
        <div className="flex min-h-[60vh] w-full items-center justify-center">
          <p className="text-center text-2xl font-bold">
            Loading...
          </p>
        </div>
      ) : posts.length === 0 ? (
        <div className="flex min-h-[60vh] w-full items-center justify-center">
          <p className="text-center text-2xl font-bold">
            No Blogs Found!
          </p>
        </div>
      ) : (
        posts.map((post) => (
          <BlogDetails key={post.id} post={post} />
        ))
      )}
    </div>
  );
}