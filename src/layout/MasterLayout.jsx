import React from "react";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { removeAccessToken } from "../util/auth";

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

export const action = async ({ request }) => {
  const data = await request.formData();
  console.log(data);

  const authData = {
    id: data.get("id"),
  };

  const response = await fetch(`http://localhost:5000/v1/api/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (
    response.status === 422 ||
    response.status === 401 ||
    response.status === 400
  ) {
    return response;
  }

  if (!response.ok) {
    throw JSON.stringify({
      message: "Could not logout user, Please try again later",
      status: 500,
    });
  }

  removeAccessToken();
  return;
};
export default MasterLayout;
