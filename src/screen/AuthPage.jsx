import React from "react";
import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";

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

export default AuthPage;
