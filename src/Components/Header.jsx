import { useContext } from "react";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-black bg-white px-4 py-4 shadow-md">
      <h1 className="text-center text-3xl font-bold uppercase text-black sm:text-4xl">
        BLOGS
      </h1>
    </header>
  );
}