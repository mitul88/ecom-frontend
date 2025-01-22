import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const CartItem = ({ name, amount, price, onAdd, onRemove }) => {
  return (
    <div className="w-full p-2 md:p-3 flex flex-col justify-between gap-3">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-black text-xs md:text-sm font-bold">{name}</h3>
          <span className="text-red-900 text-xs md:text-lg font-bold">
            ${price}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onAdd}
            className="p-1 border border-red-800 bg-white text-red-800 rounded"
          >
            <FaPlus />
          </button>
          <span>{amount}</span>
          <button
            onClick={onRemove}
            className="p-1 border border-red-800 bg-white text-red-800 rounded"
          >
            <FaMinus />
          </button>
        </div>
      </div>
      <hr className="w-full border border-gray-400" />
    </div>
  );
};

export default CartItem;
