import React from "react";
import CartButton from "../UI/CartButton";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <header className="w-full h-20 px-10 py-3 flex items-center justify-between bg-red-900 ">
      <h1 className="text-white text-md md:text-3xl">Food Shop</h1>
      <div className="flex items-center gap-5">
        <span className="text-white text-xs md:text-sm font-bold">
          Welcome, User
        </span>
        <Link
          to="/auth?mode=login"
          className="px-3 py-1 text-white font-semibold bg-green-600 rounded"
        >
          Login
        </Link>
        <CartButton />
      </div>
    </header>
  );
};

export default Topbar;
