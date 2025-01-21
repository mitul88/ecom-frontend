import React from "react";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

const MasterLayout = () => {
  return (
    <div className="w-full-min-h-screen">
      <Topbar />
      <div className="w-full bg-gray-800">
        <Outlet />
      </div>
    </div>
  );
};

export default MasterLayout;
