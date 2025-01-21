import React from "react";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="w-full bg-gray-800 p-5 text-center text-white font-bold">
      Copyright {year}
    </div>
  );
};

export default Footer;
