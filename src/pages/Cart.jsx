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
        <div>
          <div>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div>
            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>Total Item: {cart.length}</p>
            </div>
            <div>
              <span>Total Amount: ${totalAmount}</span>
              <button>Checkout Now</button>
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
