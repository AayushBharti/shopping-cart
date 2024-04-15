import { FcDeleteDatabase } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = (prop) => {
  let item = prop.item;

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from Cart");
  };

  return (
    <>
      <div className="flex gap-10 p-4 pr-10 my-10">
        <img className="w-40 h-auto" src={item.image} />
        <div>
          <h2 className="font-bold text-slate-600 text-xl">{item.title}</h2>
          <h2 className="mt-4 text-slate-500 font-semibold">
            {item.description}
          </h2>
          <div className="flex justify-between mt-5">
            <p className="text-green-700 font-bold tracking-wide text-xl">
              ${item.price}
            </p>
            <div className=" bg-red-100 p-3 rounded-full flex mr-2">
              <FcDeleteDatabase className="text-2xl" onClick={removeFromCart} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] bg-slate-300 h-0.5 rounded-full "></div>
    </>
  );
};

export default CartItem;
