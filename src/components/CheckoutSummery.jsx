import React from "react";

const SummeryItem = () => {
  return (
    <div className="w-full flex gap-3 items-center mb-2">
      <div className="text-gray-500 font-bold">1.</div>
      <div className="w-full flex justify-between items-center">
        <div>
          <h3 className="text-red-800 font-bold">Burger</h3>
          <span className="text-gray-500 mr-2 text-sm">quantity: 2, </span>
          <span className="text-gray-500 mr-2 text-sm">price: 23.00</span>
        </div>
      </div>
      <span className="text-red-800 font-bold">$54.00</span>
    </div>
  );
};

const CheckoutSummery = () => {
  return (
    <>
      <h3 className="text-sm md:text-lg">Summery</h3>
      <div className="flex flex-col">
        <SummeryItem />
        <SummeryItem />
        <SummeryItem />
        <SummeryItem />
        <SummeryItem />
        <SummeryItem />
      </div>
    </>
  );
};

export default CheckoutSummery;
