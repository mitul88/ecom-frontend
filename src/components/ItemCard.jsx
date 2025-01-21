import React from "react";
import AddToCartBtn from "../UI/AddToCartBtn";

const ItemCard = () => {
  return (
    <div className="w-full p-2 md:p-3 flex flex-col justify-between gap-3">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-black text-xs md:text-lg font-bold">
            Hilsha Fry
          </h3>
          <p className="text-gray-600 text-xs md:text-lg italic">
            Our national fish and with eggs fried
          </p>
          <span className="text-red-900 text-xs md:text-lg font-bold">
            $22.50
          </span>
        </div>
        <div>
          <AddToCartBtn />
        </div>
      </div>
      <hr className="w-full border border-gray-400" />
    </div>
  );
};

export default ItemCard;
