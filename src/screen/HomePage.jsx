import React from "react";
import ItemCard from "../components/ItemCard";

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)]">
      <div
        className="w-full h-80 bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: 'url("/images/food-home-img.jpg")' }}
      >
        <div className="z-10 flex flex-col gap-5 min-w-56 bg-gray-800 rounded-xl p-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-3xl text-white text-center font-bold uppercase">
            Delicious food at your doorstep
          </h3>
          <div>
            <p className="text-sm text-white text-center max-w-96 mx-auto italic mb-2">
              Choose your favorite meal from our broad selection of available
              meals and enjoy a delicious lunch or dinner at home.
            </p>
            <p className="text-sm text-white text-center max-w-96 mx-auto italic">
              All our meals are cooked with high-quality ingredients,
              just-in-time and of course by experienced chefs!
            </p>
          </div>
        </div>

        <div className="absolute top-0 bottom-0 left-0 w-full p-5 bg-white bg-opacity-30"></div>
      </div>

      {/* menu item show */}
      <div className="px-5 md:px-32 lg:px-72 mt-5 md:mt-10">
        <div className="bg-white rounded-lg p-2 md:p-5">
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
