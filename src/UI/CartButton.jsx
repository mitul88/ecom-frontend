import { IoCartSharp } from "react-icons/io5";

const CartButton = () => {
  return (
    <button className="px-10 py-2 flex items-center justify-center gap-3 rounded-3xl text-white text-lg bg-red-950 font-bold">
      <IoCartSharp size={20} /> <span>Your Cart</span>
      <span className="px-4 py-2 rounded-full bg-red-900">0</span>
    </button>
  );
};

export default CartButton;
