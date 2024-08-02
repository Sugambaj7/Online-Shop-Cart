import React from "react";
import { Link } from "react-router-dom";
import { BsFillHandbagFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="nav-bar bg-black flex items-center justify-between h-16 pl-5 pr-5">
      <Link to="/">
        <h2 className="text-h2 text-white font-bold cursor-pointer">
          Electronic Shop
        </h2>
      </Link>

      <Link to="/cart">
        <div className="cart-bag flex">
          <BsFillHandbagFill className="text-white text-3xl" />
          <span className="bag-quantity text-black h-5 w-5 bg-green-300 flex items-center justify-center rounded-full ml-1">
            <span className="text-xs font-bold">3</span>
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;
