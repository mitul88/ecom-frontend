import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "./layout/MasterLayout";
import HomePage from "./screen/HomePage";
import CartPage from "./screen/CartPage";
import CheckoutPage from "./screen/CheckoutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<h3>Loading...</h3>}>
        <MasterLayout />
      </Suspense>
    ),
    errorElement: <h2>Error Loading page</h2>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: "/cart/checkout",
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <CheckoutPage />
          </Suspense>
        ),
      },
    ],
  },
]);
