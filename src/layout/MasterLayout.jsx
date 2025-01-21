import React from "react";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MasterLayout = () => {
  return (
    <div className="w-full-min-h-screen">
      <Topbar />
      <div className="w-full bg-gray-700 pb-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MasterLayout;
