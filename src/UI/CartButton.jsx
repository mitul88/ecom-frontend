import { useContext } from "react";
import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";

const CartButton = () => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <Link
      to="/cart"
      className="px-2 py-1 md:px-10 md:py-2 flex items-center justify-center gap-3 rounded-3xl text-white text-lg bg-red-950 font-bold"
    >
      <IoCartSharp size={20} />
      <span className="hidden md:block">Your Cart</span>
      <span className="px-4 py-2 rounded-full bg-red-900">
        {numberOfCartItems}
      </span>
    </Link>
  );
};

export default CartButton;
