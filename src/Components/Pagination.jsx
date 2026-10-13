import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages } =
    useContext(AppContext);

  if (!totalPages) return null;

  return (
    <footer className="fixed bottom-0 inset-x-0 z-50 border-t border-black bg-white px-5 py-3">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="rounded-lg border border-gray-400 px-5 py-2 text-base transition hover:bg-gray-100"
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="rounded-lg border border-gray-400 px-5 py-2 text-base transition hover:bg-gray-100"
            >
              Next
            </button>
          )}
        </div>

        <p className="shrink-0 text-sm font-bold text-black sm:text-base">
          Page {page} of {totalPages}
        </p>
      </div>
    </footer>
  );
}