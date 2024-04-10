import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-black  w-full">
        <div className="flex justify-between items-center text-white max-w-[1080px] mx-auto">
          <NavLink to="/">
            <img className="w-28 p-2 mr-2" src={logo} alt="" />
          </NavLink>

          <div className="flex justify-center items-center gap-5">
            <NavLink to="/">
              <p className="hover:text-green-500 cursor-pointer ">Home</p>
            </NavLink>
            <NavLink to="/cart">
              <FaShoppingCart className="hover:text-green-500 cursor-pointer" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
