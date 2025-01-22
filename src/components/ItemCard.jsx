import React, { useContext } from "react";
import AddToCartBtn from "../UI/AddToCartBtn";
import CartContext from "../store/cart-context";

const ItemCard = ({ item }) => {
  const cartCtx = useContext(CartContext);
  // const price = `$${item.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      amount: amount,
      price: item.price,
    });
  };
  return (
    <div className="w-full p-2 md:p-3 flex flex-col justify-between gap-3">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-black text-xs md:text-lg font-bold">
            {item.name}
          </h3>
          <p className="text-gray-600 text-xs md:text-lg italic">
            {item.description}
          </p>
          <span className="text-red-900 text-xs md:text-lg font-bold">
            ${item.price}
          </span>
        </div>
        <div>
          <AddToCartBtn addToCartHandler={addToCartHandler} />
        </div>
      </div>
      <hr className="w-full border border-gray-400" />
    </div>
  );
};

export default ItemCard;
