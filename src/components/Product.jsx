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
      className="border shadow-lg w-64 rounded-2xl flex flex-col justify-center 
    items-center p-4 hover:shadow-2xl hover:scale-110 bg-white
    transition-all duration-200"
    >
      <p className="text-lg font-bold">{post.title}</p>
      <p>{post.description}</p>
      <img src={post.image} className="h-28" />
      <div className="flex justify-between items-center">
        <p className="text-green-600 font-extrabold tracking-wide">{`$${post.price} `}</p>

        {cart.some((p) => p.id == post.id) ? (
          <button
            onClick={removeFromCart}
            className="py-1 px-4 border-black border-2 rounded-full uppercase"
          >
            Remove Item
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="py-1 px-4 border-black border-2 rounded-full uppercase"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
