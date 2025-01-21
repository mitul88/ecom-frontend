import React from "react";
import { FaPlus } from "react-icons/fa";

const AddToCartBtn = () => {
  const addToCartHandler = () => {
    console.log("clicked");
  };
  return (
    <button
      onClick={addToCartHandler}
      className="px-3 py-1 w-20 md:w-32 bg-red-900 text-xs md:text-lg text-white flex gap-3 items-center justify-center rounded-3xl"
    >
      <FaPlus /> <span>Add</span>
    </button>
  );
};

export default AddToCartBtn;
