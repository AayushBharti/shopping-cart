import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = (prop) => {
  const post = prop.post;

  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div
      className="border shadow-lg rounded-2xl flex flex-col justify-center 
    items-center p-4 hover:shadow-2xl hover:scale-110 bg-white
    transition-all duration-200 ease-in group"
    >
      <p className="text-lg font-semibold text-gray-700 truncate w-40 mt-1">
        {post.title}
      </p>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
        {post.description.split(" ").slice(0, 10).join(" ") + "..."}
      </p>
      <img src={post.image} className="h-[150px] my-2" />
      <div className="flex justify-between items-center w-full mt-5 ">
        <p className="text-green-600 font-bold tracking-wide">
          {`$${post.price} `}
        </p>

        {cart.some((p) => p.id == post.id) ? (
          <button
            onClick={removeFromCart}
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
            text-[12px] p-1 px-3 uppercase group-hover:bg-gray-700 group-hover:text-white
            transition duration-300 ease-in"
          >
            Remove Item
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
            text-[12px] py-1 px-3 uppercase group-hover:bg-gray-700 group-hover:text-white
            transition duration-300 ease-in"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
