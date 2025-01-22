import React from "react";

const SummeryItem = ({ item }) => {
  return (
    <div className="w-full flex gap-3 items-center mb-2">
      <div className="text-gray-500 font-bold">1.</div>
      <div className="w-full flex justify-between items-center">
        <div>
          <h3 className="text-red-800 font-bold">{item.name}</h3>
          <span className="text-gray-500 mr-2 text-sm">
            quantity: {item.amount},{" "}
          </span>
          <span className="text-gray-500 mr-2 text-sm">
            price: ${item.price}
          </span>
        </div>
      </div>
      <span className="text-red-800 font-bold">$54.00</span>
    </div>
  );
};

const CheckoutSummery = ({ items }) => {
  return (
    <>
      <h3 className="text-sm md:text-lg">Summery</h3>
      <div className="flex flex-col">
        {items.map((item) => (
          <SummeryItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default CheckoutSummery;
