import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import { useNavigate, Link } from "react-router-dom";
import CartContext from "../store/cart-context";

const CartPage = () => {
  const navigate = useNavigate();
  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <div className="min-h-[calc(100vh-9.25rem)] pt-5">
      <div className="w-96 md:w-1/3 min-h-[calc(100vh-9.5rem)] bg-white p-5 mx-auto flex flex-col justify-between">
        <div>
          <h2 className="text-xl text-red-950 font-bold bg-gray-100 p-2 mb-2">
            Cart
          </h2>
          <div className="w-full flex flex-col items-start">
            {cartCtx.items.length === 0 && (
              <h3 className="text-center text-lg font-bold text-red-800">
                Your cart is empty
              </h3>
            )}
            {cartCtx.items.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onAdd={() => cartItemAddHandler(item)}
                onRemove={() => cartItemRemoveHandler(item.id)}
              />
            ))}
          </div>
        </div>

        <div className="bg-gray-100 p-1">
          <div className="w-full p-2 md:p-3 flex items-center justify-between">
            <h3 className="text-xs md:text-xl text-red-900 font-bold">
              Total Amount:
            </h3>
            <span className="text-lg md:text-3xl text-red-900 font-bold">
              ${totalAmount}
            </span>
          </div>
          <div className="w-full flex justify-end my-2">
            <div className="flex gap-2">
              <Link
                to={".."}
                onClick={(e) => goBack(e)}
                className="px-2 py-1 text-red-900 border border-red-900 rounded-2xl"
              >
                Go back
              </Link>
              {cartCtx.items.length > 0 && (
                <Link
                  to="/cart/checkout"
                  className="px-2 py-1 bg-red-900 border border-red-900 text-white rounded-2xl"
                >
                  Checkout
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
