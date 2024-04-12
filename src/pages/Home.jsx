import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    } catch (error) {
      console.log("error in fetching");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div
      className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
    lg:grid-cols-4 max-w-[1080px] p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]"
    >
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        posts.map((post) => <Product key={posts.id} post={post} />)
      ) : (
        <div className="flex justify-center items-center">
          No Post Available
        </div>
      )}
    </div>
  );
};

export default Home;
