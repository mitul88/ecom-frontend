import React from "react";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="w-full h-12 flex flex-col items-center justify-center bg-gray-800 p-1 text-center text-white font-bold">
      Copyright {year}
    </div>
  );
};

export default Footer;
