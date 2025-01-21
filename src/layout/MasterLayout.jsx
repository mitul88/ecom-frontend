import React from "react";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

const MasterLayout = () => {
  return (
    <div className="w-full-min-h-screen">
      <Topbar />
      <div className="w-full bg-gray-700 pb-5">
        <Outlet />
      </div>
      <div className="w-full bg-gray-800 p-5 text-center text-white font-bold">
        Copyright 2024
      </div>
    </div>
  );
};

export default MasterLayout;
