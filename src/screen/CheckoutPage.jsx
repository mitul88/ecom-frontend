import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutSummery from "../components/CheckoutSummery";
import CartContext from "../store/cart-context";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const items = cartCtx.items;

  return (
    <div className="min-h-[calc(100vh-9.25rem)] pt-5">
      <div className="w-96 md:w-1/2 min-h-[calc(100vh-9.5rem)] bg-white p-5 mx-auto flex flex-col justify-between">
        <h2 className="text-xl text-red-950 font-bold bg-gray-100 p-2 mb-2">
          Checkout
        </h2>
        {/* top part */}
        <form action="">
          <div className="w-full flex flex-col md:flex-row  gap-5 md:gap-2">
            <div className="w-full md:w-1/2 px-5 flex flex-col justify-center">
              <div className="flex flex-col ">
                <label htmlFor="name" className="text-gray-500">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-400 bg-gray-50 px-1 text-gray-440"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-500">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-400 bg-gray-50  px-1 text-gray-440"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-500">
                  email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full border border-gray-400 bg-gray-50 px-1 text-gray-440"
                />
              </div>
              <h4 className="text-center">or</h4>
              <button className="bg-green-500 text-white rounded-lg font-bold px-2 py-1 w-full">
                Login
              </button>
            </div>
            <div className="w-full md:w-1/2  p-2 bg-gray-100  md:rounded-lg">
              <CheckoutSummery items={items} />
            </div>
          </div>

          {/* payment method */}
          <div className="p-1 border border-gray-200 my-2">
            <div className="w-full p-2 md:p-3 flex flex-col">
              <h3 className="text-xs md:text-xl text-red-900 font-bold">
                Payment Method:
              </h3>
              <div className="w-full flex gap-2 p-3">
                <div className="w-1/2 flex gap-3 items-center justify-center">
                  <label htmlFor="cash" className="font-bold text-red-800 ">
                    Cash:
                  </label>
                  <input
                    type="radio"
                    id="cash"
                    value="cash"
                    name="payment_method"
                  />
                </div>
                <div className="w-1/2 flex gap-3 items-center justify-center">
                  <label htmlFor="card">Card:</label>
                  <input
                    type="radio"
                    id="card"
                    value="card"
                    name="payment_method"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* buttons and total amount */}
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
                Back
              </Link>
              <Link
                to="/cart/checkout"
                className="px-2 py-1 bg-green-500 border border-green-500 text-white rounded-2xl"
              >
                Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
