import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    //reduce(callbackfn,initialVal)
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex max-w-[1080px] mx-auto">
          <div className="w-[65%]">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="py-12 flex flex-col justify-between h-screen fix">
            <div>
              <div className="uppercase text-lg text-green-700 font-bold">
                Your Cart
              </div>
              <div className="uppercase text-3xl tracking-wider text-green-700 font-bold">
                Summary
              </div>
              <p className="mt-4 text-gray-900 font-semibold tracking-wide">
                Total Items: {cart.length}
              </p>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-900 font-semibold tracking-wide">
                Total Amount: <span className="font-extrabold">${totalAmount}</span>
              </span>
              <button
                className="tracking-wider font-extrabold mt-4
              bg-green-700 text-white  px-24 w-full py-3 rounded-lg"
              >
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Your cart is empty!</p>
          <NavLink to="/">
            <button className="">SHOP NOW</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
