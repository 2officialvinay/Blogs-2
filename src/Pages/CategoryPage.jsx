import { useLocation, useNavigate } from "react-router";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";
import Header from "../Components/Header";

const CategoryPage = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const category = location.pathname.split("/").at(-1);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <main>
        <div className="mx-auto w-full max-w-3xl px-5 pt-24">
          <button
            onClick={() => navigation(-1)}
            className="mb-4 rounded-lg border border-gray-400 px-4 py-2 text-sm transition hover:bg-gray-100"
          >
            ← Back
          </button>

          <h2 className="mb-2 text-2xl font-bold">
            Blogs On{" "}
            <span className="text-blue-600">
              {category.replaceAll("-", " ")}
            </span>
          </h2>

          <div className="mb-4 border-b border-gray-200" />
        </div>

        <Blogs />
        <Pagination />
      </main>
    </div>
  );
};

export default CategoryPage;