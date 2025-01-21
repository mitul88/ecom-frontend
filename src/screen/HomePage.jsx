import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)]">
      <div
        className="w-full h-80 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/food-home-img.jpg")' }}
      ></div>
    </div>
  );
};

export default HomePage;
