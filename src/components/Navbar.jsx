import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <nav className="bg-slate-900  w-full">
        <div className="flex justify-between items-center h-20 text-white max-w-[1080px] mx-auto">
          <NavLink to="/">
            <img className="w-32 mr-2 " src={logo} alt="" />
          </NavLink>

          <div className="flex justify-center items-center gap-5">
            <NavLink to="/">
              <p className="hover:text-green-500 cursor-pointer text-xl">Home</p>
            </NavLink>
            <NavLink to="/cart" className="relative">
              {cart.length > 0 && (
                <div className="absolute -top-1 -right-2 bg-green-600 w-5 h-5 text-white text-xs flex 
                justify-center items-center rounded-full animate-bounce">
                  {cart.length}
                </div>
              )}
              <FaShoppingCart className="hover:text-green-500 cursor-pointer text-2xl" />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
