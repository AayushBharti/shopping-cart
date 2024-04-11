import { FcDeleteDatabase } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from Cart");
  };

  return (
    <div>
      <div>
        <img src={item.image} alt="" />
        <div>
          <h2>{item.title}</h2>
          <h2>{item.description}</h2>
          <div>
            <p>{item.price}</p>
            <FcDeleteDatabase onClick={removeFromCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
