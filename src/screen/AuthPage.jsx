import React from "react";
import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";
import { setAccessToken } from "../util/auth";
import { BASE_URL } from "../util/http";

const AuthPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-600">
      <AuthForm />
      <Link
        to="/"
        className="text-white font-bold border border-white px-2 py-1 rounded mt-2"
      >
        Go to home
      </Link>
    </div>
  );
};

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "register") {
    throw JSON.stringify({ message: "Unsupported mode", status: 422 });
  }

  const data = await request.formData();
  console.log(data);

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  if (mode === "register") {
    authData.name = data.get("name");
  }

  const response = await fetch(`${BASE_URL}/v1/api/auth/${mode}`, {
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
      message: "Could not authenticate user, Please try again later",
      status: 500,
    });
  }

  const resData = await response.json();
  const token = resData.token;

  setAccessToken(token);
  window.location.href = "/";
  return;
};

export default AuthPage;
