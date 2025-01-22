import React from "react";
import CartButton from "../UI/CartButton";
import { Form, Link, useActionData, useLoaderData } from "react-router-dom";
import { MdLogout } from "react-icons/md";

const Topbar = () => {
  const data = useLoaderData("root");
  useActionData();

  return (
    <header className="w-full h-20 px-10 py-3 flex items-center justify-between bg-red-900 ">
      <h1 className="text-white text-md md:text-3xl">Food Shop</h1>
      <div className="flex items-center gap-5">
        {data && (
          <span className="hidden  text-white text-xs md:text-sm font-bold md:flex gap-1">
            <span className="hidden md:block"> Welcome,</span> {data.name}
          </span>
        )}
        {!data ? (
          <Link
            to="/auth?mode=login"
            className="px-3 py-1 text-white font-semibold bg-green-600 rounded"
          >
            Login
          </Link>
        ) : (
          <>
            <Form method="post">
              <input type="text" className="hidden" name="id" value={data.id} />
              <button className="px-2 md:px-3 py-2 md:py-1 text-white font-semibold bg-red-600 rounded-full md:rounded flex gap-1">
                <span>
                  <MdLogout size={25} />
                </span>
                <span className="hidden md:block">Logout</span>
              </button>
            </Form>
          </>
        )}
        <CartButton />
      </div>
    </header>
  );
};

export default Topbar;
