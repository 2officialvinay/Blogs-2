import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";
import Header from "../Components/Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <Blogs />
        <Pagination />
      </main>
    </div>
  );
};

export default Home;